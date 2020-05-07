import React from "react";
import ReactDOM from "react-dom";
import UserProvider, { UserContext } from "./user.context";
import Users from "./users";
import "./index.css";



const SearchInput = () => {
  const {updateUserContext} = React.useContext(UserContext)
  const changeHandel = async (event) => {
    try {
     updateUserContext({ loading: true })
     const req = await fetch(`https://api.github.com/search/users?q=${event.target.value}`)
     const res = await req.json()
     updateUserContext({users: res.items})
    } catch (err) {
      updateUserContext({error: err.message})
    } finally {
      updateUserContext({ loading: false })
    }
  }

    return (
        <input
          type="text" onChange={changeHandel}
        />
    );
  }


class App extends React.Component {
  render() {
    return (
      <UserProvider>
        <div>
          Git users
          <div> <SearchInput /> </div>
          <Users />
        </div>
      </UserProvider>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
