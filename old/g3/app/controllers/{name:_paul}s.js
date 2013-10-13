var {name:Paul}s = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;

    geddy.model.{name:Paul}.all(function(err, {name:Paul}s) {
      self.respond({params: params, {name:Paul}s: {name:Paul}s});
    });
  };

  this.add = function (req, resp, params) {
    this.respond({params: params});
  };

  this.create = function (req, resp, params) {
    var self = this
      , {name:Paul} = geddy.model.{name:Paul}.create(params);

    if (!{name:Paul}.isValid()) {
      this.flash.error({name:Paul}.errors);
      this.redirect({action: 'add'});
    }
    else {
      {name:Paul}.save(function(err, data) {
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

    geddy.model.{name:Paul}.first(params.id, function(err, {name:Paul}) {
      if (!{name:Paul}) {
        var err = new Error();
        err.statusCode = 404;
        self.error(err);
      }
      else {
        self.respond({params: params, {name:Paul}: {name:Paul}.toObj()});
      }
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.{name:Paul}.first(params.id, function(err, {name:Paul}) {
      if (!{name:Paul}) {
        var err = new Error();
        err.statusCode = 400;
        self.error(err);
      }
      else {
        self.respond({params: params, {name:Paul}: {name:Paul}});
      }
    });
  };

  this.update = function (req, resp, params) {
    var self = this;

    geddy.model.{name:Paul}.first(params.id, function(err, {name:Paul}) {
      {name:Paul}.updateProperties(params);
      if (!{name:Paul}.isValid()) {
        this.flash.error({name:Paul}.errors);
        this.redirect({action: 'edit'});
      }
      else {
        {name:Paul}.save(function(err, data) {
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

    geddy.model.{name:Paul}.remove(params.id, function(err) {
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

exports.{name:Paul}s = {name:Paul}s;
