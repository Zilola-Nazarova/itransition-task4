const getIDs = (users) => {
  const ids = [];
  users.map((user) => {
    if(user.checked === true) {
      ids.push(user.id);
    }
  });
  return ids;
};

const generateData = (users, token) => {
  return { token: token, 'users': {'ids': getIDs(users)} };
}

export { getIDs, generateData };
