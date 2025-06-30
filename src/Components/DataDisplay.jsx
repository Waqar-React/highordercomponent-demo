// DataDisplay.jsx
import React from "react";
import withLoading from "./Loading";

// Base component
const DataDisplay = ({ data }) => (
  <div>
    <h2>Data:</h2>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
);

// Enhanced component (exported by default)
const DataDisplayWithLoading = withLoading(DataDisplay);

export default DataDisplayWithLoading; // Main export
export { DataDisplay as BaseDataDisplay }; // Optional: Export base component if needed elsewhere
