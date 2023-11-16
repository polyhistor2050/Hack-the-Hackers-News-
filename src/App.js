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

// filter the search keyword based on the title
function isSeached(searchTerm) {
    return function(item) {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
}

class App extends Component {
  
    constructor(props) {
        super(props);

        this.state = {
            list: list,
            searchTerm: "",
        }
        
        // bind method to the class
        this.onDismiss = this.onDismiss.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    onDismiss(id) {
        const updatedList = this.state.list.filter(function isNotId(item) {
            return item.objectID !== id;    // remove the clicked item
        });
        
        this.setState({list: updatedList});     // update the list in the internal component state
    }
    
    //save the input value to the local state
    onSearchChange(event) {
        this.setState({ searchTerm: event.target.value });
    }

    render() {
        const { searchTerm, list } = this.state;
        return (
            <div>
                <Search 
                    value={searchTerm}
                    onChange={this.onSearchChange}
                />
                <Table 
                    list={list}
                    pattern={searchTerm}
                    onDismiss={this.onDismiss}
                />
            </div>
        )
    }

}


class Search extends Component {
    render() {
        const { value, onChange } = this.props;
        return(
            <form>
                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                />
            </form>
        );
    }
}


class Table extends Component {
    render() {
        const { list, pattern, onDismiss } = this.props;
        return(
            <div>
                {list.filter(isSeached(pattern)).map(item => {
                    return(
                        <div key={item.objectID}>
                            <span>
                                <a href={item.url}>{item.title}</a>
                            </span>
                            <p>{item.author}</p>
                            <p>{item.num_comments}</p>
                            <p>{item.points}</p>
                            <span>
                                <button 
                                    type='button'
                                    onClick={() => onDismiss(item.objectID)}
                                >
                                    Dismiss
                                </button>
                            </span>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default App;