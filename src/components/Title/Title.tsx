import React from 'react';
// Styles
import * as S from './Title.styles';

interface TitleProps extends S.ITitle {
  label: string;
}

const Title: React.FC<TitleProps> = ({ label, ...props }) => {
  return <S.Title {...props}>{label}</S.Title>;
};

export default Title;
