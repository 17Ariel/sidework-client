export const convertdate = (date) => {
  return `${new Date(date).toLocaleDateString("en-PH", {
    month: "long",
  })} ${new Date(date).toLocaleDateString("en-PH", {
    day: "2-digit",
  })}, ${new Date(date).getFullYear()}`;
};
