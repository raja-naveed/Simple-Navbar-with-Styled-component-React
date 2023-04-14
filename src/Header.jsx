import React from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #2a2a2a;
  color: #fff;
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 0;
  }
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 2px;
  color: #fcbc2f;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  text-decoraction: none;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavLink = styled.a`
  margin-right: 1.5rem;
  color: #fff;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;

  &:hover {
    color: #fcbc2f;
  }

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }
`;

const Header = () => {
  return (
    <Navbar>
      <Logo>OKX Perfume</Logo>
      <NavLinks>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">About</NavLink>
        <NavLink href="#">Products</NavLink>
        <NavLink href="#">Contact</NavLink>
      </NavLinks>
    </Navbar>
  );
};

export default Header;
