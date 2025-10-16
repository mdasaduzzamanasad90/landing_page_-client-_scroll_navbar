const FormArea = () => {
  return (
    <section
      data-aos="zoom-in-up"
      data-aos-delay="300"
      className="w-full md:py-16 py-10 px-4 bg-gradient-to-b from-primary/10 via-primary/5 to-primary/10 lg:rounded-[40px]"
    >
      <div data-aos="fade-up" data-aos-delay="600" className="max-w-lg mx-auto">
        <div className="relative card shadow-xl bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
          {/* Gradient Border Glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <div className="card-body relative z-10">
            {/* Title */}
            <h2 className="card-title text-2xl font-bold text-center text-gray-900">
              Get your exclusive high-price quote now
            </h2>
            <p className="text-sm text-center text-gray-500 mt-2">
              Fill in the form below to receive a personalized quote from our
              specialist.
            </p>

            {/* Form */}

            <form className="space-y-5 mt-6">
              {/* Name */}
              <div className="form-control space-y-2">
                <label className="label">
                  <span className="label-text font-medium text-gray-700">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="
    w-full
    px-4 py-3
    rounded-lg
    border border-gray-300
    bg-white
    text-gray-900
    placeholder-gray-400
    shadow-sm
    focus:outline-none
    focus:ring-2 focus:ring-primary/40 focus:border-primary
    transition-all duration-300
  "
                />
              </div>

              {/* TG/WS */}
              <div className="form-control space-y-2">
                <label className="label">
                  <span className="label-text font-medium text-gray-700">
                    TG/WS <span className="text-primary">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Your Telegram or WhatsApp"
                  required
                  className="
    w-full
    px-4 py-3
    rounded-lg
    border border-gray-300
    bg-white
    text-gray-900
    placeholder-gray-400
    shadow-sm
    focus:outline-none
    focus:ring-2 focus:ring-primary/40 focus:border-primary
    transition-all duration-300
  "
                />
              </div>

              {/* DAL Token Quantity */}
              <div className="form-control space-y-2">
                <label className="label">
                  <span className="label-text font-medium text-gray-700">
                    DAL Token Quantity
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. 5000"
                  className="
    w-full
    px-4 py-3
    rounded-lg
    border border-gray-300
    bg-white
    text-gray-900
    placeholder-gray-400
    shadow-sm
    focus:outline-none
    focus:ring-2 focus:ring-primary/40 focus:border-primary
    transition-all duration-300
  "
                />
              </div>

              {/* Exchange */}
              <div className="form-control space-y-2">
                <label className="label flex items-center justify-between">
                  <span className="label-text font-medium text-gray-700">
                    Exchange
                  </span>
                  <span className="badge badge-outline border-primary text-primary font-semibold">
                    OE Reminder
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your preferred exchange"
                  className="
    w-full
    px-4 py-3
    rounded-lg
    border border-gray-300
    bg-white
    text-gray-900
    placeholder-gray-400
    shadow-sm
    focus:outline-none
    focus:ring-2 focus:ring-primary/40 focus:border-primary
    transition-all duration-300
  "
                />
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="btn btn-primary w-full normal-case text-sm font-medium rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  Submit Information & Get Quote
                </button>
              </div>
            </form>

            {/* Privacy Policy */}
            <p className="text-center text-xs text-gray-500 mt-5">
              Information is{" "}
              <span className="font-semibold text-primary">
                strictly confidential
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormArea;
