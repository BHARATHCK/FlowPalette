import { Container } from "@material-ui/core"
import "./App.css"
import Footer from "./components/Footer/Footer"
import Header from "./components/header/Header"
import { createTheme } from "@mui/material/styles"
import { ThemeProvider } from "@emotion/react"
import Countdown from "./components/Countdown/Countdown"
import moment from "moment"
import { useEffect, useState } from "react"

const theme = createTheme({
  palette: {
    primary: {
      main: "#cc0052",
    },
    secondary: {
      main: "#f44336",
    },
    third: {
      main: "#cc0052",
    },
  },
})

function App() {
  const initialCountdownTimer = {
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
  }

  const [countdownTimer, setCountdownTimer] = useState({ ...initialCountdownTimer })

  useEffect(() => {
    setInterval(() => {
      playTimer(1648665000)
    }, 1000)
  }, [])

  function playTimer(currentUnixEndDate) {
    const distance = currentUnixEndDate - moment().format("X")
    if (distance > 0) {
      setCountdownTimer((prevCountdownTimer) => {
        return {
          ...prevCountdownTimer,
          days: parseInt(distance / (60 * 60 * 24), 10),
          hours: parseInt((distance % (60 * 60 * 24)) / (60 * 60), 10),
          mins: parseInt((distance % (60 * 60)) / 60, 10),
          secs: parseInt(distance % 60, 10),
        }
      })
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <div className="centerContainer">
          <Container maxWidth="lg">
            <h1 className="introText">
              Collaborate more <span className="pink">efficiently</span>
            </h1>
            <p className="descText">
              An online platform for brainstorming ideas and building them with
              complete control on workflow.
            </p>
          </Container>
          <Countdown countdownTimer={countdownTimer} />
        </div>
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default App
