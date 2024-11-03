
import './App.css'
import RootPage from './RootPage' 
import HomePageText from './HomePageText'
import About from './About'
import Project from './Project'
import Contact from './Contact'
import Resume from './Resume'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
const router=createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootPage/>}>
    <Route index element={<> 
      <HomePageText/>  
      </>}></Route>
    <Route path="about" element={<About/>}></Route>
    <Route path="project" element={<Project/>}></Route>
    <Route path="contact" element={<Contact/>}></Route>
    <Route path="resume" element={<Resume/>}></Route>
  </Route>
))
{/* <Route path="" element={<HomePageText/>}></Route>
<Route path="" element={<WindowWidth/>}></Route> */}
function App() {


  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
