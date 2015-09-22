Router.configure({
  layoutTemplate: 'layout',
  waitOn: function() { return Meteor.subscribe(studentData); },
  loadingTemplate: 'loading'
});

Router.route('/', {
  name: 'AddStudentData'
});

Router.route('/student/:_id', {
  name: 'UpdateStudentData',
  data: function() { return StudentData.findOne(this.params._id); }
});
