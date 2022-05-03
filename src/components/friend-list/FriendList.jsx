import s from "./FriendList.module.css";
import PropTypes from "prop-types";


export const FriendList = ({ friends }) => {
    return (
    <div className={s.container}> 
            <ul className={s.friendList}>
                {friends.map(({ avatar, name, isOnline, id }) => (
                    
                <li className={s.item} key={id}>
                    <span className={isOnline ? s.online : s.offline}></span>
                    <img className={s.avatar} src={avatar} alt={name} width="48" />
                    <p className={s.name}>{ name }</p>
              </li>
            ))}
            </ul>
        </div>
    ) 
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
         avatar: PropTypes.string.isRequired,
         name: PropTypes.string.isRequired,
         isOnline: PropTypes.bool.isRequired,
         id: PropTypes.number.isRequired,
    }))  
}