// const UseValidation = () => {
//   let newErrors = {};

//   // Username Validation
//   const validateUsername = (username) => {
//     if (!username) {
//       newErrors.username = 'Username is required.';
//     } else if (!/^[a-zA-Z0-9_.-]+$/.test(username)) {
//       newErrors.username = 'Username must contain only letters, numbers, underscores, dots, or dashes.';
//     } else if (username.length < 3 || username.length > 30) {
//       newErrors.username = 'Username must be between 3 and 30 characters long.';
//     }
//     return null;
//   };

//   // Password Validation
//   const validatePassword = (password) => {
//     if (!password) {
//       newErrors.password = 'Password is required.';
//     } else if (password.length < 8) {
//       newErrors.password = 'Password must be at least 8 characters long.';
//     } else if (!/[A-Z]/.test(password)) {
//       newErrors.password = 'Password must contain at least one uppercase letter.';
//     } else if (!/[a-z]/.test(password)) {
//       newErrors.password = 'Password must contain at least one lowercase letter.';
//     } else if (!/\d/.test(password)) {
//       newErrors.password = 'Password must contain at least one digit.';
//     } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
//       newErrors.password = 'Password must contain at least one special character.';
//     }
//     return null;
//   };

//   // Email Validation
//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email) {
//       newErrors.email = 'Email is required.';
//     } else if (!emailRegex.test(email)) {
//       newErrors.email = 'Invalid email format.';
//     }
//     return null;
//   };

//   // Name Validation
//   const validateName = (name) => {
//     if (!name) {
//       newErrors.name = 'Name is required.';
//     } else if (!/^[a-zA-Z\s]+$/.test(name)) {
//       newErrors.name = 'Name must contain only letters and spaces.';
//     } else if (name.length < 2 || name.length > 50) {
//       newErrors.name = 'Name must be between 2 and 50 characters long.';
//     }
//     return null;
//   };

//   // Gender Validation
//   const validateGender = (gender) => {
//     const validGenders = ['male', 'female', 'other'];
//     if (!gender) {
//       newErrors.gender = 'Gender is required.';
//     } else if (!validGenders.includes(gender.toLowerCase())) {
//       newErrors.gender = 'Invalid gender. Choose from: male, female, other.';
//     }
//     return null;
//   };

//   // Phone Number Validation
//   const validatePhoneNumber = (phoneNumber) => {
//     if (!phoneNumber) {
//       newErrors.phoneNumber = 'Phone number is required.';
//     } else if (!/^\+?1?\d{9,15}$/.test(phoneNumber)) {
//       newErrors.phoneNumber = 'Invalid phone number format.';
//     }
//     return null;
//   };

 

//   // Date of Birth Validation
//   const validateDateOfBirth = (dateOfBirth) => {
//     const today = new Date();
//     const dob = new Date(dateOfBirth);

//     if (!dateOfBirth) {
//       newErrors.dateOfBirth = 'Date of Birth is required.';
//     } else if (dob > today) {
//       newErrors.dateOfBirth = 'Date of birth cannot be in the future.';
//     }
//     return null;
//   };

//   // Country Validation
//   const validateCountry = (country) => {
//     if (!country) {
//       newErrors.country = 'Country is required.';
//     } else if (!/^[a-zA-Z\s]+$/.test(country)) {
//       newErrors.country = 'Country must contain only letters and spaces.';
//     }
//     return null;
//   };


// // State Validation
// const validateState = (state) => {
//   if (!state) {
//     newErrors.state = 'State is required.';
//   } else if (!/^[a-zA-Z\s]+$/.test(state)) {
//     newErrors.state = 'State must contain only letters and spaces.';
//   }
//   return null;
// };

// // City Validation
// const validateCity = (city) => {
//   if (!city) {
//     newErrors.city = 'City is required.';
//   } else if (!/^[a-zA-Z\s]+$/.test(city)) {
//     newErrors.city = 'City must contain only letters and spaces.';
//   }
//   return null;
// };

