/* Note to instructor:
 * I like to use capital letters for all my shortcuts so that I instantly recognize them when reading/writing code.
 * I hope that is okay. I use camelCase for all regular functions.
 */

/*
 * C: DOM Shortcut for creating a child element
 * @param parent (Element): parent element to attach child to
 * @param tag (String): element tag to create
 * @param c (String): optional class(es) of the element. Multiple classes are allowed when separated by a space.
 * @param text (String): optional innerText of the element
 * @param attributes (Obj): optional object whose key/value pairs will be added to the element
 * @return Element on success (the created child element); false on error (if tag contains invalid characters). 
 */
 
function C (parent, tag, c = false, text = false, attributes = false) {
    let el = {};
    try {
        el = document.createElement(tag);
    } catch (e) {
        return false;
    }

    parent.appendChild(el);
    
    // optional parameters
    if (c) el.className = c; 
    if (text) el.innerText = text;
    if (attributes) {
        for (const [key, value] of Object.entries(attributes)) {
            el.setAttribute (key, value);
        };
    }

    return el
}

/* DOM Document shortcuts for querySelector, querySelectorAll, getElementById and getElementById.style */

function Q (selector) { return document.querySelector(selector)};
function A (selector) { return document.querySelectorAll(selector)};
function I (id) { return document.getElementById(id)};
function S (id) { return document.getElementById(id).style};