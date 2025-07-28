/**
 * Minified by jsDelivr using Terser v5.39.0.
 * Original file: /npm/@tailwindplus/elements@1.0.0/dist/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/*! @tailwindplus/elements v1.0.0 | Proprietary License | https://tailwindcss.com/plus/license */
var dn = Object.defineProperty, mo = e => {
        throw TypeError(e)
    }, pn = (e, t, n) => t in e ? dn(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
    H = (e, t, n) => pn(e, "symbol" != typeof t ? t + "" : t, n), St = (e, t, n) => t.has(e) || mo("Cannot " + n),
    f = (e, t, n) => (St(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
    I = (e, t, n) => t.has(e) ? mo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n),
    S = (e, t, n, o) => (St(e, t, "write to private field"), o ? o.call(e, n) : t.set(e, n), n),
    F = (e, t, n) => (St(e, t, "access private method"), n);
if (typeof globalThis.window < "u") {
    let e = !1;
    document.addEventListener("submit", (t => {
        if (e) return void (e = !1);
        let n = t.target;
        if (n && "dialog" === n.method) {
            let o = n.closest("el-dialog");
            if (!o || !("beforeClose" in o)) return;
            let r = o.beforeClose();
            if (!0 === r || (t.preventDefault(), t.stopImmediatePropagation(), !1 === r)) return;
            r.then((o => {
                o && (e = !0, n.dispatchEvent(t))
            })).catch(console.error)
        }
    }), !0)
}
var rt = class extends Event {
    constructor(e, {oldState: t = "", newState: n = "", ...o} = {}) {
        super(e, o), H(this, "oldState"), H(this, "newState"), this.oldState = String(t || ""), this.newState = String(n || "")
    }
}, ho = new WeakMap;

function Ao(e, t, n) {
    ho.set(e, setTimeout((() => {
        ho.has(e) && e.dispatchEvent(new rt("toggle", {cancelable: !1, oldState: t, newState: n}))
    }), 0))
}

var Mt = globalThis.ShadowRoot || function () {
}, mn = globalThis.HTMLDialogElement || function () {
}, et = new WeakMap, Y = new WeakMap, B = new WeakMap, Ae = new WeakMap;

function tt(e) {
    return Ae.get(e) || "hidden"
}

var ot = new WeakMap;

function qe(e) {
    return [...e].pop()
}

function hn(e) {
    let t = e.popoverTargetElement;
    if (!(t instanceof HTMLElement)) return;
    let n = tt(t);
    "show" === e.popoverTargetAction && "showing" === n || "hide" === e.popoverTargetAction && "hidden" === n || ("showing" === n ? Te(t, !0, !0) : fe(t, !1) && (ot.set(t, e), Ot(t)))
}

function fe(e, t) {
    return !("auto" !== e.popover && "manual" !== e.popover && "hint" !== e.popover || !e.isConnected || t && "showing" !== tt(e) || !t && "hidden" !== tt(e) || e instanceof mn && e.hasAttribute("open") || document.fullscreenElement === e)
}

function go(e) {
    if (!e) return 0;
    let t = Y.get(document) || new Set, n = B.get(document) || new Set;
    return n.has(e) ? [...n].indexOf(e) + t.size + 1 : t.has(e) ? [...t].indexOf(e) + 1 : 0
}

function gn(e) {
    let t = xo(e), n = bn(e);
    return go(t) > go(n) ? t : n
}

function Ve(e) {
    let t, n = B.get(e) || new Set, o = Y.get(e) || new Set, r = n.size > 0 ? n : o.size > 0 ? o : null;
    return r ? (t = qe(r), t.isConnected ? t : (r.delete(t), Ve(e))) : null
}

function bo(e) {
    for (let t of e || []) {
        if (t.isConnected) return t;
        e.delete(t)
    }
    return null
}

function xe(e) {
    return "function" == typeof e.getRootNode ? e.getRootNode() : e.parentNode ? xe(e.parentNode) : e
}

function xo(e) {
    for (; e;) {
        if (e instanceof HTMLElement && "auto" === e.popover && "showing" === Ae.get(e)) return e;
        if ((e = e instanceof Element && e.assignedSlot || e.parentElement || xe(e)) instanceof Mt && (e = e.host), e instanceof Document) return
    }
}

function bn(e) {
    for (; e;) {
        let t = e.popoverTargetElement;
        if (t instanceof HTMLElement) return t;
        if ((e = e.parentElement || xe(e)) instanceof Mt && (e = e.host), e instanceof Document) return
    }
}

function vo(e, t) {
    let n = new Map, o = 0;
    for (let e of t || []) n.set(e, o), o += 1;
    n.set(e, o), o += 1;
    let r = null;
    return function (t) {
        if (!t) return;
        let o = !1, i = null, a = null;
        for (; !o;) {
            if (i = xo(t) || null, null === i || !n.has(i)) return;
            ("hint" === e.popover || "auto" === i.popover) && (o = !0), o || (t = i.parentElement)
        }
        a = n.get(i), (null === r || n.get(r) < a) && (r = i)
    }(e.parentElement || xe(e)), r
}

function vn(e) {
    return !(e.hidden || e instanceof Mt || (e instanceof HTMLButtonElement || e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement || e instanceof HTMLOptGroupElement || e instanceof HTMLOptionElement || e instanceof HTMLFieldSetElement) && e.disabled || e instanceof HTMLInputElement && "hidden" === e.type || e instanceof HTMLAnchorElement && "" === e.href) && ("number" == typeof e.tabIndex && -1 !== e.tabIndex)
}

function wn(e) {
    if (e.shadowRoot && !0 !== e.shadowRoot.delegatesFocus) return null;
    let t = e;
    t.shadowRoot && (t = t.shadowRoot);
    let n = t.querySelector("[autofocus]");
    if (n) return n;
    {
        let e = t.querySelectorAll("slot");
        for (let t of e) {
            let e = t.assignedElements({flatten: !0});
            for (let t of e) {
                if (t.hasAttribute("autofocus")) return t;
                if (n = t.querySelector("[autofocus]"), n) return n
            }
        }
    }
    let o = e.ownerDocument.createTreeWalker(t, NodeFilter.SHOW_ELEMENT), r = o.currentNode;
    for (; r;) {
        if (vn(r)) return r;
        r = o.nextNode()
    }
}

function En(e) {
    wn(e)?.focus()
}

var nt = new WeakMap;

function Ot(e) {
    if (!fe(e, !1)) return;
    let t = e.ownerDocument;
    if (!e.dispatchEvent(new rt("beforetoggle", {
        cancelable: !0,
        oldState: "closed",
        newState: "open"
    })) || !fe(e, !1)) return;
    let n = !1, o = e.popover, r = null, i = vo(e, Y.get(t) || new Set), a = vo(e, B.get(t) || new Set);
    if ("auto" === o && (Dt(B.get(t) || new Set, n, !0), de(i || t, n, !0), r = "auto"), "hint" === o && (a ? (de(a, n, !0), r = "hint") : (Dt(B.get(t) || new Set, n, !0), i ? (de(i, n, !0), r = "auto") : r = "hint")), "auto" === o || "hint" === o) {
        if (o !== e.popover || !fe(e, !1)) return;
        Ve(t) || (n = !0), "auto" === r ? (Y.has(t) || Y.set(t, new Set), Y.get(t).add(e)) : "hint" === r && (B.has(t) || B.set(t, new Set), B.get(t).add(e))
    }
    nt.delete(e);
    let l = t.activeElement;
    e.classList.add(":popover-open"), Ae.set(e, "showing"), et.has(t) || et.set(t, new Set), et.get(t).add(e), To(ot.get(e), !0), En(e), n && l && "auto" === e.popover && nt.set(e, l), Ao(e, "closed", "open")
}

function Te(e, t = !1, n = !1) {
    if (!fe(e, !0)) return;
    let o = e.ownerDocument;
    if (["auto", "hint"].includes(e.popover) && (de(e, t, n), !fe(e, !0))) return;
    let r = Y.get(o) || new Set, i = r.has(e) && qe(r) === e;
    if (To(ot.get(e), !1), ot.delete(e), n && (e.dispatchEvent(new rt("beforetoggle", {
        oldState: "open",
        newState: "closed"
    })), i && qe(r) !== e && de(e, t, n), !fe(e, !0))) return;
    et.get(o)?.delete(e), r.delete(e), B.get(o)?.delete(e), e.classList.remove(":popover-open"), Ae.set(e, "hidden"), n && Ao(e, "open", "closed");
    let a = nt.get(e);
    a && (nt.delete(e), t && a.focus())
}

function yn(e, t = !1, n = !1) {
    let o = Ve(e);
    for (; o;) Te(o, t, n), o = Ve(e)
}

function Dt(e, t = !1, n = !1) {
    let o = bo(e);
    for (; o;) Te(o, t, n), o = bo(e)
}

function wo(e, t, n, o) {
    let r = !1, i = !1;
    for (; r || !i;) {
        i = !0;
        let a = null, l = !1;
        for (let n of t) if (n === e) l = !0; else if (l) {
            a = n;
            break
        }
        if (!a) return;
        for (; "showing" === tt(a) && t.size;) Te(qe(t), n, o);
        t.has(e) && qe(t) !== e && (r = !0), r && (o = !1)
    }
}

function de(e, t, n) {
    let o = e.ownerDocument || e;
    if (e instanceof Document) return yn(o, t, n);
    B.get(o)?.has(e) ? wo(e, B.get(o), t, n) : (Dt(B.get(o) || new Set, t, n), Y.get(o)?.has(e) && wo(e, Y.get(o), t, n))
}

var It = new WeakMap;

function Eo(e) {
    if (!e.isTrusted) return;
    let t = e.composedPath()[0];
    if (!t) return;
    let n = t.ownerDocument;
    if (!Ve(n)) return;
    let o = gn(t);
    if (o && "pointerdown" === e.type) It.set(n, o); else if ("pointerup" === e.type) {
        let e = It.get(n) === o;
        It.delete(n), e && de(o || n, !1, !0)
    }
}

var kt = new WeakMap;

function To(e, t = !1) {
    if (!e) return;
    kt.has(e) || kt.set(e, e.getAttribute("aria-expanded"));
    let n = e.popoverTargetElement;
    if (n instanceof HTMLElement && "auto" === n.popover) e.setAttribute("aria-expanded", String(t)); else {
        let t = kt.get(e);
        t ? e.setAttribute("aria-expanded", t) : e.removeAttribute("aria-expanded")
    }
}

var yo = globalThis.ShadowRoot || function () {
};

function An() {
    return typeof HTMLElement < "u" && "object" == typeof HTMLElement.prototype && "popover" in HTMLElement.prototype
}

function ce(e, t, n) {
    let o = e[t];
    Object.defineProperty(e, t, {
        value(e) {
            return o.call(this, n(e))
        }
    })
}

var xn = /(^|[^\\]):popover-open\b/g;

function Tn() {
    return "function" == typeof globalThis.CSSLayerBlockRule
}

function Ln() {
    let e = Tn();
    return `\n${e ? "@layer popover-polyfill {" : ""}\n  :where([popover]) {\n    position: fixed;\n    z-index: 2147483647;\n    inset: 0;\n    padding: 0.25em;\n    width: fit-content;\n    height: fit-content;\n    border-width: initial;\n    border-color: initial;\n    border-image: initial;\n    border-style: solid;\n    background-color: canvas;\n    color: canvastext;\n    overflow: auto;\n    margin: auto;\n  }\n\n  :where([popover]:not(.\\:popover-open)) {\n    display: none;\n  }\n\n  :where(dialog[popover].\\:popover-open) {\n    display: block;\n  }\n\n  :where(dialog[popover][open]) {\n    display: revert;\n  }\n\n  :where([anchor].\\:popover-open) {\n    inset: auto;\n  }\n\n  :where([anchor]:popover-open) {\n    inset: auto;\n  }\n\n  @supports not (background-color: canvas) {\n    :where([popover]) {\n      background-color: white;\n      color: black;\n    }\n  }\n\n  @supports (width: -moz-fit-content) {\n    :where([popover]) {\n      width: -moz-fit-content;\n      height: -moz-fit-content;\n    }\n  }\n\n  @supports not (inset: 0) {\n    :where([popover]) {\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n    }\n  }\n${e ? "}" : ""}\n`
}

var ye = null;

function Pt(e) {
    let t = Ln();
    if (null === ye) try {
        (ye = new CSSStyleSheet).replaceSync(t)
    } catch {
        ye = !1
    }
    if (!1 === ye) {
        let n = document.createElement("style");
        n.textContent = t, e instanceof Document ? e.head.prepend(n) : e.prepend(n)
    } else e.adoptedStyleSheets = [ye, ...e.adoptedStyleSheets]
}

function Sn() {
    if (typeof window > "u") return;

    function e(e) {
        return e?.includes(":popover-open") && (e = e.replace(xn, "$1.\\:popover-open")), e
    }

    window.ToggleEvent = window.ToggleEvent || rt, ce(Document.prototype, "querySelector", e), ce(Document.prototype, "querySelectorAll", e), ce(Element.prototype, "querySelector", e), ce(Element.prototype, "querySelectorAll", e), ce(Element.prototype, "matches", e), ce(Element.prototype, "closest", e), ce(DocumentFragment.prototype, "querySelectorAll", e), Object.defineProperties(HTMLElement.prototype, {
        popover: {
            enumerable: !0,
            configurable: !0,
            get() {
                if (!this.hasAttribute("popover")) return null;
                let e = (this.getAttribute("popover") || "").toLowerCase();
                return "" === e || "auto" == e ? "auto" : "hint" == e ? "hint" : "manual"
            },
            set(e) {
                null === e ? this.removeAttribute("popover") : this.setAttribute("popover", e)
            }
        }, showPopover: {
            enumerable: !0, configurable: !0, value(e = {}) {
                Ot(this)
            }
        }, hidePopover: {
            enumerable: !0, configurable: !0, value() {
                Te(this, !0, !0)
            }
        }, togglePopover: {
            enumerable: !0, configurable: !0, value(e = {}) {
                return "boolean" == typeof e && (e = {force: e}), "showing" === Ae.get(this) && void 0 === e.force || !1 === e.force ? Te(this, !0, !0) : (void 0 === e.force || !0 === e.force) && Ot(this), "showing" === Ae.get(this)
            }
        }
    });
    let t = Element.prototype.attachShadow;
    t && Object.defineProperties(Element.prototype, {
        attachShadow: {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value(e) {
                let n = t.call(this, e);
                return Pt(n), n
            }
        }
    });
    let n = HTMLElement.prototype.attachInternals;
    n && Object.defineProperties(HTMLElement.prototype, {
        attachInternals: {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value() {
                let e = n.call(this);
                return e.shadowRoot && Pt(e.shadowRoot), e
            }
        }
    });
    let o = new WeakMap;

    function r(e) {
        Object.defineProperties(e.prototype, {
            popoverTargetElement: {
                enumerable: !0, configurable: !0, set(e) {
                    if (null === e) this.removeAttribute("popovertarget"), o.delete(this); else {
                        if (!(e instanceof Element)) throw new TypeError("popoverTargetElement must be an element or null");
                        this.setAttribute("popovertarget", ""), o.set(this, e)
                    }
                }, get() {
                    if ("button" !== this.localName && "input" !== this.localName || "input" === this.localName && "reset" !== this.type && "image" !== this.type && "button" !== this.type || this.disabled || this.form && "submit" === this.type) return null;
                    let e = o.get(this);
                    if (e && e.isConnected) return e;
                    if (e && !e.isConnected) return o.delete(this), null;
                    let t = xe(this), n = this.getAttribute("popovertarget");
                    return (t instanceof Document || t instanceof yo) && n && t.getElementById(n) || null
                }
            }, popoverTargetAction: {
                enumerable: !0, configurable: !0, get() {
                    let e = (this.getAttribute("popovertargetaction") || "").toLowerCase();
                    return "show" === e || "hide" === e ? e : "toggle"
                }, set(e) {
                    this.setAttribute("popovertargetaction", e)
                }
            }
        })
    }

    r(HTMLButtonElement), r(HTMLInputElement);
    let i = e => {
        let t = e.composedPath(), n = t[0];
        if (!(n instanceof Element) || n?.shadowRoot) return;
        let o = xe(n);
        if (!(o instanceof yo || o instanceof Document)) return;
        let r = t.find((e => e.matches?.("[popovertargetaction],[popovertarget]")));
        return r ? (hn(r), void e.preventDefault()) : void 0
    }, a = e => {
        let t = e.key, n = e.target;
        !e.defaultPrevented && n && ("Escape" === t || "Esc" === t) && de(n.ownerDocument, !0, !0)
    };
    var l;
    (l = document).addEventListener("click", i), l.addEventListener("keydown", a), l.addEventListener("pointerdown", Eo), l.addEventListener("pointerup", Eo), Pt(document)
}

function Lo() {
    return typeof HTMLButtonElement < "u" && "command" in HTMLButtonElement.prototype && "source" in ((globalThis.CommandEvent || {}).prototype || {})
}

function So() {
    function e(e, t, n = !0) {
        Object.defineProperty(e, t, {...Object.getOwnPropertyDescriptor(e, t), enumerable: n})
    }

    function t(e) {
        return e && "function" == typeof e.getRootNode ? e.getRootNode() : e && e.parentNode ? t(e.parentNode) : e
    }

    document.addEventListener("invoke", (e => {
        "invoke" == e.type && e.isTrusted && (e.stopImmediatePropagation(), e.preventDefault())
    }), !0), document.addEventListener("command", (e => {
        "command" == e.type && e.isTrusted && (e.stopImmediatePropagation(), e.preventDefault())
    }), !0);
    let n = new WeakMap, o = new WeakMap;

    class r extends Event {
        constructor(e, t = {}) {
            super(e, t);
            let {source: r, command: i} = t;
            if (null != r && !(r instanceof Element)) throw new TypeError("source must be an element");
            n.set(this, r || null), o.set(this, void 0 !== i ? String(i) : "")
        }

        get [Symbol.toStringTag]() {
            return "CommandEvent"
        }

        get source() {
            if (!n.has(this)) throw new TypeError("illegal invocation");
            let e = n.get(this);
            if (!(e instanceof Element)) return null;
            let o = t(e);
            return o !== t(this.target || document) ? o.host : e
        }

        get command() {
            if (!o.has(this)) throw new TypeError("illegal invocation");
            return o.get(this)
        }

        get action() {
            throw new Error("CommandEvent#action was renamed to CommandEvent#command")
        }

        get invoker() {
            throw new Error("CommandEvent#invoker was renamed to CommandEvent#source")
        }
    }

    e(r.prototype, "source"), e(r.prototype, "command");

    class i extends Event {
        constructor() {
            throw new Error("InvokeEvent has been deprecated, it has been renamed to `CommandEvent`")
        }
    }

    let a = new WeakMap;
    let l = new WeakMap;

    function s(e) {
        for (let t of e) t.oncommand = new Function("event", t.getAttribute("oncommand"))
    }

    Object.defineProperties(HTMLElement.prototype, {
        oncommand: {
            enumerable: !0, configurable: !0, get() {
                return u.takeRecords(), l.get(this) || null
            }, set(e) {
                let t = l.get(this) || null;
                t && this.removeEventListener("command", t), l.set(this, "object" == typeof e || "function" == typeof e ? e : null), "function" == typeof e && this.addEventListener("command", e)
            }
        }
    });
    let u = new MutationObserver((e => {
        for (let t of e) {
            let {target: e} = t;
            "childList" === t.type ? s(e.querySelectorAll("[oncommand]")) : s([e])
        }
    }));

    function c(e) {
        if (e.defaultPrevented || "click" !== e.type) return;
        let t = e.target.closest("button[invoketarget], button[invokeaction], input[invoketarget], input[invokeaction]");
        if (t && (console.warn("Elements with `invoketarget` or `invokeaction` are deprecated and should be renamed to use `commandfor` and `command` respectively"), t.matches("input"))) throw new Error("Input elements no longer support `commandfor`");
        let n = e.target.closest("button[commandfor], button[command]");
        if (!n) return;
        if (n.form && "button" !== n.getAttribute("type")) throw e.preventDefault(), new Error("Element with `commandFor` is a form participant. It should explicitly set `type=button` in order for `commandFor` to work. In order for it to act as a Submit button, it must not have command or commandfor attributes");
        if (n.hasAttribute("command") !== n.hasAttribute("commandfor")) {
            let e = n.hasAttribute("command") ? "command" : "commandfor",
                t = n.hasAttribute("command") ? "commandfor" : "command";
            throw new Error(`Element with ${e} attribute must also have a ${t} attribute to function.`)
        }
        if ("show-popover" !== n.command && "hide-popover" !== n.command && "toggle-popover" !== n.command && "show-modal" !== n.command && "close" !== n.command && !n.command.startsWith("--")) return void console.warn(`"${n.command}" is not a valid command value. Custom commands must begin with --`);
        let o = n.commandForElement;
        if (!o) return;
        let i = new r("command", {command: n.command, source: n, cancelable: !0});
        if (o.dispatchEvent(i), i.defaultPrevented) return;
        let a = i.command.toLowerCase();
        if (o.popover) {
            let e = !o.matches(":popover-open");
            !e || "toggle-popover" !== a && "show-popover" !== a ? !e && "hide-popover" === a && o.hidePopover() : o.showPopover({source: n})
        } else if ("dialog" === o.localName) {
            let e = !o.hasAttribute("open");
            e && "show-modal" === a ? o.showModal() : !e && "close" === a && o.close()
        }
    }

    function d(e) {
        e.addEventListener("click", c, !0)
    }

    var h;
    u.observe(document, {
        subtree: !0,
        childList: !0,
        attributeFilter: ["oncommand"]
    }), s(document.querySelectorAll("[oncommand]")), h = HTMLButtonElement, Object.defineProperties(h.prototype, {
        commandForElement: {
            enumerable: !0, configurable: !0, set(e) {
                if (this.hasAttribute("invokeaction")) throw new TypeError("Element has deprecated `invokeaction` attribute, replace with `command`");
                if (this.hasAttribute("invoketarget")) throw new TypeError("Element has deprecated `invoketarget` attribute, replace with `commandfor`");
                if (null === e) this.removeAttribute("commandfor"), a.delete(this); else {
                    if (!(e instanceof Element)) throw new TypeError("commandForElement must be an element or null");
                    {
                        this.setAttribute("commandfor", "");
                        let n = t(e);
                        t(this) === n || n === this.ownerDocument ? a.set(this, e) : a.delete(this)
                    }
                }
            }, get() {
                if ("button" !== this.localName) return null;
                if (this.hasAttribute("invokeaction") || this.hasAttribute("invoketarget")) return console.warn("Element has deprecated `invoketarget` or `invokeaction` attribute, use `commandfor` and `command` instead"), null;
                if (this.disabled) return null;
                if (this.form && "button" !== this.getAttribute("type")) return console.warn("Element with `commandFor` is a form participant. It should explicitly set `type=button` in order for `commandFor` to work"), null;
                let e = a.get(this);
                if (e) return e.isConnected ? e : (a.delete(this), null);
                let n = t(this), o = this.getAttribute("commandfor");
                return (n instanceof Document || n instanceof ShadowRoot) && o && n.getElementById(o) || null
            }
        }, command: {
            enumerable: !0, configurable: !0, get() {
                let e = this.getAttribute("command") || "";
                if (e.startsWith("--")) return e;
                let t = e.toLowerCase();
                switch (t) {
                    case"show-modal":
                    case"close":
                    case"toggle-popover":
                    case"hide-popover":
                    case"show-popover":
                        return t
                }
                return ""
            }, set(e) {
                this.setAttribute("command", e)
            }
        }, invokeAction: {
            enumerable: !1, configurable: !0, get() {
                throw new Error("invokeAction is deprecated. It has been renamed to command")
            }, set(e) {
                throw new Error("invokeAction is deprecated. It has been renamed to command")
            }
        }, invokeTargetElement: {
            enumerable: !1, configurable: !0, get() {
                throw new Error("invokeTargetElement is deprecated. It has been renamed to command")
            }, set(e) {
                throw new Error("invokeTargetElement is deprecated. It has been renamed to command")
            }
        }
    }), function (e, t) {
        let n = e.prototype.attachShadow;
        e.prototype.attachShadow = function (e) {
            let o = n.call(this, e);
            return t(o), o
        };
        let o = e.prototype.attachInternals;
        e.prototype.attachInternals = function () {
            let e = o.call(this);
            return e.shadowRoot && t(e.shadowRoot), e
        }
    }(HTMLElement, (e => {
        d(e), u.observe(e, {attributeFilter: ["oncommand"]}), s(e.querySelectorAll("[oncommand]"))
    })), d(document), Object.assign(globalThis, {CommandEvent: r, InvokeEvent: i})
}

function Io() {
    if ("function" != typeof HTMLDialogElement) return !1;
    let e = !1, t = document.createElement("dialog");
    return t.addEventListener("beforetoggle", (t => {
        e = !0, t.preventDefault()
    })), t.show(), e
}

function ko() {
    let e = new WeakMap;

    function t(t) {
        let n = t.open ? "closed" : "open", o = t.open ? "open" : "closed";
        if (e.has(t)) {
            let n = e.get(t);
            o = n.oldState, clearTimeout(n.id)
        }
        e.set(t, {
            oldState: o, id: setTimeout((() => {
                t.dispatchEvent(new ToggleEvent("toggle", {newState: n, oldState: o}))
            }))
        })
    }

    let n = HTMLDialogElement.prototype.show, o = HTMLDialogElement.prototype.showModal,
        r = HTMLDialogElement.prototype.close;

    function i(e) {
        let n = new ToggleEvent("beforetoggle", {newState: "closed", oldState: "open", cancelable: !1});
        e.dispatchEvent(n), e.open && t(e)
    }

    document.addEventListener("submit", (e => {
        let t = e.target;
        if ("dialog" === t.method) {
            let e = t.closest("dialog");
            e instanceof HTMLDialogElement && i(e)
        }
    }), !0), Object.defineProperties(HTMLDialogElement.prototype, {
        show: {
            value() {
                if (this.open || this.matches(":popover-open, :modal") || !this.ownerDocument) return n.apply(this, arguments);
                let e = new ToggleEvent("beforetoggle", {newState: "open", oldState: "closed", cancelable: !0});
                this.dispatchEvent(e) && (t(this), n.apply(this, arguments))
            }
        }, showModal: {
            value() {
                if (this.open || this.matches(":popover-open, :modal") || !this.isConnected || !this.ownerDocument) return o.apply(this, arguments);
                let e = new ToggleEvent("beforetoggle", {newState: "open", oldState: "closed", cancelable: !0});
                return this.dispatchEvent(e) ? (t(this), o.apply(this, arguments)) : void 0
            }
        }, close: {
            value() {
                return this.open || this.matches(":popover-open, :modal") ? (i(this), r.apply(this, arguments)) : r.apply(this, arguments)
            }
        }
    })
}

function it(e) {
    function t() {
        "loading" !== document.readyState && (e(), document.removeEventListener("DOMContentLoaded", t))
    }

    typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t())
}

function Le(e) {
    "focus" in e && e.focus({focusVisible: st})
}

An() || Sn(), typeof globalThis.window < "u" && (Lo() || So(), Io() || ko(), it((() => {
    let e = document.createElement("style");
    e.textContent = "@layer popover-polyfill;", e.setAttribute("suppressHydrationWarning", ""), document.documentElement.prepend(e)
})));
var st = !1;
if (typeof globalThis.window < "u") {
    let e;
    (e => {
        e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse"
    })(e || (e = {})), document.addEventListener("keydown", (e => {
        e.metaKey || e.altKey || e.ctrlKey || (st = !0, document.documentElement.dataset.focusVisible = "")
    }), !0), document.addEventListener("click", (e => {
        1 === e.detail ? (st = !1, delete document.documentElement.dataset.focusVisible) : 0 === e.detail && (st = !0, document.documentElement.dataset.focusVisible = "")
    }), !0)
}
typeof globalThis.HTMLElement > "u" && (globalThis.HTMLElement = class {
});
var pe, We, te, x = class extends HTMLElement {
    constructor() {
        super(...arguments), I(this, pe, new AbortController), I(this, We, !1), I(this, te, !1)
    }

    connectedCallback() {
        if ("observedAttributes" in this.constructor && "object" == typeof this.constructor.observedAttributes && Array.isArray(this.constructor.observedAttributes)) for (let e of this.constructor.observedAttributes) "string" == typeof e && (e in this || Object.defineProperty(this, e, {
            get() {
                return this.getAttribute(e)
            }, set(t) {
                null != t && !1 !== t ? this.setAttribute(e, t) : this.removeAttribute(e)
            }
        }));
        S(this, We, !0), queueMicrotask((() => {
            if (!f(this, pe).signal.aborted) try {
                this.mount?.(f(this, pe).signal)
            } catch (e) {
                console.error(e)
            }
        }))
    }

    disconnectedCallback() {
        f(this, pe).abort(), S(this, pe, new AbortController)
    }

    setAttributeNoCallbacks(e, t) {
        try {
            S(this, te, !0), this.setAttribute(e, t)
        } finally {
            S(this, te, !1)
        }
    }

    removeAttributeNoCallbacks(e) {
        try {
            S(this, te, !0), this.removeAttribute(e)
        } finally {
            S(this, te, !1)
        }
    }

    attributeChangedCallback(e, t, n) {
        f(this, We) && (f(this, te) || t !== n && this.onAttributeChange?.(e, t, n))
    }
};

function T(e, t) {
    typeof globalThis.customElements > "u" || customElements.get(e) === t || customElements.define(e, t)
}

function Q() {
    let e = [], t = {
        addEventListener: (e, n, o, r) => (e.addEventListener(n, o, r), t.add((() => e.removeEventListener(n, o, r)))),
        requestAnimationFrame(...e) {
            let n = requestAnimationFrame(...e);
            return t.add((() => cancelAnimationFrame(n)))
        },
        nextFrame: (...e) => t.requestAnimationFrame((() => t.requestAnimationFrame(...e))),
        setTimeout(...e) {
            let n = setTimeout(...e);
            return t.add((() => clearTimeout(n)))
        },
        microTask(...e) {
            let n = {current: !0};
            return queueMicrotask((() => {
                n.current && e[0]()
            })), t.add((() => {
                n.current = !1
            }))
        },
        style(e, t, n) {
            let o = e.style.getPropertyValue(t);
            return t.startsWith("--") ? e.style.setProperty(t, n) : Object.assign(e.style, {[t]: n}), this.add((() => {
                t.startsWith("--") ? e.style.setProperty(t, o) : Object.assign(e.style, {[t]: o})
            }))
        },
        add: t => (e.includes(t) || e.push(t), () => {
            let n = e.indexOf(t);
            if (n >= 0) for (let t of e.splice(n, 1)) t()
        }),
        dispose() {
            for (let t of e.splice(0)) t()
        }
    };
    return t
}

function Se(e, t = () => []) {
    let n = !1, o = null, r = Q();
    return {
        start(i, a) {
            let l = [e, ...t()];
            n = !n && (null !== o && o !== i), o = i;
            for (let e of l) In(e, (() => {
                n || ("in" === i ? (e.dataset.transition = "", e.dataset.enter = "", e.dataset.closed = "", delete e.dataset.leave) : "out" === i && (e.dataset.transition = "", e.dataset.leave = "", delete e.dataset.enter))
            }), null !== o);
            r.nextFrame((() => {
                for (let e of l) n ? "in" === i ? (delete e.dataset.enter, delete e.dataset.closed, e.dataset.leave = "") : "out" === i && (delete e.dataset.leave, e.dataset.enter = "", e.dataset.closed = "") : "in" === i ? delete e.dataset.closed : "out" === i && (e.dataset.closed = "");
                r.requestAnimationFrame((() => {
                    r.add(kn(e, (() => {
                        if (!(n && "function" == typeof e.getAnimations && e.getAnimations({subtree: !0}).length > 0)) {
                            for (let e of l) delete e.dataset.transition, delete e.dataset.enter, delete e.dataset.closed, delete e.dataset.leave;
                            o = null, a?.()
                        }
                    })))
                }))
            }))
        }, abort() {
            r.dispose(), n = !1, o = null
        }
    }
}

function In(e, t, n = !1) {
    if (n) return void t();
    let o = e.style.transition;
    e.style.transition = "none", t(), e.offsetHeight, e.style.transition = o
}

function kn(e, t) {
    let n = Q();
    if (!e) return n.dispose;
    let o = !1;
    n.add((() => {
        o = !0
    }));
    let r = e.getAnimations?.({subtree: !0}).filter((e => e instanceof CSSTransition)) ?? [];
    return 0 === r.length ? (t(), n.dispose) : (Promise.allSettled(r.map((e => e.finished))).then((() => {
        o || t()
    })), n.dispose)
}

pe = new WeakMap, We = new WeakMap, te = new WeakMap;
var Ie = Math.min, X = Math.max, _e = Math.round, Ke = Math.floor, _ = e => ({x: e, y: e}),
    Pn = {left: "right", right: "left", bottom: "top", top: "bottom"}, On = {start: "end", end: "start"};

function Ct(e, t, n) {
    return X(e, Ie(t, n))
}

function at(e, t) {
    return "function" == typeof e ? e(t) : e
}

function me(e) {
    return e.split("-")[0]
}

function ut(e) {
    return e.split("-")[1]
}

function Ht(e) {
    return "x" === e ? "y" : "x"
}

function Ft(e) {
    return "y" === e ? "height" : "width"
}

function oe(e) {
    return ["top", "bottom"].includes(me(e)) ? "y" : "x"
}

function Rt(e) {
    return Ht(oe(e))
}

function Po(e, t, n) {
    void 0 === n && (n = !1);
    let o = ut(e), r = Rt(e), i = Ft(r),
        a = "x" === r ? o === (n ? "end" : "start") ? "right" : "left" : "start" === o ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (a = $e(a)), [a, $e(a)]
}

function Oo(e) {
    let t = $e(e);
    return [lt(e), t, lt(t)]
}

function lt(e) {
    return e.replace(/start|end/g, (e => On[e]))
}

function Dn(e, t, n) {
    let o = ["left", "right"], r = ["right", "left"], i = ["top", "bottom"], a = ["bottom", "top"];
    switch (e) {
        case"top":
        case"bottom":
            return n ? t ? r : o : t ? o : r;
        case"left":
        case"right":
            return t ? i : a;
        default:
            return []
    }
}

function Do(e, t, n, o) {
    let r = ut(e), i = Dn(me(e), "start" === n, o);
    return r && (i = i.map((e => e + "-" + r)), t && (i = i.concat(i.map(lt)))), i
}

function $e(e) {
    return e.replace(/left|right|bottom|top/g, (e => Pn[e]))
}

function Mn(e) {
    return {top: 0, right: 0, bottom: 0, left: 0, ...e}
}

function Mo(e) {
    return "number" != typeof e ? Mn(e) : {top: e, right: e, bottom: e, left: e}
}

function he(e) {
    let {x: t, y: n, width: o, height: r} = e;
    return {width: o, height: r, top: n, left: t, right: t + o, bottom: n + r, x: t, y: n}
}

function Co(e, t, n) {
    let o, {reference: r, floating: i} = e, a = oe(t), l = Rt(t), s = Ft(l), u = me(t), c = "y" === a,
        d = r.x + r.width / 2 - i.width / 2, h = r.y + r.height / 2 - i.height / 2, p = r[s] / 2 - i[s] / 2;
    switch (u) {
        case"top":
            o = {x: d, y: r.y - i.height};
            break;
        case"bottom":
            o = {x: d, y: r.y + r.height};
            break;
        case"right":
            o = {x: r.x + r.width, y: h};
            break;
        case"left":
            o = {x: r.x - i.width, y: h};
            break;
        default:
            o = {x: r.x, y: r.y}
    }
    switch (ut(t)) {
        case"start":
            o[l] -= p * (n && c ? -1 : 1);
            break;
        case"end":
            o[l] += p * (n && c ? -1 : 1)
    }
    return o
}

var Ho = async (e, t, n) => {
    let {placement: o = "bottom", strategy: r = "absolute", middleware: i = [], platform: a} = n, l = i.filter(Boolean),
        s = await (null == a.isRTL ? void 0 : a.isRTL(t)),
        u = await a.getElementRects({reference: e, floating: t, strategy: r}), {x: c, y: d} = Co(u, o, s), h = o,
        p = {}, f = 0;
    for (let n = 0; n < l.length; n++) {
        let {name: i, fn: m} = l[n], {x: g, y: b, data: v, reset: w} = await m({
            x: c,
            y: d,
            initialPlacement: o,
            placement: h,
            strategy: r,
            middlewareData: p,
            rects: u,
            platform: a,
            elements: {reference: e, floating: t}
        });
        c = g ?? c, d = b ?? d, p = {
            ...p,
            [i]: {...p[i], ...v}
        }, w && f <= 50 && (f++, "object" == typeof w && (w.placement && (h = w.placement), w.rects && (u = !0 === w.rects ? await a.getElementRects({
            reference: e,
            floating: t,
            strategy: r
        }) : w.rects), ({x: c, y: d} = Co(u, h, s))), n = -1)
    }
    return {x: c, y: d, placement: h, strategy: r, middlewareData: p}
};

async function Nt(e, t) {
    var n;
    void 0 === t && (t = {});
    let {x: o, y: r, platform: i, rects: a, elements: l, strategy: s} = e, {
            boundary: u = "clippingAncestors",
            rootBoundary: c = "viewport",
            elementContext: d = "floating",
            altBoundary: h = !1,
            padding: p = 0
        } = at(t, e), f = Mo(p), m = l[h ? "floating" === d ? "reference" : "floating" : d],
        g = he(await i.getClippingRect({
            element: null == (n = await (null == i.isElement ? void 0 : i.isElement(m))) || n ? m : m.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(l.floating)),
            boundary: u,
            rootBoundary: c,
            strategy: s
        })), b = "floating" === d ? {x: o, y: r, width: a.floating.width, height: a.floating.height} : a.reference,
        v = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(l.floating)),
        w = await (null == i.isElement ? void 0 : i.isElement(v)) && await (null == i.getScale ? void 0 : i.getScale(v)) || {
            x: 1,
            y: 1
        },
        y = he(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: l,
            rect: b,
            offsetParent: v,
            strategy: s
        }) : b);
    return {
        top: (g.top - y.top + f.top) / w.y,
        bottom: (y.bottom - g.bottom + f.bottom) / w.y,
        left: (g.left - y.left + f.left) / w.x,
        right: (y.right - g.right + f.right) / w.x
    }
}

