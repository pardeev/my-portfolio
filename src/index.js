import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';

ReactDOM.render(

  <Router>
    <Routes>
      <Route path='/' element={<App/>}></Route>
    </Routes>
  </Router>,
  
  document.getElementById('root')
);