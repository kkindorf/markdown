# markdown
A markdown previewer built with React

I created this project as part of Freecodecamp's data visualization certificate. It's a pretty simple application that uses React's dangerouslySetInnerHTML function 
and the [Marked](https://www.npmjs.com/package/marked) mardkown parser library.

How the application works: 

I'm using the state object in a single React component to store the initial set of markdown content as a single string. Once the component renders,
that string's value is being added into a textarea field' inside the component and the state is then being compiled by the Marked library into HTML. The compiled HTML is then passed
to the dangerouslySetInnerHTML function. Once the html is transferred to the dangerouslySetInnerHTML function, that content is added to a div element where the HTML
is shown. 

If a user starts typing markdown in the textarea field, that text and it's formatting automatically turns into HTML because the onChange function just keeps adding the markdown directly to the component's state, resulting in a very nice
instant update of the html!

