import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const EventCard = () => {
  return (
    <div>
      <Card sx={{width:345 }}>
        <CardMedia
          sx={{ height: 345 }}
          image="https://images.pexels.com/photos/750073/pexels-photo-750073.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <CardContent>
          <Typography variant="h5" >Indian Fast Food</Typography>
          <Typography variant="body2" >50% of on your first order</Typography>
          <div className="py-2 space-y-2">
                <p>{"mumbai"}</p>
                <p className="text-sm text-blue-500">August 15, 2024 12:00AM</p>
                <p className="text-sm text-red-500">August 16, 2024 12:00AM</p>
          </div>
        </CardContent>
        { false && <CardActions>
            <IconButton>
                <DeleteIcon/>
            </IconButton>    
        </CardActions> }
      </Card>
    </div>
  );
};

export default EventCard;
