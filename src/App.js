import React, { Component } from 'react';
import './index.css';
import './App.css';


const DEFAULT_QUERY = 'redux';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';


class App extends Component {
  
    constructor(props) {
        super(props);
        
        //internal component state
        this.state = {
            result: null,
            searchTerm: DEFAULT_QUERY,
        }
        
        // bind method to the class
        this.onDismiss = this.onDismiss.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.setSearchTopStories = this.setSearchTopStories.bind(this);
        this.fetchSearchTopStories = this.setSearchTopStories.bind(this);
    }
    
    setSearchTopStories(result) {
        this.setState({ result });
    }

    fetchSearchTopStories(searchTerm) {
        fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
            .then(response => response.json())  // transform response to json formatt
            .then(result => this.setSearchTopStories(result))
            .catch(error => error);
    }
    
    //fetch data from API Endpoint asynchronously.
    componentDidMount() {
        const { searchTerm } = this.state;
        this.fetchSearchTopStories(searchTerm);
    }
    
    onDismiss(id) {
        function isNotId(item) {
            return item.objectID !== id; //remove selected item
        }
        const updatedHits = this.state.result.hits.filter(isNotId);
        this.setState({
            // update the hits in the internal component state
            result: { ...this.state.result, hits: updatedHits }
        });     
    }
    
    //save the input value to the local state
    onSearchChange(event) {
        this.setState({ searchTerm: event.target.value });
    }

    onSearchSubmit(event) {
        const { searchTerm } = this.state;
        this.fetchSearchTopStories(searchTerm);
        event.preventDefault();
    }
    
    render() {
        const { searchTerm, result } = this.state;
        if(!result) { return null; }

        return (
            <div className='page'>
                <div className='interactions'>
                    <Search 
                        value={searchTerm}
                        onChange={this.onSearchChange}
                        onSubmit={this.onSearchSubmit}
                    >
                    Search:
                    </Search>
                </div>
                { result &&
                    <Table 
                        list={result.hits}
                        onDismiss={this.onDismiss}
                    />
                }
                
                <Button
                    onClick={this.onDismiss}
                >
                Dismiss
                </Button>
            </div>
        )
    }

}



const Search = ({ value, onChange, onSubmit, children}) => {
        return(
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                />
                <button type='submit'>
                    {children}
                </button>
            </form>
        );
}



const Table = ({ list, onDismiss }) => {
        return(
            <div className='table'>
                {list.map(item => {
                    return(
                        <div key={item.objectID} className='table-row'>
                            <span style={{ width: '40%' }}>
                                <a href={item.url}>{item.title}</a>
                            </span>
                            <span style={{ width: '30%' }}>
                                {item.author}
                            </span>
                            <span style={{ width: '10%' }}>
                                {item.num_comments}
                            </span>
                            <span style={{ width: '10%' }}>
                                {item.points}
                            </span>
                            <span style={{ width: '10%' }}>
                                <Button 
                                    onClick={() => onDismiss(item.objectID)}
                                    className='button-inline'
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