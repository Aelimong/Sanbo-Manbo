import "../styles/mainAeLim.scss";
import levelThema from "../assets/img/mainAeLim/level_thema_1.jpg";
import seosonThema from "../assets/img/mainAeLim/seoson_thema.jpg";
import { Link } from "react-router-dom";

export default function ThemaTreck() {
  return (
    <>
      <section className="sec03 wrapper">
        <div className="thema level-thema">
          <div className="text-area">
            <span>내가 가고 싶은 곳은?</span>
            <h3>난이도별 트레킹</h3>
            <p>초급, 중급, 상급까지 다양하게</p>
            <button>
              <Link to="/course">
                바로가기&nbsp;&nbsp;
                <i
                  className="fa-solid fa-arrow-right"
                  style={{ color: "#050505" }}
                ></i>
              </Link>
            </button>
          </div>
          <figure className="img-area">
            <img src={levelThema} alt="난이도별 트레킹" />
          </figure>
        </div>
        <div className="thema seoson-thema">
          <div className="text-area">
            <span>내가 가고 싶은 곳은?</span>
            <h3>계절별 트레킹</h3>
            <p>산에서 계절을 느껴보세요</p>
            <button>
              <Link to="/course">
                바로가기&nbsp;&nbsp;
                <i
                  className="fa-solid fa-arrow-right"
                  style={{ color: "#050505" }}
                ></i>
              </Link>
            </button>
          </div>
          <figure className="img-area">
            <img src={seosonThema} alt="계절별 트레킹" />
          </figure>
        </div>
      </section>
    </>
  );
}
