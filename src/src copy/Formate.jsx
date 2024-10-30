import React, { useState } from "react";

export default function TelephoneFormatter() {
  const [phoneValue, setPhoneValue] = useState("");

  const getStringWithNumbersOnly = (str) => {
    let result = "";

    for (let char of str) {
      if (char >= "0" && char <= "9") {
        result += char;
      }
    }

    return result;
  };

  const formatString = (e) => {
    const numStr = getStringWithNumbersOnly(e.target.value);
    setPhoneValue(
      numStr.length > 3
        ? `+(${numStr.substring(0, 3)}) - ${numStr.substring(3)}`
        : numStr
    );
  };

  return (
    <div className="container text-center">
      <input
        type="tel"
        id="phone"
        maxLength={16}
        placeholder="Mobile number"
        autoComplete="off"
        style={{ fontSize: "1.5rem", marginBottom: "1rem" }}
        value={phoneValue}
        onChange={formatString}
      />

      <div>
        <label htmlFor="phone">+(123) - 4567890</label>
      </div>
    </div>
  );
}
