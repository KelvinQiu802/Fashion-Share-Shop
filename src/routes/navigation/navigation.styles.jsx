import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 5px;
  margin-left: 200px;
  h2 {
    margin: 0;
    font-family: 'Delicious Handrawn', cursive;
    font-size: 40px;
  }
`;

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  margin-bottom: 50px;
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: 50px;
  font-size: 22px;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
