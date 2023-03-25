console.log("promiese");
const gameOver = (result) => {
	console.log(`Game Over : ${result}`);
};

gameOver(5);


const getFakeMembers = count => new Promise((resolves, rejects) => {
    const api = `http://api.randomuser.me/?nat=US&results=${count}`
    const request = new XMLHttpRequest()
    request.open('GET', api)
    request.onload = () =>
    (request.status === 200) ?
    resolves(JSON.parse(request.response).results) :
    reject(Error(request.statusText))
    request.onerror = (err) => rejects(err)
    request.send()
    }