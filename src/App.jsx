import { useEffect } from "react"
import { getService } from "./data/serviceServer"
import { Outlet } from "react-router-dom"
import Meeting from "./components/Meeting/Meeting"
import MeetingList from "./components/Meeting/MeetingList"
import AddMeeting from "./components/meeting/AddMeeting"


function App() {

  useEffect(() => {
    getService()
  }, [])
  return (
    <>    
      <Meeting/> 
      <br/>
      <MeetingList/>
      

    </>
  )
}

export default App
