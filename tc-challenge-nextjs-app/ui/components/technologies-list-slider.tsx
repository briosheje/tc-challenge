import { Slider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import useAppState from "../state/appState";

export default function TechnologiesListSlider() {
  const {
    setTechnologiesListItemsSpawnDelay,
    technologiesListItemsSpawnDelay,
  } = useAppState();

  return (
    <Stack>
      <Slider
        value={technologiesListItemsSpawnDelay}
        onChange={(_, newValue) =>
          setTechnologiesListItemsSpawnDelay(newValue as number)
        }
        step={100}
        marks
        min={100}
        max={4000}
      />
      <Typography variant="caption">
        You can play with me! sliding me will increase/decrease the time needed
        for the above list items to spawn and will reset upon change!
        <br />
        Current spawn delay: <strong>{technologiesListItemsSpawnDelay}</strong>
        <br />I will remember the value through the session, so feel free to
        refresh!
      </Typography>
    </Stack>
  );
}
