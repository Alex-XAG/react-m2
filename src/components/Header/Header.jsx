import React from 'react';
import { Nav, NavDiv } from './Header.styled';

export const Header = ({ showModal }) => {
  return (
    <Nav>
      <NavDiv>
        <span>Navabar</span>
        <button type="button" onClick={showModal}>
          Open Modal
        </button>
      </NavDiv>
    </Nav>
  );
};
