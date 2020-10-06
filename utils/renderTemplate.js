const Tag = require("./Tag");
const HEADER = `{{!< default}}
{{!-- The tag above means: insert everything in this file
    into the {body} of the default.hbs template --}}
    
    {{! Hero }}
    {{#if @site.cover_image}}
    <style type="text/css">
        .hero {
            background-image: url({{img_url @site.cover_image size='xl'}});
        }
    
        @media(max-width: 1000px) {
            .hero {
                background-image: url({{img_url @site.cover_image size='l'}});
                background-image: -webkit-image-set(url({{img_url @site.cover_image size='l'}}) 1x,
                    url({{img_url @site.cover_image size='xl'}}) 2x);
                background-image: image-set(url({{img_url @site.cover_image size='l'}}) 1x,
                    url({{img_url @site.cover_image size='xl'}}) 2x);
            }
    
        }
    
        @media(max-width: 600px) {
            .hero {
                background-image: url({{img_url @site.cover_image size='m'}});
                background-image: -webkit-image-set(url({{img_url @site.cover_image size='m'}}) 1x,
                    url({{img_url @site.cover_image size='l'}}) 2x);
                background-image: image-set(url({{img_url @site.cover_image size='m'}}) 1x,
                    url({{img_url @site.cover_image size='l'}}) 2x);
            }
        }
    </style>
    {{/if}}
    <section class="hero">
        <div class="hero__overlay">
            <div class="hero__top">
                <div class="hero__text-container">
                    <h1 class="hero__site-title">{{@site.title}}</h1>
                    <h2 class="hero__site-description">{{@site.description}}
                    </h2>
                    <a class="hero__contact" href="/contact/">
                        <svg aria-hidden="true">
                            <use href="#chat"></use>
                        </svg>Contact</a>
                </div>
            </div>
        </div>
    </section>
    {{!-- Hero  --}}
    
    <main class="main">`;

const FEATURED = `
    {{!-- Featured  --}}
      {{#get "posts" include="tags" limit="3" filter="featured:true" as |featured|}}
      {{#if featured}}
      <div class="main--outer-container">
          <div class="main--inner-container">
              <h2 class="main__header">Featured</h2>
              <section class="grid-container-home">
                  {{#foreach featured}}
                  {{> "card"}}
                  {{/foreach}}
              </section>
          </div>
      </div>
      {{/if}}
      {{/get}}
      {{!-- Featured --}}`;

const removeFromArr = (item, arr) => {
  console.log(item, arr);
  const filteredArr = arr.filter((i) => i !== item);
  return filteredArr;
};

const renderTagSection = (tag, tagArr) => {
  const tagObj = new Tag(tag);
  const filteredArr = removeFromArr(tag, tagArr);

  const valuesToSubtract = filteredArr
    .map((i) => `+tag:-${new Tag(i).slug}`)
    .join("");

  const sectionTemplate = `
    {{!-- ${tagObj.tag} --}}
    {{#get "posts" limit="5" include="tags" filter="featured:false+tag:${tagObj.slug}${valuesToSubtract}" as |${tagObj.slug}|}}
    {{#if ${tagObj.slug}}}
    <div class="main--outer-container">
        <div class="main--inner-container">
            <a class="main__read-more" href="/tag/${tagObj.slug}/">
                <h2 class="main__header">${tagObj.tag}</h2>
                <svg aria-label="See more ${tagObj.slug}">
                    <use href="#arrow-right"></use>
                </svg>
            </a>
            <section class="grid-container-home">
                {{#foreach ${tagObj.slug}}}
                {{> "card"}}
                {{/foreach}}
            </section>
        </div>
    </div>
    {{/if}}
    {{/get}}
    {{!-- ${tagObj.tag} --}}
    `;
  return sectionTemplate;
};

const renderTemplate = (featuredOn, [...args]) => {
  const tagArr = args.filter((item) => item !== "");
  const sections = tagArr.map((i) => renderTagSection(i, tagArr)).join("\n");

  return HEADER + sections;
};

module.exports = renderTemplate;
