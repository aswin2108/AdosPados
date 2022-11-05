import {Routes, Route} from 'react-router-dom';

import HomePage from './pages/homePage/homePage.component';
import Posts from './pages/postsPage/postPage.component';
import CreatePost from './pages/createPostPage/createPost.page';
import './App.css';

import Header from './components/navbar/navbar.component';

const App=()=> {
  return (
    <div>
    <Header/>
    <Routes>
    <Route index path='/' element={<HomePage /> }/>
    <Route index path='/posts' element={<Posts /> }/>
    <Route index path='/create-post' element={<CreatePost /> }/>
    </Routes>
    </div>
  )
}

export default App;
