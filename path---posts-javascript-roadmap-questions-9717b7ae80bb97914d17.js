webpackJsonp([67689167535829],{410:function(l,i){l.exports={data:{markdownRemark:{html:'<p><a href="https://jsroadmap.com">오늘은 저도 공부할 겸 학습거리를 하나 제공해드리려 합니다.</a></p>\n<p>자바스크립트 초심자를 대상으로 학습 로드맵을 제공하는 뉴스레터입니다. 총 7개의 챕터로 좋은 내용들을 전달해주었는데, 자바스크립트 학습의 단계를 Baby -> Child -> Teenage -> Adult 로 구분하여  각 단계별로 익혀야 할 개념들을 소개하고, 챕터 말미에 각 단계별로 진도 확인을 위한 질문들을 제시했습니다.</p>\n<p>이 질문의 내용이 아주 좋다고 생각하여 자바스크립트의 기초를 복습할 겸 질문의 답을 정리해보는 학습을 하고자 합니다. 대부분 질문의 답은 MDN에서 얻을 수 있지만, 답을 찾고 관련된 글을 읽으면서 다시 한번 자바스크립트의 기초를 다지는 계기가 되리라 생각합니다.</p>\n<h2 id="baby-phase"><a href="#baby-phase" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Baby phase</h2>\n<ol>\n<li>자바스크립트의 6가지 기본(원시) 타입은? (ES6에서 한개 더 늘어나서 총 여섯개입니다)</li>\n<li>자바스크립트에서 변수를 선언하고 할당하는 방법은?</li>\n<li><code>const</code>, <code>let</code>, <code>var</code> 로 변수를 선언할 때의 차이점은?</li>\n<li>\n<p>아래의 연산자는 어떤 역할을 하는가?</p>\n<ol>\n<li><code>+</code></li>\n<li><code>-</code></li>\n<li><code>*</code></li>\n<li><code>/</code></li>\n<li><code>%</code></li>\n</ol>\n</li>\n<li>\n<p>아래의 비교연산자의 역할은?</p>\n<ol>\n<li><code>===</code></li>\n<li><code>!==</code></li>\n<li><code>></code></li>\n<li><code>>=</code></li>\n<li><code>&#x3C;</code></li>\n<li><code>&#x3C;=</code></li>\n</ol>\n</li>\n<li>\n<p>다음의 조건문은 어떻게 사용하는가?</p>\n<ol>\n<li><code>if</code></li>\n<li><code>if else</code></li>\n<li><code>else</code></li>\n</ol>\n</li>\n<li><code>for</code> 루프를 사용하는 방법은?</li>\n<li>\n<p><strong>배열(Array)</strong>은 무엇인가?</p>\n<ol>\n<li>배열에 값을 넣는 방법은?</li>\n<li>배열의 값을 불러오는 방법은?</li>\n<li>배열의 값을 제거하는 방법은?</li>\n<li>배열의 모든 값을 순회하는 방법은?</li>\n</ol>\n</li>\n<li>\n<p><strong>객체(Object)</strong>란 무엇인가?</p>\n<ol>\n<li>객체에 값을 넣는 방법은?</li>\n<li>객체의 값을 불러오는 방법은?</li>\n<li>객체의 속성을 제거하는 방법은?</li>\n<li>객체의 모든 값을 순회하는 방법은?</li>\n<li>객체의 메서드(method)란 무엇인가?</li>\n<li>메서드를 정의하는 방법은?</li>\n<li>메서드를 호출/실행하는 방법은?</li>\n</ol>\n</li>\n<li>\n<p><strong>함수(Function)</strong>란 무엇인가?</p>\n<ol>\n<li>함수를 정의하는 방법은?</li>\n<li>함수를 호출/실행하는 방법은?</li>\n<li>함수에 인자(arguments)를 전달하는 방법은?</li>\n<li>함수 안에서 <code>return</code> 키워드는 어떤 역할을 하는가?</li>\n</ol>\n</li>\n</ol>\n<h2 id="child-phase"><a href="#child-phase" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Child phase</h2>\n<ol>\n<li>\n<p>자바스크립트의 스코프(Scope)란?</p>\n<ol>\n<li>왜 전역 변수를 최소화해야 하는가?</li>\n<li>클로저(Closure)란 무엇인가?</li>\n<li>클로저를 왜 사용하는가?</li>\n</ol>\n</li>\n<li>\n<p>콜백이란 무엇인가?</p>\n<ol>\n<li>콜백을 어떻게 사용하는가?</li>\n<li>콜백을 어떻게 작성하는가?</li>\n<li>콜백을 받아들이는 함수를 작성하는 방법은?</li>\n<li><code>setTimeout</code> 은 콜백을 받는 함수인가?</li>\n</ol>\n</li>\n<li>\n<p>비동기 자바스크립트</p>\n<ol>\n<li>자바스크립트에서 <strong>동기</strong>와 <strong>비동기</strong>의 의미는 무엇인가?</li>\n<li>자바스크립트로 <strong>비동기</strong> 코드를 작성하는 방법은?</li>\n<li>이벤트 루프가 무엇인가?</li>\n<li>이벤트 루프가 어떻게 동작하는가?</li>\n</ol>\n</li>\n<li>\n<p>DOM 메서드에 관한 질문들</p>\n<ol>\n<li>엘리먼트(Element)란?</li>\n<li>노드(Node)란?</li>\n<li>엘리먼트를 선택하는 방법은?</li>\n<li>여러 엘리먼트를 선택하는 방법은?</li>\n<li><strong>모든 브라우저</strong>에서 엘리먼트를 순회하는 방법은?</li>\n<li>부모 엘리먼트를 선택하는 방법은?</li>\n<li>형제 엘리먼트를 선택하는 방법은?</li>\n<li>엘리먼트에 클래스를 추가/제거하는 방법은?</li>\n<li>엘리먼트에 특정 클래스가 있는지 확인하는 방법은?</li>\n<li>어떤 상황에서 엘리먼트에 클래스를 추가하는가?</li>\n<li>엘리먼트에 속성을 추가/제거하는 방법은?</li>\n<li>엘리먼트에 특정 속성이 있는지 확인하는 방법은?</li>\n<li>어떤 상황에서 엘리먼트에 속성을 추가/제거하는가?</li>\n<li>HTML 엘리먼트를 자바스크립트로 생성하는 방법은?</li>\n<li>특정 엘리먼트 바로 앞에 새로운 엘리먼트를 생성하는 방법은?</li>\n<li>엘리먼트의 스타일을 변경하는 방법은?</li>\n<li>엘리먼트의 스타일을 자바스크립트로 바꾸어도 되는가? 왜 되는가/되지 않는가?</li>\n<li>엘리먼트의 내용을 가져오는 방법은?</li>\n</ol>\n</li>\n<li>\n<p>이벤트</p>\n<ol>\n<li>이벤트 리스너(Event listener)를 추가하는 방법은?</li>\n<li>왜 이벤트 리스너를 추가하는가?</li>\n<li>이벤트 리스너를 제거하는 방법은?</li>\n<li>언제 이벤트 리스너를 제거하는가? 왜 제거하는가?</li>\n<li>자주 사용되는 마우스 이벤트의 종류는?</li>\n<li>자주 사용되는 키보드 이벤트의 종류는?</li>\n<li>자주 사용되는 폼(Form) 이벤트의 종류는?</li>\n<li>이벤트 대상의 값을 가져오는 방법은?</li>\n</ol>\n</li>\n</ol>\n<h2 id="teenage-phase"><a href="#teenage-phase" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Teenage phase</h2>\n<ol>\n<li>\n<p>OOP</p>\n<ol>\n<li><code>this</code> 의 컨텍스트는 어떻게 바뀌는가? 얼마나 많은 컨텍스트가 있는가?</li>\n<li>자바스크립트의 <strong>프로토타입</strong>이란 무엇인가?</li>\n<li>자바스크립트에서 객체를 생성하는 방법은?</li>\n<li>모듈 패턴은 무엇이며 어떻게 사용하는가?</li>\n<li>팩토리 패턴은 무엇이며 어떻게 사용하는가?</li>\n</ol>\n</li>\n<li>\n<p>함수형 프로그래밍</p>\n<ol>\n<li>불변성(Immutability)란 무엇인가?</li>\n<li>배열의 어떤 메서드가 불변성을 가지고 있는가?</li>\n<li>자바스크립트의 객체를 직접 수정하지 않고 속성을 변경하는 방법은?</li>\n<li>순수 함수(Pure function)란?</li>\n<li>한 개의 함수는 얼마나 많은 행동을 담고 있는게 좋은가?</li>\n<li>함수의 부작용(Side effects)이란?</li>\n<li>순수 함수를 작성할 때 부작용을 다루는 방법은?</li>\n</ol>\n</li>\n<li>\n<p>AJAX</p>\n<ol>\n<li>자바스크립트 프라미스(Promise)란?</li>\n<li>프라미스를 연결하는 방법은?</li>\n<li>프라미스를 사용할 때 에러를 처리하는 방법은?</li>\n<li>Fetch API를 사용하는 방법은?</li>\n<li>CRUD란 무엇인가?</li>\n<li>Github에서 자신의 저장소 목록을 가져오는 API를 어떻게 호출하는가?</li>\n</ol>\n</li>\n<li>\n<p>Best practices</p>\n<ol>\n<li>전역 변수를 피해야 하는 이유는?</li>\n<li>비교 연산자에서 <code>==</code> 대신 <code>===</code> 를 사용해야 하는 이유는?</li>\n<li>간결한 코드를 작성하기 위해 삼항연산자를 어떻게 사용하는가?</li>\n<li>간결한 코드 작성을 돕는 ES6 기능은 무엇이 있는가?</li>\n<li>이벤트 버블링/캡처링이란?</li>\n<li>이벤트 전달(delegate)이란?</li>\n<li>이벤트 리스너를 제거하는 방법은? 언제 제거하는가?</li>\n</ol>\n</li>\n</ol>',frontmatter:{date:"2017/10/06",path:"/posts/javascript-roadmap-questions",title:"Javascript Roadmap Questions",tags:["Javascript"]}},site:{siteMetadata:{siteUrl:"https://emaren84.github.io",disqusShortUrl:"gatsby-blog-1"}}},pathContext:{}}}});
//# sourceMappingURL=path---posts-javascript-roadmap-questions-9717b7ae80bb97914d17.js.map