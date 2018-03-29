import React, { Component } from 'react';
import List from './List';

class Search extends Component {
	constructor(props) {
		super(props);


		this.handleChange = this.handleChange.bind(this);

		this.state = {
			initialItems:[
				'Apple',
				'Orange',
				'Banana',
				'Pear',
				'Grape',
				'Pomegranite',
				'Lemon'
			],
			items: []
		}
	}

	componentWillMount() {
		this.setState({items: this.state.initialItems});
	}

	handleChange(e) {
		let initialItems = this.state.initialItems;
    	initialItems = initialItems.filter(item => item.toLowerCase().search(
        			e.target.value.toLowerCase()) !== -1);
    	this.setState({items: initialItems});

	}

	render() {
		const {items} = this.state;
		return (
			<div>
				<input type="text" className="search-input" placeholder="Search" onChange={this.handleChange} />
				<List items={items} />
			</div>
		)
	}
}

export default Search;
