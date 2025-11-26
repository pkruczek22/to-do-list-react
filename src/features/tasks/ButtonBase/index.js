import {StyledButton} from "./styled";

const ButtonBase = ({children, ...props}) => (
    <StyledButton {...props}>{children}</StyledButton>
);

export default ButtonBase;