import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home'
import AdminCrud from './pages/AdminCrud'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path = "/admin" element = {<AdminCrud/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
