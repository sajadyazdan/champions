import React from "react";
import { Color, colorMap } from "../../constants";

interface IProps {
  colorList: Color[];
  onPick: (colorIndex: number) => void;
  onHover: (colorIndex: number) => void;
  selectedColor: number;
}

const ColorPicker: React.FC<IProps> = ({
  colorList,
  onPick,
  onHover,
  selectedColor,
}) => {
  return (
    <ul className="flex flex-row space-x-1">
      {colorList.map((color, index) => {
        return (
          <li
            key={index}
            className="relative flex w-6 h-6 justify-center items-center"
            onClick={() => onPick(index)}
            onMouseEnter={() => onHover(index)}
            onMouseLeave={() => onHover(selectedColor)}
          >
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
