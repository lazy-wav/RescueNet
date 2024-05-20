import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from "./Contact";
import Home from "./Home";
import Layout from "./Layout";
import SafetyInfo from './SafetyInfo';
import OrgRegister from './OrgRegister';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='emergency-alert' element={<></>}/>
        <Route path='safety-information' element={<SafetyInfo/>}/>
        <Route path='login' element={<OrgRegister/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}
export default App;
