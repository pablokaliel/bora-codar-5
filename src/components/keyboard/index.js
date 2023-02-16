import { useState } from "react";
import {
  Container,
  ButtonP,
  ButtonS,
  ButtonT,
  ButtonQ,
  Swapper,
  Div,
  Result,
  Icon,
  Resulted,
} from "./styles";
function Keyboard() {
  const [num, setNum] = useState(0);
  const [oldnum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

  function inputNum(e) {
    var input = e.target.value;
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }

  function clear() {
    setNum(0);
  }

  function porcentage() {
    setNum(num / 100);
  }

  function changeSign() {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  }

  function operatorHandler(e) {
    var operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }

  function calculate() {
    if (operator === "/") {
      setNum(parseFloat(oldnum) / parseFloat(num));
    } else if (operator === "X") {
      setNum(parseFloat(oldnum) * parseFloat(num));
    } else if (operator === "-") {
      console.log(oldnum);
      console.log(num);
      console.log(oldnum - num);
      setNum(parseFloat(oldnum) - parseFloat(num));
    } else if (operator === "+") {
      setNum(parseFloat(oldnum) + parseFloat(num));
    }
  }

  return (
    <>
      <div>
        <Swapper>
          <Div>
            <Result>
              <Icon>
                {" "}
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.5 17.5C3.5 17.0168 3.89175 16.625 4.375 16.625H23.625C24.1082 16.625 24.5 17.0168 24.5 17.5C24.5 17.9832 24.1082 18.375 23.625 18.375H4.375C3.89175 18.375 3.5 17.9832 3.5 17.5Z"
                    fill="#fff"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.5 10.5C3.5 10.0168 3.89175 9.625 4.375 9.625H23.625C24.1082 9.625 24.5 10.0168 24.5 10.5C24.5 10.9832 24.1082 11.375 23.625 11.375H4.375C3.89175 11.375 3.5 10.9832 3.5 10.5Z"
                    fill="#fff"
                  />
                </svg>
              </Icon>
              <Resulted>{num}</Resulted>
            </Result>
          </Div>
        </Swapper>
      </div>
      <Container>
        <ButtonS onClick={clear}> C </ButtonS>
        <ButtonP onClick={changeSign}>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.4937 5.50628C22.8354 5.84799 22.8354 6.40201 22.4937 6.74372L6.74372 22.4937C6.40201 22.8354 5.84799 22.8354 5.50628 22.4937C5.16457 22.152 5.16457 21.598 5.50628 21.2563L21.2563 5.50628C21.598 5.16457 22.152 5.16457 22.4937 5.50628Z"
              fill="#EBEBEB"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.625 7.875C2.625 7.39175 3.01675 7 3.5 7H12.25C12.7332 7 13.125 7.39175 13.125 7.875C13.125 8.35825 12.7332 8.75 12.25 8.75H3.5C3.01675 8.75 2.625 8.35825 2.625 7.875Z"
              fill="#EBEBEB"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.875 2.625C8.35825 2.625 8.75 3.01675 8.75 3.5V12.25C8.75 12.7332 8.35825 13.125 7.875 13.125C7.39175 13.125 7 12.7332 7 12.25V3.5C7 3.01675 7.39175 2.625 7.875 2.625Z"
              fill="#EBEBEB"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.875 20.125C14.875 19.6418 15.2668 19.25 15.75 19.25H24.5C24.9832 19.25 25.375 19.6418 25.375 20.125C25.375 20.6082 24.9832 21 24.5 21H15.75C15.2668 21 14.875 20.6082 14.875 20.125Z"
              fill="#EBEBEB"
            />
          </svg>
          </ButtonP>
        <ButtonP onClick={porcentage}> % </ButtonP>
        <ButtonT onClick={operatorHandler} value="/"> / </ButtonT>

        <ButtonP onClick={inputNum} value={7}> 7 </ButtonP>
        <ButtonP onClick={inputNum} value={8}> 8 </ButtonP>
        <ButtonP onClick={inputNum} value={9}> 9 </ButtonP>
        <ButtonT onClick={operatorHandler} value="X"> X </ButtonT>

        <ButtonP onClick={inputNum} value={4}> 4 </ButtonP>
        <ButtonP onClick={inputNum} value={5}> 5 </ButtonP>
        <ButtonP onClick={inputNum} value={6}> 6 </ButtonP>
        <ButtonT onClick={operatorHandler} value="-"> - </ButtonT>

        <ButtonP onClick={inputNum} value={1}> 1 </ButtonP>
        <ButtonP onClick={inputNum} value={2}> 2 </ButtonP>
        <ButtonP onClick={inputNum} value={3}> 3 </ButtonP>
        <ButtonT onClick={operatorHandler} value="+"> + </ButtonT>

        <ButtonP onClick={inputNum} value={0}> 0 </ButtonP>
        <ButtonP onClick={inputNum} value={"."}> , </ButtonP>
        <ButtonQ onClick={calculate}>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.5 17.5C3.5 17.0168 3.89175 16.625 4.375 16.625H23.625C24.1082 16.625 24.5 17.0168 24.5 17.5C24.5 17.9832 24.1082 18.375 23.625 18.375H4.375C3.89175 18.375 3.5 17.9832 3.5 17.5Z"
              fill="#EBEBEB"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.5 10.5C3.5 10.0168 3.89175 9.625 4.375 9.625H23.625C24.1082 9.625 24.5 10.0168 24.5 10.5C24.5 10.9832 24.1082 11.375 23.625 11.375H4.375C3.89175 11.375 3.5 10.9832 3.5 10.5Z"
              fill="#EBEBEB"
            />
          </svg>
        </ButtonQ>
      </Container>
    </>
  );
}

export default Keyboard;
