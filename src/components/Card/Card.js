import React from 'react';
import './Card.scss';

const Card = (props) => {
  let { data, type, name, toggle } = props;
  data = data.slice(0, (data.length - 3))
  const dataKeys = data.map(dataKey => {
    return (
      <tr>
        <td>{dataKey[0]}</td>
        <td>{dataKey[1]}</td>
      </tr>
    );
  });

  return (
    <article>
      <table>
        <tbody>
          { dataKeys }
        </tbody>
      </table>
      <button onClick={() => toggle(type, name)}>x</button>
    </article>
  )
}

export default Card;