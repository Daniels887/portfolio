import styled, { keyframes } from 'styled-components';

export const List = styled.div`
  list-style: none;
  padding-bottom: 20px;
  margin-top: 30px;
  background: #F5F5F5;
  padding: 30px;
  border-radius: 4px;
`;

export const ContainerList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;

export const Title = styled.h1`
  margin-top: 20px;
  margin-bottom: 20px;
  color: #333;

  @media (max-width: 599px) {
    text-align: center;
  }
`;


export const Name = styled.h3`
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
`;

export const Bar = styled.span`
  background: #353b48;
  display: block;
  height: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 0 10px #2187e7b3;
`;

const show = (width) => keyframes`
  from {
    width: 0;
  }
  to {
    width: ${width}
  }
`;

const opacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ListItem = styled.li`
  margin: 10px 0;
`;

export const ListItemHidden = styled.li`
  margin: 10px 0;
  display: ${props => props.show ? 'block' : 'none'};
  animation: ${opacity} 0.5s ease-in;
`;

export const Content = styled.span`
  height: 2px;
  float: left;
  background: #2187e7;
  animation: ${props => show(props.width)} 2s ease-out;
  animation-fill-mode: forwards;
`;

export const More = styled.div`
  text-align: center;
  color: #333;
  font-size: 18px;
  cursor: pointer;
  font-weight: bold;
  display: ${props => props.show ? 'none' : 'block'};
  transition: 0.5s;
  margin-top: 20px;

`;

export const Text = styled.p`
  &:hover {
    color: black;
  }
`;

export const Less = styled.div`
  text-align: center;
  color: #333;
  font-size: 18px;
  cursor: pointer;
  font-weight: bold;
  display: ${props => props.show ? 'block' : 'none'};
  transition: 0.5s; 
  margin-top: 20px;
`;