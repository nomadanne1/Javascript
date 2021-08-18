// Optional Chaining (ES11)

{
    const person1 = {
        name: 'Ellie',
        job: {
            title: 'S/W Engineer',
            manager: {
                name: 'Bob',
            },
        },
    };
    const person2 = {
        name: 'Bob',
    };

    // bad
    {
        function printManager(person){
            console.log(person.job.manager.name);
            // console.log(person.job && person.job.manager && person.job.manager.name) // 코드반복 >> bad code!
        }
        printManager(person1); // Bob
        // printManager(person2); // manager가 없어서 오류
    }

    // ♪
    {
        function printManager(person){
            // console.log(person.job?.manager?.name); // Optional Chaining >> hot trend
        }
        printManager(person1);
        printManager(person2);
    }
}

// Nullish Coalescing Operator (ES11)

{
    // Logical OR operator
    // false: false, '', 0, null, undefined
    {
        const name = 'Ellie';
        const userName = name || 'Guest'; // || >> 앞에 있는 값이 false 일때만 뒤에 있는 코드가 실행
        console.log(userName); // Guest
    }

    {
        const name = null;
        const userName = name || 'Guest';
        console.log(userName); // 출력x
    }

    // bad
    {
        const name = '';
        const userName = name || 'Guest'; // 사용자가 아무런 이름을 입력하고 싶지 않을때도 Guest 할당 
        console.log(userName); // Guest

        const num = 0;
        const message = num || 'undefined'; 
        console.log(message); // undefined
    }

    // ♪
    {
        const name = '';
        const userName = name ?? 'Guest'; 
        console.log(userName); // 

        const num = 0;
        const message = num ?? 'undefined'; 
        console.log(message); // 0
    }
}