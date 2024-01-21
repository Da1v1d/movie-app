import styled from 'styled-components';

export const NavbarComponent = styled.nav`
  background-color: transparent;
  width: 100vw;
  height: 100px;
  color: white;
  display: flex;
  justify-content: ${(props) => (props.isMobile ? 'center' : 'space-between')};
`;
