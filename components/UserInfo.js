import React from 'react';
import styled from 'styled-components';
import { theme, mixins } from '../styles';
import { BiLinkExternal, BiBuildingHouse, BiCalendar } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';

const { colors, transition } = theme;

const StyledUserContainer = styled.section`
  margin: 0px 20px 40px;
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
`;

const UserContainer = styled.div`
  display: flex;
  .user__info {
    ${mixins.flexCenter};
    flex-direction: column;
    align-items: flex-start;
    margin-left: 40px;
    span {
      color: ${colors.orange};
      text-transform: uppercase;
    }
    h1 {
      font-size: 40px;
      font-weight: bold;
    }
    h3 {
      margin-top: 5px;
      color: ${colors.lightBlue};
      border-bottom: 1px solid transparent;
      transition: ${transition};
      &:hover,
      &:focus {
        border-bottom: 1px solid ${colors.lightBlue};
      }
      svg {
        margin-left: 2px;
      }
    }
  }
`;
const UserMoreInfo = styled.section`
  display: flex;
  margin-top: 20px;
  .more__info {
    margin: 0px 20px;
    display: flex;
    align-items: center;

    svg {
      font-size: 25px;
      color: ${colors.orange};
      margin-right: 10px;
    }

    p {
      font-weight: 900;
    }
  }
`;

const UserNumbers = styled.section`
  ${mixins.flexCenter};
  margin-top: 30px;
  div {
    margin: 0px 20px;
    padding: 10px 20px;
    border: 3px dashed ${colors.orange};
    min-width: 300px;
    p {
      line-height: 0;
      color: ${colors.lightBlue};
      font-weight: bold;
      position: relative;
      text-align: center;
      &:before,
      &:after {
        position: absolute;
        content: '';
        width: 30%;
        height: 2px;
        background-color: ${colors.orange};
        opacity: 0.4;
        top: 50%;
      }
      &:before {
        left: 10%;
      }
      &:after {
        right: 10%;
      }
    }
    h2 {
      text-align: center;
      text-transform: uppercase;
    }
    h1 {
      color: ${colors.orange};
      text-align: center;
      font-size: 40px;
      font-weight: bolder;
    }
  }
`;

const UserInfo = ({ userData }) => {
  const getFormattedDate = (date) => {
    const dateFormatted = new Date(date).toLocaleDateString('en-US', { month: 'long', date: 'numeric', year: 'numeric' });
    return dateFormatted;
  };
  console.log(userData);
  return (
    <StyledUserContainer>
      <UserContainer>
        <img src={userData?.avatar_url} alt="hello" />
        <div className="user__info">
          <span>{userData?.type}</span>
          <h1>{userData?.name}</h1>
          {userData?.login && (
            <a href={userData?.html_url} target="_blank" rel="noopener noreferrer">
              <h3>
                @{userData?.login}
                <BiLinkExternal />
              </h3>
            </a>
          )}
        </div>
      </UserContainer>

      <UserMoreInfo>
        {userData?.company && (
          <div className="more__info">
            <BiBuildingHouse />
            <p>{userData?.company}</p>
          </div>
        )}

        {userData?.location && (
          <div className="more__info">
            <MdLocationOn />
            <p>{userData?.location}</p>
          </div>
        )}

        {userData?.created_at && (
          <div className="more__info">
            <BiCalendar />
            <p>Joined {getFormattedDate(userData?.created_at)}</p>
          </div>
        )}
      </UserMoreInfo>
      <UserNumbers>
        <div>
          <p>Total</p>
          <h2>REPOSITORIES.</h2>
          <h1>{userData?.public_repos || 0}</h1>
        </div>
        <div>
          <p>Total</p>
          <h2>Followers.</h2>
          <h1>{userData?.followers || 0}</h1>
        </div>
        <div>
          <p>Total</p>
          <h2>Following.</h2>
          <h1>{userData?.following || 0}</h1>
        </div>
      </UserNumbers>
    </StyledUserContainer>
  );
};

export default UserInfo;
