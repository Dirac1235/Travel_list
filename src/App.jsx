import { useState } from "react";
import "./index.css";
import Form from "./components/form";
import Stats from "./components/stats";
import PackingList from "./components/packinglist";
import Logo from "./components/logo";
export default function App() {
	const [items, setItems] = useState([]);
	const itemnum = items.length;
	const itemsPacked = items.filter(item => item.packed).length;
	const packedPercentage = Math.round((itemsPacked / itemnum) * 100);
	function handleAddItems(item) {
		setItems((items) => [...items, item]);
	}
	function handleDeleteItem(id) {
		setItems((items) => items.filter((item) => item.id != id));
	}
	function handleToggleItem(id) {
		setItems((items) =>
			items.map((item) =>
				item.id === id
					? {
							...item,
							packed: !item.packed,
					}
					: item
			)
		);
	}
	function handleClearList(){
		const confirmed = window.confirm("Are you sure you want to delete all items");
		if (confirmed) setItems([])
	}
	return (
		<div className="app">
			<Logo />
			<Form onAddItems={handleAddItems} />

			<PackingList
				items={items}
				onDeleteItem={handleDeleteItem}
				onToggleItems={handleToggleItem}
				onClearList={handleClearList}
			/>
			<Stats itemnum={itemnum} itemsPacked={itemsPacked} packedPercentage={packedPercentage}/>
		</div>
	);
}






