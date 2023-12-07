export function getCurrentDateInfo() {
  const currentDate = new Date();

  // Options for formatting the date
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  // Format the date
  const formattedDate = currentDate.toLocaleDateString("en-US", options);
  //   console.log(formattedDate);
  return formattedDate;
}
