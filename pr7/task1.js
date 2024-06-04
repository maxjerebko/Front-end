function main(callback1, callback2) {
    setTimeout(() => {
        callback1();
    }, 2000);

    let counter = 0;
    const intervalId = setInterval(() => {
        callback2();
        counter++;
        if (counter === 3) {
            clearInterval(intervalId);
        }
    }, 1000);
}


function callback1() {
    console.log('Callback 1 ');
}

function callback2() {
    console.log('Callback 2');
}

main(callback1, callback2);


