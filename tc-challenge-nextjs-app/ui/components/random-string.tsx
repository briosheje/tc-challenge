import { Button, CircularProgress, Typography } from "@mui/material";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import useRandomString from "../../core/hooks/useRandomString";
import { Stack } from "@mui/system";

export default function RandomString() {
  const { fetchRandomString, loading, rnd } = useRandomString();

  const [parent] = useAutoAnimate();

  return (
    <Stack spacing={1}>
      <div ref={parent as any}>
        {rnd && <Typography variant="h3">Random string is: {rnd}</Typography>}
      </div>
      {loading && <CircularProgress />}
      <Button
        variant="contained"
        disabled={loading}
        onClick={fetchRandomString}
      >
        Fetch random string
      </Button>
    </Stack>
  );
}
