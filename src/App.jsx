/**
 * Props 구성
 * props: 컴포넌트에 데이터를 전달하는 역할
 * props : html attribute(속성)
 * react는 props를 하나의 Object로 묶어서 전달
 * props는 컴포넌트 함수에 첫번째 인수로 전달된다.
 * attribute를통해 값을 전달하고 속성의 이름은 자유롭게 정할수있다
 * 글자,숫자,객체,배열등을 전달할수 있다
 *
 */

import React from "react";
import Header from "./components/card/Header.jsx";
import { Fragment } from "react";
import CoreConcept from "./components/card/CoreConcept.jsx";
import Example from "./components/card/Example.jsx";

// import {Card} from "./components/Card";  <- 이렇게도 쓴다

/**
 * 자바스크립트 구조분해(destructuring)
 *
 */

// 컴포넌트 분리

/** 데이터를 넘겨주는 방법
 *  1.props(attribute)
 *  2.children
 *  atrrtibute방식 : 보통 작은 여러가지 데이터를 컴퓨넌트에 전달할때 사용한다.
 *  children 방식 : jsx코드를 다른컴포넌트에 넘겨줄때 편리하게 사용 가능하다.*/


function App() {
  return (
    <Fragment>
      <Header />
      <main className="app">
        <h1>React Props 연습</h1>
        <CoreConcept />
        <Example />
      </main>
    </Fragment>
  );
}

export default App;
