import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mayfield Estates Las Vegas | Luxury Living in Las Vegas</title>
        <meta name="description" content="Discover luxury living at Mayfield Estates, an exclusive community in Las Vegas featuring custom homes, premium amenities, and stunning desert views." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js" strategy="afterInteractive" />

      <style jsx global>{`
        .hero {
            background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/hero-image.jpg');
            background-size: cover;
            background-position: center;
            height: 80vh;
        }
        .amenity-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        .testimonial-card {
            height: 100%;
        }
      `}</style>

      <div className="font-sans text-gray-800">
        {/* Navigation */}
        <nav className="bg-white shadow-md fixed w-full z-10">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <a href="#" className="text-2xl font-bold text-indigo-800">Mayfield Estates</a>
              <div className="hidden md:flex space-x-8">
                <a href="#about" className="hover:text-indigo-600 transition">About</a>
                <a href="#amenities" className="hover:text-indigo-600 transition">Amenities</a>
                <a href="#properties" className="hover:text-indigo-600 transition">Properties</a>
                <a href="#neighborhood" className="hover:text-indigo-600 transition">Neighborhood</a>
                <a href="#gallery" className="hover:text-indigo-600 transition">Gallery</a>
                <a href="#contact" className="hover:text-indigo-600 transition">Contact</a>
              </div>
              <div className="md:hidden">
                <button className="text-gray-500 focus:outline-none">
                  <i className="fas fa-bars text-2xl"></i>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="hero flex items-center justify-center text-white text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to Mayfield Estates</h1>
            <p className="text-xl md:text-2xl mb-8">Luxury Living in the Heart of Las Vegas</p>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
              <a href="#properties" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-lg">View Properties</a>
              <a href="#contact" className="bg-white hover:bg-gray-100 text-indigo-600 font-bold py-3 px-6 rounded-lg transition duration-300 text-lg">Schedule a Tour</a>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <img src="/community-image.jpg" alt="Mayfield Estates Community" className="rounded-lg shadow-xl" />
              </div>
              <div className="md:w-1/2 md:pl-10">
                <h2 className="text-3xl font-bold mb-6 text-indigo-800">About Mayfield Estates</h2>
                <p className="text-lg mb-6">Nestled in the prestigious western region of Las Vegas, Mayfield Estates offers an unparalleled living experience combining luxury, comfort, and convenience. Our master-planned community features custom-built homes, meticulously landscaped grounds, and resort-style amenities.</p>
                <p className="text-lg mb-6">Established in 2010, Mayfield Estates has grown into one of Las Vegas's most sought-after residential communities, known for its breathtaking desert views, proximity to the Strip, and tight-knit community atmosphere.</p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-bold text-indigo-600 text-xl mb-2">24/7 Security</h3>
                    <p>Gated community with round-the-clock security personnel</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-bold text-indigo-600 text-xl mb-2">Prime Location</h3>
                    <p>Just 15 minutes from the Las Vegas Strip and major attractions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section id="amenities" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-2 text-center text-indigo-800">Community Amenities</h2>
            <p className="text-xl text-center mb-12 text-gray-600">Enjoy resort-style living every day</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 transition duration-300 amenity-card">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-swimming-pool text-2xl text-indigo-600"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Resort-Style Pool</h3>
                <p className="text-gray-600">Olympic-sized swimming pool with cabanas, hot tub, and children's splash pad</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 transition duration-300 amenity-card">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-dumbbell text-2xl text-indigo-600"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">State-of-the-Art Fitness Center</h3>
                <p className="text-gray-600">24/7 access to modern equipment, personal training, and group fitness classes</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 transition duration-300 amenity-card">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-table-tennis text-2xl text-indigo-600"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Tennis & Pickleball Courts</h3>
                <p className="text-gray-600">Professional-grade courts with night lighting and reservation system</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 transition duration-300 amenity-card">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-tree text-2xl text-indigo-600"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Community Parks</h3>
                <p className="text-gray-600">Beautifully landscaped parks with walking trails, playgrounds, and picnic areas</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 transition duration-300 amenity-card">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-glass-cheers text-2xl text-indigo-600"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Clubhouse & Event Space</h3>
                <p className="text-gray-600">Elegant venue for community events, private parties, and social gatherings</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 transition duration-300 amenity-card">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-paw text-2xl text-indigo-600"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Pet-Friendly Areas</h3>
                <p className="text-gray-600">Dog park, pet stations, and dedicated walking paths for your furry friends</p>
              </div>
            </div>
          </div>
        </section>

        {/* Properties Section */}
        <section id="properties" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-2 text-center text-indigo-800">Featured Properties</h2>
            <p className="text-xl text-center mb-12 text-gray-600">Explore our available homes and find your perfect match</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Property 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="/property1.jpg" alt="Luxury Home" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">Modern Desert Oasis</h3>
                    <span className="bg-indigo-600 text-white py-1 px-3 rounded-full text-sm">For Sale</span>
                  </div>
                  <p className="text-gray-500 mb-4">123 Mayfield Drive, Las Vegas, NV</p>
                  <div className="flex justify-between mb-4">
                    <span className="text-2xl font-bold text-indigo-600">$1,250,000</span>
                  </div>
                  <div className="flex justify-between mb-6 text-gray-600">
                    <span><i className="fas fa-bed mr-2"></i>4 Beds</span>
                    <span><i className="fas fa-bath mr-2"></i>3.5 Baths</span>
                    <span><i className="fas fa-ruler-combined mr-2"></i>3,200 Sq Ft</span>
                  </div>
                  <a href="#contact" className="block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300">Schedule Viewing</a>
                </div>
              </div>
              
              {/* Property 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="/property2.jpg" alt="Spanish Villa" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">Spanish-Inspired Villa</h3>
                    <span className="bg-indigo-600 text-white py-1 px-3 rounded-full text-sm">For Sale</span>
                  </div>
                  <p className="text-gray-500 mb-4">456 Mayfield Court, Las Vegas, NV</p>
                  <div className="flex justify-between mb-4">
                    <span className="text-2xl font-bold text-indigo-600">$1,475,000</span>
                  </div>
                  <div className="flex justify-between mb-6 text-gray-600">
                    <span><i className="fas fa-bed mr-2"></i>5 Beds</span>
                    <span><i className="fas fa-bath mr-2"></i>4 Baths</span>
                    <span><i className="fas fa-ruler-combined mr-2"></i>4,100 Sq Ft</span>
                  </div>
                  <a href="#contact" className="block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300">Schedule Viewing</a>
                </div>
              </div>
              
              {/* Property 3 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="/property3.jpg" alt="Contemporary Home" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">Contemporary Masterpiece</h3>
                    <span className="bg-green-600 text-white py-1 px-3 rounded-full text-sm">New Listing</span>
                  </div>
                  <p className="text-gray-500 mb-4">789 Mayfield Lane, Las Vegas, NV</p>
                  <div className="flex justify-between mb-4">
                    <span className="text-2xl font-bold text-indigo-600">$1,895,000</span>
                  </div>
                  <div className="flex justify-between mb-6 text-gray-600">
                    <span><i className="fas fa-bed mr-2"></i>6 Beds</span>
                    <span><i className="fas fa-bath mr-2"></i>5.5 Baths</span>
                    <span><i className="fas fa-ruler-combined mr-2"></i>5,500 Sq Ft</span>
                  </div>
                  <a href="#contact" className="block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300">Schedule Viewing</a>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <a href="#contact" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-lg">View All Properties</a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-indigo-800 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-2 text-center">Contact Us</h2>
            <p className="text-xl text-center mb-12 text-indigo-200">We're here to help you find your dream home</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2">First Name</label>
                      <input type="text" className="w-full px-4 py-2 rounded bg-indigo-700 border border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                    </div>
                    <div>
                      <label className="block mb-2">Last Name</label>
                      <input type="text" className="w-full px-4 py-2 rounded bg-indigo-700 border border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-2 rounded bg-indigo-700 border border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                  </div>
                  <div>
                    <label className="block mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-2 rounded bg-indigo-700 border border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                  </div>
                  <div>
                    <label className="block mb-2">I'm interested in:</label>
                    <select className="w-full px-4 py-2 rounded bg-indigo-700 border border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                      <option>Buying a home</option>
                      <option>Learning about the community</option>
                      <option>Scheduling a tour</option>
                      <option>Investment opportunities</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2">Message</label>
                    <textarea rows={4} className="w-full px-4 py-2 rounded bg-indigo-700 border border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"></textarea>
                  </div>
                  <button type="submit" className="bg-white hover:bg-gray-100 text-indigo-800 font-bold py-3 px-6 rounded transition duration-300">Send Message</button>
                </form>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-indigo-700 p-3 rounded-full mr-4">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Visit Our Office</h4>
                      <p className="text-indigo-200">7890 Mayfield Boulevard<br />Las Vegas, NV 89135</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-indigo-700 p-3 rounded-full mr-4">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Call Us</h4>
                      <p className="text-indigo-200">(702) 555-1234</p>
                      <p className="text-indigo-200">Mon-Fri: 9am-6pm, Sat: 10am-4pm</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-indigo-700 p-3 rounded-full mr-4">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Email Us</h4>
                      <p className="text-indigo-200">info@mayfieldestateslasvegas.com</p>
                      <p className="text-indigo-200">sales@mayfieldestateslasvegas.com</p>
                    </div>
                  </div>
                  
                  <div className="pt-6">
                    <h4 className="font-bold text-xl mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a href="#" className="bg-indigo-700 hover:bg-indigo-600 w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="bg-indigo-700 hover:bg-indigo-600 w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#" className="bg-indigo-700 hover:bg-indigo-600 w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="bg-indigo-700 hover:bg-indigo-600 w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Mayfield Estates</h3>
                <p className="mb-4 text-gray-400">Luxury living in the heart of Las Vegas. Experience the ultimate in comfort, convenience, and community.</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#about" className="text-gray-400 hover:text-white transition">About Us</a></li>
                  <li><a href="#properties" className="text-gray-400 hover:text-white transition">Properties</a></li>
                  <li><a href="#amenities" className="text-gray-400 hover:text-white transition">Amenities</a></li>
                  <li><a href="#neighborhood" className="text-gray-400 hover:text-white transition">Neighborhood</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition">FAQ</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Community News</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Resident Portal</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Maintenance Requests</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start">
                    <i className="fas fa-map-marker-alt mt-1 mr-2"></i>
                    <span>7890 Mayfield Boulevard<br />Las Vegas, NV 89135</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-phone mt-1 mr-2"></i>
                    <span>(702) 555-1234</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-envelope mt-1 mr-2"></i>
                    <span>info@mayfieldestateslasvegas.com</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Mayfield Estates Las Vegas. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
