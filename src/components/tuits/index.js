import Tuit from "./tuit";
import * as likesService from "../../services/like-service";
const Tuits = ({ tuits = [], deleteTuit,
    refreshTuits }) => {

    const likeTuit = (tuit) =>
        likesService
            .userTogglesTuitLikes("me", tuit._id)
            .then(refreshTuits)
            .catch(e => alert(e))

    const dislikeTuit = (tuit) => 
        likesService
            .userTogglesTuitDislike("me", tuit._id)
            .then(refreshTuits)
            .catch(e => alert(e));

    return (
        <div>
            <ul>
                {
                    tuits.map(tuit =>
                        <Tuit key={tuit._id}
                            deleteTuit={deleteTuit}
                            likeTuit={likeTuit}
                            dislikeTuit={dislikeTuit}
                            tuit={tuit} />)
                }
            </ul>
        </div>
    );
}

export default Tuits;