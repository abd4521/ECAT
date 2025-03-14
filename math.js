const mathQuestions = [
    {
        "question": "What is the value of \\( \\int (3x^2 - 4x + 2) \\, dx \\)?",
        "options": {
            "A": "\\( x^3 - 2x^2 + 2x + C \\)",
            "B": "\\( x^3 - 4x^2 + 2x + C \\)",
            "C": "\\( 3x^3 - 2x^2 + 2x + C \\)",
            "D": "\\( 3x^3 - 4x^2 + 2x + C \\)"
        },
        "answer": "A"
    },
    {
        "question": "What is the value of \\( \\lim_{x \\to 0} \\frac{\\sin x}{x} \\)?",
        "options": {
            "A": "0",
            "B": "1",
            "C": "∞",
            "D": "Undefined"
        },
        "answer": "B"
    },
    {
        "question": "What is the derivative of \\( f(x) = e^{x^2} \\)?",
        "options": {
            "A": "\\( 2x e^{x^2} \\)",
            "B": "\\( e^{x^2} \\)",
            "C": "\\( 2x e^{x} \\)",
            "D": "\\( x^2 e^{x^2} \\)"
        },
        "answer": "A"
    },
    {
        "question": "What is the integral of \\( \\int \\frac{1}{x} \\, dx \\)?",
        "options": {
            "A": "\\( \\ln|x| + C \\)",
            "B": "\\( x + C \\)",
            "C": "\\( \\frac{1}{x} + C \\)",
            "D": "\\( x \\ln|x| + C \\)"
        },
        "answer": "A"
    },
    {
        "question": "What is the value of \\( \\int_0^\\pi \\sin x \\, dx \\)?",
        "options": {
            "A": "0",
            "B": "1",
            "C": "2",
            "D": "π"
        },
        "answer": "C"
    },
    {
        "question": "What is the solution to the differential equation \\( \\frac{dy}{dx} = y \\)?",
        "options": {
            "A": "\\( y = e^x + C \\)",
            "B": "\\( y = Ce^x \\)",
            "C": "\\( y = x + C \\)",
            "D": "\\( y = \\ln|x| + C \\)"
        },
        "answer": "B"
    },
    {
        "question": "What is the value of \\( \\sum_{k=1}^n k \\)?",
        "options": {
            "A": "\\( \\frac{n(n+1)}{2} \\)",
            "B": "\\( \\frac{n(n-1)}{2} \\)",
            "C": "\\( n^2 \\)",
            "D": "\\( n(n+1) \\)"
        },
        "answer": "A"
    },
    {
        "question": "What is the probability of getting a sum of 7 when rolling two dice?",
        "options": {
            "A": "\\( \\frac{1}{6} \\)",
            "B": "\\( \\frac{1}{12} \\)",
            "C": "\\( \\frac{1}{36} \\)",
            "D": "\\( \\frac{1}{18} \\)"
        },
        "answer": "A"
    },
    {
        "question": "What is the value of \\( \\binom{n}{0} \\)?",
        "options": {
            "A": "0",
            "B": "1",
            "C": "n",
            "D": "Undefined"
        },
        "answer": "B"
    },
    {
        "question": "What is the value of \\( \\sqrt{-1} \\)?",
        "options": {
            "A": "1",
            "B": "-1",
            "C": "i",
            "D": "Undefined"
        },
        "answer": "C"
    },

        {
            "question": "What is the value of \\( \\int (3x^2 - 4x + 2) \\, dx \\)?",
            "options": {
                "A": "\\( x^3 - 2x^2 + 2x + C \\)",
                "B": "\\( x^3 - 4x^2 + 2x + C \\)",
                "C": "\\( 3x^3 - 2x^2 + 2x + C \\)",
                "D": "\\( 3x^3 - 4x^2 + 2x + C \\)"
            },
            "answer": "A"
        },
        {
            "question": "What is the value of \\( \\lim_{x \\to 0} \\frac{\\sin x}{x} \\)?",
            "options": {
                "A": "0",
                "B": "1",
                "C": "∞",
                "D": "Undefined"
            },
            "answer": "B"
        },
        {
            "question": "What is the derivative of \\( f(x) = e^{x^2} \\)?",
            "options": {
                "A": "\\( 2x e^{x^2} \\)",
                "B": "\\( e^{x^2} \\)",
                "C": "\\( 2x e^{x} \\)",
                "D": "\\( x^2 e^{x^2} \\)"
            },
            "answer": "A"
        },
        {
            "question": "What is the integral of \\( \\int \\frac{1}{x} \\, dx \\)?",
            "options": {
                "A": "\\( \\ln|x| + C \\)",
                "B": "\\( x + C \\)",
                "C": "\\( \\frac{1}{x} + C \\)",
                "D": "\\( x \\ln|x| + C \\)"
            },
            "answer": "A"
        },
        {
            "question": "What is the value of \\( \\int_0^\\pi \\sin x \\, dx \\)?",
            "options": {
                "A": "0",
                "B": "1",
                "C": "2",
                "D": "π"
            },
            "answer": "C"
        },
        {
            "question": "What is the solution to the differential equation \\( \\frac{dy}{dx} = y \\)?",
            "options": {
                "A": "\\( y = e^x + C \\)",
                "B": "\\( y = Ce^x \\)",
                "C": "\\( y = x + C \\)",
                "D": "\\( y = \\ln|x| + C \\)"
            },
            "answer": "B"
        },
        {
            "question": "What is the value of \\( \\sum_{k=1}^n k \\)?",
            "options": {
                "A": "\\( \\frac{n(n+1)}{2} \\)",
                "B": "\\( \\frac{n(n-1)}{2} \\)",
                "C": "\\( n^2 \\)",
                "D": "\\( n(n+1) \\)"
            },
            "answer": "A"
        },
        {
            "question": "What is the probability of getting a sum of 7 when rolling two dice?",
            "options": {
                "A": "\\( \\frac{1}{6} \\)",
                "B": "\\( \\frac{1}{12} \\)",
                "C": "\\( \\frac{1}{36} \\)",
                "D": "\\( \\frac{1}{18} \\)"
            },
            "answer": "A"
        },
        {
            "question": "What is the value of \\( \\binom{n}{0} \\)?",
            "options": {
                "A": "0",
                "B": "1",
                "C": "n",
                "D": "Undefined"
            },
            "answer": "B"
        },
        {
            "question": "What is the value of \\( \\sqrt{-1} \\)?",
            "options": {
                "A": "1",
                "B": "-1",
                "C": "i",
                "D": "Undefined"
            },
            "answer": "C"
        },
        {
            "question": "What is the value of \\( \\tan(45^\\circ) \\)?",
            "options": {
                "A": "0",
                "B": "1",
                "C": "∞",
                "D": "Undefined"
            },
            "answer": "B"
        },
        {
            "question": "What is the value of \\( \\sin(90^\\circ) \\)?",
            "options": {
                "A": "0",
                "B": "1",
                "C": "∞",
                "D": "Undefined"
            },
            "answer": "B"
        },
        {
            "question": "What is the value of \\( \\cos(0^\\circ) \\)?",
            "options": {
                "A": "0",
                "B": "1",
                "C": "∞",
                "D": "Undefined"
            },
            "answer": "B"
        },
        {
            "question": "What is the value of \\( \\lim_{x \\to \\infty} \\frac{1}{x} \\)?",
            "options": {
                "A": "0",
                "B": "1",
                "C": "∞",
                "D": "Undefined"
            },
            "answer": "A"
        },
        {
            "question": "What is the value of \\( \\int e^x \\, dx \\)?",
            "options": {
                "A": "\\( e^x + C \\)",
                "B": "\\( e^{x+1} + C \\)",
                "C": "\\( x e^x + C \\)",
                "D": "\\( \\ln|x| + C \\)"
            },
            "answer": "A"
        },
        {
            "question": "What is the value of \\( \\frac{d}{dx} \\ln x \\)?",
            "options": {
                "A": "\\( \\frac{1}{x} \\)",
                "B": "\\( x \\)",
                "C": "\\( \\ln x \\)",
                "D": "\\( e^x \\)"
            },
            "answer": "A"
        },
        {
            "question": "What is the value of \\( \\int_0^1 x^2 \\, dx \\)?",
            "options": {
                "A": "\\( \\frac{1}{2} \\)",
                "B": "\\( \\frac{1}{3} \\)",
                "C": "\\( \\frac{1}{4} \\)",
                "D": "\\( \\frac{1}{5} \\)"
            },
            "answer": "B"
        },
        {
            "question": "What is the value of \\( \\frac{d}{dx} \\sin x \\)?",
            "options": {
                "A": "\\( \\cos x \\)",
                "B": "\\( -\\cos x \\)",
                "C": "\\( \\sin x \\)",
                "D": "\\( -\\sin x \\)"
            },
            "answer": "A"
        },
        {
            "question": "What is the value of \\( \\frac{d}{dx} \\cos x \\)?",
            "options": {
                "A": "\\( \\sin x \\)",
                "B": "\\( -\\sin x \\)",
                "C": "\\( \\cos x \\)",
                "D": "\\( -\\cos x \\)"
            },
            "answer": "B"
        },
        {
            "question": "What is the value of \\( \\int \\cos x \\, dx \\)?",
            "options": {
                "A": "\\( \\sin x + C \\)",
                "B": "\\( -\\sin x + C \\)",
                "C": "\\( \\cos x + C \\)",
                "D": "\\( -\\cos x + C \\)"
            },
            "answer": "A"
        },
        {
            "question": "What is the value of \\( \\int \\sin x \\, dx \\)?",
            "options": {
                "A": "\\( \\cos x + C \\)",
                "B": "\\( -\\cos x + C \\)",
                "C": "\\( \\sin x + C \\)",
                "D": "\\( -\\sin x + C \\)"
            },
            "answer": "B"
        },
        {
            "question": "What is the value of \\( \\int_0^{\\pi/2} \\cos x \\, dx \\)?",
            "options": {
                "A": "0",
                "B": "1",
                "C": "\\( \\frac{\\pi}{2} \\)",
                "D": "π"
            },
            "answer": "B"
        },
        {
            "question": "What is the value of \\( \\int_0^{\\pi/2} \\sin x \\, dx \\)?",
            "options": {
                "A": "0",
                "B": "1",
                "C": "\\( \\frac{\\pi}{2} \\)",
                "D": "π"
            },
            "answer": "B"
        },
        {
            "question": "What is the value of \\( \\int_0^1 e^x \\, dx \\)?",
            "options": {
                "A": "\\( e - 1 \\)",
                "B": "\\( e \\)",
                "C": "1",
                "D": "0"
            },
            "answer": "A"
        },
        {
            "question": "What is the value of \\( \\int_1^e \\frac{1}{x} \\, dx \\)?",
            "options": {
                "A": "0",
                "B": "1",
                "C": "\\( e \\)",
                "D": "\\( \\ln e \\)"
            },
            "answer": "B"
        },
        {
            "question": "What is the value of \\( \\int_{-\\infty}^\\infty e^{-x^2} \\, dx \\)?",
            "options": {
                "A": "\\( \\sqrt{\\pi} \\)",
                "B": "\\( \\pi \\)",
                "C": "1",
                "D": "0"
            },
            "answer": "A"
        },
        {
            "question": "What is the value of \\( \\int_0^\\infty e^{-x} \\, dx \\)?",
            "options": {
                "A": "0",
                "B": "1",
                "C": "∞",
                "D": "Undefined"
            },
            "answer": "B"
        },
        {
            "question": "What is the value of \\( \\int_0^1 \\frac{1}{1+x^2} \\, dx \\)?",
            "options": {
                "A": "\\( \\frac{\\pi}{4} \\)",
                "B": "\\( \\frac{\\pi}{2} \\)",
                "C": "1",
                "D": "0"
            },
            "answer": "A"
        },
        {
            "question": "What is the value of \\( \\int_0^\\infty \\frac{1}{1+x^2} \\, dx \\)?",
            "options": {
                "A": "\\( \\frac{\\pi}{2} \\)",
                "B": "\\( \\pi \\)",
                "C": "1",
                "D": "0"
            },
            "answer": "A"
        },
        {
            "question": "What is the value of \\( \\int_0^\\infty \\frac{\\sin x}{x} \\, dx \\)?",
            "options": {
                "A": "\\( \\frac{\\pi}{2} \\)",
                "B": "\\( \\pi \\)",
                "C": "1",
                "D": "0"
            },
            "answer": "A"
        },
        {
            "question": "What is the value of \\( \\int_0^\\infty e^{-x^2} \\, dx \\)?",
            "options": {
                "A": "\\( \\frac{\\sqrt{\\pi}}{2} \\)",
                "B": "\\( \\frac{\\pi}{2} \\)",
                "C": "1",
                "D": "0"
            },
            "answer": "A"
        },
        {
            "question": "What is the value of \\( \\int_0^\\infty x e^{-x} \\, dx \\)?",
            "options": {
                "A": "1",
                "B": "0",
                "C": "∞",
                "D": "Undefined"
            },
            "answer": "A"
        },
        {
            "question": "What is the value of \\( \\int_0^\\infty x^2 e^{-x} \\, dx \\)?",
            "options": {
                "A": "2",
                "B": "1",
                "C": "0",
                "D": "∞"
            },
            "answer": "A"
        },
        {
            "question": "What is the value of \\( \\int_0^\\infty x^3 e^{-x} \\, dx \\)?",
            "options": {
                "A": "6",
                "B": "2",
                "C": "1",
                "D": "0"
            },
            "answer": "A"
        },
        {
            "question": "What is the value of \\( \\int_0^\\infty x^4 e^{-x} \\, dx \\)?",
            "options": {
                "A": "24",
                "B": "6",
                "C": "2",
                "D": "1"
            },
            "answer": "A"
        },
        {
            "question": "What is the value of \\( \\int_0^\\infty x^5 e^{-x} \\, dx \\)?",
            "options": {
                "A": "120",
                "B": "24",
                "C": "6",
                "D": "2"
            },
            "answer": "A"
        },
        {
            "question": "What is the value of \\( \\int_0^\\infty x^6 e^{-x} \\, dx \\)?",
            "options": {
                "A": "720",
                "B": "120",
                "C": "24",
                "D": "6"
            },
            "answer": "A"
        },
        {
            "question": "What is the value of \\( \\int_0^\\infty x^7 e^{-x} \\, dx \\)?",
            "options": {
                "A": "5040",
                "B": "720",
                "C": "120",
                "D": "24"
            },
            "answer": "A"
        },
        {
            "question": "What is the value of \\( \\int_0^\\infty x^8 e^{-x} \\, dx \\)?",
            "options": {
                "A": "40320",
                "B": "5040",
                "C": "720",
                "D": "120"
            },
            "answer": "A"
        },
        {
            "question": "What is the value of \\( \\int_0^\\infty x^9 e^{-x} \\, dx \\)?",
            "options": {
                "A": "362880",
                "B": "40320",
                "C": "5040",
                "D": "720"
            },
            "answer": "A"
        },
        {
            "question": "What is the value of \\( \\int_0^\\infty x^{10} e^{-x} \\, dx \\)?",
            "options": {
                "A": "3628800",
                "B": "362880",
                "C": "40320",
                "D": "5040"
            },
            "answer": "A"
        },
        
            {
                "question": "What is the value of \\( \\int (5x^4 - 3x^2 + 2x - 1) \\, dx \\)?",
                "options": {
                    "A": "\\( x^5 - x^3 + x^2 - x + C \\)",
                    "B": "\\( x^5 - x^3 + x^2 + C \\)",
                    "C": "\\( 5x^5 - 3x^3 + 2x^2 - x + C \\)",
                    "D": "\\( 5x^5 - 3x^3 + 2x^2 + C \\)"
                },
                "answer": "A"
            },
            {
                "question": "What is the value of \\( \\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} \\)?",
                "options": {
                    "A": "0",
                    "B": "\\( \\frac{1}{2} \\)",
                    "C": "1",
                    "D": "∞"
                },
                "answer": "B"
            },
            {
                "question": "What is the derivative of \\( f(x) = \\ln(x^2 + 1) \\)?",
                "options": {
                    "A": "\\( \\frac{2x}{x^2 + 1} \\)",
                    "B": "\\( \\frac{1}{x^2 + 1} \\)",
                    "C": "\\( \\frac{2x}{x^2} \\)",
                    "D": "\\( \\frac{2}{x^2 + 1} \\)"
                },
                "answer": "A"
            },
            {
                "question": "What is the integral of \\( \\int x e^x \\, dx \\)?",
                "options": {
                    "A": "\\( x e^x - e^x + C \\)",
                    "B": "\\( x e^x + e^x + C \\)",
                    "C": "\\( e^x (x - 1) + C \\)",
                    "D": "\\( e^x (x + 1) + C \\)"
                },
                "answer": "C"
            },
            {
                "question": "What is the value of \\( \\int_0^{\\pi/2} \\sin^2 x \\, dx \\)?",
                "options": {
                    "A": "\\( \\frac{\\pi}{4} \\)",
                    "B": "\\( \\frac{\\pi}{2} \\)",
                    "C": "\\( \\frac{1}{2} \\)",
                    "D": "\\( \\frac{1}{4} \\)"
                },
                "answer": "A"
            },
            {
                "question": "What is the solution to the differential equation \\( \\frac{dy}{dx} + y = e^x \\)?",
                "options": {
                    "A": "\\( y = e^x + Ce^{-x} \\)",
                    "B": "\\( y = e^x + C \\)",
                    "C": "\\( y = e^x - Ce^{-x} \\)",
                    "D": "\\( y = e^x - C \\)"
                },
                "answer": "A"
            },
            {
                "question": "What is the value of \\( \\sum_{k=1}^n k^2 \\)?",
                "options": {
                    "A": "\\( \\frac{n(n+1)(2n+1)}{6} \\)",
                    "B": "\\( \\frac{n(n+1)}{2} \\)",
                    "C": "\\( \\frac{n^2(n+1)^2}{4} \\)",
                    "D": "\\( \\frac{n(n+1)}{3} \\)"
                },
                "answer": "A"
            },
            {
                "question": "What is the probability of drawing two aces in a row from a deck of 52 cards without replacement?",
                "options": {
                    "A": "\\( \\frac{1}{221} \\)",
                    "B": "\\( \\frac{1}{169} \\)",
                    "C": "\\( \\frac{1}{52} \\)",
                    "D": "\\( \\frac{1}{26} \\)"
                },
                "answer": "A"
            },
            {
                "question": "What is the value of \\( \\binom{n}{1} \\)?",
                "options": {
                    "A": "0",
                    "B": "1",
                    "C": "n",
                    "D": "Undefined"
                },
                "answer": "C"
            },
            {
                "question": "What is the value of \\( \\sqrt{(-1)^2} \\)?",
                "options": {
                    "A": "1",
                    "B": "-1",
                    "C": "i",
                    "D": "Undefined"
                },
                "answer": "A"
            },
            {
                "question": "What is the value of \\( \\tan(60^\\circ) \\)?",
                "options": {
                    "A": "\\( \\sqrt{3} \\)",
                    "B": "\\( \\frac{1}{\\sqrt{3}} \\)",
                    "C": "1",
                    "D": "∞"
                },
                "answer": "A"
            },
            {
                "question": "What is the value of \\( \\sin(30^\\circ) \\)?",
                "options": {
                    "A": "\\( \\frac{1}{2} \\)",
                    "B": "\\( \\frac{\\sqrt{3}}{2} \\)",
                    "C": "\\( \\frac{1}{\\sqrt{2}} \\)",
                    "D": "1"
                },
                "answer": "A"
            },
            {
                "question": "What is the value of \\( \\cos(60^\\circ) \\)?",
                "options": {
                    "A": "\\( \\frac{1}{2} \\)",
                    "B": "\\( \\frac{\\sqrt{3}}{2} \\)",
                    "C": "\\( \\frac{1}{\\sqrt{2}} \\)",
                    "D": "1"
                },
                "answer": "A"
            },
            {
                "question": "What is the value of \\( \\lim_{x \\to \\infty} \\frac{x^2 + 3x + 2}{2x^2 + 5x + 1} \\)?",
                "options": {
                    "A": "0",
                    "B": "\\( \\frac{1}{2} \\)",
                    "C": "1",
                    "D": "∞"
                },
                "answer": "B"
            },
            {
                "question": "What is the value of \\( \\int \\frac{1}{x^2} \\, dx \\)?",
                "options": {
                    "A": "\\( -\\frac{1}{x} + C \\)",
                    "B": "\\( \\frac{1}{x} + C \\)",
                    "C": "\\( \\ln|x| + C \\)",
                    "D": "\\( -\\ln|x| + C \\)"
                },
                "answer": "A"
            },
            {
                "question": "What is the value of \\( \\int_0^1 x^3 \\, dx \\)?",
                "options": {
                    "A": "\\( \\frac{1}{4} \\)",
                    "B": "\\( \\frac{1}{3} \\)",
                    "C": "\\( \\frac{1}{2} \\)",
                    "D": "\\( \\frac{1}{5} \\)"
                },
                "answer": "A"
            },
            {
                "question": "What is the value of \\( \\frac{d}{dx} \\tan x \\)?",
                "options": {
                    "A": "\\( \\sec^2 x \\)",
                    "B": "\\( -\\sec^2 x \\)",
                    "C": "\\( \\tan x \\)",
                    "D": "\\( -\\tan x \\)"
                },
                "answer": "A"
            },
            {
                "question": "What is the value of \\( \\frac{d}{dx} \\sec x \\)?",
                "options": {
                    "A": "\\( \\sec x \\tan x \\)",
                    "B": "\\( -\\sec x \\tan x \\)",
                    "C": "\\( \\sec x \\)",
                    "D": "\\( -\\sec x \\)"
                },
                "answer": "A"
            },
            {
                "question": "What is the value of \\( \\int \\sec^2 x \\, dx \\)?",
                "options": {
                    "A": "\\( \\tan x + C \\)",
                    "B": "\\( -\\tan x + C \\)",
                    "C": "\\( \\sec x + C \\)",
                    "D": "\\( -\\sec x + C \\)"
                },
                "answer": "A"
            },
            {
                "question": "What is the value of \\( \\int \\tan x \\, dx \\)?",
                "options": {
                    "A": "\\( \\ln|\\sec x| + C \\)",
                    "B": "\\( -\\ln|\\sec x| + C \\)",
                    "C": "\\( \\tan x + C \\)",
                    "D": "\\( -\\tan x + C \\)"
                },
                "answer": "A"
            },
            {
                "question": "What is the value of \\( \\int_0^{\\pi/4} \\sec^2 x \\, dx \\)?",
                "options": {
                    "A": "1",
                    "B": "\\( \\frac{\\pi}{4} \\)",
                    "C": "\\( \\frac{1}{2} \\)",
                    "D": "\\( \\frac{\\pi}{2} \\)"
                },
                "answer": "A"
            },
            {
                "question": "What is the value of \\( \\int_0^{\\pi/4} \\tan x \\, dx \\)?",
                "options": {
                    "A": "\\( \\ln \\sqrt{2} \\)",
                    "B": "\\( \\ln 2 \\)",
                    "C": "\\( \\frac{1}{2} \\)",
                    "D": "\\( \\frac{\\pi}{4} \\)"
                },
                "answer": "A"
            },
            {
                "question": "What is the value of \\( \\int_0^1 x e^{x^2} \\, dx \\)?",
                "options": {
                    "A": "\\( \\frac{e - 1}{2} \\)",
                    "B": "\\( \\frac{e}{2} \\)",
                    "C": "\\( e - 1 \\)",
                    "D": "\\( e \\)"
                },
                "answer": "A"
            },
            {
                "question": "What is the value of \\( \\int_0^1 \\ln x \\, dx \\)?",
                "options": {
                    "A": "-1",
                    "B": "0",
                    "C": "1",
                    "D": "∞"
                },
                "answer": "A"
            },
            {
                "question": "What is the value of \\( \\int_{-\\infty}^\\infty \\frac{1}{1 + x^2} \\, dx \\)?",
                "options": {
                    "A": "\\( \\pi \\)",
                    "B": "\\( \\frac{\\pi}{2} \\)",
                    "C": "1",
                    "D": "0"
                },
                "answer": "A"
            },
            {
                "question": "What is the value of \\( \\int_0^\\infty \\frac{x}{1 + x^2} \\, dx \\)?",
                "options": {
                    "A": "∞",
                    "B": "0",
                    "C": "1",
                    "D": "\\( \\frac{\\pi}{2} \\)"
                },
                "answer": "A"
            },
            {
                "question": "What is the value of \\( \\int_0^\\infty \\frac{\\sin^2 x}{x^2} \\, dx \\)?",
                "options": {
                    "A": "\\( \\frac{\\pi}{2} \\)",
                    "B": "\\( \\pi \\)",
                    "C": "1",
                    "D": "0"
                },
                "answer": "A"
            },
            {
                "question": "What is the value of \\( \\int_0^\\infty \\frac{e^{-x}}{x} \\, dx \\)?",
                "options": {
                    "A": "∞",
                    "B": "0",
                    "C": "1",
                    "D": "\\( \\frac{\\pi}{2} \\)"
                },
                "answer": "A"
            },
            {
                "question": "What is the value of \\( \\int_0^\\infty x^2 e^{-x^2} \\, dx \\)?",
                "options": {
                    "A": "\\( \\frac{\\sqrt{\\pi}}{4} \\)",
                    "B": "\\( \\frac{\\sqrt{\\pi}}{2} \\)",
                    "C": "\\( \\frac{\\pi}{4} \\)",
                    "D": "\\( \\frac{\\pi}{2} \\)"
                },
                "answer": "A"
            },
            {
                "question": "What is the value of \\( \\int_0^\\infty x^3 e^{-x^2} \\, dx \\)?",
                "options": {
                    "A": "\\( \\frac{1}{2} \\)",
                    "B": "\\( \\frac{1}{4} \\)",
                    "C": "\\( \\frac{1}{8} \\)",
                    "D": "\\( \\frac{1}{16} \\)"
                },
                "answer": "A"
            },
            {
                "question": "What is the value of \\( \\int_0^\\infty x^4 e^{-x^2} \\, dx \\)?",
                "options": {
                    "A": "\\( \\frac{3\\sqrt{\\pi}}{8} \\)",
                    "B": "\\( \\frac{\\sqrt{\\pi}}{4} \\)",
                    "C": "\\( \\frac{\\sqrt{\\pi}}{2} \\)",
                    "D": "\\( \\frac{\\sqrt{\\pi}}{8} \\)"
                },
                "answer": "A"
            },
            {
                "question": "What is the value of \\( \\int_0^\\infty x^5 e^{-x^2} \\, dx \\)?",
                "options": {
                    "A": "\\( \\frac{1}{2} \\)",
                    "B": "\\( \\frac{1}{4} \\)",
                    "C": "\\( \\frac{1}{8} \\)",
                    "D": "\\( \\frac{1}{16} \\)"
                },
                "answer": "A"
            },
            {
                "question": "What is the value of \\( \\int_0^\\infty x^6 e^{-x^2} \\, dx \\)?",
                "options": {
                    "A": "\\( \\frac{15\\sqrt{\\pi}}{16} \\)",
                    "B": "\\( \\frac{3\\sqrt{\\pi}}{8} \\)",
                    "C": "\\( \\frac{\\sqrt{\\pi}}{4} \\)",
                    "D": "\\( \\frac{\\sqrt{\\pi}}{2} \\)"
                },
                "answer": "A"
            },
            {
                "question": "What is the value of \\( \\int_0^\\infty x^7 e^{-x^2} \\, dx \\)?",
                "options": {
                    "A": "\\( \\frac{1}{2} \\)",
                    "B": "\\( \\frac{1}{4} \\)",
                    "C": "\\( \\frac{1}{8} \\)",
                    "D": "\\( \\frac{1}{16} \\)"
                },
                "answer": "A"
            },
            {
                "question": "What is the value of \\( \\int_0^\\infty x^8 e^{-x^2} \\, dx \\)?",
                "options": {
                    "A": "\\( \\frac{105\\sqrt{\\pi}}{32} \\)",
                    "B": "\\( \\frac{15\\sqrt{\\pi}}{16} \\)",
                    "C": "\\( \\frac{3\\sqrt{\\pi}}{8} \\)",
                    "D": "\\( \\frac{\\sqrt{\\pi}}{4} \\)"
                },
                "answer": "A"
            },
            {
                "question": "What is the value of \\( \\int_0^\\infty x^9 e^{-x^2} \\, dx \\)?",
                "options": {
                    "A": "\\( \\frac{1}{2} \\)",
                    "B": "\\( \\frac{1}{4} \\)",
                    "C": "\\( \\frac{1}{8} \\)",
                    "D": "\\( \\frac{1}{16} \\)"
                },
                "answer": "A"
            },
            {
                "question": "What is the value of \\( \\int_0^\\infty x^{10} e^{-x^2} \\, dx \\)?",
                "options": {
                    "A": "\\( \\frac{945\\sqrt{\\pi}}{64} \\)",
                    "B": "\\( \\frac{105\\sqrt{\\pi}}{32} \\)",
                    "C": "\\( \\frac{15\\sqrt{\\pi}}{16} \\)",
                    "D": "\\( \\frac{3\\sqrt{\\pi}}{8} \\)"
                },
                "answer": "A"
            },
          
                {
                    "question": "What is the equation of a circle with center at (2, -3) and radius 5?",
                    "options": {
                        "A": "\\( (x - 2)^2 + (y + 3)^2 = 25 \\)",
                        "B": "\\( (x + 2)^2 + (y - 3)^2 = 25 \\)",
                        "C": "\\( (x - 2)^2 + (y + 3)^2 = 5 \\)",
                        "D": "\\( (x + 2)^2 + (y - 3)^2 = 5 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the center of the circle given by the equation \\( x^2 + y^2 - 4x + 6y - 12 = 0 \\)?",
                    "options": {
                        "A": "(2, -3)",
                        "B": "(-2, 3)",
                        "C": "(4, -6)",
                        "D": "(-4, 6)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the radius of the circle given by the equation \\( x^2 + y^2 - 6x + 8y - 11 = 0 \\)?",
                    "options": {
                        "A": "6",
                        "B": "8",
                        "C": "10",
                        "D": "12"
                    },
                    "answer": "C"
                },
                {
                    "question": "What is the equation of the parabola with vertex at (0, 0) and focus at (0, 2)?",
                    "options": {
                        "A": "\\( x^2 = 8y \\)",
                        "B": "\\( y^2 = 8x \\)",
                        "C": "\\( x^2 = 4y \\)",
                        "D": "\\( y^2 = 4x \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the focus of the parabola given by the equation \\( y^2 = 12x \\)?",
                    "options": {
                        "A": "(3, 0)",
                        "B": "(0, 3)",
                        "C": "(-3, 0)",
                        "D": "(0, -3)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the directrix of the parabola given by the equation \\( x^2 = -16y \\)?",
                    "options": {
                        "A": "\\( y = 4 \\)",
                        "B": "\\( y = -4 \\)",
                        "C": "\\( x = 4 \\)",
                        "D": "\\( x = -4 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the ellipse with center at (0, 0), major axis length 10, and minor axis length 6?",
                    "options": {
                        "A": "\\( \\frac{x^2}{25} + \\frac{y^2}{9} = 1 \\)",
                        "B": "\\( \\frac{x^2}{9} + \\frac{y^2}{25} = 1 \\)",
                        "C": "\\( \\frac{x^2}{100} + \\frac{y^2}{36} = 1 \\)",
                        "D": "\\( \\frac{x^2}{36} + \\frac{y^2}{100} = 1 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the center of the ellipse given by the equation \\( \\frac{(x - 2)^2}{16} + \\frac{(y + 3)^2}{9} = 1 \\)?",
                    "options": {
                        "A": "(2, -3)",
                        "B": "(-2, 3)",
                        "C": "(4, -6)",
                        "D": "(-4, 6)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the length of the major axis of the ellipse given by the equation \\( \\frac{x^2}{25} + \\frac{y^2}{9} = 1 \\)?",
                    "options": {
                        "A": "10",
                        "B": "6",
                        "C": "5",
                        "D": "3"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the hyperbola with center at (0, 0), transverse axis length 8, and conjugate axis length 6?",
                    "options": {
                        "A": "\\( \\frac{x^2}{16} - \\frac{y^2}{9} = 1 \\)",
                        "B": "\\( \\frac{x^2}{9} - \\frac{y^2}{16} = 1 \\)",
                        "C": "\\( \\frac{x^2}{64} - \\frac{y^2}{36} = 1 \\)",
                        "D": "\\( \\frac{x^2}{36} - \\frac{y^2}{64} = 1 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the center of the hyperbola given by the equation \\( \\frac{(x - 3)^2}{16} - \\frac{(y + 2)^2}{9} = 1 \\)?",
                    "options": {
                        "A": "(3, -2)",
                        "B": "(-3, 2)",
                        "C": "(4, -6)",
                        "D": "(-4, 6)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the length of the transverse axis of the hyperbola given by the equation \\( \\frac{x^2}{16} - \\frac{y^2}{9} = 1 \\)?",
                    "options": {
                        "A": "8",
                        "B": "6",
                        "C": "4",
                        "D": "3"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the eccentricity of the ellipse given by the equation \\( \\frac{x^2}{25} + \\frac{y^2}{9} = 1 \\)?",
                    "options": {
                        "A": "\\( \\frac{4}{5} \\)",
                        "B": "\\( \\frac{3}{5} \\)",
                        "C": "\\( \\frac{5}{4} \\)",
                        "D": "\\( \\frac{5}{3} \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the eccentricity of the hyperbola given by the equation \\( \\frac{x^2}{16} - \\frac{y^2}{9} = 1 \\)?",
                    "options": {
                        "A": "\\( \\frac{5}{4} \\)",
                        "B": "\\( \\frac{4}{5} \\)",
                        "C": "\\( \\frac{3}{4} \\)",
                        "D": "\\( \\frac{4}{3} \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the tangent to the circle \\( x^2 + y^2 = 25 \\) at the point (3, 4)?",
                    "options": {
                        "A": "\\( 3x + 4y = 25 \\)",
                        "B": "\\( 4x + 3y = 25 \\)",
                        "C": "\\( 3x - 4y = 25 \\)",
                        "D": "\\( 4x - 3y = 25 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the normal to the parabola \\( y^2 = 12x \\) at the point (3, 6)?",
                    "options": {
                        "A": "\\( x + y = 9 \\)",
                        "B": "\\( x - y = 9 \\)",
                        "C": "\\( x + y = 3 \\)",
                        "D": "\\( x - y = 3 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the tangent to the ellipse \\( \\frac{x^2}{25} + \\frac{y^2}{9} = 1 \\) at the point (5, 0)?",
                    "options": {
                        "A": "\\( x = 5 \\)",
                        "B": "\\( y = 5 \\)",
                        "C": "\\( x = -5 \\)",
                        "D": "\\( y = -5 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the tangent to the hyperbola \\( \\frac{x^2}{16} - \\frac{y^2}{9} = 1 \\) at the point (4, 0)?",
                    "options": {
                        "A": "\\( x = 4 \\)",
                        "B": "\\( y = 4 \\)",
                        "C": "\\( x = -4 \\)",
                        "D": "\\( y = -4 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the circle passing through the points (1, 2), (3, 4), and (5, 6)?",
                    "options": {
                        "A": "\\( x^2 + y^2 - 6x - 8y + 15 = 0 \\)",
                        "B": "\\( x^2 + y^2 - 8x - 6y + 15 = 0 \\)",
                        "C": "\\( x^2 + y^2 - 6x - 8y + 20 = 0 \\)",
                        "D": "\\( x^2 + y^2 - 8x - 6y + 20 = 0 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the parabola with vertex at (1, 2) and focus at (1, 4)?",
                    "options": {
                        "A": "\\( (x - 1)^2 = 8(y - 2) \\)",
                        "B": "\\( (y - 2)^2 = 8(x - 1) \\)",
                        "C": "\\( (x - 1)^2 = 4(y - 2) \\)",
                        "D": "\\( (y - 2)^2 = 4(x - 1) \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the ellipse with foci at (2, 0) and (-2, 0) and major axis length 6?",
                    "options": {
                        "A": "\\( \\frac{x^2}{9} + \\frac{y^2}{5} = 1 \\)",
                        "B": "\\( \\frac{x^2}{5} + \\frac{y^2}{9} = 1 \\)",
                        "C": "\\( \\frac{x^2}{36} + \\frac{y^2}{20} = 1 \\)",
                        "D": "\\( \\frac{x^2}{20} + \\frac{y^2}{36} = 1 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the hyperbola with foci at (3, 0) and (-3, 0) and transverse axis length 4?",
                    "options": {
                        "A": "\\( \\frac{x^2}{4} - \\frac{y^2}{5} = 1 \\)",
                        "B": "\\( \\frac{x^2}{5} - \\frac{y^2}{4} = 1 \\)",
                        "C": "\\( \\frac{x^2}{16} - \\frac{y^2}{20} = 1 \\)",
                        "D": "\\( \\frac{x^2}{20} - \\frac{y^2}{16} = 1 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the circle with center at (3, -2) and passing through the point (6, 1)?",
                    "options": {
                        "A": "\\( (x - 3)^2 + (y + 2)^2 = 18 \\)",
                        "B": "\\( (x + 3)^2 + (y - 2)^2 = 18 \\)",
                        "C": "\\( (x - 3)^2 + (y + 2)^2 = 36 \\)",
                        "D": "\\( (x + 3)^2 + (y - 2)^2 = 36 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the parabola with vertex at (2, 3) and directrix \\( y = 1 \\)?",
                    "options": {
                        "A": "\\( (x - 2)^2 = 8(y - 3) \\)",
                        "B": "\\( (y - 3)^2 = 8(x - 2) \\)",
                        "C": "\\( (x - 2)^2 = 4(y - 3) \\)",
                        "D": "\\( (y - 3)^2 = 4(x - 2) \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the ellipse with center at (1, 2), major axis length 10, and minor axis length 6?",
                    "options": {
                        "A": "\\( \\frac{(x - 1)^2}{25} + \\frac{(y - 2)^2}{9} = 1 \\)",
                        "B": "\\( \\frac{(x - 1)^2}{9} + \\frac{(y - 2)^2}{25} = 1 \\)",
                        "C": "\\( \\frac{(x - 1)^2}{100} + \\frac{(y - 2)^2}{36} = 1 \\)",
                        "D": "\\( \\frac{(x - 1)^2}{36} + \\frac{(y - 2)^2}{100} = 1 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the hyperbola with center at (2, -1), transverse axis length 8, and conjugate axis length 6?",
                    "options": {
                        "A": "\\( \\frac{(x - 2)^2}{16} - \\frac{(y + 1)^2}{9} = 1 \\)",
                        "B": "\\( \\frac{(x - 2)^2}{9} - \\frac{(y + 1)^2}{16} = 1 \\)",
                        "C": "\\( \\frac{(x - 2)^2}{64} - \\frac{(y + 1)^2}{36} = 1 \\)",
                        "D": "\\( \\frac{(x - 2)^2}{36} - \\frac{(y + 1)^2}{64} = 1 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the tangent to the circle \\( x^2 + y^2 = 16 \\) at the point (4, 0)?",
                    "options": {
                        "A": "\\( x = 4 \\)",
                        "B": "\\( y = 4 \\)",
                        "C": "\\( x = -4 \\)",
                        "D": "\\( y = -4 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the normal to the parabola \\( y^2 = 8x \\) at the point (2, 4)?",
                    "options": {
                        "A": "\\( x + y = 6 \\)",
                        "B": "\\( x - y = 6 \\)",
                        "C": "\\( x + y = 2 \\)",
                        "D": "\\( x - y = 2 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the tangent to the ellipse \\( \\frac{x^2}{16} + \\frac{y^2}{9} = 1 \\) at the point (4, 0)?",
                    "options": {
                        "A": "\\( x = 4 \\)",
                        "B": "\\( y = 4 \\)",
                        "C": "\\( x = -4 \\)",
                        "D": "\\( y = -4 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the tangent to the hyperbola \\( \\frac{x^2}{9} - \\frac{y^2}{16} = 1 \\) at the point (3, 0)?",
                    "options": {
                        "A": "\\( x = 3 \\)",
                        "B": "\\( y = 3 \\)",
                        "C": "\\( x = -3 \\)",
                        "D": "\\( y = -3 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the circle passing through the points (0, 0), (2, 0), and (0, 2)?",
                    "options": {
                        "A": "\\( x^2 + y^2 - 2x - 2y = 0 \\)",
                        "B": "\\( x^2 + y^2 - 4x - 4y = 0 \\)",
                        "C": "\\( x^2 + y^2 - 2x - 2y + 4 = 0 \\)",
                        "D": "\\( x^2 + y^2 - 4x - 4y + 4 = 0 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the parabola with vertex at (0, 0) and directrix \\( x = -2 \\)?",
                    "options": {
                        "A": "\\( y^2 = 8x \\)",
                        "B": "\\( x^2 = 8y \\)",
                        "C": "\\( y^2 = 4x \\)",
                        "D": "\\( x^2 = 4y \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the ellipse with foci at (0, 3) and (0, -3) and major axis length 10?",
                    "options": {
                        "A": "\\( \\frac{x^2}{16} + \\frac{y^2}{25} = 1 \\)",
                        "B": "\\( \\frac{x^2}{25} + \\frac{y^2}{16} = 1 \\)",
                        "C": "\\( \\frac{x^2}{100} + \\frac{y^2}{64} = 1 \\)",
                        "D": "\\( \\frac{x^2}{64} + \\frac{y^2}{100} = 1 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the hyperbola with foci at (4, 0) and (-4, 0) and transverse axis length 6?",
                    "options": {
                        "A": "\\( \\frac{x^2}{9} - \\frac{y^2}{7} = 1 \\)",
                        "B": "\\( \\frac{x^2}{7} - \\frac{y^2}{9} = 1 \\)",
                        "C": "\\( \\frac{x^2}{36} - \\frac{y^2}{28} = 1 \\)",
                        "D": "\\( \\frac{x^2}{28} - \\frac{y^2}{36} = 1 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the circle with center at (-1, 2) and passing through the point (2, 5)?",
                    "options": {
                        "A": "\\( (x + 1)^2 + (y - 2)^2 = 18 \\)",
                        "B": "\\( (x - 1)^2 + (y + 2)^2 = 18 \\)",
                        "C": "\\( (x + 1)^2 + (y - 2)^2 = 36 \\)",
                        "D": "\\( (x - 1)^2 + (y + 2)^2 = 36 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the parabola with vertex at (3, 4) and focus at (3, 6)?",
                    "options": {
                        "A": "\\( (x - 3)^2 = 8(y - 4) \\)",
                        "B": "\\( (y - 4)^2 = 8(x - 3) \\)",
                        "C": "\\( (x - 3)^2 = 4(y - 4) \\)",
                        "D": "\\( (y - 4)^2 = 4(x - 3) \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the ellipse with center at (2, -1), major axis length 12, and minor axis length 8?",
                    "options": {
                        "A": "\\( \\frac{(x - 2)^2}{36} + \\frac{(y + 1)^2}{16} = 1 \\)",
                        "B": "\\( \\frac{(x - 2)^2}{16} + \\frac{(y + 1)^2}{36} = 1 \\)",
                        "C": "\\( \\frac{(x - 2)^2}{144} + \\frac{(y + 1)^2}{64} = 1 \\)",
                        "D": "\\( \\frac{(x - 2)^2}{64} + \\frac{(y + 1)^2}{144} = 1 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the hyperbola with center at (1, -2), transverse axis length 10, and conjugate axis length 8?",
                    "options": {
                        "A": "\\( \\frac{(x - 1)^2}{25} - \\frac{(y + 2)^2}{16} = 1 \\)",
                        "B": "\\( \\frac{(x - 1)^2}{16} - \\frac{(y + 2)^2}{25} = 1 \\)",
                        "C": "\\( \\frac{(x - 1)^2}{100} - \\frac{(y + 2)^2}{64} = 1 \\)",
                        "D": "\\( \\frac{(x - 1)^2}{64} - \\frac{(y + 2)^2}{100} = 1 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the tangent to the circle \\( x^2 + y^2 = 9 \\) at the point (3, 0)?",
                    "options": {
                        "A": "\\( x = 3 \\)",
                        "B": "\\( y = 3 \\)",
                        "C": "\\( x = -3 \\)",
                        "D": "\\( y = -3 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the normal to the parabola \\( y^2 = 16x \\) at the point (4, 8)?",
                    "options": {
                        "A": "\\( x + y = 12 \\)",
                        "B": "\\( x - y = 12 \\)",
                        "C": "\\( x + y = 4 \\)",
                        "D": "\\( x - y = 4 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the tangent to the ellipse \\( \\frac{x^2}{9} + \\frac{y^2}{4} = 1 \\) at the point (3, 0)?",
                    "options": {
                        "A": "\\( x = 3 \\)",
                        "B": "\\( y = 3 \\)",
                        "C": "\\( x = -3 \\)",
                        "D": "\\( y = -3 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the tangent to the hyperbola \\( \\frac{x^2}{16} - \\frac{y^2}{9} = 1 \\) at the point (4, 0)?",
                    "options": {
                        "A": "\\( x = 4 \\)",
                        "B": "\\( y = 4 \\)",
                        "C": "\\( x = -4 \\)",
                        "D": "\\( y = -4 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the circle passing through the points (1, 1), (2, 2), and (3, 1)?",
                    "options": {
                        "A": "\\( x^2 + y^2 - 4x - 2y + 4 = 0 \\)",
                        "B": "\\( x^2 + y^2 - 2x - 4y + 4 = 0 \\)",
                        "C": "\\( x^2 + y^2 - 4x - 2y + 5 = 0 \\)",
                        "D": "\\( x^2 + y^2 - 2x - 4y + 5 = 0 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the parabola with vertex at (0, 0) and directrix \\( y = -3 \\)?",
                    "options": {
                        "A": "\\( x^2 = 12y \\)",
                        "B": "\\( y^2 = 12x \\)",
                        "C": "\\( x^2 = 6y \\)",
                        "D": "\\( y^2 = 6x \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the ellipse with foci at (0, 4) and (0, -4) and major axis length 12?",
                    "options": {
                        "A": "\\( \\frac{x^2}{20} + \\frac{y^2}{36} = 1 \\)",
                        "B": "\\( \\frac{x^2}{36} + \\frac{y^2}{20} = 1 \\)",
                        "C": "\\( \\frac{x^2}{144} + \\frac{y^2}{80} = 1 \\)",
                        "D": "\\( \\frac{x^2}{80} + \\frac{y^2}{144} = 1 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the hyperbola with foci at (5, 0) and (-5, 0) and transverse axis length 8?",
                    "options": {
                        "A": "\\( \\frac{x^2}{16} - \\frac{y^2}{9} = 1 \\)",
                        "B": "\\( \\frac{x^2}{9} - \\frac{y^2}{16} = 1 \\)",
                        "C": "\\( \\frac{x^2}{64} - \\frac{y^2}{36} = 1 \\)",
                        "D": "\\( \\frac{x^2}{36} - \\frac{y^2}{64} = 1 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the circle with center at (2, 3) and passing through the point (5, 7)?",
                    "options": {
                        "A": "\\( (x - 2)^2 + (y - 3)^2 = 25 \\)",
                        "B": "\\( (x + 2)^2 + (y + 3)^2 = 25 \\)",
                        "C": "\\( (x - 2)^2 + (y - 3)^2 = 50 \\)",
                        "D": "\\( (x + 2)^2 + (y + 3)^2 = 50 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the parabola with vertex at (1, 2) and focus at (1, 4)?",
                    "options": {
                        "A": "\\( (x - 1)^2 = 8(y - 2) \\)",
                        "B": "\\( (y - 2)^2 = 8(x - 1) \\)",
                        "C": "\\( (x - 1)^2 = 4(y - 2) \\)",
                        "D": "\\( (y - 2)^2 = 4(x - 1) \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the ellipse with center at (3, -2), major axis length 14, and minor axis length 10?",
                    "options": {
                        "A": "\\( \\frac{(x - 3)^2}{49} + \\frac{(y + 2)^2}{25} = 1 \\)",
                        "B": "\\( \\frac{(x - 3)^2}{25} + \\frac{(y + 2)^2}{49} = 1 \\)",
                        "C": "\\( \\frac{(x - 3)^2}{196} + \\frac{(y + 2)^2}{100} = 1 \\)",
                        "D": "\\( \\frac{(x - 3)^2}{100} + \\frac{(y + 2)^2}{196} = 1 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the hyperbola with center at (-1, 2), transverse axis length 12, and conjugate axis length 8?",
                    "options": {
                        "A": "\\( \\frac{(x + 1)^2}{36} - \\frac{(y - 2)^2}{16} = 1 \\)",
                        "B": "\\( \\frac{(x + 1)^2}{16} - \\frac{(y - 2)^2}{36} = 1 \\)",
                        "C": "\\( \\frac{(x + 1)^2}{144} - \\frac{(y - 2)^2}{64} = 1 \\)",
                        "D": "\\( \\frac{(x + 1)^2}{64} - \\frac{(y - 2)^2}{144} = 1 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the tangent to the circle \\( x^2 + y^2 = 4 \\) at the point (2, 0)?",
                    "options": {
                        "A": "\\( x = 2 \\)",
                        "B": "\\( y = 2 \\)",
                        "C": "\\( x = -2 \\)",
                        "D": "\\( y = -2 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the normal to the parabola \\( y^2 = 20x \\) at the point (5, 10)?",
                    "options": {
                        "A": "\\( x + y = 15 \\)",
                        "B": "\\( x - y = 15 \\)",
                        "C": "\\( x + y = 5 \\)",
                        "D": "\\( x - y = 5 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the tangent to the ellipse \\( \\frac{x^2}{16} + \\frac{y^2}{9} = 1 \\) at the point (4, 0)?",
                    "options": {
                        "A": "\\( x = 4 \\)",
                        "B": "\\( y = 4 \\)",
                        "C": "\\( x = -4 \\)",
                        "D": "\\( y = -4 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the tangent to the hyperbola \\( \\frac{x^2}{25} - \\frac{y^2}{16} = 1 \\) at the point (5, 0)?",
                    "options": {
                        "A": "\\( x = 5 \\)",
                        "B": "\\( y = 5 \\)",
                        "C": "\\( x = -5 \\)",
                        "D": "\\( y = -5 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the circle passing through the points (0, 0), (4, 0), and (0, 4)?",
                    "options": {
                        "A": "\\( x^2 + y^2 - 4x - 4y = 0 \\)",
                        "B": "\\( x^2 + y^2 - 8x - 8y = 0 \\)",
                        "C": "\\( x^2 + y^2 - 4x - 4y + 16 = 0 \\)",
                        "D": "\\( x^2 + y^2 - 8x - 8y + 16 = 0 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the parabola with vertex at (0, 0) and directrix \\( x = 3 \\)?",
                    "options": {
                        "A": "\\( y^2 = -12x \\)",
                        "B": "\\( x^2 = -12y \\)",
                        "C": "\\( y^2 = -6x \\)",
                        "D": "\\( x^2 = -6y \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the ellipse with foci at (0, 5) and (0, -5) and major axis length 14?",
                    "options": {
                        "A": "\\( \\frac{x^2}{24} + \\frac{y^2}{49} = 1 \\)",
                        "B": "\\( \\frac{x^2}{49} + \\frac{y^2}{24} = 1 \\)",
                        "C": "\\( \\frac{x^2}{196} + \\frac{y^2}{100} = 1 \\)",
                        "D": "\\( \\frac{x^2}{100} + \\frac{y^2}{196} = 1 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the hyperbola with foci at (6, 0) and (-6, 0) and transverse axis length 10?",
                    "options": {
                        "A": "\\( \\frac{x^2}{25} - \\frac{y^2}{11} = 1 \\)",
                        "B": "\\( \\frac{x^2}{11} - \\frac{y^2}{25} = 1 \\)",
                        "C": "\\( \\frac{x^2}{100} - \\frac{y^2}{44} = 1 \\)",
                        "D": "\\( \\frac{x^2}{44} - \\frac{y^2}{100} = 1 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the circle with center at (-2, 3) and passing through the point (1, 7)?",
                    "options": {
                        "A": "\\( (x + 2)^2 + (y - 3)^2 = 25 \\)",
                        "B": "\\( (x - 2)^2 + (y + 3)^2 = 25 \\)",
                        "C": "\\( (x + 2)^2 + (y - 3)^2 = 50 \\)",
                        "D": "\\( (x - 2)^2 + (y + 3)^2 = 50 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the parabola with vertex at (2, 3) and focus at (2, 5)?",
                    "options": {
                        "A": "\\( (x - 2)^2 = 8(y - 3) \\)",
                        "B": "\\( (y - 3)^2 = 8(x - 2) \\)",
                        "C": "\\( (x - 2)^2 = 4(y - 3) \\)",
                        "D": "\\( (y - 3)^2 = 4(x - 2) \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the ellipse with center at (4, -3), major axis length 16, and minor axis length 10?",
                    "options": {
                        "A": "\\( \\frac{(x - 4)^2}{64} + \\frac{(y + 3)^2}{25} = 1 \\)",
                        "B": "\\( \\frac{(x - 4)^2}{25} + \\frac{(y + 3)^2}{64} = 1 \\)",
                        "C": "\\( \\frac{(x - 4)^2}{256} + \\frac{(y + 3)^2}{100} = 1 \\)",
                        "D": "\\( \\frac{(x - 4)^2}{100} + \\frac{(y + 3)^2}{256} = 1 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the hyperbola with center at (-3, 2), transverse axis length 14, and conjugate axis length 10?",
                    "options": {
                        "A": "\\( \\frac{(x + 3)^2}{49} - \\frac{(y - 2)^2}{25} = 1 \\)",
                        "B": "\\( \\frac{(x + 3)^2}{25} - \\frac{(y - 2)^2}{49} = 1 \\)",
                        "C": "\\( \\frac{(x + 3)^2}{196} - \\frac{(y - 2)^2}{100} = 1 \\)",
                        "D": "\\( \\frac{(x + 3)^2}{100} - \\frac{(y - 2)^2}{196} = 1 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the tangent to the circle \\( x^2 + y^2 = 1 \\) at the point (1, 0)?",
                    "options": {
                        "A": "\\( x = 1 \\)",
                        "B": "\\( y = 1 \\)",
                        "C": "\\( x = -1 \\)",
                        "D": "\\( y = -1 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the normal to the parabola \\( y^2 = 24x \\) at the point (6, 12)?",
                    "options": {
                        "A": "\\( x + y = 18 \\)",
                        "B": "\\( x - y = 18 \\)",
                        "C": "\\( x + y = 6 \\)",
                        "D": "\\( x - y = 6 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the tangent to the ellipse \\( \\frac{x^2}{25} + \\frac{y^2}{16} = 1 \\) at the point (5, 0)?",
                    "options": {
                        "A": "\\( x = 5 \\)",
                        "B": "\\( y = 5 \\)",
                        "C": "\\( x = -5 \\)",
                        "D": "\\( y = -5 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the tangent to the hyperbola \\( \\frac{x^2}{36} - \\frac{y^2}{25} = 1 \\) at the point (6, 0)?",
                    "options": {
                        "A": "\\( x = 6 \\)",
                        "B": "\\( y = 6 \\)",
                        "C": "\\( x = -6 \\)",
                        "D": "\\( y = -6 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the circle passing through the points (0, 0), (3, 0), and (0, 3)?",
                    "options": {
                        "A": "\\( x^2 + y^2 - 3x - 3y = 0 \\)",
                        "B": "\\( x^2 + y^2 - 6x - 6y = 0 \\)",
                        "C": "\\( x^2 + y^2 - 3x - 3y + 9 = 0 \\)",
                        "D": "\\( x^2 + y^2 - 6x - 6y + 9 = 0 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the parabola with vertex at (0, 0) and directrix \\( y = 4 \\)?",
                    "options": {
                        "A": "\\( x^2 = -16y \\)",
                        "B": "\\( y^2 = -16x \\)",
                        "C": "\\( x^2 = -8y \\)",
                        "D": "\\( y^2 = -8x \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the ellipse with foci at (0, 6) and (0, -6) and major axis length 16?",
                    "options": {
                        "A": "\\( \\frac{x^2}{28} + \\frac{y^2}{64} = 1 \\)",
                        "B": "\\( \\frac{x^2}{64} + \\frac{y^2}{28} = 1 \\)",
                        "C": "\\( \\frac{x^2}{256} + \\frac{y^2}{112} = 1 \\)",
                        "D": "\\( \\frac{x^2}{112} + \\frac{y^2}{256} = 1 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the hyperbola with foci at (7, 0) and (-7, 0) and transverse axis length 12?",
                    "options": {
                        "A": "\\( \\frac{x^2}{36} - \\frac{y^2}{13} = 1 \\)",
                        "B": "\\( \\frac{x^2}{13} - \\frac{y^2}{36} = 1 \\)",
                        "C": "\\( \\frac{x^2}{144} - \\frac{y^2}{52} = 1 \\)",
                        "D": "\\( \\frac{x^2}{52} - \\frac{y^2}{144} = 1 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the circle with center at (3, -4) and passing through the point (6, 0)?",
                    "options": {
                        "A": "\\( (x - 3)^2 + (y + 4)^2 = 25 \\)",
                        "B": "\\( (x + 3)^2 + (y - 4)^2 = 25 \\)",
                        "C": "\\( (x - 3)^2 + (y + 4)^2 = 50 \\)",
                        "D": "\\( (x + 3)^2 + (y - 4)^2 = 50 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the parabola with vertex at (4, 5) and focus at (4, 7)?",
                    "options": {
                        "A": "\\( (x - 4)^2 = 8(y - 5) \\)",
                        "B": "\\( (y - 5)^2 = 8(x - 4) \\)",
                        "C": "\\( (x - 4)^2 = 4(y - 5) \\)",
                        "D": "\\( (y - 5)^2 = 4(x - 4) \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the ellipse with center at (5, -6), major axis length 18, and minor axis length 12?",
                    "options": {
                        "A": "\\( \\frac{(x - 5)^2}{81} + \\frac{(y + 6)^2}{36} = 1 \\)",
                        "B": "\\( \\frac{(x - 5)^2}{36} + \\frac{(y + 6)^2}{81} = 1 \\)",
                        "C": "\\( \\frac{(x - 5)^2}{324} + \\frac{(y + 6)^2}{144} = 1 \\)",
                        "D": "\\( \\frac{(x - 5)^2}{144} + \\frac{(y + 6)^2}{324} = 1 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the hyperbola with center at (-4, 3), transverse axis length 16, and conjugate axis length 12?",
                    "options": {
                        "A": "\\( \\frac{(x + 4)^2}{64} - \\frac{(y - 3)^2}{36} = 1 \\)",
                        "B": "\\( \\frac{(x + 4)^2}{36} - \\frac{(y - 3)^2}{64} = 1 \\)",
                        "C": "\\( \\frac{(x + 4)^2}{256} - \\frac{(y - 3)^2}{144} = 1 \\)",
                        "D": "\\( \\frac{(x + 4)^2}{144} - \\frac{(y - 3)^2}{256} = 1 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the tangent to the circle \\( x^2 + y^2 = 16 \\) at the point (4, 0)?",
                    "options": {
                        "A": "\\( x = 4 \\)",
                        "B": "\\( y = 4 \\)",
                        "C": "\\( x = -4 \\)",
                        "D": "\\( y = -4 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the normal to the parabola \\( y^2 = 28x \\) at the point (7, 14)?",
                    "options": {
                        "A": "\\( x + y = 21 \\)",
                        "B": "\\( x - y = 21 \\)",
                        "C": "\\( x + y = 7 \\)",
                        "D": "\\( x - y = 7 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the tangent to the ellipse \\( \\frac{x^2}{36} + \\frac{y^2}{25} = 1 \\) at the point (6, 0)?",
                    "options": {
                        "A": "\\( x = 6 \\)",
                        "B": "\\( y = 6 \\)",
                        "C": "\\( x = -6 \\)",
                        "D": "\\( y = -6 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the tangent to the hyperbola \\( \\frac{x^2}{49} - \\frac{y^2}{36} = 1 \\) at the point (7, 0)?",
                    "options": {
                        "A": "\\( x = 7 \\)",
                        "B": "\\( y = 7 \\)",
                        "C": "\\( x = -7 \\)",
                        "D": "\\( y = -7 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the circle passing through the points (0, 0), (5, 0), and (0, 5)?",
                    "options": {
                        "A": "\\( x^2 + y^2 - 5x - 5y = 0 \\)",
                        "B": "\\( x^2 + y^2 - 10x - 10y = 0 \\)",
                        "C": "\\( x^2 + y^2 - 5x - 5y + 25 = 0 \\)",
                        "D": "\\( x^2 + y^2 - 10x - 10y + 25 = 0 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the parabola with vertex at (0, 0) and directrix \\( x = -4 \\)?",
                    "options": {
                        "A": "\\( y^2 = 16x \\)",
                        "B": "\\( x^2 = 16y \\)",
                        "C": "\\( y^2 = 8x \\)",
                        "D": "\\( x^2 = 8y \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the ellipse with foci at (0, 7) and (0, -7) and major axis length 18?",
                    "options": {
                        "A": "\\( \\frac{x^2}{32} + \\frac{y^2}{81} = 1 \\)",
                        "B": "\\( \\frac{x^2}{81} + \\frac{y^2}{32} = 1 \\)",
                        "C": "\\( \\frac{x^2}{324} + \\frac{y^2}{128} = 1 \\)",
                        "D": "\\( \\frac{x^2}{128} + \\frac{y^2}{324} = 1 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the hyperbola with foci at (8, 0) and (-8, 0) and transverse axis length 14?",
                    "options": {
                        "A": "\\( \\frac{x^2}{49} - \\frac{y^2}{15} = 1 \\)",
                        "B": "\\( \\frac{x^2}{15} - \\frac{y^2}{49} = 1 \\)",
                        "C": "\\( \\frac{x^2}{196} - \\frac{y^2}{60} = 1 \\)",
                        "D": "\\( \\frac{x^2}{60} - \\frac{y^2}{196} = 1 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the circle with center at (4, -5) and passing through the point (7, 0)?",
                    "options": {
                        "A": "\\( (x - 4)^2 + (y + 5)^2 = 34 \\)",
                        "B": "\\( (x + 4)^2 + (y - 5)^2 = 34 \\)",
                        "C": "\\( (x - 4)^2 + (y + 5)^2 = 68 \\)",
                        "D": "\\( (x + 4)^2 + (y - 5)^2 = 68 \\)"
                    },
                    "answer": "A"
                },
                {
                    "question": "What is the equation of the parabola with vertex at (5, 6) and focus at (5, 8)?",
                    "options": {
                        "A": "\\( (x - 5)^2 = 8(y - 6) \\)",
                        "B": "\\( (y - 6)^2 = 8(x - 5) \\)",
                        "C": "\\( (x - 5)^2 = 4(y - 6) \\)",
                        "D": "\\( (y - 6)^2 = 4(x - 5) \\)"
                    },
                    "answer": "A"
                },
                    {
                        "question": "What is the equation of the parabola with vertex at (0, 0) and directrix \\( x = 3 \\)?",
                        "options": {
                            "A": "\\( y^2 = -12x \\)",
                            "B": "\\( x^2 = -12y \\)",
                            "C": "\\( y^2 = -6x \\)",
                            "D": "\\( x^2 = -6y \\)"
                        },
                        "answer": "A"
                    },
                    {
                        "question": "A bag contains 5 red, 4 blue, and 3 green balls. If 3 balls are drawn at random, what is the probability that all are red?",
                        "options": {
                            "A": "\\( \\frac{1}{22} \\)",
                            "B": "\\( \\frac{5}{12} \\)",
                            "C": "\\( \\frac{5}{144} \\)",
                            "D": "\\( \\frac{1}{44} \\)"
                        },
                        "answer": "A"
                    },
                    {
                        "question": "Two dice are rolled. What is the probability that the sum of the numbers is 7?",
                        "options": {
                            "A": "\\( \\frac{1}{6} \\)",
                            "B": "\\( \\frac{1}{12} \\)",
                            "C": "\\( \\frac{5}{36} \\)",
                            "D": "\\( \\frac{1}{36} \\)"
                        },
                        "answer": "A"
                    },
                    {
                        "question": "A card is drawn from a deck of 52 cards. What is the probability that it is a heart or a queen?",
                        "options": {
                            "A": "\\( \\frac{17}{52} \\)",
                            "B": "\\( \\frac{1}{13} \\)",
                            "C": "\\( \\frac{4}{13} \\)",
                            "D": "\\( \\frac{1}{4} \\)"
                        },
                        "answer": "A"
                    },
                    {
                        "question": "If \\( P(A) = 0.4 \\), \\( P(B) = 0.5 \\), and \\( P(A \\cup B) = 0.7 \\), what is \\( P(A \\cap B) \\)?",
                        "options": {
                            "A": "0.2",
                            "B": "0.3",
                            "C": "0.1",
                            "D": "0.4"
                        },
                        "answer": "A"
                    },
                    {
                        "question": "A box contains 10 bulbs, 4 of which are defective. If 3 bulbs are selected at random, what is the probability that at least one is defective?",
                        "options": {
                            "A": "\\( \\frac{1}{6} \\)",
                            "B": "\\( \\frac{5}{6} \\)",
                            "C": "\\( \\frac{2}{3} \\)",
                            "D": "\\( \\frac{1}{2} \\)"
                        },
                        "answer": "B"
                    },
                    {
                        "question": "If \\( z = 3 + 4i \\), what is the modulus of \\( z \\)?",
                        "options": {
                            "A": "5",
                            "B": "7",
                            "C": "12",
                            "D": "25"
                        },
                        "answer": "A"
                    },
                    {
                        "question": "The conjugate of \\( z = 2 - 5i \\) is:",
                        "options": {
                            "A": "\\( 2 + 5i \\)",
                            "B": "\\( -2 + 5i \\)",
                            "C": "\\( -2 - 5i \\)",
                            "D": "\\( 2 - 5i \\)"
                        },
                        "answer": "A"
                    },
                    {
                        "question": "If \\( z_1 = 1 + i \\) and \\( z_2 = 1 - i \\), what is \\( z_1 \\cdot z_2 \\)?",
                        "options": {
                            "A": "0",
                            "B": "2",
                            "C": "\\( 2i \\)",
                            "D": "\\( 1 - i \\)"
                        },
                        "answer": "B"
                    },
                    {
                        "question": "The argument of \\( z = -1 - i \\) is:",
                        "options": {
                            "A": "\\( \\frac{\\pi}{4} \\)",
                            "B": "\\( \\frac{3\\pi}{4} \\)",
                            "C": "\\( \\frac{5\\pi}{4} \\)",
                            "D": "\\( \\frac{7\\pi}{4} \\)"
                        },
                        "answer": "C"
                    },
                    {
                        "question": "If \\( z = \\frac{1 + i}{1 - i} \\), what is \\( z^4 \\)?",
                        "options": {
                            "A": "1",
                            "B": "-1",
                            "C": "\\( i \\)",
                            "D": "\\( -i \\)"
                        },
                        "answer": "B"
                    },
                    {
                        "question": "The general solution of \\( \\sin x = \\frac{1}{2} \\) is:",
                        "options": {
                            "A": "\\( x = n\\pi + (-1)^n \\frac{\\pi}{6} \\)",
                            "B": "\\( x = 2n\\pi \\pm \\frac{\\pi}{6} \\)",
                            "C": "\\( x = n\\pi + \\frac{\\pi}{6} \\)",
                            "D": "\\( x = n\\pi + (-1)^n \\frac{\\pi}{3} \\)"
                        },
                        "answer": "A"
                    },
                    {
                        "question": "The general solution of \\( \\cos x = \\frac{1}{2} \\) is:",
                        "options": {
                            "A": "\\( x = 2n\\pi \\pm \\frac{\\pi}{3} \\)",
                            "B": "\\( x = n\\pi + (-1)^n \\frac{\\pi}{3} \\)",
                            "C": "\\( x = n\\pi \\pm \\frac{\\pi}{3} \\)",
                            "D": "\\( x = 2n\\pi \\pm \\frac{\\pi}{6} \\)"
                        },
                        "answer": "A"
                    },
                    {
                        "question": "The general solution of \\( \\tan x = 1 \\) is:",
                        "options": {
                            "A": "\\( x = n\\pi + \\frac{\\pi}{4} \\)",
                            "B": "\\( x = 2n\\pi + \\frac{\\pi}{4} \\)",
                            "C": "\\( x = n\\pi + (-1)^n \\frac{\\pi}{4} \\)",
                            "D": "\\( x = n\\pi + \\frac{\\pi}{2} \\)"
                        },
                        "answer": "A"
                    },
                    {
                        "question": "What is the value of \\( \\sin^{-1}(\\sin \\frac{5\\pi}{6}) \\)?",
                        "options": {
                            "A": "\\( \\frac{5\\pi}{6} \\)",
                            "B": "\\( \\frac{\\pi}{6} \\)",
                            "C": "\\( \\frac{7\\pi}{6} \\)",
                            "D": "\\( \\frac{11\\pi}{6} \\)"
                        },
                        "answer": "B"
                    },
                    {
                        "question": "What is the value of \\( \\cos^{-1}(\\cos \\frac{7\\pi}{6}) \\)?",
                        "options": {
                            "A": "\\( \\frac{7\\pi}{6} \\)",
                            "B": "\\( \\frac{5\\pi}{6} \\)",
                            "C": "\\( \\frac{\\pi}{6} \\)",
                            "D": "\\( \\frac{11\\pi}{6} \\)"
                        },
                        "answer": "B"
                    },
                    {
                        "question": "What is the value of \\( \\tan^{-1}(\\tan \\frac{3\\pi}{4}) \\)?",
                        "options": {
                            "A": "\\( \\frac{3\\pi}{4} \\)",
                            "B": "\\( \\frac{\\pi}{4} \\)",
                            "C": "\\( \\frac{5\\pi}{4} \\)",
                            "D": "\\( \\frac{7\\pi}{4} \\)"
                        },
                        "answer": "B"
                    },
                    {
                        "question": "What is the value of \\( \\sin(\\sin^{-1} 0.5) \\)?",
                        "options": {
                            "A": "0.5",
                            "B": "1",
                            "C": "0",
                            "D": "0.25"
                        },
                        "answer": "A"
                    },
                    {
                        "question": "What is the value of \\( \\cos(\\cos^{-1} 0.5) \\)?",
                        "options": {
                            "A": "0.5",
                            "B": "1",
                            "C": "0",
                            "D": "0.25"
                        },
                        "answer": "A"
                    },
                    {
                        "question": "What is the value of \\( \\tan(\\tan^{-1} 1) \\)?",
                        "options": {
                            "A": "1",
                            "B": "0",
                            "C": "0.5",
                            "D": "2"
                        },
                        "answer": "A"
                    },
                    
                        {
                            "question": "What is the equation of the parabola with vertex at (0, 0) and directrix \\( x = 3 \\)?",
                            "options": {
                                "A": "\\( y^2 = -12x \\)",
                                "B": "\\( x^2 = -12y \\)",
                                "C": "\\( y^2 = -6x \\)",
                                "D": "\\( x^2 = -6y \\)"
                            },
                            "answer": "A"
                        },
                        {
                            "question": "A bag contains 5 red, 4 blue, and 3 green balls. If 3 balls are drawn at random, what is the probability that all are red?",
                            "options": {
                                "A": "\\( \\frac{1}{22} \\)",
                                "B": "\\( \\frac{5}{12} \\)",
                                "C": "\\( \\frac{5}{144} \\)",
                                "D": "\\( \\frac{1}{44} \\)"
                            },
                            "answer": "A"
                        },
                        {
                            "question": "Two dice are rolled. What is the probability that the sum of the numbers is 7?",
                            "options": {
                                "A": "\\( \\frac{1}{6} \\)",
                                "B": "\\( \\frac{1}{12} \\)",
                                "C": "\\( \\frac{5}{36} \\)",
                                "D": "\\( \\frac{1}{36} \\)"
                            },
                            "answer": "A"
                        },
                        {
                            "question": "A card is drawn from a deck of 52 cards. What is the probability that it is a heart or a queen?",
                            "options": {
                                "A": "\\( \\frac{17}{52} \\)",
                                "B": "\\( \\frac{1}{13} \\)",
                                "C": "\\( \\frac{4}{13} \\)",
                                "D": "\\( \\frac{1}{4} \\)"
                            },
                            "answer": "A"
                        },
                        {
                            "question": "If \\( P(A) = 0.4 \\), \\( P(B) = 0.5 \\), and \\( P(A \\cup B) = 0.7 \\), what is \\( P(A \\cap B) \\)?",
                            "options": {
                                "A": "0.2",
                                "B": "0.3",
                                "C": "0.1",
                                "D": "0.4"
                            },
                            "answer": "A"
                        },
                        {
                            "question": "A box contains 10 bulbs, 4 of which are defective. If 3 bulbs are selected at random, what is the probability that at least one is defective?",
                            "options": {
                                "A": "\\( \\frac{1}{6} \\)",
                                "B": "\\( \\frac{5}{6} \\)",
                                "C": "\\( \\frac{2}{3} \\)",
                                "D": "\\( \\frac{1}{2} \\)"
                            },
                            "answer": "B"
                        },
                        {
                            "question": "If \\( z = 3 + 4i \\), what is the modulus of \\( z \\)?",
                            "options": {
                                "A": "5",
                                "B": "7",
                                "C": "12",
                                "D": "25"
                            },
                            "answer": "A"
                        },
                        {
                            "question": "The conjugate of \\( z = 2 - 5i \\) is:",
                            "options": {
                                "A": "\\( 2 + 5i \\)",
                                "B": "\\( -2 + 5i \\)",
                                "C": "\\( -2 - 5i \\)",
                                "D": "\\( 2 - 5i \\)"
                            },
                            "answer": "A"
                        },
                        {
                            "question": "If \\( z_1 = 1 + i \\) and \\( z_2 = 1 - i \\), what is \\( z_1 \\cdot z_2 \\)?",
                            "options": {
                                "A": "0",
                                "B": "2",
                                "C": "\\( 2i \\)",
                                "D": "\\( 1 - i \\)"
                            },
                            "answer": "B"
                        },
                        {
                            "question": "The argument of \\( z = -1 - i \\) is:",
                            "options": {
                                "A": "\\( \\frac{\\pi}{4} \\)",
                                "B": "\\( \\frac{3\\pi}{4} \\)",
                                "C": "\\( \\frac{5\\pi}{4} \\)",
                                "D": "\\( \\frac{7\\pi}{4} \\)"
                            },
                            "answer": "C"
                        },
                        {
                            "question": "If \\( z = \\frac{1 + i}{1 - i} \\), what is \\( z^4 \\)?",
                            "options": {
                                "A": "1",
                                "B": "-1",
                                "C": "\\( i \\)",
                                "D": "\\( -i \\)"
                            },
                            "answer": "B"
                        },
                        {
                            "question": "The general solution of \\( \\sin x = \\frac{1}{2} \\) is:",
                            "options": {
                                "A": "\\( x = n\\pi + (-1)^n \\frac{\\pi}{6} \\)",
                                "B": "\\( x = 2n\\pi \\pm \\frac{\\pi}{6} \\)",
                                "C": "\\( x = n\\pi + \\frac{\\pi}{6} \\)",
                                "D": "\\( x = n\\pi + (-1)^n \\frac{\\pi}{3} \\)"
                            },
                            "answer": "A"
                        },
                        {
                            "question": "The general solution of \\( \\cos x = \\frac{1}{2} \\) is:",
                            "options": {
                                "A": "\\( x = 2n\\pi \\pm \\frac{\\pi}{3} \\)",
                                "B": "\\( x = n\\pi + (-1)^n \\frac{\\pi}{3} \\)",
                                "C": "\\( x = n\\pi \\pm \\frac{\\pi}{3} \\)",
                                "D": "\\( x = 2n\\pi \\pm \\frac{\\pi}{6} \\)"
                            },
                            "answer": "A"
                        },
                        {
                            "question": "The general solution of \\( \\tan x = 1 \\) is:",
                            "options": {
                                "A": "\\( x = n\\pi + \\frac{\\pi}{4} \\)",
                                "B": "\\( x = 2n\\pi + \\frac{\\pi}{4} \\)",
                                "C": "\\( x = n\\pi + (-1)^n \\frac{\\pi}{4} \\)",
                                "D": "\\( x = n\\pi + \\frac{\\pi}{2} \\)"
                            },
                            "answer": "A"
                        },
                        {
                            "question": "What is the value of \\( \\sin^{-1}(\\sin \\frac{5\\pi}{6}) \\)?",
                            "options": {
                                "A": "\\( \\frac{5\\pi}{6} \\)",
                                "B": "\\( \\frac{\\pi}{6} \\)",
                                "C": "\\( \\frac{7\\pi}{6} \\)",
                                "D": "\\( \\frac{11\\pi}{6} \\)"
                            },
                            "answer": "B"
                        },
                        {
                            "question": "What is the value of \\( \\cos^{-1}(\\cos \\frac{7\\pi}{6}) \\)?",
                            "options": {
                                "A": "\\( \\frac{7\\pi}{6} \\)",
                                "B": "\\( \\frac{5\\pi}{6} \\)",
                                "C": "\\( \\frac{\\pi}{6} \\)",
                                "D": "\\( \\frac{11\\pi}{6} \\)"
                            },
                            "answer": "B"
                        },
                        {
                            "question": "What is the value of \\( \\tan^{-1}(\\tan \\frac{3\\pi}{4}) \\)?",
                            "options": {
                                "A": "\\( \\frac{3\\pi}{4} \\)",
                                "B": "\\( \\frac{\\pi}{4} \\)",
                                "C": "\\( \\frac{5\\pi}{4} \\)",
                                "D": "\\( \\frac{7\\pi}{4} \\)"
                            },
                            "answer": "B"
                        },
                        {
                            "question": "What is the value of \\( \\sin(\\sin^{-1} 0.5) \\)?",
                            "options": {
                                "A": "0.5",
                                "B": "1",
                                "C": "0",
                                "D": "0.25"
                            },
                            "answer": "A"
                        },
                        {
                            "question": "What is the value of \\( \\cos(\\cos^{-1} 0.5) \\)?",
                            "options": {
                                "A": "0.5",
                                "B": "1",
                                "C": "0",
                                "D": "0.25"
                            },
                            "answer": "A"
                        },
                        {
                            "question": "What is the value of \\( \\tan(\\tan^{-1} 1) \\)?",
                            "options": {
                                "A": "1",
                                "B": "0",
                                "C": "0.5",
                                "D": "2"
                            },
                            "answer": "A"
                        },
                        {
                            "question": "What is the expansion of \\( (1 + x)^5 \\) using the binomial theorem?",
                            "options": {
                                "A": "\\( 1 + 5x + 10x^2 + 10x^3 + 5x^4 + x^5 \\)",
                                "B": "\\( 1 + 5x + 15x^2 + 15x^3 + 5x^4 + x^5 \\)",
                                "C": "\\( 1 + 5x + 20x^2 + 20x^3 + 5x^4 + x^5 \\)",
                                "D": "\\( 1 + 5x + 25x^2 + 25x^3 + 5x^4 + x^5 \\)"
                            },
                            "answer": "A"
                        },
                        {
                            "question": "What is the coefficient of \\( x^3 \\) in the expansion of \\( (1 + 2x)^6 \\)?",
                            "options": {
                                "A": "160",
                                "B": "120",
                                "C": "80",
                                "D": "60"
                            },
                            "answer": "A"
                        },
                        {
                            "question": "What is the sum of the series \\( 1 + 2 + 3 + \\dots + 100 \\)?",
                            "options": {
                                "A": "5050",
                                "B": "5000",
                                "C": "5100",
                                "D": "4950"
                            },
                            "answer": "A"
                        },
                        {
                            "question": "What is the sum of the series \\( 1 + 3 + 5 + \\dots + 99 \\)?",
                            "options": {
                                "A": "2500",
                                "B": "2550",
                                "C": "2600",
                                "D": "2450"
                            },
                            "answer": "A"
                        },
                        {
                            "question": "What is the sum of the infinite series \\( 1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\dots \\)?",
                            "options": {
                                "A": "2",
                                "B": "1",
                                "C": "1.5",
                                "D": "0.5"
                            },
                            "answer": "A"
                        },
                        {
                            "question": "What is the sum of the infinite series \\( 1 - \\frac{1}{2} + \\frac{1}{4} - \\frac{1}{8} + \\dots \\)?",
                            "options": {
                                "A": "\\( \\frac{2}{3} \\)",
                                "B": "\\( \\frac{1}{2} \\)",
                                "C": "\\( \\frac{3}{4} \\)",
                                "D": "\\( \\frac{4}{5} \\)"
                            },
                            "answer": "A"
                        },
                        {
                            "question": "What is the sum of the series \\( 1^2 + 2^2 + 3^2 + \\dots + 10^2 \\)?",
                            "options": {
                                "A": "385",
                                "B": "325",
                                "C": "400",
                                "D": "350"
                            },
                            "answer": "A"
                        },
                        {
                            "question": "What is the sum of the series \\( 1^3 + 2^3 + 3^3 + \\dots + 5^3 \\)?",
                            "options": {
                                "A": "225",
                                "B": "200",
                                "C": "250",
                                "D": "275"
                            },
                            "answer": "A"
                        },
                        {
                            "question": "What is the sum of the series \\( 1 + \\frac{1}{2} + \\frac{1}{3} + \\dots + \\frac{1}{10} \\)?",
                            "options": {
                                "A": "2.929",
                                "B": "2.828",
                                "C": "2.718",
                                "D": "2.618"
                            },
                            "answer": "A"
                        },
                        {
                            "question": "What is the sum of the series \\( 1 + \\frac{1}{4} + \\frac{1}{9} + \\dots + \\frac{1}{100} \\)?",
                            "options": {
                                "A": "1.549",
                                "B": "1.644",
                                "C": "1.732",
                                "D": "1.414"
                            },
                            "answer": "B"
                        },
                        
                            {
                                "question": "What is the derivative of \\( f(x) = e^{x^2} \\) with respect to \\( x \\)?",
                                "options": {
                                    "A": "\\( 2x e^{x^2} \\)",
                                    "B": "\\( e^{x^2} \\)",
                                    "C": "\\( x^2 e^{x^2} \\)",
                                    "D": "\\( 2x e^{x} \\)"
                                },
                                "answer": "A"
                            },
                            {
                                "question": "What is the equation of the tangent to the curve \\( y = x^3 - 3x^2 + 2 \\) at the point \\( x = 1 \\)?",
                                "options": {
                                    "A": "\\( y = -3x + 3 \\)",
                                    "B": "\\( y = 3x - 1 \\)",
                                    "C": "\\( y = -3x + 1 \\)",
                                    "D": "\\( y = 3x - 3 \\)"
                                },
                                "answer": "C"
                            },
                            {
                                "question": "What is the distance between the points \\( (3, 4) \\) and \\( (7, 1) \\) in 2D space?",
                                "options": {
                                    "A": "\\( 5 \\)",
                                    "B": "\\( 6 \\)",
                                    "C": "\\( 7 \\)",
                                    "D": "\\( 8 \\)"
                                },
                                "answer": "A"
                            },
                            {
                                "question": "What is the magnitude of the vector \\( \\vec{a} = 3\\hat{i} - 4\\hat{j} + 5\\hat{k} \\)?",
                                "options": {
                                    "A": "\\( 5 \\)",
                                    "B": "\\( 5\\sqrt{2} \\)",
                                    "C": "\\( 10 \\)",
                                    "D": "\\( 7 \\)"
                                },
                                "answer": "B"
                            },
                            {
                                "question": "What is the equation of the parabola with vertex at \\( (0, 0) \\) and directrix \\( x = 3 \\)?",
                                "options": {
                                    "A": "\\( y^2 = -12x \\)",
                                    "B": "\\( x^2 = -12y \\)",
                                    "C": "\\( y^2 = -6x \\)",
                                    "D": "\\( x^2 = -6y \\)"
                                },
                                "answer": "A"
                            },
                            {
                                "question": "What is the derivative of \\( f(x) = \\ln(x^2 + 1) \\) with respect to \\( x \\)?",
                                "options": {
                                    "A": "\\( \\frac{2x}{x^2 + 1} \\)",
                                    "B": "\\( \\frac{1}{x^2 + 1} \\)",
                                    "C": "\\( \\frac{2x}{x^2 - 1} \\)",
                                    "D": "\\( \\frac{1}{x^2 - 1} \\)"
                                },
                                "answer": "A"
                            },
                            {
                                "question": "What is the angle between the vectors \\( \\vec{a} = 2\\hat{i} + 3\\hat{j} \\) and \\( \\vec{b} = 4\\hat{i} - 1\\hat{j} \\)?",
                                "options": {
                                    "A": "\\( 45^\\circ \\)",
                                    "B": "\\( 60^\\circ \\)",
                                    "C": "\\( 90^\\circ \\)",
                                    "D": "\\( 120^\\circ \\)"
                                },
                                "answer": "A"
                            },
                            {
                                "question": "What is the equation of the circle with center \\( (2, -3) \\) and radius \\( 5 \\)?",
                                "options": {
                                    "A": "\\( (x - 2)^2 + (y + 3)^2 = 25 \\)",
                                    "B": "\\( (x + 2)^2 + (y - 3)^2 = 25 \\)",
                                    "C": "\\( (x - 2)^2 + (y + 3)^2 = 5 \\)",
                                    "D": "\\( (x + 2)^2 + (y - 3)^2 = 5 \\)"
                                },
                                "answer": "A"
                            },
                            {
                                "question": "What is the derivative of \\( f(x) = \\sin(2x) \\) with respect to \\( x \\)?",
                                "options": {
                                    "A": "\\( 2\\cos(2x) \\)",
                                    "B": "\\( \\cos(2x) \\)",
                                    "C": "\\( -2\\cos(2x) \\)",
                                    "D": "\\( -\\cos(2x) \\)"
                                },
                                "answer": "A"
                            },
                            {
                                "question": "What is the equation of the line passing through the points \\( (1, 2) \\) and \\( (3, 4) \\)?",
                                "options": {
                                    "A": "\\( y = x + 1 \\)",
                                    "B": "\\( y = x - 1 \\)",
                                    "C": "\\( y = -x + 1 \\)",
                                    "D": "\\( y = -x - 1 \\)"
                                },
                                "answer": "A"
                            },
                            {
                                "question": "What is the dot product of the vectors \\( \\vec{a} = 2\\hat{i} + 3\\hat{j} \\) and \\( \\vec{b} = 4\\hat{i} - 1\\hat{j} \\)?",
                                "options": {
                                    "A": "\\( 5 \\)",
                                    "B": "\\( 6 \\)",
                                    "C": "\\( 7 \\)",
                                    "D": "\\( 8 \\)"
                                },
                                "answer": "A"
                            },
                            {
                                "question": "What is the derivative of \\( f(x) = x^3 - 3x^2 + 2x - 1 \\) with respect to \\( x \\)?",
                                "options": {
                                    "A": "\\( 3x^2 - 6x + 2 \\)",
                                    "B": "\\( 3x^2 - 6x - 2 \\)",
                                    "C": "\\( 3x^2 + 6x + 2 \\)",
                                    "D": "\\( 3x^2 + 6x - 2 \\)"
                                },
                                "answer": "A"
                            },
                            {
                                "question": "What is the equation of the ellipse with center at \\( (0, 0) \\), major axis length \\( 10 \\), and minor axis length \\( 6 \\)?",
                                "options": {
                                    "A": "\\( \\frac{x^2}{25} + \\frac{y^2}{9} = 1 \\)",
                                    "B": "\\( \\frac{x^2}{9} + \\frac{y^2}{25} = 1 \\)",
                                    "C": "\\( \\frac{x^2}{100} + \\frac{y^2}{36} = 1 \\)",
                                    "D": "\\( \\frac{x^2}{36} + \\frac{y^2}{100} = 1 \\)"
                                },
                                "answer": "A"
                            },
                            {
                                "question": "What is the cross product of the vectors \\( \\vec{a} = 2\\hat{i} + 3\\hat{j} + 4\\hat{k} \\) and \\( \\vec{b} = 5\\hat{i} - 1\\hat{j} + 2\\hat{k} \\)?",
                                "options": {
                                    "A": "\\( 10\\hat{i} - 16\\hat{j} - 17\\hat{k} \\)",
                                    "B": "\\( 10\\hat{i} + 16\\hat{j} + 17\\hat{k} \\)",
                                    "C": "\\( -10\\hat{i} + 16\\hat{j} - 17\\hat{k} \\)",
                                    "D": "\\( -10\\hat{i} - 16\\hat{j} + 17\\hat{k} \\)"
                                },
                                "answer": "A"
                            },
                            {
                                "question": "What is the derivative of \\( f(x) = \\tan^{-1}(x) \\) with respect to \\( x \\)?",
                                "options": {
                                    "A": "\\( \\frac{1}{1 + x^2} \\)",
                                    "B": "\\( \\frac{1}{1 - x^2} \\)",
                                    "C": "\\( \\frac{1}{x^2 + 1} \\)",
                                    "D": "\\( \\frac{1}{x^2 - 1} \\)"
                                },
                                "answer": "A"
                            },
                            {
                                "question": "What is the equation of the hyperbola with center at \\( (0, 0) \\), transverse axis length \\( 8 \\), and conjugate axis length \\( 6 \\)?",
                                "options": {
                                    "A": "\\( \\frac{x^2}{16} - \\frac{y^2}{9} = 1 \\)",
                                    "B": "\\( \\frac{x^2}{9} - \\frac{y^2}{16} = 1 \\)",
                                    "C": "\\( \\frac{x^2}{64} - \\frac{y^2}{36} = 1 \\)",
                                    "D": "\\( \\frac{x^2}{36} - \\frac{y^2}{64} = 1 \\)"
                                },
                                "answer": "A"
                            },
                            {
                                "question": "What is the derivative of \\( f(x) = \\sqrt{x^2 + 1} \\) with respect to \\( x \\)?",
                                "options": {
                                    "A": "\\( \\frac{x}{\\sqrt{x^2 + 1}} \\)",
                                    "B": "\\( \\frac{1}{\\sqrt{x^2 + 1}} \\)",
                                    "C": "\\( \\frac{x}{x^2 + 1} \\)",
                                    "D": "\\( \\frac{1}{x^2 + 1} \\)"
                                },
                                "answer": "A"
                            },
                            {
                                "question": "What is the equation of the plane passing through the points \\( (1, 2, 3) \\), \\( (4, 5, 6) \\), and \\( (7, 8, 9) \\)?",
                                "options": {
                                    "A": "\\( x - y + z = 0 \\)",
                                    "B": "\\( x + y - z = 0 \\)",
                                    "C": "\\( x - y - z = 0 \\)",
                                    "D": "\\( x + y + z = 0 \\)"
                                },
                                "answer": "A"
                            },
                            {
                                "question": "What is the derivative of \\( f(x) = \\cos(3x) \\) with respect to \\( x \\)?",
                                "options": {
                                    "A": "\\( -3\\sin(3x) \\)",
                                    "B": "\\( 3\\sin(3x) \\)",
                                    "C": "\\( -\\sin(3x) \\)",
                                    "D": "\\( \\sin(3x) \\)"
                                },
                                "answer": "A"
                            },
                            {
                                "question": "What is the equation of the sphere with center \\( (1, 2, 3) \\) and radius \\( 4 \\)?",
                                "options": {
                                    "A": "\\( (x - 1)^2 + (y - 2)^2 + (z - 3)^2 = 16 \\)",
                                    "B": "\\( (x + 1)^2 + (y + 2)^2 + (z + 3)^2 = 16 \\)",
                                    "C": "\\( (x - 1)^2 + (y - 2)^2 + (z - 3)^2 = 4 \\)",
                                    "D": "\\( (x + 1)^2 + (y + 2)^2 + (z + 3)^2 = 4 \\)"
                                },
                                "answer": "A"
                            }
                        
                    
                
            
];