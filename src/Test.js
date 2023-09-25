import { useEffect, useState } from "react";
import "./styles.css";

const challengeURL =
  "https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge";

export default function TestApp() {
  const [textData, setTextData] = useState("");
  const [loading, setLoading] = useState(true);
  const [typewriterText, setTypewriterText] = useState("");
  const [displayInput, setDisplayInput] = useState("");

  useEffect(() => {
    fetchURL();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (textData.length === displayInput.length) {
        clearInterval(interval);
        return;
      }
      setDisplayInput(textData.slice(0, displayInput.length + 1));
    }, 500);
    return () => clearInterval(interval);
  }, [textData, displayInput]);

  const fetchURL = async () => {
    try {
      const getURLData = await fetch(challengeURL);
      if (getURLData.ok) {
        const htmlResponse = await getURLData.text();
        const h1Element = new DOMParser()
          .parseFromString(htmlResponse, "text/html")
          .querySelector("h1");
        const h1Content = h1Element ? h1Element.innerText : "No <h1> found";
        setTextData(h1Content);
      }
    } catch (err) {
      console.error("error", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (textData) {
      // Simulate typewriter effect
      let index = 0;
      const intervalId = setInterval(() => {
        setTypewriterText((prev) => prev + textData[index]);
        index++;
        if (index === textData.length) {
          clearInterval(intervalId);
          setTypewriterText(textData);
        }
      }, 500);
    }
  }, [textData]);

  return (
    <div className="App">
      <h1>Ramp frontend challenge</h1>

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <em>{displayInput}</em>
          {/* <em>{typewriterText}</em> */}

          <ul>
            {typewriterText.split("").map((char, index) => (
              <li key={index}>{char}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
