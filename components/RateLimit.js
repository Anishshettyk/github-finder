import React, { useState, useEffect } from 'react';
import { getLimit } from '../utils/apis';
import styled from 'styled-components';
import { mixins, theme } from '../styles/';

const { colors } = theme;

const StyledRateLimiterContainer = styled.div`
  padding: 10px 20px;

  h2 {
    span {
      color: ${colors.lightBlue};
    }
  }

  p {
    line-height: 0;
    font-size: 1rem;
    display: inline-block;
    margin-top: 5px;
    padding: 15px 10px;
    color: ${colors.lightBlue};
    border: 1px dashed ${colors.orange};
  }
`;

const RateLimit = () => {
  const [limiters, setLimiters] = useState({});

  const getMeRateLimits = async () => {
    const res = await getLimit();
    setLimiters(res?.data?.rate);
  };

  useEffect(() => {
    getMeRateLimits();
  }, []);

  return (
    <StyledRateLimiterContainer>
      <h2>
        {limiters?.remaining} <span>/</span> {limiters?.limit}
      </h2>
      <p>Requests Remaining.</p>
    </StyledRateLimiterContainer>
  );
};

export default RateLimit;
