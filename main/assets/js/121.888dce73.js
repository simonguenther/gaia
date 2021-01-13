(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{701:function(t,a,s){"use strict";s.r(a);var v=s(0),o=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"gaia-설치하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gaia-설치하기"}},[t._v("#")]),t._v(" Gaia 설치하기")]),t._v(" "),s("p",[t._v("이 가이드는 "),s("code",[t._v("gaiad")]),t._v("와 "),s("code",[t._v("gaiad")]),t._v("를 엔트리포인트를 시스템에 설치하는 방법을 설명합니다. "),s("code",[t._v("gaiad")]),t._v("와 "),s("code",[t._v("gaiad")]),t._v("가 설치된 서버를 통해 "),s("RouterLink",{attrs:{to:"/translations/kr/join-testnet.html#run-a-full-node"}},[t._v("풀노드")]),t._v(" 또는 "),s("RouterLink",{attrs:{to:"/translations/kr/validators/validator-setup.html"}},[t._v("밸리데이터로")]),t._v("써 최신 테스트넷에 참가하실 수 있습니다.")],1),t._v(" "),s("h3",{attrs:{id:"go-설치하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#go-설치하기"}},[t._v("#")]),t._v(" Go 설치하기")]),t._v(" "),s("p",[t._v("공식 "),s("a",{attrs:{href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"}},[t._v("Go 문서"),s("OutboundLink")],1),t._v("를 따라서 "),s("code",[t._v("go")]),t._v("를 설치하십시오. 그리고 "),s("code",[t._v("$PATH")]),t._v("의 환경을 꼭 세팅하세요. 예시:")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bWtkaXIgLXAgJEhPTUUvZ28vYmluCmVjaG8gJnF1b3Q7ZXhwb3J0IFBBVEg9JFBBVEg6JChnbyBlbnYgR09QQVRIKS9iaW4mcXVvdDsgJmd0OyZndDsgfi8uYmFzaF9wcm9maWxlCnNvdXJjZSB+Ly5iYXNoX3Byb2ZpbGUK"}}),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[t._v("코스모스 SDK를 운영하기 위해서는 "),s("strong",[t._v("Go 1.12+")]),t._v(" 이상 버전이 필요합니다.")])]),t._v(" "),s("h3",{attrs:{id:"바이너리-설치하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#바이너리-설치하기"}},[t._v("#")]),t._v(" 바이너리 설치하기")]),t._v(" "),s("p",[t._v("다음은 최신 Gaia 버전을 설치하는 것입니다. 필요에 따라 "),s("code",[t._v("git checkout")]),t._v("을 통해 올바른 "),s("a",{attrs:{href:"https://github.com/cosmos/gaia/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("릴리즈 버전"),s("OutboundLink")],1),t._v("이 설치되어있는지 확인하세요.")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2l0IGNsb25lIC1iICZsdDtsYXRlc3QtcmVsZWFzZS10YWcmZ3Q7IGh0dHBzOi8vZ2l0aHViLmNvbS9jb3Ntb3MvZ2FpYQpjZCBnYWlhICZhbXA7JmFtcDsgbWFrZSBpbnN0YWxsCg=="}}),t._v(" "),s("p",[t._v("만약 다음과 같은 에러 메시지로 명령어가 실패하는 경우, 이미 "),s("code",[t._v("LDFLAGS")]),t._v("를 설정하셨을 수 있습니다.")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"IyBnaXRodWIuY29tL2Nvc21vcy9nYWlhL2NtZC9nYWlhZApmbGFnIHByb3ZpZGVkIGJ1dCBub3QgZGVmaW5lZDogLUwKdXNhZ2U6IGxpbmsgW29wdGlvbnNdIG1haW4ubwouLi4KbWFrZTogKioqIFtpbnN0YWxsXSBFcnJvciAyCg=="}}),t._v(" "),s("p",[t._v("해당 환경변수를 언세팅 하신 후 다시 시도해보세요.")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"TERGTEFHUz0mcXVvdDsmcXVvdDsgbWFrZSBpbnN0YWxsCg=="}}),t._v(" "),s("blockquote",[s("p",[s("em",[t._v("참고")]),t._v(": 여기에서 문제가 발생한다면, Go의 최신 스테이블 버전이 설치되어있는지 확인하십시오.")])]),t._v(" "),s("p",[t._v("위 절차를 따라하시면 "),s("code",[t._v("gaiad")]),t._v("와 "),s("code",[t._v("gaiad")]),t._v(" 바이너리가 설치될 것입니다. 설치가 잘 되어있는지 확인하십시오:")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBnYWlhZCB2ZXJzaW9uIC0tbG9uZwokIGdhaWFkIHZlcnNpb24gLS1sb25nCg=="}}),t._v(" "),s("p",[s("code",[t._v("gaiad")]),t._v(" 명령어는 다음과 비슷한 아웃풋을 내보냅니다:")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bmFtZTogZ2FpYQpzZXJ2ZXJfbmFtZTogZ2FpYWQKY2xpZW50X25hbWU6IGdhaWFkCnZlcnNpb246IDEuMC4wCmNvbW1pdDogODllNjMxNmEyNzM0MzMwNGQzMzJhYWRmZTI4Njk4NDdiZjUyMzMxYwpidWlsZF90YWdzOiBuZXRnbyxsZWRnZXIKZ286IGdvIHZlcnNpb24gZ28xLjEyLjUgZGFyd2luL2FtZDY0Cg=="}}),t._v(" "),s("h3",{attrs:{id:"빌드-태그"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#빌드-태그"}},[t._v("#")]),t._v(" 빌드 태그")]),t._v(" "),s("p",[t._v("빌드 태그는 해당 바이너리에서 활성화된 특별 기능을 표기합니다.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("빌드 태그")]),t._v(" "),s("th",[t._v("설명")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("netgo")]),t._v(" "),s("td",[t._v("Name resolution이 오직 Go 코드만을 사용합니다")])]),t._v(" "),s("tr",[s("td",[t._v("ledger")]),t._v(" "),s("td",[t._v("렛저 기기(하드웨어 지갑)이 지원됩니다")])])])]),t._v(" "),s("h3",{attrs:{id:"snap을-사용해-바이너리-설치하기-리눅스에만-해당"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#snap을-사용해-바이너리-설치하기-리눅스에만-해당"}},[t._v("#")]),t._v(" snap을 사용해 바이너리 설치하기 (리눅스에만 해당)")]),t._v(" "),s("p",[s("strong",[t._v("재현가능한 바이너리 시스템이 완벽하게 구현되기 전까지 snap 바이너리를 실제 노드 운용에 사용하지 않으시는 것을 추천드립니다.")])]),t._v(" "),s("h2",{attrs:{id:"개발자-워크플로우"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#개발자-워크플로우"}},[t._v("#")]),t._v(" 개발자 워크플로우")]),t._v(" "),s("p",[t._v("코스모스 SDK 또는 텐더민트의 변경 사항을 테스팅하기 위해서는 "),s("code",[t._v("replace")]),t._v(" 항목이 "),s("code",[t._v("go.mod")]),t._v("에 추가하여 올바른 import path를 제공해야합니다.")]),t._v(" "),s("ul",[s("li",[t._v("변경 사항 적용")]),t._v(" "),s("li",[s("code",[t._v("go.mod")]),t._v("에 "),s("code",[t._v("replace github.com/cosmos/cosmos-sdk => /path/to/clone/cosmos-sdk")]),t._v(" 추가")]),t._v(" "),s("li",[s("code",[t._v("make clean install")]),t._v(" 또는 "),s("code",[t._v("make clean build")]),t._v(" 실행")]),t._v(" "),s("li",[t._v("변경 사항 테스트")])]),t._v(" "),s("h3",{attrs:{id:"다음-절차"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#다음-절차"}},[t._v("#")]),t._v(" 다음 절차")]),t._v(" "),s("p",[t._v("축하합니다! 이제 "),s("RouterLink",{attrs:{to:"/translations/kr/join-mainnet.html"}},[t._v("메인넷")]),t._v("에 참가하거나"),s("RouterLink",{attrs:{to:"/translations/kr/join-testnet.html"}},[t._v("퍼블릭 테스트넷")]),t._v("에 참가하시거나 "),s("RouterLink",{attrs:{to:"/translations/kr/deploy-testnet.html"}},[t._v("자체 테스트넷")]),t._v("을 운영하실 수 있습니다.")],1)],1)}),[],!1,null,null,null);a.default=o.exports}}]);