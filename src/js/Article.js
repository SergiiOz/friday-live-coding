export class Article {
    constructor({ id, title, urlToImage, tags, ...rest }) {
        this.id = id;
        this.title = title;
        this.urlToImage = urlToImage;
        this.tags = tags;
    }

    generateArticle() {
        let template = '';

        let article = document.createElement('article');
        // article.className.add('strategy block-shadowed');
        article.className = 'strategy block-shadowed';
        article.setAttribute('data-id', this.id);
    }
}
