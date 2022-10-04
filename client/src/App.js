import {Routes, Route} from 'react-router-dom'
import UserForm from './components/UserForm';
import UsersList from './components/UsersList';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <>  
    <Routes>
      <Route path='/' element={<UsersList />}/>
      <Route path='/add-user' element={<UserForm />}/> 
      <Route path='/users/:id/' element={<UserProfile />}/>  
    </Routes> 
    </>
  );
}

export default App;
