import FormInput from "./components/FormInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@mui/material";

const schema = yup.object({
  username: yup.string().required("Vui lòng nhập tên"),
  phonenumber: yup
    .string()
    .required("Vui lòng nhập số điện thoại")
    .matches(
      // eslint-disable-next-line no-useless-escape
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      "Chưa đúng định dạng"
    ),
  email: yup.string().email("Chưa đúng định dạng email"),
  dateofbirdth: yup.string().required("Vui lòng chọn ngày sinh"),
  password: yup.string().min(6, "Mật khẩu tối thiểu 6 kí tự "),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Mật khẩu chưa khớp"),
});

function App() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmit = (data) => {
    console.log(data);
    localStorage.setItem("data", JSON.stringify({ data: data }));
  };

  const {
    username,
    phonenumber,
    email,
    dateofbirdth,
    password,
    confirmPassword,
  } = {
    username: errors.username?.message,
    phonenumber: errors.phonenumber?.message,
    email: errors.email?.message,
    dateofbirdth: errors.dateofbirdth?.message,
    password: errors.password?.message,
    confirmPassword: errors.confirmPassword?.message,
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(formSubmit)}>
        <FormInput
          id="username"
          req={true}
          label="Username"
          placeholder="UserName..."
          type="text"
          register={{ ...register("username") }}
          errormessage={username}
          error={!!username}
        />
        <FormInput
          id="phonenumber"
          req={true}
          label="Phonenumber"
          placeholder="Phonenumber..."
          type="text"
          register={{ ...register("phonenumber") }}
          errormessage={phonenumber}
          error={!!phonenumber}
        />
        <FormInput
          id="email"
          label="Email"
          placeholder="Emteremail..."
          type="email"
          register={{ ...register("email") }}
          errormessage={email}
          error={!!email}
        />
        <FormInput
          id="dateofbirdth"
          req={true}
          label="Ngày sinh"
          placeholder=""
          type="date"
          register={{ ...register("dateofbirdth") }}
          errormessage={dateofbirdth}
          error={!!dateofbirdth}
        />
        <FormInput
          id="password"
          req={true}
          label="Password"
          placeholder="Password..."
          type="password"
          register={{ ...register("password") }}
          errormessage={password}
          error={!!password}
        />
        <FormInput
          id="confirmPassword"
          req={true}
          label="ConfirmPassword"
          placeholder="ConfirmPassword..."
          type="password"
          register={{ ...register("confirmPassword") }}
          errormessage={confirmPassword}
          error={!!confirmPassword}
        />
        <Button
          sx={{ width: "93px" }}
          disabled={false}
          type="submit"
          variant="outlined"
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default App;
