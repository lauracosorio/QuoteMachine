import React from 'react';

const Twitter = ({author, quote}) => {

    return (
        <>
        <a
              id="tweet-quote"
              href={`https://twitter.com/intent/tweet?text= ${quote} ${author}`}
              target="_blank"
              title="Post this quote on twitter!"
            >
              <span>
                <i className="fab fa-twitter-square fa-2x"/>
              </span>
            </a>
        </>

    )
}

export default Twitter;