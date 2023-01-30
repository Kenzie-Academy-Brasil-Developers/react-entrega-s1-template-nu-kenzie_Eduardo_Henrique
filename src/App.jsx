
import './styles/reset.css'
import './styles/globalStyle.css'
import './App.css'
import { HomePage } from './components/HomePage'
import { useState } from 'react'
import { Dashboard } from './components/Dashboard'



function App() {
  
  const [page,setPage] = useState('Home')
  return (
    <div className='container'>
       { page == 'Home' ? 
          <HomePage setPage = {() => setPage('Dashboard')}/>
        : <Dashboard  setPage = {() => setPage('Home')}/> 
      }
    </div>
  )
}

export default App
