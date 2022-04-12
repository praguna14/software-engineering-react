import React from "react";

const TuitStats = ({ tuit, likeTuit, dislikeTuit }) => {
  return (
    <div className="row">
      ...
      <div className="col">
        <span onClick={() => likeTuit(tuit)}>
          {
            tuit.stats.likes > 0 &&
            <i class="fa-solid fa-thumbs-up"></i>
          }
          {
            tuit.stats.likes <= 0 &&
            <i class="fa-regular fa-thumbs-up"></i>
          }
          {tuit.stats && tuit.stats.likes}
        </span>

        <span data-testid="dislikeButton" onClick={() => dislikeTuit(tuit)}>
          <i class="fa-regular fa-thumbs-down"></i>
        </span>
      </div>
      ...
    </div>
  );
}
export default TuitStats

