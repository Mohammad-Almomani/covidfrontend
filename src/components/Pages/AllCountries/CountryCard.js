import { Button, Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material";
import axios from "axios";
import React from "react";

export default function CountryCard({ idx, item }) {
  const handleAdd = () => {
    const data = {
      Country: item.Country,
      TotalConfirmed: item.TotalConfirmed,
      TotalDeaths: item.TotalDeaths,
      TotalRecovered: item.TotalRecovered,
      Date: item.Date,
    }
    console.log(data)
    axios.post("http://localhost:4000/records", data).then(res => {
      console.log(res.data)
    }
    ).catch(err => {
      console.log(err)
    }
    )
  };
  return (
    <Card sx={{ maxWidth: 380, justifyItems: "center" }} key={idx} >
      <CardHeader title={`Country: ${item.Country}`} />
      <CardContent sx={{ textAlign: "left" }}>
        <Typography variant="body2" color="text" sx={{ mt: 2, mb: 1 }}>
          Total Confirmed Cases: {item.TotalConfirmed}
        </Typography>

        <Typography variant="body2" color="text" sx={{ mt: 2, mb: 1 }}>
          Total Death Cases : {item.TotalDeaths}
        </Typography>

        <Typography variant="body2" color="text" sx={{ mt: 2, mb: 1 }}>
          Total Recovered Cases : {item.TotalRecovered}
        </Typography>
        <Typography variant="body2" color="text" sx={{ mt: 2, mb: 1 }}>
          Date : {item.Date}
        </Typography>
      </CardContent>
      <CardActions>
      <Button onClick={handleAdd} variant="contained" sx={{mt:1, backgroundColor:"purple", fontWeight: "bold" }} fullWidth>
            Add To My Records
          </Button>
      </CardActions>
    </Card>
  );
}
