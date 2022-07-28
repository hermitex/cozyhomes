import { useEffect, useState } from "react";

function useFetch(url) {
  const [listings, setListings] = useState(null);
  useEffect(() => {
    fetch(url, {})
      .then((response) => response.json())
      .then((listings) => setListings(listings));
  }, [url]);

  return [listings];
}

export default useFetch;
