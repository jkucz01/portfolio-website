/******************************************************************************
* File Name:   main.c
*
* Description: This is the source code used for robotic arm project for ME 135
* and ME 102B.
*
*******************************************************************************/

//cyhal_adc_t

//cyhal_adc_channel_t
//cyhal_adc_init
//cyhal_adc_channel_config_t
//cyhal_adc_channel_init_diff

#include "cy_pdl.h"
#include "cyhal.h"
#include "cybsp.h"
#include "cy_retarget_io.h"
#include <stdio.h>
#include <stdlib.h>


/*Weiping added start*/
#include "resource_map.h"
/*Weiping added end*/
/*******************************************************************************
* Macros
*******************************************************************************/
/* LED blink timer clock value in Hz  */
#define twenty_ms_TIMER_CLOCK_HZ          (500000)

/* LED blink timer period value */
#define twenty_ms_TIMER_PERIOD            (20000)

/* PWM Frequency = 50Hz */
#define PWM_FREQUENCY (50u)




/*Weiping added start*/
#define CMD_TO_CMD_DELAY        (800UL)
//#define CMD_TO_CMD_DELAY        (50UL)
/*this is the frequency of reading*/



/* I2C slave address to communicate with */

#define LSM6DSO_ADDR				(0x6AUL)
#define LSM6DSO_ADDR2				(0x6BUL)
//#define LSM6DSO_ADDR				(0x69UL)

/* I2C bus frequency */
#define I2C_FREQ                (1000000UL)

/* I2C slave interrupt priority */
#define I2C_SLAVE_IRQ_PRIORITY  (7u)


/* Buffer and packet size */
#define PACKET_SIZE             (6UL)

/*Weiping added end*/



/*******************************************************************************
* Function Prototypes
*******************************************************************************/
void timer_init(void);
void servos_init(void);
uint16_t calculate_compare(int32_t adc_val, double k_value, double b_value);

/*Weiping added start*/
int calculate_compare_IMU(int i2c_val, double k_value, double b_value);
/*Weiping added end*/


static void isr_timer(void *callback_arg, cyhal_timer_event_t event);
static void UPDATE_servo_0_HANDLER(void);
static void UPDATE_servo_1_HANDLER(void);
static void UPDATE_servo_2_HANDLER(void);
static void UPDATE_servo_3_HANDLER(void);



/*Weiping added start*/
void handle_error(void)
{
     /* Disable all interrupts. */
    __disable_irq();

    CY_ASSERT(0);
}
/*Weiping added end*/


/*******************************************************************************
* Global Variables
*******************************************************************************/

bool twenty_ms_active_flag = true;
bool adc_flag = false;

/* Variable for storing character read from terminal */
uint8_t uart_read_value;
uint16_t servo_0_pos = 900;
uint16_t servo_1_pos = 2500;
uint16_t servo_2_pos = 1800;
uint16_t servo_3_pos = 1200;


/*Weiping added start*/
/*working range of servo motor */

double wrist_low_pos=2.8;
double wrist_high_pos=7.5;
double elbow_low_pos=4.6;
double elbow_high_pos=7.5;
double claw_closed_pos=4.3;
double claw_open_pos=8;
double base_CW_pos=3;
double base_CCW_pos=12;

/*Weiping added end*/




/* Timer object used Sampling */
cyhal_timer_t twenty_ms_timer;




double pwm_duty_cycle;

cy_stc_sysint_t Isr_Trigger_config0 = {
 .intrSrc = (IRQn_Type) servo_0_IRQ,
 .intrPriority = 7u
};
cy_stc_sysint_t Isr_Trigger_config1 = {
 .intrSrc = (IRQn_Type) servo_1_IRQ,
 .intrPriority = 7u
};
cy_stc_sysint_t Isr_Trigger_config2 = {
 .intrSrc = (IRQn_Type) servo_2_IRQ,
 .intrPriority = 7u
};
cy_stc_sysint_t Isr_Trigger_config3 = {
 .intrSrc = (IRQn_Type) servo_3_IRQ,
 .intrPriority = 7u
};


