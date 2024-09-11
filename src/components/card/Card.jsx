import "./Card.css";

//function 앞에 export default 넣어서 내보내기도 가능//
function Card({ title: subject, content: body, backgroundColor, textColor, img, array = ["react"] }) {
  return (
    <div className="card" style={{ backgroundColor: backgroundColor, color: textColor }}>
      <img src={img} alt="" />
      <h2 className="card-title">{subject}</h2>
      <p className="card-content">{body}</p>
      <p>{array[0]}</p>
    </div>
  );
}

//하나의(단일의) 함수만 내부로 보낼때 default
export default Card;
// export { Card }; <- 이렇게도 쓴다.
