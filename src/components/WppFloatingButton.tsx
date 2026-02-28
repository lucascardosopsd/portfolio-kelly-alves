import Link from "next/link";
import { PiWhatsappLogoThin } from "react-icons/pi";

interface WppFloatingButtonProps {
  whatsappUrl: string;
}

const WppFloatingButton = ({ whatsappUrl }: WppFloatingButtonProps) => {
  return (
    <div className="fixed right-4 top-1/2 z-[60] block -translate-y-1/2 tablet:hidden">
      <Link href={whatsappUrl} className="relative">
        <div className="flex items-center justify-center border border-primary bg-primary text-primary-foreground rounded-full h-16 w-16">
          <PiWhatsappLogoThin className="text-2xl" />
        </div>

        <div className="h-16 w-16 bg-primary absolute -z-10 animate-ping rounded-full inset-0 m-0" />
      </Link>
    </div>
  );
};

export default WppFloatingButton;
