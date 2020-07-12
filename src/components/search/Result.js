import React, { useEffect } from "react";
import {connect} from "react-redux";
import { withRouter } from "react-router";
//Components
import Item from "./Item.js"
import Error from "./Error.js"
//Actions
import {searchTournament, selectItem, deleteItem} from "../../redux/Tournament/TournamentAction.js"
import {ListGroup} from "react-bootstrap";


function Result(props) {
    const {
        keyword ,
        location,
        searchTournament,
        error,
        searchResult,
        selectItem,
        selected,
        deleteItem
    } = props
    
    useEffect(() => {
        searchTournament()
    }, [keyword])
    
    const select = (item) =>{
        if(!selected[item.id]){
            selectItem(item)
        }
    }
    
    return (
        <div className="result">
            {searchResult && searchResult.length ?
                <div className="list">
                    <ListGroup>
                        {
                            searchResult.map(item =>{
                                return <ListGroup.Item key={item.id} onClick={() => select(item)}>
                                    <Item
                                        item={item}
                                        added={!!selected[item.id]}
                                    />
                                </ListGroup.Item>
                    
                            })
                        }
                    </ListGroup>
                </div>
                : <Error error={error}/>
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        keyword:state.search.keyword,
        searchResult:state.tournament.searchResult,
        selected:state.tournament.selected,
        location:state.routing,
        error:state.tournament.error,
    };
};

const mapStateToAction = dispatch => {
    return {
        searchTournament: () => dispatch(searchTournament()),
        selectItem: (item) => dispatch(selectItem(item)),
        deleteItem: (id) => dispatch(deleteItem(id))
    };
};

export default connect(mapStateToProps, mapStateToAction)(withRouter(Result));