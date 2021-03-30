import { css } from 'styled-components';
import theme from './theme';
const { colors } = theme;

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

  flex: css`
    display: flex;
    align-items: center;
  `,
};

export default mixins;
