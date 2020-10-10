import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, D as create_slot, v as validate_slots, f as element, t as text, g as space, h as claim_element, j as children, k as claim_text, l as detach_dev, m as claim_space, n as add_location, o as attr_dev, r as insert_dev, p as append_dev, z as _slicedToArray, E as update_slot, A as transition_in, B as transition_out, F as _createClass, G as set_data_dev, u as noop } from './client.5af73f66.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/components/Section.svelte"; // (6:8)      

function fallback_block(ctx) {
  var h2;
  var t0;
  var t1;
  var p;
  var t2;
  var t3;
  var img;
  var img_src_value;
  var block = {
    c: function create() {
      h2 = element("h2");
      t0 = text("Section Title");
      t1 = space();
      p = element("p");
      t2 = text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, a magni\n      dignissimos pariatur quos nemo! Incidunt tempora dolore dicta aliquam\n      voluptas, aperiam nam ullam veritatis unde assumenda? Ad, culpa nemo?");
      t3 = space();
      img = element("img");
      this.h();
    },
    l: function claim(nodes) {
      h2 = claim_element(nodes, "H2", {});
      var h2_nodes = children(h2);
      t0 = claim_text(h2_nodes, "Section Title");
      h2_nodes.forEach(detach_dev);
      t1 = claim_space(nodes);
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t2 = claim_text(p_nodes, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, a magni\n      dignissimos pariatur quos nemo! Incidunt tempora dolore dicta aliquam\n      voluptas, aperiam nam ullam veritatis unde assumenda? Ad, culpa nemo?");
      p_nodes.forEach(detach_dev);
      t3 = claim_space(nodes);
      img = claim_element(nodes, "IMG", {
        src: true,
        alt: true
      });
      this.h();
    },
    h: function hydrate() {
      add_location(h2, file, 6, 4, 91);
      add_location(p, file, 7, 4, 118);
      if (img.src !== (img_src_value = "http://via.placeholder.com/1200x500")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "placeholder");
      add_location(img, file, 12, 4, 367);
    },
    m: function mount(target, anchor) {
      insert_dev(target, h2, anchor);
      append_dev(h2, t0);
      insert_dev(target, t1, anchor);
      insert_dev(target, p, anchor);
      append_dev(p, t2);
      insert_dev(target, t3, anchor);
      insert_dev(target, img, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(h2);
      if (detaching) detach_dev(t1);
      if (detaching) detach_dev(p);
      if (detaching) detach_dev(t3);
      if (detaching) detach_dev(img);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: fallback_block.name,
    type: "fallback",
    source: "(6:8)      ",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var div;
  var current;
  var default_slot_template =
  /*#slots*/
  ctx[1].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[0], null);
  var default_slot_or_fallback = default_slot || fallback_block(ctx);
  var block = {
    c: function create() {
      div = element("div");
      if (default_slot_or_fallback) default_slot_or_fallback.c();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      if (default_slot_or_fallback) default_slot_or_fallback.l(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "mb-10 clear-both");
      add_location(div, file, 4, 0, 47);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);

      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(div, null);
      }

      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        1) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[0], dirty, null, null);
        }
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot_or_fallback, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot_or_fallback, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Section", slots, ['default']);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Section> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("$$scope" in $$props) $$invalidate(0, $$scope = $$props.$$scope);
  };

  return [$$scope, slots];
}

var Section = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Section, _SvelteComponentDev);

  var _super = _createSuper(Section);

  function Section(options) {
    var _this;

    _classCallCheck(this, Section);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Section",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Section;
}(SvelteComponentDev);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "src/components/TitleBlock.svelte";

function create_fragment$1(ctx) {
  var h3;
  var t;
  var block = {
    c: function create() {
      h3 = element("h3");
      t = text(
      /*heading*/
      ctx[0]);
      this.h();
    },
    l: function claim(nodes) {
      h3 = claim_element(nodes, "H3", {
        class: true
      });
      var h3_nodes = children(h3);
      t = claim_text(h3_nodes,
      /*heading*/
      ctx[0]);
      h3_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h3, "class", "tracking-widest bg-as-red text-white px-6 py-3 w-full mb-6 shadow-md");
      add_location(h3, file$1, 4, 0, 59);
    },
    m: function mount(target, anchor) {
      insert_dev(target, h3, anchor);
      append_dev(h3, t);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*heading*/
      1) set_data_dev(t,
      /*heading*/
      ctx[0]);
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(h3);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$1($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("TitleBlock", slots, []);
  var _$$props$heading = $$props.heading,
      heading = _$$props$heading === void 0 ? "Default Title" : _$$props$heading;
  var writable_props = ["heading"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<TitleBlock> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("heading" in $$props) $$invalidate(0, heading = $$props.heading);
  };

  $$self.$capture_state = function () {
    return {
      heading: heading
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("heading" in $$props) $$invalidate(0, heading = $$props.heading);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [heading];
}

var TitleBlock = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(TitleBlock, _SvelteComponentDev);

  var _super = _createSuper$1(TitleBlock);

  function TitleBlock(options) {
    var _this;

    _classCallCheck(this, TitleBlock);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
      heading: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "TitleBlock",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  _createClass(TitleBlock, [{
    key: "heading",
    get: function get() {
      throw new Error("<TitleBlock>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<TitleBlock>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return TitleBlock;
}(SvelteComponentDev);

export { Section as S, TitleBlock as T };
