
import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const ContactButtons = () => {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-4 z-40">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917050525808"
        target="_blank"
        rel="noopener noreferrer"
        className="float-button bg-green-500 hover:bg-green-600"
        aria-label="Contact on WhatsApp"
      >
        <span className="sr-only">WhatsApp</span>
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
      
      {/* Phone Call Button */}
      <a
        href="tel:+917050525808"
        className="float-button bg-arogya-teal hover:bg-arogya-teal-dark pulse"
        aria-label="Call Now"
      >
        <span className="sr-only">Call</span>
        <Phone className="w-6 h-6 text-white" />
      </a>
    </div>
  );
};

export default ContactButtons;
