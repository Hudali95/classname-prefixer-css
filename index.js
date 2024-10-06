const csstree = require('css-tree');
const path = require('path');
const fs = require('fs');

const outputPath1 = path.resolve(__dirname, '..', 'css-classnames.txt'); // Adjusted path to point to the root folder

function loader(source) {
    const options = this.getOptions();
    const prefix = options.prefix || 'app'; // Default to 'app' if no prefix is provided

    // Get the filename from the resource path
    const fileName = path.basename(this.resourcePath);

    // Check if the filename is 'imported-styles.scss' or any other file to ignore
    if (options.exclude.includes(fileName)) {
        return source; // Return the original source without any modification
    }

    // Parse the CSS into an AST
    const ast = csstree.parse(source);

    // Function to prefix class selectors
    csstree.walk(ast, {
        visit: 'ClassSelector',
        enter(node) {
            if (options.enableDebugging) fs.appendFileSync(outputPath1, `${node.name}"\n\n`);

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
