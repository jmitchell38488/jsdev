(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"7R6r":function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",(function(){return N}));var r=t("q1tI"),n=t.n(r),l=t("8Svw"),i=t("lBDk"),o=t("nmTy"),s=t("+etW"),c=function(e){var a=e.authorId,t=e.children,r={frontmatter:{authors:[a]}};return n.a.createElement("div",{className:"site-container"},n.a.createElement("header",null,n.a.createElement(l.a,null)),n.a.createElement("div",{id:"page-content",className:"universal-page-content-wrapper"},n.a.createElement("div",{id:"page-content-inner"},n.a.createElement("div",{className:"jsd-layout jsd-layout-3-cols jsd-layout-3-cols-drop-right-left",id:"index-container"},n.a.createElement("div",{id:"sidebar-wrapper-left",className:"sidebar-wrapper sidebar-wrapper-left jsd-layout-sidebar-left"},n.a.createElement(o.a,null)),n.a.createElement("main",null,t),n.a.createElement("div",{id:"sidebar-wrapper-right",className:"sidebar-wrapper sidebar-wrapper-right jsd-layout-sidebar-right"},n.a.createElement(i.a,{post:r}))))),n.a.createElement(s.a,null))},d=t("zLVn"),m=t("Wbzz"),u=function(e){return Object(m.useStaticQuery)("4031190793").allMarkdownRemark.nodes.filter((function(a){return a.frontmatter.authors.includes(e)})).map((function(e){return{id:e.id,ttr:e.timeToRead,slug:e.fields.slug,authors:e.frontmatter.authors,date:e.frontmatter.date,publishedDate:e.frontmatter.publishedDate,hero:e.frontmatter.hero?e.frontmatter.hero.childImageSharp.fluid.src:null,tags:e.frontmatter.posttags,title:e.frontmatter.title}}))},p=t("ANU2"),v=t("9TCl"),f=t("GR6k"),h=function(e){var a=e.authorId,t=u(a),r=Object(p.a)(),l=t.map((function(e,a){var t=e.hero,l=Object(d.a)(e,["hero"]);return l.hero=null,0===a?(l.hero=t||(r||null),n.a.createElement(f.a,{key:""+l.id,post:l,title:l.title})):n.a.createElement(v.a,{key:""+l.id,post:l,title:l.title})}));return n.a.createElement("div",{id:"rendered-article-feed"},l)},E=t("vrFN"),b=t("nPH8"),y=t("NlEj"),N=(a.default=function(e){var a,t=e.pageContext,r=e.data,l=e.location,i=t.author,o=(null===(a=r.site.siteMetadata)||void 0===a?void 0:a.title)||"Title",s=Object(b.a)(i);return n.a.createElement(c,{location:l,title:o,authorId:i},n.a.createElement(E.a,{title:s.first().name+" - All Posts by author",location:l,twitterCreator:s.first().id}),n.a.createElement("div",{className:"hide show-tablet jsd-header-widget"},n.a.createElement(y.a,{author:s.first()})),n.a.createElement("header",{className:"mb-2"},n.a.createElement("h2",{className:"fs-m fw-heavy m-0 ff-monospace"},"Posts")),n.a.createElement("div",{id:"homepage-feed"},n.a.createElement(h,{authorId:i})))},"3159585216")},M7K5:function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r);a.a=function(e){var a=e.name,t=e.src,r=e.className,l=void 0===r?"":r,i=l?"jsd-avatar "+l:"jsd-avatar";return t?n.a.createElement("span",{className:i},n.a.createElement("img",{className:"jsd-avatar-image jsd-article-cover-image",src:t,alt:a,title:a,loading:"lazy"})):n.a.createElement("span",{className:i},n.a.createElement("span",{className:"jsd-avatar-image",alt:a,title:a}))}},NlEj:function(e,a,t){"use strict";var r=t("Wbzz"),n=t("q1tI"),l=t.n(n),i=t("M7K5"),o=function(e){var a,t,r,n,i,o,s,c,d=e.author,m=[];(null===(a=d.employment)||void 0===a?void 0:a.position)&&(null===(t=d.employment)||void 0===t?void 0:t.company)&&m.push({id:"work",title:"Work",value:l.a.createElement(l.a.Fragment,null,null===(r=d.employment)||void 0===r?void 0:r.position,l.a.createElement("span",null,"at"),(null===(n=d.employment)||void 0===n?void 0:n.url)?l.a.createElement("a",{className:"jsd-link",href:null===(i=d.employment)||void 0===i?void 0:i.url,target:"_blank",title:null===(o=d.employment)||void 0===o?void 0:o.company,rel:"noreferrer"},null===(s=d.employment)||void 0===s?void 0:s.company):null===(c=d.employment)||void 0===c?void 0:c.company)});return d.location&&m.push({id:"location",title:"Location",value:d.location}),l.a.createElement("div",{className:"jsd-author-details"},l.a.createElement("ul",{className:"jsd-author-details-inner"},m.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("div",{className:"key"},e.title),l.a.createElement("div",{className:"value"},e.value))}))))};a.a=function(e){var a=e.author;return l.a.createElement("section",{className:"jsd-card jsd-card-secondary branded p-4 pt-0 hidden l:grid gap-4"},l.a.createElement("div",{className:"-mt-4"},l.a.createElement(r.Link,{to:a.slug,className:"flex jsd-link",title:a.name,"aria-label":a.name},l.a.createElement(i.a,{name:a.name,src:a.profilePicture.src,className:"jsd-avatar-xl mr-2 shrink-0"}),l.a.createElement("span",{className:"fs-m fw-med mt-5"},a.name))),l.a.createElement("div",{className:"jsd-author-bio"},a.bio),l.a.createElement(o,{author:a}))}},lBDk:function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r),l=t("nPH8"),i=t("NlEj");a.a=function(e){var a=e.post,t=Object(l.a)(a.frontmatter.authors).all().map((function(e){return n.a.createElement(i.a,{key:"sidebar-author-"+e.id,author:e})}));return n.a.createElement("aside",{className:"side-bar sidebar-additional grid gap-4","aria-label":"Secondary sidebar"},t)}}}]);
//# sourceMappingURL=component---src-templates-author-js-157adcd8e64d5b5f88c1.js.map