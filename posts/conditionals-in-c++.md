---
title: "Conditionals in C++"
date: "2021-12-22"
---

In computer programming, we use the `if...else` statement to run one block of code under certain conditions and another block of code under different conditions.

For example, assigning grades `(A, B, C)` based on marks obtained by a student.

- if the percentage is above **90**, assign grade **A**
- if the percentage is above **75**, assign grade **B**
- if the percentage is above **65**, assign grade **C**

---

There are three forms of `if...else` statements in C++.

1. `if` statement
2. `if...else` statement
3. `if...else if...else` statement

## C++ if Statement

The syntax of `if` statement is:

```js
if (condition) {
  /* body of if statement
   *
   * The code we want the computer to execute
   * when this condition is true is written here
   */
}
```

The `if` statement evaluates the `condition` inside the parentheses `( )` then:

- If the `condition` evaluated is `true`, the code inside the body of `if` is executed.
- If the `condition` evaluated is `false`, the code inside the body of `if` is skipped.

> **Note:** The code inside `{ }` is the body of the `if` statement.

![How if Statement works](https://cdn.programiz.com/cdn/farfuture/HY5SnjHTQ0MJtr5nkoljtlvUH0LPS_t_cJBVBqxXn1M/mtime:1592457173/sites/tutorial2program/files/cpp-if-working.png)

---

### Example: If Statement :

```cpp
#include <iostream>
using namespace std;

int main() {
  int number;

  cout << "Enter an integer: ";
  cin >> number;

  // checks if the number is positive
  if (number > 0) {
    cout << "You entered a positive integer: " << number << endl;
  }

  cout << "This statement is always executed.";

}
```

**Output 1:**

```
Enter an integer: 5
You entered a positive number: 5
This statement is always executed.
```

**Output 2:**

```
Enter a number: -5
This statement is always executed.
```

### C++ if...else Statement

The `if` statement can have an optional `else` clause. Its syntax is:

```cpp
if (condition) {
  // block of code if condition is true
}
else {
  // block of code if condition is false
}
```

![How if-else Statement works](https://cdn.programiz.com/cdn/farfuture/PsBB88lS1d8FUx01uVaGejDmfEeulxv5HRjyNCJpPRk/mtime:1592457238/sites/tutorial2program/files/cpp-if-else-working.png)

---

The `if..else` statement evaluates the condition inside the parenthesis.

### Example: C++ if...else Statement

```cpp
#include <iostream>
using namespace std;

int main() {
  int number;

  cout << "Enter an integer: ";
  cin >> number;

  if (number >= 0) {
    cout << "You entered a positive integer: " << number << endl;
  }
  else {
    cout << "You entered a negative integer: " << number << endl;
  }

  cout << "This line is always printed.";
}
```

**Output 1:**

```
Enter an integer: 5
You entered a positive number: 5
This statement is always executed.
```

**Output 2:**

```
Enter an integer: -4
You entered a negative integer: -4.
This line is always printed.
```

If the `condition` evaluates `true`,

- the code inside the body of `if` is executed
- the code inside the body of `else` is skipped from execution

If the `condition` evaluates `false`,

the code inside the body of `else` is executed
the code inside the body of `if` is skipped from execution

---

### C++ if...else if...else statement

The `if...else` statement is used to execute a block of code among two alternatives. However, if we need to make a choice between more than two alternatives, we use the `if...else if...else` statement.

The syntax of the `if...else if...else` statement is:

```cpp
if (condition1) {
  // code block 1
}
else if (condition2){
  // code block 2
}
else {
  // code block 3
}
```

Here,

- If `condition1` evaluates to `true`, the `code block 1` is executed.
- If `condition1` evaluates to false, then `condition2` is evaluated.
- If `condition2` is true, the code `block 2` is executed.
- If `condition2` is `false`, the code `block 3` is executed.

![If-elseIf-else](https://cdn.programiz.com/cdn/farfuture/xsuXdpAJsveKdf2PFNfjAO12zeaCREtPTT5I0EiafBU/mtime:1592457249/sites/tutorial2program/files/cpp-if-else-if-else-working.png)

> **Note:** There can be more than one `else if` statement but only one `if` and `else` statement

### Example: C++ if...else...else if

```cpp
#include <iostream>
using namespace std;

int main() {
  int number;

  cout << "Enter an integer: ";
  cin >> number;

  if (number > 0) {
    cout << "You entered a positive integer: " << number << endl;
  }
  else if (number < 0) {
    cout << "You entered a negative integer: " << number << endl;
  }
  else {
    cout << "You entered 0." << endl;
  }

  cout << "This line is always printed.";
}
```

## Nested If...else

Sometimes, we need to use an `if` statement inside another `if` statement. This is known as nested `if` statement.

Think of it as multiple layers of `if` statements. There is a first, outer `if` statement, and inside it is another, inner `if` statement. Its syntax is:

```cpp
// outer if statement
if (condition1) {

  // statements

  // inner if statement
  if (condition2) {
    // statements
  }
}
```

> **Notes:**
>
> - We can add `else` and `else if` statements to the inner `if` statement as required
> - The inner `if` statement can also be inserted inside the outer `else` or `else if` statements (if they exist).
> - We can nest multiple layers of `if` statements.

### Example Nested if

```cpp
// C++ program to find if an integer is positive, negative or zero
// using nested if statements

#include <iostream>
using namespace std;

int main() {

  int num;

  cout << "Enter an integer: ";
   cin >> num;

  // outer if condition
  if (num != 0) {

    // inner if condition
    if (num > 0) {
      cout << "The number is positive." << endl;
    }
    // inner else condition
    else {
      cout << "The number is negative." << endl;
    }
  }
  // outer else condition
  else {
    cout << "The number is 0 and it is neither positive nor negative." << endl;
  }

  cout << "This line is always printed." << endl;

  return 0;
}
```

**Output 1**

```
Enter an integer: 35
The number is positive.
This line is always printed.
```

**Output 2**

```
Enter an integer: -35
The number is negative.
This line is always printed.
```

**Output 3**

```
Enter an integer: 0
The number is 0 and it is neither positive nor negative.
This line is always printed.
```

In the above example,

- We take an integer as an input from the user and store it in the variable `num`.
- We then use an `if...else` statement to check whether num is not equal to **0**.
  - if `true`, then the inner `if...else` statement is executed.
  - if `false`, we print that the number is negative.

> **Note:** As you can see, nested `if...else` makes your logic complicated. I possible, you should always try to avoid nested `if..else`

### Body of if...else with only one Statement

If the body of `if...else` has only one statement, you can omit `{ }` in the program. For example, you can replace

```cpp
int number = 5;

if (number > 0) {
  cout << "The number is positive." << endl;
}
else {
  cout << "The number is negative." << endl;
}
```

with

```cpp
int number = 5;

if (number > 0)
  cout << "The number is positive." << endl;
else
  cout << "The number is negative." << endl;
```

The ouput of both the programs will be the same

> **Note:** Although it's not necessary to use `{ }` if the body of if...else has only one statement, using `{ }` makes your code more readable.
