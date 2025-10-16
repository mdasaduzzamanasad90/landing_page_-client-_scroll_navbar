import { FaTelegramPlane, FaWhatsapp, FaHeadset } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 md:mt-20">
      <div className="container mx-auto px-4 text-center flex flex-col items-center gap-6">
        {/* Left Section */}
        <div className="flex items-center gap-3 md:text-3xl text-xl font-semibold">
          <FaHeadset className="text-3xl text-blue-300" />
          <span>24-hour Customer Service</span>
        </div>

        <div className="md:flex items-center justify-between md:gap-20">
          {/* Middle Section */}
          <div className="flex items-center gap-4 mb-2 md:mb-0">
            <FaTelegramPlane className="text-xl md:text-2xl text-blue-400" />
            <span className="font-medium text-sm md:text-lg">
              Telegram:
              <a
                href="https://t.me/GainZen"
                target="_blank"
                rel="noreferrer"
                className="hover:underline ml-2"
              >
                @DALPremium
              </a>
            </span>
          </div>
          {/* Right Section */}
          <div className="flex items-center gap-4">
            <FaWhatsapp className="text-xl md:text-2xl text-green-400" />
            <span className="font-medium text-sm md:text-lg">
              WhatsApp:
              <a
                href="https://wa.me/XXX"
                target="_blank"
                rel="noreferrer"
                className="hover:underline ml-2"
              >
                +1 (555) 123-4567
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-6 border-t border-blue-400/40 pt-4 text-sm text-blue-200 text-center">
        © {new Date().getFullYear()} OUYI DAL Services. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
