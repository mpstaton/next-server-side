import React from "react";
import Link from 'next/link'

function GetLink(props) {
    return (
        <div>
            <Link href="">
                <a>{props.title}</a>
            </Link>
            
        </div>
    );
}

export default GetLink;