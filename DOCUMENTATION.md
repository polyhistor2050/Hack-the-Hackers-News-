REACT INTRODUCTION:
#  React is a library not a framework.
#  React is not a Single Page Application(SPA) Framework but a view library, It is the V is the MVC (Model View COntroller)
#  It only enable you to render component as viewable elements on the browser.

REQUIREMENTS:
    - Basic HTML, CSS and JAVASCRIPT
    - IDE and Terminal
    - Node and NPM
    - Brower

NODE AND NPM:
    > npm install -g <package-name>     Install the package globally
    > npm install <package-name>        Install the package locally
    > npm init -y                       Initialize project with default setup
    > npm inti                          Initalize project with custom setup
    > npm install --save-dev <package-name> Indicate that Node package in only used in the development environment

ZERO CONFIGURATION SETUP:
    > npm install create-react-Application
    > create-react-app <project-name>
   

REACT-DOM:

    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import App from './App';
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
            <App />
    );
    
# ReactDOM uses DOM node in your HTML to replace it with your JSX.

HOT MODULE REPLACEMENT:
# Hot Module Replacement(HRM) is tool to reload your application in the browser without performing page refreshing.
# You can add it in your index.js file
    
    if(module.hot) {
        module.hot.accept();
    }

ES6 CLASSES:
    
#  What does extends mean in class --> In object-oriented programming you have the principle of Inheritance, It is used to pass functionalities from one class to another class;

    class Developer {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }

        getName() {
            return this.firstname + " " + this.lastname;
        }
    }

    const name = new Developer("John", "Doe");
    console.log(name.getName());

#  The Component class encapsulate all the implementation details of React Component, Enables developers to use classes as component in react
        
    class App extends Component {
        render() {
        .......
        }
    }

INTERNAL COMPONENT STATE / LOCAL STATE:
#  Local state allow you to save, modify and delete properties that are stored in your component.
#  You can remore item from the list identified by their ID, using the javascript build-in functionality and store an update list to your local state.

UNDIRECTINAL DATA FLOW:
#   You trigger an action with your view with onClick(), then a function or class method modifies the internal component state and the render() component of the method runs again to update the view.
    

    const List = {
        {
            title: "React",
            url: "https://facebook.github.io/react/",
            author: "Jordan Walke",
            num_comments: 3,
            points: 4,
            objectID: 0
        },
        {
            title: "Redux",
            url: "https://github.com/reactjs/redux",
            author: "Dan Abramov, Andrew Clark",
            num_comments: 2,
            points: 5,
            objectID: 1
        }
    }

    class App extends Component {
        constructor(props) {
            super(props);

            this.state {
                list: list,
            }

            this.onDismissed = this.onDismissed.bind(this);
        }

        onDismissed(id) {
            function isNotId(item) {
                return item.objectID == !id;
            }

            const updatedList = this.state.list.filter(isNotId);
            this.setState({list: updatedList});
        }


        render() {
            return(
                    <div>
                        {this.state.list.map(item => {
                                return (
                                    <div key={item.objectID}>
                                        <span><a href={item.url}>{item.title}</a></span>
                                        <span>{item.author}</span>
                                        <span>{item.num_comments}</span>
                                        <span>{item.points}</span>
                                        <span>
                                            <button 
                                                type="button"
                                                onClick={() => this.onDismissed(item.objectID)}
                                            >
                                                Dismissed
                                            </button>
                                        </span>
                                    </div>
                                    )
                                })}
                    </div>
                )
        }
    }



EVENT HANDLER:
# When using onClick={doSomething()}, the doSomething() function will execute immediately when open the application in the browser and nothing will happen when you click the button anymore.
# But when using onclick={doSomething}, whereas doSomething is a function it will be executed when clicking the button.

    <button
        onClick={() => onDismiss(objectID)}     // higher order function
        type="button"""
    >
        onDismiss
    </button>

# Another way would be to define the function somewhere else outside and only pass the defined function to the Handler.

        class App extends Component {
            ...
            render() {
                return (
                    <div className="App">
                        {this.state.list.map(item => {
                            const onHandleDismiss = () =>
                            this.onDismiss(item.objectID);

                            return (
                                <div key={item.objectID}>
                                <span>
                                <a href={item.url}>{item.title}</a>
                                </span>
                                <span>{item.author}</span>
                                <span>{item.num_comments}</span>
                                <span>{item.points}</span>
                                <span>
                                    <button
                                    onClick={onHandleDismiss}
                                    type="button"
                                    >
                                    Dismiss
                                    </button>
                                </span>
                                </div>
                            );
                        })}
                    </div>
                );
            }
        }

ES6 DESTRUCTURING:
# Destructuring is an easier way to access properties in objects and arrays

# Object Destructuring

    const user = {
        firsname: "James",
        lastname: "Carter"
    };

    const { firsname, lastname } = user;
    console.log(firsname + " " + lastname);

    //output: James Carter


# Array Destructuring

    const users = ["Robin", "Andrew", "Dan"];
    const [
        userOne,
        userTwo,
        userThree
    ] = users;

    console.log(userOne, userTwo, userThree);
    //output: Robin Andrew Dan



COMPOSABLE COMPONENTS:
# You can pass children props as a composable component 

# creating a text(string) as child to the Search component

    <Search
        value={searchTerm}
        onChange={this.onSearchChange}
    >
    search
    </Search>

# Now you can use the children props

    const { value, onChange, children } = this.props;
    <form>
        {children}
        <input 
            type="text"
            value={value}
            onChange={onChange}
        />
    </form>

