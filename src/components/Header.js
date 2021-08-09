import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";
import { useDispatch } from "react-redux";
import { logout } from "../store/userSlice";
import recipesIcon from "../images/recipes-icon.png";
import calculatorIcon from "../images/calculator-icon.png";
import workoutsIcon from "../images/workouts-icon.png";
import navLogo from "../images/lifting-logo.png";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <Nav>
      <NavLogo src={navLogo} alt="" />
      {!user?.id ? (
        <LoginButton>
          <Link to="/registerPage">SIGN IN</Link>
        </LoginButton>
      ) : (
        <>
          <NavMenu>
            <Link to="/recipes">
              <a href="">
                <img src={recipesIcon} alt="" />

                <span>RECIPES</span>
              </a>
            </Link>

            <Link to="/calculators">
              <a href="">
                <img src={calculatorIcon} alt="" />
                <span>CALCULATORS</span>
              </a>
            </Link>

            <Link to="/workouts">
              <a href="">
                <img src={workoutsIcon} alt="" />
                <span>WORKOUTS</span>
              </a>
            </Link>
          </NavMenu>
          <LoginButton
            onClick={() => {
              dispatch(logout());
              localStorage.removeItem("token");
              localStorage.removeItem("userId");
            }}
          >
            LOGOUT
          </LoginButton>
        </>
      )}
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
  padding: 60px 100px;
  height: 110px;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  border-bottom: 2px solid black;
  background-color: white;
`;

const NavLogo = styled.img`
  position: relative;
  box-sizing: border-box;
  height: 105px;
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

    img {
      margin: 10px;
      height: 35px;
      width: 35px;
      min-width: 20px;
    }
 
    span {
        font-size: 16px;
        letter-spacing: 1px;
        font-weight: 700;
        color: black;
    }

    @media (max-width: 768px) {
      display: none;
    }
`;

const LoginButton = styled.a`
  background: transparent;
  border: 2px solid black;
  border-radius: 4px;
  color: black;
  padding: 10px 15px;
  font-size: 16px;
  letter-spacing: 2px;
  cursor: pointer;
  margin-right: -2rem;
  font-weight: 700;
`;
