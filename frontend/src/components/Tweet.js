import React, { Component } from 'react';

import like from '../like.svg';
import './Tweet.css';
import api from '../services/api';

export default class Tweet extends Component {
  handleLike = async () => {

    const { _id } = this.props.tweet;

    await api.post(`likes/${_id}`);
  };

  render() {
    const { tweet } = this.props;

    return (
      <li className="tweet">
        <strong>{tweet.autor}</strong>
        <p>{tweet.conteudo}</p>
        <button type="button" onClick={this.handleLike}>
          <img src={like} alt="like" />
          {tweet.likes}
        </button>
      </li>
    );
  }
}