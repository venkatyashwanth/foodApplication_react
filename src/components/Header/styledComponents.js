import { red } from "@mui/material/colors";
import styled from "styled-components";

export const NavTag = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  h1 {
    color: gray;
  }
`;

export const AppsListContainer = styled.ul`
  display: flex;
`;

export const AppListItems = styled.li`
  list-style-type: none;
  text-align: right;
  padding-left: 20px;
  font-size: 18px;
  cursor: pointer;
    position: relative;
display: inline-block;


&:after{
    content: '';
    background-color: rgba(39, 15, 41, 0.35);
    height: 3px;
    width: 0%;
    position: absolute;
    right: 0;
    bottom: -3px;
    transition: 0.5s;
}

  &:hover:after{
    width: 80px;
  }
`;
