(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{642:function(e,a,t){"use strict";t.r(a);var r=t(1),o=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"cosmos-hub-4-vega-upgrade-instructions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cosmos-hub-4-vega-upgrade-instructions"}},[e._v("#")]),e._v(" Cosmos Hub 4, Vega Upgrade, Instructions")]),e._v(" "),t("p",[e._v("This document describes the steps for validator and full node operators for the successful execution of the "),t("a",{attrs:{href:"https://github.com/cosmos/gaia/blob/main/docs/roadmap/cosmos-hub-roadmap-2.0.md#vega-upgrade-expected-q4-2021",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vega Upgrade"),t("OutboundLink")],1),e._v(", which contains the following main new features:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/v0.44.3/x/authz/spec",target:"_blank",rel:"noopener noreferrer"}},[e._v("authz"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/v0.44.3/x/feegrant/spec",target:"_blank",rel:"noopener noreferrer"}},[e._v("feegrant modules"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/strangelove-ventures/packet-forward-middleware",target:"_blank",rel:"noopener noreferrer"}},[e._v("packet-forward-middleware"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/cosmos/ibc-go",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBC"),t("OutboundLink")],1),e._v(" as a standalone module")])]),e._v(" "),t("p",[e._v("TOC:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#on-chain-governance-proposal-attains-consensus"}},[e._v("On-chain governance proposal attains consensus")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#upgrade-will-take-place-december-14-2021"}},[e._v("Upgrade will take place December 14, 2021")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#chain-id-will-remain-the-same"}},[e._v("Chain-id will remain the same")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#preparing-for-the-upgrade"}},[e._v("Preparing for the upgrade")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#backups"}},[e._v("Backups")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#testing"}},[e._v("Testing")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#current-runtime-cosmoshub-4-pre-vega-upgrade-is-running-gaia-v500"}},[e._v("Current runtime, cosmoshub-4 (pre-Vega upgrade) is running Gaia v5.0.0")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#target-runtime-cosmoshub-4-post-vega-upgrade-will-run-gaia-v600"}},[e._v("Target runtime, cosmoshub-4 (post-Vega upgrade) will run Gaia v6.0.0")])])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#vega-upgrade-steps"}},[e._v("Vega upgrade steps")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#method-i-manual-upgrade"}},[e._v("Method I: manual upgrade")])]),e._v(" "),t("li",[t("ul",[t("li",[t("a",{attrs:{href:"#method-ii-upgrade-using-cosmovisor-by-manually-preparing-the-gaia-v600-binary"}},[e._v("Method II: upgrade using Cosmovisor by manually preparing the Gaia v6.0.0 binary")])])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#method-iii-upgrade-using-cosmovisor-by-auto-downloading-the-gaia-v600-binary-not-recommended"}},[e._v("Method III: upgrade using Cosmovisor by auto-downloading the Gaia v6.0.0 binary (not recommended!)")])])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#upgrade-duration"}},[e._v("Upgrade duration")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#rollback-plan"}},[e._v("Rollback plan")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#communications"}},[e._v("Communications")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#risks"}},[e._v("Risks")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#reference"}},[e._v("Reference")])])]),e._v(" "),t("h2",{attrs:{id:"on-chain-governance-proposal-attains-consensus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#on-chain-governance-proposal-attains-consensus"}},[e._v("#")]),e._v(" On-chain governance proposal attains consensus")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.mintscan.io/cosmos/proposals/59",target:"_blank",rel:"noopener noreferrer"}},[e._v("Proposal #59"),t("OutboundLink")],1),e._v(" is the reference on-chain governance proposal for this upgrade, which has passed with overwhleming community support. Neither core developers nor core funding entities control the governance, and this governance proposal has passed in a "),t("em",[e._v("fully decentralized")]),e._v(" way.")]),e._v(" "),t("h2",{attrs:{id:"upgrade-will-take-place-december-14-2021"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-will-take-place-december-14-2021"}},[e._v("#")]),e._v(" Upgrade will take place December 14, 2021")]),e._v(" "),t("p",[e._v("The upgrade will take place at a block height of "),t("code",[e._v("8695000")]),e._v(". At current block times (around 7s/block), this block height corresponds approximately to "),t("code",[e._v("Tuesday, 14-Dec-21 6:00:00 UTC")]),e._v(". This date/time is approximate as blocks are not generated at a constant interval.")]),e._v(" "),t("h2",{attrs:{id:"chain-id-will-remain-the-same"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chain-id-will-remain-the-same"}},[e._v("#")]),e._v(" Chain-id will remain the same")]),e._v(" "),t("p",[e._v("The chain-id of the network will remain the same, "),t("code",[e._v("cosmoshub-4")]),e._v(". This is because an in-place migration of state will take place, i.e., this upgrade does not export any state.")]),e._v(" "),t("h2",{attrs:{id:"preparing-for-the-upgrade"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preparing-for-the-upgrade"}},[e._v("#")]),e._v(" Preparing for the upgrade")]),e._v(" "),t("h3",{attrs:{id:"backups"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backups"}},[e._v("#")]),e._v(" Backups")]),e._v(" "),t("p",[e._v("Prior to the upgrade, validators are encouraged to take a full data snapshot. Snapshotting depends heavily on infrastructure, but generally this can be done by backing up the "),t("code",[e._v(".gaia")]),e._v(" directory.\nIf you use Cosmovisor to upgrade, by default, Cosmovisor will backup your data upon upgrade. See below "),t("a",{attrs:{href:"#method-ii-upgrade-using-cosmovisor-by-manually-preparing-the-gaia-v600-binary"}},[e._v("upgrade by cosmovisor")]),e._v(" section.")]),e._v(" "),t("p",[e._v("It is critically important for validator operators to back-up the "),t("code",[e._v(".gaia/data/priv_validator_state.json")]),e._v(" file after stopping the gaiad process. This file is updated every block as your validator participates in consensus rounds. It is a critical file needed to prevent double-signing, in case the upgrade fails and the previous chain needs to be restarted.")]),e._v(" "),t("h3",{attrs:{id:"testing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[e._v("#")]),e._v(" Testing")]),e._v(" "),t("p",[e._v("For those validator and full node operators that are interested in ensuring preparedness for the impending upgrade, you can join in our "),t("a",{attrs:{href:"https://github.com/cosmos/vega-test/tree/master/public-testnet",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vega public-testnet"),t("OutboundLink")],1),e._v(" or run a "),t("a",{attrs:{href:"https://github.com/cosmos/vega-test/tree/master/local-testnet",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vega local testnet"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"current-runtime-cosmoshub-4-pre-vega-upgrade-is-running-gaia-v5-0-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#current-runtime-cosmoshub-4-pre-vega-upgrade-is-running-gaia-v5-0-0"}},[e._v("#")]),e._v(" Current runtime, cosmoshub-4 (pre-Vega upgrade) is running Gaia v5.0.0")]),e._v(" "),t("p",[e._v("The Cosmos Hub mainnet network, "),t("code",[e._v("cosmoshub-4")]),e._v(", is currently running "),t("a",{attrs:{href:"https://github.com/cosmos/gaia/releases/tag/v5.0.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gaia v5.0.0"),t("OutboundLink")],1),e._v(". We anticipate that operators who are running on v5.0.x, will be able to upgrade successfully; however, this is untested and it is up to operators to ensure that their systems are capable of performing the upgrade.")]),e._v(" "),t("h3",{attrs:{id:"target-runtime-cosmoshub-4-post-vega-upgrade-will-run-gaia-v6-0-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#target-runtime-cosmoshub-4-post-vega-upgrade-will-run-gaia-v6-0-0"}},[e._v("#")]),e._v(" Target runtime, cosmoshub-4 (post-Vega upgrade) will run Gaia v6.0.0")]),e._v(" "),t("p",[e._v("The Comsos Hub mainnet network, "),t("code",[e._v("cosmoshub-4")]),e._v(", will run "),t("a",{attrs:{href:"https://github.com/cosmos/gaia/releases/tag/v6.0.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gaia v6.0.0"),t("OutboundLink")],1),e._v(". Operators "),t("em",[e._v("MUST")]),e._v(" use this version post-upgrade to remain connected to the network.")]),e._v(" "),t("h2",{attrs:{id:"vega-upgrade-steps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vega-upgrade-steps"}},[e._v("#")]),e._v(" Vega upgrade steps")]),e._v(" "),t("p",[e._v("There are 2 major ways to upgrade a node:")]),e._v(" "),t("ul",[t("li",[e._v("Manual upgrade")]),e._v(" "),t("li",[e._v("Upgrade using "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/master/cosmovisor",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmovisor"),t("OutboundLink")],1),e._v(" "),t("ul",[t("li",[e._v("Either by manually preparing the new binary")]),e._v(" "),t("li",[e._v("Or by using the auto-download functionality (this is not yet recommended)")])])])]),e._v(" "),t("p",[e._v("If you prefer to use Cosmovisor to upgrade, some preparation work is needed before upgrade.")]),e._v(" "),t("h3",{attrs:{id:"method-i-manual-upgrade"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#method-i-manual-upgrade"}},[e._v("#")]),e._v(" Method I: manual upgrade")]),e._v(" "),t("p",[e._v("Run Gaia v5.0.x till upgrade height, the node will panic:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"RVJSIFVQR1JBREUgJnF1b3Q7VmVnYSZxdW90OyBORUVERUQgYXQgaGVpZ2h0OiA4Njk1MDAwCgpwYW5pYzogVVBHUkFERSAmcXVvdDtWZWdhJnF1b3Q7IE5FRURFRCBhdCBoZWlnaHQ6IDg2OTUwMDAK"}}),e._v(" "),t("p",[e._v("Stop the node, and install Gaia v6.0.0 and re-start by "),t("code",[e._v("gaiad start")]),e._v(".")]),e._v(" "),t("p",[e._v("It may take 20 min to a few hours until validators with a total sum voting power > 2/3 to complete their nodes upgrades. After that, the chain can continue to produce blocks.")]),e._v(" "),t("h3",{attrs:{id:"method-ii-upgrade-using-cosmovisor-by-manually-preparing-the-gaia-v6-0-0-binary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#method-ii-upgrade-using-cosmovisor-by-manually-preparing-the-gaia-v6-0-0-binary"}},[e._v("#")]),e._v(" Method II: upgrade using Cosmovisor by manually preparing the Gaia v6.0.0 binary")]),e._v(" "),t("h4",{attrs:{id:"preparation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preparation"}},[e._v("#")]),e._v(" Preparation")]),e._v(" "),t("p",[e._v("Install the latest version of Cosmovisor:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"Z28gaW5zdGFsbCBnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2Nvc21vdmlzb3IvY21kL2Nvc21vdmlzb3JAbGF0ZXN0Cg=="}}),e._v(" "),t("p",[e._v("Create a cosmovisor folder:")]),e._v(" "),t("p",[e._v("create a Cosmovisor folder inside "),t("code",[e._v("$GAIA_HOME")]),e._v(" and move Gaia v5.0.0 into "),t("code",[e._v("$GAIA_HOME/cosmovisor/genesis/bin")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"bWtkaXIgLXAgJEdBSUFfSE9NRS9jb3Ntb3Zpc29yL2dlbmVzaXMvYmluCmNwICQod2hpY2ggZ2FpYWQpICRHQUlBX0hPTUUvY29zbW92aXNvci9nZW5lc2lzL2Jpbgo="}}),e._v(" "),t("p",[e._v("build Gaia v6.0.0, and move gaiad v6.0.0 to "),t("code",[e._v("$GAIA_HOME/cosmovisor/upgrades/Vega/bin")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"bWtkaXIgLXAgICRHQUlBX0hPTUUvY29zbW92aXNvci91cGdyYWRlcy9WZWdhL2JpbgpjcCAkKHdoaWNoIGdhaWFkKSAkR0FJQV9IT01FL2Nvc21vdmlzb3IvdXBncmFkZXMvVmVnYS9iaW4K"}}),e._v(" "),t("p",[e._v("Then you should get the following structure:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"LgrilJzilIDilIAgY3VycmVudCAtJmd0OyBnZW5lc2lzIG9yIHVwZ3JhZGVzLyZsdDtuYW1lJmd0OwrilJzilIDilIAgZ2VuZXNpcwrilIIgICDilJTilIDilIAgYmluCuKUgiAgICAgICDilJTilIDilIAgZ2FpYWR2NS4wLjAK4pSU4pSA4pSAIHVwZ3JhZGVzCuKUlOKUgOKUgCBWZWdhCuKUlOKUgOKUgCBiaW4KICAgIOKUlOKUgOKUgCBnYWlhZHY2LjAuMAo="}}),e._v(" "),t("p",[e._v("Export the environmental variables:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"ZXhwb3J0IERBRU1PTl9OQU1FPWdhaWFkCiMgcGxlYXNlIGNoYW5nZSB0byB5b3VyIG93biBnYWlhIGhvbWUgZGlyCmV4cG9ydCBEQUVNT05fSE9NRT0gJEdBSUFfSE9NRQpleHBvcnQgREFFTU9OX1JFU1RBUlRfQUZURVJfVVBHUkFERT10cnVlCg=="}}),e._v(" "),t("p",[e._v("Start the node:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"Y29zbW92aXNvciBzdGFydCAtLXgtY3Jpc2lzLXNraXAtYXNzZXJ0LWludmFyaWFudHMK"}}),e._v(" "),t("p",[e._v("Skipping the invariant checks is strongly encouraged since it decreases the upgrade time significantly and since there are some other improvements coming to the crisis module in the next release of the Cosmos SDK.")]),e._v(" "),t("h4",{attrs:{id:"expected-ugprade-result"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expected-ugprade-result"}},[e._v("#")]),e._v(" Expected ugprade result")]),e._v(" "),t("p",[e._v("When the upgrade block height is reached, you can find the following information in the log:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"RVJSIFVQR1JBREUgJnF1b3Q7VmVnYSZxdW90OyBORUVERUQgYXQgaGVpZ2h0OiA4Njk1MDAwOiB1cGdyYWRlIHRvIFZlZ2EgYW5kIGFwcGx5aW5nIHVwZ3JhZGUgJnF1b3Q7VmVnYSZxdW90OyBhdCBoZWlnaHQ6ODY5NTAwMC4K"}}),e._v(" "),t("p",[e._v("This may take 20 min to a few hours.\nAfter this, the chain will continue to produce blocks when validators with a total sum voting power > 2/3 complete their nodes upgrades.")]),e._v(" "),t("h3",{attrs:{id:"method-iii-upgrade-using-cosmovisor-by-auto-downloading-the-gaia-v6-0-0-binary-not-recommended"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#method-iii-upgrade-using-cosmovisor-by-auto-downloading-the-gaia-v6-0-0-binary-not-recommended"}},[e._v("#")]),e._v(" Method III: upgrade using Cosmovisor by auto-downloading the Gaia v6.0.0 binary (not recommended!)")]),e._v(" "),t("h4",{attrs:{id:"preparation-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preparation-2"}},[e._v("#")]),e._v(" Preparation")]),e._v(" "),t("p",[e._v("Install Cosmovisor v0.1")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"Z28gaW5zdGFsbCBnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2Nvc21vdmlzb3IvY21kL2Nvc21vdmlzb3JAdjAuMS4wCg=="}}),e._v(" "),t("p",[e._v("Create a cosmovisor folder:")]),e._v(" "),t("p",[e._v("create a cosmovisor folder inside gaia home and move gaiad v5.0.0 into "),t("code",[e._v("$GAIA_HOME/cosmovisor/genesis/bin")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"bWtkaXIgLXAgJEdBSUFfSE9NRS9jb3Ntb3Zpc29yL2dlbmVzaXMvYmluCmNwICQod2hpY2ggZ2FpYWQpICRHQUlBX0hPTUUvY29zbW92aXNvci9nZW5lc2lzL2Jpbgo="}}),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"LgrilJzilIDilIAgY3VycmVudCAtJmd0OyBnZW5lc2lzIG9yIHVwZ3JhZGVzLyZsdDtuYW1lJmd0OwrilJTilIDilIAgZ2VuZXNpcwogICAgIOKUlOKUgOKUgCBiaW4KICAgICAgICDilJTilIDilIAgZ2FpYWR2NS4wLjAK"}}),e._v(" "),t("p",[e._v("Export the environmental variables:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"ZXhwb3J0IERBRU1PTl9OQU1FPWdhaWFkCiMgcGxlYXNlIGNoYW5nZSB0byB5b3VyIG93biBnYWlhIGhvbWUgZGlyCmV4cG9ydCBEQUVNT05fSE9NRT0gJEdBSUFfSE9NRQpleHBvcnQgREFFTU9OX1JFU1RBUlRfQUZURVJfVVBHUkFERT10cnVlCmV4cG9ydCBEQUVNT05fQUxMT1dfRE9XTkxPQURfQklOQVJJRVM9dHJ1ZQo="}}),e._v(" "),t("p",[e._v("Start the node:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"Y29zbW92aXNvciBzdGFydCAtLXgtY3Jpc2lzLXNraXAtYXNzZXJ0LWludmFyaWFudHMK"}}),e._v(" "),t("p",[e._v("Skipping the invariant checks is strongly encouraged since it decreases the upgrade time significantly and since there are some other improvements coming to the crisis module in the next release of the Cosmos SDK.")]),e._v(" "),t("h4",{attrs:{id:"expected-result"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expected-result"}},[e._v("#")]),e._v(" Expected result")]),e._v(" "),t("p",[e._v("When the upgrade block height is reached, you can find the following information in the log:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"RVJSIFVQR1JBREUgJnF1b3Q7VmVnYSZxdW90OyBORUVERUQgYXQgaGVpZ2h0OiA4Njk1MDAwOiB1cGdyYWRlIHRvIFZlZ2EgYW5kIGFwcGx5aW5nIHVwZ3JhZGUgJnF1b3Q7VmVnYSZxdW90OyBhdCBoZWlnaHQ6ODY5NTAwMAo="}}),e._v(" "),t("p",[e._v("Then the Cosmovisor will create "),t("code",[e._v("$GAIA_HOME/cosmovisor/upgrades/Vega/bin")]),e._v(" and download Gaia v6.0.0 binary to this folder according to links in the "),t("code",[e._v("--info")]),e._v(" field of the upgrade proposal 59.\nThis may take 20 min to a few hours, afterwards, the chain will continue to produce blocks once validators with a total sum voting power > 2/3 complete their nodes upgrades.")]),e._v(" "),t("p",[t("em",[e._v("Please Note:")])]),e._v(" "),t("p",[e._v("Auto-download the new binary is not recommended for the following reasons:")]),e._v(" "),t("ul",[t("li",[e._v("In general, auto-download comes with the risk that the verification of correct download is done automatically. If you want to have the highest guarantee you should confirm the check-sum manually. We hope more node operators will use the auto-download for this release but please be aware this is a risk you should take at your own discretion.")]),e._v(" "),t("li",[e._v("For the Vega upgrade, Gaia will upgrade its dependency on Cosmos SDK v0.42 to Cosmos SDK v0.44, this will require "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/releases/tag/cosmovisor%2Fv0.1.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmovisor v0.1"),t("OutboundLink")],1),e._v(". Later versions of Cosmovisor do not support Cosmos SDK v0.42 or earlier if the auto-download option is enabled.")]),e._v(" "),t("li",[e._v("By using Cosmovisor v0.1 you might experience a "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/9875",target:"_blank",rel:"noopener noreferrer"}},[e._v("node hanging issue"),t("OutboundLink")],1),e._v(" when querying a result with a large output size. For example, "),t("code",[e._v("gaiad q gov proposals")]),e._v(" will hang the node being queried, this issue will not appear for Cosmovisor versions newer than v0.1.")])]),e._v(" "),t("h2",{attrs:{id:"upgrade-duration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-duration"}},[e._v("#")]),e._v(" Upgrade duration")]),e._v(" "),t("p",[e._v("The upgrade may take several hours to complete because cosmoshub-4 participants operate globally with differing operating hours and it may take some time for operators to upgrade their binaries and connect to the network.")]),e._v(" "),t("h2",{attrs:{id:"rollback-plan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rollback-plan"}},[e._v("#")]),e._v(" Rollback plan")]),e._v(" "),t("p",[e._v("During the network upgrade, core Cosmos teams will be keeping an ever vigilant eye and communicating with operators on the status of their upgrades. During this time, the core teams will listen to operator needs to determine if the upgrade is experiencing unintended challenges. In the event of unexpected challenges, the core teams, after conferring with operators and attaining social consensus, may choose to declare that the upgrade will be skipped.")]),e._v(" "),t("p",[e._v("Steps to skip this upgrade proposal are simply to resume the cosmoshub-4 network with the (downgraded) v5.0.x binary using the following command:")]),e._v(" "),t("blockquote",[t("p",[e._v("gaiad start --unsafe-skip-upgrade 8695000")])]),e._v(" "),t("p",[e._v("Note: There is no particular need to restore a state snapshot prior to the upgrade height, unless specifically directed by core Cosmos teams.")]),e._v(" "),t("p",[e._v("Important: A social consensus decision to skip the upgrade will be based solely on technical merits, thereby respecting and maintaining the decentralized governance process of the upgrade proposal's successful YES vote.")]),e._v(" "),t("h2",{attrs:{id:"communications"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#communications"}},[e._v("#")]),e._v(" Communications")]),e._v(" "),t("p",[e._v("Operators are encouraged to join the "),t("code",[e._v("#validators-verified")]),e._v(" channel of the Cosmos Community Discord. This channel is the primary communication tool for operators to ask questions, report upgrade status, report technical issues, and to build social consensus should the need arise. This channel is restricted to known operators and requires verification beforehand. Requests to join the "),t("code",[e._v("#validators-verified")]),e._v(" channel can be sent to the "),t("code",[e._v("#general-support")]),e._v(" channel.")]),e._v(" "),t("h2",{attrs:{id:"risks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#risks"}},[e._v("#")]),e._v(" Risks")]),e._v(" "),t("p",[e._v("As a validator performing the upgrade procedure on your consensus nodes carries a heightened risk of double-signing and being slashed. The most important piece of this procedure is verifying your software version and genesis file hash before starting your validator and signing.")]),e._v(" "),t("p",[e._v("The riskiest thing a validator can do is discover that they made a mistake and repeat the upgrade procedure again during the network startup. If you discover a mistake in the process, the best thing to do is wait for the network to start before correcting it.")]),e._v(" "),t("h2",{attrs:{id:"reference"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[e._v("#")]),e._v(" Reference")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/cosmos/vega-test",target:"_blank",rel:"noopener noreferrer"}},[e._v("cosmos/vega-test"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/cosmos/gaia/blob/main/docs/migration/cosmoshub-4-delta-upgrade.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Delta upgrade instruction"),t("OutboundLink")],1)])],1)}),[],!1,null,null,null);a.default=o.exports}}]);