import React from "react";

export const Balance = ({ netAmount }) => {
  return (
    <div className="my-2 mx-4">
      <h4 className="mb-1 inter font-bold text-lg tracking-wider">
        YOUR BALANCE
      </h4>
      <h1
        className={`inter text-lg font-bold mb-4 ${
          parseFloat(netAmount.net) > 0
            ? "positive"
            : parseFloat(netAmount.net) < 0
            ? "negative"
            : "zero"
        }`}
      >
        $ {Math.abs(parseFloat(netAmount.net))}
      </h1>
    </div>
  );
};
