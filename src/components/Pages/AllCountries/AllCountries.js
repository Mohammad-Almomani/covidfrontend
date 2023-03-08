import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

export default function AllCountries() {
  const [countries, setCountries] = useState([]);
  const getAllCountries = () => {
    axios
      .get("https://api.covid19api.com/summary")
      .then((res) => {
        console.log(res.data);
        setCountries(res.data.Countries);
      })
      .catch((err) => {
        setTimeout(() => {
          getAllCountries();
        }, 1000);
        console.log(err);
      });
  };

  useEffect(() => {
    getAllCountries()
  }, []);

  return (
    <div style={{ textAlign: "center", margin: "1% 3%" }}>
      <h2 style={{ marginTop: "3%" }}>COVID19 Statistics for All Countries</h2>
      <Grid container spacing={4} mt={4}>
        {countries &&
          countries.map((item, idx) => {
            return (
              <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={idx}>
                <CountryCard idx={idx} item={item} />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}
