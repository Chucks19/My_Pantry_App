import logo from './logo.svg';

import Application from './Application';
import Home from './pages/Home';
import NavigationBar from './components/NavigationBar';
import SignUp from './pages/SignUp';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login';
import About from './pages/About';
import Sales from './pages/Sales';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavigationBar/>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/signup'} element={<SignUp />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/About'} element={<About />} />
          <Route path={'/sales'} element={<Sales />} />

        </Routes>
      </BrowserRouter>

      
      
      
    </div>
  );
}

export default App;
