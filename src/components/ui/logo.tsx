import Image from "next/image";
import Link from "next/link";

type Props = {
  size: number;
};

export const Logo = ({ size }: Props) => {
  return (
    <Link href="/">
      <Image
        // src={"/logo 2.png"}
        src={"/logo-v.png"}
        alt="Z"
        width={size - 3}
        height={size}
        quality={100}
      />
    </Link>
  );
};
