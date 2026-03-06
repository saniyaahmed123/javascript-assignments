var maincontent = document.getElementById('main-content');
var childs = maincontent.getElementsByTagName('p');

var nodetype1 = document.getElementById('form-content').nodeType;
document.write("The node type of element having id 'form-content' is: " + nodetype1 + "<br>");

var lastname = document.getElementById('last-name');
var lastnametype = lastname.nodeType;

document.write("The node type of element having id 'last-name' is: " + lastnametype + "<br>");
document.write("The child node of element having id 'last-name' is: " + lastname.childNodes[0] + "<br>");


// Part 3
lastname.childNodes[0].nodeValue = "Smith";

document.write("The updated child node of element having id 'last-name' is: " + lastname.childNodes[0] + "<br>");


// Part 4
var maincontentfirstchild = maincontent.firstChild;
var maincontentlastchild = maincontent.lastChild;

document.write("The first child of element having id 'main-content' is: " + maincontentfirstchild + "<br>");
document.write("The last child of element having id 'main-content' is: " + maincontentlastchild + "<br>");


// Part 5
var nextsib = lastname.nextSibling;
var prevsib = lastname.previousSibling;

document.write("The next sibling of element having id 'last-name' is: " + nextsib + "<br>");
document.write("The previous sibling of element having id 'last-name' is: " + prevsib + "<br>");


// Part 6
var email = document.getElementById('email');
var emailparent = email.parentNode;
var emailnodetype = email.nodeType;

document.write("The parent node of element having id 'email' is: " + emailparent + "<br>");
document.write("The node type of element having id 'email' is: " + emailnodetype + "<br>");