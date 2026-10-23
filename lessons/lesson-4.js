// Lesson 4: Functions - Part 2
//
// Each question needs:
//   type:        "compiler" | "runtime" | "logic" | "none"
//   line:        (compiler only) the line with the error
//   code:        the C code, inside String.raw`...` so backslashes like \n stay as written
//   feedback:    (optional) instructor feedback, shown in its own box after the answer.
//                Leave it out and nothing extra is displayed. Use \n for line breaks.

registerLesson({
  number: 4,
  title: "Functions - Part 2",
  questions: [
    {
      type: "compiler", line: 8,
      code: String.raw`#include <stdio.h>

int main(void) {
    size_t i = 1;

    do {
        printf("%d\n", i);
        i++
    } while (i <= 5);

    return 0;
}`
    },

    {
      type: "compiler", line: 7,
      code: String.raw`#include <stdio.h>

int main(void) {
    size_t i = 1;

    do {
        printf("%d\n", i)
        i++;
    } while (i <= 5);

    return 0;
}`
    },

    {
      type: "compiler", line: 6,
      feedback: "Duplicate Declaration in Same Scope",
      code: String.raw`#include <stdio.h>

int main(void)
{
    int number = 10;
    int number = 20;

    printf("%d\n", number);

    return 0;
}`
    },

    {
      type: "logic",
      feedback: "Incorrect Factorial Base Case",
      code: String.raw`#include <stdio.h>

int factorial(int n)
{
    if (n == 0)
        return 0;

    return n * factorial(n - 1);
}

int main(void)
{
    printf("%d\n", factorial(5));

    return 0;
}`
    },

    {
      type: "logic",
      feedback: "Wrong range (0~ 10)",
      code: String.raw`#include <stdio.h>
#include <stdlib.h>
/* Expected to generate a random
  integer from 5 to 10 inclusive.*/
int main(void)
{
    int number;

    number = rand() % (6 + 5);

    printf("%d\n", number);

    return 0;
}`
    },

    {
      type: "compiler", line: 10,
      feedback: "Scope: variable number only in loop-body, no variable number definded by Line 10",
      code: String.raw`#include <stdio.h>

int main(void)
{
    for (size_t i = 0; i < 5; i++)
    {
        int number = i * 2;
    }

    printf("%d\n", number);

    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>

int main(void)
{
    int number = 10;

    if (number > 0)
    {
        int number = 20;
        printf("%d\n", number);
    }

    printf("%d\n", number);

    return 0;
}`
    },

    {
      type: "logic",
      feedback: "Wrong range: never 30",
      code: String.raw`#include <stdio.h>
#include <stdlib.h>
/* Expected to generate a random integer
  from min to max, inclusive */
int main(void)
{
    int min = 20;
    int max = 30;
    int number;

    number = rand() % (max - min) + min;

    printf("%d\n", number);

    return 0;
}`
    },

    {
      type: "compiler", line: 12,
      feedback: "Parameter Scope: no variable number defined in main()",
      code: String.raw`#include <stdio.h>

void display(int number)
{
    printf("%d\n", number);
}

int main(void)
{
    display(10);

    printf("%d\n", number);

    return 0;
}`
    },

    {
      type: "logic",
      feedback: "Base Case Never Reached",
      code: String.raw`#include <stdio.h>

void countDown(int n)
{
    if (n == 0)
        return;

    printf("%d\n", n);

    countDown(n + 1);
}

int main(void)
{
    countDown(5);

    return 0;
}`
    },

    {
      type: "none",
      feedback: "no issue",
      code: String.raw`#include <stdio.h>

int countDigits(int n) {
    if (n < 10) {
        return 1;
    }

    return 1 + countDigits(n / 10);
}

int main(void) {
    printf("%d\n", countDigits(12345));
    return 0;
}`
    },

    {
      type: "compiler", line: 6,
      feedback: "Missing header file: stdlib.h",
      code: String.raw`#include <stdio.h>
#include <time.h>

int main(void)
{
    int number = rand();

    printf("%d\n", number);

    return 0;
}`
    },

    {
      type: "compiler", line: 12,
      feedback: "Unnecessary &",
      code: String.raw`#include <stdio.h>

void display(int x)
{
    printf("%d\n", x);
}

int main(void)
{
    int number = 10;

    display(&number);

    return 0;
}`
    },

    {
      type: "none",
      feedback: "srand() function only needs once in one run.",
      code: String.raw`#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(void)
{
    srand(time(NULL));
    for (size_t i = 0; i < 10; i++)
    {
        printf("%d\n", rand());
    }

    return 0;
}`
    },

    {
      type: "logic",
      feedback: "Will generate same value 3 times",
      code: String.raw`#include <stdio.h>
#include <stdlib.h>
/* Expected to generate
 three different random values*/
int main(void)
{
    srand(5);
    printf("%d\n", rand());

    srand(5);
    printf("%d\n", rand());

    srand(5);
    printf("%d\n", rand());

    return 0;
}`
    },

    {
      type: "compiler", line: 10,
      feedback: "Loop Control Variable Scope",
      code: String.raw`#include <stdio.h>

int main(void)
{
    for (size_t i = 0; i < 5; i++)
    {
        printf("%d ", i);
    }

    printf("%d\n", i);

    return 0;
}`
    },

    {
      type: "none",
      feedback: "no issue",
      code: String.raw`#include <stdio.h>

int fibonacci(int n) {
    if (n <= 1) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main(void) {
    printf("%d\n", fibonacci(6));
    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>

int main(void)
{
    int number = 10;

    if (number > 0)
    {
        printf("%d\n", number);
    }

    return 0;
}`
    },

    {
      type: "compiler", line: 5,
      feedback: "Parameter and Local Variable with Same Name",
      code: String.raw`#include <stdio.h>

void display(int number)
{
    int number = 20;

    printf("%d\n", number);
}

int main(void)
{
    display(10);

    return 0;
}`
    },

    {
      type: "logic",
      feedback: "Issue: The current value of n is never added.",
      code: String.raw`#include <stdio.h>

int sum(int n)
{
    if (n == 1)
        return 1;

    return sum(n - 1);
}

int main(void)
{
    printf("%d\n", sum(5));

    return 0;
}`
    },

    {
      type: "logic",
      code: String.raw`#include <stdio.h>

int main(void) {
    int x = 1;

    while (x <= 5)
        printf("%d\n", x);
        x++;

    return 0;
}`
    },

    // ---- Added from the later quiz PDFs ----

    {
      type: "runtime",
      feedback: "Issue: Modulo by Zero",
      code: String.raw`#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int range = 0;
    int number;

    number = rand() % range;

    printf("%d\n", number);

    return 0;
}`
    },

    {
      type: "logic",
      feedback: "Seeding After Generating",
      code: String.raw`#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(void)
{
    int number;

    number = rand();

    srand(time(NULL));

    printf("%d\n", number);

    return 0;
}`
    },

    {
      type: "compiler", line: 12,
      feedback: "Scope: no variable total defined in main( )",
      code: String.raw`#include <stdio.h>

void calculate(void)
{
    int total = 100;
}

int main(void)
{
    calculate();

    printf("%d\n", total);

    return 0;
}`
    },

    {
      type: "compiler", line: 6,
      feedback: "Missing header file: time.h",
      code: String.raw`#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    srand(time(NULL));

    printf("%d\n", rand());

    return 0;
}`
    },

    {
      type: "compiler", line: 7,
      feedback: "srand() function has NO return value",
      code: String.raw`#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(void)
{
    int seed = srand(time(NULL));

    printf("%d\n", seed);

    return 0;
}`
    },

    {
      type: "logic",
      feedback: "The recursive case uses addition instead of multiplication. It should be:\nreturn base * power(base, exponent - 1);",
      code: String.raw`#include <stdio.h>

int power(int base, int exponent) {
    if (exponent == 0) {
        return 1;
    }

    return base + power(base, exponent - 1);
}

int main(void) {
    printf("%d\n", power(2, 4));
    return 0;
}`
    },

    {
      type: "logic",
      feedback: "wrong range (10 ~ 19) and with same value each run",
      code: String.raw`#include <stdio.h>
#include <stdlib.h>
/* Expected to generate a random
  integer from 10 to 20 inclusive */
int main(void)
{
    int number;

    number = rand() % 10 + 10;

    printf("%d\n", number);

    return 0;
}`
    },

    {
      type: "logic",
      code: String.raw`#include <stdio.h>
#include <stdlib.h>
/* Expected to generate a random
  integer from 1 to 6. */
int main(void)
{
    int number;

    number = rand() % 6;

    printf("%d\n", number);

    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>

int main(void) {
    size_t i = 0;

    for (; i < 5; ) {
        printf("%d\n", i);
        i++;
    }

    return 0;
}`
    },

    {
      type: "runtime",
      feedback: "Starting with 5, the values are 5, 3, 1, -1, -3, .... The function never reaches the base case n == 0, so recursion continues until the call stack is exhausted.",
      code: String.raw`#include <stdio.h>

int sum(int n) {
    if (n == 0) {
        return 0;
    }

    return n + sum(n - 2);
}

int main(void) {
    printf("%d\n", sum(5));
    return 0;
}`
    },

    {
      type: "logic",
      feedback: "Will see same values for each run",
      code: String.raw`#include <stdio.h>
#include <stdlib.h>
/* Expected to have different
  values for each run*/
int main(void)
{
    srand(100);

    printf("%d\n", rand());
    printf("%d\n", rand());
    printf("%d\n", rand());

    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>
#include <stdlib.h>
/* Expected to generate a random
  integer from 50 to 100 inclusive.*/
int main(void)
{
    int number;

    number = rand() % 51 + 50;

    printf("%d\n", number);

    return 0;
}`
    },

    {
      type: "runtime",
      feedback: "dead loop: never end",
      code: String.raw`#include <stdio.h>

void printDown(int n) {
    if (n == 0) {
        return;
    }

    printf("%d ", n);
    printDown(n + 1);
}

int main(void) {
    printDown(5);
    return 0;
}`
    },

    {
      type: "logic",
      feedback: "Scope, two different variables",
      code: String.raw`#include <stdio.h>

void change(int number)
{
    number = 20;
}

int main(void)
{
    int number = 10;

    change(number);

    printf("%d\n", number);

    return 0;
}`
    },

    {
      type: "logic",
      feedback: "Pass by value, so it won't change the value in variable number",
      code: String.raw`#include <stdio.h>

/* Expected to change number to 20 */
void change(int x)
{
    x = 20;
}

int main(void)
{
    int number = 10;

    change(number);

    printf("%d\n", number);

    return 0;
}`
    },

    {
      type: "compiler", line: 17,
      feedback: "Scope After if/else",
      code: String.raw`#include <stdio.h>

int main(void)
{
    int number = 10;
    scanf("%d", &number);

    if (number > 5)
    {
        int result = number * 2;
    }
    else
    {
        int result = number + 2;
    }

    printf("%d\n", result);

    return 0;
}`
    },

    {
      type: "logic",
      feedback: "Wrong range (1 ~ 11) and with same value in each run",
      code: String.raw`#include <stdio.h>
#include <stdlib.h>
/* Expected to generate a random
  integer from 20 to 30 inclusive */
int main(void)
{
    int number;

    number = rand() % 11 + 1;

    printf("%d\n", number);

    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>

int main(void)
{
    {
        int number = 10;
        printf("%d\n", number);
    }

    {
        int number = 20;
        printf("%d\n", number);
    }

    return 0;
}`
    }

  ]
});