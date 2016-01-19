import React from 'react'
import { Link } from 'react-router'

const App = ({ push, children }) => {
  return (
    <div>
      <header>
        <Link to='/basket-confirmation'>Basket Confirmation</Link>
      </header>
      <div style={{marginTop: '1.5em'}}>{children}</div>
    </div>
  )
}

export default App
