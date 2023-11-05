import * as React from 'react';


function Test() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  // const [users, setUsers] = React.useState([]);
  const handleLogin = async () => {
    try {
      const response = await fetch('https://1curd3ms.trials.alfresco.com/alfresco/api/-default-/public/authentication/versions/1/tickets', {
        method: 'POST',
        mode:  'cors', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
      console.log(response, username, password);
      
      } else {
        // Handle login failure (e.g., show an error message)
        console.log("else error", response, username, password);
      }
    } catch (error) {
      // Handle network errors
      console.log("catch", username, password);

    }
  };
  
  return (

    <div>
      <form action="" method="post">
        <input 
        type="text" 
        name="username" 
        id="username" 
        placeholder="username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)}/>
        <br/>
        <input 
        type="password" 
        name="password" 
        id="password" 
        placeholder="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}/>
        <br/>
        <button type="button" className='btn-test' onClick={handleLogin}>Click me</button>
      </form>
    </div>
  );
}

export default Test;