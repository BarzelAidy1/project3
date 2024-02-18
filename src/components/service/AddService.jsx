import { TextField } from "@mui/material"
import { useState } from "react"
import { AddServiceServer } from "../../data/serviceServer"

function AddService() {

  const [data, setData] = useState({})
  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value })
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    AddServiceServer(data) 
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField id="outlined-basic" name="name" label="שם התוכנית" variant="outlined" type="text" value={data.name} onChange={handleChange} />
        <TextField id="outlined-basic" name="email" label=" תאור:" variant="outlined" type='text' value={data.email} onChange={handleChange} />
        <TextField id="outlined-basic" name="phone" label="מחיר" variant="outlined" type="number" value={data.phone} onChange={handleChange} />


        <button type="submit">הוספת התוכנית לרשימה</button>
      </form>
    </>
  )
}

export default AddService
