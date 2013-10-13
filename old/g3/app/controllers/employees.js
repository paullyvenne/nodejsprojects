var Employees = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;

    geddy.model.Employee.all(function(err, employees) {
      self.respond({params: params, employees: employees});
    });
  };

  this.add = function (req, resp, params) {
    this.respond({params: params});
  };

  this.create = function (req, resp, params) {
    var self = this
      , employee = geddy.model.Employee.create(params);

    if (!employee.isValid()) {
      this.flash.error(employee.errors);
      this.redirect({action: 'add'});
    }
    else {
      employee.save(function(err, data) {
        if (err) {
          self.flash.error(err);
          self.redirect({action: 'add'});
        }
        else {
          self.redirect({controller: self.name});
        }
      });
    }
  };

  this.show = function (req, resp, params) {
    var self = this;

    geddy.model.Employee.first(params.id, function(err, employee) {
      if (!employee) {
        var err = new Error();
        err.statusCode = 404;
        self.error(err);
      }
      else {
        self.respond({params: params, employee: employee.toObj()});
      }
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.Employee.first(params.id, function(err, employee) {
      if (!employee) {
        var err = new Error();
        err.statusCode = 400;
        self.error(err);
      }
      else {
        self.respond({params: params, employee: employee});
      }
    });
  };

  this.update = function (req, resp, params) {
    var self = this;

    geddy.model.Employee.first(params.id, function(err, employee) {
      employee.updateProperties(params);
      if (!employee.isValid()) {
        this.flash.error(employee.errors);
        this.redirect({action: 'edit'});
      }
      else {
        employee.save(function(err, data) {
          if (err) {
            self.flash.error(err);
            self.redirect({action: 'edit'});
          }
          else {
            self.redirect({controller: self.name});
          }
        });
      }
    });
  };

  this.destroy = function (req, resp, params) {
    var self = this;

    geddy.model.Employee.remove(params.id, function(err) {
      if (err) {
        self.flash.error(err);
        self.redirect({action: 'edit'});
      }
      else {
        self.redirect({controller: self.name});
      }
    });
  };

};

exports.Employees = Employees;
