import "./custom-button.styles.scss";

import React from "react";

const CustomButton = ({ children,isGoogleSignIn,inverted, ...otherProps }) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button ${inverted ? 'inverted' : ''}`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
