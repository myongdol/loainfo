import React from 'react';
import styled from 'styled-components';
import { coupons } from '../data/coupons';

const CouponInfo = () => {

  return (
    <CouponInfoContainer>
      <CouponTitle>현재 사용가능한 쿠폰코드</CouponTitle>
      <CouponList>
        {coupons.map((coupon, index) => (
          <CouponItem key={index}>
            {coupon.title}
            <br />
            유효 기간: {coupon.validUntil}
            <br />
            <CouponCode>{coupon.code}</CouponCode>
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
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
    margin-bottom: 10px;
    color: ${(props) => props.theme.colors.text};
    &:last-child {
    margin-bottom: 0;
    }
    `;
    
const CouponCode = styled.span`
    font-weight: bold;
    color: #007bff;
`;