# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.

* The user presses the 1 button.
* The onClick function executes the handleAddOne function
* The handleAddOne function executes the reducer function with the addOne function.
* The addOne function tells the reducer function the action type to execute
* The reducer function takes that type, matches it to the ADD_ONE case and adds 1 to the current number in the state
* TotalDisplay shows the total plus 1.
