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

const renderTemplate = (tag1, tag2, tag3, tag4, tag5) => {
  const tag1Obj = new Tag(tag1);
  const tag2Obj = new Tag(tag2);
  const tag3Obj = new Tag(tag3);
  const tag4Obj = new Tag(tag4);
  const tag5Obj = new Tag(tag5);

  const body = `{{!-- Featured  --}}
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
      {{!-- Featured --}}
  
      {{!-- Latest --}}
      {{#get "posts" limit="5" include="tags" filter="featured:false+tag:-${tag1Obj.slug}+tag:-${tag2Obj.slug}+tag:-${tag4Obj.slug}+tag:-${tag3Obj.slug}+tag:-${tag5Obj.slug}" as |latest|}}
      {{#if latest}}
      <div class="main--outer-container">
          <div class="main--inner-container">
              <a class="main__read-more" href="/page/2/">
                  <h2 class="main__header">Latest</h2>
                  <svg aria-label="See more posts">
                      <use href="#arrow-right"></use>
                  </svg>
              </a>
              <section class="grid-container-home">
                  {{#foreach latest}}
                  {{> "card"}}
                  {{/foreach}}
              </section>
          </div>
      </div>
      {{/if}}
      {{/get}}
      {{!-- Latest --}}
  
      {{!-- ${tag1Obj.tag} --}}
      {{#get "posts" limit="5" include="tags" filter="featured:false+tag:${tag1Obj.slug}+tag:-${tag2Obj.slug}+tag:-${tag4Obj.slug}+tag:-${tag3Obj.slug}+tag:-${tag5Obj.slug}" as |${tag1Obj.slug}|}}
      {{#if ${tag1Obj.slug}}}
      <div class="main--outer-container">
          <div class="main--inner-container">
              <a class="main__read-more" href="/tag/${tag1Obj.slug}/">
                  <h2 class="main__header">${tag1Obj.tag}</h2>
                  <svg aria-label="See more ${tag1Obj.tag}">
                      <use href="#arrow-right"></use>
                  </svg>
              </a>
              <section class="grid-container-home">
                  {{#foreach ${tag1Obj.slug}}}
                  {{> "card"}}
                  {{/foreach}}
              </section>
          </div>
      </div>
      {{/if}}
      {{/get}}
      {{!-- ${tag1Obj.tag} --}}
  
      {{!-- ${tag2Obj.slug} --}}
      {{#get "posts" limit="5" include="tags" filter="featured:false+tag:${tag2Obj.slug}+tag:-${tag1Obj.slug}+tag:-${tag4Obj.slug}+tag:-${tag3Obj.slug}+tag:-${tag5Obj.slug}" as |${tag2Obj.slug}|}}
      {{#if ${tag2Obj.slug}}}
      <div class="main--outer-container">
          <div class="main--inner-container">
              <a class="main__read-more" href="/tag/${tag2Obj.slug}/">
                  <h2 class="main__header">${tag2Obj.slug}</h2>
                  <svg aria-label="See more ${tag2Obj.slug}">
                      <use href="#arrow-right"></use>
                  </svg>
              </a>
              <section class="grid-container-home">
                  {{#foreach ${tag2Obj.slug}}}
                  {{> "card"}}
                  {{/foreach}}
              </section>
          </div>
      </div>
      {{/if}}
      {{/get}}
      {{!-- ${tag2Obj.slug} --}}
  
      {{!-- ${tag3Obj.slug} --}}
      {{#get "posts" limit="5" include="tags" filter="featured:false+tag:${tag3Obj.slug}+tag:-${tag1Obj.slug}+tag:-${tag2Obj.slug}+tag:-${tag4Obj.slug}+tag:-${tag5Obj.slug}" as |${tag3Obj.slug}|}}
      {{#if ${tag3Obj.slug}}}
      <div class="main--outer-container">
          <div class="main--inner-container">
              <a class="main__read-more" href="/tag/${tag3Obj.slug}/">
                  <h2 class="main__header">${tag3Obj.slug}</h2>
                  <svg aria-label="See more ${tag3Obj.slug}">
                      <use href="#arrow-right"></use>
                  </svg>
              </a>
              <section class="grid-container-home">
                  {{#foreach ${tag3Obj.slug}}}
                  {{> "card"}}
                  {{/foreach}}
              </section>
          </div>
      </div>
      {{/if}}
      {{/get}}
      {{!-- ${tag3Obj.slug} --}}
  
      {{!-- ${tag4Obj.slug} --}}
      {{#get "posts" limit="5" include="tags" filter="featured:false+tag:${tag4Obj.slug}+tag:-${tag1Obj.slug}+tag:-${tag2Obj.slug}+tag:-${tag3Obj.slug}+tag:-${tag5Obj.slug}" as |${tag4Obj.slug}|}}
      {{#if ${tag4Obj.slug}}}
      <div class="main--outer-container">
          <div class="main--inner-container">
              <a class="main__read-more" href="/tag/${tag4Obj.slug}/">
                  <h2 class="main__header">${tag4Obj.slug}</h2>
                  <svg aria-label="See more ${tag4Obj.slug}">
                      <use href="#arrow-right"></use>
                  </svg>
              </a>
              <section class="grid-container-home">
                  {{#foreach ${tag4Obj.slug}}}
                  {{> "card"}}
                  {{/foreach}}
              </section>
          </div>
      </div>
      {{/if}}
      {{/get}}
      {{!-- ${tag4Obj.slug} --}}
  
      {{!-- ${tag5Obj.slug} --}}
      {{#get "posts" limit="5" include="tags" filter="featured:false+tag:${tag5Obj.slug}+tag:-${tag1Obj.slug}+tag:-${tag2Obj.slug}+tag:-${tag3Obj.slug}" as |${tag5Obj.slug}|}}
      {{#if ${tag5Obj.slug}}}
      <div class="main--outer-container">
          <div class="main--inner-container">
              <a class="main__read-more" href="/tag/${tag5Obj.slug}/">
                  <h2 class="main__header">${tag5Obj.slug}</h2>
                  <svg aria-label="See more ${tag5Obj.slug}">
                      <use href="#arrow-right"></use>
                  </svg>
              </a>
              <section class="grid-container-home">
                  {{#foreach ${tag5Obj.slug}}}
                  {{> "card"}}
                  {{/foreach}}
              </section>
          </div>
      </div>
      {{/if}}
      {{/get}}
      {{!-- ${tag5Obj.slug} --}}
  </main>`;

  return HEADER + body;
};

module.exports = renderTemplate;
