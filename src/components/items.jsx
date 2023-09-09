import PropTypes from 'prop-types'
function Item({
	id,
	description,
	quantity,
	packed,
	onDeleteItem,
	onToggleItems,
}) {
	console.log(description);
	return (
		<li>
			<input
				type="checkbox"
				name="packed"
				value={packed}
				onChange={() => onToggleItems(id)}
			/>
			<span style={packed ? { textDecoration: "line-through" } : {}}>
				{quantity} {description}
			</span>
			<button onClick={() => onDeleteItem(id)}>❌</button>
		</li>
	);
}
Item.propTypes = {
	id: PropTypes.number.isRequired,
	description: PropTypes.string.isRequired,
	quantity: PropTypes.string.isRequired,
	packed: PropTypes.bool.isRequired,
	onDeleteItem: PropTypes.func.isRequired,
	onToggleItems: PropTypes.func.isRequired,
};
export default Item