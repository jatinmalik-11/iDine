import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home'
import Admin from './pages/Admin'
import AdminEdit from './pages/AdminEdit'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path = "/admin" element = {<Admin/>}></Route>
        <Route path = "/admin/edit" element = {<AdminEdit/>}></Route>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
