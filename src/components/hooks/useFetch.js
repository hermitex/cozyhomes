import { useEffect, useState } from "react";

function useFetch(url, options = {}) {
  const [listings, setListings] = useState(null);
  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((listings) => setListings(listings));
  }, [options, url]);

  function accessor(url, options = {}) {
    setListings(url, options);
    return listings;
  }
  return [listings, accessor];
}

export default useFetch;
