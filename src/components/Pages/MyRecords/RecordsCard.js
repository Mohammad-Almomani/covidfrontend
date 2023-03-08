import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

export default function RecordsCard({ idx, item, getRecords }) {
  const handleDelete = () => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`http://localhost:4000/records/${item.id}`)
            .then((res) => {
              getRecords();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    } catch (error) {
      console.log(error);
      Swal.fire("Error!", "Something went wrong.", "error");
    }
  };
  return (
    <Grid  container>
       <Grid
          item
          xs={0.5}
          sx={{
            bgcolor: "#FD0072",
            borderTopLeftRadius: "5px",
            borderBottomLeftRadius: "5px",
          }}
        ></Grid>
    <Grid
          item xs={11.5}>
    <Card sx={{  justifyItems: "center" }} key={idx}>
      <CardHeader title={`Country: ${item.Country}`} sx={{color: "#FD0072"}}/>
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="body2" color="text" sx={{ mt: 2, mb: 1 }}>
          Total Confirmed Cases: {item.TotalConfirmed}
        </Typography>
        <Typography variant="body2" color="text" sx={{ mt: 2, mb: 1 }}>
          Date : {item.Date}
        </Typography>
      </CardContent>
      <Divider sx={{ borderStyle: "dashed", borderWidth: 1 }} />
      <CardActions sx={{direction: "column",
              alignItems: "center",
              justifyContent: "center"}}>
        <Button
          onClick={handleDelete}
          variant="contained"
          sx={{ mt: 1, backgroundColor: "#4F30C0", fontWeight: "bold" }}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
  );
}
