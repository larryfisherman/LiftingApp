import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <NavLogo src="./images/lifting-logo.png" alt="" />
      {/* <LoginButton>REGISTER</LoginButton> */}
      <NavMenu>
        <a href="">
          <img src="./images/recipes-icon.png" alt="" />
          <span>RECIPES</span>
        </a>
        <a href="">
          <img src="./images/calculator-icon.png" alt="" />
          <span>CALCULATORS</span>
        </a>

        <a href="">
          <img src="./images/workouts-icon.png" alt="" />
          <span>WORKOUTS</span>
        </a>
      </NavMenu>
    </Nav>
  );
}

export default Header;

const Nav = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  padding: 20px 100px;
  height: 125px;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  background-color: #040714;
`;

const NavLogo = styled.img`
  position: relative;
  box-sizing: border-box;
  height: 120px;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start wrap;
  flex-direction: row nowrap;
  height: 100%;
  position: relative;
  margin-left: 25px;
  margin-right: auto;
  cursor: pointer;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    flex-direction: column;
    margin-left: 50px;

    img {
        margin: 10px;
      height: 50px;
      width: 50px;
      min-width: 20px;
    }

    span {
        font-size: 18px;
        letter-spacing: 1px;
    }

    @media (max-width: 768px) {
      display: none;
    }
`;

/* const LoginButton = styled.a`
  background: transparent;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  color: #f9f9f9;
  padding: 10px 15px;
  font-size: 16px;
  letter-spacing: 2px;
  cursor: pointer;
  margin-right: 50px;
  cursor: pointer;
`; */
