import React from "react";
import Link from 'next/link';
import GetLink from "../SharedComponents/DynamicRouter";
import "../style.css";

function MyComponent(){
    return(
        <div>
        <p>Hello from Next.js!</p>
            <Link href='/About'>
                <a>About</a>
            </Link>

            <p>A GetLink attempt</p>
            <GetLink title='Page 1' 
                Disp='page-1'
                Class="img p1"></GetLink>
            <GetLink title='Page 2' 
                Disp='page-2'
                Class="img p2"></GetLink>
            <GetLink title='Page 3' 
                Disp='page-3'
                Class="img p3"></GetLink>        
        </div>
    );
}

export default MyComponent;