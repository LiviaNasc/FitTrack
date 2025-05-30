import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 250px;
  height: calc(100vh - 60px); 
  background-color: #2a2a2a;
  color: white;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 60px; /* Altura do header */
  justify-content: space-between;
  padding-bottom: 20px;
`;


export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li`
  padding: 15px 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #FF6600;
  }
`;

export const LogoutContainer = styled.div`
  padding: 20px;
`;
