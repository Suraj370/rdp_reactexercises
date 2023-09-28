import React, {useMemo} from 'react'
import User from './User';
const UserList = ({ users }) => {
    // Use useMemo to memoize the rendered User components
    const renderedUsers = useMemo(() => {
      return users.map(user => (
        <User key={user.id} user={user} />
      ));
    }, [users]);
  
    return <div>{renderedUsers}</div>;
  };
  
  export default UserList;