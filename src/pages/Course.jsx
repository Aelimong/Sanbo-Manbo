import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import "../styles/style.scss";
import "../styles/course.scss";

import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../components/Header";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const seoulDistrictList = [
  "전체",
  "종로구",
  "중구",
  "용산구",
  "성동구",
  "광진구",
  "동대문구",
  "중랑구",
  "성북구",
  "강북구",
  "도봉구",
  "노원구",
  "은평구",
  "서대문구",
  "마포구",
  "양천구",
  "강서구",
  "구로구",
  "금천구",
  "영등포구",
  "동작구",
  "관악구",
  "서초구",
  "강남구",
  "송파구",
  "강동구",
];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Course() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className="course-hero">
          <h2>트레킹 코스</h2>
          <h4>산보만보에서 추천하는 서울 근교 트레킹 코스</h4>
          <div className="line"></div>
          <h6>
            서울의 아름다운 생태, 역사, 문화자원을 천천히 걸으면서 느끼고 배우고
            체험할 수 있는 도보중심의 길로서 도심에서 ‘자연의 느림과 여유’를
            만끽할 수 있는 코스입니다.
          </h6>
        </div>
        {/* End hero unit */}
        {/* Category */}
        <div className="category">
          <ul className="wrapper">
            {seoulDistrictList.map((el, index) => (
              <li key={el}>
                <p>{el}</p>
              </li>
            ))}
          </ul>
        </div>
        {/* End Category */}
        {/* Card container */}
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  className="course-card"
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "35px",
                    backgroundColor: "#F5F5F5",
                    boxShadow: "2px 2px 6px #ddd",
                    cursor: "pointer",
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image="https://source.unsplash.com/random?nature/mountain"
                  />
                  <CardContent sx={{ flexGrow: 1, padding: "2rem 2rem" }}>
                    <h6>코스 이름</h6>
                    <p>강남구</p>
                    <div className="course-info">
                      <span>
                        <i
                          className="fa-solid fa-clock"
                          style={{ color: "#526349" }}
                        ></i>
                        &nbsp;30분
                      </span>
                      <span>
                        <i
                          className="fa-solid fa-flag"
                          style={{ color: "#526349" }}
                        ></i>
                        &nbsp;1km
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        {/* End Card container */}
      </main>
    </ThemeProvider>
  );
}
