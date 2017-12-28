/**
 * Lund-Size
 * ---------
 *
 * Written by oskikiboy
 */

const figlet = require("figlet");

const determine = () => {
    if (process.argv.includes("--china")) {
        return `8=D`;
    } else {
        return `8${"=".repeat(Math.floor(Math.random() * 12) + 1)}D`
    }
}

const asciify = () => {
    figlet(determine(), function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(`Your lund length is: \n${data}`)
    });
}

try {

    if (process.argv.includes("--ascii")) {
        asciify()
    } else {
        console.log(`Your lund length is: \n\t${determine()}`)
    }

} catch (err) {
    console.error(`Error determening penis size, ${err}`)
    console.debug(`Error Stacktrace, ${err.stack}`)
}
