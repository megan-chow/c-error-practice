// Lesson 5 & 6: Arrays & Strings
//
// Each question needs:
//   type:        "compiler" | "runtime" | "logic" | "none"
//   line:        (compiler only) the line with the error
//   code:        the C code, inside String.raw`...` so backslashes like \n stay as written
//   feedback:    (optional) instructor feedback, shown in its own box after the answer.
//                Leave it out and nothing extra is displayed. Use \n for line breaks.
//
// Extracted from the Lesson 5 & 6 in-lab quiz PDFs (duplicates removed).

registerLesson({
  number: "5-6",
  title: "Arrays & Strings",
  questions: [
    {
      type: "compiler", line: 7,
      feedback: "Compile error — an array name cannot be assigned a value.\nFix: numbers[i] = 0;",
      code: String.raw`#include <stdio.h>

int main(void) {
    int numbers[5] = {1, 2, 3, 4, 5};

    for (int i = 0; i < 5; i++) {
        numbers = 0;
    }

    return 0;
}`
    },

    {
      type: "logic",
      feedback: "Logic error — a == b compares addresses, not the elements of the arrays.\nFix: Compare corresponding elements individually.",
      code: String.raw`#include <stdio.h>

int main(void) {
    int a[] = {1, 2, 3};
    int b[] = {1, 2, 3};

    if (a == b) {
        printf("Same\n");
    } else {
        printf("Different\n");
    }

    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>

int main(void) {
    char letters[4] = {'A', 'B', 'C', 'D'};

    printf("%c\n", letters[2]);

    return 0;
}`
    },

    {
      type: "compiler", line: 7,
      feedback: "invalid way to assign array on Line 7",
      code: String.raw`#include <stdio.h>

int main(void) {
    int a[3] = {1, 2, 3};
    int b[3];

    b = a;

    printf("%d\n", b[0]);

    return 0;
}`
    },

    {
      type: "runtime",
      feedback: "should go with \"%s\" to print a string",
      code: String.raw`#include <stdio.h>

int main(void) {
    char word[] = "Hello";

    printf("%c\n", word);

    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>

int main(void) {
    char word[] = "Hello";

    printf("%c\n", word[1]);

    return 0;
}`
    },

    {
      type: "runtime",
      feedback: "run-time error (undefined behaviour)\nExplanation: %s expects a pointer to a null-terminated character array, but word[0] is the single character 'H'.",
      code: String.raw`#include <stdio.h>

int main(void) {
    char word[] = "Hello";

    printf("%s\n", word[0]);

    return 0;
}`
    },

    {
      type: "logic",
      feedback: "Expected to see -3, but will print 0",
      code: String.raw`#include <stdio.h>

int main(void) {
    int numbers[] = {-8, -3, -12, -5};
    int largest = 0;

    for (size_t i = 0; i < 4; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    printf("%d\n", largest);

    return 0;
}`
    },

    {
      type: "runtime",
      feedback: "Valid indexes are 0 through 4. Accessing numbers[5] is outside the array bounds and causes undefined behavior.",
      code: String.raw`#include <stdio.h>

int main(void) {
    int numbers[5] = {10, 20, 30, 40, 50};

    printf("%d\n", numbers[5]);

    return 0;
}`
    },

    {
      type: "logic",
      feedback: "wrong divisor: sizeof(data) will be 16 (how many bytes), not 4 (how many elements/slots)",
      code: String.raw`#include <stdio.h>

/* Expect: figure out the mean of the array.*/
int main(void) {
    int data[] = {3, 4, 6, 8};
    double sum = 0;

    for (size_t i = 0; i < 4; i++) {
        sum += data[i];
    }

    double mean = sum / sizeof(data);

    printf("%.2f\n", mean);

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
      type: "logic",
      feedback: "Wrong logic since it missed data[0]",
      code: String.raw`#include <stdio.h>

/* Expect: calculate the mean of the array.*/
int main(void) {
    int data[] = {10, 20, 30, 40, 50};
    int sum = 0;

    for (size_t i = 1; i < 5; i++) {
        sum += data[i];
    }

    printf("%.2f\n", sum / 5.0);

    return 0;
}`
    },

    {
      type: "runtime",
      feedback: "run-time error (undefined behaviour)\nthe for loop access data[5] which is out of the array",
      code: String.raw`#include <stdio.h>

/* Expect: calculate the mean of the array.*/
int main(void) {
    int data[] = {10, 20, 30, 40, 50};
    int sum = data[0];

    for (size_t i = 1; i <= 5; i++) {
        sum += data[i];
    }

    printf("%.2f\n", sum / 5.0);

    return 0;
}`
    },

    {
      type: "runtime",
      feedback: "run-time error (undefined behaviour)\nExplanation: When i is 4 or 5, the program accesses data[i + 1], outside the array.",
      code: String.raw`#include <stdio.h>
/* Expect: sorting the array in ascending order.*/
int main(void) {
    int temp, data[] = {5, 2, 8, 1, 4};
    size_t size = 6;

    for (size_t pass = 0; pass < size; pass++) {
        for (size_t i = 0; i < size; i++) {
            if (data[i] > data[i + 1]) {
                temp = data[i];
                data[i] = data[i + 1];
                data[i + 1] = temp;
            }
        }
    }
    for (size_t i = 0; i < size; i++) {
        printf("%d ", data[i]);
    }
    return 0;
}`
    },

    {
      type: "logic",
      feedback: "The comparison is reversed.\nThis sorts the array in descending order.",
      code: String.raw`#include <stdio.h>
/* Expect: sorting the array in ascending order.*/
int main(void) {
    int temp, data[] = {5, 2, 8, 1, 4};
    size_t size = 5;

    for (size_t pass = 0; pass < size - 1; pass++) {
        for (size_t i = 0; i < size - 1; i++) {
            if (data[i] < data[i + 1]) {
                temp = data[i];
                data[i] = data[i + 1];
                data[i + 1] = temp;
            }
        }
    }

    for (size_t i = 0; i < size; i++) {
        printf("%d ", data[i]);
    }

    return 0;
}`
    },

    {
      type: "runtime",
      feedback: "Providing less values in initialization is allowed.\nBut data[2][0] and data[2][1] are beyond the array valid range, the last element/slot is data[1][2]\nrun-time error (undefined behaviour)",
      code: String.raw`#include <stdio.h>

int main(void) {
    int data[2][3] = {1, 2, 3};

    printf("%d %d\n", data[2][0], data[2][1]);

    return 0;
}`
    },

    {
      type: "runtime",
      feedback: "Providing less values in initialization is allowed.\nBut data[2][0] and data[2][1] are beyond the array valid range, the last element/slot is data[1][2]\nrun-time error (undefined behaviour)",
      code: String.raw`#include <stdio.h>

int main(void) {
    int data[2][3] = {{1}, {4, 5}};

    printf("%d %d\n", data[2][0], data[2][1]);

    return 0;
}`
    },

    {
      type: "none",
      feedback: "Provide less values in initialization is allowed",
      code: String.raw`#include <stdio.h>

int main(void) {
    int data[2][3] = {{1}, {4, 5}};

    printf("%d %d\n", data[0][2], data[1][2]);

    return 0;
}`
    },

    {
      type: "runtime",
      feedback: "run-time error (undefined behaviour)\nExplanation: The subscripts are reversed. When column becomes 2, the expression attempts to access data[2][row], but only rows 0 and 1 exist.\nIt should be: data[row][column]",
      code: String.raw`#include <stdio.h>

int main(void) {
    int data[2][3] = {{1, 2, 3}, {4, 5, 6}};

    for (size_t row = 0; row < 2; row++) {
        for (size_t column = 0; column < 3; column++) {
            printf("%d ", data[column][row]);
        }
    }

    return 0;
}`
    },

    {
      type: "compiler", line: 1,
      feedback: "wrong header file name, should be:\n#include <stdio.h>",
      code: String.raw`#include <stdio>

int main()
{
    printf("Hello World");

    return 0;
}`
    },

    {
      type: "runtime",
      feedback: "missing & for each array slot, should go with:\nscanf(\" %d\", &numbers[i]);",
      code: String.raw`#include <stdio.h>

int main(void) {
    int numbers[5];

    for (size_t i = 0; i < 5; i++) {
        scanf(" %d", numbers[i]);
    }

    return 0;
}`
    },

    {
      type: "runtime",
      feedback: "negative index",
      code: String.raw`#include <stdio.h>

int main(void) {
    int numbers[4] = {5, 10, 15, 20};
    int index = -1;

    printf("%d\n", numbers[index]);

    return 0;
}`
    },

    {
      type: "compiler", line: 6,
      feedback: "\"X\" is not a character. A single character should use single quotes.",
      code: String.raw`#include <stdio.h>

int main(void) {
    char letters[3] = {'A', 'B', 'C'};

    letters[0] = "X";

    printf("%c\n", letters[0]);

    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>

int main(void) {
    char word[] = "Hello";

    word[0] = 'J';

    printf("%s\n", word);

    return 0;
}`
    },

    {
      type: "logic",
      feedback: "Logic error — the comparison is reversed.\nFix: numbers[i] < smallest",
      code: String.raw`#include <stdio.h>

int main(void) {
    int numbers[] = {8, 3, 12, 1, 6};
    int smallest = numbers[0];

    for (int i = 1; i < 5; i++) {
        if (numbers[i] > smallest) {
            smallest = numbers[i];
        }
    }

    printf("%d\n", smallest);

    return 0;
}`
    },

    {
      type: "runtime",
      feedback: "Issue: Run-time error (undefined-behavior issue) — index 5 is outside the array.",
      code: String.raw`#include <stdio.h>

int main(void) {
    int numbers[5];

    for (size_t i = 0; i <= 5; i++) {
        numbers[i] = 0;
    }

    return 0;
}`
    },

    {
      type: "compiler", line: 6,
      feedback: "error: assignment to expression with array type",
      code: String.raw`#include <stdio.h>

int main(void) {
    char letters[] = "ABC";

    letters = "XYZ";

    printf("%c\n", letters[0]);

    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>

int main(void) {
    int data[][3] = {1, 2, 3, 4, 5, 6};

    for (size_t row = 0; row < 2; row++) {
        for (size_t column = 0; column < 3; column++) {
            printf("%d ", data[row][column]);
        }
    }

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
      type: "compiler", line: 8,
      feedback: "word[i] is a single char, while \"a\" is a string literal. A character comparison should use: if (word[i] == 'a')",
      code: String.raw`#include <stdio.h>

int main(void) {
    char word[] = "banana";
    int count = 0;

    for (int i = 0; word[i] != '\0'; i++) {
        if (word[i] == "a") {
            count++;
        }
    }

    printf("%d\n", count);

    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>

int main(void) {

    int numbers[10] = {10, 20, 30, 40, 50};

    printf("%d\n", numbers[6]);

    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>

int main(void) {
    char letters[3] = {'A', 'B', 'C'};

    letters[1] = 'X';

    printf("%c\n", letters[1]);

    return 0;
}`
    },

    {
      type: "runtime",
      feedback: "run-time error (undefined behavior)\nExplanation: word[5] was never set to '\\0'.",
      code: String.raw`#include <stdio.h>

int main(void) {
    char word[6];

    word[0] = 'H';
    word[1] = 'e';
    word[2] = 'l';
    word[3] = 'l';
    word[4] = 'o';

    printf("%s\n", word);

    return 0;
}`
    },

    {
      type: "logic",
      feedback: "Logic error — i is incremented instead of the array element.\nFix: numbers[i]++;",
      code: String.raw`#include <stdio.h>

/* Expected to increment each value by 1,
     then print the updated values.*/
int main(void) {
    int numbers[] = {1, 2, 3, 4};

    for (size_t i = 0; i < 4; i++) {
        numbers[i++];
        printf("%d ", numbers[i]);
    }

    return 0;
}`
    },

    {
      type: "runtime",
      feedback: "run-time error (undefined behaviour)\nExplanation: Each row has columns 0, 1, and 2. When column == 3, the program accesses outside that row.",
      code: String.raw`#include <stdio.h>

int main(void) {
    int data[2][3] = { 1, 2, 3, 4, 5, 6};

    for (size_t row = 0; row < 2; row++) {
        for (size_t column = 0; column <= 3; column++) {
            printf("%d ", data[row][column]);
        }
    }

    return 0;
}`
    },

    {
      type: "compiler", line: 9,
      feedback: "Compile error — i is out of scope in the block, and the semicolon terminates the loop.\nFix: Remove the semicolon and make the block the loop body.",
      code: String.raw`#include <stdio.h>

/* Expected to set each element to its index*/
int main(void) {
    int numbers[5];

    for (size_t i = 0; i < 5; i++);
    {
        numbers[i] = i;
    }

    return 0;
}`
    },

    {
      type: "logic",
      feedback: "Wrong logic since missing sorting",
      code: String.raw`#include <stdio.h>

/* Expect: figure out the median of the array.*/
int main(void) {
    int data[] = {8, 2, 10, 4, 6};

    double median = data[5 / 2];

    printf("%.2f\n", median);

    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>

int main(void) {
    char word[] = "Hello";
    size_t count = 0;

    while (word[count] != '\0') {
        count++;
    }

    printf("%d\n", count);

    return 0;
}`
    },

    {
      type: "runtime",
      feedback: "Out-of-bounds access — the first valid reverse index is 3.\nFix: size_t i = 3",
      code: String.raw`#include <stdio.h>

/* Expected to print an Array Backwards*/
int main(void) {
    int numbers[] = {10, 20, 30, 40};

    for (size_t i = 4; i >= 0; i--) {
        printf("%d ", numbers[i]);
    }

    return 0;
}`
    },

    {
      type: "runtime",
      feedback: "run-time error (undefined behaviour)\nExplanation: A 2 x 3 array has last element/slot as data[1][2]. Try to access the slot with index [1][3] is outside the array.",
      code: String.raw`#include <stdio.h>

int main(void) {
    int data[2][3] = {
        {1, 2, 3},
        {4, 5, 6}
    };

    printf("%d\n", data[1][3]);

    return 0;
}`
    },

    {
      type: "runtime",
      feedback: "in the for loop, when i is 5, accessing data[5], which is NOT in data[] array",
      code: String.raw`#include <stdio.h>

/* linear search */
int main(void) {
    int data[] = {10, 20, 30, 40, 50};
    int key = 60;
    size_t found = (size_t)-1;

    for (size_t i = 0; i <= 5; i++) {
        if (data[i] == key) {
            found = i;
            break;
        }
    }

    printf("%d\n", (int)found);

    return 0;
}`
    },

    {
      type: "logic",
      feedback: "Logic error — assignment is used instead of comparison.\nFix: numbers[i] == target",
      code: String.raw`#include <stdio.h>

/* Expected to find a value from an array*/
int main(void) {
    int numbers[] = {4, 8, 12, 16};
    int target = 12;
    int found = 0;

    for (int i = 0; i < 4; i++) {
        if (numbers[i] = target) {
            found = 1;
        }
    }

    printf("%d\n", found);
    return 0;
}`
    },

    {
      type: "compiler", line: 6,
      feedback: "missing quotations on Line 6;\nZ will be seen as a variable",
      code: String.raw`#include <stdio.h>

int main(void) {
    char letters[3] = {'A', 'B', 'C'};

    letters[1] = Z;

    printf("%c\n", letters[1]);

    return 0;
}`
    },

    {
      type: "logic",
      feedback: "The loop repeatedly modifies numbers[0] instead of modifying each array element.",
      code: String.raw`#include <stdio.h>
/* Expected to double all values in the array.*/
int main(void) {
    int numbers[5] = {1, 2, 3, 4, 5};

    for (int i = 0; i < 5; i++) {
        numbers[0] = numbers[i] * 2;
    }

    for (int i = 0; i < 5; i++) {
        printf("%d ", numbers[i]);
    }

    return 0;
}`
    },

    {
      type: "logic",
      feedback: "logic error\nExplanation: word[0] is 'H', not '\\0', so the loop never executes. The program incorrectly prints 0.",
      code: String.raw`#include <stdio.h>

int main(void) {
    char word[] = "Hello";
    size_t count = 0;

    while (word[count] == '\0') {
        count++;
    }

    printf("%d\n", count);

    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>

int main(void) {

    int numbers[] = {10, 20, 30, 40, 50};

    printf("%d\n", numbers[2]);

    return 0;
}`
    },

    {
      type: "logic",
      feedback: "Wrong way to swap, unexpected result, no crash",
      code: String.raw`#include <stdio.h>
/* Expect: sorting the array in ascending order.*/
int main(void) {
    int temp, data[] = {5, 2, 8, 1, 4};
    size_t size = 5;

    for (size_t pass = 0; pass < size - 1; pass++) {
        for (size_t i = 0; i < size - 1; i++) {
            if (data[i] > data[i + 1]) {
                data[i] = data[i + 1];
                data[i + 1] = data[i];
            }
        }
    }

    for (size_t i = 0; i < size; i++) {
        printf("%d ", data[i]);
    }

    return 0;
}`
    },

    {
      type: "runtime",
      feedback: "run-time error (undefined behaviour)\nthe 3rd row should have row index 2, NOT 3",
      code: String.raw`#include <stdio.h>

/* To set all elements in the third row to 0.*/
int main(void) {
    int data[3][4] = {
        {1, 2, 3, 4},
        {5, 6, 7, 8},
        {9, 10, 11, 12}
    };

    for (size_t column = 0; column < 4; column++) {
        data[3][column] = 0;
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
    }

  ]
});