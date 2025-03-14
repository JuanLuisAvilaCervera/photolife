import { StrictMode, use } from 'react'
import { createRoot } from 'react-dom/client'
import Store from './app/store'
import { BrowserRouter, Routes, Route } from 'react-router'
import { CollectionPage } from './page/collectionPage'
import { Provider } from 'react-redux'
import Layout from './components/Layout/Layout'
import HomePage from './page/homePage'
import "./resources/scss/main.scss"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="" element = {<HomePage/>}/>
            <Route path="collection" element={<CollectionPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
