import styled from "styled-components";
import Timer from "./components/Timer";

const App = () => {
  return (
    <AppBox>
      <Box>
        <Timer />
      </Box>
    </AppBox>
  );
}

const AppBox = styled.div`
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
const Box = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 80%;
width: 80%;
border-radius: 2rem;
`
export default App;
