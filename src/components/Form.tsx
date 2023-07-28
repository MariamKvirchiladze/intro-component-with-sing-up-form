import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./Schema";
import errorimg from "../assets/images/icon-error.svg";
import BlueBanner from "./BlueBanner";
import styled from "styled-components";

interface types {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Form = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<types>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: types) => {
    if (data) {
      window.location.reload();
    }
  };
  return (
    <MainContainer>
      <BlueBanner />
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Mylable error={errors}>
            <MyInput
              error={errors}
              type="text"
              placeholder="First Name"
              {...register("firstName")}
              className="firstNameErrorBorder"
            ></MyInput>
            <img
              className="firstNameErrorImg"
              src={errorimg}
              alt="error icon"
            />
            <p>{errors.firstName?.message}</p>
          </Mylable>
          <Mylable error={errors}>
            <MyInput
              error={errors}
              type="text"
              placeholder="Last Name"
              {...register("lastName")}
              className="lastNameErrorBorder"
            ></MyInput>
            <img className="lastNameErrorImg" src={errorimg} alt="error icon" />
            <p>
              <p>{errors.lastName?.message}</p>
            </p>
          </Mylable>
          <Mylable error={errors}>
            <MyInput
              error={errors}
              type="text"
              placeholder="email"
              {...register("email")}
              className="emailErrorBorder"
            ></MyInput>
            <img className="emailErrorImg" src={errorimg} alt="error icon" />
            <p>
              <p>{errors.email?.message}</p>
            </p>
          </Mylable>
          <Mylable error={errors}>
            <MyInput
              error={errors}
              type="password"
              placeholder="password"
              {...register("password")}
              className="passwrdErrorBorder"
            ></MyInput>
            <img />
            <p>{errors.password?.message}</p>
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
      cursor: pointer;
      color: #ff7979;
    }
    span:hover {
      text-decoration: underline;
    }
  }
`;

const Mylable = styled.label<{ error: any }>`
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
  p:hover {
    font-size: 15px;
  }
  img {
    position: absolute;
    top: 15px;
    right: 10px;
  }
  .firstNameErrorImg {
    display: ${(props) => (props.error.firstName ? "block" : "none")};
  }

  .lastNameErrorImg {
    display: ${(props) => (props.error.lastName ? "block" : "none")};
  }

  .emailErrorImg {
    display: ${(props) => (props.error.email ? "block" : "none")};
  }

  .passwordErrorImg {
    display: ${(props) => (props.error.password ? "block" : "none")};
  }
`;

const MyInput = styled.input<{ error: any }>`
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

  .firstNameErrorBorder {
    border: ${(props) =>
      props.error.firstName ? "2px solid #FF7979" : "1px solid #dedede"};
  }

  .lastNameErrorBorder {
    border: ${(props) =>
      props.error.lastName ? "2px solid #FF7979" : "1px solid #dedede"};
  }

  .emailErrorBorder {
    border: ${(props) =>
      props.error.email ? "2px solid #FF7979" : "1px solid #dedede"};
  }

  .passwordErrorBorder {
    border: ${(props) =>
      props.error.password ? "2px solid #FF7979" : "1px solid #dedede"};
  }
`;
