//? Function calculated telephone battery consumed

const telephones = [
    {
        No: 1,
        battery: 89,
        standbyConsume: 0.2,
        standbyMinute: 3,
        callConsume: 0.2 * 5,
        callMinute: 1
    },
    {
        No: 2,
        battery: 49,
        standbyConsume: 0.4,
        standbyMinute: 5,
        callConsume: 0.4 * 2,
        callMinute: 1
    },
    {
        No: 3,
        battery: 78,
        standbyConsume: 0.5,
        standbyMinute: 2,
        callConsume: 0.5 * 3,
        callMinute: 1
    },
    {
        No: 4,
        battery: 19,
        standbyConsume: 0.1,
        standbyMinute: 20,
        callConsume: 0.1 * 1,
        callMinute: 1
    },
    {
        No: 5,
        battery: 99,
        standbyConsume: 1,
        standbyMinute: 5,
        callConsume: 1 * 2,
        callMinute: 1
    },
    {
        No: 6,
        battery: 100,
        standbyConsume: 1,
        standbyMinute: 7,
        callConsume: 1 * 3,
        callMinute: 1
    }
];

// console.log(telephones);

let data = []

function batterycal() {
    let data = []

    for (let i = 0; i < telephones.length; i++) {
        // console.log('hello')
        let totalConsume = (telephones[i].standbyConsume * telephones[i].standbyMinute) + (telephones[i].callConsume * telephones[i].callMinute)
        // console.log(totalConsume);
        let countUsage = telephones[i].battery / totalConsume
        data.push(Math.floor(countUsage))
    }
    console.log(data);
    min = Math.min(...data)
    max = Math.max(...data)
    console.log(`Telephone no ${data.indexOf(min) + 1} will be first to run out battery in ${min} minutes`);
    console.log(`Telephone no ${data.indexOf(max) + 1} will be last to run out battery in ${max} minutes`);

}

batterycal()

// console.log(telephones.length);