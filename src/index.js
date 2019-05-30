import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import moment from "moment";
import PropTypes from "prop-types";

function Avatar() {
  return (
    <img
      src="https://www.gravatar.com/avatar/e3c98513bc5aef34bab73b8aaf4ad986"
      className="avatar"
      alt="avatar"
    />
  );
}

const Time = ({ saa }) => <span className="time">{moment(saa).fromNow()}</span>;
const ReplyButton = () => <i className="fa fa-reply reply-button" />;
function getRetweetCount(count) {
  if (count > 0) {
    return <span className="retweet-button">{count}</span>;
  } else {
    return null;
  }
}
const RetweetButton = ({ count }) => {
  return (
    <span className="retweet-button">
      <i className="fa fa-retweet retweet-button" />
      {getRetweetCount(count)}
    </span>
  );
};
const LikeButton = ({ count }) => {
  return (
    <span className="like-button">
      <i className="fa fa-heart like-button" />
      {count > 0 && <span className="like-button">{count}</span>}
    </span>
  );
};
const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

const Message=({ ujumbe }) =>(
   <div className="message">{ujumbe}</div>
);

Message.propTypes = {
  ujumbe: PropTypes.string.isRequired
};


function NameWithHandle({ mzito }) {
  const { name, handle } = mzito;
  return (
    <span className="name-with-handle">
      <span className="name">{name}</span>
      <span className="handle">{handle}</span>
    </span>
  );
}

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar picha={tweet.gravatar} />
      <div className="content">
        <NameWithHandle mzito={tweet.author} />
        <Time saa={tweet.timestamp} />
        <Message ujumbe={tweet.message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

NameWithHandle.propTypes = {
  mzito:PropTypes.shape({
    name: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired
  }).isRequired
};

var testTweet = {
  message:"kijana fupi round" ,
  gravatar: "xyz",
  author: {
    handle: "carEnthusiast",
    name: "Bob"
  },
  likes: 2,
  retweets: 3,
  timestamp: "2019-04-30 21:24:37"
};

ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector("#root"));








