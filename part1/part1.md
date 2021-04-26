# part1

## Part 1a.
  1. ```values added: 20 ```
  2. ```final result: 20 ```
  3. ```values added: 20 ```
  4. There would be an error because the variable _result_'s scope was only the ```if``` statement.
  5. There would be an error becaues the variable _result_ was assigned to a constant value, meaning that it cannot be reassigned. We would get an error on line 7.
  6. We would not even get to line 13, because there would be an error at line 7, where it would say that we cannot reassign a constant variable.

## Part 1b.
  1. It would print out ```3```.
  2. It would print out ```150```.
  3. It would print out ```150```.
  4. It will return an array ```[50, 100, 150]```.
  5. There will be an error because ```i``` will not be in range on line 12. When we use let, the scope of the variable is just in the immediate function scope.
  6. There will be an error because ```discountedPrice``` was defined inside the ```for``` loop using ```let```.
  7. It will print ```150```.
  8. It will return an array ```[50, 100, 150]```.
  9. There will be an error because ```i``` will not be in range on line 12. When we use let, the scope of the variable is just in the immediate function scope.
  10. It will print ```3```.
  11. It will return an array ```[50, 100, 150]```.
  12.  
      a. ```student.name```  
      b. ```student["Grad Year"]```  
      c. ```student.greeting()```  
      d. ```student["Favorite Teacher"].name```  
      e. ```student.courseLoad[0]```
  13.  
      a. Output is ```32``` because it interprets 2 as a string (since 3 is a string).  
      b. Output is ```1``` because substracting is an operator that works with integers (and it treats 2 as an int).  
      c. Output is ```3``` because adding _null_ does nothing to an int.  
      d. Output is ```3null``` because it concatenates the two strings together (treats _null_ as string because 3 is one).   
      e. Output is ```4``` because _true_ can be interpreted as a 1 (and false is 0), so it adds them together as ints.  
      f. Output is ```0``` because _false_ is interpreted as a 0 (int), and like part _c_, adding _null_ to an int does nothing.  
      g. Output is ```3undefined``` because it concatenates _undefined_ by interpreting it as a string.  
      h. Output is ```NaN``` because the "-" operator tries to subtract _undefined_, which does not make sense.
  14.  
      a. Output is ```true``` because the less than/greater than operators need integer values.  
      b. Output is ```false``` because the less than/greater than operators interpret them as integer values.  
      c. Output is ```true``` because the == operator needs values of the same type which, in this case, is two ints.  
      d. Output is ```false``` because the === operator test for strict equality (same type and value).  
      e. Output is ```false``` because _true_ is interpreted as a 1.  
      f. Output is ```true``` because anything that is not a 0 when passed into the _Boolean()_ function is _true_.  
  15. The === operator tests for **strict** equality, which means that the two variables must be of the same data type and value, whereas the == operator does not      require the same data type, and rather interprets it "on the go."
  16. (in part1b-question16.js file)
  17. When we first enter _modifyArray_, we will initialize a ```const newArr``` and loop over it in a _for_ loop. In each iteration, we push a value to the array that is returned when the callback function _doSomething_ is passed the whatever value is in the array we passed in ([1,2,3]) at current running index _i_. For example, in the first iteration, we pass in ```array[0]``` into the callback function, which returns a value 1. This value is passed into the function _doSomething_ and is multiplied by 2 and returned. Finally, this value that is returned is pushed into the _newArr_. This continues until we reach the end of the array.
  18. (in part1b-question18.js file)
  19. Output is numbers in the following order: 1, 4, 3, 2.
