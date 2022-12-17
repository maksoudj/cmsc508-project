import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";
export default function SearchBar(props) {
  return (
    <Autocomplete
      disablePortal
      id={props.id}
      options={props.options}
      value={props.value}
      onChange={props.onChange}
      
      sx={{ width:  500}}
      renderInput={(params) => (
        <TextField {...params} label={props.label} variant="standard" />
      )}
    />
  );
}
