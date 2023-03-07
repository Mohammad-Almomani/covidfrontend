import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'

export default function AllCountries() {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    axios.get('https://api.covid19api.com/summary')
      .then(res => {
        console.log(res.data)
        setCountries(res.data.Countries)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <Container maxWidth="xl" sx={{ mt: 10, textAlign: "center" }}>
    <Grid container spacing={4} mt={4}>
      {countries.map((item, idx) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={idx}>
        <CountryCard idx={idx} item = {item} />
      </Grid>
        )
      })}
    </Grid>
    </Container>
  )
}
