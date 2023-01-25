import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import UserName from './component/UserName';
import NotFound from './component/NotFound';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact={true} element={<Home/>} />
          <Route path='*' exact={true}  element={<NotFound/>} />
          <Route path='/user-name' exact={true}  element={<UserName/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
