import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonalInformation from './view/personalInfo'
import Register from './view/register/index'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  const routes = [
    { path: "/", element: <Register />},
    { path: "/personal", element: <PersonalInformation />}
  ];
  
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({path,element}, idx) => {
          return <Route path={path} element={element} key={idx} />
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App
