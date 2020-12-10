import React from 'react';
import Image from 'react-bootstrap/Image';
import * as S from './styled';

export const Header = () => (
  <>
    <S.DecorativeEl />
    <S.Wellcome>HI! Glad to see YOU!</S.Wellcome>
    <S.Header>
      <S.HeaderContainer>
        <S.CompanyName>
          AwesomeCompanyName
        </S.CompanyName>
        <S.CompanyMotto>
          &#34;AwesomeCompanyMoto&#34;
        </S.CompanyMotto>
        <S.CompanyLogo>
          <Image src="./@.svg" style={{ width: '8rem' }} />
        </S.CompanyLogo>
      </S.HeaderContainer>
    </S.Header>
  </>
);
