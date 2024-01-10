import { create } from "zustand";

interface ShowServicesStoreProps {
  isOpen: boolean;
  toggle: () => void;
}

const useShowServices = create<ShowServicesStoreProps>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useShowServices;
