import * as React from "react";
import SectionContainer, {
  BackgroundType,
} from "@common/components/section-container/SectionContainer";
import ParticlesSystem from "./particle-system/ParticlesSystem";
import "./MainPage.scss";
import { Button } from "@mui/material";

interface MainPageState {
  isLoading: boolean;
}

class MainPage extends React.Component<unknown, MainPageState> {
  constructor(props: unknown) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount(): void {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }

  render(): JSX.Element {
    const { isLoading } = this.state;

    return (
      <SectionContainer
        backgroundType={BackgroundType.CONFETTI}
        isLoading={isLoading}
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="main-page-particle-system">
          <ParticlesSystem />
        </div>
        <div className="main-page">
          <div className="main-page-text-container">
            <h1 className="main-page-my-name">Максим Ильин</h1>
            <div className="main-page-buttons">
              <div>
                <button className="main-page-button" role="button">
                  Контакты
                </button>
              </div>
              <div>
                <button className="main-page-button" role="button">
                  Мои&nbsp;Проекты
                </button>
              </div>
              <div>
                <button className="main-page-button" role="button">
                  Обо&nbsp;мне
                </button>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    );
  }
}

export default MainPage;
