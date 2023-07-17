/* eslint-disable */
import React, { useState } from 'react';
import handleicon from 'src/assets/Colorhuntimg/Vector 11.svg'
import 'src/components/header/reage.css'

function valuetext(value) {
  return `${value}°C`;
}

const CustomSliderThumb = () => {
  return (
    <div className="custom-slider-thumb">
      {/* Add your custom icon or image here */}
      {/* Example with a custom icon */}
      <img src={handleicon} alt="Custom Icon" />
    </div>
  );
};

export default function RangeSlider() {
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event) => {
    setValue([event.target.value]);
  };

  return (
    <div className="range-slider">
      <input
        type="range"
        min={0}
        max={100}
        value={value[0]}
        onChange={handleChange}
        className="slider-input"
      />
      <output htmlFor="slider" className="slider-output">
        {value[0]}
      </output>
      <CustomSliderThumb />
    </div>
  );
}