/*******************************************************************************
* Function Name: main
********************************************************************************
* Summary:
*
*
* Parameters:
*  none
*
* Return:
*  int
*
*******************************************************************************/
int main(void)
{
	/* Main function variables */
	bool v_low_change=false;
	bool v_high_change=false;
	bool v_low_change_1=false;
	bool v_high_change_1=false;



	/*Weiping added start*/
	bool v_low_change_2=false;
	bool v_high_change_2=false;
	bool v_low_change_3=false;
	bool v_high_change_3=false;
	/*Weiping added end*/



	/*Weiping added start*/
	uint8_t buffer_value_6A;
	uint8_t buffer_value_6B;


	/*Weiping added end*/

	int32_t v_low_linear=-2047;
	int32_t v_high_linear=2047;
	int32_t v_low_linear_1=-2047;
	int32_t v_high_linear_1=2047;

	/*Weiping added start*/
	int32_t v_low_linear_2=0;
	int32_t v_high_linear_2=65;
	int32_t v_low_linear_3=0;
	int32_t v_high_linear_3=65;
	/*Weiping added end*/


	uint8_t four_pos[4];

	//linear_0=0.5;
	double k_linear_0=0.0009;
	//double b_linear_0=4.5;
	double b_linear_0=6.15;
	//double k_linear_1=0.5;
	double k_linear_1=0.0022;
	//double b_linear_1=4.5;
	double b_linear_1=7.5;
	double k_linear_3=-(wrist_high_pos-wrist_low_pos)/65;
	double b_linear_3=7.5;
	double k_linear_2=-(elbow_high_pos-elbow_low_pos)/65;
	double b_linear_2=7.5;
	bool cal_complete = false;
	bool cal_complete_1 = false;
	//bool cal_complete = true;
	//bool cal_complete_1 = true;


	/*Weiping added start*/
	//bool cal_complete_2 = false;
	//bool cal_complete_3 = false;
	bool cal_complete_2 = true;
	bool cal_complete_3 = true;
	/*Weiping added end*/






	cy_rslt_t result;

	/* Initialize the device and board peripherals */
	result = cybsp_init();

	/* Board init failed. Stop program execution */
	if (result != CY_RSLT_SUCCESS)
	{
		CY_ASSERT(0);
		/*Weiping added start*/
		handle_error();
		/*Weiping added end*/
	}

	/* Initialize retarget-io to use the debug UART port */
	result = cy_retarget_io_init(CYBSP_DEBUG_UART_TX, CYBSP_DEBUG_UART_RX,
								 CY_RETARGET_IO_BAUDRATE);

	/*Weiping added start*/
    if (result != CY_RSLT_SUCCESS)
    {
        handle_error();
    }

    /* \x1b[2J\x1b[;H - ANSI ESC sequence for clear screen */
    printf("\x1b[2J\x1b[;H");

    printf("**************************\r\n");
    printf("PSoC 6 MCU I2C Master\r\n");
    printf("**************************\r\n\n");



#if ((I2C_MODE == I2C_MODE_BOTH) || (I2C_MODE == I2C_MODE_MASTER))
    cyhal_i2c_t mI2C;
    cyhal_i2c_cfg_t mI2C_cfg;
    uint8_t buffer[PACKET_SIZE];
    uint8_t buffer2[PACKET_SIZE];

    /* Configure I2C Master */
    printf(">> Configuring I2C Master..... ");
    mI2C_cfg.is_slave = false;
    mI2C_cfg.address = 0;
    mI2C_cfg.frequencyhal_hz = I2C_FREQ;
    result = cyhal_i2c_init( &mI2C, mI2C_SDA, mI2C_SCL, NULL);
    if (result != CY_RSLT_SUCCESS)
    {
        handle_error();
    }
    result = cyhal_i2c_configure( &mI2C, &mI2C_cfg);
    if (result != CY_RSLT_SUCCESS)
    {
        handle_error();
    }
    printf("Done\r\n\n");
#endif

	/*Weiping added end*/









	/*INITIALIZE SERVO MOTORS TO DEFAULT POSITION*/
	servos_init();


	/* INITALIZE IMU'S */





	/* INITALIZE FLEX SENSOR */

	const cyhal_adc_channel_config_t channel_config = { .enable_averaging = false, .min_acquisition_ns = 220, .enabled = true };


	int32_t adc_out0=500;
	int32_t adc_out1;
	/*Weiping added start*/
	uint8_t i2c_buffer_out2;
	uint8_t i2c_buffer_out3;

	uint8_t i2c_buffer_out2_prev=0;
	uint8_t i2c_buffer_out3_prev=0;
	/*Weiping added end*/


	/* ADC Object */

	cyhal_adc_t adc_obj;

	/* ADC Channel 0 Object */
	cyhal_adc_channel_t adc_chan_0_obj;
	cyhal_adc_channel_t adc_chan_1_obj;

	/* Initialize an ADC Channel */
	result = cyhal_adc_init(&adc_obj, P10_0, NULL);
	//result = cyhal_adc_init(&adc_obj, P10_2, NULL);

	/* Initialize ADC channel, allocate channel number 0 to pin 10[0] as this is the first channel initialized */
	result = cyhal_adc_channel_init_diff(&adc_chan_0_obj, &adc_obj, P10_0, CYHAL_ADC_VNEG, &channel_config);
	result = cyhal_adc_channel_init_diff(&adc_chan_1_obj, &adc_obj, P10_2, CYHAL_ADC_VNEG, &channel_config);




	/* INITIALIZE TIMER FOR SAMPLING INPUTS */

	timer_init();



	/* Enable global interrupts */
	__enable_irq();
	int out2 = 0;
	int out3 = 0;

	for (;;)
		{
		/*Weiping added start*/
    	buffer[0] = 0x11;
    	buffer[1] = 0xA0;

    	cyhal_i2c_master_write( &mI2C, LSM6DSO_ADDR,buffer, 2, 0, true);


        buffer[0] = 0x10;
        buffer[1] = 0xA0;

        cyhal_i2c_master_write( &mI2C, LSM6DSO_ADDR,buffer, 2, 0, true);



        buffer[0] = 0x2C; //Command for getting device serial number



    	buffer2[0] = 0x11;
    	buffer2[1] = 0xA0;

    	cyhal_i2c_master_write( &mI2C, LSM6DSO_ADDR2,buffer2, 2, 0, true);


        buffer2[0] = 0x10;
        buffer2[1] = 0xA0;

        cyhal_i2c_master_write( &mI2C, LSM6DSO_ADDR2,buffer2, 2, 0, true);



        buffer2[0] = 0x2C; //Command for getting device serial number

        /* Send packet with command to the slave. */
        if (CY_RSLT_SUCCESS == cyhal_i2c_master_write( &mI2C, LSM6DSO_ADDR,
                                                  buffer, 1, 0, true))
        {
            /* Read response packet from the slave. */
        	//cyhal_system_delay_us(10000ul);
            if (CY_RSLT_SUCCESS == cyhal_i2c_master_read( &mI2C, LSM6DSO_ADDR,
                                                 buffer, 2 , 0, true))
            {
                /* Check packet structure and status */
            	//printf("b%d,%de\r\n",buffer[0],buffer[1]);
            	/*buffer[1] is the data we want to use*/
            	/*buffer[1] data is between 0-64, 64 is 0 deg level position, 0 is 90 deg raised position */
            	/*if it is out of bound, set the output value to 0*/
            	buffer_value_6A=buffer[1];
            }

            /* Give delay between commands. */
            //cyhal_system_delay_ms(CMD_TO_CMD_DELAY);
        }

        if (CY_RSLT_SUCCESS == cyhal_i2c_master_write( &mI2C, LSM6DSO_ADDR2,
												  buffer2, 1, 0, true))
		{
			/* Read response packet from the slave. */
			//cyhal_system_delay_us(10000ul);
			if (CY_RSLT_SUCCESS == cyhal_i2c_master_read( &mI2C, LSM6DSO_ADDR2,
												 buffer2, 2 , 0, true))
			{
				/* Check packet structure and status */
				//printf("a%d,%df\r\n",buffer2[0],buffer2[1]);
				/*buffer2[1] is the data we want to use*/
				/*buffer2[1] data is between 0-64, 64 is 0 deg level position, 0 is 90 deg raised position */
				/*if it is out of bound, set the output value to 0*/
				buffer_value_6B=buffer2[1];

			}

			/* Give delay between commands. */
			//cyhal_system_delay_ms(CMD_TO_CMD_DELAY);
		}

    	/*Weiping added end*/




			if (cyhal_uart_getc(&cy_retarget_io_uart_obj, &uart_read_value, 1)
				 == CY_RSLT_SUCCESS)
			{
				switch(uart_read_value)
					{

					case 'X':
						four_pos[0] = servo_0_pos/20;
						four_pos[1] = servo_1_pos/20;
						four_pos[2] = servo_2_pos/20;
						four_pos[3] = servo_3_pos/20;

						printf("X%s\r\n",(char *)four_pos);

						break;

					case 'H': /*claw open*/
						v_high_change=true;
						v_high_linear = cyhal_adc_read(&adc_chan_0_obj);
						printf("H%d\r\n",v_high_linear);
						break;
					case 'L': /*claw closed*/
						v_low_change=true;
						v_low_linear = cyhal_adc_read(&adc_chan_0_obj);
						printf("L%d\r\n",v_low_linear);
						break;
					case 'Q': /*shoulder left*/
						v_high_change_1=true;
						v_high_linear_1 = cyhal_adc_read(&adc_chan_1_obj);
						printf("Q%d\r\n",v_high_linear_1); /*Weiping changed to "Q"*/
						break;
					case 'W': /*shoulder right*/
						v_low_change_1=true;
						v_low_linear_1 = cyhal_adc_read(&adc_chan_1_obj);
						printf("W%d\r\n",v_low_linear_1); /*Weiping changed to "W"*/
						break;



					case 'I':
						printf("IPSOC\r\n");
						break;
					default:
						break;
					}
			}
			if (v_low_change==true && v_high_change==true ) {
				v_low_change=false;
				v_high_change=false;


				if (v_high_linear-v_low_linear<100 && v_high_linear-v_low_linear>=0) {

					v_high_linear=v_low_linear+100;
				}

				if (v_high_linear-v_low_linear>-100 && v_high_linear-v_low_linear<0) {

					v_high_linear=v_low_linear-100;
				}

				/* basically I want to keep (v_high_linear-v_low_linear)>=100 or (v_high_linear-v_low_linear)<=-100 */
				k_linear_0=(claw_open_pos-claw_closed_pos)/((double)v_high_linear-(double)v_low_linear);
				b_linear_0=claw_closed_pos-k_linear_0*(double)v_low_linear; /*Weiping added (double)*/
				cal_complete = true;
			}/*Weiping added "claw_closed_pos" and "claw_open_pos"*/

			if (v_low_change_1==true && v_high_change_1==true ) {
				v_low_change_1=false;
				v_high_change_1=false;

				if (v_high_linear_1-v_low_linear_1<100 && v_high_linear_1-v_low_linear_1>=0) {

					v_high_linear_1=v_low_linear_1+100;
				}

				if (v_high_linear_1-v_low_linear_1>-100 && v_high_linear_1-v_low_linear_1<0) {

					v_high_linear_1=v_low_linear_1-100;
				}
				/* basically I want to keep (v_high_linear_1-v_low_linear_1)>=100 or (v_high_linear_1-v_low_linear_1)<=-100 */
				k_linear_1=(base_CCW_pos-base_CW_pos)/((double)v_high_linear_1-(double)v_low_linear_1);
				b_linear_1=base_CW_pos-k_linear_1*(double)v_low_linear_1; /*Weiping added (double)*/ /*Weiping added _1*/
				cal_complete_1 = true;
			}/*Weiping added "base_CCW_pos" and "base_CW_pos"*/









			if (adc_flag)
			{
				adc_flag = false;
				if (cal_complete) {
					adc_out0 = cyhal_adc_read(&adc_chan_0_obj);
					//adc_out0 = cyhal_adc_read_uv(&adc_chan_0_obj)/1000;
					servo_0_pos = calculate_compare(adc_out0, k_linear_0, b_linear_0);

				}
				if (cal_complete_1) {
					adc_out1 = cyhal_adc_read(&adc_chan_1_obj);
					servo_1_pos = calculate_compare(adc_out1, k_linear_1, b_linear_1);
				}

				/*Weiping added start*/
				//adc_out0 = cyhal_adc_read(&adc_chan_0_obj);
				//adc_out1 = cyhal_adc_read(&adc_chan_1_obj);
				i2c_buffer_out3=buffer_value_6A;
				i2c_buffer_out2=buffer_value_6B;
				/*Weiping added end*/


				/*printf("Zadc_out0 is %d\r\n",adc_out0);
				printf("Zservo_0_pos is %d\r\n",servo_0_pos);
				printf("Zk_linear_0 is %f\r\n",k_linear_0);
				printf("Zb_linear_0 is %f\r\n",b_linear_0);*/



				//printf("Zadc_out1 is %d\r\n",adc_out1);
				//printf("Zservo_1_pos is %d\r\n",servo_1_pos);
				//printf("Zk_linear_1 is %f\r\n",k_linear_1);
				//printf("Zb_linear_1 is %f\r\n",b_linear_1);



				//printf("Zi2c_buffer_out3_prev=%d\r\n",i2c_buffer_out3_prev);

				if (i2c_buffer_out2-i2c_buffer_out2_prev>2 || i2c_buffer_out2-i2c_buffer_out2_prev<-2) {
					//servo_2_pos = calculate_compare_IMU(i2c_buffer_out2, k_linear_2, b_linear_2);
					i2c_buffer_out2_prev=i2c_buffer_out2;

				}
				else {
					i2c_buffer_out2=i2c_buffer_out2_prev;
				}

				if (i2c_buffer_out3-i2c_buffer_out3_prev>2 || i2c_buffer_out3-i2c_buffer_out3_prev<-2) {
					//servo_3_pos = calculate_compare_IMU(i2c_buffer_out3, k_linear_3, b_linear_3);
					i2c_buffer_out3_prev=i2c_buffer_out3;

				}
				else {
					i2c_buffer_out3=i2c_buffer_out3_prev;
				}

				if (i2c_buffer_out2>68) {
					i2c_buffer_out2=0;
				}

				if (i2c_buffer_out3>68) {
					i2c_buffer_out3=0;
				}

				out3 = (int)i2c_buffer_out3;
				out2 = (int)i2c_buffer_out2;
				out3 = out3-out2;

				/*Weiping added start*/
				servo_2_pos = calculate_compare_IMU(out2, k_linear_2, b_linear_2);
				servo_3_pos = calculate_compare_IMU(out3, k_linear_3, b_linear_3);
				/*Weiping added end*/
				//printf("ZB2=%d; B3=%d\r\n",servo_2_pos,servo_3_pos);
				//printf("ZPWMservo2=%f;PWMservo3=%f\r\n",(double)servo_2_pos/200,(double)servo_3_pos/200);

			}





		}
	}


