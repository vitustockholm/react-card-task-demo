import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

// Styles
import { CustomBtn } from './ButtonSocial.style';
import { SpanIcon } from './ButtonSocial.style';
import { FcGoogle } from 'react-icons/fc';

const Button = forwardRef(({ text, action, primary, secondary }, ref) => {
  return (
    <>
      <CustomBtn
        onClick={action}
        primary={primary}
        secondary={secondary}
        ref={ref}
      >
        <SpanIcon>
          <FcGoogle />
        </SpanIcon>
        {text}
      </CustomBtn>
    </>
  );
});

Button.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
};

export default Button;
