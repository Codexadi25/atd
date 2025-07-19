import React from 'react';
import "../styles/Products.css";
import ErrorComponent from "../component/ErrorComponent.js";

function Products() {
  return (
    <div>
      <ErrorComponent
         errorCode="503"
         errorMessage="Service Unavailable"
         errorDescription="You are seeing this because, an unknown error occured."
      />
    </div>
  )
}

export default Products