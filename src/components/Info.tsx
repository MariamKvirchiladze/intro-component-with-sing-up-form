import styled from "styled-components";

const Info = (): JSX.Element => {
  return (
    <InfoContainer>
      <h1>Learn to code by watching others</h1>
      <p>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.{" "}
      </p>
    </InfoContainer>
  );
};

export default Info;

const InfoContainer = styled.div`
  width: 100%;
  max-width: 525px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;

  h1 {
    color: white;
    text-align: center;
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: -0.29px;

    @media screen and (min-width: 1024px) {
      text-align: left;
      font-size: 50px;
      font-weight: 700;
      line-height: 55px;
      letter-spacing: -0.52px;
    }
  }

  p {
    color: white;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;

    @media screen and (min-width: 1024px) {
      text-align: left;
    }
  }
`;
