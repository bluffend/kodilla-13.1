//table data

var data = [
    {
        id: 'box1',
        title: 'First box',
        content: '<p>Lorem ipsum dolor sit amet 1!</p>',
        categories: ['highlighted', 'special-header', 'important']
    },
    {
        id: 'box2',
        title: 'Second box',
        content: '<p>Lorem ipsum dolor sit amet 2!</p>',
        categories: ['special-header', 'important']
    },
    {
        id: 'box3',
        title: 'Third box',
        content: '<p>Lorem ipsum dolor sit amet 3!</p>',
        categories: ['highlighted', 'important']
    },
    {
        id: 'box4',
        title: 'Fourth box',
        content: '<p>Lorem ipsum dolor sit amet 4!</p>',
        categories: ['highlighted']
    },
    {
        id: 'box5',
        title: 'Fifth box',
        content: '<p>Lorem ipsum dolor sit amet 5!</p>',
        categories: []
    },
];

// program starts here

start();

function start() {
    renderBoxes();
} 

function renderBoxes() {
    for (var i = 0; i < data.length; i++) {
        var categoriesString = "";
        for (var a = 0; a < data[i].categories.length; a++) {
            categoriesString = categoriesString + data[i].categories[a] + ' ';
        }
        var divDefinition = '<div id="' + data[i].id + '"  class="box ' + categoriesString + '"><header>' + data[i].title + '</header>' + data[i].content + ' </div>';
        var divContainer = document.querySelector(".container");
        divContainer.insertAdjacentHTML('beforeend', divDefinition);
    }
}