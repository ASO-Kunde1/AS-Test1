import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState<number | string>("");
  const [iframeUrl, setIframeUrl] = useState<string>(
    "https://dailybuild.aso.aixpertsoft.de/verios"
  );

  return (
    <div>
      <div>
        This input uses eval to calculate the result of the expression
        <input
          type="text"
          onChange={(e) => {
            setResult(eval(e.target.value));
          }}
        />
        <div>Result: {result}</div>
      </div>
      <div>
        This input allows to set an url for the iframe below
        <input type="text" onChange={(e) => setIframeUrl(e.target.value)} />
      </div>
      <div>
        <iframe src={iframeUrl} title="iframe" width={768} height={768} />
      </div>
    </div>
  );
}

export default App;
