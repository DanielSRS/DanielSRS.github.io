import { Text } from 'react-native';
import { createStyledText } from '../StyledBuilder';
import { createStyledTouchableOpacity } from '../StyledBuilder';
import { createStyledView } from '../StyledBuilder';

export const Navbar = () => {
  return (
    <NavbarContainer>
      {/* Capa */}
      <NavbarItem>
        <NavbarItemText>Capa</NavbarItemText>
      </NavbarItem>

      {/* Sobre */}
      <NavbarItem>
        <NavbarItemText>Sobre</NavbarItemText>
      </NavbarItem>

      {/* Projetos */}
      <NavbarItem>
        <NavbarItemText>Projetos</NavbarItemText>
      </NavbarItem>

      {/* Habilidades */}
      <NavbarItem>
        <NavbarItemText>Habilidades</NavbarItemText>
      </NavbarItem>

      {/* Contato */}
      <NavbarItem>
        <NavbarItemText>Contato</NavbarItemText>
      </NavbarItem>

      {/* Blog */}
      <NavbarItem>
        <NavbarItemText>Blog</NavbarItemText>
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

const NavbarItem = createStyledTouchableOpacity({
  paddingVertical: 4,
  paddingHorizontal: 16,
  borderWidth: 1,
});
const NavbarItemText = createStyledText({
  fontSize: 14,
});
