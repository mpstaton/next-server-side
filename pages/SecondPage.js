/*
This page should dynamically change 
based by the parameters received by props
*/

export default (props) => (
    <h1>
        Welcome to {props.url.query.content}
    </h1>
);