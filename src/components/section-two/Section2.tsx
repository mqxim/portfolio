import * as React from "react";

import "./styles/section-two.scss";
import {
  Card,
  CardContent,
  Grid,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const Section2 = (): JSX.Element => {
  return (
    <React.Fragment>
      <div className="section-two" style={{ width: "100vw" }}>
        <div style={{ display: "block" }}>
          <Grid container p={2} spacing={2} alignItems="stretch">
            <Grid item xs={12}>
              <h2 className="s2-about-me">Обо мне</h2>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <Card style={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Личная информация
                  </Typography>
                  <Typography
                    sx={{ mt: 1.5 }}
                    variant="body2"
                    color="text.secondary"
                  >
                    <List
                      sx={{
                        width: "100%",
                        bgcolor: "background.paper",
                      }}
                      aria-label="contacts"
                    >
                      <ListItem disableGutters disablePadding>
                        <ListItemText>
                          Дата рождения: <b>18.02.1999</b>
                        </ListItemText>
                      </ListItem>
                      <ListItem disableGutters disablePadding>
                        <ListItemText>
                          Пол: <b>мужской</b>
                        </ListItemText>
                      </ListItem>
                      <ListItem disableGutters disablePadding>
                        <ListItemText>
                          Город: <b>Йошкар-Ола</b>
                        </ListItemText>
                      </ListItem>
                      <ListItem disableGutters disablePadding>
                        <ListItemText>
                          Гражданство: <b>Россия</b>
                        </ListItemText>
                      </ListItem>
                      <ListItem disableGutters disablePadding>
                        <ListItemText>
                          Знание языков: <b>Английский (B2)</b>
                        </ListItemText>
                      </ListItem>
                      <Hidden smUp>
                        <ListItem disableGutters disablePadding>
                          <ListItemText>
                            Образование:{" "}
                            <b>
                              Поволжский государственный технологический
                              университет, Факультет информатики и выч. техники,
                              Програмная инженерия, 2021
                            </b>
                          </ListItemText>
                        </ListItem>
                        <ListItem disableGutters disablePadding>
                          <ListItemText>
                            Опыт работы:{" "}
                            <b>
                              ООО «Ричмедиа» (iSpring) 2018-2019
                              инженер-программист, Организация: ООО «АрбМедиа»
                              2019-2021 инженер-программист
                            </b>
                          </ListItemText>
                        </ListItem>
                      </Hidden>
                    </List>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Hidden smDown>
              <Grid item md={4} sm={6} xs={12}>
                <Card style={{ height: "100%" }}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Образование
                    </Typography>
                    <Typography
                      sx={{ mt: 1.5 }}
                      variant="body2"
                      color="text.secondary"
                    >
                      <List
                        sx={{
                          width: "100%",
                          bgcolor: "background.paper",
                        }}
                        aria-label="contacts"
                      >
                        <ListItem disableGutters disablePadding>
                          <ListItemText>
                            Универститет:{" "}
                            <b>
                              Поволжский государственный технологический
                              университет
                            </b>
                          </ListItemText>
                        </ListItem>
                        <ListItem disableGutters disablePadding>
                          <ListItemText>
                            Факультет:{" "}
                            <b>Информатики и вычислительной техники</b>
                          </ListItemText>
                        </ListItem>
                        <ListItem disableGutters disablePadding>
                          <ListItemText>
                            Специальность: <b>Программная инженерия</b>
                          </ListItemText>
                        </ListItem>
                        <ListItem disableGutters disablePadding>
                          <ListItemText>
                            Год окончания: <b>2021</b>
                          </ListItemText>
                        </ListItem>
                      </List>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={4} sm={6} xs={12}>
                <Card style={{ height: "100%" }}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Опыт работы
                    </Typography>
                    <Typography
                      sx={{ mt: 1.5 }}
                      variant="body2"
                      color="text.secondary"
                    >
                      <List
                        sx={{
                          width: "100%",
                          bgcolor: "background.paper",
                        }}
                        aria-label="contacts"
                      >
                        <ListItem disableGutters disablePadding>
                          <ListItemText>
                            Стаж: <b>4 года</b>
                          </ListItemText>
                        </ListItem>
                        <ListItem disableGutters disablePadding>
                          <ListItemText secondary="инженер-программист, 2018-2019">
                            Организация: <b>ООО «Ричмедиа» (iSpring)</b>
                          </ListItemText>
                        </ListItem>
                        <ListItem disableGutters disablePadding>
                          <ListItemText secondary="инженер-программист, 2019-2021">
                            Организация: <b>ООО «АрбМедиа»</b>
                          </ListItemText>
                        </ListItem>
                      </List>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Hidden>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Section2;
