const makeFriendsList = (friends) => {
    let ul = document.createElement('ul');
    for (let friend of friends) {
        let li = document.createElement('li');
        li.textContent = `${friend.firstName} ${friend.lastName}`;
        ul.append(li);
    }
    return ul;
}
