import React, { Component } from 'react'

class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             items: [],
             isLoaded: false,
             search: '',
             team: '',
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
        var fantasyTeam = this.state.team;

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
            return <div>Loading...</div>
        }
        else {

            return (
                <div>
                    <h1>Squad Builder</h1>
                    <form>

                        

                        <input type="text" value={search} onChange={this.handleSearch} placeholder="Search for player or team..."></input>

                        <button type="button" onClick={this.saveFantasyTeam}>Salva</button>

                        <select id="team" onChange={this.handleChange}>
                            <option selected>Scegli</option>
                            <option key="team1" value="team1">LaSquadraUno</option>
                            <option key="team2" value="team2">LaSquadraDue</option>
                        </select>

                        {/* Portieri */}

                        <h2>Portieri</h2>

                        <select id="por1" onChange={this.handleChange}>
                            <option selected>Scegli</option>
                            { portieri.filter( item => (
                                item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                )).map(item =>(
                                    <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                    ))
                                }
                        </select>

                        <select id="por2" onChange={this.handleChange}>
                            <option selected>Scegli</option>
                            { portieri.filter( item => (
                                item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                )).map(item =>(
                                    <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                    ))
                                }
                        </select>

                        <select id="por3" onChange={this.handleChange}>
                            <option selected>Scegli</option>
                            { portieri.filter( item => (
                                item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                )).map(item =>(
                                    <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                    ))
                                }
                        </select>

                        {/* Difensori */}

                        <h2>Difensori</h2>

                        <select id="dif1" onChange={this.handleChange}>
                            <option selected>Scegli</option>
                            { difensori.filter( item => (
                                item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                )).map(item =>(
                                    <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                    ))
                                }
                        </select>

                        <select id="dif2" onChange={this.handleChange}>
                            <option selected>Scegli</option>
                            { difensori.filter( item => (
                                item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                )).map(item =>(
                                    <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                    ))
                                }
                        </select>

                        <select id="dif3" onChange={this.handleChange}>
                            <option selected>Scegli</option>
                            { difensori.filter( item => (
                                item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                )).map(item =>(
                                    <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                    ))
                                }
                        </select>

                        <select id="dif4" onChange={this.handleChange}>
                            <option selected>Scegli</option>
                            { difensori.filter( item => (
                                item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                )).map(item =>(
                                    <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                    ))
                                }
                        </select>

                        <select id="dif5" onChange={this.handleChange}>
                            <option selected>Scegli</option>
                            { difensori.filter( item => (
                                item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                )).map(item =>(
                                    <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                    ))
                                }
                        </select>

                        <select id="dif6" onChange={this.handleChange}>
                            <option selected>Scegli</option>
                            { difensori.filter( item => (
                                item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                )).map(item =>(
                                    <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                    ))
                                }
                        </select>

                        <select id="dif7" onChange={this.handleChange}>
                            <option selected>Scegli</option>
                            { difensori.filter( item => (
                                item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                )).map(item =>(
                                    <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                    ))
                                }
                        </select>

                        <select id="dif8" onChange={this.handleChange}>
                            <option selected>Scegli</option>
                            { difensori.filter( item => (
                                item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                )).map(item =>(
                                    <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                    ))
                                }
                        </select>

                        {/* Centrocampisti */}

                        <h2>Centrocampisti</h2>

                        <select id="cen1" onChange={this.handleChange}>
                            <option selected>Scegli</option>
                            { centrocampisti.filter( item => (
                                item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                )).map(item =>(
                                    <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                    ))
                                }
                        </select>

                        <select id="cen2" onChange={this.handleChange}>
                            <option selected>Scegli</option>
                            { centrocampisti.filter( item => (
                                item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                )).map(item =>(
                                    <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                    ))
                                }
                        </select>

                        <select id="cen3" onChange={this.handleChange}>
                            <option selected>Scegli</option>
                            { centrocampisti.filter( item => (
                                item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                )).map(item =>(
                                    <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                    ))
                                }
                        </select>

                        <select id="cen4" onChange={this.handleChange}>
                            <option selected>Scegli</option>
                            { centrocampisti.filter( item => (
                                item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                )).map(item =>(
                                    <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                    ))
                                }
                        </select>

                        <select id="cen5" onChange={this.handleChange}>
                            <option selected>Scegli</option>
                            { centrocampisti.filter( item => (
                                item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                )).map(item =>(
                                    <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                    ))
                                }
                        </select>

                        <select id="cen6" onChange={this.handleChange}>
                            <option selected>Scegli</option>
                            { centrocampisti.filter( item => (
                                item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                )).map(item =>(
                                    <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                    ))
                                }
                        </select>

                        <select id="cen7" onChange={this.handleChange}>
                            <option selected>Scegli</option>
                            { centrocampisti.filter( item => (
                                item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                )).map(item =>(
                                    <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                    ))
                                }
                        </select>

                        <select id="cen8" onChange={this.handleChange}>
                            <option selected>Scegli</option>
                            { centrocampisti.filter( item => (
                                item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                )).map(item =>(
                                    <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                    ))
                                }
                        </select>

                        {/* Attaccanti */}

                        <h2>Attaccanti</h2>

                        <select id="att1" onChange={this.handleChange}>
                            <option selected>Scegli</option>
                            { attaccanti.filter( item => (
                                item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                )).map(item =>(
                                    <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                    ))
                                }
                        </select>

                        <select id="att2" onChange={this.handleChange}>
                            <option selected>Scegli</option>
                            { attaccanti.filter( item => (
                                item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                )).map(item =>(
                                    <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                    ))
                                }
                        </select>

                        <select id="att3" onChange={this.handleChange}>
                            <option selected>Scegli</option>
                            { attaccanti.filter( item => (
                                item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                )).map(item =>(
                                    <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                    ))
                                }
                        </select>

                        <select id="att4" onChange={this.handleChange}>
                            <option selected>Scegli</option>
                            { attaccanti.filter( item => (
                                item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                )).map(item =>(
                                    <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                    ))
                                }
                        </select>

                        <select id="att5" onChange={this.handleChange}>
                            <option selected>Scegli</option>
                            { attaccanti.filter( item => (
                                item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                )).map(item =>(
                                    <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                    ))
                                }
                        </select>

                        <select id="att6" onChange={this.handleChange}>
                            <option selected>Scegli</option>
                            { attaccanti.filter( item => (
                                item.team.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())
                                )).map(item =>(
                                    <option key={item._id} value={item._id}>{ item.name + ' (' + item.team + ')'}</option>
                                    ))
                                }
                        </select>

                    </form>
                </div>
            )

        }
        
    }
}

export default App;