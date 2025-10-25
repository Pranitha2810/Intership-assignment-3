import styled from 'styled-components';
export const Card = styled.div`
        border : 2px solid ${(props) => (props.themeMode === "light" ? "#000000" : "#ffffff")};
        padding : 20px;
        margin : 0px;
        margin-bottom : 10px;
        display : flex;
        flex-direction : column;
        gap : 5px;
        justify-content : center;
        align-items : center;
        width:300px;
        height : 630px;
        box-shadow : 3px 3px 2px;
        img{
            width : 300px;
            height : 300px;
            box-shadow : 3px 3px 2px gray;
        }
        .items{
            display : flex;
            gap: 10px;
        }
        
    `