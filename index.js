function fn1() {
    const url = 'http://website.com/api/';

    return fn2(url)
        .then(fn3)
        .then(names => {
            console.log(names);
        })
        .catch(err => console.log('Error message #2'));
}

function fn2(url) {
    return fetch(url)
        .then(res => res.json())
        .then(data => { return data })
        .catch(err => console.log('Error message'));
}

function fn3(data) {
    return data.map(element => element.name)
}