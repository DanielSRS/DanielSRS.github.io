import React from 'react';
import { createStyledText } from '../StyledBuilder';
import { createStyledView } from '../StyledBuilder';
import { Link } from '../Link/Link';

export const Navbar = () => {
  return (
    <NavbarContainer>
      {/* Capa */}
      <NavbarItem>
        <Link target="#cover">
          <NavbarItemText>Capa</NavbarItemText>
        </Link>
      </NavbarItem>

      {/* Sobre */}
      <NavbarItem>
        <Link target="#about">
          <NavbarItemText>Sobre</NavbarItemText>
        </Link>
      </NavbarItem>

      {/* Projetos */}
      <NavbarItem>
        <Link target="#projects">
          <NavbarItemText>Projetos</NavbarItemText>
        </Link>
      </NavbarItem>

      {/* Habilidades */}
      <NavbarItem>
        <Link target="#skills">
          <NavbarItemText>Habilidades</NavbarItemText>
        </Link>
      </NavbarItem>

      {/* Contato */}
      <NavbarItem>
        <Link target="#contact">
          <NavbarItemText>Contato</NavbarItemText>
        </Link>
      </NavbarItem>

      {/* Blog */}
      <NavbarItem>
        <Link target="#blog">
          <NavbarItemText>Blog</NavbarItemText>
        </Link>
      </NavbarItem>
    </NavbarContainer>
  );
};

const NavbarContainer = createStyledView({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottomWidth: 1,
  borderColor: '#000',
  paddingVertical: 24,
});

const NavbarItem = createStyledView({
  paddingVertical: 4,
  paddingHorizontal: 16,
  borderWidth: 1,
});
const NavbarItemText = createStyledText({
  fontSize: 14,
});
