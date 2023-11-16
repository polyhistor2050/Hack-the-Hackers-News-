import React, { Component } from 'react';

const list = [
    {
        title: 'React',
        url: 'https://facebook.github.io/react/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: 'Redux',
        url: 'https://github.com/reactjs/redux',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
    },
];

class App extends Component {
  
    constructor(props) {
        super(props);

        this.state = {
            list: list,
        }
        
        // bind method to the class
        this.onDismiss = this.onDismiss.bind(this);
    }

    onDismiss(id) {
        const updatedList = this.state.list.filter(function isNotId(item) {
            return item.objectID !== id;    // remove the clicked item
        });
        
        this.setState({list: updatedList});     // update the list in the internal component state
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" />
                </form>
                {this.state.list.map(item => 
                    <div key={item.objectID}>
                        <span><a href={item.url}>{item.title}</a></span>
                        <p>{item.author}</p>
                        <p>{item.num_comments}</p>
                        <p>{item.points}</p>
                        <span>
                            <button
                                onClick={() => this.onDismiss(item.objectID)}
                                type='button'
                            >
                                Dismiss
                            </button>
                        </span>
                    </div>
                    
                )}
            </div>
        )
    }

}

export default App;