var CreateUsers = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('age', 'int');
          t.column('location', 'string');
          t.column('isactive', 'boolean');
          t.column('userid', 'int');
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
