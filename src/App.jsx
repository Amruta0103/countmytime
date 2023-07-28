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
  `
  return (
    <App>
      <Timer />
    </App>
  );
}

export default App;
