import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Table from './Table';
import Actions from './Actions';
import Authenticate from './Authenticate';

const ProtectedLayout = () => {
  const { user } = useSelector((state) => state.auth);
  const [allSelected, setAllSelected] = useState(false);

  return (
    <section>
      {user && user.isAuthenticated
      ? (
          <>
            <Actions onAction={() => setAllSelected(false)}/>
            <Table onAction={() => setAllSelected((prev) => !prev)} allSelected={allSelected}/>
          </>   
        )   
      : <Authenticate />
      }
    </section>
  );
};

export default ProtectedLayout;
