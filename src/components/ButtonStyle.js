import styled from 'styled-components';
 export const Button = styled.button`
        width: 100px;
        padding : 5px;
        border : 2px solid black;
        box-shadow : 3px 3px 2px grey;
        background-color : ${(props) => (props.themeMode === "light" ? "blue" : "blue")};
        color : white;
    `