var React = require('react');
var TableHeading = require('./TableHeading.jsx');
var TableItem = require('./TableItem.jsx');

var ProductTable = React.createClass({
	render: function() {
		var rows = [];
		var lastCategory = null;
		this.props.products.forEach(function(product) {
			if (product.name.indexOf(this.props.filterText) === -1 || 
				(!product.stocked && this.props.inStockOnly)) {
				
        		return;
      		}
			if(product.category !== lastCategory) {
				rows.push(<TableHeading category={product.category} 
					key={product.category} />)
			}
			rows.push(<TableItem product={product} key={product.name} />);
			lastCategory = product.category;
		}.bind(this));
		return (
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		);
	}
});

module.exports = ProductTable;