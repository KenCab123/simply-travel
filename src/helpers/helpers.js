export const findFirstObjectKey = (obj, key) => {
  const objectAtKey = obj[key];
  // console.log(objectAtKey)
  // console.log(obj)
  // console.log(key)
  if (!objectAtKey) {
    return "No flights available";
  }
  const firstKey = Object.keys(objectAtKey)[0];
  return obj[key][firstKey];
};





export const formatDateTime = (dateTimeString) => {
  if (!dateTimeString) {
    return { formattedDate: 'Invalid Date', formattedTime: 'Invalid Date' };
  }

  let dateTimeStringWithoutOffset = dateTimeString;

  // Check if the date string contains a timezone offset
  if (dateTimeStringWithoutOffset.endsWith('Z') || dateTimeStringWithoutOffset.includes('+') || dateTimeStringWithoutOffset.includes('-')) {
    dateTimeStringWithoutOffset = dateTimeStringWithoutOffset.slice(0, -6);
  }

  const dateTime = new Date(dateTimeStringWithoutOffset);

  if (isNaN(dateTime.getTime())) {
    // Invalid date
    return { formattedDate: 'Invalid Date', formattedTime: 'Invalid Date' };
  }

  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const timeFormatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const formattedDate = dateFormatter.format(dateTime);
  const formattedTime = timeFormatter.format(dateTime);

  return { formattedDate, formattedTime };
  }

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