
import './App.css';
import Header from './Header';
import {BrowserRouter} from "react-router-dom"
import { Routes,Route } from 'react-router-dom';
import SimpleBottomNavigation from './mainnav';
import Container from '@material-ui/core/Container';
import Trend from './Components/Trend';
import Movies from './Components/Movies';
import Search from './Components/Search';
import Tvseries from './Components/Tv series';
function App() {
  return (
    
    <>
    <BrowserRouter>
    
     <Header/>
 
    <div className='app'>
  <Container>
<Routes>
<Route path='/' element={<Trend/>}/>
<Route path='/movies' element={<Movies/>}/>
<Route path='/series' element={<Tvseries/>}/>
<Route path='/search' element={<Search/>}/>
</Routes>

  </Container>
    </div>
    <SimpleBottomNavigation/>
    </BrowserRouter>
    </>
  );
}

export default App;
