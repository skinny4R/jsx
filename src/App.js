import { CardImg, CarouselItem } from 'react-bootstrap';
import './App.css';
import NavBar from "./components/NavBar/NavBar"
import Profile from './components/Profile/Profile';
import CarImgs from './components/CarImgs/CarImgs';
function App() {
  return (
    <div className="App">
     <NavBar/>
     <Profile/>
     {/* <ProfileImg/> */}
    {/* didnt work for me so i comment it  */}
     <CarImgs/>
    </div>
  );
}

export default App;
