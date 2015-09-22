/**
 * A list of sample students to pre-fill the Collection.
 * @type {*[]}
 */
var studentData = [
  {name: "Mary Foo", bio: "I like biology.", hobbies: ["Surfing", "Running"], level: "Freshman", gpa: 1, majors: ["Biology"]}
];

/**
 * Initialize the StudentData collection if empty.
 */
if (StudentData.find().count() === 0) {
  _.each(studentData,  function(student) {
    StudentData.insert(student);
  });
}
