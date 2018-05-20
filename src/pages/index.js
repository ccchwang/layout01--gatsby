import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Menu, Header, About, Work, Contact, Footer } from '../components';

const IndexPage = () => (
  <Grid style={{width: '100%'}}>
    <Menu />

    <Header />

    <About />

    <Work />

    <Contact />

    <Footer />
  </Grid>
)

export default IndexPage
