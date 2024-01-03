const getTotalBalanceByGender = (users, gender) => {
  const TotalBalanceByGender = users
    .filter((user) => user.gender === gender)
    .reduce((total, user) => {
      return total + user.balance;
    }, 0);
  return TotalBalanceByGender;
};
