import isEmail from 'validator/lib/isEmail';

export const validateEmail = (email) => {
  return isEmail(email);
};
