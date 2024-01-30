import React from "react";

export const Danger: React.FC<{
    width: number;
    height: number;
    color: string;
}> = ({ width, height, color }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 10 10"
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M5.93996 4.9998L8.80662 2.1398C8.93216 2.01426 9.00269 1.844 9.00269 1.66646C9.00269 1.48893 8.93216 1.31867 8.80662 1.19313C8.68109 1.0676 8.51083 0.99707 8.33329 0.99707C8.15576 0.99707 7.9855 1.0676 7.85996 1.19313L4.99996 4.0598L2.13996 1.19313C2.01442 1.0676 1.84416 0.99707 1.66663 0.99707C1.48909 0.99707 1.31883 1.0676 1.19329 1.19313C1.06776 1.31867 0.997231 1.48893 0.997231 1.66646C0.997231 1.844 1.06776 2.01426 1.19329 2.1398L4.05996 4.9998L1.19329 7.8598C1.13081 7.92177 1.08121 7.99551 1.04737 8.07675C1.01352 8.15799 0.996094 8.24512 0.996094 8.33313C0.996094 8.42114 1.01352 8.50828 1.04737 8.58952C1.08121 8.67075 1.13081 8.74449 1.19329 8.80646C1.25527 8.86895 1.329 8.91855 1.41024 8.95239C1.49148 8.98624 1.57862 9.00366 1.66663 9.00366C1.75463 9.00366 1.84177 8.98624 1.92301 8.95239C2.00425 8.91855 2.07798 8.86895 2.13996 8.80646L4.99996 5.9398L7.85996 8.80646C7.92193 8.86895 7.99567 8.91855 8.07691 8.95239C8.15815 8.98624 8.24528 9.00366 8.33329 9.00366C8.4213 9.00366 8.50844 8.98624 8.58968 8.95239C8.67092 8.91855 8.74465 8.86895 8.80662 8.80646C8.86911 8.74449 8.91871 8.67075 8.95255 8.58952C8.9864 8.50828 9.00382 8.42114 9.00382 8.33313C9.00382 8.24512 8.9864 8.15799 8.95255 8.07675C8.91871 7.99551 8.86911 7.92177 8.80662 7.8598L5.93996 4.9998Z"
                fill="white"
            />
        </svg>
    );
};
