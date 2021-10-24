import React, {Component} from 'react';
import NavBar from '../App/Components/NavBar';
import './style.css'

export default class NotFound extends Component {
	render() {
		return (
			<div>
				<NavBar></NavBar>
				<h1>Make an Aid Request to a Fund</h1>
				<div className = "requestForm">
					<form>
						<div class="form-group">
							<label for="dollarsRequested">Aid Requested</label>
							<input type="number" min="0.01" step="0.01" max="500000" class="form-control" id="dollarsRequested" placeholder="USD"></input>
						</div>
						<div class="form-group">
							<label for="requestDescription">Description</label>
							<textarea class="form-control" id="requestDescription" rows="3"></textarea>
						</div>
					</form>
				</div>
			</div>
		);
	}
}