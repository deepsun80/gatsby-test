import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import banner from "../images/banner.jpg"

const useStyles = makeStyles(theme => ({
  outerContainer: {
    padding: 0,
    minWidth: "100vw",
  },
  innerContainer: {
    padding: "25vh 5vw 0vh",
  },
  banner: {
    minHeight: "80vh",
  },
  bannerHeader: {
    color: "#fff",
    textAlign: "center",
  },
}))

const Banner = () => {
  const classes = useStyles()

  return (
    <Container maxWidth={false} className={classes.outerContainer}>
      <div
        style={{
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className={classes.banner}
      >
        <Container className={classes.innerContainer}>
          <Typography variant="h1" className={classes.bannerHeader}>
            Gatsby Test Site
          </Typography>
          <Typography variant="h4" className={classes.bannerHeader}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Container>
      </div>
    </Container>
  )
}

export default Banner
