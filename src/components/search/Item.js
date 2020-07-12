import React, {useState} from 'react';
import {IMAGE} from '../../config/config.json'
//icons
import check from '../../assets/icons/check.png'
import noCheck from '../../assets/icons/delete.png'

export default function List(props) {
    const {item, added, deleteItem} = props
    
    return (
        <div className="item">
            {item.images ?<div className="image">
                <img src={`${IMAGE}${item.images.square?  item.images.square.filePath: item.images.banner ? item.images.banner.filePath : ''}`} />
            </div>
             :null
            }
            <div className="info">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
            </div>
            {added? <div className="added">
                    <img src={check} />
                </div>
                :null
            }
            {deleteItem?
                <div className="added" onClick={() => deleteItem(item.id)}>
                    <img src={noCheck} />
                </div>
                :null
            }
            
            
        </div>
    );
}
