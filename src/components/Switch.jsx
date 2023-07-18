import React, { useState, createContext, useContext} from "react";
import classNames from "classnames";



export default function Switch() {
    const [isSelected, setIsSelected] = useState(false)
  return (


      <div
        onClick={() => setIsSelected(!isSelected)}
        className={classNames("flex w-10 h-5 bg-white  rounded-full", {
          "bg-darkGrey transition-all duration-500": isSelected,
        })}
      >
        <span
          className={classNames(
            "h-5 w-5 bg-violet rounded-full transition-all duration-500 shadow-lg",
            {
              "ml-5": isSelected,
            }
          )}
        ></span>
      </div>

  );
}
