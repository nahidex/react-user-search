import React, { Component } from 'react'
import api from '../api/API';
import config from '../utils/config';


export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            searchParam: {
                id: '',
                name: '',
            },
            searchResult: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            searchParam: { ...this.state.searchParam, [name]: value }
        });   
    }

    handleSubmit(event) {
        api.searchUser(this.state.searchParam).then( (res) => {
            this.setState({ isLoading: false });
            // console.log(res.data);
            // const newResult = { ...this.state.searchResult, ...res.data };

            this.setState({searchResult: res.data})

            console.log(this.state.searchResult);
            
        }).then(e => e);
        
        event.preventDefault();
    }



    // componentDidMount() {
    //     api.getHomeData().then(function (res) {
    //         this.setState({...this.state, ...res.data})
    //     }.bind(this)).then(e => e);
    // }

    render() {
        // const data = this.state;
        // const imagePath = data.image.url;
        const result = this.state.searchResult;
        const {name, id, avatar, dob } = result;
        console.log(result);
        
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" placeholder="id" name="id" value={this.state.searchParam.id} onChange={this.handleChange} />
                        <input type="text" placeholder="name" name="name" value={this.state.searchParam.name} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <>
                <div>
                        <div className="wrapper">
                            <div className="wrapper-inner">
                                <div className="box-wrapper">
                    {!this.state.isLoading && result && Array.isArray(result) ? (result.map(({ name, id, avatar, dob }, i) => (                        
                            
                        
                        <div className="box" key={i}>
                                        <div className="avatar">
                                            <img src={avatar} />
                                        </div>
                                        <div className="box-inner">
                                            <h3 className="name">{name}</h3>
                                            <h4 className="occupation">Date of Birth: {dob}</h4>
                                            <p className="location"><i className="fa fa-map-marker"></i>Austin, Texas</p>
                                            <h3 className="followers-title">{id}</h3>
                                        </div>
                                    </div>
                                
                        ))): (
                            <div>
                                <h1>{name}</h1>
                                <p>{id}</p>
                                <img src={avatar} alt="" />
                            </div>
                        )}
                                </div>
                            </div>
                        </div>
                        </div>
                    
                </>
            </>

        )
    }
}
