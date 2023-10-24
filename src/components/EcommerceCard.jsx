import React from "react";
import { Card, CardContent, Typography, Button } from "@material-ui/core";

export function EcommerceCard() {
  return (
    <Card style={{ width: 300 }}>
      <img
        src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
        alt="card-image"
        style={{ height: '100%', width: '100%', objectFit: 'cover' }}
      />
      <CardContent>
        <div style={{ marginBottom: 8, display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" color="textPrimary">
            Apple AirPods
          </Typography>
          <Typography variant="h6" color="textPrimary">
            $95.00
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
        </Typography>
      </CardContent>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        style={{ marginTop: 16 }}
      >
        Add to Cart
      </Button>
    </Card>
  );
}
