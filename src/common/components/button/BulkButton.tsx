import * as React from "react";
import "./BulkButton.scss";

interface BulkButtonProps {
  className?: string;
  style?: React.CSSProperties;
  text: string;
  onClick?: () => void;
}

const BulkButton = ({
  className,
  style,
  text,
  onClick,
}: BulkButtonProps): JSX.Element => {
  return (
    <button
      className={"main-page-button" + " " + className}
      style={style}
      role="button"
      onClick={() => (onClick ? onClick() : null)}
    >
      {text}
    </button>
  );
};

export default BulkButton;
