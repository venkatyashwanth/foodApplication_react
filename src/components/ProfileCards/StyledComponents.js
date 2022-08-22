import styled from "styled-components";

export const ProfileContainer = styled.button`
  width: 120px;
  height: 120px;
  border: 1px solid black;
  margin: 10px;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
`;

export const ProfileContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
