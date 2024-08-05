import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import css from './UserMenu.module.css'

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.auth.user.email);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.usermenufield}>
      <p className={css.emailfield}>{email}</p>
      <button className={css.logoutBtn} onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;