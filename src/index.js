window.onload = function () {
    console.log('text: rolling scopes');

    //Tags
    addTagsClickHandler();
};

const addTagsClickHandler = () => {
    document
        .querySelector('.strategies__tags')
        .addEventListener('click', (e) => {
            if (e.target.classList.contains('tag')) {
                let clickedTag = e.target;
            }
        });
};

const removeSelectedTags = () => {
    let tags = document.querySelectorAll('.strategies__tags .tag');
    console.log(tags);
};
