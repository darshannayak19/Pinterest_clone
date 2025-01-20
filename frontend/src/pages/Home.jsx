import React, { useEffect, useRef } from 'react';
import Masonry from 'masonry-layout';
import { PinData } from '../context/PinContext';
import { Loading } from '../components/Loading';
import PinCard from '../components/PinCard';
import imagesLoaded from 'imagesloaded';

const Home = () => {
  const { pins, loading } = PinData();
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (grid) {
      const msnry = new Masonry(grid, {
        itemSelector: '.pin-card',
        percentPosition: true,
        columnWidth: '.pin-sizer',
        gutter: -20
      });

      imagesLoaded(grid, function() {
        msnry.layout();
      });
    }
}, [pins]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="max-w-7xl mx-auto py-4 sm:px-6 lg:px-8">
          <div className="px-2 py-2 sm:px-0">
          <div ref={gridRef} className="masonry-grid">
  <div className="pin-sizer" style={{ width: '25%' }}></div>
  {pins && pins.length > 0 ? (
    pins.map((pin, index) => (
      <div key={index} className="pin-card">
        <PinCard pin={pin} />
      </div>
    ))
  ) : (
    <p>No Pins Yet</p>
  )}
</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
