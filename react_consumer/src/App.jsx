import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ShowLicenciaturas from './complements/ShowLicenciaturas';
import CreateLicenciaturas from './complements/CreateLicenciaturas';
import EditLicenciaturas from './complements/EditLicenciaturas';
function App() {
  return ( <div className = "App">
  <BrowserRouter>
  <Routes>
  <Route path='/' element={ <ShowLicenciaturas/> } />
  <Route path='/create' element={ <CreateLicenciaturas/> } />
  <Route path='/edit/:licenciatura' element={ <EditLicenciaturas/> } />
  </Routes>
  </BrowserRouter>
</div>
);
}

export default App;
