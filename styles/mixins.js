import { css } from 'styled-components';
import theme from './theme';
const { colors, transition } = theme;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
  `,

  flexColumn: css`
    display: flex;
    flex-direction: column;
  `,
  button: css`
    padding: 10px 20px;
    border: 2px dashed ${colors.orange};
    transition: ${transition};
    &:hover,
    &:focus {
      border: 2px solid ${colors.orange};
      color: ${colors.grey};
    }
  `,
};

export default mixins;
