import React, { useState } from "react";

const ColorChanger = () => {
  const [color, setColor] = useState("Olive");
  return (
    <div className="px-4 py-5 shadow-lg mt-5" style={{ backgroundColor: color }}>
      <h1 className="text-2xl text-white font-mono text-center mb-5">Color Changer 💥</h1>
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 px-2 py-2 rounded-2xl bg-white shadow-lg">
        <button
          className="text-white px-4 py-2 outline-none rounded shadow-lg"
          style={{ backgroundColor: 'red' }}
          onClick={() => setColor('red')}
        >
          Red
        </button>
        <button
          className="text-white px-4 py-2 outline-none rounded shadow-lg"
          style={{ backgroundColor: 'blue' }}
          onClick={() => setColor('blue')}
        >
          Blue
        </button>
        <button
          className="text-white px-4 py-2 outline-none rounded shadow-lg"
          style={{ backgroundColor: 'green' }}
          onClick={() => setColor('green')}
        >
          Green
        </button>
        <button
          className="text-white px-4 py-2 outline-none rounded shadow-lg"
          style={{ backgroundColor: 'yellow' }}
          onClick={() => setColor('yellow')}
        >
          Yellow
        </button>
        <button
          className="text-white px-4 py-2 outline-none rounded shadow-lg"
          style={{ backgroundColor: 'purple' }}
          onClick={() => setColor('purple')}
        >
          Purple
        </button>
        <button
          className="text-white px-4 py-2 outline-none rounded shadow-lg"
          style={{ backgroundColor: 'black' }}
          onClick={() => setColor('black')}
        >
          Black
        </button>
        <button
          className="text-white px-4 py-2 outline-none rounded shadow-lg"
          style={{ backgroundColor: 'gray' }}
          onClick={() => setColor('gray')}
        >
          Gray
        </button>
        <button
          className="text-white px-4 py-2 outline-none rounded shadow-lg"
          style={{ backgroundColor: 'orange' }}
          onClick={() => setColor('orange')}
        >
          Orange
        </button>
        <button
          className="text-white px-4 py-2 outline-none rounded shadow-lg"
          style={{ backgroundColor: 'brown' }}
          onClick={() => setColor('brown')}
        >
          Brown
        </button>
      </div>
    </div>
  );
};

export default ColorChanger;
