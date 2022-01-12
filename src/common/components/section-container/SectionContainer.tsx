import * as React from "react";
import "./SectionContainer.scss";

export enum BackgroundType {
  EMPTY = "",
  ABSTRACT_WAVES = "bg-abstract-waves",
  ZIG_ZAG = "bg-zig-zag",
  CONSTELLATION = "bg-constellation",
  CONFETTI = "bg-confetti",
  PARABOLIC_RECTANGLES = "bg-parabolic-rectangles",
  ABSTRACT_TIMEKEEPER = "bg-abstract-timekeeper",
  RAINBOW_VORTEX = "bg-rainbow-vortex",
  MOUNTAINS = "bg-mountains",
  MOUNTAINS_2 = "bg-mountains-2",
}

export interface SectionProps {
  style?: React.CSSProperties;
  backgroundType?: BackgroundType;
  children?: JSX.Element | JSX.Element[];
  isLoading?: boolean;
}

class SectionContainer extends React.Component<SectionProps, unknown> {
  constructor(props: SectionProps) {
    super(props);
  }

  render(): JSX.Element {
    const { backgroundType, children, style, isLoading } = this.props;

    return (
      <React.Fragment>
        <div
          className={`section-container ${backgroundType} ${
            isLoading ? "" : "loaded"
          }`}
          style={style}
        >
          <div className="loader-wrapper">
            <div className="loader" />
            <div className="loader-section section-left" />
            <div className="loader-section section-right" />
          </div>
          {children}
        </div>
      </React.Fragment>
    );
  }
}

export default SectionContainer;
