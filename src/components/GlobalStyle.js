import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	body{
		background: ${({theme}) => theme.body};
		transition:0.8s ease;
		color:${({theme})=>theme.text};
	}
	.inc-exp-container{
		background:${({theme}) => theme.card};
		box-shadow:${({theme}) => theme.shadow};
		border-radius:8px;
		border-color:inherit;
	}
	input{
		background:${({theme}) => theme.card};
		color:${({theme})=>theme.text};
	}
	.list li{
		background:${({theme}) => theme.card};
		color:${({theme})=>theme.text};
		box-shadow:${({theme}) => theme.shadow};
	}
`;

export const lightTheme = {
	body:'#f1f1f1',
	text:'#141414',
	card:"#fff",
	shadow:"0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)"
}

export const darkTheme = {
	body:'#141414',
	text:'#f1f1f1',
	card:"#242424",
	shadow:"0 1px 3px rgba(255, 255, 255, 0.12), 0 1px 2px rgba(255, 255, 255, 0.24)"
}