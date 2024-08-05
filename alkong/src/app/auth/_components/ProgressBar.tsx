import React from "react";

const ProgressBar = ({ currentStep }: { currentStep: number }) => {
  return (
    <div className="flex gap-2">
      <div className={`flex-1 h-2 bg-gray-300 `} />
      <div
        className={`flex-1 h-2 ${
          currentStep > 0 ? "bg-gray-300" : "bg-gray-200"
        } `}
      />
      <div
        className={`flex-1 h-2 ${
          currentStep > 1 ? "bg-gray-300" : "bg-gray-200"
        } `}
      />
    </div>
  );
};

export default ProgressBar;
