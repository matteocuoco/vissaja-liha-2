import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             items: [],
             isLoaded: false,
             search: '',
             por1: '',
             por2: '',
             por3: '',
             dif1: '',
             dif2: '',
             dif3: '',
             dif4: '',
             dif5: '',
             dif6: '',
             dif7: '',
             dif8: '',
             cen1: '',
             cen2: '',
             cen3: '',
             cen4: '',
             cen5: '',
             cen6: '',
             cen7: '',
             cen8: '',
             att1: '',
             att2: '',
             att3: '',
             att4: '',
             att5: '',
             att6: '',
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.saveFantasyTeam = this.saveFantasyTeam.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
    
    componentDidMount() {
        fetch('https://cors-anywhere.herokuapp.com/https://vissajaliha-ab7d.restdb.io/rest/players', {
            headers: 
            { 'cache-control': 'no-cache',
              'x-apikey': 'ae3d7d1087dfcd2c6a5a747cfe45d176afa18' }
        })
            .then( res => res.json() )
            .then( json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    }

    handleChange(event) {
        var getState = event.target.id;
        var getValue = event.target.value;
        var stateObj = {};
        stateObj[getState] = getValue;
        this.setState(stateObj);
    }

    handleSearch(event) {
        this.setState({
            search: event.target.value
        });
    }

    saveFantasyTeam() {
    
        var arrayId = [
            this.state.por1,
            this.state.por2,
            this.state.por3,
            this.state.dif1,
            this.state.dif2,
            this.state.dif3,
            this.state.dif4,
            this.state.dif5,
            this.state.dif6,
            this.state.dif7,
            this.state.dif8,
            this.state.cen1,
            this.state.cen2,
            this.state.cen3,
            this.state.cen4,
            this.state.cen5,
            this.state.cen6,
            this.state.cen7,
            this.state.cen8,
            this.state.att1,
            this.state.att2,
            this.state.att3,
            this.state.att4,
            this.state.att5,
            this.state.att6
        ];
        var newPlayers = [];
        var fantasyTeam = this.props.user;

        arrayId.map( function(item) {
            var playerObj = {
                player_id: item,
                fantasyteam: fantasyTeam
            }
            newPlayers.push(playerObj);
        });

        newPlayers.map( function(obj) {
            var request = require("request");

            var options = { method: 'POST',
                url: 'https://vissajaliha-ab7d.restdb.io/rest/fantasyteam',
                headers: 
                { 'cache-control': 'no-cache',
                'x-apikey': 'ae3d7d1087dfcd2c6a5a747cfe45d176afa18',
                'content-type': 'application/json' },
            
                body: obj,
                
                json: true };
            /*
            request(options, function (error, response, body) {
                if (error) throw new Error(error);
            
                console.log(body);
            });
            */

            request(options);
        }); 

    }

    render() {

        var { isLoaded, items, search } = this.state;

        var portieri = items.filter( item => (
            item.role.includes('P')
        ));

        var difensori = items.filter( item => (
            item.role.includes('D')
        ));

        var centrocampisti = items.filter( item => (
            item.role.includes('C')
        ));

        var attaccanti = items.filter( item => (
            item.role.includes('A')
        ));

        if(!isLoaded) {
            return <p>Loading...</p>
        }
        else {

            return (
                <div>
                    <form>
                        <input id="search" type="text" value={search} onChange={this.handleSearch} placeholder="Search for player or team..."></input>

                        <button type="button" class="btn btn-primary" onClick={this.saveFantasyTeam}>Salva</button>

                        {/* Portieri */}                        
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text blue" for="por1">P</label>
                            </div>
                            <select className="custom-select" id="por1" onChange={this.handleChange}>
                                <option selected>Scegli</option>
                                { portieri.filter( item => (
                                    item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                    )).map(item =>(
                                        <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                        ))
                                    }
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text blue" for="por2">P</label>
                            </div>
                            <select className="custom-select" id="por2" onChange={this.handleChange}>
                                <option selected>Scegli</option>
                                { portieri.filter( item => (
                                    item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                    )).map(item =>(
                                        <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                        ))
                                    }
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text blue" for="por3">P</label>
                            </div>
                            <select className="custom-select" id="por3" onChange={this.handleChange}>
                                <option selected>Scegli</option>
                                { portieri.filter( item => (
                                    item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                    )).map(item =>(
                                        <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                        ))
                                    }
                            </select>
                        </div>

                        {/* Difensori */}
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text orange" for="dif1">D</label>
                            </div>
                            <select className="custom-select" id="dif1" onChange={this.handleChange}>
                                <option selected>Scegli</option>
                                { difensori.filter( item => (
                                    item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                    )).map(item =>(
                                        <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                        ))
                                    }
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text orange" for="dif2">D</label>
                            </div>
                            <select className="custom-select" id="dif2" onChange={this.handleChange}>
                                <option selected>Scegli</option>
                                { difensori.filter( item => (
                                    item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                    )).map(item =>(
                                        <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                        ))
                                    }
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text orange" for="dif3">D</label>
                            </div>
                            <select className="custom-select" id="dif3" onChange={this.handleChange}>
                                <option selected>Scegli</option>
                                { difensori.filter( item => (
                                    item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                    )).map(item =>(
                                        <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                        ))
                                    }
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text orange" for="dif4">D</label>
                            </div>
                            <select className="custom-select" id="dif4" onChange={this.handleChange}>
                                <option selected>Scegli</option>
                                { difensori.filter( item => (
                                    item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                    )).map(item =>(
                                        <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                        ))
                                    }
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text orange" for="dif5">D</label>
                            </div>
                            <select className="custom-select" id="dif5" onChange={this.handleChange}>
                                <option selected>Scegli</option>
                                { difensori.filter( item => (
                                    item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                    )).map(item =>(
                                        <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                        ))
                                    }
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text orange" for="dif6">D</label>
                            </div>
                            <select className="custom-select" id="dif6" onChange={this.handleChange}>
                                <option selected>Scegli</option>
                                { difensori.filter( item => (
                                    item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                    )).map(item =>(
                                        <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                        ))
                                    }
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text orange" for="dif7">D</label>
                            </div>
                            <select className="custom-select" id="dif7" onChange={this.handleChange}>
                                <option selected>Scegli</option>
                                { difensori.filter( item => (
                                    item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                    )).map(item =>(
                                        <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                        ))
                                    }
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text orange" for="dif8">D</label>
                            </div>
                            <select className="custom-select" id="dif8" onChange={this.handleChange}>
                                <option selected>Scegli</option>
                                { difensori.filter( item => (
                                    item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                    )).map(item =>(
                                        <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                        ))
                                    }
                            </select>
                        </div>

                        {/* Centrocampisti */}
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text green" for="cen1">C</label>
                            </div>
                            <select className="custom-select" id="cen1" onChange={this.handleChange}>
                                <option selected>Scegli</option>
                                { centrocampisti.filter( item => (
                                    item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                    )).map(item =>(
                                        <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                        ))
                                    }
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text green" for="cen2">C</label>
                            </div>
                            <select className="custom-select" id="cen2" onChange={this.handleChange}>
                                <option selected>Scegli</option>
                                { centrocampisti.filter( item => (
                                    item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                    )).map(item =>(
                                        <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                        ))
                                    }
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text green" for="cen3">C</label>
                            </div>
                            <select className="custom-select" id="cen3" onChange={this.handleChange}>
                                <option selected>Scegli</option>
                                { centrocampisti.filter( item => (
                                    item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                    )).map(item =>(
                                        <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                        ))
                                    }
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text green" for="cen4">C</label>
                            </div>
                            <select className="custom-select" id="cen4" onChange={this.handleChange}>
                                <option selected>Scegli</option>
                                { centrocampisti.filter( item => (
                                    item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                    )).map(item =>(
                                        <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                        ))
                                    }
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text green" for="cen5">C</label>
                            </div>
                            <select className="custom-select" id="cen5" onChange={this.handleChange}>
                                <option selected>Scegli</option>
                                { centrocampisti.filter( item => (
                                    item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                    )).map(item =>(
                                        <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                        ))
                                    }
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text green" for="cen6">C</label>
                            </div>
                            <select className="custom-select" id="cen6" onChange={this.handleChange}>
                                <option selected>Scegli</option>
                                { centrocampisti.filter( item => (
                                    item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                    )).map(item =>(
                                        <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                        ))
                                    }
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text green" for="cen7">C</label>
                            </div>
                            <select className="custom-select" id="cen7" onChange={this.handleChange}>
                                <option selected>Scegli</option>
                                { centrocampisti.filter( item => (
                                    item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                    )).map(item =>(
                                        <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                        ))
                                    }
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text green" for="cen8">C</label>
                            </div>
                            <select className="custom-select" id="cen8" onChange={this.handleChange}>
                                <option selected>Scegli</option>
                                { centrocampisti.filter( item => (
                                    item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                    )).map(item =>(
                                        <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                        ))
                                    }
                            </select>
                        </div>

                        {/* Attaccanti */}
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text red" for="att1">A</label>
                            </div>
                            <select className="custom-select" id="att1" onChange={this.handleChange}>
                                <option selected>Scegli</option>
                                { attaccanti.filter( item => (
                                    item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                    )).map(item =>(
                                        <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                        ))
                                    }
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text red" for="att2">A</label>
                            </div>
                            <select className="custom-select" id="att2" onChange={this.handleChange}>
                                <option selected>Scegli</option>
                                { attaccanti.filter( item => (
                                    item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                    )).map(item =>(
                                        <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                        ))
                                    }
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text red" for="att3">A</label>
                            </div>
                            <select className="custom-select" id="att3" onChange={this.handleChange}>
                                <option selected>Scegli</option>
                                { attaccanti.filter( item => (
                                    item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                    )).map(item =>(
                                        <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                        ))
                                    }
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text red" for="att4">A</label>
                            </div>
                            <select className="custom-select" id="att4" onChange={this.handleChange}>
                                <option selected>Scegli</option>
                                { attaccanti.filter( item => (
                                    item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                    )).map(item =>(
                                        <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                        ))
                                    }
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text red" for="att5">A</label>
                            </div>
                            <select className="custom-select" id="att5" onChange={this.handleChange}>
                                <option selected>Scegli</option>
                                { attaccanti.filter( item => (
                                    item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                    )).map(item =>(
                                        <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                        ))
                                    }
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text red" for="att6">A</label>
                            </div>
                            <select className="custom-select" id="att6" onChange={this.handleChange}>
                                <option selected>Scegli</option>
                                { attaccanti.filter( item => (
                                    item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                    )).map(item =>(
                                        <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                        ))
                                    }
                            </select>
                        </div>
                    </form>
                </div>
            )

        }
        
    }
}

export default App;