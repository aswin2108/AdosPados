import {Routes, Route} from 'react-router-dom';

import HomePage from './pages/homePage.component';
import './App.css';

import Header from './components/navbar/navbar.component';

const App=()=> {
  return (
    <div>
    <Header/>
    <Routes>
    <Route index path='/' element={<HomePage /> }/>
    </Routes>
    </div>
  )
}

export default App;