var Fo = function (e) {
    return void 0 === e && (e = {}), {
        name: "flip", options: e, async fn(t) {
            var n, o;
            let {
                placement: r,
                middlewareData: i,
                rects: a,
                initialPlacement: l,
                platform: s,
                elements: u
            } = t, {
                mainAxis: c = !0,
                crossAxis: d = !0,
                fallbackPlacements: h,
                fallbackStrategy: p = "bestFit",
                fallbackAxisSideDirection: f = "none",
                flipAlignment: m = !0,
                ...g
            } = at(e, t);
            if (null != (n = i.arrow) && n.alignmentOffset) return {};
            let b = me(r), v = oe(l), w = me(l) === l, y = await (null == s.isRTL ? void 0 : s.isRTL(u.floating)),
                A = h || (w || !m ? [$e(l)] : Oo(l)), E = "none" !== f;
            !h && E && A.push(...Do(l, m, f, y));
            let x = [l, ...A], T = await Nt(t, g), k = [], I = (null == (o = i.flip) ? void 0 : o.overflows) || [];
            if (c && k.push(T[b]), d) {
                let e = Po(r, a, y);
                k.push(T[e[0]], T[e[1]])
            }
            if (I = [...I, {placement: r, overflows: k}], !k.every((e => e <= 0))) {
                var S, D;
                let e = ((null == (S = i.flip) ? void 0 : S.index) || 0) + 1, t = x[e];
                if (t && ("alignment" !== d || v === oe(t) || I.every((e => e.overflows[0] > 0 && oe(e.placement) === v)))) return {
                    data: {
                        index: e,
                        overflows: I
                    }, reset: {placement: t}
                };
                let n = null == (D = I.filter((e => e.overflows[0] <= 0)).sort(((e, t) => e.overflows[1] - t.overflows[1]))[0]) ? void 0 : D.placement;
                if (!n) switch (p) {
                    case"bestFit": {
                        var L;
                        let e = null == (L = I.filter((e => {
                            if (E) {
                                let t = oe(e.placement);
                                return t === v || "y" === t
                            }
                            return !0
                        })).map((e => [e.placement, e.overflows.filter((e => e > 0)).reduce(((e, t) => e + t), 0)])).sort(((e, t) => e[1] - t[1]))[0]) ? void 0 : L[0];
                        e && (n = e);
                        break
                    }
                    case"initialPlacement":
                        n = l
                }
                if (r !== n) return {reset: {placement: n}}
            }
            return {}
        }
    }
}, Ro = function (e) {
    return void 0 === e && (e = {}), {
        name: "shift", options: e, async fn(t) {
            let {x: n, y: o, placement: r} = t, {
                mainAxis: i = !0, crossAxis: a = !1, limiter: l = {
                    fn: e => {
                        let {x: t, y: n} = e;
                        return {x: t, y: n}
                    }
                }, ...s
            } = at(e, t), u = {x: n, y: o}, c = await Nt(t, s), d = oe(me(r)), h = Ht(d), p = u[h], f = u[d];
            if (i) {
                let e = "y" === h ? "bottom" : "right";
                p = Ct(p + c["y" === h ? "top" : "left"], p, p - c[e])
            }
            if (a) {
                let e = "y" === d ? "bottom" : "right";
                f = Ct(f + c["y" === d ? "top" : "left"], f, f - c[e])
            }
            let m = l.fn({...t, [h]: p, [d]: f});
            return {...m, data: {x: m.x - n, y: m.y - o, enabled: {[h]: i, [d]: a}}}
        }
    }
};

