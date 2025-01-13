import './App.css'
import {Route,Routes,BrowserRouter} from 'react-router-dom' 
import Home from './pages/Home'
import ViewList from './pages/viewList'


function App() {
  return(
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/list" element={<ViewList/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App
