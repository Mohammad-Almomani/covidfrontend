import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import RecordsCard from "./RecordsCard";
import JohnTravolta from './john-travolta.gif'

export default function MyRecords() {
  const [records, setRecords] = useState([]);

  const getRecords = () => {
    axios
      .get("http://localhost:4000/records")
      .then((res) => {
        console.log(res.data);
        setRecords(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRecords();
  }, []);

  return (
    <div style={{ textAlign: "center", margin: "1% 3%" }}>
     {records?.length !== 0 &&  <h2>My Records</h2>}
      <Grid container spacing={4} mt={4} sx={{
              direction: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}>
        {records && records.map((item, idx) => {
          return (
            <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={idx}  >
              <RecordsCard idx={idx} item={item} getRecords={getRecords} />
            </Grid>
          );
        })}
        {records?.length === 0 && (
          <Grid item xs={12}>
          <h1 style={{ color: "#FD0072" }}>No Available Records ˉ\_(ッ)_/ˉ </h1>
          <img src={JohnTravolta} alt="JohnTravolta" />
          </Grid>
        )}
      </Grid>
    </div>
  );
}
