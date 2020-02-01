import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      Your Website
    </Typography>
  )
}

const useStyles = makeStyles(() => ({
  footer: {
    padding: 30,
  },
}))

export default function Footer(props) {
  const classes = useStyles()
  const { description, title } = props

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Test Gatsby Site
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <Copyright />
      </Container>
    </footer>
  )
}
