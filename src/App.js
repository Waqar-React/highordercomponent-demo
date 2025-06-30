import React from "react";
import { useEffect } from "react";
import DataDisplay from "./Components/DataDisplay";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState(null);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setData({ message: "Hello from Waqar" });
      setIsLoading(false);
    }, 2000);
  }, []);

  return <DataDisplay isLoading={isLoading} data={data} />;
}

export default App;
