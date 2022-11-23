import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
	background-color: #548E19;
}
body {
    box-sizing: border-box;
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
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
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
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
* {
	box-sizing: border-box;
    font-family: 'Lexend Deca', sans-serif;
}
div {
    h1 {
        font-size: 35px;
        font-weight: 700;
        margin-bottom: 10px;
        font-family: 'Londrina Solid', cursive;
        border-bottom: 10px solid #F6D14B;
        span {
            color: #ffffff;
        }
    }
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    form {
        font-family: 'Roboto', sans-serif;
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    input {
        width: 100%;
        margin-bottom: 5px;
        height: 30px;
    }
    button {
        width: 100%;
        height: 30px;
        border: none;
        border-radius: 5px;
        background-color: #85BA4F;
        color: #ffffff;
        font-weight: 700;
        font-size: 18px;
    }
    h2 {
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
        margin-top: 30px;
        font-size: 18px;
        padding: 10px;
        border: none;
        border-radius: 5px;
    }
}
	
`;

export default GlobalStyle;
