import styled from 'styled-components';

export enum Size {
  '2x-large' = '2.5rem',
  'x-large' = '2.25rem',
  large = '2rem',
  medium = '1.5rem',
  base = '1.25rem',
  small = '1rem',
}

export enum Weight {
  thin = 100,
  extralight = 200,
  light = 300,
  normal = 400,
  medium = 500,
  semibold = 600,
  bold = 700,
  extrabold = 800,
  black = 900,
}

export interface ITitle {
  size?: keyof typeof Size;
  weight?: keyof typeof Weight;
  color?: string;
}

export const Title = styled.span<ITitle>`
  font-family: OpenSans;
  font-size: ${(props) => (props.size ? Size[props.size] : Size['x-large'])};
  font-weight: ${(props) => (props.weight ? Weight[props.weight] : Weight.normal)};
  color: ${(props) => props.color || 'inherit'};
`;
