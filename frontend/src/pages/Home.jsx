import React from 'react';
import { PinData } from '../context/PinContext';
import { Loading } from '../components/Loading';
import PinCard from '../components/PinCard';

const Home = () => {
  const { pins, loading } = PinData();

  return (
    <div className="container max-w-full mx-auto py-4 sm:px-6 lg:px-8">
      {loading ? (
        <Loading />
      ) : (
        <div className="pins-grid">
          {pins && pins.length > 0 ? (
            pins.map((pin, index) => (
              <div key={index} className="box">
                <PinCard pin={pin} />
              </div>
            ))
          ) : (
            <p>No Pins Yet</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;