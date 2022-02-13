import {
  Routes,
  Route
} from "react-router-dom";
import Login from './components/login/Login';
import { PrivateRoute } from './utils/PrivateRoute';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PrivateRoute><h1>/</h1></PrivateRoute>}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
