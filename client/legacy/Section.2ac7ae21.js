import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, g as create_slot, v as validate_slots, l as element, t as text, m as space, n as claim_element, o as children, h as claim_text, k as detach_dev, p as claim_space, r as add_location, q as attr_dev, j as insert_dev, u as append_dev, w as _slicedToArray, x as update_slot, z as transition_in, A as transition_out } from './client.740fd1a9.js';

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
      if (img.src !== (img_src_value = "https://via.placeholder.com/1200x500")) attr_dev(img, "src", img_src_value);
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

export { Section as S };
