import axios from 'axios';
import Signup from '../SignUp';
var BaseUrl = 'https://656d-106-222-215-238.ngrok-free.app'

const ApiCall = async (formData) => {
  try {
    // Send formData in the request body with POST
    const response = await axios.post(
      `${BaseUrl}/api/user/signup` ,
      formData,  // formData will be sent in the body
    );
    console.log(response)
    
    return response.data;
  } catch (error) {
    console.log(error)
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error('Server Error:', error.response.data);
    } else if (error.request) {
      // Request was made but no response received
      console.error('No response received:', error.request);
    } else {
      // Other errors
      console.error('Error setting up request:', error.message);
    }
    throw error;
  }
};

export default ApiCall;