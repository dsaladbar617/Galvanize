import React, { useState, useEffect, useContext } from 'react';
import { Route, Routes, Link, useNavigate } from  'react-router-dom';
import './App.css';

const UserContext = React.createContext({user: {}, setUser: () => {}})

const User = ({user}) => {
  const {setUser} = useContext(UserContext);
  return (
    <Link to={`/${user.login.username}`}>
      <li  onClick={() => {setUser(user)}}>
        {user.name.first} {user.name.last}
      </li>
    </Link>
  )

}

const List = ({ list }) => (
  <ul>
    {list.map(user => (
      <User key={user.login.uuid} user={user} />
    ))}
  </ul>
)


const App = () => {
  let [data, setData] = useState([]);
  let [user, setUser] = useState({
    gender: '',
    name: {title: '', first: '', last: ''},
    location: {street: {number: 0, name: ''}, city: '', state: '', country: '', postcode: ''},
    email: '',
    login: {},
    dob: {},
    registered: {},
    phone: 0,
    cell: 0,
    id: {},
    picture: {},
    nat: ''
  })
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
  .then(res => res.json())
  .then(data => setData(data.results))
  }, [])

  const value = { user, setUser };

  return (
    <>
      <UserContext.Provider value={value}>
        <Routes>
          <Route path='/' element={<List list={data} />}></Route>
          <Route path='/:username' element={<Details/>}></Route>
        </Routes>
      </UserContext.Provider>
    </>
  )
}

const Details = () => {
  const { user } = useContext(UserContext);
  return (
      <div>
        <div className='username'>
          Name: {user.name.title} {user.name.first} {user.name.last}
        </div>
        <div className='addy'>
          Address: {user.location.street.number} {user.location.street.name} {user.location.city} {user.location.state} {user.location.country} {user.location.postcode}
        </div>
      </div>
  )
}

export default App;


//<p>{`${loc.street.number} ${loc.street.name} ${loc.city} ${loc.state} ${loc.country} ${loc.postcode} `}</p>