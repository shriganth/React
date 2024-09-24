import React from "react";

function Result({secretnumber, term}) {

    let result = ""

    if (term) {
        if (term > secretnumber) {
            result = "Higher";
        }
        else if (term < secretnumber) {
            result = "Lower";
        }
        else {
            result = "Match";
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