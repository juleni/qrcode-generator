import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [showQRCode, setShowQRCode] = useState(false);
  const inputRef = useRef(null);
  const imgRef = useRef(null);

  const displayQRCode = () => {
    console.log(imgRef.current.src);

    if (inputRef.current.value.length > 0) {
      setShowQRCode(true);
      // use QR Code API from https://goqr.me/api/
      imgRef.current.src =
        " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
        inputRef.current.value;
    } else {
      setShowQRCode(false);
    }
  };
  return (
    <div className="container">
      <div className="header">
        <h1>QR Code Generator</h1>
        <p>Type a URL or text to generate QR Code</p>
      </div>
      <div className="input-form">
        <input
          ref={inputRef}
          type="text"
          className="qr-input"
          placeholder="Enter URL or text"
        ></input>
        <button className="generate-btn" onClick={() => displayQRCode()}>
          Generate QR Code
        </button>
      </div>
      <div className={showQRCode ? "qr-code" : "qr-code-hidden"}>
        <img
          ref={imgRef}
          src="images/qrcode.png"
          alt="Generated QR Code"
          className="qr-image"
        />
      </div>
    </div>
  );
}

export default App;
