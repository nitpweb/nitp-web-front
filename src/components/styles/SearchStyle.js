import styled from "styled-components"

export const SearchStyle = styled.div`
width: 100%;

.form-search{
    display: flex;
    margin: 0 ;
    text-align: center;
    align-items: flex-start;
    font: bold 13px sans-serif;
    max-width: 40%;
    position: relative;
}

.form-search input{
    width: 60%;
    box-sizing: border-box;
    border-bottom-left-radius: 2px;
    border-top-left-radius: 2px;
    background-color:  ${props => props.theme.dropColor};
    box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.08);
    padding: 14px 15px 14px 10px;
    border: 1px solid  ${props => props.theme.primaryTextColor};
    color:#4E565C;
    outline: none;
    -webkit-appearance: none;
}

.form-search i{
    position: absolute;
    top: 15px;
    left: 20px;
    font-size: 16px;
    color: #80A3BD;
}


`
