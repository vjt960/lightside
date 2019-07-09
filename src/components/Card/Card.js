import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = (props) => {
  let { data, type, name, favorited, toggle } = props;
  data = data.slice(0, (data.length - 3))
  const dataKeys = data.map((dataKey, index) => {
    return (
      <tr key={index}>
        <td>{dataKey[0].toUpperCase()}</td>
        <td>{dataKey[1]}</td>
      </tr>
    );
  });

  return (
    <article>
      <header className='card-header'>
        <button className={`fave-toggle-btn toggle-${favorited}`} onClick={() => toggle(type, name)}><span>X</span></button>
      </header>
      <table>
        <tbody>
          { dataKeys }
        </tbody>
      </table>
    </article>
  )
}

Card.propTypes = {
  toggle: PropTypes.func.isRequired, 
  type: PropTypes.string.isRequired, 
  name: PropTypes.string.isRequired, 
  favorited: PropTypes.bool.isRequired, 
  data: PropTypes.array.isRequired
}

export default Card;

