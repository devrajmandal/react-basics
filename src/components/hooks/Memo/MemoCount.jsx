import { memo, useRef } from "react";

const Counts = () => {
  const renderCount = useRef(0);
  return (
    <div className="mt-3 font-display text-center">
      <p>
        Nothing changed here but Ive now rendered:
        <span className="text-red-600">{renderCount.current++} time(s)</span>
      </p>
    </div>
  );
};

export default memo(Counts);