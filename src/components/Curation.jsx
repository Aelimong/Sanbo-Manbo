import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "../styles/curation.scss";

export default function Curation() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <section className="sec05-curation">
      <div className="wrapper">
        <h3 className="sec05-mb-3">큐레이션 지도</h3>
        <Box sx={{ flexGrow: 1 }} className="sec05-mb-3">
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Item className="sec05-card">
                <div>🏞</div> 
                <h4>서울 걷기 좋은 산책로</h4>
                <p>8개의 장소</p>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item className="sec05-card">
                <div>🚶</div>
                <h4>저질 체력도 가면 좋은</h4>
                <h4 className="sec05-card-text-line">산책로</h4>
                <p>8개의 장소</p>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item className="sec05-card">
                <div>👨‍👩‍👧‍👦</div>
                <h4>저질 체력도 가면 좋은</h4>
                <h4 className="sec05-card-text-line">산책로</h4>
                <p>8개의 장소</p>
              </Item>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Item className="sec05-card">
                <div>🙋‍♀️🙋‍♂️</div>
                <h4>우리 동네에 친구가 놀러오면</h4>
                <h4 className="sec05-card-text-line">데려 가는 곳</h4>
                <p>8개의 장소</p>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item className="sec05-card">
                <div>🥄</div>
                <h4>인생에 한번은 가봐야 하는 맛집 </h4>
                <p>8개의 장소</p>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item className="sec05-card">
                <div>☀️</div>
                <h4>화창할 때 가기 좋은 산책로</h4>
                <p>8개의 장소</p>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </section>
  );
}
