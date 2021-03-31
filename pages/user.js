import React, { useState, useEffect } from 'react';
import { Error, UserInfo, RateLimit } from '../components';
import PropTypes from 'prop-types';
import { getUserData } from '../utils/apis';
import styled from 'styled-components';
import { mixins } from '../styles/';
import Link from 'next/link';

const TopBanner = styled.section`
  ${mixins.flexBetween}
  a {
    margin: 20px;
  }
`;

const User = ({ query }) => {
  const userName = query?.id;
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState({ error: false, status: 200 });

  const getMeUserData = async (userName) => {
    try {
      const res = await getUserData(userName);
      setUserData(res?.data);
    } catch (error) {
      setError({ error: true, status: 404 });
    }
  };

  useEffect(() => {
    getMeUserData(userName);
  }, []);

  return (
    <div>
      {error && error.error ? (
        <Error />
      ) : (
        <>
          <TopBanner>
            <RateLimit />
            <Link href="/">
              <a>Find someone else</a>
            </Link>
          </TopBanner>

          <UserInfo userData={userData} />
        </>
      )}
    </div>
  );
};

User.prototype = {
  query: PropTypes.object,
};

export default User;