/*******************************************************************************
* Function Name: timer_init
********************************************************************************
* Summary:
* This function creates and configures a Timer object. The timer ticks
* continuously and produces a periodic interrupt on every terminal count
* event. The period is defined by the 'period' and 'compare_value' of the
* timer configuration structure 'update_servos_cfg'. Without any changes,
* this application is designed to produce an interrupt every 1 second.
*
* Parameters:
*  none
*
*******************************************************************************/
void timer_init(void)
  {
     cy_rslt_t result;

     const cyhal_timer_cfg_t twenty_ms_timer_cfg =
     {
         .compare_value = 0,                 /* Timer compare value, not used */
         .period = twenty_ms_TIMER_PERIOD,   /* Defines the timer period */
         .direction = CYHAL_TIMER_DIR_UP,    /* Timer counts up */
         .is_compare = false,                /* Don't use compare mode */
         .is_continuous = true,              /* Run timer indefinitely */
         .value = 0                          /* Initial value of counter */
     };

     /* Initialize the timer object. Does not use input pin ('pin' is NC) and
      * does not use a pre-configured clock source ('clk' is NULL). */
     result = cyhal_timer_init(&twenty_ms_timer, NC, NULL);

     /* timer init failed. Stop program execution */
     if (result != CY_RSLT_SUCCESS)
     {
         CY_ASSERT(0);
     }

     /* Configure timer period and operation mode such as count direction,
        duration */
     cyhal_timer_configure(&twenty_ms_timer, &twenty_ms_timer_cfg);

     /* Set the frequency of timer's clock source */
     cyhal_timer_set_frequency(&twenty_ms_timer, twenty_ms_TIMER_CLOCK_HZ);

     /* Assign the ISR to execute on timer interrupt */
     cyhal_timer_register_callback(&twenty_ms_timer, isr_timer, NULL);

     /* Set the event on which timer interrupt occurs and enable it */
     cyhal_timer_enable_event(&twenty_ms_timer, CYHAL_TIMER_IRQ_TERMINAL_COUNT,
                               7, true);

     /* Start the timer with the configured settings */
     cyhal_timer_start(&twenty_ms_timer);
  }


