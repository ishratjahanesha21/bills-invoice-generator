/* eslint-disable react/prop-types */


// eslint-disable-next-line react/prop-types
const TotalAmount = ({ total }) => {
	return (
		<div className="total">
			<h3>
				Total Amount:
				${total.toFixed(2)}
			</h3>
		</div>
	);
};

export default TotalAmount;
