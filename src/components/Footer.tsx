import Image from "next/image";
import logo from "/public/footer-logo.png";
import mail_icon from "/public/icons//mail-icon.svg";
import call_icon from "/public/icons/call-icon.svg";
const Footer = () => {
  return (
    <footer className="w-full bg-white px-6 pt-12 pb-6">
      <div className="w-full items-start justify-between gap-4 lg:flex">
        <div className="mt-1 mb-4 w-full lg:mb-0 lg:w-6/12 2xl:w-8/12">
          <p className="w-full text-lg font-medium text-black lg:max-w-xl">
            We help businesses amplify their online presence with cutting-edge
            marketing strategies, high-impact designs, and scalable digital
            solutions.
          </p>
        </div>
        <div className="w-full items-start gap-6 space-y-6 lg:flex lg:w-6/12 lg:space-y-0 2xl:w-4/12">
          <div className="w-full lg:w-1/2">
            <h4 className="mb-2 text-lg font-medium lg:mb-6">Our Location</h4>
            <p className="font-medium text-[#565656]">
              4, Bikalpo Tower, 1st Floor, Shimultoly Rd, Gazipur 1703.
            </p>
            <p>Bangladesh</p>
          </div>
          <div className="w-full lg:w-1/2">
            <h4 className="mb-2 text-lg font-medium lg:mb-6">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Image
                  src={call_icon}
                  alt="Phone Icon"
                  width={18}
                  height={18}
                  className="mt-1"
                />
                <div>
                  <a
                    href="tel:+8801711356235"
                    className="mr-2 inline-block font-medium text-[#565656]"
                  >
                    +880 171 135 6235,
                  </a>
                  <a
                    href="tel:+8801876594444"
                    className="inline-block font-medium text-[#565656]"
                  >
                    +880 187 659 4444
                  </a>
                </div>
              </li>
              <li>
                <a
                  href="mailto:info@algorifylabs.com"
                  className="flex items-center gap-2 font-medium text-[#565656]"
                >
                  <Image
                    src={mail_icon}
                    alt="Phone Icon"
                    width={18}
                    height={18}
                  />
                  info@algorifylabs.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-20">
        <Image src={logo} alt="Logo" className="mx-auto h-auto" />
      </div>
      <p className="text-center text-[#565656]">
        © 2025 Algorify – All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
