export const findFirstObjectKey = (obj, key) => {
  const objectAtKey = obj[key];
  if (!objectAtKey) {
    return "No flights available";
    //maybe fetch????
  }
  const firstKey = Object.keys(objectAtKey)[0];
  return obj[key][firstKey];
};

// export const formatDateAndTime = (dateAndTime) => {
//   console.log(dateAndTime)
//   const formattedDateAndTime = dateAndTime.slice(0, -6);
//   const dateTime = new Date(formattedDateAndTime);
//   // const dateFormatter = new Intl.DateTimeFormat("en-US", {
//   //   year: "numeric",
//   //   month: "long",
//   //   day: "numeric",
//   // });
  
//   // const timeFormatter = new Intl.DateTimeFormat("en-US", {
//   //   hour: "numeric",
//   //   minute: "numeric",
//   //   hour12: true,
//   // });
  
//   // console.log(`date: `,dateFormatter)
//   // console.log(`time: `, timeFormatter)
//   return `${dateTime.split('')}`
// }