//    // Return all validation functions
//    return {
//     validateUsername,
//     validatePassword,
//     validateEmail,
//     validateName,
//     validateGender,
//     validatePhoneNumber,
//     validateDateOfBirth,
//     validateCountry,
//     validateState,
//     validateCity,
//     newErrors
//   };
// };

// export default UseValidation;
const validateString = function(input) {
  if (typeof input !== 'string') {
    return false;
  }
  return input.trim();
};

function validate_username(username) {
  username = validateString(username);
  if (!username) {
    return 'Username is required.';
  }
  if (!/^[a-zA-Z0-9_.-]+$/.test(username)) {
    return 'Username must contain only letters, numbers, underscores, dots, or dashes.';
  }
  if (username.length < 3 || username.length > 30) {
    return 'Username must be between 3 and 30 characters long.';
  }
  return null;
}

function validate_password(password) {
  password = validateString(password);
  if (!password) {
    return 'Password is required.';
  }
  if (password.length < 8) {
    return 'Password must be at least 8 characters long.';
  }
  if (!/[A-Z]/.test(password)) {
    return 'Password must contain at least one uppercase letter.';
  }
  if (!/[a-z]/.test(password)) {
    return 'Password must contain at least one lowercase letter.';
  }
  if (!/\d/.test(password)) {
    return 'Password must contain at least one digit.';
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return 'Password must contain at least one special character.';
  }
  return null;
}

function validate_name(name) {
  name = validateString(name);
  if (!name) {
    return 'Name is required.';
  }
  if (!/^[a-zA-Z\s]+$/.test(name)) {
    return 'Name must contain only letters and spaces.';
  }
  if (name.length < 2 || name.length > 50) {
    return 'Name must be between 2 and 50 characters long.';
  }
  return null;
}

function validate_gender(gender) {
  gender = validateString(gender);
  const validGenders = ['male', 'female', 'other'];
  if (!gender) {
    return 'Gender is required.';
  }
  if (!validGenders.includes(gender.toLowerCase())) {
    return 'Invalid gender. Choose from: male, female, other.';
  }
  return null;
}

function validate_phone_number(phoneNumber) {
  phoneNumber = validateString(phoneNumber);
  if (!phoneNumber) {
    return 'Phone number is required.';
  }
  if (!/^\+?[1-9]\d{1,14}$/.test(phoneNumber)) {
    return 'Invalid phone number format.';
  }
  return null;
}

function validate_date_of_birth(dateOfBirth) {
  if (!dateOfBirth) {
    return 'Date of Birth is required.';
  }
  const dob = new Date(dateOfBirth);
  if (isNaN(dob.getTime())) {
    return 'Invalid date format.';
  }
  const today = new Date();
  if (dob > today) {
    return 'Date of birth cannot be in the future.';
  }
  return null;
}

function validate_country(country) {
  country = validateString(country);
  if (!country) {
    return 'Country is required.';
  }
  if (!/^[a-zA-Z\s]+$/.test(country)) {
    return 'Country must contain only letters and spaces.';
  }
  return null;
}

// Email Validation
  function validate_email(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
     return 'Email is required.';
    } else if (!emailRegex.test(email)) {
      return 'Invalid email format.';
    }
    return null;
  };

function validate_state(state) {
  state = validateString(state);
  if (!state) {
    return 'State is required.';
  }
  if (!/^[a-zA-Z\s]+$/.test(state)) {
    return 'State must contain only letters and spaces.';
  }
  return null;
}

function validate_city(city) {
  city = validateString(city);
  if (!city) {
    return 'City is required.';
  }
  if (!/^[a-zA-Z\s]+$/.test(city)) {
    return 'City must contain only letters and spaces.';
  }
  return null;
}

export {
  validate_username,
  validate_password,
  validate_name,
  validate_gender,
  validate_phone_number,
  validate_date_of_birth,
  validate_country,
  validate_state,
  validate_city,
  validate_email
};