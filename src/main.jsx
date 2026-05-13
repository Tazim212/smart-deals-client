import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Components/Routes/Routes.jsx'
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Suspense fallback={<h2 className='text-center my-32 text-xl'>Loading....</h2>}>
        <RouterProvider router={router}></RouterProvider>
      </Suspense>
    </AuthProvider>
  </StrictMode>
)
