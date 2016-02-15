# React Development Guidelines:

## React Tech Stack
1. Webpack - to build assets. It supports 'code-splitting', async loading of bundles, CSS modules and many other features.
2. Redux - implements a uni-directional data flow for app.
3. Babel - use es2015 now! you need to support IE8? no worries it works on that too! (with some minor caveats)
4. object-assign - an immutability helper (alternatively return new object using es2015 spread operator).
5. React-router - for client side routing
8. [univeral-fetch](https://github.com/Pitzcarraldo/universal-fetch) - for client/server side requests (which also supports IE8).
9. classnames - a helper to merge class names into classNames prop on components.

## React Guidelines
1. Create stateless components (or attempt to make React components as stateless as possible, especially if you are [constrained](http://jaketrent.com/post/react-stateless-components-missing/) by stateless components). Stateless components make testing various scenarios very easy. It leads to greater separation of concerns as complex logic or custom component methods are extracted out of the component. In Redux, the app state is managed via reducers. A stateless component looks like:

```
import React, { PropTypes } from 'react'

const TimeUnit = ({ value, label, show, color }) => {
  var output = show ? (
    <span className={`item ${color}`}>
      {value} {label}
    </span>
  ) : (<noscript></noscript>);
 return output
};

TimeUnit.propTypes = {
  value:  PropTypes.number,
  label:  PropTypes.string,
  show:   PropTypes.bool,
  color:  PropTypes.string.isRequired
};

export default TimeUnit;
```
2. Use CSS modules to style components (using webpack), this gives all the benefits of in-line styles along with support for media queries, pseudo selectors and animation keyframes that styling through CSS provides us. We use Post CSS (the babel of CSS) to provide a whole community of features like autoprefixer or other pre-processors like features (e.g. variables, mixins, extends/composes, nesting).
3. Use Context when you have need to pass prop values to non-immediate children.
4. Validate prop types
5. Use class syntax to define components or use the stateless component style (shown above). Define render function as last function on React component. Use higher order functions to replace [mixins](https://jsbin.com/boxoso/2/edit?html,js,output).
6. Use es2015 import/export rather than require/module.exports.
7. Use arrow functions rather than using function statement.

## Redux Guidelines
1. Reducer functions must be pure.
2. Use flat data structures for state or as flat as possible (there are also some performance benefits when used with the PureRenderMixin).
