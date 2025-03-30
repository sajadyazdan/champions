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
          <li
            className="w-6 h-6 rounded-full border-4 border-gray-200 cursor-pointer"
            style={{ backgroundColor: colorMap[color] }}
          ></li>
        );
      })}
    </ul>
  );
};

export default ColorPicker;
