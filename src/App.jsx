import styled from "styled-components";
import Timer from "./components/Timer";
import logo from "./assets/logo.svg";
import bg from "./assets/background.jpg";

const App = () => {
  return (
    <AppBox>
      <Bg src={bg} alt="bg"/>
      <Fg>
        <Box>
          <TitleBox>
            <Logo src={logo} alt={"logo"}/>
            <Title>CountMyTime</Title>
          </TitleBox>
          <Timer />
          <Footer>Made with ♡ by Amruta D.</Footer>
        </Box>
      </Fg>
    </AppBox>
  );
}

const AppBox = styled.div`
height: 100vh;
width: 100%;
position: relative;
`
const Bg = styled.img`
position: absolute;
z-index: 0;
height: 100%;
width: 100%;
`
const Fg = styled.div`
position: relative;
z-index: 2;
display: flex;
flex-direction: column;
color: white;
display: flex;
text-align : center;
justify-content: center;
align-items: center;
height: inherit;
width: 100%;
margin: auto;
`
const Box = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 80%;
width: 80%;
background-color: rgba(255,255,255,0.5);
padding: 0.5rem;
border-radius: 1rem;
`
const TitleBox = styled.div`
margin: 0rem auto;
display: flex;
align-items: center;
color: #292929;
`
const Logo = styled.img`
width: 22px;
height: 22px;
margin: auto 0.5rem;
`
const Title = styled.div`
font-size: 24px;
font-weight: 500;
`
const Footer = styled.div`
font-size: 18px;
font-weight: 400;
color: #3a3a3a;
`
export default App;
