import React from 'react';
import MetaTags from 'react-meta-tags';

function SeoTags(props){
    console.log(props);
    return(
    <MetaTags>
        <title>{props.MetaTags.title}</title>
        <meta name="description" content={props.MetaTags.description} />
        <meta property="keywords" content={props.MetaTags.keywords} />
    </MetaTags>
    )
}

export default SeoTags;





