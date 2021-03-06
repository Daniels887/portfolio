import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  font-size: 16px;
  padding-bottom: 16px;
`;

export const Link = styled.a`
  text-decoration: none;
  font-weight: bold;
  margin-left: 3px;
  color: white;

  &:hover {
    color: lightgray;
  }
`;