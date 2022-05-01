 
export const ProfileStats = (stats) => {
    return (
        <ul class="stats">
            <li>
                <span className="label">Followers</span>
                <span className="quantity">{stats}</span>
            </li>
            <li>
                <span className="label">Views</span>
                <span className="quantity">{stats}</span>
            </li>
            <li>
                <span className="label">Likes</span>
                <span className="quantity">{stats}</span>
            </li>
        </ul>
    )
}

