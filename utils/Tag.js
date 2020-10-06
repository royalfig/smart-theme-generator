class Tag {
  constructor(tag) {
    this.tag = tag;
    this.slug = this.formatTag(tag);
  }

  formatTag(val) {
    const formattedTag = val.replace(/\W|\s/g, "-").toLowerCase();
    return formattedTag;
  }
}

module.exports = Tag;
