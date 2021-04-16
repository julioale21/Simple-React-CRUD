import React from "react";

interface Props {
  message: any;
  color?: string;
}

const ComponentName: React.FC<Props> = ({ message, color = "red-400" }) => {
  return (
    <div className={`p-1 mb-1 text-center text-white bg-${color} font-bold`}>
      <h2>{message}</h2>
    </div>
  );
};

export default ComponentName;
