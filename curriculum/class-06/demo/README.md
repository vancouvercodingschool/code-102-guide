# Demo: JavaScript

## Demo Instructions

Show JavaScript in action. 
1. Start with showing that it can work in the browser, and in VS Code
1. Show how to install the CodeRunner extention. 
1. Live-code something similar to what you see in `vars.js`, to lead a discussion of basic operators. 
1. Highlight how reading error messages gives good hints. 

Now do something more meaningful in a file:

1. Start with adding a script tag to your html
1. Show the error that you get when the file doesn't exist. 
1. Now create the file. Show that it works, but does nothing. 
1. Add something to the file. It can console.log now! That's output in the browser, but not in the page...
1. Add `document.write()` to get something in the page.
1. Now customize what is written with some dynamic input:
    - `Date()` data. 
    - `Math.random()`
    - `location.hash.substr(1)` gets url.com/#data
    - `prompt()` function
1. Have the class navigate you through adding a second dynamic component to your site. 

Some ideas:
- Prompt for user's name, and show it in a greeting.
- Prompt for age or birthdate, and show selective content based on age
- Prompt for the user's city or state, and, for certain values, give specific info (Ranking? Weather guess?). 
