import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;

  padding-bottom: 22px;
  padding-right:32px;
  padding-left:32px;
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
  color: #ebebeb;

  font-weight: 400;
  line-height: 28px;

  background: #330518;
  transition:all 0.4s;

  box-shadow: 
    0px 11px 7px rgba(0, 0, 0, 0.01),
    0px 7px 7px rgba(0, 0, 0, 0.04),
    0px 4px 6px rgba(0, 0, 0, 0.1), 
    0px 2px 4px rgba(0, 0, 0, 0.26),
    0px 0px 2px rgba(0, 0, 0, 0.29), 
    inset 0px 2px 3px rgba(255, 255, 255, 0.06);

  :hover {
    opacity: 0.6;
    color:#fff;
    box-shadow:
      11px 17px 13px rgb(0 0 0 / 1%), 
      0px 0px 7px rgb(0 0 0 / 4%),
      7px -1px 14px rgb(0 0 0 / 10%),
      1px 3px 10px rgb(0 0 0 / 26%),
      0px 1px 5px rgb(0 0 0 / 29%),
      inset 3px 3px 14px 8px rgb(255 255 255 / 6%);
  }
`;

export const ButtonS = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 64px;
  height: 64px;
  
  border-radius: 999px;
  font-size: 24px;
  color: #ff1b79;
  
  font-weight: 400;
  line-height: 28px;

  background: #330518;
  transition:all 0.4s;
  
    box-shadow: 
      0px 11px 7px rgba(0, 0, 0, 0.01), 
      0px 7px 7px rgba(0, 0, 0, 0.04),
      0px 4px 6px rgba(0, 0, 0, 0.1),
      0px 2px 4px rgba(0, 0, 0, 0.26),
      0px 0px 2px rgba(0, 0, 0, 0.29),
      inset 0px 2px 3px rgba(255, 255, 255, 0.06);

  :hover {
    opacity: 0.6;

    box-shadow:
      11px 17px 13px rgb(0 0 0 / 1%),
      0px 0px 7px rgb(0 0 0 / 4%),
      7px -1px 14px rgb(0 0 0 / 10%),
      1px 3px 10px rgb(0 0 0 / 26%),
      0px 1px 5px rgb(0 0 0 / 29%),
      inset 3px 3px 14px 8px rgb(255 255 255 / 6%);
  }
`;

export const Swapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  height: 180px;
  
  border-top-left-radius: 48px;
  border-top-right-radius: 48px;

  padding: 0px 32px;
  border: 1px solid #000;
  margin: 0px 2px 2px 2px;

  background: #280613;

  h2{
    color: #fff;
    font-weight: 300;
    font-size: 24px;
    margin-bottom: 8px;
  }
`;

export const Div = styled.div`
  height: 100px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #fff;
  border-radius:8px;

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
  justify-content: center;
  align-items: center;
  
  width: 64px;
  height: 64px;
  
  border-radius: 999px;
  font-size: 28px;
  font-weight: 400;
  
  line-height: 28px;
  
  background: #330518;
  transition: all 0.4s;
  box-shadow: 
    0px 11px 7px rgba(0, 0, 0, 0.01), 
    0px 7px 7px rgba(0, 0, 0, 0.04),
    0px 4px 6px rgba(0, 0, 0, 0.1), 
    0px 2px 4px rgba(0, 0, 0, 0.26),
    0px 0px 2px rgba(0, 0, 0, 0.29),
    inset 0px 2px 3px rgba(255, 255, 255, 0.1);
  color: #ebebeb;

  :hover {
    opacity: 0.6;
    color:#fff;
    box-shadow: 
    11px 17px 13px rgb(0 0 0 / 1%), 
    0px 0px 7px rgb(0 0 0 / 4%),
    7px -1px 14px rgb(0 0 0 / 10%), 
    1px 3px 10px rgb(0 0 0 / 26%),
    0px 1px 5px rgb(0 0 0 / 29%), 
    inset 3px 3px 14px 8px rgb(255 255 255 / 6%);
  }
  transition:all 0.4s;
`;

export const ButtonQ = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 217%;
  height: 58px;
  
 border-radius:14px;
  font-size: 24px;
  font-weight: 400;
  
  line-height: 28px;
  
  transition: all 0.4s;
  background: #50152e;
  box-shadow: 
    0px 11px 7px rgba(0, 0, 0, 0.01),
    0px 7px 7px rgba(0, 0, 0, 0.04),
    0px 4px 6px rgba(0, 0, 0, 0.1),
    0px 2px 4px rgba(0, 0, 0, 0.26),
    0px 0px 2px rgba(0, 0, 0, 0.29),
    inset 0px 2px 3px rgba(255, 255, 255, 0.1);

  :hover {
    opacity: 0.6;
    color:#fff;
    box-shadow: 
      11px 17px 13px rgb(0 0 0 / 1%),
      0px 0px 7px rgb(0 0 0 / 4%),
      7px -1px 14px rgb(0 0 0 / 10%), 
      1px 3px 10px rgb(0 0 0 / 26%),
      0px 1px 5px rgb(0 0 0 / 29%), 
      inset 3px 3px 14px 8px rgb(255 255 255 / 6%);
  }

  color: #ebebeb;
`;
