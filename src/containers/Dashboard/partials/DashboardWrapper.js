import React from "react";
import styled from "styled-components";

const DashboardWrapper = ({ children }) => {
  const Wrapper = styled("div")`
    background: #f1f3f4;
    padding: 20px 50px;
    min-height: 100vh;
    height: 100%;
  `;
  return <Wrapper>{children}</Wrapper>;
};

export default DashboardWrapper;
