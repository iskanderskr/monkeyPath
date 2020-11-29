# MonkeyPath
In an array, take the path of greater amount of bananas

Given a Jungle in the middle of an island of n*m dimensions. Each field in this jungle contains a
positive integer which is the amount of bananas that exist in that field. Initially the monkey is at first
column but can be at any row. The monkey can move only (right->,right up /,right down\) from a given
cell. Find out the maximum amount of bananas they can collect.

**How to run**
1) Open Git bash in folder "monkeyPath"
2) Run command: npm install 
3) Change file input.xlsx with the multidimensional array to make a input to algorithm
4) Compile code with a typescript compiler 
   1) Run command: npm install -g typescript ts-node
   2) Run command: ts-node monkey.ts
5) To run tests:
   6) Run command: npm test

**Complexity O(n logn)**