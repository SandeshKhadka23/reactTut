// Custom function to simulate React-style rendering using plain JavaScript
function customRender(reactElement, mainContainer) {
    // Step 1: Create a new DOM element based on the 'type' specified (e.g., 'a' => <a>)
    const domElement = document.createElement(reactElement.type); //<a></a>

    // Step 2: Set the content/text inside the element using 'children'
    domElement.innerHTML = reactElement.children;//<a>Click me to visit google</a>

    // Step 3: Loop through each property in the 'props' object
    for (const prop in reactElement.props) {
        // Skip the 'children' prop, as it's not an HTML attribute
        if (prop === 'children') continue;//children is not a attribute

        // Step 4: Set each prop as an attribute on the created DOM element
        // For example: href, target, etc.
        domElement.setAttribute(prop, reactElement.props[prop]);//<a href='https://google.com' target='blank'>Click me to visit google</a>
    }

    // Step 5: Append the created and configured element to the given container in the DOM
    mainContainer.appendChild(domElement);//<div id=root>child:<a href='https://google.com' target='blank'>Click me to visit google</a></div>
}

// A simulated React element object, similar to what JSX compiles to
const reactElement = {
    type: 'a', // Element type (tag name)
    props: {
        href: 'https://google.com', // Link destination
        target: '_blank'            // Open in new tab
    },
    children: 'Click me to visit google' // Text to display inside the <a> tag
};
//react also change into this format when executed(complied by babel)App()=>reactElelment type
// Select the container where we want to insert our element (usually a div with id 'root')
const mainContainer = document.querySelector('#root');

// Call the customRender function to insert the element into the DOM
customRender(reactElement, mainContainer);
