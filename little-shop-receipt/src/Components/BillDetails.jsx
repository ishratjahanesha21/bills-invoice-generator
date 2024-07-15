/* eslint-disable react/prop-types */
// components/BillDetails.js

import { useState } from "react";


// eslint-disable-next-line no-unused-vars
const BillDetails = ({ onAddItem, onDeleteItem }) => {
	const [item, setItem] = useState('');
	const [quantity, setQuantity] = useState(1);
	const [price, setPrice] = useState(0);
	const [errorMessage, setErrorMessage] = useState('');

	const handleAddItem = () => {
		if (!item.trim()) {
			setErrorMessage(`Please input data in the Item section.`);
			return;
		}

		// Check if the item contains only alphabetical characters
		if (!/^[a-zA-Z]+$/.test(item)) {
			setErrorMessage(`Item should only contain 
				alphabetical characters.`);
			return;
		}
		const newItem = { item, quantity, price };
		onAddItem(newItem);
		setItem('');
		setQuantity(1);
		setPrice();
		setErrorMessage('');
	};

	return (
		<div>
            
			<label>Item Name:</label>
			<input type="text"
				value={item}
				onChange={
					(e) =>
						setItem(e.target.value)} />
			<label>Unit:</label>
			<input type="number"
				value={quantity}
				onChange={
					(e) =>
						setQuantity(e.target.value)} />
			<label>Price:</label>
			<input type="number"
				value={price}
				onChange={
					(e) =>
						setPrice(e.target.value)} />
			<button
				onClick={handleAddItem}>
				Add Item
			</button>
			<p style={{ color: 'red' }}>{errorMessage}</p>

		</div>
	);
};

export default BillDetails;
