---
title: "Loops in C++"
date: "2021-12-30"
---

## Loops

In computer programming, loops are used to repeat a block of code.

For example, let's say we want to show a message 100 times. Then instead of writing the print statement 100 times, we can use a loop.

That was just a simple example; we can achieve much more efficiency and sophistication in our programs by making effective use of loops.

There are 3 types of loops in C++ :

- `for` loop
- `while` loop
- `do...while` loop

### While Loops

Syntax of While Loop

```cpp
while(condition) {
    // do something
}
```

- A `while` loop evaluates the `condition`
- If the `condition` evaluates to `true`, the code inside the `while` loop is executed.
- The `condition` is evaluated again.
- This process continues until the `condition` is `false`.
- When the `condition` evaluates to `false`, the loop terminates.

#### Flow Chart of While Loop:

![While Loop](https://cdn.programiz.com/sites/tutorial2program/files/cpp-while-loop-flowchart.png)

**Example:**

Print numbers `1 to n` on the stdout

```cpp
#include<iostream>
using namespace std;

int main() {
    int n;
    cin>>n;
    int num = 1;
    while( num <= n ) {
        cout << num << endl; // Printing the number
        num  = num + 1 // Increasing number from 1 to 2 then 2 to 3 then 3 to 4 until it is equal to n

        /* Can also be written like this:
         * num += 1;
         * num++;
         * ++num;
         */
    }
}
```

![Print 1 to 5](https://user-images.githubusercontent.com/69139607/147762373-9c27875c-89d5-4422-b21b-76adceab9109.png)

**Example:**

Print the sum of positive numbers entered by the user.

```cpp
#include<iostream>
using namespace std;

int main() {
    int number;
    int sum = 0;

    // take input from the user
    cout << "Enter a number: ";
    cin >> number;

    while (number >= 0) {
        // add all positive numbers
        sum += number;

        // take input again if the number is positive
        cout << "Enter a number: ";
        cin >> number;
    }

    // display the sum
    cout << endl << "The sum is " << sum << endl;
}
```

## Patterns:

### Square:

```
Input: 4
Output:
****
****
****
****

Input: 5
Output:
*****
*****
*****
*****
*****
```

**Solution:**

- Check for `rows` and `columns`
- Here, **4** rows for **4** columns
- `rows == columns`

```cpp
#include<iostream>
using namespace std;

int main() {
    int n;
    cin>>n;

    int i = 1; // Starting position

    while(i <= n) {
        int j = 1;
        while(j <= n) {
            cout<<'*';
            j++;
        }
        cout<<endl;
        i++;
    }
}
```

### Numbered Square:

```
Input: 4
Output:
1111 -> 1st row
2222 -> 2nd row
3333 -> 3rd row
4444 -> 4th row
```

**Solution:**

- Check for `rows` and `columns`
- Here, **4** rows for **4** columns
- `rows == columns`
- And, instead of `*` we need to print the `row number`

```cpp
#include<iostream>
using namespace std;

int main() {
    int n;
    cin>>n;

    int row = 1; // Starting position

    while(row <= n) {
        int col = 1;
        while(col <= n) {
            cout<<row; // Notice what we're printing
            col++;
        }
        cout<<endl;
        row++;
    }
}
```
