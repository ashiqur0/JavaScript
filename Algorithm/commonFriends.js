// Problem Statement

// You are given two large arrays, listA and listB. Each array contains user objects. 
// A user object is guaranteed to have a unique id property (a string) and may contain other data, such as a name.

// Your task is to write an efficient function that both lists as input
// and returns the total amount of users that are present in both lists.

//---------------------Data setup block-------------------------//

const USER_COUNT = 5000;
const usersA = [];
const usersB = [];

const createUser = (id) => ({ id: `user_${id}`, name: `user_${id}` });

for (let i = 0; i < USER_COUNT; i++) {
    usersA.push(createUser(i));
    usersB.push(createUser(i + 2500));
}

// User 2500 to 4999 are common
// --------------Data setup Block----------------//

// -----------------ALGORITHMS-------------------//
const commonFriendsSlow = (usersA, usersB) => {

    const startTime = performance.now();

    const commonFriends = [];

    usersA.forEach(userA => {
        usersB.forEach(userB => {
            if (userA.id === userB.id) {
                commonFriends.push(userA);
            }
        })
    });

    const endTime = performance.now();

    return { count: commonFriends.length, timeTookToFinish: endTime - startTime };
}

const commonFriendsEfficient = (usersA, usersB) => {
    const startTime = performance.now();

    const commonFriends = [];
    const idListA = new Set(usersA.map(user => user.id));

    usersB.forEach(userB => {
        if (idListA.has(userB.id)) {
            commonFriends.push(userB.id);
        }
    });

    const endTime = performance.now();

    return { count: commonFriends.length, timeTookToFinish: endTime - startTime };
}

console.log(commonFriendsSlow(usersA, usersB));
console.log(commonFriendsEfficient(usersA, usersB));