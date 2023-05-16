import React from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const handleButtonClick = () => {
    const intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress === 100) {
          clearInterval(intervalId);
          return prevProgress;
        }
        return prevProgress + 10;
      });
    }, 500);
  };
  return (
    <>
      {progress > 0 && (
        <progress className="rounded-full" value={progress} max="100" />
      )}
    </>
  );
};

export default ProgressBar;
