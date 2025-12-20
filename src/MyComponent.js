import React from 'react';

/**
 * @param {Object} props
 * @param {string} [props.name='Guest'] - 사용자 이름
 * @param {React.ReactNode} props.children - 자식 요소 (필수)
 */
const MyComponent = ({ name, children }) => {
  return (
    <div>
      Hello, this is {name}! My Children: {children}
    </div>
  );
};

// class MyComponent extends React.Component {
//   render() {
//     const { name = 'Guest', children } = this.props;
//     return (
//       <div>
//         Hello, this is {name}! My Children: {children}
//       </div>
//     );
//   }
// }

export default MyComponent;
