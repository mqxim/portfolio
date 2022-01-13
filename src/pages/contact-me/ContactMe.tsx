import * as React from "react";
import SectionContainer, {
  BackgroundType,
} from "@common/components/section-container/SectionContainer";

class ContactMe extends React.Component<unknown, undefined> {
  render(): JSX.Element {
    return (
      <SectionContainer
        backgroundType={BackgroundType.ABSTRACT_TIMEKEEPER}
      ></SectionContainer>
    );
  }
}

export default ContactMe;
