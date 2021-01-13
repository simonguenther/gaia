(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{751:function(t,e,a){"use strict";a.r(e);var i=a(0),l=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"build-gaia-deterministically"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-gaia-deterministically"}},[t._v("#")]),t._v(" Build Gaia Deterministically")]),t._v(" "),a("p",[t._v("The "),a("a",{attrs:{href:"https://github.com/tendermint/images/tree/master/rbuilder",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tendermint rbuilder Docker image"),a("OutboundLink")],1),t._v(" provides a deterministic build environment that is used to build Cosmos SDK applications. It provides a way to be reasonably sure that the executables are really built from the git source. It also makes sure that the same, tested dependencies are used and statically built into the executable.")]),t._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),a("p",[t._v("Make sure you have "),a("a",{attrs:{href:"https://docs.docker.com/get-docker/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker installed on your system"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("All the following instructions have been tested on "),a("em",[t._v("Ubuntu 18.04.2 LTS")]),t._v(" with "),a("em",[t._v("docker 20.10.2")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build"}},[t._v("#")]),t._v(" Build")]),t._v(" "),a("p",[t._v("Clone "),a("code",[t._v("gaia")]),t._v(":")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Z2l0IGNsb25lIGh0dHBzOi8vZ2l0aHViLmNvbS9jb3Ntb3MvZ2FpYS5naXQK"}}),t._v(" "),a("p",[t._v("Checkout the commit, branch, or release tag you want to build:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Y2QgZ2FpYS8KZ2l0IGNoZWNrb3V0IHYzLjAuMAo="}}),t._v(" "),a("p",[t._v("The buildsystem supports and produces binaries for the following architectures:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("darwin/amd64")])]),t._v(" "),a("li",[a("strong",[t._v("linux/amd64")])]),t._v(" "),a("li",[a("strong",[t._v("linux/arm64")])]),t._v(" "),a("li",[a("strong",[t._v("windows/amd64")])])]),t._v(" "),a("p",[t._v("Run the following command to launch a build for all supported architectures:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"bWFrZSBkaXN0Y2xlYW4gYnVpbGQtcmVwcm9kdWNpYmxlCg=="}}),t._v(" "),a("p",[t._v("The build system generates both the binaries and deterministic build report in the "),a("code",[t._v("artifacts")]),t._v(" directory.\nThe "),a("code",[t._v("artifacts/build_report")]),t._v(" file contains the list of the build artifacts and their respective checksums, and can be used to verify\nbuild sanity. An example of its contents follows:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"QXBwOiBnYWlhZApWZXJzaW9uOiAyLjAuMTItMjAtZ2ZjMDE3MWIKQ29tbWl0OiBmYzAxNzFiMDA2NjJmYjQzZGYxMjk1NTM3OGVkOGIwYzVkYjg1MjI5CkZpbGVzOgogYmVlMDRmMDAzYWRjYzJhMTg0OGJjYzRlYzZkYzY3MzEgIGdhaWFkLTIuMC4xMi0yMC1nZmMwMTcxYi1kYXJ3aW4tYW1kNjQKIGZmMWVkY2Q0NGY2ZmY3YjM3NDZkMjExZWNlYjhmM2Y1ICBnYWlhZC0yLjAuMTItMjAtZ2ZjMDE3MWItbGludXgtYW1kNjQKIDhkNjEwOWRjMWUxYzU5YjJmZmE5NjYwYTQ5YmI1NGUxICBnYWlhZC0yLjAuMTItMjAtZ2ZjMDE3MWItbGludXgtYXJtNjQKIDMxODNlZWMwYWU3MWRhOWQ4YjY4ZTBiYTI5ODZiODg1ICBnYWlhZC0yLjAuMTItMjAtZ2ZjMDE3MWItd2luZG93cy1hbWQ2NC5leGUKIDhmMjZkYjBhZGQ5N2EzYWMxZTAzOGIwYThkYzNmZmIzICBnYWlhZC0yLjAuMTItMjAtZ2ZjMDE3MWIudGFyLmd6CkNoZWNrc3Vtcy1TaGEyNTY6CiBjMDhkNmJmMDNjYTcxMjU0YjI0ZThlZGE1NGRmY2JmODJlZjY3MTg5MWIyODNhYzE5NGI2NjMzMjkyNzkyMzI0ICBnYWlhZC0yLjAuMTItMjAtZ2ZjMDE3MWItZGFyd2luLWFtZDY0CiA4Yzg1YjVhYjJmM2M0ZDUwYTUzZDk3NDQ4ZDZlYWIyOGEzYjNlOWRhMWI5MjYxNmNiNDc4NDE4YmM4MDk2ZjVhICBnYWlhZC0yLjAuMTItMjAtZ2ZjMDE3MWItbGludXgtYW1kNjQKIDY2NjA2YzVjYzgyNzk0YTc3MTNkNTAzNjRjZTlmMGIzZTU4Mjc3NGI4ZmM4ZmI1ODUxZGI5MzNmOThmNjYxYzIgIGdhaWFkLTIuMC4xMi0yMC1nZmMwMTcxYi1saW51eC1hcm02NAogMTYzMzk2OGRiZDk4N2YxYTFlMmY5MDgyMGVjNzhhMzk5ODRlZWFlMWZiOTdlMDI0MGQxZjA0OTA5NzYxYmRiNSAgZ2FpYWQtMi4wLjEyLTIwLWdmYzAxNzFiLXdpbmRvd3MtYW1kNjQuZXhlCiA4YjdlMzQ0NzQxODVkODNjNjMzM2UxZjA4ZjRjMzU0NTllOTVlYzA2YmI4YTI0NmZkMTRiYWI1OTU0MjdhZTlkICBnYWlhZC0yLjAuMTItMjAtZ2ZjMDE3MWIudGFyLmd6Cg=="}})],1)}),[],!1,null,null,null);e.default=l.exports}}]);