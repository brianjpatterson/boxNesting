# boxNesting
Coding Challenge:  Box Nesting (aka Matrix sorting)
/*/
You are given n rectangular boxes, the ith box has the length length|i|,
the width width|i| and the height height|i|. Your task is to check if 
it is possible to pack all boxes into one so that inside each box there 
is no more than one other box (which, in turn, can contain at most one 
other box, and so on). 

More formally, your task is to check whether there is such sequence of n different numbers p|i| (1 ≤ p|i| ≤ n) that for each 1 ≤ i < n the box
number p|i| can be put into the box number p|i|+1.

A box can be put into another box if all sides of the first one are less than the respective sides of the second one. You can rotate each box as you wish, i.e. you can swap its length, width and height if necessary.
/*/ 
