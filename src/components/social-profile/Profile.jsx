
import PropTypes from "prop-types";
import s from "./Profile.module.css";

// username, tag, location, avatar, stats - ce propsy (wlastywosti) komponenta ProfileDescription,
// jaki je objectom i destrukturyzowani w pidpysi function

export const Profile = ({ username, tag, location, avatar, stats}) => {
    return (
        <div className={s.profile}>
            <div className={s.description}>
            <img className={s.avatar} width="250" height="250"
                src={avatar}
                alt={username}
            />
            <p className={s.name}>{username}</p>
            <p className={s.tag}>@{tag}</p>
            <p className={s.tag}>{location}</p>
        </div>
            
            <ul className={s.stats}>
            <li className={s.statsItem}>
                    <span className={s.label}>Followers</span>
                    <span className={s.quantity}>{stats.followers}</span>
            </li>
            <li className={s.statsItem}>
                <span className={s.label}>Views</span>
                <span className={s.quantity}>{stats.views}</span>
            </li>
            <li className={s.statsItem}>
                <span className={s.label}>Likes</span>
                <span className={s.quantity}>{stats.likes}</span>
            </li>
        </ul>
            
        </div>
    )
}
    
Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    }),
};