function ct() {
    return typeof window < "u"
}

function ge(e) {
    return Bo(e) ? (e.nodeName || "").toLowerCase() : "#document"
}

function R(e) {
    var t;
    return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
}

function K(e) {
    var t;
    return null == (t = (Bo(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
}

function Bo(e) {
    return !!ct() && (e instanceof Node || e instanceof R(e).Node)
}

function q(e) {
    return !!ct() && (e instanceof Element || e instanceof R(e).Element)
}

function U(e) {
    return !!ct() && (e instanceof HTMLElement || e instanceof R(e).HTMLElement)
}

function No(e) {
    return !(!ct() || typeof ShadowRoot > "u") && (e instanceof ShadowRoot || e instanceof R(e).ShadowRoot)
}

function Pe(e) {
    let {overflow: t, overflowX: n, overflowY: o, display: r} = V(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(r)
}

function qo(e) {
    return ["table", "td", "th"].includes(ge(e))
}

function Ue(e) {
    return [":popover-open", ":modal"].some((t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }))
}

function ft(e) {
    let t = dt(), n = q(e) ? V(e) : e;
    return ["transform", "translate", "scale", "rotate", "perspective"].some((e => !!n[e] && "none" !== n[e])) || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((e => (n.willChange || "").includes(e))) || ["paint", "layout", "strict", "content"].some((e => (n.contain || "").includes(e)))
}

function Vo(e) {
    let t = J(e);
    for (; U(t) && !be(t);) {
        if (ft(t)) return t;
        if (Ue(t)) return null;
        t = J(t)
    }
    return null
}

function dt() {
    return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
}

function be(e) {
    return ["html", "body", "#document"].includes(ge(e))
}

function V(e) {
    return R(e).getComputedStyle(e)
}

function je(e) {
    return q(e) ? {scrollLeft: e.scrollLeft, scrollTop: e.scrollTop} : {scrollLeft: e.scrollX, scrollTop: e.scrollY}
}

function J(e) {
    if ("html" === ge(e)) return e;
    let t = e.assignedSlot || e.parentNode || No(e) && e.host || K(e);
    return No(t) ? t.host : t
}

function Wo(e) {
    let t = J(e);
    return be(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : U(t) && Pe(t) ? t : Wo(t)
}

function ke(e, t, n) {
    var o;
    void 0 === t && (t = []), void 0 === n && (n = !0);
    let r = Wo(e), i = r === (null == (o = e.ownerDocument) ? void 0 : o.body), a = R(r);
    if (i) {
        let e = pt(a);
        return t.concat(a, a.visualViewport || [], Pe(r) ? r : [], e && n ? ke(e) : [])
    }
    return t.concat(r, ke(r, [], n))
}

function pt(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}

function Ko(e) {
    let t = V(e), n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0, r = U(e), i = r ? e.offsetWidth : n,
        a = r ? e.offsetHeight : o, l = _e(n) !== i || _e(o) !== a;
    return l && (n = i, o = a), {width: n, height: o, $: l}
}

function qt(e) {
    return q(e) ? e : e.contextElement
}

function Oe(e) {
    let t = qt(e);
    if (!U(t)) return _(1);
    let n = t.getBoundingClientRect(), {width: o, height: r, $: i} = Ko(t), a = (i ? _e(n.width) : n.width) / o,
        l = (i ? _e(n.height) : n.height) / r;
    return (!a || !Number.isFinite(a)) && (a = 1), (!l || !Number.isFinite(l)) && (l = 1), {x: a, y: l}
}

var Cn = _(0);

function Uo(e) {
    let t = R(e);
    return dt() && t.visualViewport ? {x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop} : Cn
}

function Hn(e, t, n) {
    return void 0 === t && (t = !1), !(!n || t && n !== R(e)) && t
}

function ve(e, t, n, o) {
    void 0 === t && (t = !1), void 0 === n && (n = !1);
    let r = e.getBoundingClientRect(), i = qt(e), a = _(1);
    t && (o ? q(o) && (a = Oe(o)) : a = Oe(e));
    let l = Hn(i, n, o) ? Uo(i) : _(0), s = (r.left + l.x) / a.x, u = (r.top + l.y) / a.y, c = r.width / a.x,
        d = r.height / a.y;
    if (i) {
        let e = R(i), t = o && q(o) ? R(o) : o, n = e, r = pt(n);
        for (; r && o && t !== n;) {
            let e = Oe(r), t = r.getBoundingClientRect(), o = V(r),
                i = t.left + (r.clientLeft + parseFloat(o.paddingLeft)) * e.x,
                a = t.top + (r.clientTop + parseFloat(o.paddingTop)) * e.y;
            s *= e.x, u *= e.y, c *= e.x, d *= e.y, s += i, u += a, n = R(r), r = pt(n)
        }
    }
    return he({width: c, height: d, x: s, y: u})
}

function Vt(e, t) {
    let n = je(e).scrollLeft;
    return t ? t.left + n : ve(K(e)).left + n
}

function jo(e, t, n) {
    void 0 === n && (n = !1);
    let o = e.getBoundingClientRect();
    return {x: o.left + t.scrollLeft - (n ? 0 : Vt(e, o)), y: o.top + t.scrollTop}
}

function Fn(e) {
    let {elements: t, rect: n, offsetParent: o, strategy: r} = e, i = "fixed" === r, a = K(o),
        l = !!t && Ue(t.floating);
    if (o === a || l && i) return n;
    let s = {scrollLeft: 0, scrollTop: 0}, u = _(1), c = _(0), d = U(o);
    if ((d || !d && !i) && (("body" !== ge(o) || Pe(a)) && (s = je(o)), U(o))) {
        let e = ve(o);
        u = Oe(o), c.x = e.x + o.clientLeft, c.y = e.y + o.clientTop
    }
    let h = !a || d || i ? _(0) : jo(a, s, !0);
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - s.scrollLeft * u.x + c.x + h.x,
        y: n.y * u.y - s.scrollTop * u.y + c.y + h.y
    }
}

function Rn(e) {
    return Array.from(e.getClientRects())
}

function Nn(e) {
    let t = K(e), n = je(e), o = e.ownerDocument.body,
        r = X(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth),
        i = X(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight), a = -n.scrollLeft + Vt(e),
        l = -n.scrollTop;
    return "rtl" === V(o).direction && (a += X(t.clientWidth, o.clientWidth) - r), {width: r, height: i, x: a, y: l}
}

function Bn(e, t) {
    let n = R(e), o = K(e), r = n.visualViewport, i = o.clientWidth, a = o.clientHeight, l = 0, s = 0;
    if (r) {
        i = r.width, a = r.height;
        let e = dt();
        (!e || e && "fixed" === t) && (l = r.offsetLeft, s = r.offsetTop)
    }
    return {width: i, height: a, x: l, y: s}
}

function qn(e, t) {
    let n = ve(e, !0, "fixed" === t), o = n.top + e.clientTop, r = n.left + e.clientLeft, i = U(e) ? Oe(e) : _(1);
    return {width: e.clientWidth * i.x, height: e.clientHeight * i.y, x: r * i.x, y: o * i.y}
}

function $o(e, t, n) {
    let o;
    if ("viewport" === t) o = Bn(e, n); else if ("document" === t) o = Nn(K(e)); else if (q(t)) o = qn(t, n); else {
        let n = Uo(e);
        o = {x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height}
    }
    return he(o)
}

function zo(e, t) {
    let n = J(e);
    return !(n === t || !q(n) || be(n)) && ("fixed" === V(n).position || zo(n, t))
}

function Vn(e, t) {
    let n = t.get(e);
    if (n) return n;
    let o = ke(e, [], !1).filter((e => q(e) && "body" !== ge(e))), r = null, i = "fixed" === V(e).position,
        a = i ? J(e) : e;
    for (; q(a) && !be(a);) {
        let t = V(a), n = ft(a);
        !n && "fixed" === t.position && (r = null), (i ? !n && !r : !n && "static" === t.position && r && ["absolute", "fixed"].includes(r.position) || Pe(a) && !n && zo(e, a)) ? o = o.filter((e => e !== a)) : r = t, a = J(a)
    }
    return t.set(e, o), o
}

function Wn(e) {
    let {element: t, boundary: n, rootBoundary: o, strategy: r} = e,
        i = [..."clippingAncestors" === n ? Ue(t) ? [] : Vn(t, this._c) : [].concat(n), o], a = i[0],
        l = i.reduce(((e, n) => {
            let o = $o(t, n, r);
            return e.top = X(o.top, e.top), e.right = Ie(o.right, e.right), e.bottom = Ie(o.bottom, e.bottom), e.left = X(o.left, e.left), e
        }), $o(t, a, r));
    return {width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top}
}

function $n(e) {
    let {width: t, height: n} = Ko(e);
    return {width: t, height: n}
}

function _n(e, t, n) {
    let o = U(t), r = K(t), i = "fixed" === n, a = ve(e, !0, i, t), l = {scrollLeft: 0, scrollTop: 0}, s = _(0);

    function u() {
        s.x = Vt(r)
    }

    if (o || !o && !i) if (("body" !== ge(t) || Pe(r)) && (l = je(t)), o) {
        let e = ve(t, !0, i, t);
        s.x = e.x + t.clientLeft, s.y = e.y + t.clientTop
    } else r && u();
    i && !o && r && u();
    let c = !r || o || i ? _(0) : jo(r, l);
    return {x: a.left + l.scrollLeft - s.x - c.x, y: a.top + l.scrollTop - s.y - c.y, width: a.width, height: a.height}
}

function Bt(e) {
    return "static" === V(e).position
}

function _o(e, t) {
    if (!U(e) || "fixed" === V(e).position) return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return K(e) === n && (n = n.ownerDocument.body), n
}

function Go(e, t) {
    let n = R(e);
    if (Ue(e)) return n;
    if (!U(e)) {
        let t = J(e);
        for (; t && !be(t);) {
            if (q(t) && !Bt(t)) return t;
            t = J(t)
        }
        return n
    }
    let o = _o(e, t);
    for (; o && qo(o) && Bt(o);) o = _o(o, t);
    return o && be(o) && Bt(o) && !ft(o) ? n : o || Vo(e) || n
}

var Kn = async function (e) {
    let t = this.getOffsetParent || Go, n = this.getDimensions, o = await n(e.floating);
    return {
        reference: _n(e.reference, await t(e.floating), e.strategy),
        floating: {x: 0, y: 0, width: o.width, height: o.height}
    }
};

function Un(e) {
    return "rtl" === V(e).direction
}

var jn = {
    convertOffsetParentRelativeRectToViewportRelativeRect: Fn,
    getDocumentElement: K,
    getClippingRect: Wn,
    getOffsetParent: Go,
    getElementRects: Kn,
    getClientRects: Rn,
    getDimensions: $n,
    getScale: Oe,
    isElement: q,
    isRTL: Un
};

function Yo(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}

function zn(e, t) {
    let n, o = null, r = K(e);

    function i() {
        var e;
        clearTimeout(n), null == (e = o) || e.disconnect(), o = null
    }

    return function a(l, s) {
        void 0 === l && (l = !1), void 0 === s && (s = 1), i();
        let u = e.getBoundingClientRect(), {left: c, top: d, width: h, height: p} = u;
        if (l || t(), !h || !p) return;
        let f = {
            rootMargin: -Ke(d) + "px " + -Ke(r.clientWidth - (c + h)) + "px " + -Ke(r.clientHeight - (d + p)) + "px " + -Ke(c) + "px",
            threshold: X(0, Ie(1, s)) || 1
        }, m = !0;

        function g(t) {
            let o = t[0].intersectionRatio;
            if (o !== s) {
                if (!m) return a();
                o ? a(!1, o) : n = setTimeout((() => {
                    a(!1, 1e-7)
                }), 1e3)
            }
            1 === o && !Yo(u, e.getBoundingClientRect()) && a(), m = !1
        }

        try {
            o = new IntersectionObserver(g, {...f, root: r.ownerDocument})
        } catch {
            o = new IntersectionObserver(g, f)
        }
        o.observe(e)
    }(!0), i
}

function Qo(e, t, n, o) {
    void 0 === o && (o = {});
    let {
        ancestorScroll: r = !0,
        ancestorResize: i = !0,
        elementResize: a = "function" == typeof ResizeObserver,
        layoutShift: l = "function" == typeof IntersectionObserver,
        animationFrame: s = !1
    } = o, u = qt(e), c = r || i ? [...u ? ke(u) : [], ...ke(t)] : [];
    c.forEach((e => {
        r && e.addEventListener("scroll", n, {passive: !0}), i && e.addEventListener("resize", n)
    }));
    let d = u && l ? zn(u, n) : null, h = -1, p = null;
    a && (p = new ResizeObserver((e => {
        let [o] = e;
        o && o.target === u && p && (p.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame((() => {
            var e;
            null == (e = p) || e.observe(t)
        }))), n()
    })), u && !s && p.observe(u), p.observe(t));
    let f, m = s ? ve(e) : null;
    return s && function t() {
        let o = ve(e);
        m && !Yo(m, o) && n(), m = o, f = requestAnimationFrame(t)
    }(), n(), () => {
        var e;
        c.forEach((e => {
            r && e.removeEventListener("scroll", n), i && e.removeEventListener("resize", n)
        })), d?.(), null == (e = p) || e.disconnect(), p = null, s && cancelAnimationFrame(f)
    }
}

var Xo = Ro, Jo = Fo, Zo = (e, t, n) => {
    let o = new Map, r = {platform: jn, ...n}, i = {...r.platform, _c: o};
    return Ho(e, t, {...r, platform: i})
};

function en(e, t) {
    let n = () => {
    };
    return function (o) {
        if (n(), !o) return;
        let r = t();
        if (!r || !e.hasAttribute("anchor")) return;
        let i = e.getAttribute("anchor"), a = e.getAttribute("anchor-strategy") || "absolute";
        "absolute" !== a && "fixed" !== a && (console.warn(`[createAnchorUpdater] Invalid anchor strategy "${a}" for element:`, e), a = "absolute"), n = Qo(r, e, (() => {
            Zo(r, e, {strategy: a, placement: i.replace(" ", "-"), middleware: [Jo(), Xo()]}).then((({
                                                                                                         x: t,
                                                                                                         y: n,
                                                                                                         placement: o
                                                                                                     }) => {
                if (!Gn() && "absolute" === a) {
                    let o = null;
                    for (let t = e.parentElement; t; t = t.parentElement) {
                        let e = getComputedStyle(t).position;
                        if ("relative" === e || "absolute" === e || "fixed" === e || "sticky" === e) {
                            o = t;
                            break
                        }
                    }
                    if (o) {
                        let e = o.getBoundingClientRect();
                        t -= e.left + window.scrollX, n -= e.top + window.scrollY
                    }
                }
                let r = `${t}px`, i = `${n}px`;
                switch (o.split("-")[0]) {
                    case"top":
                        i = `calc(${n}px - var(--anchor-gap, 0px))`, r = `calc(${t}px + var(--anchor-offset, 0px))`;
                        break;
                    case"right":
                        r = `calc(${t}px + var(--anchor-gap, 0px))`, i = `calc(${n}px + var(--anchor-offset, 0px))`;
                        break;
                    case"bottom":
                        i = `calc(${n}px + var(--anchor-gap, 0px))`, r = `calc(${t}px + var(--anchor-offset, 0px))`;
                        break;
                    case"left":
                        r = `calc(${t}px - var(--anchor-gap, 0px))`, i = `calc(${n}px + var(--anchor-offset, 0px))`
                }
                Object.assign(e.style, {left: r, top: i, position: a})
            }))
        }))
    }
}

function Gn() {
    return "showPopover" in HTMLElement.prototype && HTMLElement.prototype.showPopover.toString().includes("[native code]")
}

function ne(e, t, n) {
    function o() {
        let t = e.getBoundingClientRect();
        if (0 === t.x && 0 === t.y && 0 === t.width && 0 === t.height) {
            for (let t of e.children) {
                let e = t.getBoundingClientRect();
                if (0 !== e.x || 0 !== e.y || 0 !== e.width || 0 !== e.height) return
            }
            n()
        }
    }

    if (typeof ResizeObserver < "u") {
        let n = new ResizeObserver(o);
        n.observe(e), t.addEventListener("abort", (() => n.disconnect()))
    }
    if (typeof IntersectionObserver < "u") {
        let n = new IntersectionObserver(o);
        n.observe(e), t.addEventListener("abort", (() => n.disconnect()))
    }
}

var ze = !1, Wt = !1;
typeof navigator < "u" && (ze = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), Wt = navigator.userAgent.toLowerCase().includes("firefox"));
var $t = !1;

function De(e, t, n, o, r, i) {
    Yn(e.ownerDocument);
    let a = Se(e), l = en(e, n), s = Q();
    e.setAttribute("popover", "");
    let u = t();

    function c() {
        e.hasAttribute("open") && e.hidePopover()
    }

    u && (u.setAttribute("type", "button"), u.setAttribute("aria-haspopup", "true"), u.setAttribute("aria-controls", e.id), u.setAttribute("aria-expanded", "false"), u.id && e.setAttribute("aria-labelledby", u.id)), e.hasAttribute("open") && queueMicrotask((() => e.showPopover())), e.addEventListener("beforetoggle", (t => {
        let n = t;
        l("open" === n.newState);
        let o = e.hasAttribute("open");
        "open" !== n.newState || o ? "closed" === n.newState && o && e.removeAttributeNoCallbacks("open") : e.setAttributeNoCallbacks("open", ""), "open" === n.newState ? (u?.setAttribute("aria-expanded", "true"), r?.(), $t = "" === e.getAttribute("popover")) : (u?.setAttribute("aria-expanded", "false"), i?.(), $t = !1), "closed" === n.oldState && "open" === n.newState ? (ze && (s.dispose(), s = Q()), a.start("in")) : "open" === n.oldState && "closed" === n.newState && (ze && s.style(e, "transition-property", "none"), a.start("out"))
    }), {signal: o}), ne(e, o, c), u && ne(u, o, c), o.addEventListener("abort", (() => a.abort()))
}

var tn = new WeakSet;

function Yn(e) {
    if (tn.has(e)) return;
    tn.add(e);
    let t = null;
    e.addEventListener("mousedown", (() => {
        Wt || ze || !$t || (e.body.setAttribute("tabindex", "-1"), t && clearTimeout(t), t = setTimeout((() => e.body.removeAttribute("tabindex"))))
    }), {capture: !0})
}

function j(e, t, n, o) {
    function r() {
        let n = e.getBoundingClientRect();
        o.style.setProperty(t, n.width + "px")
    }

    let i = e.ownerDocument, a = new ResizeObserver(r);
    a.observe(e), i.addEventListener("transitionend", r), n.addEventListener("abort", (() => {
        a.disconnect(), i.removeEventListener("transitionend", r)
    }))
}

var Qn = 0;

function k(e) {
    return `${e}-${Qn++}`
}

var Xn = 200;

function re(e, t, n, o) {
    Jn(), e.addEventListener(t, (e => {
        null !== _t && Date.now() - _t < Xn || o(e)
    }), {passive: !0, signal: n})
}

var _t = null, nn = !1;

function Jn() {
    nn || (nn = !0, document.addEventListener("keydown", (() => {
        _t = Date.now()
    }), {capture: !0}))
}

var mt = class extends Map {
    constructor(e) {
        super(), this.factory = e
    }

    get(e) {
        let t = super.get(e);
        return void 0 === t && (t = this.factory(e, this), this.set(e, t)), t
    }
};

function Ge(e) {
    return Kt(e) && "tabIndex" in e
}

function Kt(e) {
    return Zn(e) && "tagName" in e
}

function Ut(e) {
    return Kt(e) && "accessKey" in e
}

function Zn(e) {
    return "object" == typeof e && null !== e && "nodeType" in e
}

function rn(e) {
    return Kt(e) && "style" in e
}

function sn(e) {
    return Ut(e) && "INPUT" === e.nodeName
}

var ln = new mt((() => ({referenceCounter: 0, d: Q()})));

function ht(e) {
    let t = ln.get(e);
    if (t.referenceCounter++, 1 === t.referenceCounter) {
        let n = [rr(), or(), tr()];
        n.forEach((({before: n}) => n({doc: e, d: t.d}))), n.forEach((({after: n}) => n({doc: e, d: t.d})))
    }
    let n = !1;
    return () => {
        n || (n = !0, t.referenceCounter--, !(t.referenceCounter > 0) && (t.d.dispose(), ln.delete(e)))
    }
}

function tr() {
    return {
        before({doc: e, d: t}) {
            t.style(e.documentElement, "overflow", "hidden")
        }, after() {
        }
    }
}

function or() {
    let e;
    return {
        before({doc: t}) {
            let n = t.documentElement, o = t.defaultView ?? window;
            e = Math.max(0, o.innerWidth - n.clientWidth), n.style.setProperty("--el-top-layer-scrollbar-offset", "0px")
        }, after({doc: t, d: n}) {
            let o = t.documentElement, r = Math.max(0, o.clientWidth - o.offsetWidth), i = Math.max(0, e - r);
            n.style(o, "paddingRight", `${i}px`), n.add((() => {
                o.style.setProperty("--el-top-layer-scrollbar-offset", `-${i}px`)
            }))
        }
    }
}

function nr() {
    return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0
}

function rr() {
    return nr() ? {
        before({doc: e, d: t}) {
            function n(e) {
                return !!e.closest("[popover], dialog > *")
            }

            t.microTask((() => {
                if ("auto" !== window.getComputedStyle(e.documentElement).scrollBehavior) {
                    let n = Q();
                    n.style(e.documentElement, "scrollBehavior", "auto"), t.add((() => t.microTask((() => n.dispose()))))
                }
                let o = window.scrollY ?? window.pageYOffset, r = null;
                t.addEventListener(e, "click", (t => {
                    if (Ge(t.target)) try {
                        let o = t.target.closest("a");
                        if (!o) return;
                        let {hash: i} = new URL(o.href), a = e.querySelector(i);
                        Ge(a) && !n(a) && (r = a)
                    } catch {
                    }
                }), !0), t.addEventListener(e, "touchstart", (e => {
                    if (Ge(e.target) && rn(e.target)) if (n(e.target)) {
                        let o = e.target;
                        for (; o.parentElement && n(o.parentElement);) o = o.parentElement;
                        t.style(o, "overscrollBehavior", "contain")
                    } else t.style(e.target, "touchAction", "none")
                })), t.addEventListener(e, "touchmove", (e => {
                    if (Ge(e.target)) {
                        if (sn(e.target)) return;
                        if (n(e.target)) {
                            let t = e.target;
                            for (; t.parentElement && "" !== t.dataset.tailwindplusPortal && !(t.scrollHeight > t.clientHeight || t.scrollWidth > t.clientWidth);) t = t.parentElement;
                            "" === t.dataset.tailwindplusPortal && e.preventDefault()
                        } else e.preventDefault()
                    }
                }), {passive: !1}), t.add((() => {
                    let e = window.scrollY ?? window.pageYOffset;
                    o !== e && window.scrollTo(0, o), r && r.isConnected && (r.scrollIntoView({block: "nearest"}), r = null)
                }))
            }))
        }, after() {
        }
    } : {
        before() {
        }, after() {
        }
    }
}

function gt(e, t) {
    let n = null;
    e.addEventListener("toggle", (t => {
        "open" === t.newState ? n || (n = ht(e.ownerDocument)) : n && (n(), n = null)
    }), {signal: t}), t.addEventListener("abort", (() => {
        n && (n(), n = null)
    }))
}

var D, Ye, jt = class extends x {
    constructor() {
        super(...arguments), I(this, D, []), I(this, Ye, null)
    }

    mount(e) {
        let t = this.getInput(), n = this.getButton(), o = this.getOptions();
        t.id || (t.id = k("autocomplete-input")), n && (n.id || (n.id = k("autocomplete-button"))), o.id || (o.id = k("autocomplete-listbox")), De(o, (() => this.getButton()), (() => this.getInput()), e, (() => this.onBeforeOpen()), (() => this.onBeforeClose())), gt(o, e), t.setAttribute("role", "combobox"), t.setAttribute("aria-autocomplete", "list"), t.setAttribute("aria-expanded", "false"), t.setAttribute("aria-controls", o.id), t.setAttribute("aria-activedescendant", ""), t.setAttribute("autocomplete", "off"), n && (n.setAttribute("type", "button"), n.setAttribute("tabindex", "-1"), n.setAttribute("aria-expanded", "false"), n.setAttribute("aria-haspopup", "listbox"), n.setAttribute("popovertarget", o.id)), o.setAttribute("role", "listbox"), o.setAttribute("popover", "manual");
        let r = {passive: !0, signal: e}, i = this;

        function a() {
            for (let t of o.getItems()) "option" !== t.getAttribute("role") && (t.id || (t.id = k("option")), t.setAttribute("role", "option"), t.setAttribute("aria-selected", "false"), t.setAttribute("tabIndex", "-1"), t.addEventListener("click", (() => i.selectOption(t)), r), re(t, "mouseover", e, (() => i.setActiveItem(t, !1))), re(t, "mouseout", e, (() => i.clearActiveItem())))
        }

        a();
        let l = new MutationObserver(a);
        l.observe(this, {
            attributes: !1,
            childList: !0,
            subtree: !0
        }), n && j(n, "--button-width", e, this), j(t, "--input-width", e, this), t.addEventListener("input", (() => {
            t.matches(":disabled") || (this.filterOptions(), f(this, D).length > 0 ? o.hasAttribute("open") || o.showPopover() : o.hidePopover())
        }), {signal: e});
        let s = () => {
            t.matches(":disabled") || (t.focus(), o.hasAttribute("open") ? o.hidePopover() : (this.filterOptions(), f(this, D).length > 0 && o.showPopover()))
        };
        t.addEventListener("pointerdown", s, {signal: e}), n && (n.addEventListener("pointerdown", (e => {
            e.preventDefault(), s()
        }), {signal: e}), n.addEventListener("click", (e => {
            e.preventDefault(), e.stopImmediatePropagation()
        }), {signal: e})), t.addEventListener("blur", (({relatedTarget: e}) => {
            e && this.contains(e) || o.hidePopover()
        }), {signal: e}), t.addEventListener("keydown", (e => {
            if (!t.matches(":disabled")) switch (e.key) {
                case"ArrowDown":
                    e.preventDefault(), o.hasAttribute("open") || (0 === f(this, D).length && this.filterOptions(), f(this, D).length > 0 && o.showPopover()), this.goToItem(3);
                    break;
                case"ArrowUp":
                    e.preventDefault(), o.hasAttribute("open") || (0 === f(this, D).length && this.filterOptions(), f(this, D).length > 0 && o.showPopover()), this.goToItem(2);
                    break;
                case"Home":
                case"PageUp":
                    return o.hasAttribute("open") ? (e.preventDefault(), e.stopPropagation(), this.goToItem(0)) : void 0;
                case"End":
                case"PageDown":
                    return o.hasAttribute("open") ? (e.preventDefault(), e.stopPropagation(), this.goToItem(1)) : void 0;
                case"Enter": {
                    let t = this.getActiveItem();
                    t && (e.preventDefault(), this.selectOption(t)), o.hasAttribute("open") && (e.preventDefault(), o.hidePopover());
                    break
                }
                case"Escape":
                    if (!o.hasAttribute("open")) return;
                    e.preventDefault(), o.hidePopover();
                    break;
                case"Tab":
                    o.hidePopover()
            }
        }), {signal: e});
        let u = Array.from(o.querySelectorAll("el-option[disabled]"));
        for (let e of u) e.setAttribute("aria-disabled", "true"), e.setAttribute("aria-selected", "false");
        o.addEventListener("click", (e => e.stopPropagation())), e.addEventListener("abort", (() => {
            l.disconnect()
        }))
    }

    getInput() {
        let e = this.querySelector("input");
        if (!e) throw new Error("`<el-autocomplete>` must contain an input element.");
        return e
    }

    getButton() {
        return this.querySelector("button")
    }

    getOptions() {
        let e = this.querySelector("el-options");
        if (!e) throw new Error("`<el-autocomplete>` must contain a `<el-options>` element.");
        return e
    }

    filterOptions() {
        let e = this.getInput().value.toLowerCase();
        if (f(this, Ye) !== e) {
            this.clearActiveItem(), S(this, Ye, e), S(this, D, []);
            for (let t of this.getOptions().getItems()) {
                let n = t.getAttribute("value")?.toLowerCase() || "";
                "" === e || n.includes(e) ? (f(this, D).push(t), t.removeAttribute("hidden"), t.removeAttribute("aria-hidden")) : (t.setAttribute("hidden", ""), t.setAttribute("aria-hidden", "true"))
            }
        }
    }

    getActiveItem() {
        let e = this.getInput().getAttribute("aria-activedescendant");
        return e ? document.getElementById(e) : null
    }

    goToItem(e) {
        if (0 === f(this, D).length) return;
        let t = this.getActiveItem(), n = t ? f(this, D).indexOf(t) : null;
        switch (-1 === n && (n = null), e) {
            case 0:
                this.setActiveItem(f(this, D)[0]);
                break;
            case 1:
                this.setActiveItem(f(this, D)[f(this, D).length - 1]);
                break;
            case 2:
                if (null === n) {
                    this.goToItem(1);
                    break
                }
                this.setActiveItem(f(this, D)[Math.max(0, n - 1)]);
                break;
            case 3:
                if (null === n) {
                    this.goToItem(0);
                    break
                }
                this.setActiveItem(f(this, D)[Math.min(f(this, D).length - 1, n + 1)])
        }
    }

    setActiveItem(e, t = !0) {
        let n = this.getInput(), o = this.getActiveItem();
        null !== o && o.setAttribute("aria-selected", "false"), e.setAttribute("aria-selected", "true"), n.setAttribute("aria-activedescendant", e.id), t && e.scrollIntoView({block: "nearest"})
    }

    clearActiveItem() {
        let e = this.getInput(), t = this.getActiveItem();
        null !== t && t.setAttribute("aria-selected", "false"), e.setAttribute("aria-activedescendant", "")
    }

    selectOption(e) {
        let t = this.getInput(), n = e.getAttribute("value");
        n && (t.value = n, t.dispatchEvent(new Event("input", {
            bubbles: !0,
            cancelable: !0
        })), t.dispatchEvent(new Event("change", {bubbles: !0, cancelable: !0})), this.getOptions().hidePopover())
    }

    onBeforeOpen() {
        let e = this.getInput(), t = this.getButton();
        e.setAttribute("aria-expanded", "true"), t?.setAttribute("aria-expanded", "true")
    }

    onBeforeClose() {
        let e = this.getInput(), t = this.getButton();
        e.setAttribute("aria-expanded", "false"), t?.setAttribute("aria-expanded", "false"), this.clearActiveItem()
    }
};
D = new WeakMap, Ye = new WeakMap, T("el-autocomplete", jt);
var ie = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e => `${e}:not([tabindex='-1'])`)).join(","),
    gi = ["[data-autofocus]"].map((e => `${e}:not([tabindex='-1'])`)).join(","), bi = ["textarea", "input"].join(","),
    an = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;

