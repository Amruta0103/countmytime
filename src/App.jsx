import styled from "styled-components";
import Timer from "./components/Timer";

const App = () => {
  const App = styled.div`
  display: flex;
  background-color : #282c34 ;
  color: white;
  display: flex;
  text-align : center;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  margin: auto;
  `
  return (
    <App>
      <AppBox>
        <Timer />
      </AppBox>
    </App>
  );
}

const AppBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 80%;
width: 80%;
border-radius: 2rem;
border: 1px solid white;
`

export default App;
