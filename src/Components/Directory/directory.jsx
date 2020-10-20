import MenuItem from '../menu-item/menu-item';
import React from 'react';
import './directory.style.scss';



class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: "Hats",
                    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
                    id: 1
                },
                {
                    title: "Jackets",
                    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
                    id: 2
                },
                {
                    title: "Sneakers",
                    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
                    id: 3
                },
                {
                    title: "Womens",
                    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
                    id: 4
                },
                {
                    title: "Mens",
                    imageUrl: "https://i.ibb.co/R70vBrQ/mens.png",
                    id: 5
                }
            ]
        }
    }

    render() {
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ title, imageUrl, id }) => (
                        <MenuItem key={id} title={title} />
                    ))
                }
            </div>
        );
    }
}


export default Directory;