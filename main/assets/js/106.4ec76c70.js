(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{680:function(e,t,o){"use strict";o.r(t);var a=o(1),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"⚛️-make-the-cosmos-hub-the-ibc-router-⚛️"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#⚛️-make-the-cosmos-hub-the-ibc-router-⚛️"}},[e._v("#")]),e._v(" ⚛️ Make the Cosmos Hub the IBC Router ⚛️")]),e._v(" "),o("p",[e._v("The following is a selection from the "),o("a",{attrs:{href:"https://v1.cosmos.network/resources/whitepaper",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos Whitepaper"),o("OutboundLink")],1),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"VGhlIENvc21vcyBIdWIgY29ubmVjdHMgdG8gbWFueSBvdGhlciBibG9ja2NoYWlucyAob3Igem9uZXMpIHZpYSBhIG5vdmVsIGludGVyLWJsb2NrY2hhaW4gY29tbXVuaWNhdGlvbiBwcm90b2NvbC4gVGhlIENvc21vcyBIdWIgdHJhY2tzIG51bWVyb3VzIHRva2VuIHR5cGVzIGFuZCBrZWVwcyByZWNvcmQgb2YgdGhlIHRvdGFsIG51bWJlciBvZiB0b2tlbnMgaW4gZWFjaCBjb25uZWN0ZWQgem9uZS4gVG9rZW5zIGNhbiBiZSB0cmFuc2ZlcnJlZCBmcm9tIG9uZSB6b25lIHRvIGFub3RoZXIgc2VjdXJlbHkgYW5kIHF1aWNrbHkgd2l0aG91dCB0aGUgbmVlZCBmb3IgYSBsaXF1aWQgZXhjaGFuZ2UgYmV0d2VlbiB6b25lcywgYmVjYXVzZSBhbGwgaW50ZXItem9uZSBjb2luIHRyYW5zZmVycyBnbyB0aHJvdWdoIHRoZSBDb3Ntb3MgSHViLgoKLi4uCgpBbnkgb2YgdGhlIHpvbmVzIGNhbiB0aGVtc2VsdmVzIGJlIGh1YnMgdG8gZm9ybSBhbiBhY3ljbGljIGdyYXBoLCBidXQgZm9yIHRoZSBzYWtlIG9mIGNsYXJpdHkgd2Ugd2lsbCBvbmx5IGRlc2NyaWJlIHRoZSBzaW1wbGUgY29uZmlndXJhdGlvbiB3aGVyZSB0aGVyZSBpcyBvbmx5IG9uZSBodWIsIGFuZCBtYW55IG5vbi1odWIgem9uZXMuCg=="}}),e._v(" "),o("p",[e._v("The Hub has long been envisioned as a central point in the IBC architecture. In the battle to build and ship IBC this central vision has remained unchanged, but with so much focus on the need to build out other zones with real economies to support this network (the CosmosSDK is the result of this effort), the idea of the hub as an Interchain Router hasn't been discussed in a serious context for quite a while.")]),e._v(" "),o("p",[e._v("This is understandable: Cosmos needed so many other pieces to come together before the Hub had a chance to even start performing this function. Those other zones have been created, they each have products and economies. The bootstrapping era of IBC is well underway.")]),e._v(" "),o("p",[e._v("These new zones joining are noticing a problem: they need to maintain a large amount of infrastructure (archive nodes and relayers for each counterparty chain) to connect with all the chains in the ecosystem, a number that is continuing to increase quickly.")]),e._v(" "),o("p",[e._v("Luckly this problem has been anticipated and IBC architected to accomodate multi-hop transactions. However, a packet forwarding/routing feature was not in the initial IBC release. This proposal aims to fix this for the Hub.")]),e._v(" "),o("p",[e._v("This is a proposal to include a new feature to IBC on the Hub that allows for multi-hop packet routing for ICS20 transfers. By appending an intermediate address, and the port/channel identifiers for the final destination, clients will be able to outline more than one transfer at a time. The following example shows routing from Terra to Osmosis through the Hub:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"Ly8gUGFja2V0IHNlbnQgZnJvbSBUZXJyYSB0byB0aGUgaHViLCBub3RlIHRoZSBmb3JtYXQgb2YgdGhlIGZvcndhcmluZyBpbmZvCi8vIHtpbnRlcm1lZGlhdGVfcmVmdW5kX2FkZHJlc3N9fHtmb3dhcmRfcG9ydH0ve2ZvcndhcmRfY2hhbm5lbH06e2ZpbmFsX2Rlc3RpbmF0aW9uX2FkZHJlc3N9CnsKICAgICZxdW90O2Rlbm9tJnF1b3Q7OiAmcXVvdDt1bHVuYSZxdW90OywKICAgICZxdW90O2Ftb3VudCZxdW90OzogJnF1b3Q7MTAwMDAwMDAwJnF1b3Q7LAogICAgJnF1b3Q7c2VuZGVyJnF1b3Q7OiAmcXVvdDt0ZXJyYTE1Z3dreWVwZmM2eGdjYTV0NXplZnp3eTQydXRzOGwybTRnNDBrNiZxdW90OywKICAgICZxdW90O3JlY2VpdmVyJnF1b3Q7OiAmcXVvdDtjb3Ntb3Mxdnp4a3YzbHhjY250dHI5cnMwMDAyczkzc2d3NzJoN2dodWt1aHN8dHJhbnNmZXIvY2hhbm5lbC0xNDE6b3NtbzF2enhrdjNseGNjbnR0cjlyczAwMDJzOTNzZ3c3Mmg3Z2w4OXZweiZxdW90OywKfQoKLy8gV2hlbiBPblJlY3ZQYWNrZXQgb24gdGhlIGh1YiBpcyBjYWxsZWQsIHRoaXMgcGFja2V0IHdpbGwgYmUgbW9kaWZpZWQgZm9yIGZvd2FyZGluZyB0byB0cmFuc2Zlci9jaGFubmVsLTE0MS4KLy8gTm90aWNlIHRoYXQgYWxsIGZpZWxkcyBleGVjZXB0IGFtb3VudCBhcmUgbW9kaWZpZWQgYXMgZm9sbG93czoKewogICAgJnF1b3Q7ZGVub20mcXVvdDs6ICZxdW90O2liYy9GRUUzRkIxOTY4MkRBQUFCMDJBMDMyOEEyQjg0QTgwRTdEREZFNUJBNDhGN0QyQzhDMzBBQUM2NDlCOERENTE5JnF1b3Q7LAogICAgJnF1b3Q7YW1vdW50JnF1b3Q7OiAmcXVvdDsxMDAwMDAwMDAmcXVvdDssCiAgICAmcXVvdDtzZW5kZXImcXVvdDs6ICZxdW90O2Nvc21vczF2enhrdjNseGNjbnR0cjlyczAwMDJzOTNzZ3c3Mmg3Z2h1a3VocyZxdW90OywKICAgICZxdW90O3JlY2VpdmVyJnF1b3Q7OiAmcXVvdDtvc21vMXZ6eGt2M2x4Y2NudHRyOXJzMDAwMnM5M3NndzcyaDdnbDg5dnB6JnF1b3Q7LAp9Cg=="}}),e._v(" "),o("p",[e._v("Strangelove Ventures has delivered an "),o("a",{attrs:{href:"https://github.com/cosmos/ibc-go/pull/373",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBC Middleware module"),o("OutboundLink")],1),e._v(" that will allow the hub to play the role of IBC Router that was always envisioned for it. Passing of this propsal will begin the era of the Hub offering interchain services to other chains and profiting from those relationships.")]),e._v(" "),o("p",[e._v("To pay the hub validators and stakers, this proposal implements a governance configurable fee (which we propose should be initially set to 0.0 to encourage adoption) that will be taken out of each packet and given to the community pool. The community pool will then periodically trade these fees for ATOM and distribute them to staked holders. The exact distribution method of these fees is left TBD in this proposal as it is not initially required and can be implemented in a future governance proposal. One way to do this would be using the "),o("a",{attrs:{href:"https://docs.cosmos.network/master/architecture/adr-042-group-module.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Groups module"),o("OutboundLink")],1),e._v(", Community spend proposals and the Gravity DEX.")]),e._v(" "),o("p",[e._v("A vote YES on this proposal indicates that this feature should be included in the next hub upgrade. We (as the Hub) believe that time is critical right now and we cannot wait to begin providing this service to other chains. A NO vote indicates that this shouldn't be included in the next upgrade.")])],1)}),[],!1,null,null,null);t.default=n.exports}}]);