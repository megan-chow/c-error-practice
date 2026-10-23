// Lesson 9: Input/Output
//
// Each question needs:
//   type:        "compiler" | "runtime" | "logic" | "none"
//   line:        (compiler only) the line with the error
//   code:        the C code, inside String.raw`...` so backslashes like \n stay as written
//   feedback:    (optional) instructor feedback, shown in its own box after the answer.
//                Leave it out and nothing extra is displayed. Use \n for line breaks.

registerLesson({
  number: 9,
  title: "Input/Output",
  questions: [
    {
      type: "runtime",
      feedback: "run-time error (undefined behaviour)",
      code: String.raw`#include <stdio.h>

/* Expect to print letter 'A' */
int main(void) {
    char ch = 'A';

    printf("%s\n", ch);

    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>

/* Expect to print Hello */
int main(void) {
    char word[100] = {"Hello"};

    printf("%s\n", word);

    return 0;
}`
    },

    {
      type: "none",
      feedback: "Output: 10",
      code: String.raw`#include <stdio.h>

/* Expect to print 10 */
int main(void) {
    int n = 8;

    printf("%o\n", n);

    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>

/* Expect to print the address of n*/
int main(void) {
    int n = 25;

    printf("%p\n", &n);

    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>

/* Expect to print 75% */
int main(void) {
    printf("75%%\n");

    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>

int main(void) {
    int n = 25;

    printf("%5d\n", n);

    return 0;
}`
    },

    {
      type: "none",
      feedback: "Output: 12.35",
      code: String.raw`#include <stdio.h>

int main(void) {
    double x = 12.3456;

    printf("%.2f\n", x);

    return 0;
}`
    },

    {
      type: "compiler", line: 7,
      feedback: "The first argument of printf() must be a string literal",
      code: String.raw`#include <stdio.h>

/* Expect to print two numbers */
int main(void) {
    int n = 10;

    printf(n, n);

    return 0;
}`
    },

    {
      type: "compiler", line: 6,
      feedback: "error: increment of read-only variable 'p'",
      code: String.raw`#include <stdio.h>

/* Expect to print Hello */
int main(void) {
    char * const p = "Hello";
    for (size_t i = 0; *p != '\0'; p++) {
        printf("%c", *p);
    }
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

    // ---- Megan Chow, attempt 1 ----

    {
      type: "none",
      feedback: "&x got the address of x\n*&x will deference &x (the address of x), which is x (value: 10)",
      code: String.raw`#include <stdio.h>

int main(void) {
    int x = 10;

    printf("%d\n", *&x);

    return 0;
}`
    },

    {
      type: "logic",
      feedback: "Output: a",
      code: String.raw`#include <stdio.h>

/* Expect to print 10 */
int main(void) {
    int n = 10;

    printf("%x\n", n);

    return 0;
}`
    },

    {
      type: "compiler", line: 4,
      feedback: "The quotation marks around Hello terminate the string literal.\nThey should be escaped: printf(\"He said \\\"Hello\\\"\\n\");",
      code: String.raw`#include <stdio.h>

int main(void) {
    printf("He said "Hello"\n");

    return 0;
}`
    },

    {
      type: "none",
      feedback: "Field width is a minimum, not a maximum. The value is not cut off just because it requires more than three characters.",
      code: String.raw`#include <stdio.h>

int main(void) {
    int n = 123456;

    printf("%3d\n", n);

    return 0;
}`
    },

    {
      type: "none",
      feedback: "Output:\nHello\n5",
      code: String.raw`#include <stdio.h>

int main(void) {
    int count;

    printf("Hello%n\n", &count);
    printf("%d\n", count);

    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>

/* Expect to print Hello */
int main(void) {
    char *word = "Hello";

    printf("%s\n", word);

    return 0;
}`
    },

    {
      type: "logic",
      feedback: "only print one value\nOutput: 10",
      code: String.raw`#include <stdio.h>

/* Expect to print two numbers */
int main(void) {
    int n = 10;

    printf("%d \n", n, n);

    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>

/* Expect to print letter 'A' */
int main(void) {
    char ch = 'a';

    printf("%c\n", ch - 'z' + 'Z');

    return 0;
}`
    },

    // ---- Megan Chow, attempt 2 ----

    {
      type: "none",
      code: String.raw`#include <stdio.h>

/* Expect to print Hello */
int main(void) {
    char word[] = "Hello";

    printf("%s\n", word);

    return 0;
}`
    },

    {
      type: "logic",
      feedback: "Nothing will be printed",
      code: String.raw`#include <stdio.h>

/* Expect to print Hello */
int main(void) {
    char *word = "Hello";
    for (size_t i = 0; i != '\0'; i++) {
        printf("%c", word[i]);
    }
    return 0;
}`
    },

    {
      type: "none",
      feedback: "Correct conversion",
      code: String.raw`#include <stdio.h>

/* Expect to print letter 'A' */
int main(void) {
    char ch = 'a';

    printf("%c\n", ch - 'a' + 'A');

    return 0;
}`
    },

    {
      type: "runtime",
      feedback: "the array (p) has only two slots: p[0] and p[1]\nso index 2 is out of bound, dereferencing p[2] is undefined behaviour (run-time error)",
      code: String.raw`#include <stdio.h>

/* Expect to print 20 */
int main(void) {
    int a = 10, b = 20;

    int *p[2] = {&a, &b};

    printf("%d\n", *p[2]);

    return 0;
}`
    },

    // ---- Carlos Fonseca ----

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

    // ---- Vish Epa ----

    {
      type: "runtime",
      feedback: "run-time error (undefined behaviour)",
      code: String.raw`#include <stdio.h>

/* Expect to print two numbers */
int main(void) {
    int n = 10;

    printf("%n %n", n, n);

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

/* Expect to print Hello */
int main(void) {
    char *word = "Hello";
    for (size_t i = 0; word[i] != '\0'; i++) {
        printf("%c", word[i]);
    }
    return 0;
}`
    }

  ]
});