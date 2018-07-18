let SQLite = require('react-native-sqlite-storage');

const dbname = 'qamus.db';

export default SQLite.openDatabase(
  { name: dbname, readOnly: 'true', createFromLocation: 1 },
  () => console.log(`Database opened: ${dbname}`),
  err => console.log(err)
);
