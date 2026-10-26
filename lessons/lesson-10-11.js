// Lesson 10 & 11: Strings
//
// Each question needs:
//   type:        "compiler" | "runtime" | "logic" | "none"
//   line:        (compiler only) the line with the error
//   code:        the C code, inside String.raw`...` so backslashes like \n stay as written
//   feedback:    (optional) instructor feedback, shown in its own box after the answer.
//                Leave it out and nothing extra is displayed. Use \n for line breaks.
//
// Extracted from the Lesson 10 & 11 in-lab quiz PDFs (duplicates removed).

registerLesson({
  number: "10-11",
  title: "Strings",
  questions: [
    // ---------- <ctype.h> ----------
    {
      type: "logic",
      feedback: "should use isxdigit() function to check",
      code: String.raw`#include <stdio.h>
#include <ctype.h>

/* Expect to check F is a hexadecimal digit */
int main(void) {
    char ch = 'F';

    if (isdigit(ch)) {
        printf("hexadecimal digit\n");
    }

    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>
#include <ctype.h>

/* Expect to check F is a hexadecimal digit */
int main(void) {
    char ch = 'F';

    if (isxdigit(ch)) {
        printf("hexadecimal digit\n");
    }

    return 0;
}`
    },

    {
      type: "logic",
      feedback: "no output\nIssue: Character-testing functions return zero for false and a nonzero value for true; the true value is not guaranteed to be exactly 1.",
      code: String.raw`#include <stdio.h>
#include <ctype.h>

/* Expect to print lowercase */
int main(void) {
    char ch = 'm';

    if (islower(ch) == 1) {
        printf("lowercase\n");
    }

    return 0;
}`
    },

    {
      type: "compiler", line: 7,
      feedback: "correct function name is toupper().\nThe compiler see no such function, toUpper(), compile failed\nC is case-sensitive, very important!",
      code: String.raw`#include <stdio.h>
#include <ctype.h>

/* Expect to convert b to uppercase and print B */
int main(void) {
    char ch = 'b';
    ch = toUpper(ch);

    printf("%c\n", ch);

    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>
#include <ctype.h>

/* Expect to convert G to lowercase and print g */
int main(void) {
    char ch = 'G';

    ch = tolower(ch);

    printf("%c\n", ch);

    return 0;
}`
    },

    {
      type: "compiler", line: 7,
      feedback: "The required header is missing, should have:\n#include <ctype.h>",
      code: String.raw`#include <stdio.h>

/* Expect to print digit*/
int main(void) {
    char ch = '7';

    if (isdigit(ch)) {
        printf("digit\n");
    }

    return 0;
}`
    },

    {
      type: "compiler", line: 6,
      feedback: "required header file is not included\nFix:\n#include <ctype.h>",
      code: String.raw`#include <stdio.h>
#include <stdlib.h>

/* Expect to convert G to lowercase and print g */
int main(void) {
    char ch = tolower('G');

    printf("%c\n", ch);

    return 0;
}`
    },

    // ---------- string-to-number conversion ----------
    {
      type: "logic",
      feedback: "Output: 12.00\nLogic error: atoi() converts a string to an int.",
      code: String.raw`#include <stdio.h>
#include <stdlib.h>

/* Expect to convert "12.75" to
     double 12.75 and print it*/

int main(void) {
    double value;

    value = atoi("12.75");

    printf("%.2f\n", value);

    return 0;
}`
    },

    {
      type: "runtime",
      feedback: "Run-time error (undefined behaviour)\nIssue: %f in sscanf() expects a float *; y is a double, so %lf is required.\nFix: sscanf(text, \"%d %lf\", &x, &y);",
      code: String.raw`#include <stdio.h>

/* Expect to read both values
     from the string, then print them*/
int main(void) {
    char text[] = "100 25.5";
    int x;
    double y;

    sscanf(text, "%d %f", &x, &y);

    printf("%d %.1f\n", x, y);

    return 0;
}`
    },

    // ---------- character / line I/O ----------
    {
      type: "compiler", line: 8,
      feedback: "Compile error on Line 8, due to wrong order for arguments\nFix:\nfgets(sentence, 80, stdin);",
      code: String.raw`#include <stdio.h>

/* Expect to read a line of text.*/
int main(void) {

    char sentence[80];

    fgets(sentence, stdin, 80);

    printf("%s", sentence);

    return 0;
}`
    },

    {
      type: "compiler", line: 6,
      feedback: "compile error on Line 6, due to missing one required argument\nthe 2nd argument should be an integer\nFix:\nfgets(sentence, 80, stdin);",
      code: String.raw`#include <stdio.h>

/* Expect to read a line of text.*/
int main(void) {
    char sentence[80];
    fgets(sentence, stdin);

    printf("%s", sentence);

    return 0;
}`
    },

    {
      type: "compiler", line: 7,
      feedback: "compile error on Line 7: wrong argument type\nputchar() expects one character (ascii code), not a string.\nFix:\nputs(message);",
      code: String.raw`#include <stdio.h>

/* Expect to print Hello*/
int main(void) {
    char message[] = "Hello";

    putchar(message);

    return 0;
}`
    },

    {
      type: "runtime",
      feedback: "Run-time error (undefined behaviour):\n%c expects an int representing a character, but message provides a pointer to the first element.",
      code: String.raw`#include <stdio.h>

/* Expect to print Hello */
int main(void) {
    char message[] = "Hello";

    printf("%c\n", message);

    return 0;
}`
    },

    // ---------- <string.h> ----------
    {
      type: "compiler", line: 9,
      feedback: "Missing required header file\nFix:\n#include <string.h>",
      code: String.raw`#include <stdio.h>

/* Expect to copy "Hello"
     into destination and print it.*/
int main(void) {
    char source[] = "Hello";
    char destination[20];

    strcpy(destination, source);

    printf("%s\n", destination);

    return 0;
}`
    },

    {
      type: "compiler", line: 10,
      feedback: "Wrong function name\nFix:\nstrcpy(destination, source);",
      code: String.raw`#include <stdio.h>
#include <string.h>

/* Expect to copy "Hello"
     into destination and print it.*/
int main(void) {
    char source[] = "Hello";
    char destination[20];

    strcopy(destination, source);

    printf("%s\n", destination);

    return 0;
}`
    },

    {
      type: "logic",
      feedback: "Output: Hello\nFix:\nstrcat(text, word);",
      code: String.raw`#include <stdio.h>
#include <string.h>

/* Expect to produce "Hello World" then print it*/
int main(void) {
    char text[30] = "Hello ";
    char word[30] = "World";

    strcat(word, text);

    printf("%s\n", text);

    return 0;
}`
    },

    {
      type: "runtime",
      feedback: "run-time error (undefined behaviour)\nIssue: text does not have enough space for the concatenated string.",
      code: String.raw`#include <stdio.h>
#include <string.h>

/* Expect to produce "Hello World" then print it*/
int main(void) {
    char text[6] = "Hello";
    char word[] = " World";

    strcat(text, word);

    printf("%s\n", text);

    return 0;
}`
    },

    {
      type: "none",
      feedback: "Output: same",
      code: String.raw`#include <stdio.h>
#include <string.h>

/* Expect to print same*/
int main(void) {
    char s1[] = "Hello";
    char s2[] = "Hello";

    if (strcmp(s1, s2) == 0) {
        printf("same\n");
    }

    return 0;
}`
    },

    {
      type: "logic",
      feedback: "No output\n\"ABC\" comes first, so strcmp() returns a negative value\nFix:\nif (strcmp(s1, s2) < 0)",
      code: String.raw`#include <stdio.h>
#include <string.h>

/* Expect to compare "ABC" and "ABD"
     and print: s1 comes first */
int main(void) {
    char s1[] = "ABC";
    char s2[] = "ABD";

    if (strcmp(s1, s2) == 1) {
        printf("s1 comes first\n");
    }

    return 0;
}`
    },

    {
      type: "none",
      feedback: "Output: first 3 characters match\n(as expected)",
      code: String.raw`#include <stdio.h>
#include <string.h>

/* Expect to compare only the first three characters.*/
int main(void) {
    char s1[] = "Computer";
    char s2[] = "Company";

    if (strncmp(s1, s2, 3) == 0) {
        printf("first 3 characters match\n");
    }

    return 0;
}`
    },

    {
      type: "runtime",
      feedback: "run-time error (undefined behaviour)\nstrncpy() does not add a null terminator when the requested number of characters is less than the source string length.\nFix: (to add)\ndestination[4] = '\\0';",
      code: String.raw`#include <stdio.h>
#include <string.h>

/* Expect to copy the first 4 characters
     and print Comp.*/
int main(void) {
    char source[] = "Computer";
    char destination[5];

    strncpy(destination, source, 4);

    printf("%s\n", destination);

    return 0;
}`
    },

    {
      type: "logic",
      feedback: "Expected to print \"found\", but no output\nwrong order of the arguments for strstr() function\nSince each of \"gram\" and text is passing in a memory address, compiler won't be able to detect the issue. ==> No compile error\nFix:\nif (strstr(text, \"gram\") != NULL)",
      code: String.raw`#include <stdio.h>
#include <string.h>

/* Expect to search for "gram" inside "programming"*/
int main(void) {
    char text[] = "programming";

    if (strstr("gram", text) != NULL) {
        printf("found\n");
    }

    return 0;
}`
    },

    {
      type: "none",
      feedback: "Output: found\n(as expected)",
      code: String.raw`#include <stdio.h>
#include <string.h>

/* Expect to search for "gram" inside "programming"*/
int main(void) {
    char text[] = "programming";

    if (strstr(text, "gram") != NULL) {
        printf("found\n");
    }

    return 0;
}`
    },

    {
      type: "logic",
      feedback: "logic error (infinite loop which keeps printing C)\nEach subsequent call should use NULL as the first argument.\nFix:\ntoken = strtok(NULL, \" \");",
      code: String.raw`#include <stdio.h>
#include <string.h>

/* Expect to print each word separately*/
int main(void) {
    char text[] = "C is fun";

    char *token = strtok(text, " ");

    while (token != NULL) {
        printf("%s\n", token);
        token = strtok(text, " ");
    }

    return 0;
}`
    },

    // ---------- character arrays as strings ----------
    {
      type: "logic",
      feedback: "Output: 9",
      code: String.raw`#include <stdio.h>

/* Expect to print 5*/
int main(void) {

    char message[10] = "Hello";

    printf("%d\n", sizeof(message) - 1);

    return 0;
}`
    },

    {
      type: "compiler", line: 8,
      feedback: "compile error:\nmessage is a memory address\nmessage[0] is a char ('H')\ncannot do a division",
      code: String.raw`#include <stdio.h>

/* Expect to print 5*/
int main(void) {

    char message[10] = "Hello";

    printf("%d\n", sizeof(message/message[0]));

    return 0;
}`
    },

    {
      type: "logic",
      feedback: "Output: l\nword[3] is the forth character",
      code: String.raw`#include <stdio.h>

/* Expect to print the third character of the string*/
int main(void) {
    char word[] = "Apple";

    printf("%c\n", word[3]);

    return 0;
}`
    },

    {
      type: "runtime",
      feedback: "run-time error (undefined behaviour) since missing '\\0' in the array",
      code: String.raw`#include <stdio.h>

int main(void) {
    char word[] = {'H', 'e', 'l', 'l', 'o'};

    printf("%s\n", word);

    return 0;
}`
    },

    {
      type: "runtime",
      feedback: "run-time error (undefined behaviour) since missing '\\0' in the array",
      code: String.raw`#include <stdio.h>

int main(void) {
    char school[4] = "BCIT";

    printf("%s\n", school);

    return 0;
}`
    },

    {
      type: "none",
      code: String.raw`#include <stdio.h>

/* Expect to store an empty C string */
int main(void) {
    char text[10];

    text[0] = '\0';

    printf("%s\n", text);

    return 0;
}`
    }

  ]
});