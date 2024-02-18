import { useEffect, useState } from "react";
import { updateBuisneData } from "../../data/BuisnesDataServer";
import BuisnesDataStore from "../../data/BuisnesDataStore";
import { observer } from "mobx-react";
import { TextField } from "@mui/material";

const EditBusinessData = observer(() => {
  const [Form, setForm] = useState({});

  const handle = (e) => {
    e.preventDefault()
    updateBuisneData(Form)
  }

  useEffect(() => {
    setForm(BuisnesDataStore.data)
  }, [BuisnesDataStore.data])

  return <form onSubmit={handle}>
      
    
<TextField id="outlined-basic" label="בעל העסק" variant="outlined" type="text"
 value={Form.adminName} onChange={({ target }) => setForm({ ...Form, adminName: target.value })} />
      <br/><br/>
<TextField id="outlined-basic" label="כתובת " variant="outlined" type="text"
 value={Form.adress} onChange={({ target }) => setForm({ ...Form, adress: target.value })} />
    <br /><br/>
    <TextField id="outlined-basic" label="טלפון " variant="outlined" type="text"
     value={Form.phone} onChange={({ target }) => setForm({ ...Form, phone: target.value })} />
    <br /><br/>
    <TextField id="outlined-basic" label="פרטים נוספים " variant="outlined" type="text"
     value={Form.information} onChange={({ target }) => setForm({ ...Form, information: target.value })} />
    <br /><br/>
    <button type="submit">עריכה</button>
  </form>

})

export default EditBusinessData