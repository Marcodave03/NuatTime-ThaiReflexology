export function Location() {
    return (
      <section id="location-section" className="my-24 text-center">
        <h2 className="text-4xl font-medium mb-12">Location</h2>
        
        {/* Google Maps Embed */}
        <div className="container mx-auto">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.610196421064!2d112.61554171432246!3d-7.17592957301862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa35c87b1b7d%3A0x5a93e9d8f8e2f3f1!2sNuatTime%20Reflexology!5e0!3m2!1sen!2sid!4v1692532456475!5m2!1sen!2sid" 
            width="100%" 
            height="450" 
            className="rounded-xl shadow-md"
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
  
        {/* Address Information */}
        <div className="mt-8 text-xl font-serif">
          <p>NuatTime Reflexology</p>
          <p>Jl. Raya Manyar No.12, Surabaya, Indonesia</p>
          <p>Phone: +62 812-3456-7890</p>
        </div>
      </section>
    );
  }
  