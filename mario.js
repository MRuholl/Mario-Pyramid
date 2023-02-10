let numberOfRows = prompt("Height for the pyramid: ");
numberOfRows = parseInt(numberOfRows);

printPyramid(numberOfRows);
// TODO #2
// Take in user input for the height


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
    console.log("Uh oh... the pyramid is under construction.");
    console.log("Check back soon, our developers are hard at work as we speak!");

    // TODO #1
    // print that pyramid!
    let n = height;
    let string = "";
    for (let i = 1; i <= n; i++){
      for (let j = 0; j < n - i; j++){
        string += " ";
      }
      for (let k = 0; k < i; k++){
        string += "#";
      }
      string += "#\n";
    }
    console.log(string);
}
