import PropTypes from "prop-types";
  
export const Statistics = ({ title, data }) => {
    return (
        <section className="statistics">
            {title && <h2 className="title">Upload stats</h2>}
            <ul className="stat-list">
                {data.map(({ id, label, percentage }) => (
                    <li className="item" key={id}>
                        <span className="label">{label}</span>
                        <span className="percentage">{percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

Statistics.propType = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ),
};