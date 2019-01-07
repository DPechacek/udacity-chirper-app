import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddTweet } from "../actions/tweets";

class NewTweet extends Component {
    state = {
        text: ''
    };

    handleChange = (event) => {
        const text = event.target.value;

        this.setState(() => ({
            text: text
        }))
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { text } = this.state;
        const { dispatch, id } = this.props;

        dispatch(handleAddTweet(text, id));

        this.setState(() => ({
            text: ''
        }))
    }

    render() {
        const { text } = this.state;

        /* Redirect to the home view if submitted */

        const tweetLeft = 280 - text.length;

        return (
            <div>
                <h3 className='center'>Compose New Tweet</h3>
                <form className='new-tweet' onSubmit={this.handleSubmit}>
                    <textarea placeholder="What's happening?"
                              value={text}
                              onChange={this.handleChange}
                              className='textarea'
                              maxLength={280} />
                    {tweetLeft <= 100 && (
                        <div className='tweet-length'>
                            {tweetLeft}
                        </div>
                    )}

                    <button className='btn' type='submit' disabled={text.length === 0}>Submit</button>
                </form>
            </div>
        )
    }
}

export default connect()(NewTweet);