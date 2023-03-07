import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import RecordsCard from "./RecordsCard";

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
    <Container maxWidth="xl" sx={{ mt: 10, textAlign: "center" }}>
      <h2>My Records</h2>
      <Grid container spacing={4} mt={4}>
        {records.map((item, idx) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <RecordsCard idx={idx} item={item} getRecords={getRecords} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
