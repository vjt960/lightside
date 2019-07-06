import React from 'react';
import './Card.scss';

const Card = (props) => {
  let { data } = props;
  data = data.slice(0, (data.length - 2))
  const dataKeys = data.map(dataKey => {
    console.log(dataKey);
    return (
      <tr>
        <td>{dataKey[0]}</td>
        <td>{dataKey[1]}</td>
      </tr>
    )
  })

  return (
    <article>
      <table>
        <tbody>
          { dataKeys }
        </tbody>
      </table>
    </article>
  )
}

export default Card;