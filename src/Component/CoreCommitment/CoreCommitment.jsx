import {
  FaDollarSign,
  FaShieldAlt,
  FaUniversity,
  FaBolt,
} from "react-icons/fa";

const CoreCommitment = () => {
  return (
    <section
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
      className="md:py-20 py-10 bg-gray-50 text-gray-800 rounded-xl"
    >
      {/* Core Commitment Banner */}
      <div className="max-w-4xl mx-auto text-center mb-16 px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Focus on acquiring OUYI's DAL. Verify you have funds in your wallet,
          and we'll make the initial payment!
        </h2>
        <p className="text-sm text-gray-500">
          Other wallets will be supported later
        </p>
      </div>

      {/* Advantages Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {/* Advantage 1 */}
        <div data-aos="fade-up">
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center justify-between text-center border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:border-primary hover:bg-primary/5 h-full group">
            <FaDollarSign className="text-5xl text-primary mb-4 transition-colors duration-300 group-hover:text-primary-focus" />
            <div>
              <h3 className="font-bold text-xl mb-2 text-gray-800 group-hover:text-primary">
                Higher prices
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-700">
                Quotes are better than those on mainstream exchanges
              </p>
            </div>
          </div>
        </div>

        {/* Advantage 2 */}
        <div data-aos="fade-up">
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center justify-between text-center border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:border-primary hover:bg-primary/5 h-full group">
            <FaBolt className="text-5xl text-primary mb-4 transition-colors duration-300 group-hover:text-primary-focus" />
            <div>
              <h3 className="font-bold text-xl mb-2 text-gray-800 group-hover:text-primary">
                10-minute transfer
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-700">
                We advance payment for ultra-fast settlement
              </p>
            </div>
          </div>
        </div>

        {/* Advantage 3 */}
        <div data-aos="fade-up">
          {" "}
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center justify-between text-center border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:border-primary hover:bg-primary/5 h-full group">
            <FaShieldAlt className="text-5xl text-primary mb-4 transition-colors duration-300 group-hover:text-primary-focus" />
            <div>
              <h3 className="font-bold text-xl mb-2 text-gray-800 group-hover:text-primary">
                Secure transactions
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-700">
                You receive payment first, we receive the coins later
              </p>
            </div>
          </div>
        </div>

        {/* Advantage 4 */}
        <div data-aos="fade-up">
          {" "}
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center justify-between text-center border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:border-primary hover:bg-primary/5 h-full group">
            <FaUniversity className="text-5xl text-primary mb-4 transition-colors duration-300 group-hover:text-primary-focus" />
            <div>
              <h3 className="font-bold text-xl mb-2 text-gray-800 group-hover:text-primary">
                Support any payment channel
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-700">
                Flexible and convenient payment methods
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreCommitment;
