// ServiceListings.js
import React from 'react';
import PropTypes from 'prop-types';

const ServiceListings = ({ services }) => {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Available Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services && services.map((service, index) => (
          <div key={index} className="bg-white shadow-md rounded p-4">
            <h3 className="text-lg font-bold">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
            <p className="text-gray-600 mt-2">Price: ${service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

ServiceListings.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ),
};

export default ServiceListings;
