import React from "react";

const TEXTS = [
  "Hola Carla",
  "Gracias por existir en mi vida",
  "Y demostrarme que el amor si existe",
  "Soy el hombre mas afortunado al tenerte",
  "Gracias por alegrar mis dias",
  "Y hacerme parte de ti y de tu mundo",
  "Felices 6 meses mi amor"
];

const useLetter = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalid = setInterval(() => index < TEXTS.length && setIndex(index + 1), 2000);
    return () => clearTimeout(intervalid);
  });

  return TEXTS[index];
};

export default useLetter;
