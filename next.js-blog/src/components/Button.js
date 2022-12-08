import styled from "styled-components";

const Button = styled.div`
  width: 160px;
  height: 50px;
  border-radius: 50px;
  padding: 13px 35px;
  font-size: 14px;
  cursor: pointer;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bg};
`;

export default Button;
