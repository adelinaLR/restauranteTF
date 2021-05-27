import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 16px;
    height: 59px;
    left: 0px;
    top: 0px;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
    background: #FCBF49;
    h1{
        left: 16px;
        top: 6.5px;
        font-family: Montserrat;
        font-size: 24px;
        font-weight: 700;
        letter-spacing: 0.1em;
        flex: none;
        order: 0;
        flex-grow: 0;
        margin: 0px 88px;
    }
`;


export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    height: 50%;
    margin: 5%
    h2{
        margin-bottom: 25px;
    }
`
export const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 1em;
    column-gap: 2em;
`



export const StyledButton = styled.button`
    border: none;
    border-radius: 25px;
    background-color:${props => (props.color === "red" ? "#D62828" : (props.color === "orange" ? "#F77F00" : (props.color === "blue" ? "#003049" : (props.color === "green" ? "#EAE2B7" : "#ffffff"))))};
    color:${props => ((props.color === "red" || props.color === "blue") ? "#fff" : "#000")};
    font-size: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    transition: background-color .15s ease-out;
    box-shadow: 2px 2px 2px #000;
    &:active{
        box-shadow: 0px 0px 0px 2px ${props => (props.color === "red" ? "#D62828" : (props.color === "orange" ? "#F77F00" : (props.color === "blue" ? "#003049" : (props.color === "green" ? "#EAE2B7" : "#ffffff"))))};
    }
    /*
    MISSING HOVER AND CLICK ANIMATIONS

     */
`;








export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;900&display=swap');
/*
../../public/images/
*/
    * {
        font-family: "Montserrat", sans-serif;
        font-size: 24px;
        font-weight: 300;
    }
    body {
        background-image: url("https://i.imgur.com/el9I4lu.png");
        background-repeat: repeat;
        background-size: 100%;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
            margin: 0;
            padding: 0;
            border: 0;
            vertical-align: baseline;
    }
    article, aside, details, figcaption, figure,
        footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote: before, blockquote: after,
        q: before, q: after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
}
`;