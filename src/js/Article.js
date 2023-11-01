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

    this.urlToImage &&
      (template += `<img class="strategy__image" src=${this.urlToImage} alt="photo increase">`);

    //if we have content
    if (this.title || this.tags) {
      template += `<div class="strategy__content">`;

      //if we have title
      this.title &&
        (template += `<h3 class="strategy__name"> ${this.title} </h3>`);
      // if we have tags array
      if (this.tags) {
        template += `<div class="strategy__tags">`;

        //tag
        this.tags.map((tag) => {
          template += `<span class="tag tag_colored">${tag}</span>`;
        });

        template += `</div>`;
      }

      template += `</div>`;
    }

    article.innerHTML = template;
    return article;
  }
}
