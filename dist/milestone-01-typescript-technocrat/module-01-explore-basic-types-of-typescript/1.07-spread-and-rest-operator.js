"use strict";
{
    // SPREAD OPERATOR | REST OPERATOR
    // learn spread operator
    const bros1 = ["Rakib", "Sakib", "Akib"];
    const bros2 = ["Sadia", "Anika", "Monika"];
    // bros1.push(bros2); // 🔴 wrong way
    bros1.push(...bros2); // 🟢 right way
    const mentors1 = {
        typescript: "Mezba",
        redux: "Mir",
        dbms: "Mizan",
    };
    const mentors2 = {
        prisma: "Firoz",
        next: "Tonmoy",
        cloud: "Nahid",
    };
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
    // learn rest operator
    const greetFriends = (...friends) => {
        return friends.forEach((friend) => {
            `Hi ${friend}`;
        });
    };
    const greetings = greetFriends("Abul", "Babul");
    console.log(greetings);
}