/*******************************************************************************
* Function Name: servos_init
********************************************************************************
* Summary:
* This function initalizes the 4 servo objects used in this project. It intializes
* PWMs for each of the servos and sets up timer interrupts to occur at the compare
* value for each PWM. Each PWM uses a clock source with a 1MHz frequency, a period
* of 20000 clock cycles, and a starting compare value of 900.
*
* Parameters:
*  none
*
*******************************************************************************/
void servos_init(void)
{
	/* Servo 0 */
	Cy_TCPWM_PWM_Init (TCPWM0, servo_0_NUM, &servo_0_config);
	Cy_TCPWM_PWM_Enable(TCPWM0,servo_0_NUM);
	Cy_TCPWM_PWM_SetPeriod0(TCPWM0, servo_0_NUM, 20000);
	Cy_TCPWM_PWM_SetCompare0Val(TCPWM0, servo_0_NUM, 900);
	Cy_TCPWM_SetInterruptMask(TCPWM0, servo_0_NUM,CY_TCPWM_INT_ON_CC);
	/* Configure the ISR for the TCPWM peripheral*/
	Cy_SysInt_Init(&Isr_Trigger_config0, UPDATE_servo_0_HANDLER);
	/* Enable interrupt in NVIC */
	NVIC_EnableIRQ((IRQn_Type)Isr_Trigger_config0.intrSrc);
	Cy_TCPWM_TriggerStart_Single(TCPWM0, servo_0_NUM);

	/* Servo 1 */
	Cy_TCPWM_PWM_Init (TCPWM0, servo_1_NUM, &servo_1_config);
	Cy_TCPWM_PWM_Enable(TCPWM0,servo_1_NUM);
	Cy_TCPWM_PWM_SetPeriod0(TCPWM0, servo_1_NUM, 20000);
	Cy_TCPWM_PWM_SetCompare0Val(TCPWM0, servo_1_NUM, 900);
	Cy_TCPWM_SetInterruptMask(TCPWM0, servo_1_NUM,CY_TCPWM_INT_ON_CC);
	/* Configure the ISR for the TCPWM peripheral*/
	Cy_SysInt_Init(&Isr_Trigger_config1, UPDATE_servo_1_HANDLER);
	/* Enable interrupt in NVIC */
	NVIC_EnableIRQ((IRQn_Type)Isr_Trigger_config1.intrSrc);
	Cy_TCPWM_TriggerStart_Single(TCPWM0, servo_1_NUM);

	/* Servo 2 */
	Cy_TCPWM_PWM_Init (TCPWM0, servo_2_NUM, &servo_2_config);
	Cy_TCPWM_PWM_Enable(TCPWM0,servo_2_NUM);
	Cy_TCPWM_PWM_SetPeriod0(TCPWM0, servo_2_NUM, 20000);
	Cy_TCPWM_PWM_SetCompare0Val(TCPWM0, servo_2_NUM, 1800);
	Cy_TCPWM_SetInterruptMask(TCPWM0, servo_2_NUM,CY_TCPWM_INT_ON_CC);
	/* Configure the ISR for the TCPWM peripheral*/
	Cy_SysInt_Init(&Isr_Trigger_config2, UPDATE_servo_2_HANDLER);
	/* Enable interrupt in NVIC */
	NVIC_EnableIRQ((IRQn_Type)Isr_Trigger_config2.intrSrc);
	Cy_TCPWM_TriggerStart_Single(TCPWM0, servo_2_NUM);

	/* Servo 3 */
	Cy_TCPWM_PWM_Init (TCPWM0, servo_3_NUM, &servo_3_config);
	Cy_TCPWM_PWM_Enable(TCPWM0,servo_3_NUM);
	Cy_TCPWM_PWM_SetPeriod0(TCPWM0, servo_3_NUM, 20000);
	Cy_TCPWM_PWM_SetCompare0Val(TCPWM0, servo_3_NUM, 1200);
	Cy_TCPWM_SetInterruptMask(TCPWM0, servo_3_NUM,CY_TCPWM_INT_ON_CC);
	/* Configure the ISR for the TCPWM peripheral*/
	Cy_SysInt_Init(&Isr_Trigger_config3, UPDATE_servo_3_HANDLER);
	/* Enable interrupt in NVIC */
	NVIC_EnableIRQ((IRQn_Type)Isr_Trigger_config3.intrSrc);
	Cy_TCPWM_TriggerStart_Single(TCPWM0, servo_3_NUM);
}

 /* JACOB */
