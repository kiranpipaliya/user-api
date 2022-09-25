import React from 'react';
import { useQuery } from 'react-query';
import * as API from '../../axiosApi/methods';
const Main = () => {
  /* A hook that is used to fetch data from the API. */
  const { data, isError, isLoading } = useQuery('users', API.getUsers);

  let html;

  if (isLoading) {
    html = <h2 className='message'>Loading...</h2>;
  }

  if (isError) {
    html = <h2 className='message'>Som think Went Wrong ? Please Try Again</h2>;
  }
  if (!isLoading && !isError) {
    html = (
      <ul className='user-wrapper'>
        {data.map((user) => (
          <li key={user.id} className='user-box'>
            <div>
              <img src={user.avatar} alt={user.first_name} />
            </div>
            <div>
              <h4>{user.first_name}</h4>
              <h5>{user.email}</h5>
            </div>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <>
      <div className='main-div'>{html}</div>
    </>
  );
};
export default Main;
