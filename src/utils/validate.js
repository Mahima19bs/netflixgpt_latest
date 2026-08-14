import { useState } from "react";

const validate=({username,password,email})=>{
return(
    <div>
       {
        !username && (<p>Please enter username</p>)
       }
       {
        !password && (<p>Please enter password</p>)
       }
       {
        !email && (<p>Please enter email</p>)
       }
       {
        username && username.length()<6 && (<p>Please Enter username of length atleast 6!</p>)
       }
       {
        password && password.length()<6 || password.length()>16 && ( <p>Password should include minimum 6 and maximum 15 characters</p>)
       }
       {
        password && !/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])/.test(password) && 
        <p>Password should contain one special character, one upper case letter,one number atleast!</p>
       }
       {
        email && !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email) && 
        <p>Please enter valid email address!</p>
       }
    </div>
)
}
export default validate;