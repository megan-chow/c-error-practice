// Lesson 2: Control Structures
//
// Each question needs:
//   type:        "compiler" | "runtime" | "logic" | "none"
//   line:        (compiler only) the line with the error
//   code:        the C code, inside String.raw`...` so backslashes like \n stay as written
//   feedback:    (optional) instructor feedback, shown in its own box after the answer.
//                Leave it out and nothing extra is displayed. Use \n for line breaks.

registerLesson({
  number: 2,
  title: "Control Structures",
  questions: [
    // ---- if / else ----

    {
      type: "logic",
      code: String.raw`#include <stdio.h>

int main(void) {
    int x = 10;
    scanf("%d", &x);

    if (x == 0 || 10)
        printf("Zero or Ten\n");
    else
        printf("Invalid\n");

    return 0;
}`
    },

    {
      type: "compiler", line: 8,
      code: String.raw`#include <stdio.h>

int main(void) {
    int x = 10;
    scanf("%d", &x);

    if (x > 0 && x < 10)
        printf("Valid\n")
    else
        printf("Invalid\n");

    return 0;
}`
    },

    {
      type: "compiler", line: 7,
      code: String.raw`#include <stdio.h>

int main(void) {
    int x = 10;
    scanf("%d", &x);

    if (x > 5 && < 20) {
        printf("Valid\n");
    }

    return 0;
}`
    },

    // ---- while ----

    {
      type: "none",
      code: String.raw`#include <stdio.h>

int main(void) {
    int x = 1;

    while (x <= 10 && x != 5) {
        printf("%d\n", x);
        x++;
    }

    return 0;
}`
    },

    {
      type: "logic",
      code: String.raw`#include <stdio.h>

int main(void) {
    int x = 1;

    while (x <= 5) {
        printf("%d\n", x);
    }

    return 0;
}`
    },

    {
      type: "logic",
      code: String.raw`#include <stdio.h>

int main(void) {
    int x = 1;

    while (x < 5) {
        continue;
        x++;
    }

    return 0;
}`
    },

    {
      type: "logic",
      code: String.raw`#include <stdio.h>

int main(void) {
    int x = 5;

    while (x = 0) {
        printf("%d\n", x);
        x--;
    }

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

    {
      type: "compiler", line: 8,
      code: String.raw`#include <stdio.h>

int main(void) {
    int x = 1;

    while (x <= 5) {
        printf("%d\n", x);
        x++
    }

    return 0;
}`
    },

    {
      type: "compiler", line: 11,
      code: String.raw`#include <stdio.h>

int main(void) {
    int x = 1;

    while (x <= 5) {
        printf("%d\n", x);
        x++;

    return 0;
}`
    },

    {
      type: "compiler", line: 8,
      code: String.raw`#include <stdio.h>

int main(void) {
    int x = 10;

    while (x > 0) {
        if (x == 5)
            break
        x--;
    }

    return 0;
}`
    },

    // ---- do-while ----

    {
      type: "logic",
      code: String.raw`#include <stdio.h>

int main(void) {
    size_t i = 1;

    do {
        printf("%d\n", i);
    } while (i <= 5);

    return 0;
}`
    },

    {
      type: "logic",
      code: String.raw`#include <stdio.h>

int main(void) {
    size_t i = 1;

    do {
        printf("%d\n", i);
        i++;
    } while (i = 5);

    return 0;
}`
    },

    {
      type: "logic",
      code: String.raw`#include <stdio.h>

int main(void) {
    size_t i = 1;

    do {
        if (i == 3)
            continue;

        printf("%d\n", i);
        i++;
    } while (i <= 5);

    return 0;
}`
    },

    {
      type: "compiler", line: 8,
      code: String.raw`#include <stdio.h>

int main(void) {
    size_t i = 1;

    do {
        if (i == 3)
            break

        printf("%d\n", i);
        i++;
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
      type: "compiler", line: 9,
      code: String.raw`#include <stdio.h>

int main(void) {
    size_t i = 1;

    do {
        printf("%d\n", i);
        i++;
    } while (i <= 5)

    return 0;
}`
    },

    {
      type: "compiler", line: 9,
      code: String.raw`#include <stdio.h>

int main(void) {
    size_t i = 1;

    do {
        printf("%d\n", i);
        i++;
    } while i <= 5;

    return 0;
}`
    },

    // ---- for ----

    {
      type: "none",
      code: String.raw`#include <stdio.h>

int main(void) {
    size_t i;

    for (i = 0; i < 5; i++) {
        printf("%d\n", i);
    }

    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>

int main(void) {
    size_t i = 10, j = 0;

    for (; i > j; i++, j+=2) {
        printf("%d - %d\n", i, j);
    }

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
      type: "compiler", line: 6,
      code: String.raw`#include <stdio.h>

int main(void) {
    size_t i;

    for i = 0; i < 5; i++ {
        printf("%d\n", i);
    }

    return 0;
}`
    },

    {
      type: "compiler", line: 7,
      code: String.raw`#include <stdio.h>

int main(void) {
    size_t i;

    for (i = 0; i < 5; i++) {
        printf("%d\n", i)
    }

    return 0;
}`
    },

    {
      type: "compiler", line: 8,
      code: String.raw`#include <stdio.h>

int main(void) {
    size_t i;

    for (i = 0; i < 5; i++) {
        if (i == 3)
            break

        printf("%d\n", i);
    }

    return 0;
}`
    },

    // ---- switch ----

    {
      type: "compiler", line: 11,
      code: String.raw`#include <stdio.h>

int main(void) {
    int choice;
    scanf("%d", &choice);

    switch (choice) {
        case 1:
            printf("One\n");
            break;
        case 1:
            printf("Again\n");
            break;
        default:
            printf("Other\n");
    }

    return 0;
}`
    },

    {
      type: "compiler", line: 8,
      code: String.raw`#include <stdio.h>

int main(void) {
    int choice;
    scanf("%d", &choice);

    switch (choice) {
        case choice:
            printf("Match\n");
            break;
        default:
            printf("No match\n");
    }

    return 0;
}`
    },

    {
      type: "compiler", line: 7,
      code: String.raw`#include <stdio.h>

int main(void) {
    float score = 2.0;
    scanf("%f", &score);

    switch (score) {
        case 1:
            printf("One\n");
            break;
        case 2:
            printf("Two\n");
            break;
    }

    return 0;
}`
    },

    {
      type: "logic",
      code: String.raw`#include <stdio.h>

int main(void) {
    int choice;
    scanf("%d", &choice);

    switch (choice) {
        case 1:
            printf("One\n");
        case 2:
            printf("Two\n");
            break;
        default:
            printf("Other\n");
    }

    return 0;
}`
    },

    {
      type: "compiler", line: 13,
      code: String.raw`#include <stdio.h>

int main(void) {
    int choice = 1;
    scanf("%d", &choice);

    switch (choice) {
        case 1:
            printf("One\n");
            break;
        case 2:
            printf("Two\n");
            continue;
        default:
            printf("Other\n");
    }

    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>

int main(void) {
    int choice;
    scanf("%d", &choice);

    switch (choice) {
        case 1:
            printf("One\n");
            break;
        default:
            printf("Other\n");
            break;
        case 3:
            printf("Three\n");
            break;
    }

    return 0;
}`
    }

  ]
});