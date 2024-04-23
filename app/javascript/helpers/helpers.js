const getIDs = (users) => {
  const ids = [];
  users.map((user) => {
    if(user.checked === true) {
      ids.push(user.id);
    }
  });
  return ids;
};

export default getIDs;
