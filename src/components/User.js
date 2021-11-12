import React from 'react'

function User(props) {
    console.log(props)

  const{login,avatar_url,type} = props.data;
    return (
        <div>
            <h1>{login}</h1>
                      <img src={avatar_url} alt={login}/>
                      <h1>{type || 'hello'}</h1>
            
        </div>
    )
}

export default User
