import React from 'react'
import { Router } from 'react-router'
import { RouterProvider } from 'react-router'
import { router } from './router'

function App() {
  return (<RouterProvider router={router}></RouterProvider>)
}

export default App