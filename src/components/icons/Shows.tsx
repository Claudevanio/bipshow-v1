import React from 'react';

export const Shows: React.FC<{ color: string }> = ({ color }) => {
  return (
    <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.3335 9.89353C27.2493 9.64964 27.0961 9.43543 26.8926 9.27686C26.689 9.1183 26.4439 9.02219 26.1868 9.00019L18.6001 7.89353L15.2001 1.00019C15.091 0.774766 14.9205 0.58465 14.7083 0.451625C14.496 0.3186 14.2506 0.248047 14.0001 0.248047C13.7497 0.248047 13.5042 0.3186 13.292 0.451625C13.0798 0.58465 12.9093 0.774766 12.8001 1.00019L9.40013 7.88019L1.81347 9.00019C1.5667 9.03527 1.3347 9.13881 1.1438 9.29907C0.952901 9.45933 0.810746 9.66989 0.733466 9.90686C0.662726 10.1384 0.656378 10.3849 0.715103 10.6198C0.773828 10.8547 0.89541 11.0692 1.0668 11.2402L6.57347 16.5735L5.24013 24.1469C5.19253 24.3968 5.21746 24.6552 5.31196 24.8915C5.40647 25.1277 5.5666 25.332 5.77347 25.4802C5.97509 25.6243 6.2129 25.7094 6.4602 25.7259C6.70749 25.7424 6.95449 25.6896 7.17347 25.5735L14.0001 22.0135L20.8001 25.5869C20.9873 25.6924 21.1986 25.7476 21.4135 25.7469C21.6959 25.7479 21.9714 25.6592 22.2001 25.4935C22.407 25.3453 22.5671 25.1411 22.6616 24.9048C22.7561 24.6685 22.7811 24.4102 22.7335 24.1602L21.4001 16.5869L26.9068 11.2535C27.0993 11.0904 27.2416 10.8761 27.3171 10.6353C27.3926 10.3946 27.3983 10.1374 27.3335 9.89353ZM19.1335 15.2269C18.9771 15.3781 18.8601 15.5653 18.7927 15.7722C18.7253 15.979 18.7096 16.1992 18.7468 16.4135L19.7068 22.0002L14.6935 19.3335C14.5006 19.2308 14.2854 19.1771 14.0668 19.1771C13.8482 19.1771 13.633 19.2308 13.4401 19.3335L8.4268 22.0002L9.3868 16.4135C9.42405 16.1992 9.40828 15.979 9.34089 15.7722C9.27349 15.5653 9.1565 15.3781 9.00013 15.2269L5.00013 11.2269L10.6135 10.4135C10.8295 10.3835 11.0348 10.3009 11.2115 10.1731C11.3881 10.0452 11.5307 9.87598 11.6268 9.68019L14.0001 4.60019L16.5068 9.69353C16.6029 9.88931 16.7455 10.0585 16.9221 10.1864C17.0988 10.3142 17.3041 10.3968 17.5201 10.4269L23.1335 11.2402L19.1335 15.2269Z" fill={color} />
    </svg>

  );
};