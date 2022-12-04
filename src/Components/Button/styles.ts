import styled from 'styled-components';


export const PrimaryButton = styled.button`
    background-color: #1d6ae5;
    border: 1px solid #1d6ae5;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    font-weight: 550;
    line-height: 20px;
    width: 134px;
    height: 48px;
    &:hover {
        background-color: #1555ba;
      }
`;

export const SecondButton = styled.a`
    color: #212121;
    cursor: pointer;
    margin: 10px;
    font-size: 16px;
    line-height: 24px;
    &:hover {
        color: #1555ba;
        text-decoration: underline;
      }
`;

export const Container = styled.main`
    width: 137px;
    height: 48px;
    border-radius: 3px;
    color: #1d6ae5;
`;