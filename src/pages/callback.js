import React, {useEffect }from 'react';

export default () => {
    useEffect(() => {
      if (window.opener) {
        window.opener.postMessage('close');
        // close the popup
        window.close();
      }
    });
    // some text to show the user
    return <p>Please wait...</p>;
   };