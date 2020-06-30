import React, { Component } from 'react';
import User from './User';
import UserForm from './UserForm';
import styled from 'styled-components';

const Wrapper = styled.div`
	position: relative;
	margin: 1rem;
`;


class EditableUser extends Component {

	handleDeleteCurrentUser = () => {
		this.props.deleteCurrentUser(this.props.id)
	}

	handleUserFormOpen = () => {
		console.log('jdfhdjhj')
		this.props.onFormUserIdChange(this.props.id)
	}
	handleUserFormClose = () => {
		this.props.onFormUserIdChange(null)
	}

	render() {
		return  this.props.isUserFormOpen ? 
			<UserForm
				onClose={this.handleUserFormClose}
				onEditForm={this.props.editCurrentUser}
				{...this.props}
			/> : 
			<User 
				onDelete={this.handleDeleteCurrentUser}
				onFormOpen={this.handleUserFormOpen}
				{...this.props}
			/>
	}
}

export default EditableUser;