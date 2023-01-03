import { useState } from "react";
import styles from "./pet.module.css";
import { Configuration, OpenAIApi } from "openai";

const Image = () => {
    const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [placeholder, setPlaceholder] = useState(
    "Paint Bears in a Starry Night using Vincent van Gogh style"
  );

  const generateImageRequest = async () => {
    const response = await fetch("/api/generateImage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
        n: 1,
        size: "1024x1024",
      }),
    });
    const data = await response.json();
    setResult(data.result);
  };
  return (
    <div className="app-main">
      {
        <>
          <h2>Generate an Image using Open AI API</h2>

          <textarea
            className="app-input"
            placeholder={placeholder}
            onChange={(e) => setPrompt(e.target.value)}
            rows="10"
            cols="40"
          />
          <button onClick={generateImageRequest}>Generate an Image</button>
          {result.length > 0 ? (
            <img className="result-image" src={result} alt="result" />
          ) : (
            <></>
          )}
        </>
      }
    </div>
  );

}

export default Image