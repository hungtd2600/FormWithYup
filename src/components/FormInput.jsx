import { TextField } from "@mui/material";
import React from "react";

const FormInput = ({
  placeholder,
  type,
  id,
  label,
  register,
  errormessage,
  req,
  error,
  onChange,
}) => {
  return (
    <div className="group-input">
      <TextField
        error={error}
        required={req}
        id={id}
        label={label}
        defaultValue=""
        placeholder={placeholder}
        type={type}
        {...register}
      />
      <span className="errormessage">{errormessage}</span>
    </div>
  );
};

export default FormInput;
