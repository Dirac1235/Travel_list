import PropTypes from 'prop-types'
import { useState } from 'react';
import Item from './items';
function PackingList({ items, onDeleteItem, onToggleItems, onClearList }) {
	const [sortBy, setSortBy] = useState("input")

	let sortedItems;

	if(sortBy === 'input') sortedItems = items;
	if (sortBy === 'description') sortedItems = items.slice().sort((a,b) => a.description.localeCompare(b.description))

	if(sortBy === 'packed') sortedItems = items.slice().sort((a,b) => Number(a.packed) - Number(b.packed)) 

	return (
		<div className="list">
			<ul>
				{sortedItems.map((item) => (
					<Item
						key={item.id}
						id={item.id}
						quantity={item.quantity}
						description={item.description}
						packed={item.packed}
						onDeleteItem={onDeleteItem}
						onToggleItems={onToggleItems}
					/>
				))}
			</ul>
			<div className="actions">
				<select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
					<option value="input">Sort by input order</option>
					<option value="description">Sort by description</option>
					<option value="packed">Sort by packed status</option>
				</select>
				<button className="actions" onClick={onClearList}>Clear List</button>
			</div>
		</div>
	);
}
PackingList.propTypes = {
	items: PropTypes.array.isRequired,
	onDeleteItem: PropTypes.func.isRequired,
	onToggleItems: PropTypes.func.isRequired,
	onClearList: PropTypes.func.isRequired,
};
export default PackingList;