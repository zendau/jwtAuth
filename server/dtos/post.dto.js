module.exports = class PostDto {
    author;
    title;
    body;
    date;

    constructor(model) {
        this.id = model._id;
        this.title = model.title;
        this.body = model.body;
        this.date = model.createdDate;
    }

    setAuthor(author) {
        this.author = author
    }
}