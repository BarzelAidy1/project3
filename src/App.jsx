import { useEffect } from "react"
import { getService } from "./data/serviceServer"
import { Outlet } from "react-router-dom"
import Meeting from "./components/meeting/Meeting"

function App() {

  useEffect(() => {
    getService()
  }, [])
  return (
    <>
      userName
    </>
  )
}

export default App
