const validate = (username, password, email, isSignUp) => {
  const errors = {};

  // Username - only required during Sign Up
  if (isSignUp) {
    if (!username.trim()) {
      errors.username = "Username is required";
    } else if (username.trim().length < 3) {
      errors.username = "Username must be at least 3 characters";
    }
  }

  // Email - required for BOTH Sign In and Sign Up
  if (!email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email.trim())) {
    errors.email = "Please enter a valid email";
  }

  // Password - required for BOTH
  if (!password) {
    errors.password = "Password is required";
  } else if (password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  return errors;
};

export default validate;