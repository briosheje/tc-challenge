import create from "zustand";
import { persist } from "zustand/middleware";

export type AppState = {
  technologiesListItemsSpawnDelay: number;
  setTechnologiesListItemsSpawnDelay: (v: number) => void;
};

const useAppState = create<AppState>()(
  persist(
    (set) => ({
      technologiesListItemsSpawnDelay: 1500,
      setTechnologiesListItemsSpawnDelay: (v: number) =>
        set((state) => ({
          ...state,
          technologiesListItemsSpawnDelay: v,
        })),
    }),
    {
      name: "app-state",
      getStorage: () => sessionStorage,
    }
  )
);
export default useAppState;
