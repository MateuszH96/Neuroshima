function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cloneElement() {
    
    const originalElement = document.getElementById('trick-id');
    const parent = document.getElementById('tricks-list').getElementsByClassName('container')[0];
    
    if (!originalElement) {
        console.error('Element o id "trick-id" nie istnieje na stronie.');
        return;
    }

    
    const numberOfCopies = getRandomInt(1, 5);

    
    for (let i = 0; i < numberOfCopies; i++) {
        const clone = originalElement.cloneNode(true);
        
        clone.id = originalElement.id + '-copy-' + (i + 1);
        parent.appendChild(clone);
    }
}
document.addEventListener('DOMContentLoaded', function() {
    cloneElement();
});
