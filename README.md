# Tasks
from workfront

### 1. Distinct Array Generator
Write a function
```javascript
function solution(N);
```
that, given an integer N (1 ≤ N ≤ 100), returns an array containing N distinct integers that sum up to 0. The
function can return any such array.

For example, given N = 4, the function could return [1, 0, −3, 2], and for N = 3 one of the possible answers is
[−1, 0, 1] (but there are many more correct answers).

### 2. Filling Station
There is a queue of N cars waiting at filling station. There are three fuel dispensers at the station, labeled
X, Y and Z, respectively. Each dispenser has some finite amount of fuel in it; at all times the amount of
available fuel is clearly displayed on each dispenser.

When a car arrives at the front of the queue, the driver can choose to drive to any dispenser not occupied by
another car. Suppose that the fuel demand is D liters for this car. The driver must choose a dispenser which
has at least D liters of fuel. If all unoccupied dispensers have less than D liters, the driver must wait for
some other car to finish tanking up. If all dispensers are unoccupied, and none has at least D liters, the
driver is unable to refuel the car and it blocks the queue indefinitely. If more than one unoccupied dispenser
has at least D liters, the driver chooses the one labeled with the smallest letter among them.

Each driver will have to wait some amount of time before he or she starts refueling the car. Calculate the
maximum waiting time among all drivers. Assume that tanking one liter of fuel takes exactly one second,
and moving cars is instantaneous.

Write a function:
```javascript
function solution(A, X, Y, Z);
```
that, given a zero-indexed array A consisting of N integers (which specify the fuel demands in liters for
subsequent cars in the queue), and numbers X, Y and Z (which specify the initial amount of fuel in the
respective dispensers), returns the maximum waiting time for a car. If any car is unable to refuel, the
function should return −1.

For example, given X = 7, Y = 11, Z = 3 and the following array A:
A[0] = 2
A[1] = 8
A[2] = 4
A[3] = 3
A[4] = 2
the function should return 8. The subsequent cars will have to wait in the queue for 0, 0, 2, 2 and 8 seconds,
respectively. The scenario is as follows:

At time 0, car 0 drives to dispenser X.
At time 0, car 1 drives to dispenser Y.

There is not enough fuel in dispenser Z to satisfy the demands of car 2, so this car must
wait. At time 2 car 0 finishes refueling and car 2 drives to dispenser X.
At time 2 car 3 drives to dispenser Z.
At this time all dispensers are occupied, so car 4 waits. There will be not enough fuel in
dispensers X and Z after cars 2 and 3 finish tanking up, so car 4 waits until car 1 finishes
refuelling at dispenser Y. At time 8, car 4 drives to dispenser Y.

For X = 4, Y = 0, Z = 3 and array A:
A[0] = 5
the function should return −1.

Assume that:
N is an integer within the range [1..100,000];
each element of array A is an integer within the range [1..1,000,000,000];
X, Y and Z are integers within the range [0..1,000,000,000].
Complexity:
expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), beyond input storage (not counting the
storage required for input arguments).

### 3. FizzBuzzWoof
Write a function:
```javascript
function solution(N);
```
that, given a positive integer N, prints the consecutive numbers from 1 to N, each on a separate line.
However, any number divisible by 3, 5 or 7 should be replaced by the word Fizz, Buzz or Woof respectively.
If a number is divisible by more than one of the numbers: 3, 5 or 7, it should be replaced by a concatenation
of the respective words Fizz, Buzz and Woof in this given order. For example, numbers divisible by both 3
and 5 should be replaced by FizzBuzz and numbers divisible by all three numbers: 3, 5 and 7, should be
replaced by FizzBuzzWoof.

For example, here is the output for N = 24:
```javascript
1
2
Fizz
4
Buzz
Fizz
Woof
8
Fizz
Buzz
11
Fizz
13
Woof
FizzBuzz
16
17
Fizz
19
Buzz
FizzWoof
22
23
Fizz
```
The function shouldn't return any value.

Assume that:
N is an integer within the range [1..1,000].
In your solution, focus on correctness. The performance of your solution will not be the focus of the
assessment.

### 4. Formate Phone Number
We are given a string S representing a phone number, which we would like to reformat. String S consists of
N characters: digits, spaces and/or dashes. It contains at least two digits.

Spaces and dashes in string S can be ignored. We want to reformat the given phone number in such a way
that the digits are grouped in blocks of length three, separated by single dashes. If necessary, the 􀃂nal block
or the last two blocks can be of length two.

Write a function:
```javascript
function solution(S);
```
that, given a string S representing a phone number, returns this phone number reformatted as described
above.

For example, given S = "00-44 48 5555 8361", the function should return "004-448-555-583-61".
Given S = "0 - 22 1985--324", the function should return "022-198-53-24". Given S = "555372654",
the function should return "555-372-654".

Assume that:
N is an integer within the range [2..100];
string S consists only of digits (0−9), spaces and/or dashes (-);
string S contains at least two digits.
In your solution, focus on correctness. The performance of your solution will not be the focus of the
assessment.

### 5. Time in seconds
Myung has a fancy application on her mobile, which shows her the time not in hours, minutes and seconds
but only in seconds. She is in a bit of a hurry and she needs your help to convert the output of this
application into a readable format.

Write a function:
```javascript
function solution(T);
```
that, given a time T in seconds, converts it into a string in the format 
"<<*hours*>>**h**<<*minutes*>>**m**<<*seconds*>>**s**".

For example, given T=7500 the function should return 2h5m0s.
Given T=83643 the function should return 23h14m3s.
Assume that:
T is an integer within the range [0..86,399].
In your solution, focus on correctness. The performance of your solution will not be the focus of the
assessment.
