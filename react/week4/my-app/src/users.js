import React from "react";
import  {UserContext} from "./user.context";

 const Users = () => {
  
    const {users, loading, error} = React.useContext(UserContext);
  
    if (error) {
      return <div>{`error fetching ${error}...`}</div>;
    }
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (!users || users.length === 0) {
      return <div>No result..</div>;
    }
  
    return <ul>
        {users.map(user => 
             <li key={user.id}>{user.login}</li>
        )}
    </ul>;
  };
  
  export default Users;

  
  


  