import React from "react";
import { Progress, ProgressWrapper } from "./style";

const ProgressBar = ({ title, progressPercentage }) => {
  return (
    <div>
      <p>{title}</p>
      <ProgressWrapper>
        <Progress percentage={progressPercentage}>
          {progressPercentage}%
        </Progress>
      </ProgressWrapper>
    </div>
  );
};

export default ProgressBar;
