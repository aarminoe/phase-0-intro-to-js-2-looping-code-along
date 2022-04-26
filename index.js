// Code your solutions in this file
function writeCards(name, surprise) {
    let messages = []
    for (let n = 0; n < name.length; n++) {
        let mess = `Thank you, ${name[n]}, for the wonderful ${surprise} gift!`
        messages.push(mess)
    }
    return messages
}

function countDown(num) {
    for (let n = 0; n < num + 1; n++) {
        console.log(n)
    }
}