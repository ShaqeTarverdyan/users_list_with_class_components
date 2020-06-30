import React, { Component } from 'react';
import styled from 'styled-components';

const FormContent = styled.form`
	margin: 1rem;
	border: 1px solid lightgrey;
	text-align: center;
	border-radius: 10px;
	box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.69);
	cursor: pointer;
	position: relative;
	display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const Actions = styled.div`
	display: flex;
	justify-content: space-between;
	border-top: 1px solid lightgrey;
	width: 100%
`;

const Button = styled.button`
	border: none;
    width: 100%;
    text-align: center;
    font-size: x-large;
    color: white;
    padding: 1rem;
    cursor: pointer
`;

const Input = styled.input`
	outline: none;
    border: 1px solid lightgray;
    margin: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    width: -webkit-fill-available;
`;

class UserForm extends Component {
	state = {
		currentUser: {
			id: this.props.id,
			login: '' || this.props.login,
			avatar_url:'' || this.props.avatar_url
		}
	}
	handleChangeForm = (e) => {
		this.setState({
			currentUser: {...this.state.currentUser, [e.target.name]: e.target.value}
		})
		console.log(this.state)
	}

	handleSubmitChange = (e) => {
		e.preventDefault();
		console.log('yes')
		this.props.onEditForm({...this.state.currentUser})
		this.props.onClose()
	}
	render() {
		const {onClose, onEditForm, login, avatar_url, id} = this.props;
		return(
			<FormContent onSubmit={this.handleSubmitChange}>
				<div>
					<Input 
						type="text" 
						name="avatar_url"
						defaultValue={avatar_url}
						onChange={this.handleChangeForm}
					/>
					<Input 
						type="text"
						name="login"
						defaultValue={login}
						onChange={this.handleChangeForm}
					/>
				</div>
				<Actions>
					<Button 
						onClick={onClose}
						style={{ borderRadius: '0 0 0 10px', background: '#ed7051'}}
					>Cancel</Button>
					<Button 
						type="submit"
						style={{ borderRadius: '0 0 10px 0', background: '#13bd5f'}}
					>Save</Button>
				</Actions>
			</FormContent>
		)
	}
}

export default UserForm;