import * as React from "react";
import SectionContainer, {
  BackgroundType,
} from "@common/components/section-container/SectionContainer";
import ParticlesSystem from "./particle-system/ParticlesSystem";
import "./MainPage.scss";

interface MainPageProps {
  onAction: (v: "about-me" | "projects" | "contacts") => void;
}

class MainPage extends React.Component<MainPageProps, unknown> {
  render(): JSX.Element {
    const { onAction } = this.props;

    return (
      <SectionContainer
        backgroundType={BackgroundType.CONFETTI}
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
                <button
                  className="main-page-button"
                  role="button"
                  onClick={() => {
                    onAction("contacts");
                  }}
                >
                  Контакты
                </button>
              </div>
              <div>
                <button
                  className="main-page-button"
                  role="button"
                  onClick={() => {
                    onAction("projects");
                  }}
                >
                  Мои&nbsp;Проекты
                </button>
              </div>
              <div>
                <button
                  className="main-page-button"
                  role="button"
                  onClick={() => {
                    onAction("about-me");
                  }}
                >
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
