import styled from "styled-components";

export const StyledButton = styled.button`
    background: none;
    border: none;
    margin: 0px;
    color: ${({ theme }) => theme.colors.primary.default};
    padding: 0px 15px;
    transition: 0.4s;

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px) {
        padding: 10px 0px
    }

    &:hover {
        color: ${({ theme }) => theme.colors.primary.hover}; 
        outline: none;
    }

    &:active {
        color: ${({ theme }) => theme.colors.primary.active}; 
    }

    &:disabled {
        color: #aaa;
    }
`