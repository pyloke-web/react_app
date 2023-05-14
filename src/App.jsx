import {BrowserRouter, Routes, Route} from 'react-router-dom'
 
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Gallery from "./pages/gallery/Gallery"
import NotFound from "./pages/notFound/NotFound"
import Plans from "./pages/plans/Plans"
import Trainers from "./pages/trainers/Trainers"
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='react_app' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='gallery' element={<Gallery/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='plans' element={<Plans/>}/>
        <Route path='trainers' element={<Trainers/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App