// validations.js



// Username Validation
export const validate_username = (username) => {
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
};

// Password Validation
export const validate_password = (password) => {
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
};

// Name Validation
export const validate_name = (name) => {
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
};

// Gender Validation
export const validate_gender = (gender) => {
  const validGenders = ['male', 'female', 'other'];
  if (!gender) {
    return 'Gender is required.';
  }
  if (!validGenders.includes(gender.toLowerCase())) {
    return 'Invalid gender. Choose from: male, female, other.';
  }
  return null;
};

// Phone Number Validation
export const validate_phone_number = (phoneNumber) => {
  if (!phoneNumber) {
    return 'Phone number is required.';
  }
  if (!/^\+?1?\d{9,15}$/.test(phoneNumber)) {
    return 'Invalid phone number format.';
  }
  return null;
};

// Date of Birth Validation
export const validate_date_of_birth = (dateOfBirth) => {
  const today = new Date();
  const dob = new Date(dateOfBirth);
  
  if (!dateOfBirth) {
    return 'Date of Birth is required.';
  }
  
  if (dob > today) {
    return 'Date of birth cannot be in the future.';
  }
  return null;
};

// Country Validation
export const validate_country = (country) => {
  if (!country) {
    return 'Country is required.';
  }
  if (!/^[a-zA-Z\s]+$/.test(country)) {
    return 'Country must contain only letters and spaces.';
  }
  return null;
};

// State Validation
export const validate_state = (state) => {
  if (!state) {
    return 'State is required.';
  }
  if (!/^[a-zA-Z\s]+$/.test(state)) {
    return 'State must contain only letters and spaces.';
  }
  return null;
};

// City Validation
export const validate_city = (city) => {
  if (!city) {
    return 'City is required.';
  }
  if (!/^[a-zA-Z\s]+$/.test(city)) {
    return 'City must contain only letters and spaces.';
  }
  return null;
};
