import React, { useState } from "react";
import { Data } from "./Data";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin: auto;
  transform: translateY(20%);
`;
const Container = styled.div``;
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 2rem;
  cursor: pointer;
  background-color: #eee;
  padding: 1rem 2rem;
`;
const Question = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
const Dropdown = styled.div`
  background-color: #eee;
  color: black;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  width: 100%;
  font-size: 1.1rem;
  text-align: center;
`;

const FaqItem = styled.div``;

function Accordion() {
  const [clicked, setClicked] = useState(false);
  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };
  return (
    <IconContext.Provider value={{ color: "#000", size: "25px" }}>
      <AccordionSection>
        <Container>
          {Data.map((item, index) => {
            return (
              <FaqItem onClick={() => toggle(index)} key={index}>
                <Wrap
                  style={{
                    "border-top":
                      clicked === index ? "5px solid #3e8565" : "none",
                    "margin-bottom": clicked === index ? "0" : "1rem",
                    "box-shadow":
                      clicked === index
                        ? "none"
                        : "11px 9px 12px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <Question>
                    <p
                      style={{
                        color: clicked === index ? "#3e8565" : "#4A4A4A",
                      }}
                    >{`0${index + 1}`}</p>
                    <h2>{item.question}</h2>
                  </Question>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </FaqItem>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
}

export default Accordion;
