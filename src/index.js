import { Article } from './js/Article';

const data = [
  {
    id: 1,
    title: 'Increasing ProsperityWith Positive Thinking',
    urlToImage: './src/img/strategy/image_1.jpeg',
    tags: ['Art', 'Design'],
    contant:
      'Knowing yourself is the first, and a very critical step in the process of planning you future',
    date: '11.09.2023',
  },
  {
    id: 2,
    title: 'Motivation Is The First Step To Success',
    urlToImage: './src/img/strategy/image_2.jpeg',
    tags: ['Culture'],
    contant:
      "Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don't know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What's my passion? What kind of career fits my personality?",
    date: '12.09.2023',
  },
  {
    id: 3,
    title: 'Success Steps For Your Personal Or Business Life',
    urlToImage: './src/img/strategy/image_3.jpeg',
    tags: ['Culture', 'Design', 'Art'],
    contant:
      "Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don't know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What's my passion? What kind of career fits my personality?",
    date: '13.09.2023',
  },
  {
    id: 4,
    title:
      'Success Steps For Your Personal Or Business Life Plus Funny Image on the Back',
    urlToImage: './src/img/strategy/image_4long.jpeg',
    tags: ['Culture', 'Design', 'Art'],
    contant:
      "Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don't know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What's my passion? What kind of career fits my personality?",
    date: '14.09.2023',
  },
  {
    id: 5,
    title: 'Increasing Prosperity With Positive Thinking',
    urlToImage: './src/img/strategy/image_5.jpeg',
    tags: ['Design'],
    contant:
      "Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don't know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What's my passion? What kind of career fits my personality?",
    date: '15.09.2023',
  },
  {
    id: 6,
    title: 'Increasing Prosperity With Positive Thinking',
    urlToImage: './src/img/strategy/image_6.jpeg',
    tags: ['Art', 'Design'],
    contant:
      "Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don't know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What's my passion? What kind of career fits my personality?",
    date: '16.09.2023',
  },
  {
    id: 7,
    title: 'Motivation Is The First Step To Success',
    urlToImage: './src/img/strategy/image_7.jpeg',
    tags: ['Culture'],
    contant:
      "Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don't know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What's my passion? What kind of career fits my personality?",
    date: '17.09.2023',
  },
  {
    id: 8,
    title: 'MoSuccess Steps For Your Personal Or Business Life',
    urlToImage: './src/img/strategy/image_8.jpeg',
    tags: ['Culture', 'Design', 'Art'],
    contant:
      "Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don't know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What's my passion? What kind of career fits my personality?",
    date: '17.09.2023',
  },
];

window.onload = function () {
  //Render Articles
  if (data) {
    renderArticlesToDom();
  }

  //Tags
  addTagsClickHandler();
};

const addTagsClickHandler = () => {
  document.querySelector('.strategies__tags').addEventListener('click', (e) => {
    if (e.target.classList.contains('tag')) {
      let clickedTag = e.target;
      removeSelectedTags();
      selectClickedTag(clickedTag);
      console.log(clickedTag.innerText);

      if (clickedTag.innerText === 'All') {
        showAllStrategies();
      } else {
        filterStrategyBySelectedTag(clickedTag.innerText);
      }
    }
  });
};

//Remove selected tag -> remove color and add border
const removeSelectedTags = () => {
  let tags = document.querySelectorAll('.strategies__tags .tag');
  tags.forEach((tag) => {
    tag.classList.remove('tag_selected');
    tag.classList.add('tag_bordered');
  });
};

//Select Clicked Tag -> remove border and add color
const selectClickedTag = (clickedTag) => {
  clickedTag.classList.remove('tag_bordered');
  clickedTag.classList.add('tag_selected');
};

//SHOW All strategy
const showAllStrategies = () => {
  let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
  strategies.forEach((strategy) => {
    strategy.classList.remove('strategy_hidden');
  });
};

//SHOW Filtered strategy
const filterStrategyBySelectedTag = (selectedTag) => {
  let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
  console.log(strategies);
  strategies.forEach((strategy) => {
    strategy.classList.add('strategy_hidden');

    strategy.querySelectorAll('.tag').forEach((tag) => {
      if (tag.innerText === selectedTag) {
        strategy.classList.remove('strategy_hidden');
      }
    });
  });
};

const renderArticlesToDom = () => {
  let strategiesWrapper = getStrategiesWrapper();
  generateArticles(data).forEach((article) => {
    //article.generateArticle() - method from constructor Article
    strategiesWrapper.append(article.generateArticle());
  });
};

const getStrategiesWrapper = () => {
  const strategiesContainer = document.querySelector('.strategy-wrapper');
  strategiesContainer.innerHTML = '';
  return strategiesContainer;
};

//create articles with constructor Article
const generateArticles = (data) => {
  let articles = [];
  data.forEach((article) => {
    articles.push(new Article(article));
  });
  return articles;
};
