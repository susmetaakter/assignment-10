import React from 'react';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import { FaDownload, FaLongArrowAltRight } from 'react-icons/fa';
const ref = React.createRef();

const Blog = () => {

    return (
        <div className='px-20 my-10 bg-slate-100'>
            <Pdf targetRef={ref} filename="blog.pdf">
                {({ toPdf }) => <button onClick={toPdf}><FaDownload className=' text-orange-500 text-2xl mb-5 my-5'></FaDownload></button>}
            </Pdf>


            <div ref={ref}>
                <h2 className='text-2xl text-red-800 font-bold'> 1. Tell us the differences between uncontrolled and controlled components. </h2>
                <p className='mb-5 mt-2'><FaLongArrowAltRight />
                An uncontrolled component is a form element that manages its state internally. In other words, its value is not controlled by React but by the browser. When a user interacts with the component, its value is read directly from the DOM using a ref, and any subsequent updates to the value are also managed by the browser.A controlled component, on the other hand, is a form element that is fully controlled by React. Its value is managed by React state, and any updates to the value are passed down through props to the form element. When a user interacts with the component, the new value is passed back up through a callback function provided by the parent. 
                </p>

                <h2 className='text-2xl  text-red-800 font-bold'> 2. How to validate React props using PropTypes? </h2>
                <p className='mb-5 mt-2'><FaLongArrowAltRight />
                PropTypes is a feature in React that enables developers to define the expected types of properties (props) that a component should receive. PropTypes allows you to add a layer of validation to your components to ensure that they receive the right props of the right types. To use propTypes, first import the propTypes library. Then, define the prop types for your component by adding a propTypes object to the component. Now, to use the propTypes, simply pass props to your component
                </p>

                <h2 className='text-2xl  text-red-800 font-bold'> 3. Tell us the difference between nodejs and express js. </h2>
                <p className='mb-5 mt-2'><FaLongArrowAltRight />
                Node.js is a JavaScript runtime environment that allows developers to write server-side JavaScript code. It provides a runtime environment for executing JavaScript code outside of a web browser. Node.js has a built-in HTTP module that provides an interface for creating HTTP servers and clients.Express.js, on the other hand, is a web application framework that runs on top of Node.js. It provides a set of tools and features that make it easier to build web applications. Express.js is often used for building server-side web applications, APIs, and microservices. It provides a robust set of features for handling HTTP requests and responses, managing middleware, and routing requests to the appropriate handlers.
                </p>

                <h2 className='text-2xl  text-red-800 font-bold'> 4. What is a custom hook, and why will you create a custom hook? </h2>
                <p className='mb-5 mt-2'><FaLongArrowAltRight />
                In React, a custom hook is a JavaScript function that starts with the prefix use. A custom hook allows developers to extract and reuse stateful logic from a component, making it easier to write reusable code.Custom hooks are created when we need to reuse some functionality, for example, to fetch data from an API or to handle form input data. When we have some common functionality that we need to use in different components, instead of repeating the same code in every component, we can create a custom hook and reuse that code across multiple components.
                </p>
            </div>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Blog />, rootElement);

export default Blog;