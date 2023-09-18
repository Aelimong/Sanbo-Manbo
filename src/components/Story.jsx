export default function Story() {
  return (
    <section className="sec05-story">
      <div className="wrapper">
        <div className="sec05-text-center-story">
          <div className="sec05-text-center sec05-text-half">
            <h4>삼보만보의 스토리</h4>
            <p className="sec05-mb-2">
              문화데이터 광장의 API 데이터를 활용해서 운동을 목적으로 하거나
              즐기기 위해 걷는 산책을 위한 장소안내 및 주요 등산로 서비스를
              제공하고 있습니다. 등산로, 등산로시설, 둘레길링크, 산책로분기점,
              자전거길노드, 자전거길, 자전거보관소 정보를 WMS/WFS OGC 표준
              공간정보로 제공합니다.
            </p>
          </div>
        </div>

        <div className="sec05-story-img">
          <div className="sec05-story-icon sec05-story-icon-1">
            <div className="sec05-story-icon-svg1"></div>
            <p>공공 api의 데이터를 불러와서 화면을 구현 </p>
          </div>
          <div className="sec05-story-icon sec05-story-icon-4"></div>
          <div className="sec05-story-icon sec05-story-icon-2">
            <div className="sec05-story-icon-svg2"></div>
            <p>사용자의 위치를 평가하여 그에 맞는 트래킹 장소 안내</p>
          </div>
          <div className="sec05-story-icon sec05-story-icon-3">
            <div className="sec05-story-icon-svg3"></div>
            <p>장소 외에도 트래킹할 때 필요한 준비물이나 관련 시설 정보 제공</p>
          </div>
          <div className="sec05-story-icon sec05-story-icon-5"></div>
          <div className="sec05-story-icon sec05-story-icon-6"></div>

        </div>
      </div>
    </section>
  );
}
