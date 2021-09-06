export const parseDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const hours = date.getHours();
  const minutes = date.getMinutes();

  const check = datePart => (datePart < 10 ? `0${datePart}` : datePart);

  return `${check(day)}.${check(month + 1)}.${check(year)}, ${check(hours)}:${check(minutes)}`;
};
