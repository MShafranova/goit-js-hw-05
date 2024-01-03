const getUsersWithFriend = (users, friendName) => {
  const usersWithFriend = users.filter(({ friends }) =>
    friends.includes(friendName)
  );
  return usersWithFriend;
};