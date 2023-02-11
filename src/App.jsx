import styled from "styled-components";
import Timer from "./components/Timer";

const App = () => {
  const App = styled.div`
  background-color : #282c34 ;
  color: white;
  display: flex;
  text-align : center;
  justify-content: center;
  align-items:center;
  height: 100vh;
  width: 100%;
  `
  const Pomodoro = styled.div`
  height: 80%;
  width: 80%;
  border-radius: 2rem;
  backdrop-filter: blur(20px);
  background: rgb(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  `

  return (
    <App>
     <Pomodoro>
      <Timer />
     </Pomodoro>
    </App>
  );
}

export default App;
