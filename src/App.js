import { useEffect, useRef, useState } from "react";
import ComboBox from "react-responsive-combo-box";
import "react-responsive-combo-box/dist/index.css"; // optional for styling
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css"; // optional for styling
import "./App.css";
import DarkMode from "./components/DarkMode";

function App() {
  const SELECT_OPTIONS = [
    "50 x 50",
    "100 x 100",
    "150 x 150",
    "200 x 200",
    "250 x 250",
    "300 x 300",
  ];

  const DEFAULT_BUTTON_TEXT = "🅶🅴🅽🅴🆁🅰🆃🅴";

  const [selectedOption, setSelectedOption] = useState("150 x 150");
  const [highlightedOption, setHighlightedOption] = useState("150 x 150");
  const [buttonText, setButtonText] = useState(DEFAULT_BUTTON_TEXT);
  const [message, setMessage] = useState("");
  const [showQRCode, setShowQRCode] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("");
  const inputRef = useRef(null);
  const imgRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const comboBox = document.getElementsByClassName("_3LDgJ");
    comboBox.alt = "Select QR Code size";
    comboBox[0].id = "comboBoxButton";
    comboBox[0].style = "cursor: pointer;";

    // set up tooltips
    tippy("#comboBoxButton", {
      content: "Select QR Code size",
      theme: "light",
      placement: "top",
    });
    tippy("#generateButton", {
      content: "Click to generate QR code",
      theme: "light",
      placement: "top",
    });
    tippy("#darkMode", {
      content: "Switch dark/light mode",
      theme: "light",
      placement: "top",
    });
  }, []);

  useEffect(() => {
    inputRef.current.focus();
  }, [selectedTheme]);

  const generateQRCode = () => {
    if (inputRef.current.value.length > 0) {
      setShowQRCode(true);
      // use QR Code API from https://goqr.me/api/
      imgRef.current.src =
        " https://api.qrserver.com/v1/create-qr-code/?size=" +
        selectedOption.replace(/\s/g, "") +
        "&data=" +
        inputRef.current.value;
    } else {
      setShowQRCode(false);
      inputRef.current.focus();
      setMessage("⚠ 𝚄𝚁𝙻 𝚘𝚛 𝚝𝚎𝚡𝚝 𝚜𝚑𝚘𝚞𝚕𝚍 𝚗𝚘𝚝 𝚋𝚎 𝚎𝚖𝚙𝚝𝚢");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="header-title">
          <h1>Q͡R͡ C͡O͡D͡E͡ g͡e͡n͡e͡r͡a͡t͡o͡r͡</h1>
          <p>
            🇹‌🇾‌🇵‌🇪‌ 🇦‌ 🇺‌🇷‌🇱‌ 🇴‌🇷‌ 🇹‌🇪‌🇽‌🇹‌ 🇹‌🇴‌
            🇬‌🇪‌🇳‌🇪‌🇷‌🇦‌🇹‌🇪‌ 🇶‌🇷‌ 🇨‌🇴‌🇩‌🇪‌
          </p>
        </div>
        <div className="dark-mode">
          <DarkMode setSelectedTheme={setSelectedTheme} />
        </div>
      </div>

      <div className="input-form">
        <input
          ref={inputRef}
          type="text"
          className="qr-input"
          placeholder="Enter URL or text"
        ></input>
        <div className="container-cb">
          <ComboBox
            className="combo-box"
            placeholder="150 x 150"
            defaultValue="150 x 150"
            options={SELECT_OPTIONS}
            enableAutocomplete
            selectedOptionColor="var(--combo-opt-sel-color)"
            highlightColor="var(--combo-opt-hlt-color)"
            renderOptions={(option) => (
              <div className="combo-box-option">{option}</div>
            )}
            onSelect={(option) => {
              setSelectedOption(option);
            }}
            onChange={(event) => console.log(event.target.value)}
            onOptionsChange={(option) => {
              setHighlightedOption(option);
            }}
          />
          <button
            id="generateButton"
            className="generate-btn"
            ref={buttonRef}
            onClick={() => {
              //setButtonText("Generating ...");
              generateQRCode();
              //setButtonText(DEFAULT_BUTTON_TEXT);
            }}
          >
            {buttonText}
          </button>
        </div>
      </div>
      <div className={showQRCode ? "qr-code" : "qr-code-hidden"}>
        <img ref={imgRef} alt="Generated QR Code" className="qr-image" />
      </div>
      {!showQRCode && (
        <div className="message">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default App;
