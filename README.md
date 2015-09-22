# meteor-example-autoform

![](https://raw.githubusercontent.com/ics-software-engineering/meteor-example-autoform/master/doc/meteor-example-autoform.png)

Meteor-example-autoform is a [Meteor](http://meteor.com) application that provides a simple implementation of an HTML form using the [AutoForm plugin](https://github.com/aldeed/meteor-autoform) along with [Twitter Bootstrap](http://getbootstrap.com/).

I wrote this application to complement the AutoForm documentation and online AutoForm tutorials. Specifically, I wanted to provide example code for Radio Buttons, Checklists, and multiple selection.

The code also uses explicit publish and subscribe and Meteor methods.  This means the insecure and autopublish packages are not enabled.

I previously wrote a similar application called [play-example-form](http://ics-software-engineering.github.io/play-example-form/) to illustrate form processing in the [Play Framework](https://www.playframework.com/). It's interesting to compare the two implementations.

## Basic usage

Download the application and type `meteor`, then display http://localhost:3000 to bring up a window similar to the above.

The application consists of two pages: the home page that enables the form and enables you to create new StudentData documents, and a second page that allows you to edit a pre-existing StudentData document.  To use this second page, open up the browser console and submit a new StudentData instance. You should see the docID printed out to the console:

![](https://raw.githubusercontent.com/ics-software-engineering/meteor-example-autoform/master/doc/meteor-example-autoform-submit.png)

Copy the docID, and then create a URL in the address bar with `student/<docID>`.   Retrieving that URL will display the newly created StudentData document and allow it to be edited:

![](https://raw.githubusercontent.com/ics-software-engineering/meteor-example-autoform/master/doc/meteor-example-autoform-student.png)

One way to test your understanding of this code is to clone this repo and augment the application to display a table of all created StudentData instances and an "Edit" button to display the selected student on the second page.

## Walkthough

Let's take a quick look through the code.

### Routing

The application consists of two pages: a home page (which we'll call "AddStudentData") that enables you to create a new StudentData document, and a second page (which we'll call "EditStudentData") that enables you to edit a pre-existing StudentData document.

Because there are two pages, it makes sense to use a router.  This application uses [Iron Router](http://iron-meteor.github.io/iron-router/).

The routing code is in a single file: [lib/router/router.js](https://github.com/ics-software-engineering/meteor-example-autoform/blob/master/lib/router/router.js):

  * A "layout" template is specified to provide boilerplate Bootstrap code, found in [client/templates/application/layout.html](https://github.com/ics-software-engineering/meteor-example-autoform/blob/master/client/templates/application/layout.html).

  * When the application is first retrieved by a client, the router will subscribe to the StudentData collection. A [loading template](https://github.com/ics-software-engineering/meteor-example-autoform/blob/master/client/templates/application/loading.html) will be shown while the subscription runs, and this displays the spinner provided by the [sasha:spinner](https://atmospherejs.com/sacha/spin).

  * Two routes are defined: "/" which will display the AddStudentData template, and "/student/:_id" which will display the UpdateStudentData template.  Both templates are defined in [client/templates/studentdata/studentdata.html](https://github.com/ics-software-engineering/meteor-example-autoform/blob/master/client/templates/studentdata/studentdata.html).

  * When the client submits a URL with the /student route, the next part of the path should provide the docID for the student to be retrieved. (No error checking is done. [Discover Meteor](https://www.discovermeteor.com/) has a nice tutorial on how to support error checking in Iron Router.)

### The StudentData Collection

















