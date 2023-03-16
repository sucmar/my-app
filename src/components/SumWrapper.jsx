import PropTypes from 'prop-types'
import Sum from './Sum';

const SumWrapper = (params) => {

  const sum = () => {
    console.log("sum from parent")
  }

  console.log("params=>", params)
  return (
    <>
      <Sum a={25} b={5} fn={sum} />
      <Sum a={5} b={5} fn={sum} />
    </>
  );
}

export default SumWrapper;
