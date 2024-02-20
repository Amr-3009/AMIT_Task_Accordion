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
`;
const Question = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    color: #000;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
const Dropdown = styled.div``;

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
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <Question>
                    <p>{`0${index + 1}`}</p>
                    <h2>{item.question}</h2>
                  </Question>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
}

export default Accordion;
