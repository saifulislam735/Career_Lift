const Blog = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="space-y-8">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Context API</h2>
                    <p className="text-gray-600">The Context API in React is a way to manage global state in a React application. It allows you to pass data through the component tree without having to pass props down manually at every level. This is particularly useful for themes, user settings, authentication, and other cases where state needs to be accessed by many components at different nesting levels.</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Custom Hook</h2>
                    <p className="text-gray-600">Custom hooks are functions in React that start with the word use and can call other hooks. They allow you to extract and reuse logic across multiple components. For example, you might create a custom hook to handle form state, fetching data, or any other reusable functionality. Custom hooks help keep your code DRY (Dont Repeat Yourself) and make it easier to manage complex logic.</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">useRef</h2>
                    <p className="text-gray-600">The useRef hook in React provides a way to persist values between renders without causing a re-render when the value changes. It is commonly used to access and interact with DOM elements directly. For instance, you can use useRef to focus an input field, track previous state values, or store mutable values that dont require a re-render when updated.</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">useMemo</h2>
                    <p className="text-gray-600">The useMemo hook in React is used to memoize expensive calculations or function results, ensuring that they are only recomputed when one of the dependencies has changed. This can improve performance by preventing unnecessary re-calculations on every render. It is particularly useful for optimizing performance in components with heavy computations or in cases where re-rendering a component would be costly.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
