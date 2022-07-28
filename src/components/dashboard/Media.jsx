import React from "react";
function Media({ listing }) {
  return (
    <>
      <div
        className="d-flex align-items-center bg-light mt-2"
        style={{ width: "100%" }}
      >
        <div className="flex-shrink-0">
          <img src="https://picsum.photos/150/150" alt="..." />
        </div>
        <div className="flex-grow-1 ms-3 p-3">
          <div className="mb-3">{listing.name}</div>
          <div className="mb-3">{listing.price}</div>
          <div>
            <ul
              className="list-unstyled d-flex justify-content-between"
              style={{
                width: "100%",
              }}
            >
              <li>
                <i class="fa-solid fa-house"></i>
                {listing.type}
              </li>
              <li>
                <i class="fa-solid fa-location-dot"></i>
                {listing.location}, {listing.county} county
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Media;
