const awaitElement = (selector, timeout = 30000) => {
  return new Promise((resolve, reject) => {
    const limit = Date.now() + timeout;
    const intervalId = setInterval(() => {
      /**
       * @type {HTMLElement} el
       */
      const el = document.querySelector(selector);
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