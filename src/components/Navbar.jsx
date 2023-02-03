import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'

import { logo } from '../utils/constants'

const Navbar = () => {
  return (
	  <Stack 
      direction='row' 
      alignItems='center' 
      p={2} 
      sx={{position: 'sticky', background: '#222', top: 0, justifyContent: 'space-between'}} 
    >
      {/* not exactly sure why we need the flex and alignItems. veeery small difference */}
      <Link to='/' style={{ display: 'flex', alignItems: 'center'}}>
        <img src={logo} alt="logo" height={45}/>
      </Link>
    </Stack>
  )
}

export default Navbar