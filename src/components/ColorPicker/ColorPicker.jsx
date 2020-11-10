import { useColor } from '../../hooks/useColor';
import { Button } from '../Button';
import { Slider } from '../Slider';

import './ColorPicker.css';

export const ColorPicker = () => {
  const { isSave, rgba, saveRgba, handleChangeRgba, handleSaveRgba, handleCancelRgba } = useColor();

  return (
    <section>
      <div className="picker">
        <div
          className="block"
          style={{
            background: isSave
              ? `rgba(${rgba.red}, ${rgba.green}, ${rgba.blue}, ${rgba.alpha})`
              : `rgba(${saveRgba.red}, ${saveRgba.green}, ${saveRgba.blue}, ${saveRgba.alpha})`,
          }}
        >
          <span className="block-inner">{`rgba(${rgba.red}, ${rgba.green}, ${rgba.blue}, ${rgba.alpha})`}</span>
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
      </div>

      <div className="buttons">
        <Button title="Submit" onClick={handleSaveRgba} />

        <Button title="Cancel" onClick={handleCancelRgba} />
      </div>
    </section>
  );
};
