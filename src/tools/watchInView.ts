import useDivInView from "@/context/DivInVIew";
import { useInView } from "framer-motion";
import { RefObject, useEffect } from "react";

interface WatchInViewProps {
  ref: RefObject<Element>;
  id: string;
}

export const watchInView = ({ ref, id }: WatchInViewProps) => {
  const isInView = useInView(ref);
  const { setCurrentDivId } = useDivInView();

  useEffect(() => {
    if (isInView) {
      setCurrentDivId(id);
    }
  }, [isInView]);
};
