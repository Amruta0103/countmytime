import styled from "styled-components";

const App = () => {
  const App = styled.div`
  background-color : #282c34 ;
  color white;
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
  const Timer = styled.div`
  margin: auto;
  `
  const Time = styled.div`
  font-size: 5rem;
  `
  return (
    <App>
     <Pomodoro>
      <Timer>
        <Time>25:00</Time>
      </Timer>
     </Pomodoro>
    </App>
  );
}

export default App;
