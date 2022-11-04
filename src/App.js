import {Routes, Route} from 'react-router-dom';

import HomePage from './pages/homePage/homePage.component';
import UserForm from './pages/userForm/userForm.component';
import './App.css';

import Header from './components/navbar/navbar.component';

const App=()=> {
  return (
    <div>
    <Header/>
    <Routes>
    <Route index path='/' element={<HomePage /> }/>
    <Route index path='/userform' element={<UserForm /> }/>
    </Routes>
    </div>
  )
}

export default App;
