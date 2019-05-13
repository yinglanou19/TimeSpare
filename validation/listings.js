const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateListingInput(data) {
  let errors = {};

  data.description = validText(data.description) ? data.description : "";

  if (!Validator.isLength(data.description, { min: 5 })) {
    errors.text = "Listing must have at least 5 characters";
  }

  if (Validator.isEmpty(data.description)) {
    errors.text = "Listing must have text";
  }

  // needa to have begin Time, and end time
  // begin time should be ahead of end time

  // tags array should not be empty

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
