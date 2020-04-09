import React, { Component } from "react";
import axios from "axios";
import QuoteBox from "./QuoteBox.jsx";
import Button from "./Button.jsx";
import ShareButton from "./ShareButton.jsx";
import "../Styles.css/QuoteMachine.css";


class QuoteMachine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: "",
      author: ""
    };
  }

  componentDidMount() {
    this.getQuote();
  }

  getQuote() {
    axios
      .get(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
      .then(res => {
        let data = res.data.quotes;
        let quoteN = Math.floor(Math.random() * data.length);
        let aleatorio = data[quoteN];

        this.setState({
          quote: aleatorio["quote"],
          author: aleatorio["author"]
        });
      });
  }

  NewQuote = () => {
    this.getQuote();
  };

  render() {
    const { quote, author } = this.state;

    return (
        
      <div className="QuoteMachine ">
        <h1 className="title">Random Quote Machine</h1>

        <div id="quote-box">
          <QuoteBox quote={quote} author={author} />

          <div id="buttons">
            <ShareButton quote = {quote}
            author = {author} />
            <Button onClick={this.NewQuote} title="New Quote" />
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteMachine;
