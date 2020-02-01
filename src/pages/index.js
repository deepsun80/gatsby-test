import React from "react"
import Grid from "@material-ui/core/Grid"
import Header from "../components/Header"
import Banner from "../components/Banner"
import Card from "../components/Card"
import Footer from "../components/Footer"

export default function Index() {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <Grid container style={{ marginTop: "10vh" }}>
        <Grid item xs={6}>
          <Card />
        </Grid>
        <Grid item xs={6}>
          <Card />
        </Grid>
      </Grid>
      <Footer />
    </React.Fragment>
  )
}
