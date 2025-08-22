import { memo, useRef } from "react";

const Counts = ({ bioData }) => {
  const renderedCount = useRef(0);
  return (
    <div className="mt-3 font-display text-center">
      <p>
        Nothing changed here but now Ive rendered:
        <span className="text-red-600">{renderedCount.current++} time(s)</span>
        <p>My name is {bioData.name}</p>
      </p>
    </div>
  );
};

export default memo(Counts);
