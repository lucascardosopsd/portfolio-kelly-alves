import Link from "next/link";
import { PiWhatsappLogoThin } from "react-icons/pi";

const WppFloatingButton = () => {
  return (
    <div className="fixed z-20 bottom-4 right-4 block tablet:hidden">
      <Link href="https://wa.link/a5sb7n" className="relative">
        <div className="flex items-center justify-center border border-primary bg-primary text-primary-foreground rounded-full h-16 w-16">
          <PiWhatsappLogoThin className="text-2xl" />
        </div>

        <div className="h-16 w-16 bg-primary absolute -z-10 animate-ping rounded-full inset-0 m-0" />
      </Link>
    </div>
  );
};

export default WppFloatingButton;
