import PropTypes from "prop-types";
import user from '../social-profile/user.json'

export const ProfileStats = () => {
    return (
        <ul className="stats">
            <li>
                <span className="label">{user.stats.label}</span>
                <span className="quantity">{user.stats.quantity}</span>
            </li>
            <li>
                <span className="label">{user.stats.label}</span>
                <span className="quantity">{user.stats.quantity}</span>
            </li>
            <li>
                <span className="label">{user.stats.label}</span>
                <span className="quantity">{user.stats.quantity}</span>
            </li>
  </ul>
    )
};

ProfileStats.propTypes = {
    label: PropTypes.string,
    quantity: PropTypes.number,
};

