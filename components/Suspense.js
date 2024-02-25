import React, { Suspense as ReactSuspense } from 'react';

const Suspense = ({ children }) => (
  <ReactSuspense fallback={<div>Loading...</div>}>
    {children}
  </ReactSuspense>
);

export default Suspense;