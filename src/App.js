import "./styles/style.scss";
import Header from "./components/Header";
import ThemaTreck from "./components/ThemaTreck";

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
        <ThemaTreck />
        {/* 5. 큐레이션 지도 */}
        {/* 6. 크루모집 */}
        {/* 7. 산보만보 스토리 */}
      </main>
      {/* Footer */}
    </>
  );
}

export default App;
