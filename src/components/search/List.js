import React from 'react';
//Bootstrap
import { ListGroup} from 'react-bootstrap';
//Components
import Item from "./Item.js"

export default function List(props) {
    const {list, select, selected, deleteItem} = props
    
    debugger
    return (
        <div className="list">
            <ListGroup>
                {
                    list.map(item =>{
                        return <ListGroup.Item key={item.id} >
                            <Item
                                item={item}
                                added={!!selected[item.id]}
                                select={select}
                                deleteItem={deleteItem}
                            />
                        </ListGroup.Item>
                        
                    })
                }
            </ListGroup>
        </div>
    );
}
