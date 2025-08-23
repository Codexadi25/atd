import React from 'react'
import ErrorComponent from '../components/ErrorComponent.js';

function Services() {
  return (
    <div>
      <ErrorComponent
        errorCode="502"
        errorMessage="Service Unavilable"
        errorDescription="The page you are looking for is facing service downtime failure. Please stay connected. We are consistently working towards enhancing our service portal."
      />
    </div>
  )
}

export default Services