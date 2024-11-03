import Link from "next/link";
import Image from "next/image";

const HEADER_LOGO = "/images/HeaderLogo.png";

const HeaderLogo = () => {
  return (
    <Link href="/">
      <figure>
        <Image
          src={HEADER_LOGO}
          alt=""
          layout="intrinsic"
          height={160}
          width={40}
        />
      </figure>
    </Link>
  );
};
export default HeaderLogo;
