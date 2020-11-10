import React from 'react';
import { Slider } from '../Slider';
import './ColorPicker.css';

export const ColorPicker = () => {
  const [rgba, setRgba] = React.useState({
    red: 255,
    green: 255,
    blue: 255,
    alpha: 1,
  });

  const handleChangeRgba = (event) => {
    setRgba({
      ...rgba,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <section>
      <div
        className="block"
        style={{
          background: `rgba(${rgba.red}, ${rgba.green}, ${rgba.blue}, ${rgba.alpha})`,
        }}
      >
        {`rgba(${rgba.red}, ${rgba.green}, ${rgba.blue}, ${rgba.alpha})`}
      </div>

      <div className="sliders">
        <span>Red: {rgba.red}</span>
        <Slider name="red" value={rgba.red} min="0" max="255" onChange={handleChangeRgba} />

        <span>Green: {rgba.green}</span>
        <Slider name="green" value={rgba.green} min="0" max="255" onChange={handleChangeRgba} />

        <span>Blue: {rgba.blue}</span>
        <Slider name="blue" value={rgba.blue} min="0" max="255" onChange={handleChangeRgba} />

        <span>Alpha: {rgba.alpha}</span>
        <Slider name="alpha" value={rgba.alpha} min="0" max="1" step="0.01" onChange={handleChangeRgba} />
      </div>
    </section>
  );
};
