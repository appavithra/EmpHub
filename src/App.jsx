//! version V5

// import React from 'react'
// import {BrowserRouter,Routes,Route} from "react-router-dom"
// import Layout from './routing/Layout'
// import Home from './routing/Home'
// import Events from './routing/Events'
// import Menu from './routing/Menu'
// import Chefs from './routing/Chefs'
// import Contacts from './routing/Contacts'
// import PageNotFound from './routing/PageNotFound'
// import "./global.css"

// const App = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//             <Route path='/' element={<Layout/>}>
//                 <Route path="/" element={<Home/>}/>
//                 <Route path="/menu" element={<Menu/>}/>
//                 <Route path="/events" element={<Events/>}/>
//                 <Route path="/chefs" element={<Chefs/>}/>
//                 <Route path="/contacts" element={<Contacts/>}/>
//                 <Route path="/*" element={<PageNotFound/>}/>


//             </Route>
            
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }


//! version V6
import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Layout from './routing/Layout'
import Home from './routing/Home'
import Events from './routing/Events'
import Menu from './routing/Menu'
import Chefs from './routing/Chefs'
import Contacts from './routing/Contacts'
import PageNotFound from './routing/PageNotFound'
import "./global.css"

let routing = createBrowserRouter([
  {
      path : "/",
      element : <Layout/>,
      children : [
          {
              index : true,
              element :<Home/>
          },
          {
              path :"/menu",
              element :<Menu/>
          },
          {
              path :"/events",
              element :<Events/>
          },
          {
              path:"/chefs",
              element :<Chefs/>
          },
          {
            path:"/contacts",
            element :<Contacts/>
          },
          {
              path :"*",
              element :<PageNotFound/>
          },
      ],
  }
])

const App = () => {
return (
  <>
    <RouterProvider router={routing}/>
  </>
)
}





export default App
