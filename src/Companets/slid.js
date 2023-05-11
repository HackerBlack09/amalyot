import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

// uitc2022
export default function NarxFilter({ setValue, value }) {
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <Box sx={{ width: 200 }}>
            <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                step={1}
                max={300}
            />
        </Box>
    );
}