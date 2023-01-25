import React from 'react';
// Styles
import * as S from './Title.styles';

interface TitleProps extends S.ITitle {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children, ...props }) => {
  return <S.Title {...props}>{children}</S.Title>;
};

export default Title;
