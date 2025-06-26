import React from 'react'

const MapSection = () => {
  return (
    <div className="w-full h-150 bg-[#0f0f11]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d790.2094722472332!2d79.05736068491655!3d21.140450618634148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1750676162560!5m2!1sen!2sin"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  )
}

export default MapSection
