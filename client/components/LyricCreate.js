import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import mutation from '../mutations/createLyric';

class LyricCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { content: '' }
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.mutate({
      variables: {
        content: this.state.content,
        songId: this.props.songId
      }
    }).then(() => this.setState({ content: '' }));
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>Add a lyric</label>
        <input
          value={this.state.content}
          onChange={e => this.setState({ content: e.target.value })}/>
      </form>
    );
  }
}

export default graphql(mutation)(LyricCreate);
