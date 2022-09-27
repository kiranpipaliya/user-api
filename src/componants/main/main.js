import React, { useContext } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import * as API from '../../axiosApi/methods';
import AuthContext from '../../context/AuthContex';
const Main = () => {
  /* A hook that is used to fetch data from the API. */
  const AuthCtx = useContext(AuthContext);
  const fetcgUser = () => {
    if (AuthCtx.token !== '') {
      return API.getUsers;
    }
  };
  const { data, isError, isLoading } = useQuery('users', fetcgUser());
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(API.deleteUsers);
  console.log(data);
  const deleteHandler = (id) => {
    mutateAsync(id);
    queryClient.invalidateQueries('users');
  };
  console.log(AuthCtx.token);
  let html;
  if (isLoading) {
    html = <h2 className='message'>Loading...</h2>;
  }

  if (isError) {
    html = <h2 className='message'>Som think Went Wrong ? Please Try Again</h2>;
  }
  if (!isLoading && !isError && AuthCtx.token !== '') {
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
            <button onClick={() => deleteHandler(user.id)}>Delete</button>
            <button>Edit</button>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <>
      <div className='main-div'>{AuthCtx.token !== '' && html}</div>
    </>
  );
};
export default Main;
