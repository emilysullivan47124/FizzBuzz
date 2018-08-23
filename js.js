
    for (i=1; i<101; i += 1) {
    // If multiple of both 3 and 5, print Fizz Buzz.
        if (i % 15  === 0) {
            document.write("<p> FizzBuzz </p>");
    // If multiple of 5, print Buzz
        } else if (i % 5 === 0) {
            document.write("<p> Buzz </p>");
    // If multiple of 3, print Fizz
        } else if (i % 3 === 0) {
        document.write("<p> Fizz </p>");
        // Print number 1 through 100.
        } else {
            document.write("<p>" + i + "</p>");
        }
    }

