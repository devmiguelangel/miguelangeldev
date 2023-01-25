import styled from 'styled-components';

export enum Size {
  'x-large' = '2.26rem',
  large = '2rem',
  medium = '1.5rem',
  base = '1.25rem',
  small = '1rem',
}

export interface ITitle {
  size?: 'x-large' | 'large' | 'medium' | 'base' | 'small';
  color?: string;
}

export const Title = styled.h1<ITitle>`
  margin: 0;
  font-size: ${(props) => (props.size ? Size[props.size] : '2.25rem')};
  font-weight: 600;
  color: ${(props) => props.color || 'inherit'};
`;
