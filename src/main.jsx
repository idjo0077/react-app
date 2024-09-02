import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home/Home'
import Om from './pages/Om/Om'
import Utstallning from './pages/Utstallning/Utstallning.jsx'
import Kontakt from './pages/Kontakt/Kontakt.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Galleri from './pages/Galleri/Galleri.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
		children: [	
			{
				path: "",
				element: <Home/>,
			},
			{
				path: "/om",
				element: <Om />,
			},
			{
				path: "/galleri",
				element: <Galleri/>,
			},
			{
				path: "/utstallning",
				element: <Utstallning/>,
			},
			{
				path: "/kontakt",
				element: <Kontakt/>
			}
		]
  }, 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
		<RouterProvider router={router} />
  </React.StrictMode>,
)
