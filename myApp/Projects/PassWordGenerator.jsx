import { useState, useCallback, useEffect, useRef } from "react";

const PassWordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(20);
  const [hasNumbers, setHasNumbers] = useState(false);
  const [hasCharacters, setHasCharacters] = useState(false);
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (hasNumbers) chars += "1234567890";
    if (hasCharacters) chars += "!@#$%^&*()_+";
    for (let i = 0; i < length; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(pass);
  }, [length, hasNumbers, hasCharacters]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length, hasNumbers, hasCharacters, generatePassword]);

  return (
    <div className="shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3 text-2xl font-mono mb-4">Password Generator 🧑‍💻</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 justify-center align-middle">
        <input
          type="text"
          value={password}
          className="outline-none w-md py-1 px-3 bg-white"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-500 hover:bg-blue-800 text-white px-3 py-0.5 shrink-0 rounded-r"
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2 align-middle justify-center">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={hasNumbers}
            id="numberInput"
            onChange={() => setHasNumbers((prev) => !prev)}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={hasCharacters}
            id="characterInput"
            onChange={() => setHasCharacters((prev) => !prev)}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
};

export default PassWordGenerator;
