import React from "react";
import { useState } from "react";

const CustomCounter = () => {
    let [counter, setCounter] = useState(0);
    const addValue = () => {
        if(counter<20){
            setCounter(counter+1);
        }
    }
    const removeValue = () => {
        if(counter>0){
            setCounter(counter-1);
        }
    }
    return(
        <>
            <div className="text-center p-6 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-orange-500 mb-4">Custom Counter 🔄️</h1>
                <h2 className="font-mono text-xl text-gray-800 mb-4 bg-gray-100 p-2 rounded-lg">Counter value: {counter}</h2>
                <div className="flex justify-center space-x-4">
                    <button className="bg-green-500 text-white rounded-lg px-4 py-2 shadow hover:bg-green-600 transition" onClick={addValue}>Add Value</button>
                    <button className="bg-red-500 text-white rounded-lg px-4 py-2 shadow hover:bg-red-600 transition" onClick={removeValue}>Remove Value</button>
                </div>
            </div>
        </>
    );
}
export default CustomCounter;