import React from 'react'
import Script from 'next/script'

const contact = () => {
  return (
    <div>
      <Script>
        {`alert("Welcome to Contact Page")`}
      </Script>
      I am Contact
    </div>
  )
}

export default contact

export const metadata = {
  title: "Contact Facebook - Connect with the world",
  description: "This is facebook and it connects you with the online world.",
};