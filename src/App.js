import React from 'react';
import UsersList from './components/UsersList';
const URL = "https://api.github.com/users";
const usersData = [
  {
    id: 1,
    login: 'lalalllal',
    avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4'
  },
  {
    id: 2,
    login: 'kakakakk',
    avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4'
  },
  {
    id: 3,
    login: 'jajajjajaj',
    avatar_url: 'https://avatars0.githubusercontent.com/u/3?v=4'
  },
]
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }
    componentDidMount() {
      this.fetchUsers()
    }

    fetchUsers = () => {
      fetch(URL)
        .then(res => res.json())
        .then(res => this.setState({
            users: res
        }))
    }


    deleteCurrentUser = (userId) => {
        const updatedUsers = this.state.users.filter(user => user.id != userId);
        this.setState({
          users: updatedUsers
        })
    }

    editCurrentUser = (currentUser) => {
      console.log('currentUser', currentUser)
      const updatedUsers = this.state.users.map(user => 
        user.id === currentUser.id ? {...user,...currentUser} : user
      );
      this.setState({
        users: updatedUsers
      })
  }
  render() {
    return (
      <UsersList 
        users={this.state.users}
        deleteCurrentUser={this.deleteCurrentUser}
        editCurrentUser={this.editCurrentUser}
      />
    )
  }
}

export default App;
