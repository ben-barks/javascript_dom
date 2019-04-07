# Weekend Homework Recap: DOM

1. What is the return value of `document.createElement`? And what does it accept as an argument?

- On its own it doesn't return anything, but it takes a css selector as an argument.

2. What is the return value of `document.querySelector`? And what does is accept as an argument?

- Returns the selected argument's existing values, takes the argument of the id, class or selector.

3. What is the return value `document.querySelectorAll`?

- All the existing type matches from the argument - e.g: all paragraphs, headers or labels.

4. What is the difference between using `textContent` and `appendChild`?

- TextContent changes the text output to a specific string, while appendChild adds a newly created element under an existing parent element.

5. What is the event we handle to access the values of a form, and how do we access the values?

- Submit; we can access them by finding the target value via DOM and accessing them using the dot reference starting with the event.
