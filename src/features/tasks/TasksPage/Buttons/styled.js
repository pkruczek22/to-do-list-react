import styled from "styled-components";

export const ButtonsContainer = styled.div`
    display: flex;
    padding: 15px 25px;
    align-self: center;
    justify-content: center;
    height: 100%;

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px) {
        flex-direction: column;
        padding-top: 0px;
        min-height: 0px;
    }
`