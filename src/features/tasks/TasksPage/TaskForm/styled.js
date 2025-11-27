import styled from "styled-components";

export const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    padding: 15px 25px;
    column-gap: 15px;
    
    @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
        grid-template-columns: 1fr;
        row-gap: 10px;
}
`

export const Button = styled.button`
    max-width: fit-content;
    background-color: ${({ theme }) => theme.colors.primary.default};
    color: #fff;
    border: none;
    padding: 10px;
    transition: 0.4s;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
        max-width: 100%;
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.primary.hover};
        outline: none;
        transform: scale(1.15);

        @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
            transform: none;
        }
    }

    &:active {
        background-color: ${({ theme }) => theme.colors.primary.active};
    }
`