import PropTypes from 'prop-types'
function Stats({itemnum, itemsPacked, packedPercentage}) {
	return (
		<footer className="stats">
			👜You have {itemnum} items on your list, and your already packed {itemsPacked} ({packedPercentage}%)
		</footer>
	);
}
Stats.propTypes = {
	itemnum: PropTypes.number.isRequired,
	itemsPacked: PropTypes.number.isRequired,
	packedPercentage: PropTypes.number.isRequired,
}

export default Stats;