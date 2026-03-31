'use client';
import React from "react";

export default function DiceFace({ value }) {
  const getDots = (num) => {
    const positions = {
      1: ["center"],
      2: ["top-left", "bottom-right"],
      3: ["top-left", "center", "bottom-right"],
      4: ["top-left", "top-right", "bottom-left", "bottom-right"],
      5: ["top-left", "top-right", "center", "bottom-left", "bottom-right"],
      6: [
        "top-left",
        "top-right",
        "middle-left",
        "middle-right",
        "bottom-left",
        "bottom-right",
      ],
    };

    return positions[num] || [];
  };

  return (
    <div style={styles.dice}>
      {getDots(value).map((pos, index) => (
        <div key={index} style={{ ...styles.dot, ...styles[pos] }} />
      ))}
    </div>
  );
}

const styles = {
  dice: {
    width: "100px",
    height: "100px",
    backgroundColor: "white",
    border: "3px solid black",
    borderRadius: "12px",
    position: "relative",
    margin: "20px auto",
  },
  dot: {
    width: "16px",
    height: "16px",
    backgroundColor: "black",
    borderRadius: "50%",
    position: "absolute",
  },

  "top-left": { top: "10%", left: "10%" },
  "top-right": { top: "10%", right: "10%" },
  "middle-left": { top: "50%", left: "10%", transform: "translateY(-50%)" },
  "middle-right": { top: "50%", right: "10%", transform: "translateY(-50%)" },
  "bottom-left": { bottom: "10%", left: "10%" },
  "bottom-right": { bottom: "10%", right: "10%" },
  center: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
};