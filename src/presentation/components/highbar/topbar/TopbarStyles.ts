import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  border-bottom: 2px solid #6550f3;
  font-weight: 700;
  position: fixed;
  width: 100vw;
  z-index: 1;
  padding: 1.5rem 0rem;
`;

export const Width = styled.div`
  max-width: ${({ theme }) => theme.width.standard};
  margin: ${({ theme }) => theme.width.margin};
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  span {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
  }
`;

export const Navbar = styled.ul`
  display: flex;
  list-style: none;
  li {
    color: ${({ theme }) => theme.colors.primary};
    margin-left: 0.9rem;
  }
`;

export const Login = styled.div`
  display: flex;
  div {
    display: flex;
    span {
      padding-left: 1.4rem;
    }
    h4 {
      padding-left: 0.2rem;
    }
  }
`;