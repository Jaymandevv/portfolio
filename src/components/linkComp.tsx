import Link from "next/link";

interface LinkProps {
  url: string;
  name: string;
  className?: string;
}

function LinkComp({ url, name, className }: LinkProps) {
  return (
    <Link target="_blank" className={`text-slate-100 hover:text-teal-300 ${className}`} href={url}>
      {name}
    </Link>
  );
}

export default LinkComp;
