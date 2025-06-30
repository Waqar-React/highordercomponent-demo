import React from "react";

const Loading = (WrappedComponent) => {
  return function WithLoading({ isLoading, ...props }) {
    return isLoading ? (
      <div className="spinner">Loading...</div>
    ) : (
      <WrappedComponent {...props} />
    );
  };
};

export default Loading;