function un(e) {
    let t = e.innerText ?? "", n = e.cloneNode(!0);
    if (!Ut(n)) return t;
    let o = !1;
    for (let e of n.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) e.remove(), o = !0;
    let r = o ? n.innerText ?? "" : t;
    return an.test(r) && (r = r.replace(an, "")), r
}

function cn(e) {
    let t = e.getAttribute("aria-label");
    if ("string" == typeof t) return t.trim();
    let n = e.getAttribute("aria-labelledby");
    if (n) {
        let e = n.split(" ").map((e => {
            let t = document.getElementById(e);
            if (t) {
                let e = t.getAttribute("aria-label");
                return "string" == typeof e ? e.trim() : un(t).trim()
            }
            return null
        })).filter(Boolean);
        if (e.length > 0) return e.join(", ")
    }
    return un(e).trim()
}

var M, Qe, Xe, W, bt, Me, zt = class extends x {
    constructor() {
        super(...arguments), I(this, W), I(this, M, []), I(this, Qe, null), I(this, Xe, (({
                                                                                              query: e,
                                                                                              content: t
                                                                                          }) => t.toLocaleLowerCase().includes(e.toLocaleLowerCase().trim())))
    }

    mount(e) {
        let t = this.getInput(), n = this.getItems();
        t.id || (t.id = k("command-input")), n.id || (n.id = k("command-items")), t.setAttribute("role", "combobox"), t.setAttribute("aria-autocomplete", "list"), t.setAttribute("autocomplete", "off"), t.setAttribute("aria-controls", n.id), n.setAttribute("role", "listbox");
        let o = this;

        function r() {
            var t;
            for (let t of n.getItems()) "option" !== t.getAttribute("role") && (t.id || (t.id = k("item")), t.setAttribute("role", "option"), t.setAttribute("tabIndex", "-1"), t.setAttribute("aria-selected", "false"), t.hasAttribute("disabled") && t.setAttribute("aria-disabled", "true"), re(t, "mouseover", e, (() => {
                var e;
                return F(e = o, W, Me).call(e, t, !1)
            })));
            F(t = o, W, bt).call(t, !0)
        }

        r();
        let i = new MutationObserver(r);
        i.observe(this, {
            attributes: !1,
            childList: !0,
            subtree: !0
        }), j(t, "--input-width", e, this), t.addEventListener("input", (() => F(this, W, bt).call(this)), {signal: e}), t.addEventListener("keydown", (e => {
            switch (e.key) {
                case"ArrowDown":
                    e.preventDefault(), this.goToItem(3);
                    break;
                case"ArrowUp":
                    e.preventDefault(), this.goToItem(2);
                    break;
                case"Home":
                case"PageUp":
                    return e.preventDefault(), e.stopPropagation(), this.goToItem(0);
                case"End":
                case"PageDown":
                    return e.preventDefault(), e.stopPropagation(), this.goToItem(1);
                case"Enter": {
                    let t = this.getActiveItem();
                    t && (e.preventDefault(), t.click());
                    break
                }
            }
        }), {signal: e}), e.addEventListener("abort", (() => {
            i.disconnect()
        }))
    }

    getInput() {
        let e = this.querySelector("input");
        if (!e) throw new Error("`<el-command-palette>` must contain an input element.");
        return e
    }

    getItems() {
        let e = this.querySelector("el-command-list");
        if (!e) throw new Error("`<el-command-palette>` must contain a `<el-command-list>` element.");
        return e
    }

    getGroups() {
        return this.getItems().querySelectorAll("el-command-group")
    }

    getSuggestions() {
        return this.querySelector("el-defaults")
    }

    getActiveItem() {
        let e = this.getInput().getAttribute("aria-activedescendant");
        return e ? document.getElementById(e) : null
    }

    goToItem(e) {
        if (0 === f(this, M).length) return;
        let t = this.getActiveItem(), n = t ? f(this, M).indexOf(t) : null;
        switch (-1 === n && (n = null), e) {
            case 0:
                F(this, W, Me).call(this, f(this, M)[0]);
                break;
            case 1:
                F(this, W, Me).call(this, f(this, M)[f(this, M).length - 1]);
                break;
            case 2:
                if (null === n) {
                    this.goToItem(1);
                    break
                }
                F(this, W, Me).call(this, f(this, M)[Math.max(0, n - 1)]);
                break;
            case 3:
                if (null === n) {
                    this.goToItem(0);
                    break
                }
                F(this, W, Me).call(this, f(this, M)[Math.min(f(this, M).length - 1, n + 1)])
        }
    }

    clearActiveItem() {
        let e = this.getInput(), t = this.getActiveItem();
        if (null !== t) {
            t.setAttribute("aria-selected", "false");
            let e = this.querySelector(`el-command-preview[for="${t.id}"]`);
            e && e.setAttribute("hidden", "")
        }
        e.removeAttribute("aria-activedescendant"), this.dispatchEvent(new CustomEvent("change", {
            detail: {relatedTarget: null},
            bubbles: !1,
            cancelable: !1
        }))
    }

    reset() {
        let e = this.getInput();
        e.value = "", e.dispatchEvent(new Event("input", {
            bubbles: !0,
            cancelable: !0
        })), e.dispatchEvent(new Event("change", {
            bubbles: !0,
            cancelable: !0
        })), F(this, W, bt).call(this, !0), this.clearActiveItem()
    }

    setFilterCallback(e) {
        S(this, Xe, e)
    }
};
M = new WeakMap, Qe = new WeakMap, Xe = new WeakMap, W = new WeakSet, bt = function (e = !1) {
    let t = this.getItems(), n = this.getInput().value ?? "";
    S(this, M, []);
    for (let e of t.getItems()) {
        if (e.closest("el-defaults")) continue;
        let t = cn(e) ?? "";
        "" !== n && f(this, Xe).call(this, {
            query: n,
            node: e,
            content: t
        }) ? (f(this, M).push(e), e.removeAttribute("hidden"), e.removeAttribute("aria-hidden")) : (e.setAttribute("hidden", ""), e.setAttribute("aria-hidden", "true"))
    }
    for (let e of this.getGroups()) e.getItems().some((e => !e.hasAttribute("hidden"))) ? e.removeAttribute("hidden") : e.setAttribute("hidden", "");
    let o = this.getSuggestions();
    o && ("" === n ? (o.removeAttribute("hidden"), S(this, M, o.getItems())) : o.setAttribute("hidden", ""));
    let r = this.querySelector("el-no-results");
    r && ("" === n || f(this, M).length > 0 ? r.setAttribute("hidden", "") : r.removeAttribute("hidden")), 0 === f(this, M).length ? t.setAttribute("hidden", "") : t.removeAttribute("hidden"), (!e || "" !== n) && (0 === f(this, M).length ? this.clearActiveItem() : f(this, Qe) !== n && this.goToItem(0), S(this, Qe, n))
}, Me = function (e, t = !0) {
    let n = this.getInput(), o = this.getActiveItem();
    if (e === o) return;
    if (null !== o) {
        o.setAttribute("aria-selected", "false");
        let e = this.querySelector(`el-command-preview[for="${o.id}"]`);
        e && e.setAttribute("hidden", "")
    }
    e.setAttribute("aria-selected", "true"), n.setAttribute("aria-activedescendant", e.id);
    let r = this.querySelector(`el-command-preview[for="${e.id}"]`);
    r && r.removeAttribute("hidden"), t && e.scrollIntoView({block: "nearest"}), this.dispatchEvent(new CustomEvent("change", {
        detail: {relatedTarget: e},
        bubbles: !1,
        cancelable: !1
    }))
};
var Gt = class extends x {
    getItems() {
        return Array.from(this.querySelectorAll(`${ie},[role="option"]`))
    }
}, Yt = class extends x {
    getItems() {
        return Array.from(this.querySelectorAll(`${ie},[role="option"]`))
    }
}, Qt = class extends x {
}, Xt = class extends x {
}, Jt = class extends x {
    getItems() {
        return Array.from(this.querySelectorAll(`${ie},[role="option"]`))
    }
};
T("el-command-palette", zt), T("el-command-list", Gt), T("el-defaults", Yt), T("el-no-results", Qt), T("el-command-group", Jt), T("el-command-preview", Xt);
var z = [];
it((() => {
    function e(e) {
        if (e.target === document.body || z[0] === e.target) return;
        let t = e.target;
        t && "closest" in t && (t = t.closest(ie), z.unshift(t ?? e.target), (z = z.filter((e => null != e && e.isConnected))).splice(10))
    }

    window.addEventListener("click", e, {capture: !0}), window.addEventListener("pointerdown", e, {capture: !0}), window.addEventListener("focus", e, {capture: !0}), document.body.addEventListener("click", e, {capture: !0}), document.body.addEventListener("pointerdown", e, {capture: !0}), document.body.addEventListener("focus", e, {capture: !0})
}));
var Ce = null;
typeof globalThis.window < "u" && (Ce = HTMLDialogElement.prototype.close, Object.defineProperties(HTMLDialogElement.prototype, {
    close: {
        value() {
            let e = this.closest("el-dialog");
            if (!(e instanceof He)) return Ce?.apply(this, arguments);
            let t = e.beforeClose();
            if (!0 === t) return Ce?.apply(this, arguments);
            !1 !== t && t.then((e => e ? Ce?.apply(this, arguments) : null)).catch(console.error)
        }
    }
}), document.addEventListener("command", (e => {
    let t = e.target;
    if (!(t instanceof HTMLDialogElement && "command" in e && "close" === e.command)) return;
    let n = t.closest("el-dialog");
    if (!(n instanceof He)) return;
    let o = n.beforeClose();
    !0 !== o && (e.stopImmediatePropagation(), e.preventDefault(), !1 !== o && o.then((e => e ? Ce?.apply(t) : null)).catch(console.error))
}), !0));
var G, se, Fe, we, Je, Zt, He = class extends x {
    constructor() {
        super(...arguments), I(this, Je), I(this, G, null), I(this, se, null), I(this, Fe, !0), I(this, we, Se(this, (() => Array.from(this.querySelectorAll("el-dialog-panel,el-dialog-backdrop")))))
    }

    mount(e) {
        let t = this.getNativeDialog();
        t.style.setProperty("right", "var(--el-top-layer-scrollbar-offset, 0px)");
        let n = this.hasAttribute("open");
        for (let e of F(this, Je, Zt).call(this)) e.setAttribute("aria-expanded", n.toString());
        sr(t, e, (e => {
            t.close(), e.preventDefault()
        })), ne(this.querySelector("el-dialog-panel") ?? t, e, (() => {
            this.hasAttribute("open") && t.close()
        }));
        let o = null;
        t.addEventListener("beforetoggle", (e => {
            let t = e;
            "open" === t.newState && "closed" === t.oldState && this.beforeOpen();
            let n = this.hasAttribute("open");
            if ("open" !== t.newState || n ? "closed" === t.newState && n && (this.dispatchEvent(new CustomEvent("close", {
                bubbles: !1,
                cancelable: !1
            })), this.removeAttribute("open")) : (this.dispatchEvent(new CustomEvent("open", {
                bubbles: !1,
                cancelable: !1
            })), this.setAttribute("open", "")), "open" === t.newState && "closed" === t.oldState) z.length > 0 && !o && (o = z[0]); else if ("closed" === t.newState && "open" === t.oldState) {
                let e = f(this, Fe);
                setTimeout((() => {
                    e ? (o && o !== document.activeElement && o.isConnected && Le(o), o = null) : o && o === document.activeElement && o.isConnected && "blur" in o && "function" == typeof o.blur && o.blur()
                }))
            }
        }), {signal: e}), e.addEventListener("abort", (() => f(this, we).abort())), this.hasAttribute("open") && t.showModal()
    }

    onAttributeChange(e, t, n) {
        switch (e) {
            case"open": {
                let e = this.getNativeDialog();
                for (let e of F(this, Je, Zt).call(this)) e.setAttribute("aria-expanded", null !== n ? "true" : "false");
                null === n ? e.close() : e.showModal();
                break
            }
        }
    }

    getNativeDialog() {
        let e = this.querySelector("dialog");
        if (!e) throw new Error("[ElDialog] No `<dialog>` element found");
        return e
    }

    beforeOpen() {
        S(this, Fe, !0), f(this, G) && (f(this, G).abort(), S(this, G, null)), f(this, se) || S(this, se, ht(this.ownerDocument)), f(this, we) && f(this, we).start("in")
    }

    beforeClose() {
        if (f(this, se) && (f(this, se).call(this), S(this, se, null)), f(this, G)) return !1;
        S(this, G, new AbortController);
        let e = f(this, G).signal;
        return new Promise((t => {
            f(this, we)?.start("out", (() => {
                e.aborted || (S(this, G, null), requestAnimationFrame((() => {
                    let e = this.getNativeDialog(), t = e.style.cssText;
                    e.style.cssText = t + "transition-duration: 0 !important;", Ce?.apply(e), requestAnimationFrame((() => {
                        e.style.cssText = t
                    }))
                })), t(!0))
            }))
        }))
    }

    show() {
        this.getNativeDialog().showModal()
    }

    hide({restoreFocus: e = !0} = {}) {
        S(this, Fe, e), this.getNativeDialog().close()
    }
};
G = new WeakMap, se = new WeakMap, Fe = new WeakMap, we = new WeakMap, Je = new WeakSet, Zt = function () {
    return document.querySelectorAll(`[commandfor="${this.getNativeDialog().id}"]`)
}, H(He, "observedAttributes", ["open"]);
var eo = class extends x {
    mount(e) {
        ir(this, e, (() => {
            let e = this.getDialog().getNativeDialog();
            e.hasAttribute("open") && e.close()
        }))
    }

    getDialog() {
        let e = this.closest("el-dialog");
        if (!e) throw new Error("[ElDialogPanel] No `<el-dialog>` parent found");
        return e
    }
}, to = class extends x {
    mount() {
        this.setAttribute("inert", "")
    }
};

