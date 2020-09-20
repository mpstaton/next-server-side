import React from 'react';
import axios from 'axios';
import '../style.css';

export default class extends React.Component {
/*
getInitialProps() method gets the initial list of Github users and returns the data that is set as props for the page. 
These props can be accessed using “this.props” and are not editable.
*/
    static async getInitialProps() {
        try {
            const res = await axios.get('https://api.github.com/users');
            return { data: res.data }
        } catch (e) {
            return {error:e}
        }
    }

/*
constructor() method initializes the state object with the values passed as props. 
This state object will be updated every time we fetch GitHub user details for a specific user requested.
*/

    constructor(props) {
        super(props);
        this.state = { data: props.data,
                       error: props.error };
    }

/*
GetUser() method handles the click event of the button and makes an API call every time the user requests details for a specific GitHub user. 
The user id for the GitHub is fetched from the input textbox and is sent as a parameter to the API call. 
The state object is updated with the data returned by the API call. 
As soon as the state object is updated, React re-renders the view.
*/
    
    GetUser = async () => {
        try {
            const res = await axios.get('https://api.github.com/users/' + 
                                    document.getElementById('inputTextbox').value)
            this.setState({
                data: [res.data],
                error: null
            });
        } catch (e) {
            this.setState({
                data: null,
                error: e
            });
        }
    }

    render() {
        if (this.props.error) {
            return (
                <div>
                    Error: {this.props.error.message}
                </div>
            );
        }
        else {
            return (
                <div>
                    <h1>Github Users</h1>
                    <br />
                    {this.props.data.map((item, index) => (
                        <div key={index} className='UserBlock'>
                            <img src={item.avatar_url}
                                alt='User Icon'>
                            </img>
                            <div className="UserDetails">
                                <p>Username: {item.login}</p>
                                <p>ID: {item.id}</p>
                            </div>
                        </div>
                    ))}
                </div>
            );
        }
    }
}