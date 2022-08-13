import { Route, Routes } from "react-router-dom"

import HeaderScreen from "./components/Shared/HeaderScreen"
import HomeScreen from "./components/Home/HomeScreen"
import ProjectScreen from "./components/Project/ProjectScreen"
import TeamScreen from "./components/Team/TeamScreen"
import CommunityScreen from "./components/Community/CommunityScreen"
import ContactScreen from "./components/Contact/ContactScreen"
import FooterScreen from "./components/Shared/FooterScreen"

function App() {

  return (
    <div className="App">
      <HeaderScreen />
      <main className="main">
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/project' element={<ProjectScreen />} />
          <Route path="/team" element={<TeamScreen />} />
          <Route path="/community" element={<CommunityScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
        </Routes>
      </main>
      <FooterScreen />
    </div>
  )
}

export default App
