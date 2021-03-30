const milliToMin = (milli) => {
  const total_seconds = parseInt(Math.floor(milli / 1000));
  const total_minutes = parseInt(Math.floor(total_seconds / 60));
  const total_hours = parseInt(Math.floor(total_minutes / 60));

  const seconds = parseInt(total_seconds % 60);
  const minutes = parseInt(total_minutes % 60);
  const hours = parseInt(total_hours % 24);

  return `${hours} : ${minutes} `;
};

export default milliToMin;
