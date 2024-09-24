import React from "react";

function Result({secretnumber, term}) {

    let result;

    if (term) {
        if (term > secretnumber) {
            result = "Higher";
        }
        else if (term < secretnumber) {
            result = "Lower";
        }
        else if (term === secretnumber) {
            result = "Match";
        }
        else {
            result = "Please, Enter a valid number"
        }
    }
    else {
        result = "";
    }

    return (
        <h3>You guessed: {result}</h3>
    )
}

export default Result;