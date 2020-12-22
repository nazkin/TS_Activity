import React from "react";
import Loader from 'react-loader-spinner';

export interface ILoadingSpinnerProps {
    type:   "Puff" | "Audio" | "BallTriangle" | "Bars" |
            "Circles" | "Grid" | "Hearts" | "MutatingDots" | "None"|
            "NotSpecified" | "Oval" | "Plane" | "RevolvingDot" | "Rings" |
            "TailSpin" | "ThreeDots" | "Triangle" | "Watch" | undefined;
    color: string;
    height: number;
    width: number;
    timeout?: number;
};

const LoadingSpinner: React.FC<ILoadingSpinnerProps> = ({
    type="Puff",
    color="#00BFFF",
    height=500,
    width=500,
    timeout=3000,
}) => {
    return (
        <div className="d-flex flex-row justify-content-center my-5">
          <Loader 
            type={type}
            color={color}
            height={height}
            width={width}
            timeout={timeout} 
          /> 
        </div>
    );
}

export default LoadingSpinner;