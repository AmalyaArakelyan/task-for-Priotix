import React, { useEffect } from "react";
import {connect} from "react-redux";
import { withRouter } from "react-router";
//Components
import List from "./List.js"
import Error from "./Error.js"
//Actions
import {searchTournament} from "../../redux/Tournament/TournamentAction.js"

function Result(props) {
    const { keyword , location, searchTournament, error, searchResult} = props
    
    useEffect(() => {
        searchTournament()
    }, [keyword])
    
    return (
        <div className="result">
            {searchResult && searchResult.length ?
                <List/>
                : <Error error={error}/>
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        keyword:state.search.keyword,
        searchResult:state.tournament.searchResult,
        location:state.routing,
        error:state.tournament.error,
    };
};

const mapStateToAction = dispatch => {
    return {
        searchTournament: key => dispatch(searchTournament()),
    };
};

export default connect(mapStateToProps, mapStateToAction)(withRouter(Result));