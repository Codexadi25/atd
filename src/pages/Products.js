import React from 'react';
import "../styles/Products.css";
import ErrorComponent from "../component/ErrorComponent.js";

function Products() {
  return (
    <div>
      <ErrorComponent
         errorCode="503"
         errorMessage="Service Unavailable : Maintenance Downtime"
         errorDescription="You are seeing this because, an unknown error occured. Error has already been reported."
      />
    </div>
  )
}

export default Products