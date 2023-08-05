"use client"

import react, { useState } from "react";

export default function Navbar() {
    const [selectedOption, setSelectedOption] = useState("");

    const onOptionClick = (e: react.MouseEvent<HTMLDivElement, MouseEvent>, option: string) => {
        e.preventDefault();
        setSelectedOption(option);
        return option;
    }

    const OPTIONS: string[] = ["_hello", "_about-me", "_projects"];
    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="navbar-name">
                    <p>Jaswant Singh</p>
                </div>
                <div className="navbar-options">
                    {
                        OPTIONS.map((option) => (
                            <div className={`navbar-options-option ${selectedOption === option && 'active'}`} key={option} onClick={(e) => onOptionClick(e, option)}>
                                <p>{option}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={`navbar-contact ${selectedOption === 'contact' && 'active'}`} onClick={(e) => onOptionClick(e, "contact")}>
                <p>_contact-me</p>
            </div>
        </div>
    )
}