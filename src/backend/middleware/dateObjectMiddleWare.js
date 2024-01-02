const moment = require("moment");
const FORMAT = "YYYY-MM-DD";
const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;

function isValidDateFormat(date) {
  return DATE_REGEX.test(date);
}

function convertToDate(date) {
  if (!isValidDateFormat(date)) {
    // console.log("Invalid Date Format");
    throw Error("Invalid Date Format");
  }

  return moment(date, FORMAT);
}

module.exports = { convertToDate, isValidDateFormat };
