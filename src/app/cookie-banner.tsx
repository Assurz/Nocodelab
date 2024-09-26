'use client';

import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (cookieConsent === null) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDeny = () => {
    localStorage.setItem('cookieConsent', 'denied');
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 right-0 md:bottom-4 md:right-4 max-w-sm w-full bg-white rounded-lg shadow-lg z-50">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Manage cookie consent</h2>
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-700 text-2xl leading-none">&times;</button>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          We use cookies to enhance your browsing experience and analyze our traffic. 
          By clicking &quot;Accept&quot;, you consent to our use of cookies.
        </p>
        <div className="flex space-x-2">
          <button
            onClick={handleAccept}
            className="w-full px-4 py-2 bg-[#560707] text-white rounded-md hover:bg-gray-800"
          >
            Accept
          </button>
          <button
            onClick={handleDeny}
            className="w-full px-4 py-2 bg-[#DDD7D4] text-black rounded-md hover:bg-gray-300"
          >
            Deny
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;