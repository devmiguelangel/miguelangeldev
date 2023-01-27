import styled from 'styled-components';

enum ISize {
  'x-large' = '2rem',
  large = '1.5rem',
  medium = '1.25rem',
  base = '1rem',
}

interface IText {
  size?: keyof typeof ISize;
}

const Text = styled.span<IText>`
  font-size: ${({ size }) => (size ? ISize[size] : ISize.base)};
  font-weight: 300;
`;

export default Text;
