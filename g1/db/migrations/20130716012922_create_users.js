var CreateUsers = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('name', 'string');
          t.column('age', 'int');
          t.column('location', 'string');
          t.column('isEnabled', 'boolean');
          t.column('role', 'string');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('user', def, callback);
  };

  this.down = function (next) {
    var callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.dropTable('user', callback);
  };
};

exports.CreateUsers = CreateUsers;
