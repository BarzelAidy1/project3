import { useEffect } from "react"
import BuisnesDataStore from "../../data/BuisnesDataStore"
import { observer } from "mobx-react"
import { Link, Outlet } from "react-router-dom"
import { getBuisneData } from "../../data/BuisnesDataServer"

const BusinessData = observer(() => {


  useEffect(() => {
    if (!BuisnesDataStore.data.name) {
      getBuisneData();
    }
  }, [])

  return (
    <>
      :שם העסק{BuisnesDataStore.data.name}
      :בעל העסק{BuisnesDataStore.data.adminName}
      :כתובת{BuisnesDataStore.data.adress}
      :טלפון{BuisnesDataStore.data.phone}
      :פרטים נוספים{BuisnesDataStore.data.information}
      <hr />
      <Link to="service" >to service</Link>

      
    </>
  )
})

export default BusinessData