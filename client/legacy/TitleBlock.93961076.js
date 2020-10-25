import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, f as _createClass, S as SvelteComponentDev, v as validate_slots, l as element, t as text, n as claim_element, o as children, h as claim_text, k as detach_dev, q as attr_dev, r as add_location, j as insert_dev, u as append_dev, w as _slicedToArray, y as set_data_dev, G as noop } from './client.740fd1a9.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/components/TitleBlock.svelte";

function create_fragment(ctx) {
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
      add_location(h3, file, 4, 0, 59);
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

  var _super = _createSuper(TitleBlock);

  function TitleBlock(options) {
    var _this;

    _classCallCheck(this, TitleBlock);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      heading: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "TitleBlock",
      options: options,
      id: create_fragment.name
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

export { TitleBlock as T };
