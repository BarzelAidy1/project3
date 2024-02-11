import { useEffect, useState } from "react";
import { updateBuisneData } from "../../data/BuisnesDataServer";
import BuisnesDataStore from "../../data/BuisnesDataStore";
import { observer } from "mobx-react";

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
    <label>שם העסק</label>
    <input value={Form.name} onChange={({ target }) => setForm({ ...Form, name: target.value })} />
    <br />
    <label>בעל העסק</label>
    <input value={Form.adminName} onChange={({ target }) => setForm({ ...Form, adminName: target.value })} />
    <label>כתובת</label>
    <input value={Form.adress} onChange={({ target }) => setForm({ ...Form, adress: target.value })} />
    <br />
    <label>טלפון</label>
    <input value={Form.phone} onChange={({ target }) => setForm({ ...Form, phone: target.value })} />
    <br />
    <label>פרטים נוספים</label>
    <input value={Form.information} onChange={({ target }) => setForm({ ...Form, information: target.value })} />
    <br />
    <button type="submit">עריכה</button>
  </form>

})

export default EditBusinessData