function ir(e, t, n) {
    document.addEventListener("click", (t => {
        if (t.target === e) {
            let {clientX: o, clientY: r} = t, i = e.getBoundingClientRect();
            if (o >= i.left && o <= i.right && r >= i.top && r <= i.bottom) return;
            return void n(t)
        }
        let o = e.closest("dialog");
        o && o.contains(t.target) && !e.contains(t.target) ? n(t) : t.target !== t.target.ownerDocument.documentElement || n(t)
    }), {signal: t, capture: !0})
}

function sr(e, t, n) {
    e.addEventListener("keydown", (e => {
        "Escape" === e.key && (e.defaultPrevented || n(e))
    }), {signal: t})
}

T("el-dialog", He), T("el-dialog-panel", eo), T("el-dialog-backdrop", to);
var Re, Ze, oo, vt = class extends x {
    constructor() {
        super(...arguments), I(this, Ze), I(this, Re, Se(this))
    }

    mount(e) {
        this.id || (this.id = k("disclosure")), this.hasAttribute("hidden") ? this.removeAttributeNoCallbacks("open") : this.setAttributeNoCallbacks("open", "");
        let t = () => {
            this.hasAttribute("open") && this.hide()
        }, n = !this.hasAttribute("hidden");
        for (let o of F(this, Ze, oo).call(this)) ne(o, e, t), o.setAttribute("aria-expanded", n.toString()), o.setAttribute("aria-controls", this.id);
        this.addEventListener("command", (e => {
            if (e.target instanceof HTMLElement && "command" in e) switch (e.command) {
                case"--show":
                    this.show(), e.preventDefault();
                    break;
                case"--hide":
                    this.hide(), e.preventDefault();
                    break;
                case"--toggle":
                    this.toggle(), e.preventDefault()
            }
        }), {signal: e}), ne(this, e, t), e.addEventListener("abort", (() => f(this, Re).abort()))
    }

    onAttributeChange(e, t, n) {
        switch (e) {
            case"hidden":
                null === n ? this.setAttributeNoCallbacks("open", "") : this.removeAttributeNoCallbacks("open");
                for (let e of F(this, Ze, oo).call(this)) e.setAttribute("aria-expanded", null === n ? "true" : "false");
                null === n ? f(this, Re).start("in") : f(this, Re).start("out");
                break;
            case"open":
                null === n ? this.hide() : this.show()
        }
    }

    show() {
        this.removeAttribute("hidden")
    }

    hide() {
        this.setAttribute("hidden", "")
    }

    toggle() {
        this.hasAttribute("hidden") ? this.show() : this.hide()
    }
};

