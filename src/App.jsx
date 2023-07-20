import './App.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import Root from './Root'
import Home from './routes/Home'
import Docs from './routes/Docs'
import Blog from './routes/Blog'
import Community from './routes/Community'

function App() {
 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>} >
        <Route index path="/" element={<Home/>} />
        <Route index path="/docs" element={<Docs/>} />
        <Route index path="/blog" element={<Blog/>} />
        <Route index path="/community" element={<Community/>} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
