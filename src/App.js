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
                >
                Search:
                </Search>

                <Table 
                    list={list}
                    pattern={searchTerm}
                    onDismiss={this.onDismiss}
                />

                <Button
                    onClick={this.onDismiss}
                >
                Dismiss
                </Button>
            </div>
        )
    }

}


const Search = ({ value, onChange, children}) => {
        return(
            <form>
                {children}
                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                />
            </form>
        );
}


const Table = ({ list, pattern, onDismiss }) => {
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
                                <Button 
                                    onClick={() => onDismiss(item.objectID)}
                                >
                                    Dismiss
                                </Button>
                            </span>
                        </div>
                    )
                })}
            </div>
        );
}

const Button = ({ className = "", onClick, children }) => {
        return(
            <div>
                <button
                    onClick={onClick}
                    type="button"
                    className={className} 
                >
                    {children}
                </button>
            </div>
        );
}

export default App;