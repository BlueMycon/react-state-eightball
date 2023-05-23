import { useState } from "react";

const defaultColors = [
    "black",
    "white",
    "red",
    "green",
    "blue",
    "yellow",
    "cyan",
    "magenta",
    "gray",
    "orange",
    "purple",
    "pink",
    "brown",
    "silver",
    "gold",
    "lime",
  ];

function ColorBoxes({colors = defaultColors}) {
    const [colorList, setColorList] = setState(defaultColors)
    // const color = colors[Math.floor(Math.random() * colors.length)];
    const myStyle = {
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
    }

    return (
        <div className="ColorBoxes-container">
            {colorList.map((c, index) => 
            <div className="ColorBoxes-box" key={index} style={myStyle}></div>)}
        </div>
    )
}