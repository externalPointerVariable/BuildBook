import React from "react";

const CustomCounter = () => {
    return(
        <>
           <div className="text-center p-6 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-orange-500 mb-4">Custom Counter 🔄️</h1>
                <h2 className="font-mono text-xl text-gray-800 mb-4">Counter value: 5</h2>
                <div className="flex justify-center space-x-4">
                    <button className="bg-green-500 text-white rounded-lg px-4 py-2 shadow hover:bg-green-600 transition">Add Value</button>
                    <button className="bg-red-500 text-white rounded-lg px-4 py-2 shadow hover:bg-red-600 transition">Remove Value</button>
                </div>
            </div>
        </>
    );
}
export default CustomCounter;