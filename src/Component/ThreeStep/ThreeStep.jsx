import { FaWallet, FaFileInvoiceDollar, FaMoneyBillWave } from "react-icons/fa";

const ThreeStep = () => {
  return (
    <section
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
      className="md:py-20 py-10 bg-gray-50 text-gray-800 mt-10 md:mt-20 rounded-xl"
    >
      {/* Section Title */}
      <div className="max-w-3xl mx-auto text-center mb-16 px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Secure cashing in just three steps
        </h2>
      </div>

      {/* Steps Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Step 1 */}
        <div data-aos="fade-up">
          {" "}
          <div className="bg-gray-50 shadow-md rounded-2xl p-8 flex flex-col items-center justify-between text-center border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:border-primary hover:bg-primary/5 h-full group">
            <FaWallet className="text-5xl text-primary mb-4 transition-colors duration-300 group-hover:text-primary-focus" />
            <div>
              <h3 className="font-bold text-xl mb-2 text-gray-800 group-hover:text-primary">
                Preparation
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-700">
                Create a WEB3 wallet on EOY Exchange
              </p>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div data-aos="fade-up">
          {" "}
          <div className="bg-gray-50 shadow-md rounded-2xl p-8 flex flex-col items-center justify-between text-center border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:border-primary hover:bg-primary/5 h-full group">
            <FaFileInvoiceDollar className="text-5xl text-primary mb-4 transition-colors duration-300 group-hover:text-primary-focus" />
            <div>
              <h3 className="font-bold text-xl mb-2 text-gray-800 group-hover:text-primary">
                Submission
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-700">
                Enter your DAL token amount
              </p>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div data-aos="fade-up">
          {" "}
          <div className="bg-gray-50 shadow-md rounded-2xl p-8 flex flex-col items-center justify-between text-center border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:border-primary hover:bg-primary/5 h-full group">
            <FaMoneyBillWave className="text-5xl text-primary mb-4 transition-colors duration-300 group-hover:text-primary-focus" />
            <div>
              <h3 className="font-bold text-xl mb-2 text-gray-800 group-hover:text-primary">
                Receive payment
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-700">
                Contact a specialist to obtain a network connection, and we will
                make the payment first
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeStep;
