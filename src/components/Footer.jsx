import "../styles/curation.scss";
import Wave from "react-wavify";
import img1 from "../assets/curation-jy/sanboman-gray.svg";
import img2 from "../assets/curation-jy/tree.png";

export default function Footer() {
  return (
    <footer className="footer">
      <Wave
        fill="var(--main-green-50)"
        paused={false}
        style={{
          display: "flex",
          position: "absolute",
          height: "512px",
          bottom: "0",
        }}
        options={{
          height: 10,
          amplitude: 20,
          speed: 0.2,
          points: 6,
        }}
      />
      <Wave
        fill="var(--main-green-60)"
        paused={false}
        style={{
          display: "flex",
          position: "absolute",
          height: "382px",
          bottom: "0",
        }}
        options={{
          height: 0,
          amplitude: 20,
          speed: 0.2,
          points: 9,
        }}
      />
      <Wave
        fill="var(--main-green)"
        paused={false}
        style={{
          display: "flex",
          position: "absolute",
          height: "366px",
          bottom: "0",
        }}
        options={{
          height: 10,
          amplitude: 20,
          speed: 0.15,
          points: 3,
        }}
      />

        <img src={img2} alt="" className="footer-tree" />

      <div className="footer-wrap">
        <img src={img1} alt="산보만보 푸터 이미지" className="footer-img"/>
        <div className="footer-descript">
          <p>대표 김용현, 황도연 사업자번호 375-87-00088</p>
          <p>직업정보제공사업 신고번호 J1200020200016</p>
          <p>주소 서울특별시 강동구 고덕로 429 4층(산보만보서비스)</p>
        </div>
      </div>
    </footer>
  );
}
