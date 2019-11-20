import React from 'react';

function ContentDisplay(props){
    const displayTitle=(title)=>{
        if(title){
         return (
         <h3 className="center">{title}</h3>
         );
        }
        return null;
    }
    const displayContent=(content)=>{
        if(content){
         return (
         <div className="box" dangerouslySetInnerHTML={{__html: content}} />
         );
        }
        return null;
    }
    return(
            <div className="container"    >
                {displayTitle(props.content.title)}
                {displayContent(props.content.description)}
            </div>
        )
}

export default ContentDisplay;