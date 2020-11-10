import React from 'react';
import './Slider.css';

export const Slider = ({ name, value, min, max, step, onChange }) => {
  return (
    <label>
      <input name={name} value={value} type="range" min={min} max={max} step={step} onChange={onChange} />
    </label>
  );
};
