import React from 'react'
import DiscoverPage from './pages/DiscoverPage'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"
import PlaylistPage from './pages/PlaylistPage/PlaylistPage'
import DMPage from './pages/DMPage/DMPage'
import ProfilPage from './pages/ProfilPage/ProfilPage'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/discover">
          <DiscoverPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
       
        <Route path="/playlists">
          <PlaylistPage/>
        </Route>
        <Route path="/message">
          <DMPage/>
        </Route>
        <Route path="/profil">
          <ProfilPage/>
        </Route>
         <Route path="/">
          <HomePage />
        </Route>
      </Switch>

    </BrowserRouter>
  )
}

export default App