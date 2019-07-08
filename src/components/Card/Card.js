import React from 'react';
import './Card.scss';

const Card = (props) => {
  let { data, type, name, favorited, toggle } = props;
  data = data.slice(0, (data.length - 3))
  const dataKeys = data.map(dataKey => {
    return (
      <tr>
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

export default Card;

