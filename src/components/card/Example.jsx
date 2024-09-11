import { useState } from "react";
import { data } from "../../data";
import Section from "./Section";
import TabButton from "./TabButton";
import Tabs from "./Tabs";

export default function Example() {
  const [selectLabel, setSelectLabel] = useState();
  function HandleSelect(label) {
    setSelectLabel(label);
  }

  let tabContnet = <p>주제를 선택하세요</p>;
  if (selectLabel) {
    tabContnet = (
      <div>
        <h3>{data[selectLabel].title}</h3>
        <p>{data[selectLabel].content}</p>
        <pre>
          <code>{data[selectLabel].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section id="section" className="example" title="예시">
      <Tabs
        container={Section}
        buttons={
          <>
            <TabButton onClick={() => HandleSelect("props")} isSelected={selectLabel === "props"}>
              데이터전달
            </TabButton>
            <TabButton onClick={() => HandleSelect("component")} isSelected={selectLabel === "component"}>
              재사용 컴포넌트
            </TabButton>
            <TabButton onClick={() => HandleSelect("styling")} isSelected={selectLabel === "styling"}>
              동적 스타일링
            </TabButton>
          </>
        }
      >
        {tabContnet}
      </Tabs>
    </Section>
  );
}
