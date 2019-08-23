import React from 'react';

function Login(props) {
  const [login, setLogin] = React.useState(true);
  return (
    <div>
      <h2 className='mv3'>{login ? 'Login' : 'Create Account'}</h2>
      <form className='flex flex-column'>
        {!login && (
          <input type='text' placeholder='your name' autoComplete='off' />
        )}
        <input type='email' placeholder='your email' autoComplete='off' />
        <input type='password' placeholder='Choose a secure password' />
        <div className='flex mt3'>
          <button type='submit' className='button pointer mr2'>
            Submit
          </button>
          <button
            type='button'
            className='pointer button'
            onClick={() => setLogin(prevLogin => !prevLogin)}
          >
            {login ? 'need to crea te an account?' : 'already have an Account'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
