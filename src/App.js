import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const initialuserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {searchInput: '', userDetailsList: initialuserDetailsList}

  onchangeSearchinput = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleleteFunction = argument => {
    const {userDetailsList} = this.state
    const filteredUserData = userDetailsList.filter(
      user => user.uniqueNo !== argument,
    )
    this.setState({userDetailsList: filteredUserData})
  }

  render() {
    const {searchInput, userDetailsList} = this.state
    const searcResults = userDetailsList.filter(objectName =>
      objectName.name.includes(searchInput),
    )
    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input
          type="search"
          onChange={this.onchangeSearchinput}
          value={searchInput}
        />
        <ul className="list-container">
          {searcResults.map(eachUser => (
            <UserProfile
              userDetails={eachUser}
              onDeleleteFunction={this.onDeleleteFunction}
              key={eachUser.uniqueNo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
