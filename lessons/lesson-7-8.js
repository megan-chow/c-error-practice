// Lesson 7 & 8: Pointers
//
// Each question needs:
//   type:        "compiler" | "runtime" | "logic" | "none"
//   line:        (compiler only) the line with the error
//   code:        the C code, inside String.raw`...` so backslashes like \n stay as written
//   feedback:    (optional) instructor feedback, shown in its own box after the answer.
//                Leave it out and nothing extra is displayed. Use \n for line breaks.
//
// Extracted from the Lesson 7 & 8 in-lab quiz PDFs (duplicates removed).

registerLesson({
  number: "7-8",
  title: "Pointers",
  questions: [
    {
      type: "compiler", line: 11,
      feedback: "Compile error: The third parameter expects int *, but y is an int. It should be &y.",
      code: String.raw`#include <stdio.h>

/* Expect to print 11 12*/
void calculate(int n, int *a, int *b) {
    *a = n + 1;
    *b = n + 2;
}

int main(void) {
    int x, y;
    calculate(10, &x, y);

    printf("%d %d\n", x, y);
    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>

/* Expect: to print the pointer value*/
int main(void) {
    int x = 10;
    int *p
    = &x;

    printf("%p\n", (void *)p);

    return 0;
}`
    },

    {
      type: "none",
      feedback: "Both p and q point to x. Changing *p also changes the value seen through q.\nOutput: 20.",
      code: String.raw`#include <stdio.h>

/* Expect to print 20*/
int main(void) {
    int x = 10;
    int *p = &x;
    int *q = p;

    *p = 20;

    printf("%d\n", *q);

    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>

/* Expect to print 5 */
int main(void) {
    int n = 5;
    int *p = &n;
    int *pp = p;

    printf("%d\n", *pp);

    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>

int main(void) {
    int x = 10;
    int *p;
    p = &x;

    printf("%d\n", *p);

    return 0;
}`
    },

    {
      type: "compiler", line: 6,
      feedback: "missing &",
      code: String.raw`#include <stdio.h>

int main(void) {
    int x = 10;
    int *p;
    p = x;

    printf("%d\n", *p);

    return 0;
}`
    },

    {
      type: "compiler", line: 7,
      feedback: "p has type int *, while *p has type int",
      code: String.raw`#include <stdio.h>

int main(void) {
    int x = 5;
    int *p = &x;

    p = *p;
    printf("%d", *p);

    return 0;
}`
    },

    {
      type: "runtime",
      feedback: "After p = NULL;, the pointer no longer points to x. Then *p attempts to dereference a NULL pointer, which causes undefined behavior and will commonly result in a segmentation fault.",
      code: String.raw`#include <stdio.h>

int main(void) {
    int x = 10;
    int *p = &x;

    *p = 30;
    p = NULL;

    printf("%d\n", *p);

    return 0;
}`
    },

    {
      type: "none",
      feedback: "*p++ moved the p to point to x[1], so *p will print 20",
      code: String.raw`#include <stdio.h>

/* Expect to print 20 */
int main(void) {
    int x[] = {10, 20, 30};
    int *p = &x[0];

    *p++;

    printf("%d\n", *p);

    return 0;
}`
    },

    {
      type: "logic",
      feedback: "Output: 40\nvariable n in half() is not the same variable n in main()",
      code: String.raw`#include <stdio.h>

/* Expect to print 20*/
void half(int n) {
    int *p = &n;
    *p /= 2;
}

int main(void) {
    int n = 40;
    half(n);

    printf("%d\n", n);
    return 0;
}`
    },

    {
      type: "none",
      feedback: "int* const p, cannot change value in p (address). But it's Okay to use p to change its target",
      code: String.raw`#include <stdio.h>

/* Expect to print 20*/
void half(int* const p) {
    *p /= 2;
}

int main(void) {
    int n = 40;
    half(&n);
    printf("%d\n", n);
    return 0;
}`
    },

    {
      type: "compiler", line: 9,
      feedback: "Compile error on Line 9:\np is an array name, cannot be reassigned",
      code: String.raw`#include <stdio.h>

/* Expect to print 20 */
int main(void) {
    int a = 10, b = 20, c = 30;

    int *p[3] = {&a, &b, &c};

    printf("%d\n", *p++);

    return 0;
}`
    },

    {
      type: "logic",
      feedback: "It's workable to do &p, which takes the address of p\nBut it's a logic error to print &p (an memory address) with \"%d\"\nTo print an address, should go with \"%p\"",
      code: String.raw`#include <stdio.h>

int main(void) {
    int x = 10;
    int *p = &x;

    printf("%d\n", &p);

    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>

/* Expect to print 5 */
int add(int a, int b) {
    return a + b;
}

int main(void) {
    int (*p)(int, int) = add;

    printf("%d\n", p(2, 3));

    return 0;
}`
    },

    {
      type: "none",
      feedback: "p[0] is storing the address of a\nSo, *p[0] = 20; is equivalent to a = 20;\nOutput: 20 (as expected)",
      code: String.raw`#include <stdio.h>

/* Expect to print 20 */
int main(void) {
    int a = 10;
    int b = 20;

    int *p[2] = {&a, &b};

    *p[0] = 20;

    printf("%d\n", a);

    return 0;
}`
    },

    {
      type: "compiler", line: 7,
      feedback: "wrong level of pointer, should go with int **pp = &p;",
      code: String.raw`#include <stdio.h>

/* Expect to print 5 */
int main(void) {
    int n = 5;
    int *p = &n;
    int **pp = p;

    printf("%d\n", **pp);

    return 0;
}`
    },

    {
      type: "compiler", line: 6,
      code: String.raw`#include <stdio.h>

/* Expect to print 20 */
int main(void) {
    int x[] = {10, 20, 30};
    int *p = x[0];

    *p++;

    printf("%d\n", *p);

    return 0;
}`
    },

    {
      type: "none",
      feedback: "Both p and q point to x. Changing *p also changes the value seen through q.\nOutput: 20.",
      code: String.raw`#include <stdio.h>

/* Expect to print 20*/
int main(void) {
    int x = 10;
    int *p = &x;
    int *q = &x;

    *p = 20;

    printf("%d\n", *q);

    return 0;
}`
    },

    {
      type: "compiler", line: 7,
      feedback: "Type issue, cannot assign an integer value to a pointer",
      code: String.raw`#include <stdio.h>

int main(void) {
    int x = 10;
    int *p = &x;

    p = 25;

    printf("%d\n", x);

    return 0;
}`
    },

    {
      type: "runtime",
      feedback: "run-time error (undefined behavior)\nIssue: p has an indeterminate value and is dereferenced.",
      code: String.raw`#include <stdio.h>

int main(void) {
    int *p;

    printf("%d\n", *p);

    return 0;
}`
    },

    {
      type: "none",
      feedback: "Pointer arguments can be used to bring multiple values back to the caller",
      code: String.raw`#include <stdio.h>

/* Expect to print 11 12*/
void calculate(int n, int *a, int *b) {
    *a = n + 1;
    *b = n + 2;
}

int main(void) {
    int x, y;

    calculate(10, &x, &y);

    printf("%d %d\n", x, y);
    return 0;
}`
    },

    {
      type: "compiler", line: 8,
      feedback: "Compile error: Elements of p are int *, but a and b are integer values. The addresses should be stored instead.",
      code: String.raw`#include <stdio.h>

/* Expect to print 20 */
int main(void) {
    int a = 10,
    b = 20;

    int *p[2] = {a, b};

    printf("%d\n", *p[1]);

    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>

/* Expect to print 20*/
void half(int *n) {
    *n /= 2;
}

int main(void) {
    int n = 40;
    half(&n);

    printf("%d\n", n);
    return 0;
}`
    },

    {
      type: "compiler", line: 5,
      feedback: "p points to a const int, so the function cannot modify the value through p",
      code: String.raw`#include <stdio.h>

/* Expect to print 20*/
void half(const int *p) {
    *p /= 2;
}

int main(void) {
    int n = 40;
    half(&n);
    printf("%d\n", n);
    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>

int main(void) {
    int x = 10;
    int *p
    = &x;

    printf("%d\n", *p);

    return 0;
}`
    },

    {
      type: "compiler", line: 7,
      feedback: "Type issue on Line 7: error: assignment to 'int' from 'int *' makes integer from pointer without a cast",
      code: String.raw`#include <stdio.h>

/* Expect: to print the pointer value*/
int main(void) {
    int x = 10;
    int *p;
    *p = &x;

    printf("%p\n", (void *)p);

    return 0;
}`
    },

    {
      type: "none",
      feedback: "p is an array of three pointers to int",
      code: String.raw`#include <stdio.h>

/* Expect to print 20 */
int main(void) {
    int a = 10, b = 20, c = 30;

    int *p[3] = {&a, &b, &c};

    printf("%d\n", *p[1]);

    return 0;
}`
    },

    {
      type: "compiler", line: 7,
      feedback: "The problem is that the statement on Line 6 is missing semi-colon, but the compiler only detected the issue on Line 7 when seeing p = ...",
      code: String.raw`#include <stdio.h>

/* Expect: to print the pointer value*/
int main(void) {
    int x = 10;
    int *p
    p = &x;

    printf("%p\n", (void *)p);

    return 0;
}`
    },

    {
      type: "compiler", line: 6,
      feedback: "The problem is that the statement on Line 5 is missing semi-colon, but the compiler only detected the issue on Line 6 when seeing p = ...",
      code: String.raw`#include <stdio.h>

int main(void) {
    int x = 10;
    int *p
    p = &x;

    printf("%d\n", *p);

    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>

int main(void) {
    int x = 10;
    int *p = &x;

    printf("%d\n", *p);

    return 0;
}`
    },

    {
      type: "compiler", line: 10,
      feedback: "Compile error: half() expects an int *, but n is an int. The call should be half(&n).",
      code: String.raw`#include <stdio.h>

/* Expect to print 20*/
void half(int *n) {
    *n /= 2;
}

int main(void) {
    int n = 40;
    half(n);

    printf("%d\n", n);
    return 0;
}`
    },

    {
      type: "none",
      feedback: "*p = *q will assign pointer(q)'s target to pointer(p)'s target\nIt is equivalent to x = y, so x becomes 20\nOutput: 20",
      code: String.raw`#include <stdio.h>

/* Expect to print 20*/
int main(void) {
    int x = 10, y = 20;

    int *p = &x, *q = &y;

    *p = *q;

    printf("%d\n", x);

    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>

/* Expect to print 5 */
int add(int a, int b) {
    return a + b;
}

int main(void) {
    int (*p)(int, int);

    p = add;

    printf("%d\n", p(2, 3));

    return 0;
}`
    },

    {
      type: "logic",
      feedback: "using \"%d\" to print a pointer value (address value) is a logic error\nIt prints, no crashing, but not what the programmer intent to do\nTo print a pointer value, should go with \"%p\"",
      code: String.raw`#include <stdio.h>

int main(void) {
    int x = 10;
    int *p = &x;

    printf("%d\n", p);

    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>

/* Expect to print 20 */
int main(void) {
    int x[] = {10, 20, 30};
    int *p = x;

    *p++;

    printf("%d\n", *p);

    return 0;
}`
    },

    {
      type: "logic",
      feedback: "p[1] storing the address of a which is holding value 10\nOutput: 10",
      code: String.raw`#include <stdio.h>

/* Expect to print 20 */
int main(void) {
    int a = 10, b = 20;

    int *p[2] = {&b, &a};

    printf("%d\n", *p[1]);

    return 0;
}`
    },

    {
      type: "none",
      feedback: "A pointer variable can be changed to point to another compatible object. It prints 10.",
      code: String.raw`#include <stdio.h>

int main(void) {
    int x = 5, y = 10;

    int *p = &x;
    p = &y;

    printf("%d\n", *p);

    return 0;
}`
    },

    {
      type: "compiler", line: 8,
      feedback: "&x got the address of x\n*&x will dereference &x (the address of x), which is x (value: 10)",
      code: String.raw`#include <stdio.h>

int main(void) {
    int x = 10;

    printf("%d\n", *&x);

    return 0;
}`
    },

    {
      type: "compiler", line: 5,
      feedback: "missing &",
      code: String.raw`#include <stdio.h>

int main(void) {
    int x = 10;
    int *p = x;

    printf("%d\n", *p);

    return 0;
}`
    },

    {
      type: "none",
      feedback: "The value of x becomes 6.",
      code: String.raw`#include <stdio.h>

int main(void) {
    int x = 5;
    int *p = &x;

    *p = *p + 1;

    printf("%d\n", x);

    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>

/* Expect to print 20*/
void show(const int *p) {
    printf("%d\n", *p);
}

int main(void) {
    int n = 20;
    show(&n);

    return 0;
}`
    },

    {
      type: "compiler", line: 9,
      feedback: "Wrong level of dereferencing.\nMay go with **pp or *p",
      code: String.raw`#include <stdio.h>

/* Expect to print 5 */
int main(void) {
    int n = 5;
    int *p = &n;
    int **pp = &p;

    printf("%d\n", **p);

    return 0;
}`
    },

    {
      type: "logic",
      feedback: "Pass by value\nOutput: 40",
      code: String.raw`#include <stdio.h>

/* Expect to print 20*/
void half(int n) {
    n /= 2;
}

int main(void) {
    int n = 40;
    half(n);

    printf("%d\n", n);
    return 0;
}`
    },

    {
      type: "compiler", line: 8,
      feedback: "Compile error: dereferencing a regular variable\n(not using p is not an error, though)",
      code: String.raw`#include <stdio.h>

int main(void) {
    int x = 10;
    int *p;
    p = &x;

    printf("%d\n", *x);

    return 0;
}`
    },

    {
      type: "compiler", line: 5,
      feedback: "Compile error on Line 5:\nDivision operator cannot be used on a pointer",
      code: String.raw`#include <stdio.h>

/* Expect to print 20*/
void half(int *n) {
    n /= 2;
}

int main(void) {
    int n = 40;
    half(&n);

    printf("%d\n", n);
    return 0;
}`
    },

    {
      type: "compiler", line: 12,
      feedback: "Compile error: The second parameter expects int *, but x is an int. It should be &x.",
      code: String.raw`#include <stdio.h>

/* Expect to print 11 12*/
void calculate(int n, int *a, int *b) {
    *a = n + 1;
    *b = n + 2;
}

int main(void) {
    int x, y;

    calculate(10, x, &y);

    printf("%d %d\n", x, y);
    return 0;
}`
    },

    {
      type: "none",
      feedback: "y receives a copy of the value of x. Changing y does not change x, so the program prints 10.",
      code: String.raw`#include <stdio.h>

/* Expect to print 10 */
int main(void) {
    int x = 10;
    int *p = &x;

    int y = *p;
    y = 20;

    printf("%d\n", x);

    return 0;
}`
    },

    {
      type: "none",
      feedback: "*p=*p+*p is same as x=x+x, so x becomes 20\nOutput: 20",
      code: String.raw`#include <stdio.h>

/* Expect to print 20*/
int main(void) {
    int x = 10, y = 20;

    int *p = &x, *q = &y;

    *p=*p+*p;

    printf("%d\n", x);

    return 0;
}`
    },

    {
      type: "none",
      feedback: "Output: 5",
      code: String.raw`#include <stdio.h>

/* Expect to print 5 */
int add(int a, int b) {
    return a + b;
}

int main(void) {
    int (*p)(int, int);

    p = add;

    printf("%d\n", (*p)(2, 3));

    return 0;
}`
    },

    {
      type: "none",
      feedback: "*(p+1) is the same as p[1]\n**(p+1) is the same as *p[1]\nOutput: 20",
      code: String.raw`#include <stdio.h>

/* Expect to print 20 */
int main(void) {
    int a = 10, b = 20, c = 30;

    int *p[3] = {&a, &b, &c};

    printf("%d\n", **(p+1));

    return 0;
}`
    },

    {
      type: "compiler", line: 6,
      feedback: "x is an integer, cannot be deferenced (compile error: *x ).",
      code: String.raw`#include <stdio.h>

int main(void) {
    int x = 10;

    printf("%d\n", &*x);

    return 0;
}`
    },

    {
      type: "logic",
      feedback: "*q = *p will assign pointer(p)'s target to pointer(q)'s target\nIt is equivalent to (y = x), so y becomes 10\nOutput: 10",
      code: String.raw`#include <stdio.h>

/* Expect to print 20*/
int main(void) {
    int x = 10, y = 20;

    int *p = &x, *q = &y;

    *q = *p;

    printf("%d\n", x);

    return 0;
}`
    },

    {
      type: "compiler", line: 13,
      feedback: "compile error:\nx and y are integers, cannot be dereferenced",
      code: String.raw`#include <stdio.h>

/* Expect to print 11 12*/
void calculate(int n, int *a, int *b) {
    *a = n + 1;
    *b = n + 2;
}

int main(void) {
    int x, y;
    calculate(10, &x, &y);

    printf("%d %d\n", *x, *y);
    return 0;
}`
    },

    {
      type: "compiler", line: 11,
      feedback: "Compile error on Line 11\nfunction's return-value-type mismatches.\nThe assignment on Line 11 is not legit syntax (cannot assign)",
      code: String.raw`#include <stdio.h>
 
/* Expect to print 5 */
double add(int a, int b) {
    return a + b;
}
 
int main(void) {
    int (*p)(int, int);
 
    p = add;
 
    printf("%d\n", p(2, 3));
 
    return 0;
}`
    },
 
    {
      type: "none",
      code: String.raw`#include <stdio.h>
 
/* Expect to print 20 */
int main(void) {
    int a = 10, b = 20, c = 30;
 
    int *p[3] = {&a, &b, &c};
    int **q = p + 1;
 
    printf("%d\n", **q);
 
    return 0;
}`
    },
 
    {
      type: "compiler", line: 6,
      feedback: "error: lvalue required as left operand of assignment\n&p is not a variable",
      code: String.raw`#include <stdio.h>
 
int main(void) {
    int x = 10;
    int *p;
    &p = x;
 
    printf("%d\n", *p);
 
    return 0;
}`
    },
 
    {
      type: "none",
      feedback: "*p=*q*2 is same as (*p) = (*q) * 2 which is equivalent to x = y *2\nSo x will become 20",
      code: String.raw`#include <stdio.h>
 
/* Expect to print 20*/
int main(void) {
    int x = 20, y = 10;
 
    int *p = &x, *q = &y;
 
    *p=*q*2;
 
    printf("%d\n", x);
 
    return 0;
}`
    },
 
    {
      type: "none",
      feedback: "p still points to x, so the output is 12.",
      code: String.raw`#include <stdio.h>
 
int main(void) {
    int x = 5;
    int *p = &x;
 
    x = 12;
 
    printf("%d\n", *p);
 
    return 0;
}`
    }

  ]
});