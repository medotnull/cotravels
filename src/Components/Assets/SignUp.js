import React, { useState } from 'react';
import  ApiCall  from './Services/ApiCall';
// import UseValidation from './Hooks/UseValidation';
import { 
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
} from './Hooks/UseValidation';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // cosnt [values, setValues] = useState({
  //   name:'',
  //   username:'',
  //   email:'',
  //   dateOfBirth:'',
  //   gender:'',
  //   phoneNumber:'',
  //   city:'',
  //   state:'',
  //   country:'',
  //   password:'',
  // });

  const [errors, setErrors] = useState({})
  // const handleInput = (e) {
  //   const newObj = {...values, [e.target.name]: e.target.value}
  //   setValues(newObj)
  // }
  // const handleValidation = (e) {
  //   e.preventDefault();
  //   setErrors(UseValidation(values));
  //}
  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = {
      username,
      email,
      dateOfBirth,
      name,
      gender,
      phoneNumber,
      city,
      state,
      country,
      password,
      confirmPassword,
    };
     // Validate all form fields
  const errors = {
    username: validate_username(formData.username),
    email: validate_email(formData.email), 
    password: validate_password(formData.password),
    // confirmPassword: validate_confirm_password(formData.password, formData.confirmPassword),
    name: validate_name(formData.name),
    gender: validate_gender(formData.gender),
    phoneNumber: validate_phone_number(formData.phoneNumber),
    dateOfBirth: validate_date_of_birth(formData.dateOfBirth),
    country: validate_country(formData.country),
    state: validate_state(formData.state),
    city: validate_city(formData.city),
  };

  // Check if any validation failed
  const hasErrors = Object.values(errors).some(error => error !== null);

  if (hasErrors) {
    // Set error messages in state (or display them as needed)
    setErrorMessage(errors);
    return; // Stop form submission if there are errors
  }
    try {
      // Call the API function to submit the form
      const response = await ApiCall(formData);
      console.log('Form submitted successfully:', response);
    } catch (error) {
      setErrorMessage('There was an issue submitting the form.');
    }
    
  };

  return (
    <section className="bg-light p-3 p-md-4 p-xl-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
            <div className="card border border-light-subtle rounded-4">
              <div className="card-body p-3 p-md-4 p-xl-5">
                <h2 className="h4 text-center">Registration</h2>
                
                <h3 className="fs-6 fw-normal text-secondary text-center m-0">
                  Enter your details to register
                </h3>

                <form onSubmit={handleSubmit}>
                  <div className="row gy-3 overflow-hidden">
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="username"
                          id="username"
                          placeholder="Username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                        />
                        <label htmlFor="username" className="form-label">
                          Username
                        </label>
                      </div>
                      {errors.username && <p className="error">{errors.username}</p>}
                    </div>

                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="name@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        {errors.email && <p className="error">{errors.email}</p>}
                      </div>
                      {errors.email && <p className="error">{errors.email}</p>}
                    </div>

                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="date"
                          className="form-control"
                          name="dateOfBirth"
                          id="dateOfBirth"
                          value={dateOfBirth}
                          onChange={(e) => setDateOfBirth(e.target.value)}
                          required
                        />
                        <label htmlFor="dateOfBirth" className="form-label">
                          Date of Birth
                        </label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Full Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                        <label htmlFor="name" className="form-label">
                          Name
                        </label>
                      </div>
                      {errors.name && <p className="error">{errors.name}</p>}
                    </div>

                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <select
                          className="form-select"
                          name="gender"
                          id="gender"
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                          required
                        >
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                        <label htmlFor="gender" className="form-label">
                          Gender
                        </label>
                      </div>
                      {errors.gender && <p className="error">{errors.gender}</p>}
                    </div>

                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="tel"
                          className="form-control"
                          name="phoneNumber"
                          id="phoneNumber"
                          placeholder="Phone Number"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          required
                        />
                        <label htmlFor="phoneNumber" className="form-label">
                          Phone Number
                        </label>
                      </div>
                      {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
                    </div>

                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="city"
                          id="city"
                          placeholder="City"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          required
                        />
                        <label htmlFor="city" className="form-label">
                          City
                        </label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="state"
                          id="state"
                          placeholder="State"
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                          required
                        />
                        <label htmlFor="state" className="form-label">
                          State
                        </label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="country"
                          id="country"
                          placeholder="Country"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          required
                        />
                        <label htmlFor="country" className="form-label">
                          Country
                        </label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          id="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                      </div>
                      {errors.password && <p className="error">{errors.password}</p>}
                    </div>

                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          name="confirmPassword"
                          id="confirmPassword"
                          placeholder="Confirm Password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                        />
                        <label htmlFor="confirmPassword" className="form-label">
                          Confirm Password
                        </label>
                      </div>
                      {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                    </div>

                    <div className="col-12">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          name="iAgree"
                          id="iAgree"
                          required
                        />
                        <label
                          className="form-check-label text-secondary"
                          htmlFor="iAgree"
                        >
                          I agree to the{' '}
                          <a href="#!" className="link-primary text-decoration-none">
                            terms and conditions
                          </a>
                        </label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="d-grid">
                        <button
                          className="btn bsb-btn-xl btn-primary"
                          type="submit"
                        >
                          Sign up
                        </button>
                      </div>
                    </div>
                  </div>
                </form>

                <hr className="mt-5 mb-4 border-secondary-subtle" />
                <p className="m-0 text-secondary text-center">
                  Already have an account?{' '}
                  <a href="#!" className="link-primary text-decoration-none">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
