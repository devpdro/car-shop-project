import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f4f3f4;
  color: #000;
  // dedde3
  padding: 0.9rem 0;
`;

export const Width = styled.div`
  max-width: ${({ theme }) => theme.width.standard};
  margin: ${({ theme }) => theme.width.margin};
`;

export const Box = styled.div`
  margin-top: 6.5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5rem 1rem;
  span {
    font-size: 3rem;
    display: flex;
    align-items: center;
    padding-right: 1rem;
    color: #7e7e7e;
  }
  h2 {
    font-size: 1.2rem;
  }
  p {
    color: #7e7e7e;
  }
`;

export const Reserve = styled.div`
  display: flex;
  align-items: center;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
`;

export const Time = styled.div`
  display: flex;
  align-items: center;
`;