function wt(e, t, n, o, r) {
    let i = null;
    for (let n of t) n.addEventListener("pointerdown", (t => {
        0 === t.button && e.classList.contains(":popover-open") && (i = Date.now() + 100)
    }), {signal: o, capture: !0});
    e.ownerDocument.addEventListener("focusin", (o => {
        if (!n.hasAttribute("open")) return;
        let a = o.target, l = o.relatedTarget;
        null !== a && (i && Date.now() < i || e.contains(a) || t.some((e => e.contains(a))) || r(l))
    }), {signal: o})
}

Re = new WeakMap, Ze = new WeakSet, oo = function () {
    return document.querySelectorAll(`[commandfor="${this.id}"]`)
}, H(vt, "observedAttributes", ["hidden", "open"]), T("el-disclosure", vt);
var lr = 200;

function Et(e, t, n) {
    let o = null, r = "", i = null, a = null;
    e.id || (e.id = k(t.role));
    let l = t.getButton();

    function s() {
        let e = t.getItems(), o = {passive: !0, signal: n}, r = "menu" === t.role ? "menuitem" : "option";
        for (let i of e) i.getAttribute("role") !== r && (i.id || (i.id = k("item")), i.setAttribute("role", r), i.setAttribute("tabIndex", "-1"), i.addEventListener("click", (() => t.onItemClick(i)), o), re(i, "mouseover", n, (() => p(i, !1))), re(i, "mouseout", n, (() => f())))
    }

    l.id || (l.id = k(`${t.role}-button`)), De(e, (() => t.getButton()), (() => t.getButton()), n, (() => t.onBeforeOpen()), (() => {
        t.onBeforeClose(), f(), r = "", i && (clearTimeout(i), i = null)
    })), gt(e, n), e.setAttribute("popover", "manual"), e.setAttribute("role", t.role), l.setAttribute("popovertarget", e.id), l.setAttribute("aria-haspopup", t.role), e.addEventListener("click", (e => e.stopPropagation())), s();
    let u = new MutationObserver(s);
    u.observe(e, {attributes: !1, childList: !0, subtree: !0}), wt(e, [l], e, n, (t => {
        null === t && (a = Date.now() + 100), e.hidePopover()
    }));
    let c = null, d = !1;
    l.addEventListener("pointerdown", (t => {
        if (0 === t.button && !l.matches(":disabled")) {
            if ("touch" === t.pointerType) return void (d = !0);
            e.togglePopover(), c = Date.now()
        }
    }), {signal: n}), document.addEventListener("pointerup", (t => {
        if (0 === t.button && !l.matches(":disabled") && e.hasAttribute("open")) {
            if (Date.now() - (c ?? 0) > lr) {
                let n = t.composedPath();
                if (n.includes(e)) {
                    if (null !== c) {
                        let e = m();
                        e && e.click()
                    }
                    return
                }
                for (let t of n) if (t instanceof Element && (t.getAttribute("commandfor") || t.getAttribute("popovertarget")) === e.id) return;
                e.hidePopover()
            }
            c = null
        }
    }), {signal: n, capture: !0}), l.addEventListener("click", (e => {
        d ? d = !1 : (e.preventDefault(), e.stopPropagation())
    }), {signal: n});
    let h = null;

    function p(t, n = !0) {
        let r = m();
        null !== r && r.setAttribute("tabIndex", "-1"), e.removeAttribute("tabIndex"), t.setAttribute("tabIndex", "0"), t.focus({preventScroll: !0}), o = t, n && t.scrollIntoView({block: "nearest"})
    }

    function f() {
        let t = m();
        null !== t && t.setAttribute("tabIndex", "-1"), o = null, e.hasAttribute("open") && (e.setAttribute("tabIndex", "0"), e.focus())
    }

    function m() {
        return o
    }

    function g(e, n = !1) {
        if ("" === e) return null;
        let o = t.getItems(), r = e.toLowerCase(), i = m(), a = i ? o.indexOf(i) : -1;
        if (!n && i && -1 !== a && (i.textContent?.trim().toLowerCase() || "").startsWith(r)) return i;
        for (let e = a + 1; e < o.length; e++) if ((o[e].textContent?.trim().toLowerCase() || "").startsWith(r)) return o[e];
        for (let e = 0; e <= a; e++) if ((o[e].textContent?.trim().toLowerCase() || "").startsWith(r)) return o[e];
        return null
    }

    return e.addEventListener("beforetoggle", (e => {
        let t = e;
        "open" === t.newState && "closed" === t.oldState && z.length > 0 && !h && (h = z[0])
    }), {signal: n}), e.addEventListener("toggle", (t => {
        let n = t;
        "closed" === n.newState && "open" === n.oldState && setTimeout((() => {
            !e.contains(document.activeElement) && document.activeElement !== document.body || a && Date.now() < a || (h && h !== document.activeElement && h.isConnected && Le(h), h = null)
        }))
    }), {signal: n}), n.addEventListener("abort", (() => {
        i && (clearTimeout(i), i = null), u.disconnect()
    })), {
        ignoreNextFocusRestoration: () => a = Date.now() + 100,
        setActiveItem: p,
        clearActiveItem: f,
        getActiveItem: m,
        findItemBySearchQuery: g,
        handleSearchKey: function (e) {
            let t = "" === r;
            i && (clearTimeout(i), i = null), r += e.toLowerCase();
            let n = g(r, t);
            n && p(n, !0), i = setTimeout((() => {
                r = "", i = null
            }), 350)
        },
        hasActiveSearchQuery: function () {
            return "" !== r
        }
    }
}

