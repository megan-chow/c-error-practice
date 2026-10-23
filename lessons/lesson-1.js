// Lesson 1: Intro
//
// Each question needs:
//   type:        "compiler" | "runtime" | "logic" | "none"
//   line:        (compiler only) the line with the error
//   code:        the C code, inside String.raw`...` so backslashes like \n stay as written
//   feedback:    (optional) instructor feedback, shown in its own box after the answer.
//                Leave it out and nothing extra is displayed. Use \n for line breaks.

registerLesson({
  number: 1,
  title: "Intro",
  questions: [
    {
      type: "compiler", line: 7,
      code: String.raw`#include <stdio.h>

int main(void)
{
    int x = 11, y = 22;

    printf("%d", x + y));

    return 0;
}`
    },

    {
      type: "compiler", line: 6,
      code: String.raw`#include <stdio.h>

int main()
{
    int n = 3;
    printf(n);

    return 0;
}`,
      feedback: "the first argument of printf() function must be a string literal"
    },

    {
      type: "compiler", line: 4,
      // Note: line 1 is intentionally blank (the #include is missing).
      code: String.raw`
int main()
{
    printf("Hello World");

    return 0;
}`,
      feedback: "due to missing #include <stdio.h>\nprintf() is not recognizable."
    },

    {
      type: "logic",
      code: String.raw`#include <stdio.h>

int main(void)
{
    int n1 = 1, n2 = 2;

    printf("%d", (n1 + n2) / 2);

    return 0;
}`
    },

    {
      type: "compiler", line: 1,
      code: String.raw`#include <stdio>

int main()
{
    printf("Hello World");

    return 0;
}`,
      feedback: "wrong header file name, should be:\n#include <stdio.h>"
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>

int main()
{
    int n = 3;
    printf("%d", n + n);

    return 0;
}`
    },

    {
      type: "logic",
      code: String.raw`#include <stdio.h>

int main(void)
{
    int n = 3;

    printf("%d %d", n);

    return 0;
}`,
      feedback: "Expected to have:\nthree arguments for printf() function, but not compile error"
    },

    {
      type: "compiler", line: 6,
      code: String.raw`#include <stdio.h>

int main(void) {
    int x = 1;

    while x <= 5 {
        printf("%d\n", x);
        x++;
    }

    return 0;
}`
    },

    {
      type: "logic",
      code: String.raw`#include <stdio.h>

int main()
{
    int n;
    scanf("%d", n);
    printf("%d", n);

    return 0;
}`
    },

    {
      type: "logic",
      code: String.raw`#include <stdio.h>

int main(void)
{
    int n1 = 3, n2 = 1;

    int average = n1 + n2 / 2;

    printf("%d", average);

    return 0;
}`
    },

    {
      type: "compiler", line: 7,
      feedback: "missing a semi-column on Line 7",
      code: String.raw`#include <stdio.h>

int main(void) {
    int x = 5;

    while (x > 0) {
        printf("%d\n", x)
        x--;
    }

    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>

int main(void)
{
    int a = 11, b = 22;

    printf("%d", a + b);

    return 0;
}`
    },

    {
      type: "compiler", line: 10,
      code: String.raw`#include <stdio.h>

int main(void)
{
    int x = 11, y = 22;
    if (x < y) {
        printf("%d", x);
    } else {
        printf("%d", y);
    } else {
        printf("%d", x + y);
    }
    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>

int main(void)
{
    int x = 1;
    while (x <= 5) {
        printf("%d\n", x);
        x++;
    }
    return 0;
}`
    },

    {
      type: "compiler", line: 5,
      code: String.raw`#include <stdio.h>

int main(void)
{
    Integer side = 10 ;

    printf("%d", side);

    return 0;
}`
    },

    {
      type: "compiler", line: 5,
      code: String.raw`#include <stdio.h>

int main(void)
{
    int 2n;

    printf("%d", 2n);

    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>

int main()
{
    int n;
    scanf("%d", &n);
    printf("%d", n);

    return 0;
}`
    },

    {
      type: "compiler", line: 6,
      feedback: "variable n is not defined.",
      code: String.raw`#include <stdio.h>

int main()
{
    int x = 3;
    printf("%d", n);

    return 0;
}`
    },

    {
      type: "logic",
      code: String.raw`#include <stdio.h>

int main(void)
{
    int n;
    n = scanf("%d", &n);
    printf("%d", n);

    return 0;
}`
    },

    {
      type: "compiler", line: 7,
      code: String.raw`#include <stdio.h>

int main(void)
{
    int side = 10 ;

    printf("The volume of the cube: %d", side ** 3);

    return 0;
}`
    },

    {
      type: "compiler", line: 9,
      code: String.raw`#include <stdio.h>

int main(void)
{
    int x = 11, y = 22;
    if (x < y) {
        printf("%d", x);
    } else {
        printf(y);
    }
    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>

int main(void)
{
    int _2510 = 2510;

    printf("%d", _2510);

    return 0;
}`
    },

    // ---- Added from the quiz PDFs ----

    {
      type: "logic",
      feedback: "extra semi-column on line 6, make while loop has only one (null) statement.\nwhile-loop became a dead loop",
      code: String.raw`#include <stdio.h>

int main(void) {
    int x = 1;

    while (x <= 5);
    {
        printf("%d\n", x);
        x++;
    }

    return 0;
}`
    },

    {
      type: "compiler", line: 6,
      code: String.raw`#include <stdio.h>

int main(void)
{
    int num = 0;
    scanf("%d"  &num);
    printf("You input: %d", num);

    return 0;
}`
    },

    {
      type: "logic",
      code: String.raw`#include <stdio.h>

int main()
{
    int n = 3;
    printf("%d", n, n);

    return 0;
}`
    },

    {
      type: "logic",
      code: String.raw`#include <stdio.h>

int main()
{
    int n = 3;
    printf("%f", n);

    return 0;
}`
    },

    {
      type: "compiler", line: 5,
      code: String.raw`#include <stdio.h>

int main(void)
{
    int side == 10 ;

    printf("%d", side);

    return 0;
}`
    },

    {
      type: "compiler", line: 5,
      code: String.raw`#include <stdio.h>

int main(void)
{
    int height = length = width = 10;

    printf("%d", height * length * width);

    return 0;
}`
    },
    
    {
      type: "compiler", line: 7,
      code: String.raw`#include <stdio.h>

int main(void)
{
    int x = 11, y = 22;
    if (x < y) {
        println("%d", x);
    }
    return 0;
}`
    }

  ]
});