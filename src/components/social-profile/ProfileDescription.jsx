import PropTypes from "prop-types";
import user from "../social-profile/user.json"

// username, tag, location, avatar - ce propsy (wlastywosti) komponenta ProfileDescription,
// jaki je objectom i destrukturyzowani w pidpysi function

export const ProfileDescription = ({ username, tag, location, avatar }) => {
    return (
        <div className="description">
            <img
                src={user.avatar}
                alt="User avatar"
                className="avatar"
            />
            <p className="name">{user.username}</p>
            <p className="tag">{user.tag}</p>
            <p className="location">{user.location}</p>
        </div>
    )
}

ProfileDescription.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
};


