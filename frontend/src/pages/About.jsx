const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-light tracking-widest mb-6 text-gray-900">
            ABOUT US
          </h1>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 italic">Weaving Traditions, Draping Dreams</p>
        </div>

        {/* Our Story Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At TickNTrack, we celebrate quality and style through our curated collection of premium products. Our name reflects our commitment to tracking excellence — bringing you the finest products that combine quality, craftsmanship, and modern design.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From premium footwear to luxury timepieces and accessories — every product in our collection is carefully selected to meet the highest standards of quality. Each item represents our dedication to bringing you the best in style, comfort, and functionality.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="max-w-3xl mx-auto mb-20 text-center bg-gradient-to-br from-amber-50 to-white border-2 border-amber-100 rounded-lg p-12 shadow-lg">
          <h2 className="text-3xl font-light tracking-wider mb-6 text-gray-900">
            OUR VISION
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To provide our customers with premium quality products that combine style, comfort, and functionality. TickNTrack strives to make exceptional products accessible to everyone who values quality and elegance.
          </p>
        </div>

        {/* What Makes Us Special */}
        <div className="mb-20">
          <h2 className="text-3xl font-light tracking-wider mb-12 text-gray-900 text-center">
            WHAT MAKES TICKNTRACK SPECIAL?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="flex items-start space-x-4 p-6 bg-white border-2 border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl text-amber-600">🧵</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Quality Products</h3>
                <p className="text-gray-700 leading-relaxed">
                  We collaborate directly with trusted manufacturers and brands to bring you authentic, high-quality products.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-white border-2 border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl text-amber-600">✨</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Curated for Every Occasion</h3>
                <p className="text-gray-700 leading-relaxed">
                  Whether you're dressing up for a festive celebration, a wedding, or a simple workday, we have something crafted just for you.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-white border-2 border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl text-amber-600">🎨</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Tradition Meets Modernity</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our designs combine classic patterns with modern aesthetics — perfect for today's confident, independent women.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-white border-2 border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl text-amber-600">🛍️</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Seamless Shopping Experience</h3>
                <p className="text-gray-700 leading-relaxed">
                  Explore a rich collection from the comfort of your home. With easy returns, secure payments, and reliable delivery — shopping made graceful.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Closing Message */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light tracking-wider mb-8 text-gray-900">
            CELEBRATE EVERY MOMENT WITH TICKNTRACK
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Whether you're looking for premium footwear for your active lifestyle, elegant timepieces for special occasions, or stylish accessories to complete your look — TickNTrack brings you collections that make every moment special.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Our products aren't just items — they're a testament to quality craftsmanship, a reflection of your style, and a celebration of you.
          </p>
          <p className="text-xl font-light text-amber-700 italic tracking-wide">
            Discover your style. Track your excellence. Only at TickNTrack.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;