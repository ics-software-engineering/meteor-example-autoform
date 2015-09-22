# meteor-example-autoform

![](https://raw.githubusercontent.com/ics-software-engineering/meteor-example-autoform/master/doc/meteor-example-autoform.png)

Meteor-example-autoform is a very simple [Meteor](http://meteor.com) application that provides a very simple example of an HTML form using [Twitter Bootstrap](http://getbootstrap.com/) using the [AutoForm plugin](https://github.com/aldeed/meteor-autoform).

I wrote this application to complement other AutoForm tutorials and to provide example code for Radio Buttons and Checklists.

## Basic usage

Download the application and type `meteor`, then display http://localhost:3000 to bring up a window similar to the above.

The application consists of two pages: the home page that enables the form and enables you to create new StudentData documents, and a second page that allows you to edit a pre-existing StudentData document.  To use this second page, open up the browser console and submit a new StudentData instance. You should see the docID printed out to the console:

![](https://raw.githubusercontent.com/ics-software-engineering/meteor-example-autoform/master/doc/meteor-example-autoform-submit.png)

Copy the docID, and then create a URL in the address bar with `student/<docID>`.   Retrieving that URL will display the newly created StudentData document and allow it to be edited:

![](https://raw.githubusercontent.com/ics-software-engineering/meteor-example-autoform/master/doc/meteor-example-autoform-student.png)

One way to test your understanding of this code is to clone this repo and augment the application to display a table of all created StudentData instances and an "Edit" button to display the selected student on the second page.

## Walkthough






