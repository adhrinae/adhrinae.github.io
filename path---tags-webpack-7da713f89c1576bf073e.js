webpackJsonp([0xa341cc436753],{452:function(n,s){n.exports={pathContext:{postsByTag:[{excerpt:"기존에  Learn Vue.js 2  강좌를 보면서 Form 제출에 대한 프로젝트를 레일즈로 작성하는 부분까지 따라했었는데, 이번에 다시 익혀보면서 백엔드 구축을 하나미로 작성해보았다. 그 과정에서 webpack을 밑바닥부터 설정하는 에피소드를 참고하여 하나미를 기반으로 설정해 보았다. application.rb…",html:'<p>기존에 <a href="https://laracasts.com/series/learn-vue-2-step-by-step/">Learn Vue.js 2</a> 강좌를 보면서 Form 제출에 대한 프로젝트를 레일즈로 작성하는 부분까지 따라했었는데, 이번에 다시 익혀보면서 백엔드 구축을 하나미로 작성해보았다. 그 과정에서 webpack을 밑바닥부터 설정하는 에피소드를 참고하여 하나미를 기반으로 설정해 보았다.</p>\n<h2 id="applicationrb-설정하기"><a href="#applicationrb-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>application.rb 설정하기</h2>\n<p>프로젝트를 작성하고 레일즈로 작성해놓았던 코드도 옮기고 한 건 좋은데 제대로 돌아가는 게 하나도 없었다. 브라우저 콘솔에 나타난 에러를 가만히 들여다보니 Content Security Policy를 미리 설정해둘 필요가 있었다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code><span class="token comment"># application.rb</span>\n<span class="token comment"># ...</span>\n      security<span class="token punctuation">.</span>content_security_policy <span class="token string">%{\n        form-action \'self\';\n        frame-ancestors \'self\';\n        base-uri \'self\';\n        default-src \'none\';\n        script-src \'self\' \'unsafe-inline\' \'unsafe-eval\' https:;\n        connect-src \'self\';\n        img-src \'self\' https: data:;\n        style-src \'self\' \'unsafe-inline\' https:;\n        font-src \'self\';\n        object-src \'none\';\n        plugin-types application/pdf;\n        child-src \'self\';\n        frame-src \'self\';\n        media-src \'self\'\n      }</span>\n<span class="token comment"># ...</span>\n</code></pre>\n      </div>\n<p><code>script-src</code> 부분에 주목해야한다. <code>unsafe-inline</code> 뿐 아니라 <code>unsafe-eval</code> 도 추가해주어야 한다. 그리고 애셋을 하나미에서 컴파일하지 않도록 설정해주어야 한다. 그렇지 않으면 자동적으로 하나미가 컴파일되지 않은 파일을 <code>public</code> 폴더로 옮겨버린다. 나중에 다시 설정하는 법을 찾을 수 있을지 모르겠지만 <code>fingerprint</code> 도 사용하지 않도록 체크해준다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code>    <span class="token comment">##</span>\n    <span class="token comment"># DEVELOPMENT</span>\n    <span class="token comment">#</span>\n    configure <span class="token symbol">:development</span> <span class="token keyword">do</span>\n      <span class="token comment"># Don\'t handle exceptions, render the stack trace</span>\n      handle_exceptions <span class="token keyword">false</span>\n\n      assets <span class="token keyword">do</span>\n        compile <span class="token keyword">false</span>\n      <span class="token keyword">end</span>\n    <span class="token keyword">end</span>\n\n\t<span class="token comment"># ...</span>\n\n    <span class="token comment">##</span>\n    <span class="token comment"># PRODUCTION</span>\n    <span class="token comment">#</span>\n    configure <span class="token symbol">:production</span> <span class="token keyword">do</span>\n      <span class="token comment"># scheme \'https\'</span>\n      <span class="token comment"># host   \'example.org\'</span>\n      <span class="token comment"># port   443</span>\n\n      assets <span class="token keyword">do</span>\n        <span class="token comment"># Don\'t compile static assets in production mode (eg. Sass, ES6)</span>\n        <span class="token comment">#</span>\n        <span class="token comment"># See: http://www.rubydoc.info/gems/hanami-assets#Configuration</span>\n        compile <span class="token keyword">false</span>\n        \n        <span class="token comment"># Use fingerprint file name for asset paths</span>\n        <span class="token comment">#</span>\n        <span class="token comment"># See: http://hanamirb.org/guides/assets/overview</span>\n        fingerprint <span class="token keyword">false</span>\n        \n        <span class="token comment"># ...</span>\n</code></pre>\n      </div>\n<h2 id="yarn-init"><a href="#yarn-init" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>yarn init</h2>\n<p>현재로서 <code>npm</code> 보다 <code>yarn</code> 이 더 나아보이니까 한번 적용해보았다. 이번 프로젝트와 관련된 모듈들은 다음의 커맨드로 설치하면 된다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code># 필수 모듈\n$ yarn add axios vue\n\n# 개발용 모듈\n$ yarn add webpack babel-core babel-loader babel-preset-es2015 --dev</code></pre>\n      </div>\n<h2 id="webpack-설정-파일-생성"><a href="#webpack-%EC%84%A4%EC%A0%95-%ED%8C%8C%EC%9D%BC-%EC%83%9D%EC%84%B1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>webpack 설정 파일 생성</h2>\n<p>다음은 webpack을 설정하는 파일을 작성할 차례이다. 처음엔 아주 간단한 부분만 작성한다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>\n<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'webpack\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token string">\'./apps/web/assets/javascript/app.js\'</span><span class="token punctuation">,</span> <span class="token comment">// 타겟 파일 지정</span>\n  output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  \tpath<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname <span class="token operator">+</span> <span class="token string">\'/public/assets\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 번들된 파일 저장 위치, path 모듈을 불러와야한다.</span>\n  \tfilename<span class="token punctuation">:</span> <span class="token string">\'app.js\'</span><span class="token punctuation">,</span> <span class="token comment">// bundle.js를 많이 쓰는 경향이 있는데 이번엔 app.js로 지정</span>\n  \tpublicPath<span class="token punctuation">:</span> <span class="token string">\'./public\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>이렇게 설정을 해 주고 <code>app.js</code> 파일이 엔트리 포인트가 되도록 각 모듈 사이의 <code>import</code> 나 <code>export</code> 를 지정해준다.</p>\n<p>번들된 파일을 생성하기 위해선 다음 커맨드를 입력해준다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>$ node_modules/.bin/webpack --hide-modules\n# 계속 변화를 감지하기 위한 커맨드는 다음과 같다.\n$ node_modules/.bin/webpack --hide-modules --watch</code></pre>\n      </div>\n<p>하지만 저 커맨드를 굳이 매번 입력해 줄 필요는 없다. <code>package.json</code> 파일에 스크립트를 설정해줄 수 있다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code>// package.json\n<span class="token punctuation">{</span>\n  // ...\n  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"webpack"</span><span class="token operator">:</span> <span class="token string">"NODE_ENV=development webpack --hide-modules"</span><span class="token punctuation">,</span>\n    <span class="token property">"dev"</span><span class="token operator">:</span> <span class="token string">"NODE_ENV=development webpack --hide-modules --watch"</span><span class="token punctuation">,</span>\n    <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"NODE_ENV=production webpack --hide-modules"</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><code>NODE_ENV</code> 에 대해서는 나중에 살펴 볼 것이다.</p>\n<p>하나미의 <code>application.html.erb</code> 파일에서는 <code>javascript</code> 뷰 헬퍼로 자바스크립트 파일을 불러오는데, body  태그 마지막에 불러오도록 한다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-markup"><code><span class="token comment">&lt;!-- ... --></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      &lt;%= yield %>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n    &lt;%= javascript \'app\' %>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token comment">&lt;!-- ... --></span>\n</code></pre>\n      </div>\n<p>대신 css 파일은 수동으로 옮겨주어야 할 것이다. <code>scss</code> 같은 preprocessing이 필요한 파일들은 어떻게 처리하는지 아직 실험해보지 못했다. 어차피 전부 webpack으로 해결할 수 있다.</p>\n<p>하지만 막상 번들된 파일을 불러와도 크롬에서 에러를 뿜으면서 랜더링이 되지 않았다. 왜인지 살펴보니 뷰의 모든 구성요소를 컴포넌트로 만들지 않고(Runtime-only), 기존에 작성한 html에 속성을 적용하려면(Full version) <a href="https://kr.vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only">별도의 설정</a>을 해 주어야 한다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    alias<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      <span class="token string">\'vue$\'</span><span class="token punctuation">:</span> <span class="token string">\'vue/dist/vue.esm.js\'</span> <span class="token comment">// \'vue/dist/vue.common.js\'  webpack 1용 입니다</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>이렇게 하면 생각하던대로 작동한다. 나중에 다른 프로젝트에서 Vue 컴포넌트로만 빌드를 하게 되면 이 설정은 입력할 필요가 없을 것이다.</p>\n<h2 id="환경-변수-관리"><a href="#%ED%99%98%EA%B2%BD-%EB%B3%80%EC%88%98-%EA%B4%80%EB%A6%AC" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>환경 변수 관리</h2>\n<p>윗부분에서 <code>NODE_ENV</code> 와 관련된 스크립트를 언급했는데, 프로덕션 모드에서는 번들된 패키지를 더 압축해주고, 프로덕션 모드임을 지정해주는 설정이 가능하다. 별도로 패키지를 설정해 줄 필요는 없고, webpack 설정 파일 제일 아랫부분에 스크립트를 더 추가해주어야 한다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>\n<span class="token comment">// ...</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>NODE_ENV <span class="token operator">===</span> <span class="token string">\'production\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>\n    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>optimize<span class="token punctuation">.</span>UglifyJsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      sourceMap<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      compress<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        warnings<span class="token punctuation">:</span> <span class="token boolean">false</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  \n  module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>\n    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      <span class="token string">\'process_env\'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        NODE_ENV<span class="token punctuation">:</span> <span class="token string">\'"production"\'</span> <span class="token comment">// 오타가 아니고 따옴표 안에 겹따옴표 들어가는거 맞다</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">)</span><span class="token punctuation">}</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2 id="babel-적용하기"><a href="#babel-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>babel 적용하기</h2>\n<p>최신 버전 크롬은 ES6 문법 대부분을 지원하기 때문에 별 신경을 쓰지 않아도 되곘지만.. 그래도 바벨을 적용해두는게 좋을 것이다. </p>\n<p>위에서 필요한 모듈은 설치되어있으니 <code>.babelrc</code> 파일부터 지정해준다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code>// .babelrc\n<span class="token punctuation">{</span>\n  <span class="token property">"presets"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span><span class="token string">"es2015"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token property">"modules"</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>그리고 바벨에서 제공하는 <a href="http://babeljs.io/docs/setup/#installation">공식 문서를 따라</a> webpack 설정 파일에 다음 코드를 추가해준다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n      \ttest<span class="token punctuation">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n      \texclude<span class="token punctuation">:</span> <span class="token regex">/node_modules/</span><span class="token punctuation">,</span>\n      \tloader<span class="token punctuation">:</span> <span class="token string">"babel-loader"</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>이제부터 webpack을 실행하면 바벨로 변환된 결과물이 나온다.</p>\n<h2 id="라이브러리-나누어서-적용하기"><a href="#%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EB%82%98%EB%88%84%EC%96%B4%EC%84%9C-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>라이브러리 나누어서 적용하기</h2>\n<p>만약에 내가 자바스크립트 파일을 작성하다가 아주 일부분만 수정하고 다시 빌드를 해야하는 일이 있다고 할 때 계속 시간을 잡아먹는게 상당히 짜증날 것이다. 일단 기본적인 라이브러리는 내용이 변할 일이 없기 때문에 별도로 합쳐지도록 적용하고, 내가 실제로 작성하는 파일만 변화가 있을 때 다시 번들되도록 만들면 많은 시간을 단축할 수 있을 것이다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    app<span class="token punctuation">:</span> <span class="token string">\'./apps/web/assets/javascripts/app.js\'</span><span class="token punctuation">,</span>\n    vendor<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'vue\'</span><span class="token punctuation">,</span> <span class="token string">\'axios\'</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    path<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname <span class="token operator">+</span> <span class="token string">\'/public/assets\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    filename<span class="token punctuation">:</span> <span class="token string">\'[name].js\'</span><span class="token punctuation">,</span> <span class="token comment">// entry에 지정된 name(app, vendor)로 번들된 파일이 생성된다.</span>\n    publicPath<span class="token punctuation">:</span> <span class="token string">\'./public\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// ...</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>optimize<span class="token punctuation">.</span>CommonsChunckPlugin</span><span class="token punctuation">(</span>\n      <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'vendor\'</span> <span class="token punctuation">}</span> <span class="token comment">// vendor 파일 덩어리를 따로 보관하고 캐싱한다.</span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>이러고 나서 빌드를 마치고 나면 <code>public/assets</code> 폴더에는 <code>app.js</code>, <code>vendor.js</code> 두 개의 파일이 생성된다. 당연하게 레이아웃 페이지에서 <code>vendor.js</code> 파일도 로딩해주어야 한다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-markup"><code><span class="token comment">&lt;!-- ... --></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      &lt;%= yield %>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n    &lt;%= javascript \'vendor\', \'app\' %>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token comment">&lt;!-- ... --></span>\n</code></pre>\n      </div>\n<h2 id="css-파일도-관리하자"><a href="#css-%ED%8C%8C%EC%9D%BC%EB%8F%84-%EA%B4%80%EB%A6%AC%ED%95%98%EC%9E%90" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>CSS 파일도 관리하자</h2>\n<p>이래저래 잘 작동하길래 슬슬 코드를 올려볼까 했더니 CSS 파일이 문제가 되었다. 물론 CSS 파일의 내용은 몇 줄 없지만, 매번 내용을 수정한 다음에 일일이 파일을 <code>public</code> 폴더로 옮기는건 아주 비효율적이다. 당연히 webpack이 CSS 파일도 모아줄 수 있다.</p>\n<p>먼저 필요한 모듈을 설치한다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>$ yarn add css-loader extract-text-webpack-plugin --dev</code></pre>\n      </div>\n<p>그리고 설정파일에 CSS 관련 모듈 규칙과 플러그인을 추가해준다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>\n<span class="token keyword">const</span> ExtractTextPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'extract-text-webpack-plugin\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// ...</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token comment">// ...</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.css$/</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> ExtractTextPlugin<span class="token punctuation">.</span><span class="token function">extract</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          use<span class="token punctuation">:</span> <span class="token string">\'css-loader\'</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token comment">// ...</span>\n    <span class="token keyword">new</span> <span class="token class-name">ExtractTextPlugin</span><span class="token punctuation">(</span><span class="token string">\'styles.css\'</span><span class="token punctuation">)</span> <span class="token comment">// 원하는 이름으로 지정</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token comment">// ...</span>\n</code></pre>\n      </div>\n<p>이후 webpack을 실행하면 <code>public/assets</code> 폴더에 <code>styles.css</code> 파일이 추가된다. 나머지는 레이아웃 파일에서 이 파일을 불러오도록 만들면 된다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-markup"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n    &lt;%= stylesheet \'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.3.1/css/bulma.min.css\' %>\n    &lt;%= stylesheet \'styles\' %>\n    <span class="token comment">&lt;!-- ... --></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>위 내용을 기반으로 작성한 간단한 프로젝트는 <a href="https://github.com/emaren84/hanami-webpack-config-example">Github</a>에 업로드 되어있다.</p>',id:"/Users/rinae/Dev/blog/src/pages/posts/2017-04-09-hanami-webpack-config/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2017-04-09",path:"/posts/hanami-webpack-config",title:"하나미 프로젝트에서 webpack 설정하기",tags:["Ruby","Hanami","Javascript","Webpack"],category:"Webpack"}}],tagName:"Webpack"}}}});
//# sourceMappingURL=path---tags-webpack-7da713f89c1576bf073e.js.map