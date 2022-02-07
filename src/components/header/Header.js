import { Button } from "@mui/material"
import { useState } from "react"
import "./Header.css"

const Header = () => {
  const [userAction, setUserAction] = useState(false)
  return (
    <div className="nav-container">
      <div className="nav">
        <img src="flowpalette.jpg" width={60} height={60} />
        {!userAction ? (
          <Button
            onMouseEnter={() => {
              setUserAction(true)
            }}
            variant="contained"
            color="primary"
          >
            Coming Soon !
          </Button>
        ) : (
          <Button
            onMouseLeave={() => {
              setUserAction(false)
            }}
            variant="outlined"
            color="third"
          >
            Coming Soon !
          </Button>
        )}
      </div>
    </div>
  )
}

export default Header
