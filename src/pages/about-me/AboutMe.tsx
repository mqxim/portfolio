import * as React from "react";
import BlockContainer from "@common/components/block-container/BlockContainer";
import { Button, Divider, Grid, Typography } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import "./AboutMe.scss";

const skills = [
  {
    bullet: "✨",
    value:
      "Я люблю свое дело, вдохновляюсь им, ответственен и умею сосредотачиваться на проблеме.",
  },
  {
    bullet: "✔",
    value:
      "Я ценю качество продукта, внимателен к деталям, готов исследовать и выполнять сложные задачи.",
  },
  {
    bullet: "🤖",
    value:
      "Я стремлюсь свести к минимуму ручную работу и оптимизировать процессы по максимуму.",
  },
  {
    bullet: "🔨",
    value:
      "Я понимаю жизненные циклы программных проектов и процессы разработки.",
  },
  {
    bullet: "👪",
    value: "Я дорожу командой и всегда готов прийти на помощь.",
  },
  {
    bullet: "🧑🏿‍🤝‍🧑🏻",
    value:
      "Я умею коммуницировать с людьми, принимаю мнение других людей, умею разрешать споры и конфликты.",
  },
  {
    bullet: "🗣️",
    value:
      "Я готов участвовать в конференциях и непрерывно повышать свою квалификацию, стремлюсь к профессиональному и карьерному росту.",
  },
];

class AboutMe extends React.Component<unknown, undefined> {
  render(): JSX.Element {
    return (
      <div className="about-me">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <BlockContainer
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0 25px",
              }}
            >
              <Typography
                variant="h2"
                component="div"
                className="about-me-heading"
              >
                Обо мне
              </Typography>
            </BlockContainer>
          </Grid>
          <Grid item xs={12}>
            <BlockContainer style={{ padding: 25 }}>
              <div className="skills-list">
                {skills.map((s, i) => (
                  <div className="skills-list-item" key={i}>
                    <div className="skills-list-item-bullet">{s.bullet}</div>
                    <div>
                      <Typography gutterBottom fontSize={24}>
                        {s.value}
                      </Typography>
                    </div>
                  </div>
                ))}
              </div>
              <Divider />
              <div style={{ marginTop: 24 }}>
                <Grid container spacing={3}>
                  <Grid item>
                    <Button
                      startIcon={<TelegramIcon />}
                      size="large"
                      variant="contained"
                      href="https://telegram.me/zyzzik"
                      target="__blank"
                    >
                      Написать мне
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      startIcon={<EmailIcon />}
                      size="large"
                      variant="contained"
                      href="mailto:overdue_talking0x@icloud.com"
                      target="__blank"
                    >
                      Отправить email
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </BlockContainer>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default AboutMe;
