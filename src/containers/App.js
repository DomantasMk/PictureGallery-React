import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import SearchCountBox from '../components/SearchCountBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component{
    constructor(){
        super();
        this.state = 
        {
            photos: [],
            searchField: '',
            searchCountField: 0
        }
    }
    componentDidMount(){
        fetch('https://picsum.photos/list')
        .then(response =>response.json())
        .then( users =>{
            this.setState({photos: users})
        })
    }

    OnSearchChange = (event) =>{
        this.setState({searchField: event.target.value});
    }
    
    OnCountChange = (countEvent) =>{
        this.setState({searchCountField: countEvent.target.value});
    }
    render()
    {
        const filteredPhotos = this.state.photos.filter(photo =>{
            return photo.author.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return(
            <div className ='tc'>
                <h1 className='f1-ns f1-l f3-m'>Photos and Authors showcase</h1>
                

                <SearchBox searchChange={this.OnSearchChange}/>

                <SearchCountBox countChange={this.OnCountChange}/>
 
                <Scroll>
                 <CardList photos = {filteredPhotos} limit = {this.state.searchCountField} />
                </Scroll>

            </div>

    );
    }
}
export default App;