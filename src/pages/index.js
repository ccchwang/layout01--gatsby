import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Header, About, Work } from '../components';

const IndexPage = () => (
  <Grid style={{width: '100%'}}>

    <Header />

    <About />

    <Work />

    {/* <Menu />

    <Header />

    <About />

    <Work />

    <Contact />

    <Footer /> */}
  </Grid>
)

export default IndexPage
