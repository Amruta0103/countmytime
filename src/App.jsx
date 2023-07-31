import styled from "styled-components";
import Timer from "./components/Timer";
import SideBar from "./components/SideBar";

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
        <Side>
          <SideBar />
        </Side>
        <BlockTwo>
          <Timer />
        </BlockTwo>
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
`
const Side = styled.div`
flex: 0.5;
border: 1px solid white;
height: 100%;
border-radius: 2rem 0 0 2rem;
`
const BlockTwo = styled.div`
flex:2;
border: 1px solid white;
height: 100%;
border-radius: 0 2rem 2rem 0;
`
export default App;
