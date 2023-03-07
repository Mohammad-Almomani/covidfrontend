import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import React from 'react'

export default function StatCard({idx, item}) {
    console.log(item)
  return (
    <Card sx={{ maxWidth: 500 }} key={idx}>
    <CardHeader
    style={{ color:"" }}
      title={`Date: ${item.startDate} to ${item.endDate}`}
    />
    <CardContent sx={{ textAlign: "left" }}>
    <Typography variant="body2" color="text" sx={{ mt: 2, mb: 1 }}>
        Country : {item.country}
      </Typography>
      <Typography variant="body2" color="text" sx={{ mt: 2, mb: 1 }}>
        Number of Confirmed Cases : {item.total}
      </Typography>
    </CardContent>
   
  </Card>
  )
}
