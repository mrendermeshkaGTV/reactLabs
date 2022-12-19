import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Container } from '@chakra-ui/react'

export default function Header() {
    const Navbar = styled.div`
      background-color: #7a4978;
      overflow: hidden;
    `;
    const Button = styled.a`
      float: left;
      color: #00dcf8;
      text-align: center;
      padding: 5vw 5vw;
      text-decoration: none;
      font-size: 20px;

      &:hover {
        background-color: #202020;
      }
    `;
    const Container= styled.div`
      background-color: #7e7e7e;
      font-family: consolas,sans-serif;
    `

    return (
        <Container maxW='1000x'>
            <Navbar>
                <Button href="/">Home</Button>
                <Button href='/categories'>Catagories</Button>
            </Navbar>

            <Outlet />
        </Container>
    );
}