export function Location() {
  return (
    <section id="location-section" className="mt-[300px] text-center">
      <h2 className="text-4xl font-medium mb-12">Location</h2>
      
      {/* Google Maps Embed */}
      <div className="container mx-auto px-4">
        <div className="relative w-full aspect-w-16 aspect-h-6">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.3059718040977!2d106.74117427400519!3d-6.089419459736189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1d72d54c99f7%3A0xe75511a8b5b3ae51!2sNuat%20Time%20Thai%20Reflexology%20PIK!5e0!3m2!1sen!2sid!4v1739325715018!5m2!1sen!2sid" 
            width="100%" 
            height="400" 
            style={{ border:"20px" }} 
            loading="lazy"
            allowFullScreen
          />
        </div>
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
