import '../Styles/Block.css';
import React from 'react';

const Block = (props) => {
    /* TODO */
    const posts = {
        background: props.color
    }

    return (
        // ignore this data-testid, it's purely for testing :)
        <div data-testid='main-component'>
            {/* You'll notice pre-assigned class names 'post' and 'caption', 
            we took care of the basic block styling! 
            If curious, check out the css in Styles/Block.css */}
            {/* Refer to hint if stuck on how to color the posts */}
            <div className="post" style={posts}></div>
            <div className="caption">
                <p>{props.color}</p>
            </div>
        </div>
    );
}

export default Block;