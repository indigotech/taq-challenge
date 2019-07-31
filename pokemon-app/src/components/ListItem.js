import React from 'react';

class ListItem extends React.Component {
  render() {
    return(
      <div>
        <div>
          <div>{this.props.pokemon.image}</div>
          <div>
            <span>{this.props.pokemon.number} {this.props.pokemon.name}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ListItem;