COMPONENT DECLARATION:

---> FUNCTIONAL STATELESS COMPONENT:
# This components are functions which get input and return output
# The input are the props, and the output is component instance thus plain JSX
# They have no local state(stateless)
# You cannot access or Update the state with this.state or this.setState() because there is no this object
# There are no LifeCycle methods such as constructor() and render()

--> ES6 CLASS COMPONENT:
# They extend from the React Component
# The extend hooks all the LifeCycle methods available in the React Component API, to the components
# You can store and manipulate state using this.state and this.setState()
# The constructor run once in the lifetime of a component 
# The render() class method run once in the beginning and every time the component updates

--> React.createClass:
# The component declaration was used in the older version of React
# And facebook declare it as deprecated


### A rule of Thumb is to use functional stateless component when you don't need local state or component lifecycle methods, and usually you start to implement your components as functional stateless components
### Once you need acess to local state or lifecycle method you refacto it to ES6 class component



STYLING COMPONENT:
# For styling your overall applicaton use the file src/index.css which will contain external styling
# For styling component in the App file use the src/App.css 
# To apply changes to your JSX file first import the css files
# Then use the className attribute instead of class to make specific changes from a css class 
    className="body"

# For inline styling use
    <h1 style={{ color: "red" }}> My name is James Carter </h1>

# Or define a javascript object then use it in your style
    const customColor = {
        color: "red",
    }
    
    <h1 style={customColor}> My name is James Carter </h1>

LIFE CYCLE METHODS:
# The constructor is only called when an instance of the component is created and inserted in the dom. The process get instantiated that process is called mounting of the component.
# The render method is called during the mounting point too but also when the component updates, Each time when the state of the props change, the render method of the component is called.

### Another lifecycle methods
# componentWillMount();
# componentDidMount();

# The Contructor is called first, then componentWillMount(), gets called before the render method and componentDidMount() is called after the render method.

----> Mounting Process has 4 life cycle
1. constructor()
# It is called when the component get Initialized
2. componentWillMount()
# It is called before the render() lifecycle method
3. render()
# This lifecycle method is mandatory and return an element as an output of the component
4. componentDidMount()
# It is called only once when the component mounted.

----> Update lifecycle Component that happen when state or the props change
1. componentWillReceiveProps()
# This lifecycle method is called during an update of lifecycle
2. shouldComponentUpdate()
# Its is called when component updates due to state or props change
3. componentWillUpdate()
# immediately invoked before the render() method 
4. render()
5. componentDidUpdate()
# immediately invoked after the render() method

----> Unmounting lifecycle
1. componentWillUnmount()
# It is called before you destroy your component, you can use this lifecycle method to perform any clean up task


FETCHING DATA:
# There is only one Lifecycle method from the one methioned that is used to fetch data: componentDidMount()


# Javascript shorthand notations

    if(!result) is equal to using if(result == null)
    if(!list.length) is equal to using if(list.length === 0)
    if(something) is equal to using if(something !== '')


IMMUTABLE DATA STRUCTURE:
# React embraces immutable data structure, so you should'nt mutate an object or mutate the state direct
# A better approach is to generate a new object based on the information you have, therefore none of the object get altered
# You can use object.assign(). It takes the first argument as a target object and the target object can be empty object
# And all the following arguments are source objects, this object are merged into the target object

# Don't do this

    this.state.result.hits = updateHits;

# Better approach

    const updatedHits = {hits: updatedHits};
    const updatedResult = Object.assign({}, this.state.result, updatedHits);


SPREAD OPERATOR:
# When it is used, every value from the array or object get copied to another array or object

### Spread Operator in array
    
# Example 1:
    
    const userList = ["Robin", "Andrew", "Dan"];
    const additionalUser = "Jordan";
    const allUsers = [ ...userList, additionalUser];

    console.log(allUsers);
    //output: ["Robin", "Andrew", "Dan", "Jordan"]

# Example 2:

    const oldUser = ["Robin", "Andrew"];
    const newUser = ["Dan", "Jordan"];
    const allUsers = [ ...oldUser, ...newUser ];

    console.log(allUsers);
    //output: ["Robin", "Andrew", "Dan", "Jordan"];

### Object Spread Operator

    const userNames = { firstname: "Robin", lastname: "Andrew" };
    const age = 28;
    const user = { ...userNames, age };

    console.log(user);
    //output: { firstname: "Robin", lastname: "Andrew", age: 28 };   


CONDITIONAL RENDERING:
# Conditional rendering happen when you want to make a decision to render one or another element

# You can use Tenary operator in conditional rendering

    { result ? "Hello, world" 
        : null
    }

# You can use Logical && operator in conditional rendering

    const result = true && "Hello, world";
    console.log(result);

    //output: Hello, world

    console result = false && "Hello, world";
    console.log(result);

    //output: false

PAGINATED FETCH:
# The Hacker news API also return a paginated list(page property) which by default is 0 is the first response
# We can use page property to fetch more paginated sublist as a result by passing next page with the same search term to the API


CLIENT-SIDE CACHE:
# In a client-side fetch you would store each result, When the API request is made to the endpoint.
# It checks if the result is already there, and if it is there the cache is used
# Otherwise the API request is made to the endpoint to fetch the data

# The first step is to enable your cache by storing each result by searchKey to the internal component state
# Then you can retrieve the result depending on the non fluctuant searchKey from your map of the result

