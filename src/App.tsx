import './App.css';
import { Route, Routes } from 'react-router-dom';

import Wrapper from './components/layout/Wrapper';
import Dashboard from './pages/dashboard/Dashboard';
import Profile from './pages/profile/Profile';
import Product from './pages/product/Product';

function App() {
  return (
    <div className="App">      
    <Wrapper>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>          
        <Route path="/profile" element={<Profile/>}/>          
        <Route path="/product/*" element={<Product/>}>
          
        </Route>          
      </Routes>
    </Wrapper>
    </div>
  );
}

export default App;
