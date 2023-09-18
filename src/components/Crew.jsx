import "../styles/curation.scss";
import { createSvgIcon } from "@mui/material/utils";
import Swal from "sweetalert2";
import 'sweetalert2/src/sweetalert2.scss'

const PlusIcon = createSvgIcon(
  // credit: plus icon from https://heroicons.com/
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>,
  "AddOutlined"
);
export default function Crew() {
  return (
    <section className="sec05-crew">
      <div className="wrapper">
        <div className="sec05-text-center sec05-text-center-crew">
          <h3 className="sec05-mb-1">
            혼자가 아닌 여럿이 함께 트래킹 크루 모집
          </h3>
          <p className="sec05-mb-2">season 2023</p>
        </div>

        <div
          className="sec05-mb-3 sec05-crew-flex"
          onClick={() => {
            Swal.fire({
              title: "서비스 준비중입니다",
              html: "보다 나은 서비스 제공을 위하여 페이지 준비중에 있습니다.<br/>빠른시일내에 준비하여 찾아뵙겠습니다.",
              icon: "warning",
              showCancelButton: false,
              confirmButtonColor: "var(--main-green-50)",
              confirmButtonText: "확인",
            });
          }}
        >
          <div className="sec05-crew-img-box1">
            <h4>산타 트래킹</h4>
          </div>
          <div className="sec05-crew-img-box2">
            <h4>둘레길 걷기</h4>
          </div>
        </div>
        <div className="sec05-crew-flex">
          <div className="sec05-crew-img-box3">
            <h4>B.I.T</h4>
          </div>
          <div className="sec05-crew-img-box4">
            <h4>우리 산하 걷기여행</h4>
          </div>
        </div>
        <button className="sec05-crew-button">
          <span>
            <PlusIcon className="sec05-plus-icon"></PlusIcon>
          </span>{" "}
          크루원모집참여
        </button>
      </div>
    </section>
  );
}
