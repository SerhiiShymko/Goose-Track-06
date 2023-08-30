import React from 'react';
import PropTypes from 'prop-types';
import { StyledAuthNavigate } from './AuthNavigate.styled';

export const AuthNavigate = ({ link, text }) => {
  return (
    <div>
      <StyledAuthNavigate to={link}>{text}</StyledAuthNavigate>
    </div>
  );
};

AuthNavigate.PropTypes = {
  link: PropTypes.string.isRequired,
  test: PropTypes.string.isRequired,
};
