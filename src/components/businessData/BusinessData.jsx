import { useEffect } from "react"
import BuisnesDataStore from "../../data/BuisnesDataStore"
import { observer } from "mobx-react"
import { Link, Outlet } from "react-router-dom"
import { getBuisneData } from "../../data/BuisnesDataServer"
import MeetingList from "../Meeting/MeetingList"
import { Box, ListItem, ListItemIcon } from "@mui/material"
import { ListItemText } from "@mui/material-next"
import { List } from "@mui/icons-material"

const BusinessData = observer(() => {


  useEffect(() => {
    if (!BuisnesDataStore.data.name) {
      getBuisneData();
    }
  }, [])

  return (
    <>
    <ListItem component="a" href="#simple-list">
      <ListItemText primary="בעל העסק:"secondary= {BuisnesDataStore.data.adminName} />
      
       <ListItemText primary="כתובת:" secondary={BuisnesDataStore.data.adress} />    
       <ListItemText primary="טלפון:" secondary={BuisnesDataStore.data.phone} />     

       <ListItemText primary="פרטים נוספים:" secondary={BuisnesDataStore.data.information} />        
     
      </ListItem>
      <br />    
      
    </>
  )
})

export default BusinessData