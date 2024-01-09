import { create } from "zustand";

interface ShowServicesStoreProps {
  open: boolean;
  toggle: () => void;
}

const useShowServices = create<ShowServicesStoreProps>((set) => ({
  open: false,
  toggle: () => set((state) => ({ open: !state.open })),
}));

export default useShowServices;
