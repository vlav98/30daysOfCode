import React from "react";

import styles from "./Button.module.css";

interface ButtonProps {
  label: string;
  onClick: () => void;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, color }) => {
  return (
    <button
      style={{
        color,
        borderColor: color,
        borderWidth: "1px",
        borderStyle: "solid",
      }}
      className={styles.button}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
