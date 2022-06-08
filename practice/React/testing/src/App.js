import logo from './logo.svg';
import React, { useState, useContext } from 'react';
import './App.css';
import UserProfile from './UserProfile';
import NameContext from './NameContext';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nickname: '',
      user: {
        name: 'Jim',
        email: 'jim@galvanize.com'
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      nickname: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      user: {
        ...this.state.user,
        userNickname: this.state.nickname
      },
      nickname: ''
    })
  }

  render() {
    return (
      <div id='App'>
         <UserProfile user={this.state.user}/>
         <label htmlFor='nickname'>
           Nickname:
           <input type='text' id='nickname' value={this.state.nickname} onChange={this.handleChange} />
         </label>
         <button onClick={this.handleSubmit}>Submit</button>
       </div>
    )
  }
}







// const App = () => {

  // const {nickName, setNickName} = useContext(NameContext);

//   const [ nickName, setNickName ] = useState('');
//   const [ daValue, setDaValue ] = useState('');

//   const value = { nickName, setNickName, daValue, setDaValue };


//   return (
//     <NameContext.Provider value={value}>
//       <div id='App'>
//         <UserProfile user='Jim' email='jim@galvanize.com' nickName={nickName}/>
//         <label htmlFor='nickname'>
//           Nickname:
//           <input type='text' id='nickname'  onChange={(e) => {
//             // console.log(e.target.value);
//             setDaValue(e.target.value)
//             }}></input>
//           <button onClick={() => {setNickName(daValue)} }>Submit</button>
//         </label>
//       </div>
//     </NameContext.Provider>
//   );
// }

// export default App;
