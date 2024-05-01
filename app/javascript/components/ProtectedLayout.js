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
            <h1>Users&apos; Data:</h1>
            <div
              className="my-4 p-3 bg-secondary border-top rounded-top-3 table-responsive-md"
            >
              <Actions onAction={() => setAllSelected(false)} />
              <Table onAction={() => setAllSelected((prev) => !prev)} allSelected={allSelected} />
            </div>
          </>
        ) : <Authenticate />}
    </section>
  );
};

export default ProtectedLayout;
