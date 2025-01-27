import { setSearch } from "@features/index";
import { TextField, Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@shared/hooks/index";
import { ChangeEvent } from "react";

export const SearchBar = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.photos.search);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(event.target.value));
  };

  return (
    <Box sx={{ mb: 2 }}>
      <TextField
        label="Search photos"
        variant="outlined"
        fullWidth
        value={search}
        onChange={handleSearchChange}
      />
    </Box>
  );
};
