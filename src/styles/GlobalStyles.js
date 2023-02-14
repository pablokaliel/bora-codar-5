import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}

body{
  width: 100vw;
  height: 100vh;
  min-height: 100vh;

  display: grid;
  place-content:center;
  
  font-family: "Noto Sans",sans-serif;
  background: #c58989;
}

button{
  cursor: pointer;
  border:none;
}

a{
  text-decoration: none;
}
`;