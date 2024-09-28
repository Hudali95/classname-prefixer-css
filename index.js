
const csstree = require('css-tree');
const path = require('path');
const fs = require('fs');

function loader(source) {
    const options = this.getOptions();
    const prefix = options.prefix || 'app'; // Default to 'app' if no prefix is provided

    // Parse the CSS into an AST
    const ast = csstree.parse(source);

    // Function to prefix class selectors
    csstree.walk(ast, {
        visit: 'ClassSelector',
        enter(node) {
            // Prefix the class name
            node.name = `${prefix}-${node.name}`;
        }
    });

    // Generate the modified CSS from the AST
    const modifiedCSS = csstree.generate(ast);


    // Return the modified CSS
    return modifiedCSS;
}

exports.default = loader;
module.exports = exports['default'];
