/* // first step
const React = (() => {
  const useState = (initialValue) => {
    let state = initialValue;
    const setter = (newState) => {
      state = newState;
    };
    return [state, setter];
  };
  return {
    useState,
  };
})();
*/

/* // second step
const React = (() => {
  let state;

  const useState = (initialValue) => {
    if (state === undefined) state = initialValue;

    const setter = (newState) => {
      state = newState;
    };

    return [state, setter];
  };
  return {
    useState,
  };
})();
*/

// third step
const React = (() => {
  let state = [];
  let index = 0;

  const useState = (initialValue) => {
    let hookIndex = index;
    index++;

    if (state[hookIndex] === undefined) state[hookIndex] = initialValue;

    const setter = (newState) => {
      state[hookIndex] = newState;
    };

    return [state[hookIndex], setter];
  };
  return {
    useState,
  };
})();

////

const { useState } = React;

const Component = () => {
  const [count, setCount] = useState(1);

  console.log(count);

  setCount(2);
};
