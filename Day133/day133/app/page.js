"use client"

export default function Home() {
  
  console.log("Hello");

  return (
    <div>
      I am HOME_PAGE
    </div>
  );
}


// SSR - Server Side Rendering (By default in Next.js)
// CSR - Client Side Rendering (use client directive)
// SSG - Static Site Generation (at build time)
// ISR or ISG - Incremental Static Regeneration (rebuild static content on demand)