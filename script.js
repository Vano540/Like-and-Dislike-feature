let counter = 3;

function like() {
    counter = counter + 1;
    document.getElementById("votes1").innerHTML = counter + " likes";
}

function deletelike() {
    counter = counter - 1;
    document.getElementById("votes1").innerHTML = counter + " likes";
}

let number = 3;

function dislike() {
    number = number + 1;
    document.getElementById("votes2").innerHTML = number + " dislikes";
}

function deletedis() {
    number = number - 1;
    document.getElementById("votes2").innerHTML = number + " dislikes";
}
