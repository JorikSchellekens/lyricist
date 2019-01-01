let lastEvent = {
  title: null,
  timeStamp: null,
};

const MUTATION_STABILITY_TIMEOUT = 10; // milliseconds

const isNotCached = (timeStamp, title) => {
  if (title !== lastEvent.title ||
     timeStamp - lastEvent.timeStamp < MUTATION_STABILITY_TIMEOUT) {
    lastEvent = {
      title,
      timeStamp,
    };
    return true;
  }
  return false;
};

/**
 * Calls the callback if an event in the mutation list has a different to title
 * to or it occurs 10ms after it's precursor.
 */
export const handler = callback => mutationList =>
  mutationList.some(x => isNotCached(Date.now(), x.target.innerHTML)) ? callback() : undefined;
