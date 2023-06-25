import styled from 'styled-components';

export const Container1 = styled.div`
  display: block;
  position: absolute;
  top: 56px;
  right: 130px;
  width: 375px;
  height: 470px;
  border-left: 1px solid #d5d5d5;
  border-right: 1px solid #d5d5d5;
  border-bottom: 1px solid #d5d5d5;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  background-color: #ffffff;
`;
export const Container2 = styled.div`
  display: block;
  position: absolute;
  top: 56px;
  right: 88px;
  width: 375px;
  height: 470px;
  border-left: 1px solid #d5d5d5;
  border-right: 1px solid #d5d5d5;
  border-bottom: 1px solid #d5d5d5;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  background-color: #ffffff;
`;
export const Container3 = styled.div`
  display: block;
  position: absolute;
  top: 56px;
  right: 50px;
  width: 375px;
  height: 470px;
  border-left: 1px solid #d5d5d5;
  border-right: 1px solid #d5d5d5;
  border-bottom: 1px solid #d5d5d5;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  background-color: #ffffff;
`;
export const Container4 = styled.div`
  display: block;
  position: absolute;
  top: 56px;
  right: 8px;
  width: 375px;
  height: 470px;
  border-left: 1px solid #d5d5d5;
  border-right: 1px solid #d5d5d5;
  border-bottom: 1px solid #d5d5d5;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  background-color: #ffffff;
`;
export const InBox = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 10px;
  outline-style: none;
  background-color: #eaeaea;
  h3 {
    font-size: 12px;
  }
  button {
    border: none;
    background-color: transparent;
  }
`;
export const InBoxIn = styled.div`
  flex: 1 auto;
`;
export const Mark = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button {
    cursor: pointer;
    color: #3a35ff;
  }
  button:hover {
    color: #799eff;
  }
`;

export const Content = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  padding: 8px 10px;
  border-top: 1px solid #cfcfcf;
  border-bottom: 1px solid #cfcfcf;
  ul {
    list-style: none;
  }
  li {
    display: flex;
  }
  &:hover {
    background-color: #dfdfdf;
  }
`;

export const MessageButton = styled.button`
  position: absolute;
  right: 7px;
  top: 5px;
  border: none;
  background-color: transparent;
  img {
    width: 20px;
    height: 20px;
  }
`;

export const ContentItem = styled.div`
  height: 55px;
  cursor: auto;
  img {
    width: 16px;
    height: 16px;
  }
`;

export const ContentItem2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 6px;
  font-size: 12px;
`;

export const ContentItem3 = styled.div`
  margin-top: 4px;
`;
