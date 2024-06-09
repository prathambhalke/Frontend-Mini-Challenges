import { useState } from "react";
import { OtpInput } from "./OtpInput";

const PhoneLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const onPhoneNumberSubmit = (e) => {
    e.preventDefault();
    const regex =
      /^\+?(\d{1,3})?[-.\s]?(\(?\d{3}\)?)[-.\s]?(\d{3})[-.\s]?(\d{4})$/;
    if (phoneNumber.length < 10 || !regex.test(phoneNumber)) {
      alert("Invalid Phone Number!");
    } else {
      setShowOtpInput(true);
    }
  };
  const onPhoneNumberChange = (e) => {
    let value = e.target.value;
    setPhoneNumber(value);
    console.log(value);
  };
  const onOtpSubmit = (combinedOtp) => {
    setTimeout(() => alert(`${combinedOtp} Login Successfully!`), 1000);
  };
  return (
    <div>
      {!showOtpInput ? (
        <form onSubmit={onPhoneNumberSubmit}>
          <input
            type="number"
            id="phoneNo"
            value={phoneNumber}
            onChange={onPhoneNumberChange}
          />
          <button>submit</button>
        </form>
      ) : (
        <div>
          <h3>{`Otp Sent to: ${phoneNumber}`}</h3>
          <OtpInput onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
};

export default PhoneLogin;
