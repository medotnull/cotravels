//import logo from './logo.svg';
import './App.css';
import SignIn from './Components/Assets/SignIn';
import SignUp from './Components/Assets/SignUp';
import { BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
