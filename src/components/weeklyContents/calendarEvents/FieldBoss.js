import React from "react";
import styled from "styled-components";



const FieldBoss = ({ events }) => {
  return (
    <Section>
      <h2>필드보스</h2>
      
    </Section>
  );
};

export default FieldBoss;



const Section = styled.section`
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.dark};
  margin: auto;
`;
