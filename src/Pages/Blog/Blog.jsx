import React from 'react';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import { FaDownload, FaLongArrowAltRight } from 'react-icons/fa';
const ref = React.createRef();

const Blog = () => {

    return (
        <div className='px-20 my-10'>
            <Pdf targetRef={ref} filename="blog.pdf">
                {({ toPdf }) => <button onClick={toPdf}><FaDownload className=' text-orange-500 text-2xl mb-5'></FaDownload></button>}
            </Pdf>


            <div ref={ref}>
                <h2 className='text-xl'> 1. Tell us the differences between uncontrolled and controlled components. </h2>
                <p className='mb-5 mt-2'><FaLongArrowAltRight />
                    Uncontrolled components are those where the state of the input field is managed by the browser, rather than by React or any other JavaScript framework. In other words, the value of the input field is stored internally by the browser, and the application does not have direct control over it. On the other hand, controlled components are those where the state of the input field is managed by React or another JavaScript framework. In this case, the value of the input field is stored in the component's state, and any changes to the input field are reflected in the state.
                </p>

                <h2 className='text-xl'> 2. How to validate React props using PropTypes? </h2>
                <p className='mb-5 mt-2'><FaLongArrowAltRight />
                    propTypes, a built-in react library, is used to validate the type of props passed to a component. To use propTypes, first import the propTypes library. Then, define the prop types for your component by adding a propTypes object to the component. Now, to use the propTypes, simply pass props to your component
                </p>

                <h2 className='text-xl'> 3. Tell us the difference between nodejs and express js. </h2>
                <p className='mb-5 mt-2'><FaLongArrowAltRight />
                    Node.js is a runtime environment for executing JavaScript code on the server. On the other hand, Express.js is a web framework built on top of Node.js that provides a set of tools and features to build web applications and APIs
                </p>

                <h2 className='text-xl'> 4. What is a custom hook, and why will you create a custom hook? </h2>
                <p className='mb-5 mt-2'><FaLongArrowAltRight />
                    React's custom hook function enables the reuse of stateful code across multiple components. It's a technique for extracting frequently used complex functionality, which facilitates sharing and reusing it across many components of your application. We should create custom hook because it allows us to extract reusable logic, share logic between components, improve code organization
                </p>
            </div>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Blog />, rootElement);

export default Blog;