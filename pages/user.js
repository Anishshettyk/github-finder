import React, { useState, useEffect } from 'react';
import { Error, UserInfo } from '../components';
import PropTypes from 'prop-types';
import { getUserData } from '../utils/apis';

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

  return <div>{error && error.error ? <Error /> : <UserInfo userData={userData} />}</div>;
};

User.prototype = {
  query: PropTypes.object,
};

export default User;
