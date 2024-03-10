import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import LoginStyle from "../Login/Login.module.css";
import axios from "axios";
const Login: React.FC = () => {
const [user,setUser] = useState<string[]>([])
useEffect(()=> {
userData()
},[])
const userData = async () =>{
  // run json-server first npx json-server -p 8080 -w database/data.json
    const res = await axios.get("http://localhost:8080/user");
    setUser(res.data)
}
console.log(user)

  return (
    <>
      <div  className={LoginStyle.mainContainer}>
        <div>Login</div>
        <form className={LoginStyle.formContainer}>
          <TextField id="standard-basic" label="Username" variant="standard" />
          <TextField id="standard-basic" label="Password" variant="standard" />
          <Button variant="outlined">Sign In</Button>
        </form>
      </div>
    </>
  );
};

export default Login;
