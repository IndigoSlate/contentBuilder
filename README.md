#Content Builder
This is a very simple package to let the text content for a page be managed from a singular content file instead of directly in the html. The goal is to increase readability and maintainability in both the HTML and the content of the site itself. This package also allows the same content to be bound to multiple elements. 

REFERENCE

When included on the page, this package creates a very simple 'cB' api in the global scope. This api has a property and a method.

'content' : This property holds all the content data for the page and can be accessed directly. If a content.js file is also included on the page, creating a global content object, then this property will be set from that file, otherwise it will start out as an empty object.

'set' : This property is a function that will update the both the cB.content object and the content that is displayed on the page.

To bind these values to your html elements, simply attach an 'isbind' attribute and set it's value to the name of the content variable you want to bind it to.
	ex. 
	<p isbind="content-name"></p>

If a value is bound to an input or text area tag, then it will update automatically on change of that element.