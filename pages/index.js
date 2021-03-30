import Head from 'next/head';
import { useState } from 'react';
import styled from 'styled-components';
import { theme, mixins } from '../styles';
import Router from 'next/router';

import { GoMarkGithub } from 'react-icons/go';

const { colors } = theme;

const StyledContainer = styled.section`
  ${mixins.flexCenter};
  height: 100vh;
  flex-direction: column;
  form {
    max-width: 600px;
    text-align: center;
    svg {
      height: 100px;
      width: 100px;
      fill: ${colors.orange};
    }
    h1 {
      margin-top: 3vh;
      font-weight: 900;
      font-size: 3rem;
      letter-spacing: 0.2rem;
      span {
        color: ${colors.orange};
      }
    }

    input {
      margin-top: 3vh;
      width: 100%;
      max-width: 500px;
      background-color: ${colors.blue};
      border-radius: 5px;
      font-size: 2rem;
      color: ${colors.pinkWhite};
      outline: 0;
      border: 0;
      padding: 10px 10px;
    }
    p {
      font-size: 1rem;
      color: ${colors.orange};
    }
  }
`;

const Home = () => {
  const [userName, setUserName] = useState('');
  const submitUserName = (event) => {
    event.preventDefault();
    Router.push({
      pathname: '/user',
      query: { id: userName },
    });
  };
  return (
    <main>
      <Head>
        <title>Github Finder</title>
      </Head>
      <StyledContainer>
        <form onSubmit={(event) => submitUserName(event)}>
          <GoMarkGithub />
          <h1>
            Github Finder<span>.</span>
          </h1>
          <p>Enter your github ID</p>
          <input type="text" name="github userName" onChange={(event) => setUserName(event.target.value)} />
        </form>
      </StyledContainer>
    </main>
  );
};

export default Home;
