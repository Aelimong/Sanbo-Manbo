import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "../styles/curation.scss";

export default function Crew() {
  return (
    <section className="">
      <div className="wrapper">
        <h3 className="sec05-mb-1">혼자가 아닌 여럿이 함께 트래킹 크루 모집</h3>
        <p className="sec05-mb-2">season 2023</p>

        <div className="sec05-mb-3 sec05-crew-flex">
          <div className="sec05-crew-img-box1">
            <h4>산타 트래킹</h4>
          </div>
          <div className="sec05-crew-img-box2">
            <h4>둘레길 걷기</h4>
          </div>
        </div>
        <div className="sec05-crew-flex">
          <div className="sec05-crew-img-box3">
            <h4>산타 트래킹</h4>
          </div>
          <div className="sec05-crew-img-box4">
            <h4>둘레길 걷기</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
