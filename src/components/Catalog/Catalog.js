import React from "react";
import PropTypes from "prop-types";
import "./Catalog.scss";
import Card from "../Card/Card";

const Catalog = props => {
  const { counter } = props;
  let data = props.data.map(obj => {
    return (
      <Card
        toggle={props.toggle}
        type={obj.type}
        name={obj.name}
        key={obj.name + "-card"}
        favorited={obj.favorited}
        data={Object.entries(obj)}
      />
    );
  });

  return (
    <section className="catalog">
      {counter > 0 ? (
        data
      ) : (
        <h2 className="favorites-placeholder">Add some favorites!</h2>
      )}
    </section>
  );
};

Catalog.propTypes = {
  toggle: PropTypes.func,
  counter: PropTypes.number.isRequired,
  data: PropTypes.array
};

export default Catalog;
