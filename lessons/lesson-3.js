// Lesson 3: Functions - Part 1
//
// Each question needs:
//   type:        "compiler" | "runtime" | "logic" | "none"
//   line:        (compiler only) the line with the error
//   code:        the C code, inside String.raw`...` so backslashes like \n stay as written
//   feedback:    (optional) instructor feedback, shown in its own box after the answer.
//                Leave it out and nothing extra is displayed. Use \n for line breaks.

registerLesson({
  number: 3,
  title: "Functions - Part 1",
  questions: [
    {
      type: "compiler", line: 6,
      feedback: "sqrt() accepts exactly one argument.",
      code: String.raw`#include <stdio.h>
#include <math.h>

int main(void)
{
    double result = sqrt(16.0, 2.0);

    printf("%.2f\n", result);
    return 0;
}`
    },

    {
      type: "compiler", line: 8,
      feedback: "Calling function add() on Line 8 with fewer arguments (expected 2, but giving one only)",
      code: String.raw`#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int main(void) {
    int result = add(10);

    printf("%d\n", result);

    return 0;
}`
    },

    {
      type: "compiler", line: 7,
      feedback: "pow() requires two arguments: a base and an exponent.",
      code: String.raw`#include <stdio.h>
#include <math.h>

int main(void)
{

    double result = pow(2.0);

    printf("%.2f\n", result);
    return 0;
}`
    },

    {
      type: "compiler", line: 13,
      feedback: "compile error: 'return' with a value, in function returning void on Line 13",
      code: String.raw`#include <stdio.h>

void getNumber(void);

int main(void)
{
    getNumber();
    return 0;
}

void getNumber(void)
{
    return 10;
}`
    },

    {
      type: "compiler", line: 3,
      feedback: "Missing return-value-type on Line 3",
      code: String.raw`#include <stdio.h>

add(int a, int b) {
    return a + b;
}

int main(void) {
    int result = add(3, 5);
    printf("%d\n", result);

    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>

double average(int, int);

int main(void)
{
    double result = average(10, 20);
    printf("%.2f\n", result);
    return 0;
}

double average(int a, int b)
{
    return (a + b) / 2.0;
}`
    },

    {
      type: "compiler", line: 11,
      feedback: "error: conflicting return value types for 'calculate';\nhave 'int(int,  int)' on Line 11",
      code: String.raw`#include <stdio.h>

double calculate(int, int);

int main(void)
{
    printf("%d\n", calculate(5, 3));
    return 0;
}

int calculate(int x, int y)
{
    return x * 2 * y;
}`
    },

    {
      type: "compiler", line: 5,
      feedback: "missing <math.h>",
      code: String.raw`#include <stdio.h>

int main()
{
    printf("%f", fmod(3.1, 2.2));

    return 0;
}`
    },

    {
      type: "compiler", line: 4,
      feedback: "First time using variable n on Line 4, but never defined/declared",
      code: String.raw`#include <stdio.h>

int triple(int m) {
    return n * 3;
}

int main(void) {
    printf("%d\n", triple(4));

    return 0;
}`
    },

    {
      type: "logic",
      feedback: "The argument is passed by value. Changing x does not change number.",
      code: String.raw`#include <stdio.h>

/* expects number to become 100*/
void changeValue(int x)
{
    x = 100;
}

int main(void)
{
    int number = 10;

    changeValue(number);

    printf("%d\n", number);
    return 0;
}`
    },

    {
      type: "compiler", line: 16,
      feedback: "error: redefinition of 'add' on Line 16",
      code: String.raw`#include <stdio.h>

int add(int a, int b);

int main(void)
{
    printf("%d\n", add(2, 3));
    return 0;
}

int add(int a, int b)
{
    return a + b;
}

int add(int a, int b)
{
    return a + b;
}`
    },

    {
      type: "compiler", line: 11,
      feedback: "error: redefinition of parameter 'x' on Line 11",
      code: String.raw`#include <stdio.h>

int add(int, int);

int main(void)
{
    printf("%d\n", add(3, 4));
    return 0;
}

int add(int x, int x)
{
    return x + x;
}`
    },

    {
      type: "compiler", line: 5,
      feedback: "Wrong number of parameters on Line 5",
      code: String.raw`#include <stdio.h>

int add(int, int);

int add(int a) {
    return a + 10;
}

int main(void) {
    printf("%d\n", add(5));

    return 0;
}`
    },

    {
      type: "logic",
      feedback: "average() function runs integer division, wrong result",
      code: String.raw`#include <stdio.h>

double average(int a, int b);

int main(void)
{
    printf("%.2f\n", average(5, 6));
    return 0;
}

double average(int a, int b)
{
    return (a + b) / 2;
}`
    },

    {
      type: "compiler", line: 12,
      feedback: "error: expected identifier or '(' before '{' token",
      code: String.raw`#include <stdio.h>

int add(int a, int b);

int main(void)
{
    printf("%d\n", add(2, 3));
    return 0;
}

int add(int a, int b);
{
    return a + b;
}`
    },

    {
      // Instructor accepts either "logic error" or "run-time error" here.
      type: "logic",
      feedback: "This is not a C compile error. For a negative finite argument, sqrt() has a domain error and typically produces a NaN value. It can be considered as \"logic error\" or \"run-time error\"",
      code: String.raw`#include <stdio.h>
#include <math.h>

int main(void)
{
    double x = -16.0;
    double result = sqrt(x);

    printf("%f\n", result);
    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>
#include <math.h>

int main(void)
{
    double x = -7.8;
    double result = fabs(x);

    printf("%.1f\n", result);
    return 0;
}`
    },

    {
      type: "compiler", line: 3,
      feedback: "Missing data-type for parameter b on Line 3",
      code: String.raw`#include <stdio.h>

int multiply(int a, b) {
    return a * b;
}

int main(void) {
    printf("%d\n", multiply(4, 5));

    return 0;
}`
    },

    {
      type: "compiler", line: 4,
      feedback: "Calling function square() on Line 4, before its definition",
      code: String.raw`#include <stdio.h>

int main(void) {
    int result = square(5);

    printf("%d\n", result);

    return 0;
}

int square(int n) {
    return n * n;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>

int cube(int n) {
    return n * n * n;
}

int main(void) {
    int result = cube(3);

    printf("%d\n", result);

    return 0;
}`
    },

    {
      type: "none",
      feedback: "multiple declarations are allowed.\nParameter names doesn't matter in declaration.",
      code: String.raw`#include <stdio.h>

int add(int a, int b);
int add(int b, int a);

int main(void)
{
    printf("%d\n", add(2, 3));
    return 0;
}

int add(int a, int b)
{
    return a + b;
}`
    },

    {
      type: "compiler", line: 8,
      feedback: "on Line 8: error: 'number' undeclared",
      code: String.raw`#include <stdio.h>

void display(int number);

int main(void)
{
    display(10);
    printf("%d\n", number);
    return 0;
}

void display(int number)
{
    printf("%d\n", number);
}`
    },

    {
      type: "compiler", line: 8,
      feedback: "Attempting to use the return value from a function with void as return-value-type on Line 8",
      code: String.raw`#include <stdio.h>

void displayNumber(int n) {
    printf("%d\n", n);
}

int main(void) {
    int x = displayNumber(10);

    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>
#include <math.h>

int main(void)
{
    double x = 3.6;
    double result = round(x);

    printf("%.1f\n", result);
    return 0;
}`
    },

    {
      type: "compiler", line: 11,
      feedback: "The function definition does not match the earlier prototype.",
      code: String.raw`#include <stdio.h>

int calculate(int x, int y);

int main(void)
{
    printf("%d\n", calculate(5, 3));
    return 0;
}

int calculate(int x)
{
    return x * 2;
}`
    },

    {
      type: "logic",
      feedback: "1 / 2 performs integer division and evaluates to 0, so the program calculates pow(16.0, 0) instead of the square root.",
      code: String.raw`#include <stdio.h>
#include <math.h>

int main(void)
{
    double result = pow(16.0, 1 / 2);

    printf("%.2f\n", result);
    return 0;
}`
    },

    {
      type: "compiler", line: 5,
      feedback: "on Line 5: error: 'sum' undeclared",
      code: String.raw`#include <stdio.h>

int add(int a, int b)
{
    return sum = a + b;
}

int main()
{
    printf("%f", add(1, 5));

    return 0;
}`
    },

    {
      type: "compiler", line: 11,
      feedback: "on Line 11: error: 'result' undeclared",
      code: String.raw`#include <stdio.h>

void calculate(void)
{
    int result = 100;
}

int main(void)
{
    calculate();
    printf("%d\n", result);
    return 0;
}`
    },

    {
      type: "compiler", line: 9,
      feedback: "Calling function subtract() on Line 9 with more arguments (expected 2, but giving three)",
      code: String.raw`#include <stdio.h>

int subtract(int a, int b) {
    return a - b;
}

int main(void) {

    int result = subtract(10, 4, 2);

    printf("%d\n", result);

    return 0;
}`
    },

    {
      type: "compiler", line: 7,
      feedback: "% requires two operands to be integers",
      code: String.raw`#include <stdio.h>
#include <math.h>

int main(void)
{

    printf("%.2f\n", 10.5 % 2);
    return 0;
}`
    },

    {
      type: "compiler", line: 7,
      feedback: "triple without parentheses refers to the function, not the result of calling it.",
      code: String.raw`#include <stdio.h>

int triple(int x);

int main(void)
{
    int result = triple;
    printf("%d\n", result);
    return 0;
}

int triple(int x)
{
    return x * 3;
}`
    },

    {
      type: "compiler", line: 5,
      feedback: "missing semi-colon on Line 5",
      code: String.raw`#include <stdio.h>

int doubleValue(int n) {
    int result = n * 2;
    return result
}

int main(void) {
    printf("%d\n", doubleValue(5));

    return 0;
}`
    },

    {
      type: "compiler", line: 3,
      feedback: "Extra semi-colon on Line 3",
      code: String.raw`#include <stdio.h>

int maximum(int a, int b); {
    if (a > b)
        return a;
    else
        return b;
}

int main(void) {
    printf("%d\n", maximum(4, 7));

    return 0;
}`
    },

    {
      type: "logic",
      feedback: "wrong logic for a + b * 1.0 /2 for average, should be (a + b) * 1.0 /2",
      code: String.raw`#include <stdio.h>

double average(int a, int b);

int main(void)
{
    printf("%.2f\n", average(5, 6));
    return 0;
}

double average(int a, int b)
{
    return a + b * 1.0 / 2;
}`
    },

    {
      type: "compiler", line: 11,
      feedback: "conflicting return-value-types for function calculate() with declaration\non Line 11",
      code: String.raw`#include <stdio.h>

int calculate(int);

int main(void) {
    printf("%d\n", calculate(5));

    return 0;
}

double calculate(int n) {
    return n * 2.0;
}`
    },

    {
      type: "compiler", line: 6,
      feedback: "missing #include <math.h>",
      code: String.raw`#include <stdio.h>

int main(void)
{
    double x = 25.0;
    double result = sqrt(x);

    printf("%.2f\n", result);
    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>

double calculate(int x);

int main(void)
{
    double result = calculate(5);
    printf("%.2f\n", result);
    return 0;
}

double calculate(int x)
{
    return x * 2;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>
#include <math.h>

int main(void)
{
    double x = -6.7;
    double result = sqrt(fabs(x));

    printf("%.2f\n", result);
    return 0;
}`
    },

    {
      type: "logic",
      feedback: "The function logic returns the smaller value, not matching the function intention to find the larger one",
      code: String.raw`#include <stdio.h>

int larger(int a, int b);

int main(void)
{
    printf("%d\n", larger(10, 20));
    return 0;
}

int larger(int a, int b)
{
    return (a > b) ? b : a;
}`
    },

    {
      type: "compiler", line: 8,
      feedback: "on Line 8:  error: 'result' undeclared",
      code: String.raw`#include <stdio.h>

void calculate(void);

int main(void)
{
    calculate();
    printf("%d\n", result);
    return 0;
}

void calculate(void)
{
    int result = 100;
}`
    }

  ]
});