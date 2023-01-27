import styled from "styled-components";
import { InputNumber as inputNumber } from "antd";
import propTypes from "prop-types";

const InputNumber = styled(inputNumber)`
  width: 100%;
  border-radius: 5px;
  box-shadow: 1px 4px 26px -14px rgba(0, 0, 0, 0.75);
`;

InputNumber.propTypes = {
  type: propTypes.number,
};

InputNumber.defaultProps = {};

export default InputNumber;
