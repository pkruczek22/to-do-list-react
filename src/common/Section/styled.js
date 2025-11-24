import styled from "styled-components";


export const TasksSection = styled.section`
    background-color: #fff;
    margin-top: 10px;
    box-shadow: 0px 1px 10px 1px #d8d8d8;
`

export const Header = styled.header`
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 2px solid #eee;
    align-items: center;

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px) {
        grid-template-columns: 1fr;
    }
`

export const Title = styled.h2`
    margin: 0px;
    padding: 15px 25px;
    font-size: 25px;
`