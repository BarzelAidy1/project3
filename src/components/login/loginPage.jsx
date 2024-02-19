import { useState } from "react"
import { setLogin } from "../../data/loginServer"
import { Box, Button, Stack, TextField } from "@mui/material"

const LoginPage = () => {

  const handleLogin = (e) => {
    e.preventDefault()
    setLogin({name,password})
  }
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  
  return <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >

    <div>
      <TextField id="outlined-basic" label="userName" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
    <div>
      <TextField id="outlined-basic passord" label="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    </div>
    <Stack direction="row" spacing={2}>
      <Button id="buttonLogin" onClick={handleLogin} >Login</Button>
    </Stack>

  </Box>
}
export default LoginPage
