import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 12px;

  padding-bottom: 22px;
  padding-right: 32px;
  padding-left: 32px;
  margin-top: 26px;
`;

export const ButtonP = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 64px;
  height: 64px;

  border-radius: 999px;
  font-size: 24px;
  line-height: 28px;
  font-weight: 400;
  opacity:0.8;
  @media screen and (max-width:550px){
    opacity:1;
  }
  background-color: transparent !important;
  border: 3px solid #fff;
  box-shadow: 
  0 0 0.2rem #bc13fe,
  0 0 6px #bc13fe,
  0 0 12px #ff00ff8c,
  0 0 1px #ff00ff52,
  0 0 0px #ff00ff6b,
  inset 0 0 4px #ff00ff63;
  text-shadow:
  0 0 7px #fff,
  0 0 10px #fff,
  0 0 21px #fff,
  0 0 42px #bc13fe,
  0 0 82px #bc13fe,
  0 0 92px #bc13fe,
  0 0 102px #bc13fe,
  0 0 151px #bc13fe;
  

  

  :hover {
    opacity: 1;
  }
`;

export const ButtonS = styled.button`
  display: flex;
  opacity:0.8;
  @media screen and (max-width:550px){
    opacity:1;
  }
  transition: all 0.2 ease-in;
  justify-content: center;
  align-items: center;

  width: 64px;
  height: 64px;

  border-radius: 999px;
  font-size: 24px;
 
  color: #ff1b79;
  background-color: transparent;
  border: 3px solid #fff;
  box-shadow:
  0 0 0.2rem #f00,
  0 0 6px #f00,
  0 0 12px #f00,
  0 0 1px #f00,
  0 0 0px #f00,
  inset 0 0 4px #f00;

  text-shadow:
  0 0 7px #f00,
  0 0 10px #f00,
  0 0 21px #f00,
  0 0 42px #f00,
  0 0 82px #f00,
  0 0 92px #f00,
  0 0 102px #f00,
  0 0 151px #f00;
  font-weight: 400;
  line-height: 28px;

  

  :hover {
    opacity: 1;
  }
`;

export const Swapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 183px;

  border-top-left-radius: 36px;
  border-top-right-radius: 36px;

  padding: 0px 32px;

  border: 3px solid #fff;
  box-shadow:
  0 0 0.2rem #fff,
  0 0 0.2rem #fff,
  0 0 0.6rem #f0f,
  0 0 0.8rem #f0f,
  0 0 2.8rem #f0f,
  inset 0 0 1.3rem #f0f;

  
`;

export const Div = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 3px solid #fff;
  box-shadow:
  0 0 0.2rem #fff,
  0 0 0.2rem #fff,
  0 0 0.1rem #f0f,
  0 0 0.8rem #ff00ff78,
  0 0 2.8rem #ff00ff75,
  inset 0 0 1.3rem #ff00ff94;
  border-radius: 8px;
`;

export const Result = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  padding: 0px 22px;
`;

export const Icon = styled.span`
  font-size: 32px;
`;

export const Resulted = styled.h1`
  font-size: 36px;
`;

export const ButtonT = styled.button`
  display: flex;
  opacity:0.8;
  @media screen and (max-width:550px){
    opacity:1;
  }
  transition: all 0.2 ease-in;
  justify-content: center;
  align-items: center;

  width: 64px;
  height: 64px;

  border-radius: 999px;
  font-size: 28px;
  font-weight: 400;
  background-color: transparent;
  line-height: 28px;
  box-shadow:
  0 0 0.2rem #10ff00,
  0 0 6px #10ff00,
  0 0 12px #10ff00,
  0 0 1px #10ff00,
  0 0 0px #10ff00,
  inset 0 0 4px #10ff00;
  text-shadow:
  0 0 7px #10ff00,
  0 0 10px #10ff00,
  0 0 21px #10ff00,
  0 0 42px #10ff00,
  0 0 82px #10ff00,
  0 0 92px #10ff00,
  0 0 102px #10ff00,
  0 0 151px #10ff00;

  :hover {
    opacity: 1;
  }
  
`;

export const ButtonQ = styled.button`
  display: flex;
  opacity:0.8;
  @media screen and (max-width:550px){
    opacity:1;
  }
  transition: all 0.2 ease-in;
  justify-content: center;
  align-items: center;

  width: 217%;
  height: 58px;
  background-color: transparent;
  box-shadow: 0 0 0.2rem #ffd200,
   0 0 6px #ffd200,
   0 0 12px #ffd200,

    0 0 1px #ffd200,
     0 0 0px #ffd200,
     inset 0 0 4px #ffd200;
  border-radius: 14px;
  font-size: 24px;
  font-weight: 400;

  line-height: 28px;

  

  :hover {
    opacity: 1;
  }
`;
