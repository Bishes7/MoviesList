export const randomChar = () => {
  const str = "qwertyuioplkjhgfdsazxcvbmn";

  return str[Math.floor(Math.random() * str.length)];
};
