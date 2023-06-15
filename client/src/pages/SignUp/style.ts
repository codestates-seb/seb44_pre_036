import styled from 'styled-components';

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #b8afaf;
    border-radius: 7px;
    width: 300px;
`;

export const StyledInput = styled.input`
    height: 28.5px;
    width: 260px;
    border: 1px solid #b8afaf;
    border-radius: 3px;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const UserInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 20px;
`

export const UserInfoLabel = styled.label`
   font-size: 15px;
   font-weight: 700;
`

export const Text = styled.p`
    font-size: 13px;
    `