const useTime = (ms) => {
  const milliseconds = ms * 1000;

  const dateObject = new Date(milliseconds);

  const humanDateFormat = dateObject.toTimeString().slice(0, 5);
  return humanDateFormat;
};

export default useTime;
