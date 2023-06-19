import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  position: absolute;
  top: 60px;
  right: 0px;
  width: 100%;
  border-left: 1px solid #d5d5d5;
  border-right: 1px solid #d5d5d5;
  border-bottom: 1px solid #d5d5d5;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
`;
export const InBox = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  &:hover {
    background-color: #dfdfdf;
  }
`;
