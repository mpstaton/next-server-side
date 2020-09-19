import React from "react";
import Link from 'next/link'

/*
This propos should be passed in a way that is 
findable through props.url.query.content
*/

function GetLink(props) {
    return (
        <div>
            <Link href={`/SecondPage?content=${props.title}`}>
                <a>{props.title}</a>
            </Link>
            
        </div>
    );
}

export default GetLink;