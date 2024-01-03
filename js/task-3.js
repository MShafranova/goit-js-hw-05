const sortByDescendingFriendCount = (users) => {
  const sortedByFriendsDesc = users.toSorted(
    (firstUser, secondUser) =>
      secondUser.friends.length - firstUser.friends.length
  );
  return sortedByFriendsDesc;
};
