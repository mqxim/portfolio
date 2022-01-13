import * as React from "react";
import "./BlockContainer.scss";

interface BlockContainerProps {
  style?: React.CSSProperties;
  className?: string;
  children?: JSX.Element | JSX.Element[];
}

class BlockContainer extends React.Component<BlockContainerProps, undefined> {
  render(): JSX.Element {
    const { style, className, children } = this.props;

    return (
      <div className={`block-container ${className}`} style={style}>
        {children}
      </div>
    );
  }
}

export default BlockContainer;
