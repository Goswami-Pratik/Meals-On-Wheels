import React from "react";

export default function ErrroMessage({ error }) {
  if (error) {
    switch (error.type) {
      case "required":
        return <p className = "required_val">This field is required</p>;
      case "minLength":
        return <p className = "required_val">Field needs to be greater then 2 characters</p>
      case "maxLength":
        return <p className = "required_val">Field exceeds character limit</p>;
      case "pattern":
        return <p className = "required_val">Field should be in the format: DD/MM/YYYY</p>;
      default:
        return null;
    }
  }

  return null;
}
