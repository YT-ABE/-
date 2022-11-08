import "./style.css";

const dramas = [
  "이상한 변호사 우영우", // o
  "이태원 클라스", // o
  "킹덤", // x
  "오징어게임", // x
  "스카이캐슬", // o
];

// 필터기능
const searchFilter = (data, keyword) => {
  return data.filter((item) => item.includes(keyword));
};

// const filterdDramas = searchFilter(dramas, "캐");
//=============================  필터기능 =============================

// 어레이 안에 있는 요소들 html에 매핑하기
const conatiner = document.querySelector(".container");

conatiner.innerHTML = dramas.map((drama) => `<li>${drama}</li>`).join("");

// 검색 input 부분
const input = document.querySelector(".input");
input.addEventListener("keyup", (e) => {
  const keyword = e.target.value;
  const filterdDramas = searchFilter(dramas, keyword);
  conatiner.innerHTML = filterdDramas
    .map((drama) => `<li>${drama}</li>`)
    .join("");
});
