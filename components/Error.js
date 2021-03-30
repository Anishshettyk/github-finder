import React from 'react';
import { RateLimit } from './index';
import styled from 'styled-components';
import { mixins, theme } from '../styles';
import Link from 'next/link';

import { GoMarkGithub } from 'react-icons/go';

const { colors, transition } = theme;

const ErrorContainer = styled.div`
  ${mixins.flexCenter}
  flex-direction: column;
  height: 80vh;
  svg {
    width: 100px;
    height: 100px;
    color: ${colors.orange};
  }
  p {
    text-align: center;
  }
  span {
    color: ${colors.lightBlue};
    font-weight: bold;
  }
  a {
    padding: 10px 20px;
    border: 2px dashed ${colors.orange};
    transition: ${transition};
    &:hover,
    &:focus {
      border: 2px solid ${colors.orange};
      color: ${colors.grey};
    }
  }
`;

const Error = () => {
  return (
    <div>
      <RateLimit />
      <ErrorContainer>
        <GoMarkGithub />
        <p>
          Something went wrong !!
          <br />
          You might have entered incorrect github ID. <br /> <span>please try again :)</span>
        </p>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </ErrorContainer>
    </div>
  );
};

export default Error;
