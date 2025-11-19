import styled from "styled-components";

export const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    padding: 15px 25px;
    column-gap: 15px;
    
    @media (max-width: 767px) {
        grid-template-columns: 1fr;
        row-gap: 10px;
}
`

export const Input = styled.input`
    height: 40px;
    padding: 3px 10px;
    border: 1px solid #eee;
`

export const Button = styled.button`
    max-width: fit-content;
    background-color: hsl(180, 100%, 25%);
    color: #fff;
    border: none;
    padding: 10px;
    transition: 0.4s;

    @media (max-width: 767px) {
        max-width: 100%;
    }

    &:hover {
        background-color: hsl(180, 100%, 35%);
        outline: none;
        transform: scale(1.15);

        @media (max-width: 767px) {
            transform: none;
        }
    }

    &:active {
        background-color: hsl(180, 100%, 40%);
    }
`