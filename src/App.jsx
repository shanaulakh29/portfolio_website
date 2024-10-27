
import './App.css'
import RootPage from './RootPage' 
import HomePageText from './HomePageText'
import About from './About'
import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
const router=createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootPage/>}>
    <Route index element={<> <HomePageText/>  </>}></Route>
    <Route path="about" element={<About/>}></Route>

  </Route>
))
{/* <Route path="" element={<HomePageText/>}></Route>
<Route path="" element={<WindowWidth/>}></Route> */}
function App() {


  return (
    <RouterProvider router={router}></RouterProvider>

  )
}

export default App
