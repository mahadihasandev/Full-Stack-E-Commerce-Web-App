'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import logo from '../../assets/logo.png'
import { MapIcon } from 'lucide-react'

const About = () => {
  useEffect(() => {
    // Initialize map when component mounts
    const initMap = () => {
      // Your location coordinates (replace with your actual location)
      const location = { lat: 23.8103, lng: 90.4125 }; // Dhaka, Bangladesh
      
      if (document.getElementById('map') && window.google && window.google.maps) {
        const map = new window.google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: location,
          mapTypeControl: true,
          fullscreenControl: true,
        });

        // Add marker
        new window.google.maps.Marker({
          position: location,
          map: map,
          title: 'Our Location',
          icon: <MapIcon/>
        });
      }
    };

    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://www.google.com/maps`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      script.onerror = () => {
        console.error('Failed to load Google Maps. Please check your API key.');
      };
      document.head.appendChild(script);
    } else {
      initMap();
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold font-poppins mb-4">About Us</h1>
          <p className="text-xl text-orange-100">Discover our story and mission</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Introduction Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-poppins border-l-4 border-orange-500 pl-4">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We are a passionate team dedicated to providing the best e-commerce experience. Our mission is to connect customers with quality products at competitive prices.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              With years of experience in the industry, we&apos are built a platform that prioritizes customer satisfaction, fast delivery, and authentic products.
            </p>
            <div className="flex gap-4 mt-6">
              <div className="bg-orange-100 rounded-lg p-4 flex-1">
                <h3 className="text-2xl font-bold text-orange-600 font-poppins">10K+</h3>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div className="bg-orange-100 rounded-lg p-4 flex-1">
                <h3 className="text-2xl font-bold text-orange-600 font-poppins">5K+</h3>
                <p className="text-gray-600">Products</p>
              </div>
              <div className="bg-orange-100 rounded-lg p-4 flex-1">
                <h3 className="text-2xl font-bold text-orange-600 font-poppins">24/7</h3>
                <p className="text-gray-600">Support</p>
              </div>
            </div>
          </div>
          <div className="bg-orange-50 rounded-lg overflow-hidden shadow-lg h-96">
            <div className="w-full h-full bg-linear-to-br from-orange-300 to-orange-500 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-32 h-32 text-white mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <p className="text-white text-lg font-semibold"><Image alt='image' loading="eager" src={logo}/></p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 font-poppins text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-orange-500 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 font-poppins">Quality</h3>
              <p className="text-gray-600">We guarantee authentic, high-quality products for all our customers.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-orange-500 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 font-poppins">Trust</h3>
              <p className="text-gray-600">Your trust is our priority. We maintain complete transparency in all transactions.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-orange-500 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 font-poppins">Innovation</h3>
              <p className="text-gray-600">We continuously improve our platform to serve you better with cutting-edge technology.</p>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 font-poppins text-center">Visit Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="bg-orange-50 rounded-lg p-6 text-center border-2 border-orange-200">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2 font-poppins">Address</h3>
              <p className="text-gray-600 text-sm">123 Commerce Street<br />Dhaka, Savar, Ashulia</p>
            </div>

            <div className="bg-orange-50 rounded-lg p-6 text-center border-2 border-orange-200">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2 font-poppins">Email</h3>
              <p className="text-gray-600 text-sm">arnob4all@gmail.com</p>
            </div>

            <div className="bg-orange-50 rounded-lg p-6 text-center border-2 border-orange-200">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2 font-poppins">Phone</h3>
              <p className="text-gray-600 text-sm">+8801735696417</p>
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-lg overflow-hidden shadow-lg border-4 border-orange-500">
            <div id="map" className="w-full h-96"></div>
            {/* Fallback: Embedded Google Maps Embed API (works without API key) */}
            <iframe
              width="100%"
              height="400"
              style={{ border: 0, display: 'none' }}
              id="mapIframe"
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9019395630467!2d90.40992392502748!3d23.810297489174977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7215c45555f%3A0x5e8e8e8e8e8e8e8e!2sAshulia%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1234567890"
            ></iframe>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4 font-poppins">Ready to Shop?</h2>
          <p className="mb-6 text-orange-100 max-w-2xl mx-auto">
            Join thousands of satisfied customers enjoying our wide range of products with secure payment and fast delivery.
          </p>
          <button className="bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors font-poppins">
            Start Shopping Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default About