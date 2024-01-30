import React from 'react';

export const Download: React.FC<{ width: number; height: number, color: string }> = ({ width, height, color }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.52667 8.86065C5.46418 8.92263 5.41459 8.99636 5.38074 9.0776C5.34689 9.15884 5.32947 9.24598 5.32947 9.33398C5.32947 9.42199 5.34689 9.50913 5.38074 9.59037C5.41459 9.67161 5.46418 9.74534 5.52667 9.80732L7.52667 11.8073C7.58864 11.8698 7.66238 11.9194 7.74362 11.9532C7.82486 11.9871 7.91199 12.0045 8 12.0045C8.08801 12.0045 8.17515 11.9871 8.25638 11.9532C8.33762 11.9194 8.41136 11.8698 8.47333 11.8073L10.4733 9.80732C10.5989 9.68178 10.6694 9.51152 10.6694 9.33398C10.6694 9.15645 10.5989 8.98619 10.4733 8.86065C10.3478 8.73512 10.1775 8.66459 10 8.66459C9.82247 8.66459 9.6522 8.73512 9.52667 8.86065L8.66667 9.72732V2.00065C8.66667 1.82384 8.59643 1.65427 8.4714 1.52925C8.34638 1.40422 8.17681 1.33398 8 1.33398C7.82319 1.33398 7.65362 1.40422 7.5286 1.52925C7.40357 1.65427 7.33333 1.82384 7.33333 2.00065V9.72732L6.47333 8.86065C6.41136 8.79817 6.33762 8.74857 6.25638 8.71472C6.17515 8.68088 6.08801 8.66345 6 8.66345C5.91199 8.66345 5.82486 8.68088 5.74362 8.71472C5.66238 8.74857 5.58864 8.79817 5.52667 8.86065ZM12 6.00065H10.6667C10.4899 6.00065 10.3203 6.07089 10.1953 6.19591C10.0702 6.32094 10 6.49051 10 6.66732C10 6.84413 10.0702 7.0137 10.1953 7.13872C10.3203 7.26375 10.4899 7.33398 10.6667 7.33398H12C12.1768 7.33398 12.3464 7.40422 12.4714 7.52925C12.5964 7.65427 12.6667 7.82384 12.6667 8.00065V12.6673C12.6667 12.8441 12.5964 13.0137 12.4714 13.1387C12.3464 13.2637 12.1768 13.334 12 13.334H4C3.82319 13.334 3.65362 13.2637 3.5286 13.1387C3.40357 13.0137 3.33333 12.8441 3.33333 12.6673V8.00065C3.33333 7.82384 3.40357 7.65427 3.5286 7.52925C3.65362 7.40422 3.82319 7.33398 4 7.33398H5.33333C5.51014 7.33398 5.67971 7.26375 5.80474 7.13872C5.92976 7.0137 6 6.84413 6 6.66732C6 6.49051 5.92976 6.32094 5.80474 6.19591C5.67971 6.07089 5.51014 6.00065 5.33333 6.00065H4C3.46957 6.00065 2.96086 6.21136 2.58579 6.58644C2.21071 6.96151 2 7.47022 2 8.00065V12.6673C2 13.1978 2.21071 13.7065 2.58579 14.0815C2.96086 14.4566 3.46957 14.6673 4 14.6673H12C12.5304 14.6673 13.0391 14.4566 13.4142 14.0815C13.7893 13.7065 14 13.1978 14 12.6673V8.00065C14 7.47022 13.7893 6.96151 13.4142 6.58644C13.0391 6.21136 12.5304 6.00065 12 6.00065Z" fill={color} />
    </svg>
  );
};
