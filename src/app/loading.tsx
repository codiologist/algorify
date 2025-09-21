import Image from "next/image";
import algorify_logo from "/public/favicon-2.svg";

const Loading = () => {
  return (
    <div className="fixed z-9999 flex h-screen w-full flex-col items-center justify-center bg-white lg:h-screen">
      <Image src={algorify_logo} className="h-auto w-[200px]" alt="" />
    </div>
  );
};

export default Loading;
