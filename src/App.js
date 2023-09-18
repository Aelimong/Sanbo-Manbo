import Header from "./components/Header";
import Curation from "./components/Curation";
import Crew from "./components/Crew";
import Story from "./components/Story";
import Footer from "./components/Footer";
import "./styles/style.scss";

function App() {
  return (
    <>
      {/* Header 메뉴 & 로고 */}
      <Header />
      <main className="container">
        {/* 1. 메인 섹션 */}
        {/* 2. 내 주변 위치 */}
        {/* 3. 띠 배너 */}
        {/* 4. 주제별 트레킹 */}
        {/* 5. 큐레이션 지도 */}
        <Curation/>
        {/* 6. 크루모집 */}
        <Crew/>
        {/* 7. 산보만보 스토리 */}
        <Story/>
      </main>
      {/* Footer */}
      <Footer/>
    </>
  );
}

export default App;
