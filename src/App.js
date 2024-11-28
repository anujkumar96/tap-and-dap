import { Route, Routes } from 'react-router';
// import HomePage from './newComponents/HomePage';
import EmployeePage from './newComponents/EmployeePage';
import ClientPage from './newComponents/ClientPage';
import ProjectPage from './newComponents/ProjectPage';
import Login from './newComponents/Login';
import HomePage from "./newComponents/HomePage";
import ClientEditPage from './pages/ClientEditPage/ClientEditPage';
import ForgotPassword from './newComponents/ForgotPassword';
import Register from './newComponents/Register';
import AllocationForm from './components/AllocationForm/AllocationForm';
function App() {
  return <>
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='homepage' element={<HomePage></HomePage>}>
          <Route  index element={<EmployeePage />} />
          <Route path="client" element={<ClientPage />} />
          <Route path="project" element={<ProjectPage />} />
          <Route path="/homepage/client" element={<ClientEditPage />} />
          <Route path='allocateProject' element={<AllocationForm/>}></Route>
        </Route>
        <Route path='fpassword' element={<ForgotPassword/>}></Route>
        <Route path='register' element={<Register/>}></Route>
       
      </Routes>
    </div>
  </>
}

export default App;
