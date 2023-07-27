import styled from "styled-components";

const BlueBanner = (): JSX.Element => {
  return (
    <BlueBox>
      <p>
        Try it free 7 days <span>then $20/mo. thereafter </span>
      </p>
    </BlueBox>
  );
};

export default BlueBanner;

const BlueBox = styled.div`
  width: 100%;
  padding: 18px 67px;
  border-radius: 10px;
  background-color: #5e54a4;
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);

  @media (min-width: 1024px) {
    width: 540px;
    padding: 17px 0;
  }

  p {
    font-size: 15px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0.27px;
    text-align: center;
    color: #ffffff;

    span {
      font-size: 15px;
      font-weight: 400;
      line-height: 26px;
      letter-spacing: 0.27px;
    }
  }
`;
