import GlobalStyles from "./Globalstyles";
import Info from "./components/Info";
import Form from "./components/Form";
import styled from "styled-components";
import bgMob from "./assets/images/bg-intro-mobile.png";
import bgdesc from "./assets/images/bg-intro-desktop.png";
function App(): JSX.Element {
  return (
    <MainContainer>
      <GlobalStyles />
      <Info />
      <Form />
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 88px 24px 64px;
  background: #ff7979;
  background-image: url(${bgMob});
  background-repeat: no-repeat;
  background-size: 100% 100vh;
  display: flex;
  flex-direction: column;
  gap: 64px;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    background-image: url(${bgdesc});
    gap: 45px;
  }
`;
