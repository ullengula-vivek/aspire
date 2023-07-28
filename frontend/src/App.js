import '../src/css/App.css'
import '../src/css/PhotoGrid.css'
import '../src/css/Footer.css'
import '../src/css/PhotoScreen.css'
import '../src/css/ContactScreen.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import PhotoGrid from './screens/PhotoGrid';
import PhotoScreen from './screens/PhotoScreen';
import ContactScreen from './screens/ContactScreen';

function App() {
  return (
    <>
    <Router>
      <Routes>
     <Route path='/' exact element={<HomeScreen/>}/>
     <Route path='/api/photos' element={<PhotoGrid/>}/>
     <Route path='/api/photos/:id' element={<PhotoScreen/>}/>
     <Route path='/api/contact' element={<ContactScreen/>}/>
     </Routes>
    </Router>
    </>
  );
}

export default App;
