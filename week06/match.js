function match(string) {
    let state = start;
    for (let c of string) {
        state = state(c);
    }
    return state === end;
}

function start(c) {
    if (c === "a") {
        return foundB;
    } else {
        return start;
    }
}

function end() {
    return end;
}

function foundB(c) {
    if (c === "b") {
        return fundA1;
    } else {
        return start(c);
    }
}

function fundA1(c) {
    if (c === "a") {
        return fundB1;
    } else {
        return start(c);
    }
}

function fundB1(c) {
    if (c === "b") {
        return fundA2;
    } else {
        return start(c);
    }
}

function fundA2(c) {
    if (c === "a") {
        return fundB2;
    } else {
        return start(c);
    }
}

function fundB2(c) {
    if (c === "b") {
        return fundX;
    } else {
        return start(c);
    }
}

function fundX(c) {
    if (c === "x") {
        return end;
    } else {
        return fundA2(c);
    }
}

console.log(match("abababababx"));
console.log(match("abababcababx"))