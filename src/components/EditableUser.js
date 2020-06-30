import React, { Component } from 'react';
import User from './User';
import UserForm from './UserForm';

class EditableUser extends Component {
	render() {
		return (
			<>
				<User/>
				<UserForm/>
			</>
		)
	}
}

export default EditableUser;