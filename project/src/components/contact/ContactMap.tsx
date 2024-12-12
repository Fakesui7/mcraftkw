import React from 'react';
import { Navigation } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

const GOOGLE_MAPS_URL = "https://www.google.com/maps?q=Al+Mohallab+Marine+Co/%D8%A7%D9%84%D9%85%D9%87%D9%84%D8%A8+%D9%85%D8%A7%D8%B1%D9%8A%D9%86,+353+%D8%B4%D8%A7%D8%B1%D8%B9+36&ftid=0x3fcf9aedb1ff0df1:0x425a38fe6b9aa323&entry=gps&lucs=,94224825,94227247,94227248,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_ep=CAISDTYuMTM5LjAuOTA4MzAYACCs3wEqWiw5NDIyNDgyNSw5NDIyNzI0Nyw5NDIyNzI0OCw0NzA3MTcwNCw0NzA2OTUwOCw5NDIxODY0MSw5NDIwMzAxOSw0NzA4NDMwNCw5NDIwODQ1OCw5NDIwODQ0N0ICS1c%3D&g_st=iw";

export const ContactMap = () => {
  return (
    <div className="bg-[#1a1a1a] rounded-lg shadow-xl p-6 max-w-sm mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-white">Visit Our Showroom</h2>
        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
        >
          <Navigation className="h-5 w-5 mr-2" />
          <span>Get Directions</span>
        </a>
      </div>
      
      {/* QR Code Container */}
      <div className="flex justify-center items-center bg-white p-2 rounded-lg w-[180px] h-[180px] mx-auto">
        <QRCodeSVG
          value={GOOGLE_MAPS_URL}
          size={176}
          level="M"
          includeMargin={false}
          bgColor="#FFFFFF"
          fgColor="#000000"
        />
      </div>

      {/* Opening Hours */}
      <div className="mt-4 p-3 bg-[#242424] rounded-lg">
        <div className="flex items-center justify-between text-gray-300 text-sm">
          <span>Opening Hours:</span>
          <span>Sunday - Thursday: 9:00 AM - 5:00 PM</span>
        </div>
      </div>
    </div>
  );
};