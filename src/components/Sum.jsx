import PropTypes from 'prop-types'

const Sum = (params) => {

  console.log("params=>", params)
  return (
    <div>
      la suma es {params.a + params.b}
      <button onClick={params.fn}>press please</button>
    </div>
  );
}

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

Sum.defaultProps = {
  a: 10,
  b: 50,
};

export default Sum;
