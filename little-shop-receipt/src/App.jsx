
import { useState } from 'react';
import './App.css'

// App.js

import './App.css';
import BillDetails from './Components/BillDetails';
import ItemList from './Components/ItemList';
import TotalAmount from './Components/TotalAmount';
import { jsPDF } from 'jspdf';
function App() {
	const [items, setItems] = useState([]);

	const handleAddItem = (item) => {
		setItems([...items, item]);
	};

	const handleDeleteItem = (index) => {
		const updatedItems = [...items];
		updatedItems.splice(index, 1);
		setItems(updatedItems);
	};

	const calculateTotalAmount = () => {
		return items.reduce(
			(total, item) =>
				total +
				item.quantity *
				item.price, 0);
	};

	const handleDownloadPDF = () => {
   
		const pdf = new jsPDF();
		pdf.text('Invoice', 20, 20);

		// Add items to PDF
		items.forEach((item, index) => {
			const yPos = 30 + index * 10;
			pdf.text(
				`Item: ${item.item}, 
					Quantity: ${item.quantity}, 
					Price: ${item.price}`, 20, yPos);
		});

		// Add total amount to PDF
		const totalAmount =
			calculateTotalAmount();
		pdf.text(
			`Total Amount: 
					$${totalAmount.toFixed(2)}`, 20, 180);

		// Save the PDF
		pdf.save('invoice.pdf');
	};

	return (
		<div className="App">
      <h1>Little Shop</h1>
			<h5>Bill/Invoice </h5>
			<BillDetails onAddItem={handleAddItem} />
			<ItemList items={items}
				onDeleteItem={handleDeleteItem} />
			<TotalAmount
				total={calculateTotalAmount()} />
			<button
				onClick={handleDownloadPDF}>Download PDF</button>
		</div>
	);
}

export default App;
