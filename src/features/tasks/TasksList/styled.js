import { styled, css } from "styled-components";

export const List = styled.ul`
    margin: 0px;
    padding: 15px 25px;
    min-height: 60px;
`

export const Item = styled.li`
    list-style-type: none;
    display: grid;
    grid-template-columns: auto 1fr auto;
    margin-top: 20px;
    border-bottom: 2px solid #eee;
    padding-bottom: 10px;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`

export const Content = styled.span`
    margin-left: 10px;
    margin-right: 10px;
    align-content: center;
    word-break: break-word;

    ${({ $done }) => $done && css`
         text-decoration: line-through;
    `}
`

export const Button = styled.button`
    width: 35px;
    height: 35px;
    border: 0px;
    color: #fff;
    transition: 0.4s;

    ${({ $markDone }) => $markDone && css`
        background-color: ${({ theme }) => theme.colors.green.default};

        &:hover{
            background-color: ${({ theme }) => theme.colors.green.hover};
            outline: none;
        }

        &:active{
            background-color: ${({ theme }) => theme.colors.green.active};
        }
    `}

    ${({ $deleteTask }) => $deleteTask && css`
        background-color: ${({ theme }) => theme.colors.crimson.default};
        
        &:hover{
            background-color: ${({ theme }) => theme.colors.crimson.hover};
            outline: none;
        }

        &:active{
            background-color: ${({ theme }) => theme.colors.crimson.active};
        }
    `}
`