import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing: border-box; 
  color:#fff;
}

body{
  width: 100vw;
  height: 100vh;
  min-height: 100vh;

  display: grid;
  place-content:center;
  
  font-family: "Noto Sans",sans-serif;
  background: radial-gradient(circle, rgba(79,0,125,1) 17%, rgba(45,0,85,1) 58%, rgba(28,0,66,1) 97%);
}

button{
  cursor: pointer;
  border:none;
}

a{
  text-decoration: none;
}
`;