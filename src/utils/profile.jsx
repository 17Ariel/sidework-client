export const convertEmail = (email, username) => {
  return email === undefined
    ? ""
    : JSON.stringify(email).charAt(1).toUpperCase();
};
