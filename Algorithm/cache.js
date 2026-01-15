//* Cache implementation using Map: When a user first time request data for first time, get the data from server and store to the cache and for second time serve the data from cache.

const dataCache = new Map();

const expensiveTask = (id) => {
    console.log('Run the expensive task for: ', id);

    return {
        id: id,
        data: `some data for id: ${id}`,
        timestamp: new Date().getTime()
    }
}

const getData = (id) => {
    if (dataCache.has(id)) {
        console.log('Cache hit for id: ', id);

        return dataCache.get(id);
    }

    console.log('Cache miss for id: ', id);
    const data = expensiveTask(id);
    dataCache.set(id, data);
    return data;
}

console.log(dataCache);
console.log(getData(123));
console.log(getData(123));