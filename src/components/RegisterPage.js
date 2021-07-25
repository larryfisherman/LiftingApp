import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function RegisterPage() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmUserPassword, setConfirmUserPassword] = useState("")

  const history = useHistory();

  return (
    <Container>
      <Content>
      <Link to="/">
            <NavLogo src="./images/lifting-logo.png" />
        </Link>
        
        <p>Register with your email</p>
        <EmailInput
          placeholder="Email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <PasswordInput
          placeholder="Password"
          onChange={(e) => setUserPassword(e.target.value)}
          value={userPassword}
          type="password"
        />
        <PasswordInput
          placeholder="Confirm password"
          onChange={(e) => setConfirmUserPassword(e.target.value)}
          value={confirmUserPassword}
          type="password"
        />
        <Button onClick = { () => {
          axios.post("https://localhost:5001/api/account/register", {
            email: userEmail,
            password: userPassword,
            confirmPassword: confirmUserPassword
          }).catch(err => console.log(err))
          .then(history.push("/loginPage"))
        }}
        >
          REGISTER
        </Button>
        <Description>
            <Link to="/loginPage">
                Already have an account? Sign in!
            </Link>
        </Description>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  background-color: #5463a5;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  justify-contente: center;
  align-items: center;
  flex-direction: column;
  padding-top: 60px;
  font-weight: 550;
  letter-spacing: 2px;
  line-height: 10px;
  font-size: 1.875rem;
`;

const NavLogo = styled.img`
  position: relative;
  box-sizing: border-box;
  height: 10rem;
  margin-top: -3rem;
`;

const EmailInput = styled.input`
  padding: 15px;
  width: 21.875rem;
  background-color:#c5c4d5;
  border: none;
  border-radius: 3px;
  margin: 5px;
  outline: none;
  color: black;
`;

const PasswordInput = styled.input`
  padding: 15px;
  width: 21.875rem;
  outline: none;
  background-color: #c5c4d5;
  border: none;
  border-radius: 3px;
  color: black;
  margin: 5px;    
`;

const Button = styled.button`
  height: 50px;
  width: 21.875rem;
  background-color: #c5c4d5;
  border: none;
  border-radius: 3px;
  color: white;
  font-size: 1.5rem;
  letter-spacing: 2px;
  margin: 20px;
  cursor: pointer;
`;

const Description = styled.p`
  margin: 1rem;
  font-size: 0.6rem;
  cursor: pointer;
  `;

export default RegisterPage;