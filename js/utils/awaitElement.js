const awaitElement = (selector, timeout = 30000) => {
  return new Promise((resolve, reject) => {
    console.log("Awaiting eleent");
    const limit = Date.now() + timeout;
    const intervalId = setInterval(() => {
      /**
       * @type {HTMLElement} el
       */
      const el = document.querySelector(selector);
      console.log(el);
       if (el) {
         clearInterval(intervalId);
         resolve(el);
       } else if (Date.now() >= limit) {
         reject(new Error(`Timeout: ${selector} not found`));
       }

      }, 500);

  });
}

export default awaitElement;