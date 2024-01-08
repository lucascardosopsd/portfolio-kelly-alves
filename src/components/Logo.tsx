import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="border border-peach p-2 rounded">
      <div className="flex items-center space-x-2">
        <div className="flex items-center justify-center p-2 bg-purpe rounded bg-purple text-white">
          DEV
        </div>
        <h5 className="text-purple text-xl font-semibold">Lucas Cardoso</h5>
      </div>
    </Link>
  );
};

export default Logo;
