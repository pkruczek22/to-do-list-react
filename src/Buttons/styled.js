import styled from "styled-components";

export const ButtonsContainer = styled.div`
    display: flex;
    padding: 15px 25px;
    align-self: center;
    justify-content: center;
    height: 100%;

    @media (max-width:767px) {
        flex-direction: column;
        padding-top: 0px;
        min-height: 0px;
    }
`

export const Button = styled.button`
    background: none;
    border: none;
    margin: 0px;
    color: hsl(180, 100%, 25%);
    padding: 0px 15px;
    transition: 0.4s;

    @media (max-width:767px) {
        padding: 10px 0px
    }

    &:hover {
        color: hsl(180, 100%, 35%); 
        outline: none;
    }

    &:active {
        color: hsl(180, 100%, 40%); 
    }

    &:disabled {
        color: #aaa;
    }
`