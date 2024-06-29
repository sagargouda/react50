import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

function ColorPickerApp() {
    const [selectedColor, setSelectedColor] = useState('#FFFFFF');

    const handleChangeComplete = (color) => {
        setSelectedColor(color.hex);
    };

    return (
        <div className="color-picker-app">
            <h1>Color Picker</h1>
            <SketchPicker color={selectedColor} onChangeComplete={handleChangeComplete} />
            <p>Selected Color Hex Code: {selectedColor}</p>
        </div>
    );
}

export default ColorPickerApp;