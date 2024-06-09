import { useEffect, useRef, useState } from "react";

export const OtpInput = ({ length = 4, onOtpSubmit }) => {
  const [otpInput, setOtpInput] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otpInput];
    newOtp[index] = value.substring(value.length - 1);
    setOtpInput(newOtp);
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) {
      onOtpSubmit(combinedOtp);
    }

    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };
  console.log(otpInput);
  const hanldeKeyDown = (e, index) => {
    if (
      e.key === "Backspace" &&
      !otpInput[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };
  return (
    <div>
      <h4>Enter OTP</h4>
      {otpInput.map((item, index) => (
        <input
          key={index}
          ref={(input) => (inputRefs.current[index] = input)}
          type="text"
          value={item}
          className="otpInput"
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => hanldeKeyDown(e, index)}
        />
      ))}
    </div>
  );
};
