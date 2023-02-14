import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Partials/Footer/Footer';
import Header from './Components/Partials/Footer/Header/Header';
import SignIn from './Components/Partials/SignIn/SignIn';
import Signup from './Components/Partials/Signup/Signup';
import CourseQualification from './Components/Screens/CourseQualification/CourseQualification';
import EditProfile from './Components/Screens/EditProfile/EditProfile';
import Home from './Components/Screens/Home/Home';
import MyProfile from './Components/Screens/MyProfile/MyProfile';
import ProgramDetails from './Components/Screens/ProgramDetails/ProgramDetails';
import Trainer from './Components/Screens/Trainer/Trainer';
import TrainerDetails from './Components/Screens/TrainerDetails/TrainerDetails';
import WishList from './Components/Screens/WishList/WishList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/edit-profile' element={<EditProfile />} />
          <Route path='/my-profile' element={<MyProfile />} />
          <Route path='/program-details/:id' element={<ProgramDetails />} />
          <Route path='/trainers' element={<Trainer />} />
          <Route path='/trainer-details/:id' element={<TrainerDetails />} />
          <Route path='/wishlist' element={<WishList />} />
          <Route path='/course-qualification' element={<CourseQualification />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<Signup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
