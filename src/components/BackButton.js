import React from "react";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
    const navigate = useNavigate();
    return (
        <button
          onClick={() => navigate(-1)}
          className="inline-block rounded-lg bg-blue-500 px-6 py-3 text-xl text-white transition hover:bg-blue-600"
        >
            Back
        </button>
    );
}