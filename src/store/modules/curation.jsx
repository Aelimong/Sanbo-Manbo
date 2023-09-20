{
  /* <div id="cat">
<button onclick="location.reload()">바꾸기</button>
</div> */
}

let initialState = {};

fetch(
  "http://openapi.seoul.go.kr:8088/726867686d6a657937316979496c4d/json/walkHangangInfo/1/33/"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.walkHangangInfo.row);
    // document.getElementById('walkHangangInfo.row').innerHTML=data['walkHangangInfo.row'];
  });

export function curation(state = initialState) {
  return state;
}
