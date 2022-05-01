import './customcss/custom.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import './App.css';
//import ShowLicenciaturas from './complements/ShowLicenciaturas';
import ShowIngenierias from './complements/Showingenierias';
import Createingenierias from './complements/Createingenierias';
import Editingienerias from './complements/Editingenierias';
function App() {
  return ( <div className = "App">
  <BrowserRouter>
  <Routes>
  {/* <Route path='/' element={ <ShowLicenciaturas/> } /> */}
  <Route path='/' element={ <ShowIngenierias/> } />
  <Route path='/create' element={ <Createingenierias/> } />
  <Route path='/edit/:id' element={ <Editingienerias/> } />
  </Routes>
  </BrowserRouter>
</div>
);
}

export default App;
