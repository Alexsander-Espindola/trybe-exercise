//Excercise 1
const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

//Excercise 2-3
const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    return users[id] ? 
      resolve(users[id]) :
      reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

module.exports = { 
  uppercase,
  findUserById,
  getUserName
};