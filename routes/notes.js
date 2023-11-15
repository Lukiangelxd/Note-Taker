class Note {
    title; text; id;
    constructor(title, text, id = null){
        this.title = title;
        this.text = text;
        this.id = id;
    }
}

module.exports = Note;