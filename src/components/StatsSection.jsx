import React, { useEffect } from 'react';

export default function MapSection() {
  useEffect(() => {
    // Load Leaflet CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';
    document.head.appendChild(link);

    // Load Leaflet JS
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
    script.async = true;
    script.onload = () => {
      const L = window.L;
      
      // IDF map centered on Paris
      const idfMap = L.map('idfMap', {
        zoom: 13,
        center: [48.7, 2.4],
        zoomControl: false // Disable zoom controls
      });
      
      // Define IDF bounds to limit the map to Île-de-France
      const idfBounds = L.latLngBounds(
        [48.1, 1.8], // Southwest corner
        [49.2, 2.9]  // Northeast corner
      );
      idfMap.setMaxBounds(idfBounds);
      idfMap.setMinZoom(10);
      idfMap.setMaxZoom(10);
      idfMap.on('drag', function() {
        idfMap.panInsideBounds(idfBounds, { animate: false });
      });
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(idfMap);

      // Add circle for Paris (small circle, just the city)
      L.circle([48.8566, 2.3522], {
        color: '#0565C4',
        fillColor: '#0565C4',
        fillOpacity: 0.3,
        weight: 2,
        radius: 8000 // 8km radius for Paris only
      }).addTo(idfMap);
    };
    document.body.appendChild(script);
  }, []);

  return (
    <section className="w-full py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#0565C4] font-semibold mb-2">Notre zone d'intervention</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Île-de-France
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Nous intervenons dans toute la région Île-de-France pour vos travaux de toiture et isolation.
          </p>
        </div>

        {/* Map Container */}
        <div className="rounded-lg overflow-hidden shadow-lg mb-12">
          <div id="idfMap" style={{ width: '100%', height: '500px' }} className="bg-gray-200" />
        </div>

        {/* Statistics Section */}
        <div className="bg-white flex flex-col gap-3  rounded-lg shadow-lg p-12 ">
          <div className=" ">
                <div className="flex  mx-auto items-center justify-center h-48 w-48 rounded-full bg-gradient-to-br from-[#0565C4] to-[#045fba] shadow-lg">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-white mb-2">60%</div>
                    <p className="text-white text-sm font-semibold">Projets à Paris</p>
                  </div>
                </div>
              </div>
          <div className="max-w-2xl mx-auto">
            <div className="text-center ">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Notre expertise à Paris
              </h3>
              <p className="text-gray-600 text-lg">
                Grâce à notre présence établie et à notre expertise locale, nous avons réalisé plus de 60% de nos projets de couverture de toiture à Paris.
              </p>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
}