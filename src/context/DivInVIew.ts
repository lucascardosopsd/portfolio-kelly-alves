import { create, SetState } from "zustand";

interface DivInViewProps {
  currentDivId: string;
  setCurrentDivId: (id: string) => void;
}

const useDivInView = create<DivInViewProps>(
  (set: SetState<DivInViewProps>) => ({
    currentDivId: "",
    setCurrentDivId: (id) => set(() => ({ currentDivId: id })),
  })
);

export default useDivInView;
