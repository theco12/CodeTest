import { Link } from "react-router-dom";
import "../css/header.css";
import logo from "../image/logo.png";
import styled from "styled-components";

const Header = () => {
  return (
    <div className="container">
      <div className="inner">
        <Link className="logo">
          <img src={logo} width="170px" />
        </Link>
        <div className="header-menu">
          <Link className="menu">서비스소개</Link>
          <Link className="menu">회원가입</Link>
          <Link className="menu">
            <Button color="#fff" board="black" hovercolor="#fff" border="black">
              로그인
            </Button>
          </Link>
          <Link className="menu">
            <Button color="#1fa170">도입문의</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Button = styled.button`
  border-radius: 50px;
  background-color: ${(props) => props.color || "black"};
  font-weight: 800;
  color: ${(props) => props.board || "#fff"};
  width: 94px;
  height: 40px;
  border: none;
  border: 1px solid ${(props) => props.board || "#1fa170"};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.hovercolor || "#1fa170"};
    background-color: ${(props) => props.border || "#fff"};
    border: 1px solid ${(props) => props.border || "#1fa170"};
  }
`;

export default Header;
