import React from "react";
import styled from "styled-components";



const ChaosGate = ({ events }) => {
  return (
    <Section>
      <h2>카오스 게이트</h2>
      
    </Section>
  );
};

export default ChaosGate;



const Section = styled.section`
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.dark};
  margin: auto;
`;
