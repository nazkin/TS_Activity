import React from 'react';
import './buttonCustom.css';

export type ICustomButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const CustomButton = (
  props: ICustomButtonProps
): React.ReactElement<ICustomButtonProps> => {
  const {children, ...rest} = props;
  return (
    <div className="btn-box">
      <button className="btn-pill" {...rest}>
        <span>{children}</span>
      </button>
    </div>
  );
};
export default CustomButton;
