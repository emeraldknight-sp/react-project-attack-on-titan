import { useEffect, useState } from "react";
import { StyledLoading } from "./Loading.style";

export const Loading = () => {
  const listNames = [
    "Em memória de",
    "Hange Zöe",
    "Erwin Smith",
    "e Sasha Blouse.",
  ];

  const [nameIndex, setNameIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNameIndex((prevIndex) => (prevIndex + 1) % listNames.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <StyledLoading>
      <h3 className="loading--title">
        <span>{listNames[nameIndex]}</span>
      </h3>
      <div className="loading--spinner" />
    </StyledLoading>
  );
};
