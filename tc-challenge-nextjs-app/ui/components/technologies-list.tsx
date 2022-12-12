import { ReactElement, useEffect, useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import GitHubIcon from "@mui/icons-material/GitHub";
import JavascriptIcon from "@mui/icons-material/Javascript";
import AnimationIcon from "@mui/icons-material/Animation";
import StorageIcon from "@mui/icons-material/Storage";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import Link from "next/link";
import useAppState from "../state/appState";

type TechnologyListItemData = {
  url: string;
  icon: ReactElement;
  primaryText: string;
};
const listItemsElements: TechnologyListItemData[] = [
  {
    url: "https://github.com/briosheje/tc-challenge",
    icon: <GitHubIcon />,
    primaryText: "Github (click to open the repository)",
  },
  {
    url: "https://nextjs.org/",
    icon: <JavascriptIcon />,
    primaryText: "Next.JS Framework and Typescript",
  },
  {
    url: "https://aws.amazon.com/it/amplify/",
    icon: <CloudIcon />,
    primaryText: "AWS amplify for deployment and CD",
  },
  {
    url: "https://auto-animate.formkit.com/",
    icon: <AnimationIcon />,
    primaryText: "Formkit AutoAnimate for animations",
  },
  {
    url: "https://github.com/pmndrs/zustand",
    icon: <StorageIcon />,
    primaryText: "Zustand (micro state manager).",
  },
];

export default function TechnologiesList() {
  const { technologiesListItemsSpawnDelay } = useAppState();
  const [visibleItems, setVisibleItems] = useState<TechnologyListItemData[]>(
    []
  );

  const [parent] = useAutoAnimate();

  // Updates the state to draw the items below.
  useEffect(() => {
    let idx = 0;
    setVisibleItems([]);

    const spawnInterval = setInterval(() => {
      const next = listItemsElements[idx++];
      if (!next) {
        clearInterval(spawnInterval);
      } else {
        setVisibleItems((prev) => [...prev, next]);
      }
    }, technologiesListItemsSpawnDelay);

    return () => {
      clearInterval(spawnInterval);
    };
  }, [technologiesListItemsSpawnDelay]);

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <List ref={parent as any}>
        {visibleItems.map((i, idx) => (
          <Link target="_blank" key={i.url} href={i.url}>
            <ListItem key={idx} disablePadding>
              <ListItemButton>
                <ListItemIcon>{i.icon}</ListItemIcon>
                <ListItemText primary={i.primaryText} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
}
