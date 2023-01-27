import styled, { css } from "styled-components";
import { Button as button } from "antd";
import propTypes from "prop-types";

const Button = styled(button)`
  border-radius: 5px;
  font-size: 14px;
  line-height: 21px;
  font-weight: bold;
  color: white;
  box-shadow: 5px 13px 26px -9px rgba(0, 0, 0, 0.75);
  ${(props) =>
    props.type === "primary" &&
    css`
      background-color: #e30c17;
      border: none;
    `}
  ${(props) =>
    props.type === "find" &&
    css`
      background-color: #1677ff;
      border: none;
      margin-bottom: 30px;
    `}
`;

Button.propTypes = {
  type: propTypes.string,
};

Button.defaultProps = {};

export default Button;
