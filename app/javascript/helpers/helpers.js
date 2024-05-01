const getIDs = (users) => {
  const ids = [];
  users.forEach((user) => {
    if (user.checked === true) {
      ids.push(user.id);
    }
  });
  return ids;
};

const generateData = (users, token) => ({ token, users: { ids: getIDs(users) } });

export { getIDs, generateData };
