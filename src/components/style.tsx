import styled from "styled-components"

export const ListContainer = styled.div`
  & > h2 {
    text-align: center;
    color: #837ff1;
    font-weight: 400;
  }
`
export const List = styled.div`
  color: white;
  background-color: #1c2025;
  border-radius: 5px;
  height: 500px;
  width: 350px;
  overflow-y: auto;
  font-size: 16px;
  & > ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  & > ul > li {
    border: 1px #00000000 solid;
    padding: 8px 10px;
    border-radius: 5px;
    &.selectable {
      cursor: pointer;
    }
    &.selectable:hover  {
      background-color: #30353b;
      border: 1px #7a838d solid;
    }
    &.selected  {
      background-color: #4a4e53;
      border: 1px #b3b6b9 solid;
    }
  }
`
export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
`
export const TaskInputContainer = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > h2 {
    text-align: center;
    color: white;
    font-weight: 300;
  }
  & > input {
    color: white;
    background-color: #00000000;
    border: 1px solid #837ff1;
    height: 20px;
    min-width: 300px;
    border-radius: 8px;
    display: block;
    padding: 10px;
    outline: 0;
    &:focus, &:focus-visible {
      border: 1px solid #c1bfee;
    }
  }
`
export const Typing = styled.div`
  color: #bea046;
  display: block;
  height: 30px;
  padding-top: 15px;
  padding-left: 10px;
  text-align: left;
  width: 100%;
`

const Button = styled.button`
  border: 0px;
  background-color: #00000000;
  display:flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 120px;
  height: 35px;
  font-size: 12px;
`
export const CancelButton = styled(Button)`
  transition-duration: .2s;
  &:hover { background-color: #f44336; }
  color: white;
  border-radius: 5px;
  margin: 10px;

  display:flex;
  justify-content: center;
  align-items: center;
`
export const SubmitButton = styled(Button)`
  background-color: #4caf50;
  color: white;
  border-radius: 5px;
  margin: 10px;
  transition-duration: .3s;
  &.disabled {
    background-color: #5d885f75;
    cursor: auto;
  }
`
export const HeaderContainer = styled.div`
  padding: 10px 0;
  width: 100%;
  height: 200px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  /* justify-content: center; */
  & > .logo {
    margin-left: 50px;
    height: 200px;
    object-fit: contain;
  }
  & > .header-text {
    margin-left: 60px;
    margin-top: 20px;
    text-align: center;
    & > h1 {
      color: #ecebed;
      font-weight: 200;
      font-size: 34px;
      margin-bottom: 5px;
    }
    & > h2 {
      color: #b3b6c1;
      font-weight: 200;
      font-size: 26px;
      margin: 0;
    }
  }
`