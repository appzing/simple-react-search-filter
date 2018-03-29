import React, { Component } from 'react';


class List extends Component {
	constructor(props) {
		super(props);
	}




	render() {
		const {items} = this.props;
		return (
			<div>
				<ul className="list-group">
					{
						items.map(item => <li className="list-group-item" key={item}>{item}</li>)
					}
				</ul>
			</div>
		)
	}
}

export default List;
