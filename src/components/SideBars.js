import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "bootstrap/dist/css/bootstrap.min.css";
import "./side.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from '@mui/material/TextField';

function SideBars({ onAction}) {
    const [selectedBank, setSelectedBank] = React.useState('');
    const [selectedTypes, setSelectedTypes] = React.useState('');
    const [incomeAmount, setIncomeAmount] = useState("");

    const handleBankChange = (event) => {
        setSelectedBank(event.target.value);
    }

    const handleCategoryChange = (event) => {
        setSelectedTypes(event.target.value);
    }

    const handleAmountChange = (event) => {
        setIncomeAmount(event.target.value);
    }

    const handleAction = (action) => {
        if ((action === "income" && selectedBank) || (action === "expense")) {
            if (selectedBank && incomeAmount){
                onAction({ action, selectedBank, selectedTypes, incomeAmount });
                setIncomeAmount("");
            } else{
                alert("Please fill all the fields");
            }
        } else{
            alert("Invalid action");
        }
    }


  return (
    <div className="sidebarsCSS">
      <br />
      <div className="text-center">

        <FormControl variant="filled" sx={{ m: 1, minWidth: 150 }} required>
          <InputLabel id="bank-select-label">Bank</InputLabel>
          <Select
            labelId="bank-select-label"
            id="bank-select"
            value={selectedBank}
            onChange={handleBankChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"HDFC"}>HDFC</MenuItem>
            <MenuItem value={"SBI"}>SBI</MenuItem>
            <MenuItem value={"IDFC"}>IDFC</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="filled" sx={{ m: 1, minWidth: 150 }} required>
          <InputLabel id="types-select-label">Types</InputLabel>
          <Select
            labelId="types-select-label"
            id="types-select"
            value={selectedTypes}
            onChange={handleCategoryChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Food"}>Food</MenuItem>
            <MenuItem value={"Bank"}>Bank</MenuItem>
            <MenuItem value={"Sports"}>Sports</MenuItem>
            <MenuItem value={"Travel"}>Travel</MenuItem>
          </Select>
        </FormControl>

        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          value={incomeAmount}
          onChange={handleAmountChange}
          sx={{mt: 3}}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />

        <Stack direction="column"
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 8 }}>
          <Button variant="contained" color="success" sx={{ minWidth: 100 }} onClick={() => handleAction("income")}>
            Add Income
          </Button>
          <Button variant="outlined" color="error" sx={{ minWidth: 100 }} onClick={() => handleAction("expense")}>
            Add Expense
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default SideBars;
