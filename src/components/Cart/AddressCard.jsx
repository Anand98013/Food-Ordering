import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Button, Card } from "@mui/material";

const AddressCard = ({ item, showButton, handleSelectAddress }) => {
  return (
    <Card className="flex flex-col w-64 p-5">
      <div className="flex items-start gap-5 mb-4">
        <HomeIcon />
        <div className="space-y-3 text-gray-500">
          <h1 className="font-semibold text-lg text-white">Home</h1>
          <p>
            Sasaram, Shiv Palace Building, Gokhuldham market, 821105, Bihar,
            India
          </p>
        </div>
      </div>
      {showButton && (
        <div className="mt-auto">
          <Button
            variant="outlined"
            fullWidth
            onClick={() => handleSelectAddress(item)}
          >
            Select
          </Button>
        </div>
      )}
    </Card>
  );
};

export default AddressCard;
