import React, { useEffect } from "react";
import {connect} from "react-redux";
import { withRouter } from "react-router";
//Actions
import {deleteItem} from "../../redux/Tournament/TournamentAction.js"
import {ListGroup} from "react-bootstrap";
//Components
import Item from "../search/Item.js";


function Tournament(props) {
    const {
        selected,
        deleteItem
    } = props
    
    const deleteSelected = (id) => {
        deleteItem(id)
    }
    
    const list = Object.values(selected)
    return (
        <div className="result">
            {list.length ?
                <div className="list">
                    <ListGroup>
                        {
                            list.map(item =>{
                                return <ListGroup.Item key={item.id} >
                                    <Item
                                        item={item}
                                        deleteItem={deleteSelected}
                                    />
                                </ListGroup.Item>
                    
                            })
                        }
                    </ListGroup>
                </div>
                : <h3 className="sub-title">No tournament selected</h3>
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        selected:state.tournament.selected,
    };
};

const mapStateToAction = dispatch => {
    return {
        deleteItem: (id) => dispatch(deleteItem(id))
    };
};

export default connect(mapStateToProps, mapStateToAction)(withRouter(Tournament));