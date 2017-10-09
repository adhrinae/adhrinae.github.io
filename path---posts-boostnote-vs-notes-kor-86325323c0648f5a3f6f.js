webpackJsonp([0xfa79cd60d42d],{372:function(t,o){t.exports={data:{markdownRemark:{html:'<ul>\n<li>이 포스팅은 Boostnote 팀의 요청에 의하여 번역되었습니다.</li>\n<li>원문을 보시려면 <a href="http://boostnote.hatenablog.com/entry/2017/08/09/130721">이 링크</a>를 클릭해주세요.</li>\n</ul>\n<hr>\n<p>안녕하세요, Boostnote 개발자 <a href="https://twitter.com/kazup_bot">kazup</a> 입니다.</p>\n<p>예상 외로 맥의 순정 메모 어플리케이션에서 Boostnote로 갈아타는 분들이 많아보여서, 이번 기회에 두 앱을 간단히 비교하는 글을 작성해보았습니다.</p>\n<h2 id="what-is-boostnote"><a href="#what-is-boostnote" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What is Boostnote?</h2>\n<p>프로그래머를 위한 오픈 소스 노트입니다. 마크다운을 기본적으로 지원하고 150가지가 넘는 언어의 Syntax Highlighting 및 스니펫을 저장하는 기능도 있습니다.</p>\n<p>개발자를 위한 특화 기능으로 vim 키맵을 사용하거나 마크다운 안에 작성해둔 코드를 원터치로 저장하는 등 개발자들이 즐겁게 사용할만한 기능들이 포함되어 있습니다.</p>\n<p>또한 에버노트에서 데이터를 가져오는 <a href="https://github.com/BoostIO/ever2boost">ever2boost</a> 등의 서드파티 도구들도 여럿 있어서 간단하게 이용하실 수 있습니다.</p>\n<h2 id="what-is-notes"><a href="#what-is-notes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What is Notes?</h2>\n<p>여러분의 친숙한 애플 순정 메모 어플리케이션입니다. Boostnote와 달리 누구나 즐겁게 사용할 수 있게 만들어져 있습니다.</p>\n<p>가볍게 동작하기 때문에 사소한 메모를 남겨두고 싶을 때 편리하게 이용할 수 있습니다.</p>\n<h2 id="the-key-differences-of-boostnote-vs-notes"><a href="#the-key-differences-of-boostnote-vs-notes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The key differences of Boostnote vs Notes</h2>\n<p>가장 큰 차이점은 대상 사용자입니다. Boostnote는 명확하게 개발자를 대상으로 삼고 있지만 Notes는 누구나 부담없이 사용할 수 있게 만들어져 있습니다.</p>\n<p>예를 들어 Notes는 플레인 텍스트(Plain text)만 지원하는 반면, Boostnote는 마크다운과 스니펫을 저장할 수 있습니다.</p>\n<p>또한 커스터마이즈 가능한 부분도 큰 차이가 나는데, Boostnote가 단축키부터 컬러 테마, 앞서 말씀드린 키맵(vim 등)의 변경이 가능한 반면 Notes는 어디까지나 간단하면서 일관된 경험을 제공합니다.</p>\n<h2 id="a-comparison-of-boostnote-vs-notes"><a href="#a-comparison-of-boostnote-vs-notes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>A comparison of Boostnote vs Notes</h2>\n<p>주요 차이점을 정리해보았습니다.</p>\n<table>\n<thead>\n<tr>\n<th></th>\n<th>Boostnote</th>\n<th>Notes</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>노트북 포맷</td>\n<td>Markdown and snippet</td>\n<td>Plain text</td>\n</tr>\n<tr>\n<td>가격</td>\n<td>무료</td>\n<td>무료</td>\n</tr>\n<tr>\n<td>데이터 저장소</td>\n<td>Local, Dropbox, Google Drive 등</td>\n<td>Local, iCloud, Google</td>\n</tr>\n<tr>\n<td>플랫폼</td>\n<td>Windows, Mac, Linux (iOS, Android 출시 예정)</td>\n<td>Mac, iOS</td>\n</tr>\n<tr>\n<td>주요 대상</td>\n<td>Developer</td>\n<td>Everyone</td>\n</tr>\n<tr>\n<td>사용자 정의</td>\n<td>Color, Code Block and Editor theme, Keymap, Hotkey</td>\n<td>X</td>\n</tr>\n<tr>\n<td>노트 공유</td>\n<td><a href="https://10hz.io/">10hz</a></td>\n<td>via iCloud</td>\n</tr>\n</tbody>\n</table>\n<h2 id="wrapping-it-up"><a href="#wrapping-it-up" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Wrapping it up.</h2>\n<p>이상 Boostnote와 Notes를 비교해보았습니다. 둘 다 겉으로 보기에는 아주 단순해보이지만, 그 단순함 속에 숨겨진 기능이나 구조의 차이가 있어서 비교해보니 꽤 재밌었습니다.</p>\n<p>Boostnote는 훨씬 더 개발자지향적이고 무엇보다 <a href="https://github.com/BoostIO/Boostnote">오픈소스입니다</a>! 널리 개발자들에게 사용되어 다양한 수정을 거쳐 기회가 된다면 풀 리퀘스트를 주고받고 싶습니다.</p>\n<p>서두에서 말씀드린대로 Notes에서 갈아타는 분들이 많이 보이고 있으니 주변에 쓸만한 노트 앱을 찾고 계신 개발자분들이 계시다면 Boostnote를 추천해 주세요!</p>\n<p>또한 <a href="https://boostnote.io/team/">팀 단위로 노트로 기획된 10hz</a>도 현재 베타버전으로 배포되고 있으니 한번 살펴봐주시기 바랍니다.</p>\n<hr>\n<p>사실 일본어는 간단하게 말을 주고받는 정도만 할 수 있을 뿐이지, 실제로 잘 읽을 수 있는 수준은 아니라 번역기와 사전의 도움을 받아가며 작업했습니다. 그래도 내용이 어렵지 않아서 오래 걸리지 않았네요.</p>\n<p>노트를 다양한 플랫폼으로 여기저기 작성해보면서 가장 맞는 스타일의 앱을 찾고 있는데 현재로서 Boostnote가 제가 생각하는 개발노트용 앱으로 가장 알맞다고 생각하여 이렇게 소개하는 글을 번역해 보았습니다.</p>\n<p>마크다운 문법만 익숙하시다면 사용하는게 그리 어렵지 않을테니 가벼운 마음으로 한번 시도해보세요 :)</p>',frontmatter:{date:"2017/08/09",path:"/posts/boostnote-vs-notes-kor",title:"[번역] Boostnote vs Notes: Choosing a note-taking Tool",tags:["Markdown","Tools","OSS"]}}},pathContext:{}}}});
//# sourceMappingURL=path---posts-boostnote-vs-notes-kor-86325323c0648f5a3f6f.js.map