import { useState, useCallback, useRef, useEffect} from "react";

const PassWordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(20);
  const [hasNumbers, setHasNumbers] = useState(false);
  const [hasCharacters, setHasCharacters] = useState(false);

  const generatePassword = useCallback(() => {
    let password = "";
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "1234567890";
    let symbols = "!@#$%^&*()_+";
    if(numbers) chars += numbers;
    if(symbols) chars += symbols;
    for(let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(password);
    }, [length, hasNumbers, hasCharacters]);
    
  return (
    <div className="bg-gray-700 rounded px-5 py-4">
      <h1 className='text-2xl font-mono text-center text-white'>Password Generator 🧑‍💻</h1>
      <div className="flex flex-row justify-center items-center rounded mt-4">
        <input 
          type="text" 
          placeholder="Password" 
          readOnly 
          className="bg-amber-50 text-orange-500 py-2 rounded-l w-md outline-none" 
          value={password} 
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r">Copy</button>
      </div>
      <div className="flex flex-row justify-center items-center rounded mt-4 space-x-2">
        <input 
          type="range" 
          className="py-2 rounded-l outline-none text-orange-500" 
          min={8} 
          max={100} 
          value={length} 
          onChange={(e) => setLength(e.target.value)}
        /> 
        <span className="text-orange-500">Length: {length}</span>
        <input 
          type="checkbox" 
          className="py-2 rounded-r outline-none text-orange-500" 
          checked={hasNumbers} 
          onChange={(e) => setHasNumbers(e.target.checked)}
        />
        <label className="text-orange-500">Numbers</label>
        <input 
          type="checkbox" 
          className="py-2 rounded-r outline-none text-orange-500" 
          checked={hasCharacters} 
          onChange={(e) => setHasCharacters(e.target.checked)}
        />
        <label className="text-orange-500">Characters</label>
      </div>
    </div>
  );
}

export default PassWordGenerator;