/*******************************************************************************
* Function Name: UPDATE_servo_0_HANDLER
********************************************************************************
* Summary:
* This is the interrupt handler function to update the compare value of servo 0
* on the falling edge.
*
* Parameters:
*    callback_arg    Arguments passed to the interrupt callback
*    event            Timer/counter interrupt triggers
*
*******************************************************************************/
 static void UPDATE_servo_0_HANDLER(void)
 {
 	 /* Clear the TCPWM peripheral interrupt */
 	 Cy_TCPWM_ClearInterrupt(TCPWM0, servo_0_NUM, CY_TCPWM_INT_ON_CC);
 	 /* Clear the CM4 NVIC pending interrupt for TCPWM */
 	 NVIC_ClearPendingIRQ(Isr_Trigger_config0.intrSrc);

 	 /* Set the new compare value of servo_0 to the new servo_position
 	  * calculated from the IMU_sensor */

/*

 	if(servo_0_pos>1800){
 		servo_0_pos = 1800;
	  }else if(servo_0_pos<860){
		servo_0_pos = 860;
	  }
	  */
 	 Cy_TCPWM_PWM_SetCompare0Val( TCPWM0 , servo_0_NUM	, servo_0_pos );



 }

 static void UPDATE_servo_1_HANDLER(void)
  {
  	 /* Clear the TCPWM peripheral interrupt */
  	 Cy_TCPWM_ClearInterrupt(TCPWM0, servo_1_NUM, CY_TCPWM_INT_ON_CC);
  	 /* Clear the CM4 NVIC pending interrupt for TCPWM */
  	 NVIC_ClearPendingIRQ(Isr_Trigger_config1.intrSrc);

  	/*Weiping added start*/
  	 /*
  	if(servo_1_pos>2500){
  		servo_1_pos = 2500;
 	  }else if(servo_0_pos<500){
 		servo_1_pos = 500;
 	  } */
  	/*Weiping added end*/

  	 /* Set the new compare value of servo_0 to the new servo_position
  	  * calculated from the IMU_sensor */
  	 Cy_TCPWM_PWM_SetCompare0Val( TCPWM0 , servo_1_NUM	, servo_1_pos );
  }

 static void UPDATE_servo_2_HANDLER(void)
   {
   	 /* Clear the TCPWM peripheral interrupt */
   	 Cy_TCPWM_ClearInterrupt(TCPWM0, servo_2_NUM, CY_TCPWM_INT_ON_CC);
   	 /* Clear the CM4 NVIC pending interrupt for TCPWM */
   	 NVIC_ClearPendingIRQ(Isr_Trigger_config2.intrSrc);

   	/*Weiping added start*/

   	 /*
  	if(servo_2_pos>2500){
  		servo_2_pos = 2500;
 	  }else if(servo_0_pos<500){
 		servo_2_pos = 500;
 	  } */
  	/*Weiping added end*/

   	 /* Set the new compare value of servo_0 to the new servo_position
   	  * calculated from the IMU_sensor */
   	 Cy_TCPWM_PWM_SetCompare0Val( TCPWM0 , servo_2_NUM	, servo_2_pos );


   }

 static void UPDATE_servo_3_HANDLER(void)
   {
   	 /* Clear the TCPWM peripheral interrupt */
   	 Cy_TCPWM_ClearInterrupt(TCPWM0, servo_3_NUM, CY_TCPWM_INT_ON_CC);
   	 /* Clear the CM4 NVIC pending interrupt for TCPWM */
   	 NVIC_ClearPendingIRQ(Isr_Trigger_config3.intrSrc);

   	/*Weiping added start*/
   	 /*
  	if(servo_3_pos>2500){
  		servo_3_pos = 2500;
 	  }else if(servo_0_pos<500){
 		servo_3_pos = 500;
 	  }
 	  */
  	/*Weiping added end*/

   	 /* Set the new compare value of servo_0 to the new servo_position
   	  * calculated from the IMU_sensor */
   	 Cy_TCPWM_PWM_SetCompare0Val( TCPWM0 , servo_3_NUM	, servo_3_pos );


   }

 /*******************************************************************************
  * Function Name: isr_timer
  ********************************************************************************
  * Summary:
  * This is the interrupt handler function for the timer interrupt.
  *
  * Parameters:
  *    callback_arg    Arguments passed to the interrupt callback
  *    event            Timer/counter interrupt triggers
  *
  *******************************************************************************/
  static void isr_timer(void *callback_arg, cyhal_timer_event_t event)
  {
      (void) callback_arg;
      (void) event;

      /* Set the interrupt flag and process it from the main while(1) loop */
      adc_flag = true;

  }

  uint16_t calculate_compare(int32_t adc_val, double k, double b)
  {
	  double value;
	  value = ((double)adc_val*k + b)*200.0;




 	  if(value<500){
 		  value = 500;
 	  }

 	  else if(value>2500){
 		  value = 2500;
 	  }
 	 /*double value;
 	  */
 	  return (uint16_t) value;
  }


	/*Weiping added start*/
  int calculate_compare_IMU(int i2c_val, double k, double b) /*Weiping added "uint8_t i2c_val"*/
  {
	  double value;
	  value = ((double)i2c_val*k + b)*200.0; /*Weiping added "i2c_val"*/


 	  if(value<500){
 		  value = 500;
 	  }

 	  else if(value>2500){
 		  value = 2500;
 	  }
 	  /*double value;
 	  if(adc_val<585.0){
 		  value = 1800;
 	  }else if(adc_val>590.0){
 		  value = 860;
 	  }
 	  */
 	  return (int) value;
  }

	/*Weiping added end*/


















 /* LANDON */
 /*******************************************************************************
 * Function Name: PROCESS_IMU_1
 ********************************************************************************
 * Summary:
 * This is the function that processes the prepares the data from the IMU 1 for the
 * servo handler.
 *
 * Parameters:
 *
 *******************************************************************************/

 /*******************************************************************************
 * Function Name: PROCESS_IMU_2
 ********************************************************************************
 * Summary:
 * This is the function that processes the prepares the data from the IMU 2 for the
 * servo handler.
 *
 * Parameters:
 *
 *******************************************************************************/

 /* JASON */
 /*******************************************************************************
 * Function Name: PROCESS_FLEX_SENSOR
 ********************************************************************************
 * Summary:
 * This is the function that processes the prepares the data from the flex sensor
 * for the servo handler.
 *
 * Parameters:
 *
 *******************************************************************************/


/* [] END OF FILE */
