/**
 * Lund-Size
 * ---------
 *
 * Written by oskikiboy
 * Chinese code fixed by TTtie
 */

const figlet = require("util").promisify(require("figlet"));
const cluster = require("cluster");
const colors = require("colors");
colors.enabled
var x = 0;

const spamme = () => {
    setTimeout(function () {
        let infinite = 2;
        for (null; x < infinite; x++) {
            infinite++;

            if (process.argv.includes("--ascii")) {
                asciify()
            } else {
                if (process.argv.includes("--nonum")) {
                    console.log(`${determine(175)}`)
                } else {
                    console.log(`No. ${x}\n\t${determine(175)}`)
                }
            }

        }

    }, 5000);
}

const countdown = () => {
    setTimeout(function () {
        console.log("3".red)
        setTimeout(function () {
            console.log("2".yellow)
            setTimeout(function () {
                console.log("1".green)
                setTimeout(function () {
                    console.log("GO".bold.white)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}

const determine = amount => {
    if (process.argv.includes("--china")) {
        return `8=D`;
    } else {
        return `8${"=".repeat(Math.floor(Math.random() * amount) + 1)}D`
    }
}

const asciify = () => {
    figlet(determine(12)).then(data => console.log(`Your lund length is: \n${data}`)).catch(err => {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    });
}
const main = () => {
    if (process.argv.includes("--spam")) {

        console.log("Running in " + "spam".red + " mode")

        countdown()

        spamme()

    } else if (process.argv.includes("--superspam")) { 

        console.log("Running in " + "super".bgRed + " " + "spam".red + " mode")

        countdown()

        spamme()

        spamme()

        spamme()

        spamme()
    } else {

        if (process.argv.includes("--ascii")) {
            asciify()
        } else {
            console.log(`Your lund length is: \n\t${determine(12)}`)
        }
    }
}

const main_promised = require("util").promisify(main)


main_promised().then(oWo => {
    console.log("if you see this text, something is wrong", oWo)
}).catch(e => {
    console.error(`Error determening penis size, ${err}`)
    console.debug(`Error Stacktrace, ${err.stack}`)
})
