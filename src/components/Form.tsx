import errorimg from "../assets/images/icon-error.svg";
import BlueBanner from "./BlueBanner";
import styled from "styled-components";

const Form = (): JSX.Element => {
  return (
    <MainContainer>
      <BlueBanner />
      <FormContainer>
        <form>
          <Mylable>
            <MyInput type="text" placeholder="First Name"></MyInput>
            <img src={errorimg} alt="error icon" />
            <p>error</p>
          </Mylable>
          <Mylable>
            <MyInput type="text" placeholder="Last Name"></MyInput>
            <img src={errorimg} alt="error icon" />
            <p>
              <p>error</p>
            </p>
          </Mylable>
          <Mylable>
            <MyInput type="text" placeholder="email"></MyInput>
            <img src={errorimg} alt="error icon" />
            <p>
              <p>error</p>
            </p>
          </Mylable>
          <Mylable>
            <MyInput type="password" placeholder="password"></MyInput>
            <img />
            <p>error</p>
          </Mylable>
          <button type="submit">CLAIM YOUR FREE TRIAL</button>
        </form>
        <p className="conditions">
          By clicking the button, you are agreeing to our
          <span> Terms and Services</span>
        </p>
      </FormContainer>
    </MainContainer>
  );
};

export default Form;

const MainContainer = styled.div`
  width: 100%;
  max-width: 540px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FormContainer = styled.div`
  width: 100%;
  padding: 24px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 8px;

  @media screen and (min-width: 1024px) {
    padding: 40px;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  button {
    width: 100%;
    height: 56px;
    border: none;
    text-align: center;
    background: #38cc8b;
    box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.0908818);
    border-radius: 5px;
    color: white;
    font-family: "Poppins", sans-serif;
    font-size: 15px;
    font-weight: 600;
    line-height: 26px;
  }
  button:hover {
    cursor: pointer;
    background: #77e2b3;
    box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.0908818);
  }
  .conditions {
    font-size: 11px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0px;
    text-align: center;
    color: #bab7d4;
    font-style: normal;
    width: 249px;
    margin: 0 auto;
    @media (min-width: 1024px) {
      line-height: 26px;
      width: 100%;
      margin: 0;
    }

    span {
      font-size: 11px;
      font-weight: 700;
      line-height: 21px;
      letter-spacing: 0px;
      text-align: center;
      color: #ff7979;
    }
  }
`;

const Mylable = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;

  p {
    color: #ff7979;
    font-size: 11px;
    font-style: italic;
    font-weight: 500;
    line-height: 17px;
    text-align: right;
  }
  img {
    position: absolute;
    top: 15px;
    right: 10px;
  }
`;

const MyInput = styled.input`
  width: 100%;
  background: #ffffff;
  border: 1px solid #dedede;
  border-radius: 5px;
  outline: none;
  padding: 15px 32px;
  color: #3d3b48;
  font-size: 14px;
  line-height: 26px;
  letter-spacing: 0.25px;
  font-weight: 600;
  :focus {
    outline: none;
  }
`;
