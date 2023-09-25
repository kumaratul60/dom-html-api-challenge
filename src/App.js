import { useEffect, useState } from "react";
import "./styles.css";

const challengeURL =
  "https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge";

export default function App() {
  const [textData, setTextData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchURL();
  }, [textData]);
  const fetchURL = async () => {
    setLoading(true);
    try {
      const getURLData = await fetch(challengeURL);
      if (getURLData.ok) {
        const htmlResponse = await getURLData.text();

        // Create a temporary DOM element to parse the HTML response
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = htmlResponse;

        // Extract the <h1> tag content
        const h1Element = tempDiv.querySelector("h1");
        const h1Content = h1Element ? h1Element.innerText : "No <h1> found";

        // Store the <h1> content for reference
        setTextData(h1Content);
        // console.log({ htmlResponse, h1Content });
      }
    } catch (err) {
      console.error("error", err);
    } finally {
      setLoading(false); // Set loading back to false regardless of success or error
    }
  };

  return (
    <div className="App">
      <h1>Ramp frontend challenge</h1>
      {loading ? <h2>Loading...</h2> : <h2>{textData}</h2>}
    </div>
  );
}
