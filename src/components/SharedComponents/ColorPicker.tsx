import React from "react";
import { Color, colorMap } from "../../constants";

interface IProps {
  colorList: Color[];
}

const ColorPicker: React.FC<IProps> = ({ colorList }) => {
  return (
    <ul className="flex flex-row space-x-1">
      {colorList.map((color) => {
        return (
          <li className="relative flex w-6 h-6 justify-center items-center">
            <div
              className="relative w-4 h-4 rounded-full"
              style={{ backgroundColor: colorMap[color] }}
            ></div>
            <div className="absolute bg-transparent inset-0 w-full h-full rounded-full border-2 border-gray hover:border-black cursor-pointer"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default ColorPicker;
