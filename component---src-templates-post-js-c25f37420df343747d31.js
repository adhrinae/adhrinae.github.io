(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{150:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),l=(a(56),a(160),a(80),a(82),a(40)),s=a(0),c=a.n(s),i=a(156),m=a.n(i),o=function(){return c.a.createElement("div",{className:"box",style:{margin:"2rem 0"}},c.a.createElement("article",{className:"media"},c.a.createElement("div",{className:"media-left is-hidden-mobile"},c.a.createElement("figure",{className:"image"},c.a.createElement("img",{src:"https://gravatar.com/avatar/02026487bc28d395fbbee71bed30c43a",alt:"gravatar of Ahn Dohyung",style:{borderRadius:"50%"}}))),c.a.createElement("div",{className:"media-content"},c.a.createElement("div",{className:"content"},c.a.createElement("p",null,c.a.createElement("strong",null,"Rinae (Ahn Dohyung)"),c.a.createElement("br",null),"Frontend developer. Highly interested in ReactJS, Testing and Programming Fundamentals. Also, Have the enthusiasm for learning and sharing new programming issues, especially with translation.")),c.a.createElement("nav",{className:"level"},c.a.createElement("div",{className:"level-left"},c.a.createElement("a",{href:"mailto:adhrinae@gmail.com",className:"level-item"},c.a.createElement("span",{className:"icon has-text-info"},c.a.createElement("i",{className:"mdi mdi-24px mdi-email"}))),c.a.createElement("a",{href:"https://github.com/adhrinae",className:"level-item"},c.a.createElement("span",{className:"icon has-text-info"},c.a.createElement("i",{className:"mdi mdi-24px mdi-github-circle"}))),c.a.createElement("a",{href:"https://twitter.com/adhrinae",className:"level-item"},c.a.createElement("span",{className:"icon has-text-info"},c.a.createElement("i",{className:"mdi mdi-24px mdi-twitter"}))))))))},d=a(155),u=(a(55),function(e){var t=e.tags;return c.a.createElement("div",{className:"tag-lists"},c.a.createElement("h2",{className:"title"},"Similar posts about ..."),c.a.createElement("div",{className:"tags"},t.map(function(e){return c.a.createElement(l.Link,{className:"tag is-info is-medium",to:"/tags/"+e,key:e},e)})))}),p=a(177),g=a.n(p);a(178);a.d(t,"pageQuery",function(){return f});var E=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e,t,a;e={src:"https://utteranc.es/client.js",repo:"adhrinae/gatsby-blog",branch:"master",async:!0,"issue-term":"pathname"},t=document.createElement("script"),a=document.querySelector(".box"),Object.keys(e).forEach(function(a){t.setAttribute(a,e[a])}),a.insertAdjacentElement("afterend",t)},a.render=function(){var e=this.props.data,t=e.markdownRemark,a=e.site.siteMetadata,n=t.frontmatter,r=n.tags,s=n.coverImageUrl,i=n.title,p=n.date,E=n.description,f=n.path,h=E||t.excerpt,v=a.siteUrl+f,b=a.siteUrl+g.a;return c.a.createElement(d.a,null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"columns is-mobile"},c.a.createElement("div",{className:"column is-10-mobile is-offset-1-mobile is-8-tablet is-offset-2-tablet is-8-desktop is-offset-2-desktop"},c.a.createElement("div",{className:"content"},c.a.createElement(m.a,null,c.a.createElement("title",null,i," - Rinae's playground"),c.a.createElement("meta",{property:"og:type",content:"article"}),c.a.createElement("meta",{property:"og:title",content:i}),c.a.createElement("meta",{property:"og:description",content:h}),c.a.createElement("meta",{property:"og:image",content:s||b}),c.a.createElement("meta",{property:"og:url",content:v}),c.a.createElement("meta",{property:"twitter:card",content:"summary"}),c.a.createElement("meta",{property:"twitter:site",content:"@adhrinae"})),c.a.createElement("div",{className:"post-title"},c.a.createElement("h1",null,i),c.a.createElement("span",{className:"has-text-grey-light is-size-6"},p)),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),c.a.createElement("hr",null),c.a.createElement(u,{tags:r}),c.a.createElement(o,null),c.a.createElement("div",{className:"button-wrapper"},c.a.createElement(l.Link,{to:"/",className:"button is-info is-large"},c.a.createElement("span",{className:"icon is-medium"},c.a.createElement("i",{className:"mdi mdi-36px mdi-format-list-bulleted"}))," ",c.a.createElement("span",null,"BACK TO ALL POSTS"))))))))},t}(c.a.Component),f="4184179311";t.default=E},151:function(e,t,a){e.exports=a.p+"static/favicon-8f04d8a8472e0545dfb3bfc1f40ebc96.ico"},152:function(e,t,a){},155:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(2),s=a.n(l),c=a(0),i=a.n(c),m=a(156),o=a.n(m),d=function(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"content has-text-centered"},i.a.createElement("p",null,"All content copyright rinae © ",(new Date).getFullYear()," • All rights reserved."),i.a.createElement("p",null,"Powered by ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby.js")," and"," ",i.a.createElement("a",{href:"https://bulma.io"},"Bulma")))))},u=a(40),p=function(e){var t=e.toggled,a=e.handleToggled;return i.a.createElement("nav",{className:"navbar is-info",role:"navigation","aria-label":"main navigation"},i.a.createElement("div",{className:"navbar-brand"},i.a.createElement(u.Link,{to:"/",className:"navbar-item navbar-title",style:{fontWeight:"bold"}},"Rinae's playground"),i.a.createElement("div",{className:t?"navbar-burger is-active":"navbar-burger",onClick:a},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null))),i.a.createElement("div",{className:t?"navbar-menu is-active":"navbar-menu"},i.a.createElement("div",{className:"navbar-end"},i.a.createElement(u.Link,{className:"navbar-item",to:"/"},"Posts"),i.a.createElement(u.Link,{className:"navbar-item",to:"/tags"},"Tags"),i.a.createElement("a",{className:"navbar-item",href:"/rss.xml"},"RSS Feed"))))};p.propTypes={toggled:s.a.bool.isRequired,handleToggled:s.a.func.isRequired};var g=p,E=a(151),f=a.n(E),h=(a(157),a(158),a(159),a(152),function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={toggled:!1},t.handleToggled=function(){t.setState({toggled:!t.state.toggled})},t}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,null,i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("title",null,"Rinae's playground"),i.a.createElement("link",{rel:"shortcut icon",href:f.a})),i.a.createElement(g,{toggled:this.state.toggled,handleToggled:this.handleToggled}),e,i.a.createElement(d,null))},t}(c.Component));h.propTypes={children:s.a.element.isRequired};t.a=h},160:function(e,t,a){var n=a(29),r=a(41);a(161)("keys",function(){return function(e){return r(n(e))}})},161:function(e,t,a){var n=a(6),r=a(19),l=a(18);e.exports=function(e,t){var a=(r.Object||{})[e]||Object[e],s={};s[e]=t(a),n(n.S+n.F*l(function(){a(1)}),"Object",s)}},177:function(e,t,a){e.exports=a.p+"static/blog-og-default-image-5552222ab35236bbadee1bc32ef610f3.png"},178:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-post-js-c25f37420df343747d31.js.map