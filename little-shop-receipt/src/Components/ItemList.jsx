/* eslint-disable react/prop-types */
// components/ItemList.js


const ItemList = ({ items, onDeleteItem }) => {
	return (
		<div className="item-list">
			<h2>Item List</h2>
			
             <table>
        <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
        </tr>
        {items.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.item}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                            <td><button onClick={
						() =>
							onDeleteItem(index)}>
						Delete
					</button></td>
                    <td><button onClick={
						() =>
							alert("sure")}>
						Update
					</button></td>
                        </tr>
                    )
                })}
    </table>
		</div>
	);
};

export default ItemList;
