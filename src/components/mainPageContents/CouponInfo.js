import React from 'react';
import styled from 'styled-components';
import { coupons } from '../../data/coupons';

const CouponInfo = () => {

  return (
    <CouponInfoContainer>
      <CouponTitle>현재 사용가능한 쿠폰코드</CouponTitle>
      <CouponList>
        {coupons.map((coupon, index) => (
          <CouponItem key={index}>
            <ContentContainer>
            {coupon.title}
            <br /> 
            유효 기간 <ValidUntil>{coupon.validUntil}</ValidUntil>
            <br />
            <CouponCode>{coupon.code}</CouponCode>
            </ContentContainer>
          </CouponItem>
        ))}
      </CouponList>
    </CouponInfoContainer>
  );
};

export default CouponInfo;



const CouponInfoContainer = styled.div`
    border-radius: 8px;
    padding: 20px;
    margin-top: 20px;
    text-align: center;
    justify-content: center;
`;
    
const CouponTitle = styled.h2`
    color: ${(props) => props.theme.colors.text};
    margin-bottom: 15px;
`;
    
const CouponList = styled.ul`
    list-style: none;
    padding: 0;
`;
    
const CouponItem = styled.li`
    margin-bottom: 15px;
    color: ${(props) => props.theme.colors.text};
    &:last-child {
    margin-bottom: 0;
    }
    `;
    
const CouponCode = styled.span`
    font-weight: bold;
    font-size: 20px;
    color: #007bff;
`;

const ValidUntil = styled.div`
    color:${(props) => props.theme.colors.orange}
`;

const ContentContainer = styled.div`
    border-bottom: 1px solid ${props => props.theme.colors.highlight};
    padding-bottom: 5px;
    width: 50%;
    margin: 0 auto;
`;