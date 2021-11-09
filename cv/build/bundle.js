
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var app = (function () {
    'use strict';

    function noop() { }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    let src_url_equal_anchor;
    function src_url_equal(element_src, url) {
        if (!src_url_equal_anchor) {
            src_url_equal_anchor = document.createElement('a');
        }
        src_url_equal_anchor.href = url;
        return element_src === src_url_equal_anchor.href;
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }
    function validate_store(store, name) {
        if (store != null && typeof store.subscribe !== 'function') {
            throw new Error(`'${name}' is not a store with a 'subscribe' method`);
        }
    }
    function subscribe(store, ...callbacks) {
        if (store == null) {
            return noop;
        }
        const unsub = store.subscribe(...callbacks);
        return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
    }
    function component_subscribe(component, store, callback) {
        component.$$.on_destroy.push(subscribe(store, callback));
    }
    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function destroy_each(iterations, detaching) {
        for (let i = 0; i < iterations.length; i += 1) {
            if (iterations[i])
                iterations[i].d(detaching);
        }
    }
    function element(name) {
        return document.createElement(name);
    }
    function text$1(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text$1(' ');
    }
    function empty() {
        return text$1('');
    }
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_input_value(input, value) {
        input.value = value == null ? '' : value;
    }
    function set_style(node, key, value, important) {
        node.style.setProperty(key, value, important ? 'important' : '');
    }
    function toggle_class(element, name, toggle) {
        element.classList[toggle ? 'add' : 'remove'](name);
    }
    function custom_event(type, detail, bubbles = false) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, bubbles, false, detail);
        return e;
    }
    class HtmlTag {
        constructor() {
            this.e = this.n = null;
        }
        c(html) {
            this.h(html);
        }
        m(html, target, anchor = null) {
            if (!this.e) {
                this.e = element(target.nodeName);
                this.t = target;
                this.c(html);
            }
            this.i(anchor);
        }
        h(html) {
            this.e.innerHTML = html;
            this.n = Array.from(this.e.childNodes);
        }
        i(anchor) {
            for (let i = 0; i < this.n.length; i += 1) {
                insert(this.t, this.n[i], anchor);
            }
        }
        p(html) {
            this.d();
            this.h(html);
            this.i(this.a);
        }
        d() {
            this.n.forEach(detach);
        }
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    let flushing = false;
    const seen_callbacks = new Set();
    function flush() {
        if (flushing)
            return;
        flushing = true;
        do {
            // first, call beforeUpdate functions
            // and update components
            for (let i = 0; i < dirty_components.length; i += 1) {
                const component = dirty_components[i];
                set_current_component(component);
                update(component.$$);
            }
            set_current_component(null);
            dirty_components.length = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        flushing = false;
        seen_callbacks.clear();
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    let outros;
    function group_outros() {
        outros = {
            r: 0,
            c: [],
            p: outros // parent group
        };
    }
    function check_outros() {
        if (!outros.r) {
            run_all(outros.c);
        }
        outros = outros.p;
    }
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
    }
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor, customElement) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        if (!customElement) {
            // onMount happens before the initial afterUpdate
            add_render_callback(() => {
                const new_on_destroy = on_mount.map(run).filter(is_function);
                if (on_destroy) {
                    on_destroy.push(...new_on_destroy);
                }
                else {
                    // Edge case - component was destroyed immediately,
                    // most likely as a result of a binding initialising
                    run_all(new_on_destroy);
                }
                component.$$.on_mount = [];
            });
        }
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false,
            root: options.target || parent_component.$$.root
        };
        append_styles && append_styles($$.root);
        let ready = false;
        $$.ctx = instance
            ? instance(component, options.props || {}, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor, options.customElement);
            flush();
        }
        set_current_component(parent_component);
    }
    /**
     * Base class for Svelte components. Used when dev=false.
     */
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.44.1' }, detail), true));
    }
    function append_dev(target, node) {
        dispatch_dev('SvelteDOMInsert', { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev('SvelteDOMInsert', { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev('SvelteDOMRemove', { node });
        detach(node);
    }
    function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
        const modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
        if (has_prevent_default)
            modifiers.push('preventDefault');
        if (has_stop_propagation)
            modifiers.push('stopPropagation');
        dispatch_dev('SvelteDOMAddEventListener', { node, event, handler, modifiers });
        const dispose = listen(node, event, handler, options);
        return () => {
            dispatch_dev('SvelteDOMRemoveEventListener', { node, event, handler, modifiers });
            dispose();
        };
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
        else
            dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
    }
    function set_data_dev(text, data) {
        data = '' + data;
        if (text.wholeText === data)
            return;
        dispatch_dev('SvelteDOMSetData', { node: text, data });
        text.data = data;
    }
    function validate_each_argument(arg) {
        if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
            let msg = '{#each} only iterates over array-like objects.';
            if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
                msg += ' You can use a spread to convert this iterable into an array.';
            }
            throw new Error(msg);
        }
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    /**
     * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
     */
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error("'target' is a required option");
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn('Component was already destroyed'); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    const subscriber_queue = [];
    /**
     * Create a `Writable` store that allows both updating and reading by subscription.
     * @param {*=}value initial value
     * @param {StartStopNotifier=}start start and stop notifications for subscriptions
     */
    function writable(value, start = noop) {
        let stop;
        const subscribers = new Set();
        function set(new_value) {
            if (safe_not_equal(value, new_value)) {
                value = new_value;
                if (stop) { // store is ready
                    const run_queue = !subscriber_queue.length;
                    for (const subscriber of subscribers) {
                        subscriber[1]();
                        subscriber_queue.push(subscriber, value);
                    }
                    if (run_queue) {
                        for (let i = 0; i < subscriber_queue.length; i += 2) {
                            subscriber_queue[i][0](subscriber_queue[i + 1]);
                        }
                        subscriber_queue.length = 0;
                    }
                }
            }
        }
        function update(fn) {
            set(fn(value));
        }
        function subscribe(run, invalidate = noop) {
            const subscriber = [run, invalidate];
            subscribers.add(subscriber);
            if (subscribers.size === 1) {
                stop = start(set) || noop;
            }
            run(value);
            return () => {
                subscribers.delete(subscriber);
                if (subscribers.size === 0) {
                    stop();
                    stop = null;
                }
            };
        }
        return { set, update, subscribe };
    }

    const text = `# Full Name
image:https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500&q=80
born:
email:
phone: https://dawid.huczynski.pl/
website:

# Timeline

## Experience

### Position
date
Company Name, address
description/responsibilities


### Position
date
Company Name, address
description/responsibilities


## Experience 2

### Position
date
Company Name, address
description/responsibilities

## Education

### Position
date
Company Name, address
description/responsibilities


# Other

## Skills
-skill one 80%
-skill two 65%

## Languages
-first language - native
-second language - proficient
-third - hobbyist

## Hobby
-Author, Book title
-Country visited
-Game genre
-Some nice info about you to start the chat

# Footer
Legal notice etc etc.
`;

    const input = writable(text);
    const output = writable({});
    const color = writable('#3c64a0');
    const avatar = writable('');
    const editorVisible = writable(false);

    let info;
    let timeline= [];
    let other = [];
    let footer;
    var temp;
    let parsed;

    function parseInput(i) {
    	output.set(par(i));
    }

    String.prototype.replaceAt = function(index, replacement) {
    	return this.substr(0, index) + replacement + this.substr(index + replacement.length);
    };


    function parseLinks(input) {
    	const links = /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/g;
    	var data = input.split("\n");
    	for (let i = 0; i < data.length; i++) {
    		const line = data[i];
    		if (!line.startsWith("image:") && !line.startsWith("color:")){
    			var match = [...line.matchAll(links)];
    			if (match) {
    				match.forEach(m => {
    					var new_link = `<a href="${m[0]}" target="_blank">${m[2]+m[3]}</a>`;
    					data[i] = line.replaceAt(m.index, new_link);
    				});	
    			}
    		}
    	}
    	data = data.join('\n');
    	return data;
    }

    function parseEmails(input) {
    	const emails = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}/g;
    	var data = input.split("\n");
    	for (let i = 0; i < data.length; i++) {
    		const line = data[i];
    		if (!line.startsWith("image:") && !line.startsWith("color:")){
    			var match = [...line.matchAll(emails)];
    			if (match) {
    				match.forEach(m => {
    					var new_email = `<a href = "mailto: ${m[0]}">${m[0]}</a>`;
    					data[i] = line.replaceAt(m.index, new_email);
    				});	
    			}
    		}
    	}
    	data = data.join('\n');
    	return data;
    }


    function par(input){
    	parsed = parseLinks(input);
    	parsed = parseEmails(parsed);
        info = '';
        timeline = [];
        other = [];
        footer = '';
    	var sections = parsed.split("\n# ");
    	info = sections[0].slice(1).trim().split("\n");
        var text = '';
    	// INFO
        var name = info[0];
        info.splice(1).forEach(line => {
            if (line.startsWith('image:')) {
                avatar.set(line.split(":").splice(1).join(":"));
            } else if (line.startsWith('color:')) {
                color.set(line.split(":").splice(1).join(":"));
            } else {
                text += line;
                text += '<br>';
            }
        });
        info = {name:name, text:text}; 
    	// TIMELINE
    	if (sections[1]) {
    		temp = sections[1].split('\n').splice(1).join('\n').split("\n## ").splice(1);
    		temp.forEach(stage => {
    			var name = stage.split('\n')[0];
    			
    			var jobs = [];
    			stage.split('\n### ').splice(1).forEach(job => {
    				job = job.split('\n');
    				var title = job[0];
    				var date = job[1];
    				var company = job[2];
    				var descr = job.splice(3).join(' ');
    				
    				jobs.push({title:title, date:date, company:company, descr:descr});
    			});
    			
    			timeline.push({name:name, jobs:jobs});
    		});
    	}
    	// OTHER
    	if (sections[2]) {
    		temp = sections[2].split('\n').splice(1).join('\n').split("\n## ").splice(1);
    		temp.forEach(element => {
    			element = element.split('\n');
    			element[0];
    			let parsed = '';
    			let list = false;
    			let skills = [];
    			element.splice(1).forEach(line => {
    				if (line[0] == '-') {
    					line = line.slice(1).trim();
    					if (line.endsWith('%')) {
    						let val = line.split(' ').slice(-1)[0].replace('%', '');
    						let title = line.split(" ").slice(0,-1).join(" ");
    						skills.push({title:title, val:val});
    					} else {
    						if (!list) {
    							list = true;
    							parsed += '<ul>';
    						}
    						parsed += `<li><p>${line}</p></li>`;
    					}
    				} else if ( line ) {
    					if (list) {
    						list = false;
    						
    						parsed += `</ul><p>${line}</p>`;
    					} else {
    						parsed += line;
    					}
    				}
    			});
    			other.push({name:element[0], text:parsed, skills:skills});
    		});
    	}
    	// FOOTER
    	if (sections[3]) {
    		footer = sections[3].split('\n').splice(1,).join(' ');
    	}
    	
    	
    	return {info:info, timeline:timeline, other:other, footer:footer};
    }

    /* src\lib\Nav.svelte generated by Svelte v3.44.1 */
    const file$5 = "src\\lib\\Nav.svelte";

    function create_fragment$5(ctx) {
    	let nav;
    	let button0;
    	let t1;
    	let input0;
    	let t2;
    	let button1;
    	let t3;
    	let t4;
    	let input1;
    	let t5;
    	let button2;
    	let t6;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			nav = element("nav");
    			button0 = element("button");
    			button0.textContent = "Load image";
    			t1 = space();
    			input0 = element("input");
    			t2 = space();
    			button1 = element("button");
    			t3 = text$1("Color");
    			t4 = space();
    			input1 = element("input");
    			t5 = space();
    			button2 = element("button");
    			t6 = text$1(/*name*/ ctx[2]);
    			attr_dev(button0, "class", "svelte-m8g8qn");
    			add_location(button0, file$5, 29, 8, 596);
    			set_style(input0, "display", "none");
    			attr_dev(input0, "type", "file");
    			attr_dev(input0, "accept", ".jpg, .jpeg, .png");
    			attr_dev(input0, "class", "svelte-m8g8qn");
    			add_location(input0, file$5, 30, 8, 669);
    			set_style(button1, "background-color", /*$color*/ ctx[3]);
    			set_style(button1, "color", "#ccc");
    			attr_dev(button1, "class", "svelte-m8g8qn");
    			add_location(button1, file$5, 31, 8, 800);
    			attr_dev(input1, "type", "color");
    			set_style(input1, "display", "none");
    			attr_dev(input1, "class", "svelte-m8g8qn");
    			add_location(input1, file$5, 32, 8, 915);
    			attr_dev(button2, "id", "buttonEdit");
    			attr_dev(button2, "class", "svelte-m8g8qn");
    			add_location(button2, file$5, 33, 8, 1011);
    			attr_dev(nav, "class", "svelte-m8g8qn");
    			add_location(nav, file$5, 28, 0, 580);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, nav, anchor);
    			append_dev(nav, button0);
    			append_dev(nav, t1);
    			append_dev(nav, input0);
    			/*input0_binding*/ ctx[9](input0);
    			append_dev(nav, t2);
    			append_dev(nav, button1);
    			append_dev(button1, t3);
    			append_dev(nav, t4);
    			append_dev(nav, input1);
    			set_input_value(input1, /*$color*/ ctx[3]);
    			/*input1_binding*/ ctx[12](input1);
    			append_dev(nav, t5);
    			append_dev(nav, button2);
    			append_dev(button2, t6);

    			if (!mounted) {
    				dispose = [
    					listen_dev(button0, "click", /*click_handler*/ ctx[7], false, false, false),
    					listen_dev(input0, "change", /*change_handler*/ ctx[8], false, false, false),
    					listen_dev(button1, "click", /*click_handler_1*/ ctx[10], false, false, false),
    					listen_dev(input1, "input", /*input1_input_handler*/ ctx[11]),
    					listen_dev(button2, "click", /*toggleEdit*/ ctx[4], false, false, false)
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*$color*/ 8) {
    				set_style(button1, "background-color", /*$color*/ ctx[3]);
    			}

    			if (dirty & /*$color*/ 8) {
    				set_input_value(input1, /*$color*/ ctx[3]);
    			}

    			if (dirty & /*name*/ 4) set_data_dev(t6, /*name*/ ctx[2]);
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(nav);
    			/*input0_binding*/ ctx[9](null);
    			/*input1_binding*/ ctx[12](null);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$5.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$5($$self, $$props, $$invalidate) {
    	let $editorVisible;
    	let $color;
    	validate_store(editorVisible, 'editorVisible');
    	component_subscribe($$self, editorVisible, $$value => $$invalidate(6, $editorVisible = $$value));
    	validate_store(color, 'color');
    	component_subscribe($$self, color, $$value => $$invalidate(3, $color = $$value));
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Nav', slots, []);
    	let fileinput;
    	let colorinput;
    	let name;

    	function toggleEdit() {
    		editorVisible.update(n => !n);
    	}

    	function loadImage(e) {
    		let image = e.target.files[0];
    		let reader = new FileReader();
    		reader.readAsDataURL(image);

    		reader.onload = e => {
    			avatar.set(e.target.result);
    		};
    	}

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Nav> was created with unknown prop '${key}'`);
    	});

    	const click_handler = () => {
    		fileinput.click();
    	};

    	const change_handler = e => loadImage(e);

    	function input0_binding($$value) {
    		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
    			fileinput = $$value;
    			$$invalidate(0, fileinput);
    		});
    	}

    	const click_handler_1 = () => {
    		colorinput.click();
    	};

    	function input1_input_handler() {
    		$color = this.value;
    		color.set($color);
    	}

    	function input1_binding($$value) {
    		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
    			colorinput = $$value;
    			$$invalidate(1, colorinput);
    		});
    	}

    	$$self.$capture_state = () => ({
    		color,
    		editorVisible,
    		avatar,
    		fileinput,
    		colorinput,
    		name,
    		toggleEdit,
    		loadImage,
    		$editorVisible,
    		$color
    	});

    	$$self.$inject_state = $$props => {
    		if ('fileinput' in $$props) $$invalidate(0, fileinput = $$props.fileinput);
    		if ('colorinput' in $$props) $$invalidate(1, colorinput = $$props.colorinput);
    		if ('name' in $$props) $$invalidate(2, name = $$props.name);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*$editorVisible*/ 64) {
    			if ($editorVisible) {
    				$$invalidate(2, name = 'Preview');
    			} else {
    				$$invalidate(2, name = 'Edit');
    			}
    		}
    	};

    	return [
    		fileinput,
    		colorinput,
    		name,
    		$color,
    		toggleEdit,
    		loadImage,
    		$editorVisible,
    		click_handler,
    		change_handler,
    		input0_binding,
    		click_handler_1,
    		input1_input_handler,
    		input1_binding
    	];
    }

    class Nav extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$5, create_fragment$5, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Nav",
    			options,
    			id: create_fragment$5.name
    		});
    	}
    }

    /* src\lib\Info.svelte generated by Svelte v3.44.1 */
    const file$4 = "src\\lib\\Info.svelte";

    // (11:2) {:else}
    function create_else_block$1(ctx) {
    	let img;
    	let img_src_value;

    	const block = {
    		c: function create() {
    			img = element("img");
    			if (!src_url_equal(img.src, img_src_value = /*$avatar*/ ctx[0])) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "");
    			add_location(img, file$4, 11, 3, 188);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, img, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*$avatar*/ 1 && !src_url_equal(img.src, img_src_value = /*$avatar*/ ctx[0])) {
    				attr_dev(img, "src", img_src_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(img);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$1.name,
    		type: "else",
    		source: "(11:2) {:else}",
    		ctx
    	});

    	return block;
    }

    // (9:2) {#if $avatar}
    function create_if_block$2(ctx) {
    	let img;
    	let img_src_value;

    	const block = {
    		c: function create() {
    			img = element("img");
    			if (!src_url_equal(img.src, img_src_value = /*$avatar*/ ctx[0])) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "");
    			add_location(img, file$4, 9, 3, 144);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, img, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*$avatar*/ 1 && !src_url_equal(img.src, img_src_value = /*$avatar*/ ctx[0])) {
    				attr_dev(img, "src", img_src_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(img);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$2.name,
    		type: "if",
    		source: "(9:2) {#if $avatar}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$4(ctx) {
    	let div2;
    	let div0;
    	let t0;
    	let div1;
    	let h1;
    	let t1_value = /*$output*/ ctx[1].info.name + "";
    	let t1;
    	let t2;
    	let p;
    	let raw_value = /*$output*/ ctx[1].info.text + "";

    	function select_block_type(ctx, dirty) {
    		if (/*$avatar*/ ctx[0]) return create_if_block$2;
    		return create_else_block$1;
    	}

    	let current_block_type = select_block_type(ctx);
    	let if_block = current_block_type(ctx);

    	const block = {
    		c: function create() {
    			div2 = element("div");
    			div0 = element("div");
    			if_block.c();
    			t0 = space();
    			div1 = element("div");
    			h1 = element("h1");
    			t1 = text$1(t1_value);
    			t2 = space();
    			p = element("p");
    			attr_dev(div0, "class", "profile-picture");
    			add_location(div0, file$4, 7, 1, 93);
    			add_location(h1, file$4, 15, 2, 270);
    			add_location(p, file$4, 16, 2, 302);
    			attr_dev(div1, "contenteditable", "false");
    			add_location(div1, file$4, 14, 1, 237);
    			attr_dev(div2, "id", "info");
    			add_location(div2, file$4, 6, 0, 75);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div2, anchor);
    			append_dev(div2, div0);
    			if_block.m(div0, null);
    			append_dev(div2, t0);
    			append_dev(div2, div1);
    			append_dev(div1, h1);
    			append_dev(h1, t1);
    			append_dev(div1, t2);
    			append_dev(div1, p);
    			p.innerHTML = raw_value;
    		},
    		p: function update(ctx, [dirty]) {
    			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
    				if_block.p(ctx, dirty);
    			} else {
    				if_block.d(1);
    				if_block = current_block_type(ctx);

    				if (if_block) {
    					if_block.c();
    					if_block.m(div0, null);
    				}
    			}

    			if (dirty & /*$output*/ 2 && t1_value !== (t1_value = /*$output*/ ctx[1].info.name + "")) set_data_dev(t1, t1_value);
    			if (dirty & /*$output*/ 2 && raw_value !== (raw_value = /*$output*/ ctx[1].info.text + "")) p.innerHTML = raw_value;		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div2);
    			if_block.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$4.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$4($$self, $$props, $$invalidate) {
    	let $avatar;
    	let $output;
    	validate_store(avatar, 'avatar');
    	component_subscribe($$self, avatar, $$value => $$invalidate(0, $avatar = $$value));
    	validate_store(output, 'output');
    	component_subscribe($$self, output, $$value => $$invalidate(1, $output = $$value));
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Info', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Info> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ output, avatar, $avatar, $output });
    	return [$avatar, $output];
    }

    class Info extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$4, create_fragment$4, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Info",
    			options,
    			id: create_fragment$4.name
    		});
    	}
    }

    /* src\lib\Job.svelte generated by Svelte v3.44.1 */

    const file$3 = "src\\lib\\Job.svelte";

    function create_fragment$3(ctx) {
    	let div4;
    	let div0;
    	let t0_value = /*job*/ ctx[0].date + "";
    	let t0;
    	let t1;
    	let div3;
    	let h2;
    	let raw0_value = /*job*/ ctx[0].title + "";
    	let t2;
    	let div1;
    	let raw1_value = /*job*/ ctx[0].company + "";
    	let t3;
    	let div2;
    	let raw2_value = /*job*/ ctx[0].descr + "";

    	const block = {
    		c: function create() {
    			div4 = element("div");
    			div0 = element("div");
    			t0 = text$1(t0_value);
    			t1 = space();
    			div3 = element("div");
    			h2 = element("h2");
    			t2 = space();
    			div1 = element("div");
    			t3 = space();
    			div2 = element("div");
    			attr_dev(div0, "class", "date");
    			add_location(div0, file$3, 5, 1, 61);
    			add_location(h2, file$3, 7, 2, 124);
    			attr_dev(div1, "class", "address");
    			add_location(div1, file$3, 8, 2, 154);
    			attr_dev(div2, "class", "description");
    			add_location(div2, file$3, 9, 2, 204);
    			attr_dev(div3, "class", "job-info");
    			add_location(div3, file$3, 6, 1, 98);
    			attr_dev(div4, "class", "job");
    			add_location(div4, file$3, 4, 0, 41);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div4, anchor);
    			append_dev(div4, div0);
    			append_dev(div0, t0);
    			append_dev(div4, t1);
    			append_dev(div4, div3);
    			append_dev(div3, h2);
    			h2.innerHTML = raw0_value;
    			append_dev(div3, t2);
    			append_dev(div3, div1);
    			div1.innerHTML = raw1_value;
    			append_dev(div3, t3);
    			append_dev(div3, div2);
    			div2.innerHTML = raw2_value;
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*job*/ 1 && t0_value !== (t0_value = /*job*/ ctx[0].date + "")) set_data_dev(t0, t0_value);
    			if (dirty & /*job*/ 1 && raw0_value !== (raw0_value = /*job*/ ctx[0].title + "")) h2.innerHTML = raw0_value;			if (dirty & /*job*/ 1 && raw1_value !== (raw1_value = /*job*/ ctx[0].company + "")) div1.innerHTML = raw1_value;			if (dirty & /*job*/ 1 && raw2_value !== (raw2_value = /*job*/ ctx[0].descr + "")) div2.innerHTML = raw2_value;		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div4);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$3.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$3($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Job', slots, []);
    	let { job } = $$props;
    	const writable_props = ['job'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Job> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('job' in $$props) $$invalidate(0, job = $$props.job);
    	};

    	$$self.$capture_state = () => ({ job });

    	$$self.$inject_state = $$props => {
    		if ('job' in $$props) $$invalidate(0, job = $$props.job);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [job];
    }

    class Job extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$3, create_fragment$3, safe_not_equal, { job: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Job",
    			options,
    			id: create_fragment$3.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*job*/ ctx[0] === undefined && !('job' in props)) {
    			console.warn("<Job> was created without expected prop 'job'");
    		}
    	}

    	get job() {
    		throw new Error("<Job>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set job(value) {
    		throw new Error("<Job>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\lib\Timeline.svelte generated by Svelte v3.44.1 */
    const file$2 = "src\\lib\\Timeline.svelte";

    function get_each_context$1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[1] = list[i];
    	return child_ctx;
    }

    function get_each_context_1$1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[4] = list[i];
    	return child_ctx;
    }

    // (10:3) {#each stage.jobs as job}
    function create_each_block_1$1(ctx) {
    	let job;
    	let current;

    	job = new Job({
    			props: { job: /*job*/ ctx[4] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(job.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(job, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const job_changes = {};
    			if (dirty & /*$output*/ 1) job_changes.job = /*job*/ ctx[4];
    			job.$set(job_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(job.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(job.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(job, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_1$1.name,
    		type: "each",
    		source: "(10:3) {#each stage.jobs as job}",
    		ctx
    	});

    	return block;
    }

    // (7:1) {#each $output.timeline as stage}
    function create_each_block$1(ctx) {
    	let div0;
    	let t0_value = /*stage*/ ctx[1].name + "";
    	let t0;
    	let t1;
    	let div1;
    	let t2;
    	let current;
    	let each_value_1 = /*stage*/ ctx[1].jobs;
    	validate_each_argument(each_value_1);
    	let each_blocks = [];

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		each_blocks[i] = create_each_block_1$1(get_each_context_1$1(ctx, each_value_1, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			div0 = element("div");
    			t0 = text$1(t0_value);
    			t1 = space();
    			div1 = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t2 = space();
    			attr_dev(div0, "class", "timeline-part-title");
    			add_location(div0, file$2, 7, 2, 183);
    			attr_dev(div1, "class", "timeline-part");
    			add_location(div1, file$2, 8, 2, 238);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div0, anchor);
    			append_dev(div0, t0);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div1, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div1, null);
    			}

    			append_dev(div1, t2);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if ((!current || dirty & /*$output*/ 1) && t0_value !== (t0_value = /*stage*/ ctx[1].name + "")) set_data_dev(t0, t0_value);

    			if (dirty & /*$output*/ 1) {
    				each_value_1 = /*stage*/ ctx[1].jobs;
    				validate_each_argument(each_value_1);
    				let i;

    				for (i = 0; i < each_value_1.length; i += 1) {
    					const child_ctx = get_each_context_1$1(ctx, each_value_1, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block_1$1(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(div1, t2);
    					}
    				}

    				group_outros();

    				for (i = each_value_1.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value_1.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div1);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$1.name,
    		type: "each",
    		source: "(7:1) {#each $output.timeline as stage}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$2(ctx) {
    	let div;
    	let current;
    	let each_value = /*$output*/ ctx[0].timeline;
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			div = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(div, "id", "timeline");
    			attr_dev(div, "contenteditable", "false");
    			add_location(div, file$2, 5, 0, 100);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*$output*/ 1) {
    				each_value = /*$output*/ ctx[0].timeline;
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$1(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$1(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(div, null);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$2.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$2($$self, $$props, $$invalidate) {
    	let $output;
    	validate_store(output, 'output');
    	component_subscribe($$self, output, $$value => $$invalidate(0, $output = $$value));
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Timeline', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Timeline> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ output, Job, $output });
    	return [$output];
    }

    class Timeline extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Timeline",
    			options,
    			id: create_fragment$2.name
    		});
    	}
    }

    /* src\lib\Other.svelte generated by Svelte v3.44.1 */
    const file$1 = "src\\lib\\Other.svelte";

    function get_each_context(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[1] = list[i];
    	return child_ctx;
    }

    function get_each_context_1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[4] = list[i];
    	return child_ctx;
    }

    // (17:3) {:else}
    function create_else_block(ctx) {
    	let html_tag;
    	let raw_value = /*stage*/ ctx[1].text + "";
    	let html_anchor;

    	const block = {
    		c: function create() {
    			html_tag = new HtmlTag();
    			html_anchor = empty();
    			html_tag.a = html_anchor;
    		},
    		m: function mount(target, anchor) {
    			html_tag.m(raw_value, target, anchor);
    			insert_dev(target, html_anchor, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*$output*/ 1 && raw_value !== (raw_value = /*stage*/ ctx[1].text + "")) html_tag.p(raw_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(html_anchor);
    			if (detaching) html_tag.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block.name,
    		type: "else",
    		source: "(17:3) {:else}",
    		ctx
    	});

    	return block;
    }

    // (10:3) {#if stage.skills.length != 0}
    function create_if_block$1(ctx) {
    	let div;
    	let div_class_value;
    	let each_value_1 = /*stage*/ ctx[1].skills;
    	validate_each_argument(each_value_1);
    	let each_blocks = [];

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
    	}

    	const block = {
    		c: function create() {
    			div = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(div, "class", div_class_value = /*stage*/ ctx[1].skills ? 'skill' : '');
    			add_location(div, file$1, 10, 4, 237);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div, null);
    			}
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*$output*/ 1) {
    				each_value_1 = /*stage*/ ctx[1].skills;
    				validate_each_argument(each_value_1);
    				let i;

    				for (i = 0; i < each_value_1.length; i += 1) {
    					const child_ctx = get_each_context_1(ctx, each_value_1, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block_1(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(div, null);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value_1.length;
    			}

    			if (dirty & /*$output*/ 1 && div_class_value !== (div_class_value = /*stage*/ ctx[1].skills ? 'skill' : '')) {
    				attr_dev(div, "class", div_class_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$1.name,
    		type: "if",
    		source: "(10:3) {#if stage.skills.length != 0}",
    		ctx
    	});

    	return block;
    }

    // (12:5) {#each stage.skills as skill}
    function create_each_block_1(ctx) {
    	let p;
    	let t0_value = /*skill*/ ctx[4].title + "";
    	let t0;
    	let t1;
    	let div1;
    	let div0;

    	const block = {
    		c: function create() {
    			p = element("p");
    			t0 = text$1(t0_value);
    			t1 = space();
    			div1 = element("div");
    			div0 = element("div");
    			add_location(p, file$1, 12, 6, 323);
    			attr_dev(div0, "class", "bar");
    			set_style(div0, "width", /*skill*/ ctx[4].val + "%");
    			add_location(div0, file$1, 13, 28, 373);
    			attr_dev(div1, "class", "bar-full");
    			add_location(div1, file$1, 13, 6, 351);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    			append_dev(p, t0);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div1, anchor);
    			append_dev(div1, div0);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*$output*/ 1 && t0_value !== (t0_value = /*skill*/ ctx[4].title + "")) set_data_dev(t0, t0_value);

    			if (dirty & /*$output*/ 1) {
    				set_style(div0, "width", /*skill*/ ctx[4].val + "%");
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_1.name,
    		type: "each",
    		source: "(12:5) {#each stage.skills as skill}",
    		ctx
    	});

    	return block;
    }

    // (7:4) {#each $output.other as stage}
    function create_each_block(ctx) {
    	let div;
    	let h2;
    	let raw_value = /*stage*/ ctx[1].name + "";
    	let t0;
    	let t1;

    	function select_block_type(ctx, dirty) {
    		if (/*stage*/ ctx[1].skills.length != 0) return create_if_block$1;
    		return create_else_block;
    	}

    	let current_block_type = select_block_type(ctx);
    	let if_block = current_block_type(ctx);

    	const block = {
    		c: function create() {
    			div = element("div");
    			h2 = element("h2");
    			t0 = space();
    			if_block.c();
    			t1 = space();
    			add_location(h2, file$1, 8, 3, 169);
    			attr_dev(div, "class", "other");
    			add_location(div, file$1, 7, 2, 145);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, h2);
    			h2.innerHTML = raw_value;
    			append_dev(div, t0);
    			if_block.m(div, null);
    			append_dev(div, t1);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*$output*/ 1 && raw_value !== (raw_value = /*stage*/ ctx[1].name + "")) h2.innerHTML = raw_value;
    			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
    				if_block.p(ctx, dirty);
    			} else {
    				if_block.d(1);
    				if_block = current_block_type(ctx);

    				if (if_block) {
    					if_block.c();
    					if_block.m(div, t1);
    				}
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			if_block.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block.name,
    		type: "each",
    		source: "(7:4) {#each $output.other as stage}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$1(ctx) {
    	let div;
    	let each_value = /*$output*/ ctx[0].other;
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    	}

    	const block = {
    		c: function create() {
    			div = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(div, "id", "other");
    			attr_dev(div, "contenteditable", "false");
    			attr_dev(div, "class", "svelte-10t2m15");
    			add_location(div, file$1, 5, 0, 65);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div, null);
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*$output*/ 1) {
    				each_value = /*$output*/ ctx[0].other;
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(div, null);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value.length;
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1($$self, $$props, $$invalidate) {
    	let $output;
    	validate_store(output, 'output');
    	component_subscribe($$self, output, $$value => $$invalidate(0, $output = $$value));
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Other', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Other> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ output, $output });
    	return [$output];
    }

    class Other extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Other",
    			options,
    			id: create_fragment$1.name
    		});
    	}
    }

    /* src\App.svelte generated by Svelte v3.44.1 */
    const file = "src\\App.svelte";

    // (21:1) {#if $editorVisible}
    function create_if_block_1(ctx) {
    	let textarea;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			textarea = element("textarea");
    			attr_dev(textarea, "id", "inputArea");
    			attr_dev(textarea, "cols", "30");
    			attr_dev(textarea, "rows", "10");
    			attr_dev(textarea, "class", "svelte-79p98");
    			add_location(textarea, file, 21, 2, 442);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, textarea, anchor);
    			set_input_value(textarea, /*$input*/ ctx[0]);

    			if (!mounted) {
    				dispose = listen_dev(textarea, "input", /*textarea_input_handler*/ ctx[4]);
    				mounted = true;
    			}
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*$input*/ 1) {
    				set_input_value(textarea, /*$input*/ ctx[0]);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(textarea);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1.name,
    		type: "if",
    		source: "(21:1) {#if $editorVisible}",
    		ctx
    	});

    	return block;
    }

    // (28:2) {#if $output.footer}
    function create_if_block(ctx) {
    	let footer;
    	let t_value = /*$output*/ ctx[1].footer + "";
    	let t;

    	const block = {
    		c: function create() {
    			footer = element("footer");
    			t = text$1(t_value);
    			add_location(footer, file, 28, 3, 659);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, footer, anchor);
    			append_dev(footer, t);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*$output*/ 2 && t_value !== (t_value = /*$output*/ ctx[1].footer + "")) set_data_dev(t, t_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(footer);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block.name,
    		type: "if",
    		source: "(28:2) {#if $output.footer}",
    		ctx
    	});

    	return block;
    }

    function create_fragment(ctx) {
    	let title_value;
    	let t0;
    	let nav;
    	let t1;
    	let div1;
    	let t2;
    	let div0;
    	let info;
    	let t3;
    	let timeline;
    	let t4;
    	let other;
    	let t5;
    	let current;
    	document.title = title_value = "" + (/*$output*/ ctx[1].info.name + " CV");
    	nav = new Nav({ $$inline: true });
    	let if_block0 = /*$editorVisible*/ ctx[2] && create_if_block_1(ctx);
    	info = new Info({ $$inline: true });
    	timeline = new Timeline({ $$inline: true });
    	other = new Other({ $$inline: true });
    	let if_block1 = /*$output*/ ctx[1].footer && create_if_block(ctx);

    	const block = {
    		c: function create() {
    			t0 = space();
    			create_component(nav.$$.fragment);
    			t1 = space();
    			div1 = element("div");
    			if (if_block0) if_block0.c();
    			t2 = space();
    			div0 = element("div");
    			create_component(info.$$.fragment);
    			t3 = space();
    			create_component(timeline.$$.fragment);
    			t4 = space();
    			create_component(other.$$.fragment);
    			t5 = space();
    			if (if_block1) if_block1.c();
    			attr_dev(div0, "id", "page");
    			set_style(div0, "--accent-color", /*$color*/ ctx[3]);
    			toggle_class(div0, "editorVisible", editorVisible);
    			add_location(div0, file, 23, 1, 527);
    			attr_dev(div1, "id", "main");
    			add_location(div1, file, 19, 0, 402);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t0, anchor);
    			mount_component(nav, target, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div1, anchor);
    			if (if_block0) if_block0.m(div1, null);
    			append_dev(div1, t2);
    			append_dev(div1, div0);
    			mount_component(info, div0, null);
    			append_dev(div0, t3);
    			mount_component(timeline, div0, null);
    			append_dev(div0, t4);
    			mount_component(other, div0, null);
    			append_dev(div0, t5);
    			if (if_block1) if_block1.m(div0, null);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if ((!current || dirty & /*$output*/ 2) && title_value !== (title_value = "" + (/*$output*/ ctx[1].info.name + " CV"))) {
    				document.title = title_value;
    			}

    			if (/*$editorVisible*/ ctx[2]) {
    				if (if_block0) {
    					if_block0.p(ctx, dirty);
    				} else {
    					if_block0 = create_if_block_1(ctx);
    					if_block0.c();
    					if_block0.m(div1, t2);
    				}
    			} else if (if_block0) {
    				if_block0.d(1);
    				if_block0 = null;
    			}

    			if (/*$output*/ ctx[1].footer) {
    				if (if_block1) {
    					if_block1.p(ctx, dirty);
    				} else {
    					if_block1 = create_if_block(ctx);
    					if_block1.c();
    					if_block1.m(div0, null);
    				}
    			} else if (if_block1) {
    				if_block1.d(1);
    				if_block1 = null;
    			}

    			if (!current || dirty & /*$color*/ 8) {
    				set_style(div0, "--accent-color", /*$color*/ ctx[3]);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(nav.$$.fragment, local);
    			transition_in(info.$$.fragment, local);
    			transition_in(timeline.$$.fragment, local);
    			transition_in(other.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(nav.$$.fragment, local);
    			transition_out(info.$$.fragment, local);
    			transition_out(timeline.$$.fragment, local);
    			transition_out(other.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t0);
    			destroy_component(nav, detaching);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div1);
    			if (if_block0) if_block0.d();
    			destroy_component(info);
    			destroy_component(timeline);
    			destroy_component(other);
    			if (if_block1) if_block1.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let $input;
    	let $output;
    	let $editorVisible;
    	let $color;
    	validate_store(input, 'input');
    	component_subscribe($$self, input, $$value => $$invalidate(0, $input = $$value));
    	validate_store(output, 'output');
    	component_subscribe($$self, output, $$value => $$invalidate(1, $output = $$value));
    	validate_store(editorVisible, 'editorVisible');
    	component_subscribe($$self, editorVisible, $$value => $$invalidate(2, $editorVisible = $$value));
    	validate_store(color, 'color');
    	component_subscribe($$self, color, $$value => $$invalidate(3, $color = $$value));
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('App', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	function textarea_input_handler() {
    		$input = this.value;
    		input.set($input);
    	}

    	$$self.$capture_state = () => ({
    		input,
    		output,
    		color,
    		editorVisible,
    		parseInput,
    		Nav,
    		Info,
    		Timeline,
    		Other,
    		$input,
    		$output,
    		$editorVisible,
    		$color
    	});

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*$input*/ 1) {
    			{
    				parseInput($input);
    			}
    		}
    	};

    	return [$input, $output, $editorVisible, $color, textarea_input_handler];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment.name
    		});
    	}
    }

    const app = new App({
    	target: document.body,
    	props: {
    		name: 'world'
    	}
    });

    return app;

})();
//# sourceMappingURL=bundle.js.map