var Ee, Ne, P, yt = class extends x {
    constructor() {
        super(...arguments), I(this, Ee, this.attachInternals()), I(this, Ne, ""), I(this, P, null)
    }

    mount(e) {
        let t = this.getOptions();
        this.value = this.getAttribute("value") ?? this.value ?? "";
        let n = this.getButton();
        n.id || (n.id = k("select-button")), j(n, "--button-width", e, this), n.addEventListener("keydown", (e => {
            if (!n.matches(":disabled")) switch (e.key) {
                case"ArrowUp":
                    t.showPopover(), this.goToItem(6), e.preventDefault();
                    break;
                case"ArrowDown":
                    t.showPopover(), this.goToItem(5), e.preventDefault();
                    break;
                case"Enter":
                    e.preventDefault(), f(this, Ee).form && f(this, Ee).form.requestSubmit();
                    break;
                case" ":
                    if (t.hasAttribute("open") && f(this, P) && f(this, P).hasActiveSearchQuery()) {
                        e.preventDefault(), e.stopPropagation(), f(this, P).handleSearchKey(e.key);
                        break
                    }
                    e.preventDefault(), t.hasAttribute("open") ? t.hidePopover() : (t.showPopover(), this.goToItem(5));
                    break;
                default:
                    t.hasAttribute("open") && 1 === e.key.length && !e.ctrlKey && !e.altKey && !e.metaKey && (e.preventDefault(), e.stopPropagation(), this.handleSearchKey(e.key))
            }
        }), {signal: e});
        for (let e of f(this, Ee).labels) e.setAttribute("for", n.id);
        S(this, P, Et(t, {
            role: "listbox",
            getItems: () => this.getItems(),
            onItemClick: e => this.setSelectedOption(e),
            getButton: () => this.getButton(),
            onBeforeOpen: () => this.onBeforeOpen(),
            onBeforeClose: () => this.onBeforeClose()
        }, e)), t.addEventListener("keydown", (e => {
            switch (e.key) {
                case"ArrowDown":
                    return e.preventDefault(), e.stopPropagation(), this.goToItem(3);
                case"ArrowUp":
                    return e.preventDefault(), e.stopPropagation(), this.goToItem(2);
                case"Home":
                case"PageUp":
                    return e.preventDefault(), e.stopPropagation(), this.goToItem(0);
                case"End":
                case"PageDown":
                    return e.preventDefault(), e.stopPropagation(), this.goToItem(1);
                case" ":
                    if (f(this, P) && f(this, P).hasActiveSearchQuery()) return e.preventDefault(), e.stopPropagation(), void f(this, P).handleSearchKey(e.key);
                case"Enter": {
                    e.preventDefault(), e.stopPropagation();
                    let n = this.getActiveItem();
                    return void (n ? n.click() : t.hidePopover())
                }
                case"Tab":
                    f(this, P) && f(this, P).ignoreNextFocusRestoration();
                    break;
                case"Escape":
                    e.preventDefault(), e.stopPropagation(), t.hidePopover(), n.focus();
                    break;
                default:
                    1 === e.key.length && !e.ctrlKey && !e.altKey && !e.metaKey && (e.preventDefault(), e.stopPropagation(), f(this, P) && f(this, P).handleSearchKey(e.key))
            }
        }), {signal: e}), t.addEventListener("toggle", (e => {
            "open" === e.newState && this.onOpen()
        }), {signal: e});
        let o = Array.from(t.querySelectorAll("el-option[disabled]"));
        for (let e of o) e.setAttribute("aria-disabled", "true"), e.setAttribute("aria-selected", "false")
    }

    onAttributeChange(e, t, n) {
        if ("value" === e) null !== n && (this.value = n)
    }

    getButton() {
        let e = this.querySelector("button");
        if (!e) throw new Error("`<el-select>` must contain a button element.");
        return e
    }

    getOptions() {
        let e = this.querySelector("el-options");
        if (!e) throw new Error("`<el-select>` must contain a `<el-options>` element.");
        return e
    }

    setSelectedOption(e) {
        this.value = e.getAttribute("value"), this.dispatchEvent(new Event("input", {
            bubbles: !0,
            cancelable: !0
        })), this.dispatchEvent(new Event("change", {bubbles: !0, cancelable: !0})), this.getOptions().hidePopover()
    }

    getOptionByName(e) {
        return this.getOptions().getOptionByName(e)
    }

    getItems() {
        return this.getOptions().getItems()
    }

    getActiveItem() {
        return f(this, P)?.getActiveItem()
    }

    getSelectedOption() {
        return this.getOptionByName(f(this, Ne))
    }

    goToItem(e = 4) {
        let t = this.getItems();
        if (0 === t.length) return;
        let n = this.getActiveItem(), o = n ? t.indexOf(n) : null;
        switch (-1 === o && (o = null), e) {
            case 0:
                this.setActiveItem(t[0]);
                break;
            case 1:
                this.setActiveItem(t[t.length - 1]);
                break;
            case 2:
                if (null === o) {
                    this.goToItem(6);
                    break
                }
                this.setActiveItem(t[Math.max(0, o - 1)]);
                break;
            case 3:
                if (null === o) {
                    this.goToItem(5);
                    break
                }
                this.setActiveItem(t[Math.min(t.length - 1, o + 1)]);
                break;
            case 4:
                break;
            case 5:
            case 6: {
                let t = this.getSelectedOption();
                t ? this.setActiveItem(t) : this.goToItem(5 === e ? 0 : 1);
                break
            }
        }
    }

    setActiveItem(e) {
        f(this, P) && f(this, P).setActiveItem(e)
    }

    clearActiveItem() {
        f(this, P) && f(this, P).clearActiveItem()
    }

    onBeforeOpen() {
        let e = this.getButton(), t = e.dataset.originalTabIndex;
        t && (e.dataset.originalTabIndex = t), e.setAttribute("tabIndex", "-1")
    }

    onOpen() {
        null === this.getActiveItem() && this.goToItem(5)
    }

    onBeforeClose() {
        let e = this.getButton(), t = e.dataset.originalTabIndex;
        delete e.dataset.originalTabIndex, void 0 !== t ? e.setAttribute("tabIndex", t) : e.removeAttribute("tabIndex");
        let n = this.getActiveItem();
        null !== n && n.setAttribute("tabIndex", "-1")
    }

    handleSearchKey(e) {
        f(this, P) && f(this, P).handleSearchKey(e)
    }

    set value(e) {
        S(this, Ne, e), f(this, Ee).setFormValue(e);
        let t = this.getSelectedOption();
        if (t) {
            for (let e of this.getItems()) e.setAttribute("aria-selected", "false");
            t.setAttribute("aria-selected", "true");
            try {
                this.querySelectorAll("el-selectedcontent").forEach((e => e.update()))
            } catch {
            }
        }
    }

    get value() {
        return f(this, Ne)
    }
};
Ee = new WeakMap, Ne = new WeakMap, P = new WeakMap, H(yt, "formAssociated", !0);
var no = class extends x {
    mount() {
        this.update()
    }

    update() {
        let e = this.getSelect().getSelectedOption();
        if (!e) return;
        let t = document.createDocumentFragment();
        for (let n of e.childNodes) t.append(n.cloneNode(!0));
        this.replaceChildren(t)
    }

    getSelect() {
        let e = this.closest("el-select");
        if (!e) throw new Error("`<el-selectedcontent>` must be inside of a `<el-select>` element.");
        return e
    }
};
T("el-select", yt), T("el-selectedcontent", no);
var O, ro = class extends x {
    getButton() {
        let e = this.querySelector("button");
        if (!e) throw new Error("[ElDropdown] No `<button>` element found");
        return e
    }

    mount(e) {
        let t = this.getButton();
        t.id || (t.id = k("dropdown-button")), j(t, "--button-width", e, this);
        let n = this.querySelectorAll("label");
        for (let e of n) e.setAttribute("for", t.id)
    }
}, At = class extends x {
    constructor() {
        super(...arguments), I(this, O, null)
    }

    mount(e) {
        S(this, O, Et(this, {
            role: "menu",
            getItems: () => this.getItems(),
            onItemClick: () => this.hidePopover(),
            getButton: () => this.getDropdown().getButton(),
            onBeforeOpen: () => this.onBeforeOpen(),
            onBeforeClose: () => this.onBeforeClose()
        }, e));
        let t = this.getDropdown().getButton();
        t.addEventListener("keydown", (e => {
            if (!t.disabled) switch (e.key) {
                case"ArrowDown":
                    this.showPopover(), this.goToItem(0), e.preventDefault();
                    break;
                case"ArrowUp":
                    this.showPopover(), this.goToItem(1), e.preventDefault();
                    break;
                case" ":
                    if (this.hasAttribute("open") && f(this, O) && f(this, O).hasActiveSearchQuery()) {
                        e.preventDefault(), e.stopPropagation(), f(this, O).handleSearchKey(e.key);
                        break
                    }
                case"Enter":
                    e.preventDefault(), this.hasAttribute("open") ? this.hidePopover() : (this.showPopover(), this.goToItem(0));
                    break;
                default:
                    this.hasAttribute("open") && 1 === e.key.length && !e.ctrlKey && !e.altKey && !e.metaKey && (e.preventDefault(), e.stopPropagation(), f(this, O) && f(this, O).handleSearchKey(e.key))
            }
        }), {signal: e}), this.addEventListener("keydown", (e => {
            switch (e.key) {
                case"ArrowDown":
                    return e.preventDefault(), e.stopPropagation(), this.goToItem(3);
                case"ArrowUp":
                    return e.preventDefault(), e.stopPropagation(), this.goToItem(2);
                case"Home":
                case"PageUp":
                    return e.preventDefault(), e.stopPropagation(), this.goToItem(0);
                case"End":
                case"PageDown":
                    return e.preventDefault(), e.stopPropagation(), this.goToItem(1);
                case" ":
                    if (f(this, O) && f(this, O).hasActiveSearchQuery()) return e.preventDefault(), e.stopPropagation(), void f(this, O).handleSearchKey(e.key);
                case"Enter": {
                    e.preventDefault(), e.stopPropagation();
                    let t = this.getActiveItem();
                    return void (t ? t.click() : this.hidePopover())
                }
                case"Tab":
                    f(this, O) && f(this, O).ignoreNextFocusRestoration();
                    break;
                case"Escape":
                    e.preventDefault(), e.stopPropagation(), this.hidePopover(), t.focus();
                    break;
                default:
                    1 === e.key.length && !e.ctrlKey && !e.altKey && !e.metaKey && (e.preventDefault(), e.stopPropagation(), f(this, O) && f(this, O).handleSearchKey(e.key))
            }
        }), {signal: e})
    }

    onBeforeOpen() {
        let e = this.getDropdown().getButton(), t = e.dataset.originalTabIndex;
        t && (e.dataset.originalTabIndex = t), e.setAttribute("tabIndex", "-1"), null === this.getActiveItem() && (this.setAttribute("tabIndex", "0"), setTimeout((() => this.focus({preventScroll: !0}))))
    }

    onBeforeClose() {
        let e = this.getDropdown().getButton(), t = e.dataset.originalTabIndex;
        delete e.dataset.originalTabIndex, void 0 !== t ? e.setAttribute("tabIndex", t) : e.removeAttribute("tabIndex");
        let n = this.getActiveItem();
        null !== n && n.setAttribute("tabIndex", "-1")
    }

    goToItem(e = 4) {
        let t = this.getItems();
        if (0 === t.length) return;
        let n = this.getActiveItem(), o = n ? t.indexOf(n) : null;
        switch (-1 === o && (o = null), e) {
            case 0:
                this.setActiveItem(t[0]);
                break;
            case 1:
                this.setActiveItem(t[t.length - 1]);
                break;
            case 2:
                if (null === o) {
                    this.goToItem(1);
                    break
                }
                this.setActiveItem(t[Math.max(0, o - 1)]);
                break;
            case 3:
                if (null === o) {
                    this.goToItem(0);
                    break
                }
                this.setActiveItem(t[Math.min(t.length - 1, o + 1)])
        }
    }

    setActiveItem(e) {
        f(this, O) && f(this, O).setActiveItem(e)
    }

    clearActiveItem() {
        f(this, O) && f(this, O).clearActiveItem()
    }

    getDropdown() {
        let e = this.closest("el-dropdown");
        if (!e) throw new Error("[ElMenu] No `<el-dropdown>` element found");
        return e
    }

    getItems() {
        return Array.from(this.querySelectorAll(`${ie},[role="menuitem"]`))
    }

    getActiveItem() {
        return f(this, O)?.getActiveItem() || null
    }

    onAttributeChange(e, t, n) {
        if ("open" === e) null === n ? this.hidePopover() : this.showPopover()
    }
};
O = new WeakMap, H(At, "observedAttributes", ["anchor", "open"]), T("el-menu", At), T("el-dropdown", ro);
var xt = class extends x {
    onAttributeChange(e, t, n) {
        if ("open" === e) null === n ? this.hidePopover() : this.showPopover()
    }

    getOptionByName(e) {
        return this.querySelector(`el-option[value="${e}"]`) || null
    }

    getItems() {
        return Array.from(this.querySelectorAll("el-option:not([disabled])"))
    }
};
H(xt, "observedAttributes", ["anchor", "open"]);
var io = class extends x {
};
T("el-options", xt), T("el-option", io);
var so = class extends x {
    getPopovers() {
        return Array.from(this.querySelectorAll("* > el-popover"))
    }
}, Tt = class extends x {
    mount(e) {
        if (!this.id) throw new Error("[ElPopover] No id found for popover (ensure `id` is set)");
        let t = this.getButton();
        t.id || (t.id = k("popover-button")), De(this, (() => this.getButton()), (() => this.getButton()), e), j(t, "--button-width", e, this), this.setAttribute("tabindex", "-1"), t.addEventListener("keydown", (e => {
            ("Enter" === e.key || " " === e.key) && (e.preventDefault(), this.togglePopover())
        }), {signal: e});
        let n = this, o = this.closest("el-popover-group");
        o && o.getPopovers().includes(this) && (n = o), wt(n, [t], this, e, (() => this.hidePopover())), this.addEventListener("toggle", (e => {
            let n = e;
            "closed" === n.newState && "open" === n.oldState && setTimeout((() => {
                !this.contains(document.activeElement) && document.activeElement !== document.body || t && t !== document.activeElement && t.isConnected && Le(t)
            }))
        }), {signal: e})
    }

    getButton() {
        let e = this.id, t = document.querySelector(`[popovertarget="${e}"]`);
        if (!t) throw new Error('[ElPopover] No button found for popover (ensure you add a `<button popovertarget="${id}">` on the page)');
        return t
    }

    onAttributeChange(e, t, n) {
        if ("open" === e) null === n ? this.hidePopover() : this.showPopover()
    }
};
H(Tt, "observedAttributes", ["anchor", "open"]), T("el-popover", Tt), T("el-popover-group", so);
var lo = class extends x {
    mount(e) {
        let t = this.getList(), n = this.getPanels(), o = t.getTabButtons(), r = n.getPanels();
        if (o.length !== r.length) return void console.warn("[ElTabGroup] Mismatch between number of tabs and panels");
        for (let e = 0; e < r.length; e++) {
            let t = r[e], n = o[e];
            n.id || (n.id = k("tailwindplus-tab")), t.id || (t.id = k("tailwindplus-tab-panel")), t.setAttribute("aria-labelledby", n.id), n.setAttribute("aria-controls", t.id), n.setAttribute("role", "tab")
        }
        let i = this.getActiveTab();
        -1 === i && (i = 0), t.setActiveTab(i), n.setActivePanel(i), t.addEventListener("keydown", (e => {
            switch (e.key) {
                case"ArrowLeft": {
                    e.preventDefault();
                    let t = this.getActiveTab() - 1;
                    t < 0 && (t = o.length - 1), this.setActiveTab(t), o[t].focus();
                    break
                }
                case"ArrowRight": {
                    e.preventDefault();
                    let t = this.getActiveTab() + 1;
                    t >= o.length && (t = 0), this.setActiveTab(t), o[t].focus();
                    break
                }
                case"Home":
                case"PageUp":
                    e.preventDefault(), this.setActiveTab(0), o[0].focus();
                    break;
                case"End":
                case"PageDown":
                    e.preventDefault(), this.setActiveTab(o.length - 1), o[o.length - 1].focus()
            }
        }), {signal: e});
        for (let t = 0; t < o.length; t++) o[t].addEventListener("click", (e => {
            e.preventDefault(), this.setActiveTab(t)
        }), {signal: e})
    }

    getActiveTab() {
        let e = this.querySelector("el-tab-panels"), t = e.getPanels().find((e => !e.hasAttribute("hidden")));
        return t ? e.getPanels().indexOf(t) : -1
    }

    getList() {
        let e = this.querySelector("el-tab-list");
        if (!e) throw new Error("[ElTabGroup] No `<el-tab-list>` element found");
        return e
    }

    getPanels() {
        let e = this.querySelector("el-tab-panels");
        if (!e) throw new Error("[ElTabGroup] No `<el-tab-panels>` element found");
        return e
    }

    setActiveTab(e) {
        if (this.getActiveTab() === e) return;
        let t = this.getList(), n = this.getPanels(), o = t.getTabButtons();
        e < 0 || e >= o.length || (t.setActiveTab(e), n.setActivePanel(e))
    }
}, ao = class extends x {
    mount() {
        this.setAttribute("role", "tablist"), this.setAttribute("aria-orientation", "horizontal")
    }

    getTabButtons() {
        let e = this.querySelectorAll("button");
        return Array.from(e)
    }

    setActiveTab(e) {
        this.getTabButtons().forEach(((t, n) => {
            let o = n === e;
            t.setAttribute("tabindex", o ? "0" : "-1"), t.setAttribute("aria-selected", o ? "true" : "false")
        }))
    }
}, uo = class extends x {
    mount() {
        let e = this.getTabGroup().getList(), t = this.getPanels(), n = new MutationObserver((n => {
            for (let o of n) {
                let n = o.target;
                if ("hidden" === o.attributeName) if (!n.hasAttribute(o.attributeName)) {
                    let o = t.indexOf(n);
                    e.setActiveTab(o), this.setActivePanel(o)
                }
            }
        }));
        for (let e of t) e.setAttribute("role", "tabpanel"), e.setAttribute("tabindex", "0"), n.observe(e, {
            attributeFilter: ["hidden"],
            attributes: !0
        })
    }

    getTabGroup() {
        let e = this.closest("el-tab-group");
        if (!e) throw new Error("`<el-tab-panels>` must be inside of a `<el-tab-group>` element.");
        return e
    }

    getPanels() {
        return Array.from(this.children)
    }

    setActivePanel(e) {
        this.getPanels().forEach(((t, n) => {
            t.toggleAttribute("hidden", n !== e)
        }))
    }
};
T("el-tab-list", ao), T("el-tab-panels", uo), T("el-tab-group", lo), typeof globalThis.window < "u" && setTimeout((() => window.dispatchEvent(new Event("elements:ready"))));
//# sourceMappingURL=/sm/c30cc21225ee1a83fa8b0e676a9608c51b9a07d875fd2a2998b662040c1f6287.map