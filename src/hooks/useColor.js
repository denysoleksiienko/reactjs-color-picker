import React from 'react';

export const useColor = () => {
  const [isSave, setIsSave] = React.useState(false);
  const [rgba, setRgba] = React.useState({
    red: 255,
    green: 255,
    blue: 255,
    alpha: 1,
  });

  const [saveRgba, setSaveRgba] = React.useState({ ...rgba });

  const handleChangeRgba = (event) => {
    setIsSave(true);
    setRgba({
      ...rgba,
      [event.target.name]: event.target.value,
    });
  };

  const handleSaveRgba = () => {
    setSaveRgba({ ...rgba });
  };

  const handleCancelRgba = () => {
    setRgba({ ...saveRgba });
    setIsSave(false);
  };

  return {
    isSave,
    rgba,
    saveRgba,
    handleChangeRgba,
    handleSaveRgba,
    handleCancelRgba,
  };
};
