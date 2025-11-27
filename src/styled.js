import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

export const Nav = styled.nav`
    background-color: ${({theme}) => theme.colors.primary.default};
    padding: 20px;
    justify-items: center;
`

export const NavList = styled.ul`
    margin: 0;
    list-style-type: none;
    display: flex;
    gap: 50px;
`

export const StyledNavLink = styled(NavLink)`
    color: white;
    font-size:16px;
    text-decoration: none;

    &.active {
        font-weight: 600;
    }
`