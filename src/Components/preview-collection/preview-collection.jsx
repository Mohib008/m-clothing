
import React from 'react';
import './preview-collection.scss';



const PreviewCollection = ({ title, items }) => (
    <div className="previewcollection">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items.map(item => (
               <div key={item.id}>{item.name}</div>
             ))}
        </div>
    </div>
)


export default PreviewCollection;