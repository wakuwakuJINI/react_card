import headerImg from "../../img/reactLogo.png";

const reactDes = ["리액트기초", "리액트 필수요소", "리액트 핵심기술", "짜증폭발🤬🤬🤬🤬", "어려워요"];

function genRandom(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const des = reactDes[genRandom(4)];
  return (
    <header>
      <img src={headerImg} alt=""></img>
      <p>{des}</p>
    </header>
  );
}
