import React, { useState } from 'react';

function PasswordStrengthChecker() {
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState(0);

    const calculateStrength = (password) => {
        let score = 0;
        if (password.length > 8) score += 2;
        if (/[A-Z]/.test(password)) score += 1;
        if (/[a-z]/.test(password)) score += 1;
        if (/\d/.test(password)) score += 1;
        if (/[^a-zA-Z0-9]/.test(password)) score += 1;

        setStrength(score);
    };

    const handleChange = (event) => {
        setPassword(event.target.value);
        calculateStrength(event.target.value);
    };

    const getStrengthLabel = () => {
        if (strength < 3) return 'Weak';
        if (strength < 6) return 'Moderate';
        return 'Strong';
    };

    const getProgressBarColor = () => {
        if (strength < 3) return 'red';
        if (strength < 6) return 'yellow';
        else return 'green';
    };

    return (
        <div className="password-strength-checker">
            <h1>Password Strength Checker</h1>
            <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={handleChange}
            />
            <div className="strength-meter">
                <progress value={strength} max={6} style={{ backgroundColor: getProgressBarColor() }} />
                <span>{getStrengthLabel()}</span>
            </div>
        </div>
    );
}

export default PasswordStrengthChecker;
