import React from 'react';
import EditableUser from './EditableUser';
import Loader from './Loader';
import styled from 'styled-components';


const UsersContainer = styled.div`
	width: 80%;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr;
	@media (min-width: 600px) {
    	grid-template-columns: 1fr 1fr ;
  	}
  	@media (min-width: 1020px) {
    	grid-template-columns: 1fr 1fr 1fr;
  	}
`;

class UsersList extends React.Component {
	state = {
		formUserId: null
	}

	handleFormUserIdChange = (id) => {
		this.setState({
			formUserId: id
		})
	}

	render() {
		const { users, deleteCurrentUser, editCurrentUser } = this.props;
		return(
			users.length > 1 ? 
			<UsersContainer>
				{
					 users.map(({id, login, avatar_url}) => 
						<EditableUser 
							key={id}
							login={login}
							avatar_url={avatar_url}
							id={id}
							deleteCurrentUser={deleteCurrentUser}
							editCurrentUser={editCurrentUser}
							onFormUserIdChange={this.handleFormUserIdChange}
							isUserFormOpen={this.state.formUserId === id}
						/>
					)
				}
			</UsersContainer> : <Loader/>
		)
	}
} 

export default UsersList;