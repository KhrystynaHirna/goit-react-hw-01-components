import PropTypes from "prop-types";
import s from "./TransactionHistory.module.css";

export const TransactionHistory = ({items}) => {
    return (
    <div className={s.container}> 
        <table className={s.transactionHistory}>
        <thead className={s.thead}>
            <tr className={s.tr}>
            <th className={s.th}>Type</th>
            <th className={s.th}>Amount</th>
            <th className={s.th}>Currency</th>
            </tr>
        </thead>
            
        {items.map(({ id, type, amount, currency }) => (              
        <tbody className={s.tbody} key={id}>
            <tr className={s.tr}>
            <td className={s.td}>{type}</td>
            <td className={s.td}>{amount}</td>
            <td className={s.td}>{currency}</td>
            </tr>
        </tbody> ))}
        </table>
    </div>        
    )
}
    
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}
        


 