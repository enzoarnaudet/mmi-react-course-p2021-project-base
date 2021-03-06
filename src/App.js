import React from 'react'
import DiscoverPage from './pages/DiscoverPage'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import {useState,useMemo} from 'react'

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"
import PlaylistPage from './pages/PlaylistPage/PlaylistPage'
import DMPage from './pages/DMPage/DMPage'
import ProfilPage from './pages/ProfilPage/ProfilPage'
import MentionslegalesPage from './pages/Mentionslegales/Mentionslegales'
import Context from './Context'

import SpotifyProvider from './components/SpotifyProvider'
const spotifyClientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID
const spotifyRedirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI
const App = () => {
const [src, updateBackground] = useState('cover/dystopia.png')
const changeSrc =  (newBackground) => {  
updateBackground(newBackground)
}
const contextValue = useMemo(() => ({ src, changeSrc }), [src])
  return (
    <SpotifyProvider clientId={spotifyClientId} redirectUri={spotifyRedirectUri}>
    <Context.Provider value={contextValue}>
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
          <Route path="/mentionslegales">
            <MentionslegalesPage/>
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>

      </BrowserRouter>
    </Context.Provider>
    </SpotifyProvider>
  )
}
export const BackgroundContext=Context
export default App
