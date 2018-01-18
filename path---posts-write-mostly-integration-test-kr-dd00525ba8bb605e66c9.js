webpackJsonp([0xd4f298e5cc64],{426:function(t,n){t.exports={data:{markdownRemark:{html:'<h2 id="들어가며번역-서문"><a href="#%EB%93%A4%EC%96%B4%EA%B0%80%EB%A9%B0%EB%B2%88%EC%97%AD-%EC%84%9C%EB%AC%B8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>들어가며(번역 서문)</h2>\n<p>“더 좋은 테스트를 위한 번역 시리즈” 두 번째입니다. 테스트를 작성하는게 좋다는 공감대는 얻었을 지 몰라도 막상 코드 에디터 앞에서는 대략 정신이 멍해지기 일쑤입니다. 전부 다 테스트를 하자니 너무 광범위하고, 함수 단위로 유닛 테스트만 작성하자니 너무 세세해서 실제 제대로 애플리케이션이 동작하는지 파악하기도 어렵거니와 노력 대비 별로 쓸모가 없어보이기도 합니다.</p>\n<p>그 고민을 조금이나마 덜어드리고자 좋은 조언을 가져와서 번역해 보았습니다.</p>\n<p><a href="https://blog.kentcdodds.com/write-tests-not-too-many-mostly-integration-5e8c7fff591c">원문은 여기서 보실 수 있습니다.</a></p>\n<hr>\n<p>얼마 전에 <a href="https://medium.com/@rauchg">Guillermo Rauch</a>(<a href="https://socket.io">Socket.io</a>의 창시자이자 <a href="https://zeit.co">Zeit.co</a>의 설립자입니다)가 위 제목으로 <a href="https://twitter.com/rauchg/status/807626710350839808">심오한 트윗</a>을 하나 작성했습니다. </p>\n<p><img src="https://cl.ly/1w0Q053W1B1O/write-integration-test-2.png"></p>\n<blockquote>\n<p><strong>테스트를 작성하라. 너무 많이는 말고. 통합 테스트를 많이 써라.</strong></p>\n</blockquote>\n<p>짧지만 긴 내용입니다. 더 자세히 들어가보죠.</p>\n<blockquote>\n<p><strong>테스트를 작성하라.</strong></p>\n</blockquote>\n<p>네, 여러분은 대부분의 프로젝트에 자동화된 테스트를 작성해야 합니다. 특히 자신의 시간을 소중히 여긴다면요. 새벽 두 시에 버그 때문에 불려나가는 것 보다 로컬에서 버그를 잡아내는게 훨씬 낫습니다. <strong>저는 테스트를 작성하는데 시간을 들일 때 오히려 시간을 절약한다고 느낍니다.</strong> 테스트를 작성하다 보면 제가 실제로 만들고자 하는 것 보다 더 오래 걸릴 수도 있고, 그렇지 않을 수도 있지만, 저는(그리고 다른 사람들도) 거의 확실히 유지보수 하는데 드는 시간을 절약하고 있습니다.</p>\n<p>테스트를 작성할 때는 이 테스트가 프로젝트의 버그를 얼마나 줄여줄 자신이 있는지 신경쓰셔야 합니다. <a href="https://flow.org/">Flow</a>, <a href="https://eslint.org/">ESLint</a> 같은 정적 타이핑이나 린트는 의미있는 수준의 자신감을 가져다 줍니다. 혹시 써보지 않으셨다면 반드시 살펴보시길 권합니다. 하지만 <strong>아무리 강한 타입을 적용한 프로그래밍 언어라도 테스트가 있어야 합니다.</strong> 타입과 린트는 여러분의 비지니스 로직에 버그가 없도록 만들어주지 않습니다. 그러니 좋은 테스트를 작성해서 (버그를 줄인다는)자신감을 크게 끌어올릴 필요가 있습니다.</p>\n<blockquote>\n<p><strong>너무 많이는 말고.</strong></p>\n</blockquote>\n<p>저는 애플리케이션에 100%의 코드 커버리지를 달성하려는 매니저나 팀이 있다고 들었습니다. 이는 굉장히 안 좋은 생각입니다. 커버리지가 70%(제 추측입니다.. 과학적인 증거는 없어요)를 넘어가게 되면서부터 여러분이 테스트로 얻는 이익이 점감하게 되는 문제가 있습니다. 왜 그럴까요? 음, 언제나 100%를 달성하기 위해 힘을 쏟다 보면 막상 테스트 할 필요 없는 것을 테스트하는데 시간을 소모하게 됩니다. 실제 신경써야 할 로직이 없는 것들 말이죠(ESLint나 Flow로도 충분히 잡아낼 수 있는 모든 버그들). <em>이런 규모의 테스트를 유지보수하는데 엄청난 시간이 들고 여러분의 팀을 힘들게 만들 겁니다.</em></p>\n<p>그리고 테스트 환경에서 재현하기 어려운 한 줄의 코드를 위해 테스트를 작성할 때도 있습니다. 이런 경우는 <em>진짜로</em> 피하고 싶을겁니다. 왜냐면 이 테스트는 애플리케이션이 제대로 작동한다는 자신감을 별로 주지도 못하고, 리팩터링 할 때 속도를 늦출 뿐이기 때문입니다. <strong>코드를 리팩터링 할 때 테스트를 변경해야 하는 경우는 거의 없습니다.</strong></p>\n<p>제가 작성한 대부분의 오픈 소스 프로젝트는 거의 100%의 코드 커버리지를 가지고 있다는 말씀을 드려야겠군요. 대부분의 프로젝트들은 작은 라이브러리나 툴이며, 여러 다른 상황(코드가 깨진다면 심각한 상황으로 이어질 수 있는 프로젝트들이 사용하는 상황)에서 재사용하기 쉽도록 작성되었습니다. 그래서 어찌저찌 상대적으로 100%의 커버리지를 얻을 수 있었습니다.</p>\n<blockquote>\n<p><strong>통합 테스트를 많이 써라.</strong></p>\n</blockquote>\n<p>테스트의 종류는 아주 다양합니다(제가 Fluent Conf에서 <a href="https://youtu.be/Da9wfQ0frGA">“바퀴를 테스트하면서 배울 수 있는 것들”</a>이라는 제목으로 5분짜리 발표를 했습니다). 각각의 테스트는 장단점이 있습니다. 보통 자동화된 테스트를 이야기 할 때 많이 거론되는 테스트는 단위(Unit) 테스트, 통합(Integration) 테스트, E2E(End to End) 테스트입니다.</p>\n<p>여기 제가 <a href="https://frontendmasters.com/courses/testing-javascript/">“자바스크립트 애플리케이션 테스트하기”</a> 라는 Frontend Masters 워크샵에서 선보인 <a href="http://slides.com/kentcdodds/testing-workshop#/4/8">슬라이드</a>를 잠시 보시죠.</p>\n<p><img src="https://cl.ly/3x273a0A343P/write-integration-test-1.png"></p>\n<p>테스팅 피라미드는 <a href="https://martinfowler.com/bliki/TestPyramid.html">마틴 파울러의 블로그</a>와 <a href="https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html">구글 테스팅 블로그</a>에서 얻은 개념을 한데 합친 것입니다.</p>\n<p>앞서 말씀드린대로 이 피라미드는 바닥부터 꼭대기까지 단위 테스트, 통합 테스트, E2E 테스트로 이루어져 있습니다. 피라미드의 위로 올라갈수록 테스트를 실행하고 작성하는데 더 많은 시간이 들고, 실행하고 유지보수하는데 비용(시간과 자원 측면에서)이 많이 듭니다. 그림만 보면 유닛 테스트를 작성하는데 시간을 더 투자해야 하는 것 처럼 보입니다.</p>\n<p>미처 언급되지 않은 점이 있는데, 피라미드 위로 올라갈 수록 각 테스트의 신뢰성이 증가한다는 겁니다. 여러분이 생각한 것 보다 훨씬 큰 이득을 얻을 수 있습니다(You get more bang for your buck). 따라서 E2E 테스트가 단위 테스트보다 느리고 비용이 많이 들지라도, 애플리케이션이 의도대로 동작한다는 자신감은 더 크게 제공합니다.</p>\n<p><a href="https://twitter.com/kentcdodds/status/628658648001048577">제 트윗 중 가장 많이 리트윗된 트윗</a>이 단위 테스트의 주요 문제를 다루고 있습니다.</p>\n<blockquote>\n<p>아직도 이 사진을 좋아해요. 유닛 테스트만 좋아하는 사람들은 이렇게 “작동하는 것 같다” 라고 말하죠.  </p>\n</blockquote>\n<p><img src="https://cl.ly/093u1O2j0k1Y/write-integration-test-3.gif"></p>\n<p>이 사람이 방에서 달릴 수 있고, 팔굽혀펴기를 하고, 독서를 할 수 있는지 확인하기 위해 단위 테스트를 작성했지만, 이 사람은 자신의 다양한 신체 부위를 아주 효율적으로 사용하지 못하는데다 통합하지 않고 있습니다. 만약 버튼 컴포넌트가 <code>onClick</code> 핸들러를 호출할 때 핸들러가 올바른 데이터를 제대로 요청하지 않는다면, 핸들러의 호출이 잘 되는지 확인하는 일은 그닥 중요한게 아닙니다! 각각 분리 된 부분이 자신의 역할을 제대로 수행하는지 확인하기 위해 단위 테스트를 작성하는 것은 그리 나쁜 일은 아닙니다. *분리 된 부분이 <strong>함께</strong> 제 역할을 수행하는지 확인하지 않는다면 아무 소용 없습니다.*</p>\n<p><strong>통합 테스트는 자신감을 심어주는 역할 대비 속도/비용을 부담하는 정도를 아주 균형있게 가지고 있습니다.</strong> 그래서 여러분이 <em>대부분</em>(혹시 몰라 말씀드리지만 전부는 아닙니다)의 시간을 통합 테스트에 투자하라는 조언을 드리는 겁니다.</p>\n<hr>\n<p><strong>통합 테스트를 더 많이 작성하는 방법</strong></p>\n<p>통합 테스트와 단위 테스트 사이의 경계는 약간 모호합니다. 어느 쪽이든 더 많은 통합 테스트를 작성하기 위해 가장 도움되는 것이 무엇이냐 물으신다면 <strong>일단 너무 많은 것을 모킹(mocking)하지 않기를 권합니다.</strong> <em>무언가를 모킹할 때, 테스트하고자 하는 것과 모킹된 것 사이의 통합테스트 신뢰도는 떨어지게 됩니다.</em> 때로는 이 방법이 도움 되지 않을 수 있습니다(<a href="https://www.youtube.com/watch?v=EaxDl5NPuCA&#x26;feature=youtu.be">반대하는 사람도 있지만요</a>). 실제로 매 테스트마다 이메일을 발송하거나 신용카드 결제를 할 필요는 없지만, 대부분의 경우 모킹을 피하면 테스팅을 더 잘 하게 되리라 생각합니다.</p>\n<p><strong>만약 리액트로 개발을 하고 계시다면, 얕은 랜더링(<a href="http://airbnb.io/enzyme/docs/api/shallow.html">shallow rendering</a>)도 포함됩니다.</strong> 저는 오랜 시간동안 얕은 랜더링은 세부 구현을 테스트하는 것이나 마찬가지라고 이야기해왔습니다. 이 부분을 <a href="https://www.briefs.fm/3-minutes-with-kent/49">3분 짜리 팟캐스트</a>에서(그리고 리액트 테스팅에 대한 다른 팁도 포함해서) 다루고 있습니다.</p>\n<p>도움이 되셨길 바라며 모두 행운을 빕니다! 👍</p>',frontmatter:{date:"2018/01/15",path:"/posts/write-mostly-integration-test-kr",title:"[번역] 테스트를 작성하라. 너무 많이는 말고. 통합 테스트를 많이 써라.",tags:["Translation","Testing","TDD"]}},site:{siteMetadata:{siteUrl:"https://emaren84.github.io",disqusShortUrl:"gatsby-blog-1"}}},pathContext:{}}}});
//# sourceMappingURL=path---posts-write-mostly-integration-test-kr-dd00525ba8bb605e66c9.js.map