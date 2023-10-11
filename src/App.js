import './App.css';
import axios from 'axios'
import { useEffect , useState } from 'react' 

function UserCard({user}){
  return(
    <div className="single-card">
      <img src={user.picture.large} alt="" />
      <ul className="personal-info">
        <li> {user.name.title}. {user.name.first} {user.name.last} </li>
        <li> {user.cell} </li>
        <li> {user.email} </li>
        <li> {user.location.city} / {user.location.country} </li>
        <li> {user.gender} </li>
      </ul>
    </div>
  )
}

function UserList(){
  const [users, setUsers] = useState([])
  async function fetchUsers(){
    const response = await axios.get("https://randomuser.me/api?results=5")
    setUsers(response.data.results);
    console.log(users);
  }

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line
  }, [])

  return(
    <div className="users-list">
      <ul>
          {users.map((user, idx) => (
            <li> 
              <UserCard user={user} key={idx}/> 
            </li>
          ))}
      </ul>
    </div>
  )
}

export default function App() {
  return (
    <div className="App">
      <UserList />
    </div>
  );
}
