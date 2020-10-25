import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, f as _createClass, S as SvelteComponentDev, g as create_slot, v as validate_slots, t as text, h as claim_text, j as insert_dev, k as detach_dev, l as element, m as space, n as claim_element, o as children, p as claim_space, q as attr_dev, r as add_location, u as append_dev, w as _slicedToArray, x as update_slot, y as set_data_dev, z as transition_in, A as transition_out, B as create_component, C as query_selector_all, D as claim_component, E as mount_component, F as destroy_component } from './client.740fd1a9.js';
import { S as Section } from './Section.2ac7ae21.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/components/Testimonial.svelte"; // (9:10)        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nemo       dolore provident libero perferendis, quasi illum at, mollitia natus fuga       laboriosam, quas quo in cumque. Eveniet animi totam rerum quod?     

function fallback_block(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nemo\n      dolore provident libero perferendis, quasi illum at, mollitia natus fuga\n      laboriosam, quas quo in cumque. Eveniet animi totam rerum quod?");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nemo\n      dolore provident libero perferendis, quasi illum at, mollitia natus fuga\n      laboriosam, quas quo in cumque. Eveniet animi totam rerum quod?");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: fallback_block.name,
    type: "fallback",
    source: "(9:10)        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nemo       dolore provident libero perferendis, quasi illum at, mollitia natus fuga       laboriosam, quas quo in cumque. Eveniet animi totam rerum quod?     ",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var section;
  var span0;
  var t0;
  var t1;
  var p0;
  var t2;
  var span1;
  var t3;
  var t4;
  var p1;
  var t5;
  var current;
  var default_slot_template =
  /*#slots*/
  ctx[2].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[1], null);
  var default_slot_or_fallback = default_slot || fallback_block(ctx);
  var block = {
    c: function create() {
      section = element("section");
      span0 = element("span");
      t0 = text("\"");
      t1 = space();
      p0 = element("p");
      if (default_slot_or_fallback) default_slot_or_fallback.c();
      t2 = space();
      span1 = element("span");
      t3 = text("\"");
      t4 = space();
      p1 = element("p");
      t5 = text(
      /*name*/
      ctx[0]);
      this.h();
    },
    l: function claim(nodes) {
      section = claim_element(nodes, "SECTION", {
        class: true
      });
      var section_nodes = children(section);
      span0 = claim_element(section_nodes, "SPAN", {
        class: true
      });
      var span0_nodes = children(span0);
      t0 = claim_text(span0_nodes, "\"");
      span0_nodes.forEach(detach_dev);
      t1 = claim_space(section_nodes);
      p0 = claim_element(section_nodes, "P", {
        class: true
      });
      var p0_nodes = children(p0);
      if (default_slot_or_fallback) default_slot_or_fallback.l(p0_nodes);
      p0_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      span1 = claim_element(section_nodes, "SPAN", {
        class: true
      });
      var span1_nodes = children(span1);
      t3 = claim_text(span1_nodes, "\"");
      span1_nodes.forEach(detach_dev);
      t4 = claim_space(section_nodes);
      p1 = claim_element(section_nodes, "P", {
        class: true
      });
      var p1_nodes = children(p1);
      t5 = claim_text(p1_nodes,
      /*name*/
      ctx[0]);
      p1_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span0, "class", "quote block absolute font-serif text-as-green svelte-12z24il");
      add_location(span0, file, 6, 2, 140);
      attr_dev(p0, "class", "px-8 ");
      add_location(p0, file, 7, 2, 211);
      attr_dev(span1, "class", "quote quote-end block absolute font-serif text-as-green svelte-12z24il");
      add_location(span1, file, 14, 2, 486);
      attr_dev(p1, "class", "text-center font-medium text-as-green");
      add_location(p1, file, 16, 2, 568);
      attr_dev(section, "class", "relative mb-20 ml-auto mr-auto max-w-lg");
      add_location(section, file, 5, 0, 80);
    },
    m: function mount(target, anchor) {
      insert_dev(target, section, anchor);
      append_dev(section, span0);
      append_dev(span0, t0);
      append_dev(section, t1);
      append_dev(section, p0);

      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(p0, null);
      }

      append_dev(section, t2);
      append_dev(section, span1);
      append_dev(span1, t3);
      append_dev(section, t4);
      append_dev(section, p1);
      append_dev(p1, t5);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        2) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[1], dirty, null, null);
        }
      }

      if (!current || dirty &
      /*name*/
      1) set_data_dev(t5,
      /*name*/
      ctx[0]);
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
      if (detaching) detach_dev(section);
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
  validate_slots("Testimonial", slots, ['default']);
  var _$$props$name = $$props.name,
      name = _$$props$name === void 0 ? "Quote Name" : _$$props$name;
  var writable_props = ["name"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Testimonial> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("name" in $$props) $$invalidate(0, name = $$props.name);
    if ("$$scope" in $$props) $$invalidate(1, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      name: name
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("name" in $$props) $$invalidate(0, name = $$props.name);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [name, $$scope, slots];
}

var Testimonial = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Testimonial, _SvelteComponentDev);

  var _super = _createSuper(Testimonial);

  function Testimonial(options) {
    var _this;

    _classCallCheck(this, Testimonial);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      name: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Testimonial",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(Testimonial, [{
    key: "name",
    get: function get() {
      throw new Error("<Testimonial>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Testimonial>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Testimonial;
}(SvelteComponentDev);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "src/routes/index.svelte"; // (44:0) <Section>

function create_default_slot_5(ctx) {
  var div;
  var h3;
  var t0;
  var t1;
  var p0;
  var t2;
  var t3;
  var br0;
  var t4;
  var img;
  var img_src_value;
  var t5;
  var br1;
  var t6;
  var p1;
  var t7;
  var a0;
  var t8;
  var t9;
  var a1;
  var t10;
  var block = {
    c: function create() {
      div = element("div");
      h3 = element("h3");
      t0 = text("Cosmetic, Restorative and Implant Dental Services");
      t1 = space();
      p0 = element("p");
      t2 = text("With 30 years experience, I recently set up Artisan Smiles with the aim to\n      attract a select clientele. So I can concentrate on delivering exceptional\n      quality control with customer satisfaction and build a loyal working\n      relationship with reliability.");
      t3 = space();
      br0 = element("br");
      t4 = space();
      img = element("img");
      t5 = space();
      br1 = element("br");
      t6 = space();
      p1 = element("p");
      t7 = text("For my information please download my\n      ");
      a0 = element("a");
      t8 = text("brochure");
      t9 = text("\n      and connect with me on\n      ");
      a1 = element("a");
      t10 = text("LinkedIn");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      h3 = claim_element(div_nodes, "H3", {});
      var h3_nodes = children(h3);
      t0 = claim_text(h3_nodes, "Cosmetic, Restorative and Implant Dental Services");
      h3_nodes.forEach(detach_dev);
      t1 = claim_space(div_nodes);
      p0 = claim_element(div_nodes, "P", {});
      var p0_nodes = children(p0);
      t2 = claim_text(p0_nodes, "With 30 years experience, I recently set up Artisan Smiles with the aim to\n      attract a select clientele. So I can concentrate on delivering exceptional\n      quality control with customer satisfaction and build a loyal working\n      relationship with reliability.");
      p0_nodes.forEach(detach_dev);
      t3 = claim_space(div_nodes);
      br0 = claim_element(div_nodes, "BR", {});
      t4 = claim_space(div_nodes);
      img = claim_element(div_nodes, "IMG", {
        class: true,
        src: true,
        alt: true,
        width: true
      });
      t5 = claim_space(div_nodes);
      br1 = claim_element(div_nodes, "BR", {});
      t6 = claim_space(div_nodes);
      p1 = claim_element(div_nodes, "P", {});
      var p1_nodes = children(p1);
      t7 = claim_text(p1_nodes, "For my information please download my\n      ");
      a0 = claim_element(p1_nodes, "A", {
        href: true,
        target: true,
        class: true
      });
      var a0_nodes = children(a0);
      t8 = claim_text(a0_nodes, "brochure");
      a0_nodes.forEach(detach_dev);
      t9 = claim_text(p1_nodes, "\n      and connect with me on\n      ");
      a1 = claim_element(p1_nodes, "A", {
        href: true,
        target: true,
        class: true
      });
      var a1_nodes = children(a1);
      t10 = claim_text(a1_nodes, "LinkedIn");
      a1_nodes.forEach(detach_dev);
      p1_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(h3, file$1, 45, 4, 1627);
      add_location(p0, file$1, 46, 4, 1690);
      add_location(br0, file$1, 52, 4, 1981);
      attr_dev(img, "class", "float-none m-auto mb-6");
      if (img.src !== (img_src_value = "philip-dobinson.png")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "Philip dobinson portrait");
      attr_dev(img, "width", "280");
      add_location(img, file$1, 53, 4, 1992);
      add_location(br1, file$1, 58, 4, 2128);
      attr_dev(a0, "href", "ArtisanSmiles_Brochure.pdf");
      attr_dev(a0, "target", "_blank");
      attr_dev(a0, "class", "svelte-cnnkpz");
      add_location(a0, file$1, 61, 6, 2193);
      attr_dev(a1, "href", "https://uk.linkedin.com/in/phildobinson");
      attr_dev(a1, "target", "_blank");
      attr_dev(a1, "class", "svelte-cnnkpz");
      add_location(a1, file$1, 63, 6, 2294);
      add_location(p1, file$1, 59, 4, 2139);
      attr_dev(div, "class", "text-center section-content m-auto max-w-2xl");
      add_location(div, file$1, 44, 2, 1564);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, h3);
      append_dev(h3, t0);
      append_dev(div, t1);
      append_dev(div, p0);
      append_dev(p0, t2);
      append_dev(div, t3);
      append_dev(div, br0);
      append_dev(div, t4);
      append_dev(div, img);
      append_dev(div, t5);
      append_dev(div, br1);
      append_dev(div, t6);
      append_dev(div, p1);
      append_dev(p1, t7);
      append_dev(p1, a0);
      append_dev(a0, t8);
      append_dev(p1, t9);
      append_dev(p1, a1);
      append_dev(a1, t10);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_5.name,
    type: "slot",
    source: "(44:0) <Section>",
    ctx: ctx
  });
  return block;
} // (78:0) <Section>


function create_default_slot_4(ctx) {
  var div;
  var p;
  var t0;
  var t1;
  var br0;
  var t2;
  var img;
  var img_src_value;
  var t3;
  var br1;
  var block = {
    c: function create() {
      div = element("div");
      p = element("p");
      t0 = text("You can request a sample case to be dropped at your practice to see and\n      feel the quality of the product. Thoroughly disinfected after each visit.");
      t1 = space();
      br0 = element("br");
      t2 = space();
      img = element("img");
      t3 = space();
      br1 = element("br");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      p = claim_element(div_nodes, "P", {});
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "You can request a sample case to be dropped at your practice to see and\n      feel the quality of the product. Thoroughly disinfected after each visit.");
      p_nodes.forEach(detach_dev);
      t1 = claim_space(div_nodes);
      br0 = claim_element(div_nodes, "BR", {});
      t2 = claim_space(div_nodes);
      img = claim_element(div_nodes, "IMG", {
        class: true,
        src: true,
        alt: true,
        width: true
      });
      t3 = claim_space(div_nodes);
      br1 = claim_element(div_nodes, "BR", {});
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(p, file$1, 79, 4, 2595);
      add_location(br0, file$1, 83, 4, 2770);
      attr_dev(img, "class", "float-none m-auto mb-6");
      if (img.src !== (img_src_value = "case.jpeg")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "sample case");
      attr_dev(img, "width", "480");
      add_location(img, file$1, 84, 4, 2781);
      add_location(br1, file$1, 89, 4, 2894);
      attr_dev(div, "class", "text-center section-content m-auto max-w-2xl");
      add_location(div, file$1, 78, 2, 2532);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, p);
      append_dev(p, t0);
      append_dev(div, t1);
      append_dev(div, br0);
      append_dev(div, t2);
      append_dev(div, img);
      append_dev(div, t3);
      append_dev(div, br1);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_4.name,
    type: "slot",
    source: "(78:0) <Section>",
    ctx: ctx
  });
  return block;
} // (101:0) <Testimonial name="Srini Krishnamurthi Monkseaton Dental Practice.">


function create_default_slot_3(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("I have been using Artisan Smiles for private work for over a year now. I am\n  very impressed with Phil’s work. He is very experienced technician and is\n  extremely professional. The service I have received has been of a very high\n  standard and never have to worry about the work been back on time. I am\n  extremely pleased with Artisan Smiles and would definitely recommend this\n  laboratory.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "I have been using Artisan Smiles for private work for over a year now. I am\n  very impressed with Phil’s work. He is very experienced technician and is\n  extremely professional. The service I have received has been of a very high\n  standard and never have to worry about the work been back on time. I am\n  extremely pleased with Artisan Smiles and would definitely recommend this\n  laboratory.");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_3.name,
    type: "slot",
    source: "(101:0) <Testimonial name=\\\"Srini Krishnamurthi Monkseaton Dental Practice.\\\">",
    ctx: ctx
  });
  return block;
} // (109:0) <Testimonial name="Joanne Duggan Bedlingtonshire Dental Practice.">


function create_default_slot_2(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("I have been incredibly happy with the work received from Artisan Smiles. Phil\n  performs all the stages of his work and is good at communicating with the\n  dentist, ensuring an enhanced product and service.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "I have been incredibly happy with the work received from Artisan Smiles. Phil\n  performs all the stages of his work and is good at communicating with the\n  dentist, ensuring an enhanced product and service.");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_2.name,
    type: "slot",
    source: "(109:0) <Testimonial name=\\\"Joanne Duggan Bedlingtonshire Dental Practice.\\\">",
    ctx: ctx
  });
  return block;
} // (122:0) <Section>


function create_default_slot_1(ctx) {
  var div1;
  var p0;
  var t0;
  var i;
  var t1;
  var t2;
  var p1;
  var b0;
  var t3;
  var t4;
  var b1;
  var t5;
  var t6;
  var br0;
  var t7;
  var div0;
  var img0;
  var img0_src_value;
  var t8;
  var img1;
  var img1_src_value;
  var t9;
  var br1;
  var block = {
    c: function create() {
      div1 = element("div");
      p0 = element("p");
      t0 = text("Available on certain products, ");
      i = element("i");
      t1 = text("for example:");
      t2 = space();
      p1 = element("p");
      b0 = element("b");
      t3 = text("24hr turnaround on 2 unit cases");
      t4 = text("\n      ideal for screw retained implants, and\n      ");
      b1 = element("b");
      t5 = text("up to 5 days for more units");
      t6 = space();
      br0 = element("br");
      t7 = space();
      div0 = element("div");
      img0 = element("img");
      t8 = space();
      img1 = element("img");
      t9 = space();
      br1 = element("br");
      this.h();
    },
    l: function claim(nodes) {
      div1 = claim_element(nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      p0 = claim_element(div1_nodes, "P", {});
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, "Available on certain products, ");
      i = claim_element(p0_nodes, "I", {});
      var i_nodes = children(i);
      t1 = claim_text(i_nodes, "for example:");
      i_nodes.forEach(detach_dev);
      p0_nodes.forEach(detach_dev);
      t2 = claim_space(div1_nodes);
      p1 = claim_element(div1_nodes, "P", {});
      var p1_nodes = children(p1);
      b0 = claim_element(p1_nodes, "B", {});
      var b0_nodes = children(b0);
      t3 = claim_text(b0_nodes, "24hr turnaround on 2 unit cases");
      b0_nodes.forEach(detach_dev);
      t4 = claim_text(p1_nodes, "\n      ideal for screw retained implants, and\n      ");
      b1 = claim_element(p1_nodes, "B", {});
      var b1_nodes = children(b1);
      t5 = claim_text(b1_nodes, "up to 5 days for more units");
      b1_nodes.forEach(detach_dev);
      p1_nodes.forEach(detach_dev);
      t6 = claim_space(div1_nodes);
      br0 = claim_element(div1_nodes, "BR", {});
      t7 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      img0 = claim_element(div0_nodes, "IMG", {
        class: true,
        src: true,
        alt: true,
        width: true
      });
      t8 = claim_space(div0_nodes);
      img1 = claim_element(div0_nodes, "IMG", {
        class: true,
        src: true,
        alt: true,
        width: true
      });
      div0_nodes.forEach(detach_dev);
      t9 = claim_space(div1_nodes);
      br1 = claim_element(div1_nodes, "BR", {});
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(i, file$1, 123, 38, 4001);
      add_location(p0, file$1, 123, 4, 3967);
      add_location(b0, file$1, 125, 6, 4039);
      add_location(b1, file$1, 127, 6, 4129);
      add_location(p1, file$1, 124, 4, 4029);
      add_location(br0, file$1, 129, 4, 4177);
      attr_dev(img0, "class", "float-none m-auto mb-6");
      if (img0.src !== (img0_src_value = "image13.jpeg")) attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "alt", "single tooth");
      attr_dev(img0, "width", "380");
      add_location(img0, file$1, 131, 6, 4232);
      attr_dev(img1, "class", "float-none m-auto mb-6");
      if (img1.src !== (img1_src_value = "image12.jpeg")) attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "alt", "multiple teeth");
      attr_dev(img1, "width", "380");
      add_location(img1, file$1, 136, 6, 4359);
      attr_dev(div0, "class", "flex flex-row flex-wrap");
      add_location(div0, file$1, 130, 4, 4188);
      add_location(br1, file$1, 142, 4, 4497);
      attr_dev(div1, "class", "text-center section-content");
      add_location(div1, file$1, 122, 2, 3921);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div1, anchor);
      append_dev(div1, p0);
      append_dev(p0, t0);
      append_dev(p0, i);
      append_dev(i, t1);
      append_dev(div1, t2);
      append_dev(div1, p1);
      append_dev(p1, b0);
      append_dev(b0, t3);
      append_dev(p1, t4);
      append_dev(p1, b1);
      append_dev(b1, t5);
      append_dev(div1, t6);
      append_dev(div1, br0);
      append_dev(div1, t7);
      append_dev(div1, div0);
      append_dev(div0, img0);
      append_dev(div0, t8);
      append_dev(div0, img1);
      append_dev(div1, t9);
      append_dev(div1, br1);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_1.name,
    type: "slot",
    source: "(122:0) <Section>",
    ctx: ctx
  });
  return block;
} // (164:0) <Section>


function create_default_slot(ctx) {
  var div;
  var img0;
  var img0_src_value;
  var t0;
  var img1;
  var img1_src_value;
  var t1;
  var img2;
  var img2_src_value;
  var t2;
  var img3;
  var img3_src_value;
  var t3;
  var img4;
  var img4_src_value;
  var t4;
  var img5;
  var img5_src_value;
  var t5;
  var img6;
  var img6_src_value;
  var t6;
  var img7;
  var img7_src_value;
  var t7;
  var br;
  var block = {
    c: function create() {
      div = element("div");
      img0 = element("img");
      t0 = space();
      img1 = element("img");
      t1 = space();
      img2 = element("img");
      t2 = space();
      img3 = element("img");
      t3 = space();
      img4 = element("img");
      t4 = space();
      img5 = element("img");
      t5 = space();
      img6 = element("img");
      t6 = space();
      img7 = element("img");
      t7 = space();
      br = element("br");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      img0 = claim_element(div_nodes, "IMG", {
        class: true,
        src: true,
        alt: true,
        width: true
      });
      t0 = claim_space(div_nodes);
      img1 = claim_element(div_nodes, "IMG", {
        class: true,
        src: true,
        alt: true,
        width: true
      });
      t1 = claim_space(div_nodes);
      img2 = claim_element(div_nodes, "IMG", {
        class: true,
        src: true,
        alt: true,
        width: true
      });
      t2 = claim_space(div_nodes);
      img3 = claim_element(div_nodes, "IMG", {
        class: true,
        src: true,
        alt: true,
        width: true
      });
      t3 = claim_space(div_nodes);
      img4 = claim_element(div_nodes, "IMG", {
        class: true,
        src: true,
        alt: true,
        width: true
      });
      t4 = claim_space(div_nodes);
      img5 = claim_element(div_nodes, "IMG", {
        class: true,
        src: true,
        alt: true,
        width: true
      });
      t5 = claim_space(div_nodes);
      img6 = claim_element(div_nodes, "IMG", {
        class: true,
        src: true,
        alt: true,
        width: true
      });
      t6 = claim_space(div_nodes);
      img7 = claim_element(div_nodes, "IMG", {
        class: true,
        src: true,
        alt: true,
        width: true
      });
      t7 = claim_space(div_nodes);
      br = claim_element(div_nodes, "BR", {});
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(img0, "class", "float-none m-auto mb-6");
      if (img0.src !== (img0_src_value = "logo-straumann.jpeg")) attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "alt", "logo straumann");
      attr_dev(img0, "width", "200");
      add_location(img0, file$1, 166, 4, 4987);
      attr_dev(img1, "class", "float-none m-auto mb-6");
      if (img1.src !== (img1_src_value = "logo-vita.jpeg")) attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "alt", "logo vita");
      attr_dev(img1, "width", "200");
      add_location(img1, file$1, 171, 4, 5113);
      attr_dev(img2, "class", "float-none m-auto mb-6");
      if (img2.src !== (img2_src_value = "logo-ids.jpeg")) attr_dev(img2, "src", img2_src_value);
      attr_dev(img2, "alt", "IDS logo");
      attr_dev(img2, "width", "200");
      add_location(img2, file$1, 176, 4, 5229);
      attr_dev(img3, "class", "float-none m-auto mb-6");
      if (img3.src !== (img3_src_value = "logo-dentsply.jpeg")) attr_dev(img3, "src", img3_src_value);
      attr_dev(img3, "alt", "logo dentsply");
      attr_dev(img3, "width", "200");
      add_location(img3, file$1, 181, 4, 5343);
      attr_dev(img4, "class", "float-none m-auto mb-6");
      if (img4.src !== (img4_src_value = "logo-emax.jpeg")) attr_dev(img4, "src", img4_src_value);
      attr_dev(img4, "alt", "logo emax");
      attr_dev(img4, "width", "200");
      add_location(img4, file$1, 186, 4, 5467);
      attr_dev(img5, "class", "float-none m-auto mb-6");
      if (img5.src !== (img5_src_value = "logo-ivoclar.jpeg")) attr_dev(img5, "src", img5_src_value);
      attr_dev(img5, "alt", "logo ivoclar");
      attr_dev(img5, "width", "200");
      add_location(img5, file$1, 191, 4, 5583);
      attr_dev(img6, "class", "float-none m-auto mb-6");
      if (img6.src !== (img6_src_value = "logo-duceram.jpeg")) attr_dev(img6, "src", img6_src_value);
      attr_dev(img6, "alt", "logo deceram");
      attr_dev(img6, "width", "200");
      add_location(img6, file$1, 196, 4, 5705);
      attr_dev(img7, "class", "float-none m-auto mb-6");
      if (img7.src !== (img7_src_value = "logo-nobel.jpeg")) attr_dev(img7, "src", img7_src_value);
      attr_dev(img7, "alt", "logo nobel");
      attr_dev(img7, "width", "200");
      add_location(img7, file$1, 201, 4, 5827);
      add_location(br, file$1, 207, 4, 5946);
      attr_dev(div, "class", "flex flex-row flex-wrap justify-items-center text-center section-content");
      add_location(div, file$1, 164, 2, 4892);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, img0);
      append_dev(div, t0);
      append_dev(div, img1);
      append_dev(div, t1);
      append_dev(div, img2);
      append_dev(div, t2);
      append_dev(div, img3);
      append_dev(div, t3);
      append_dev(div, img4);
      append_dev(div, t4);
      append_dev(div, img5);
      append_dev(div, t5);
      append_dev(div, img6);
      append_dev(div, t6);
      append_dev(div, img7);
      append_dev(div, t7);
      append_dev(div, br);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(164:0) <Section>",
    ctx: ctx
  });
  return block;
}

function create_fragment$1(ctx) {
  var style;
  var t0;
  var t1;
  var br0;
  var t2;
  var p0;
  var t3;
  var t4;
  var img;
  var img_src_value;
  var t5;
  var br1;
  var t6;
  var br2;
  var t7;
  var h1;
  var t8;
  var t9;
  var p1;
  var t10;
  var b;
  var t11;
  var br3;
  var t12;
  var br4;
  var t13;
  var br5;
  var t14;
  var span;
  var t15;
  var t16;
  var br6;
  var t17;
  var br7;
  var t18;
  var hr0;
  var t19;
  var br8;
  var t20;
  var br9;
  var t21;
  var br10;
  var t22;
  var section0;
  var t23;
  var br11;
  var t24;
  var hr1;
  var t25;
  var br12;
  var t26;
  var br13;
  var t27;
  var h20;
  var t28;
  var t29;
  var br14;
  var t30;
  var section1;
  var t31;
  var br15;
  var t32;
  var hr2;
  var t33;
  var br16;
  var t34;
  var br17;
  var t35;
  var h21;
  var t36;
  var t37;
  var br18;
  var t38;
  var testimonial0;
  var t39;
  var testimonial1;
  var t40;
  var hr3;
  var t41;
  var br19;
  var t42;
  var br20;
  var t43;
  var h22;
  var t44;
  var t45;
  var br21;
  var t46;
  var section2;
  var t47;
  var hr4;
  var t48;
  var br22;
  var t49;
  var br23;
  var t50;
  var h23;
  var t51;
  var t52;
  var br24;
  var t53;
  var br25;
  var t54;
  var section3;
  var current;
  section0 = new Section({
    props: {
      $$slots: {
        default: [create_default_slot_5]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  section1 = new Section({
    props: {
      $$slots: {
        default: [create_default_slot_4]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  testimonial0 = new Testimonial({
    props: {
      name: "Srini Krishnamurthi Monkseaton Dental Practice.",
      $$slots: {
        default: [create_default_slot_3]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  testimonial1 = new Testimonial({
    props: {
      name: "Joanne Duggan Bedlingtonshire Dental\nPractice.",
      $$slots: {
        default: [create_default_slot_2]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  section2 = new Section({
    props: {
      $$slots: {
        default: [create_default_slot_1]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  section3 = new Section({
    props: {
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      style = element("style");
      t0 = text("#sapper {\n  background: white;\n}\n\nnav {\n  border-bottom: 1px solid transparent !important;\n  font-weight: 300;\n  /* padding: 0 1em; */\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yb3V0ZXMvc3JjL3JvdXRlcy9pbmRleC5zdmVsdGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSwrQ0FBK0M7RUFDL0MsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL3JvdXRlcy9pbmRleC5zdmVsdGUiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAjc2FwcGVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIH1cbiAgICBuYXYge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgLyogcGFkZGluZzogMCAxZW07ICovXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB9XG4gICJdfQ== */");
      t1 = space();
      br0 = element("br");
      t2 = space();
      p0 = element("p");
      t3 = text("PHILIP DOBINSON");
      t4 = space();
      img = element("img");
      t5 = space();
      br1 = element("br");
      t6 = space();
      br2 = element("br");
      t7 = space();
      h1 = element("h1");
      t8 = text("Welcome to Artisan Smiles");
      t9 = space();
      p1 = element("p");
      t10 = text("The North East\n  ");
      b = element("b");
      t11 = text("Premier Dental Laboratory");
      br3 = element("br");
      t12 = space();
      br4 = element("br");
      t13 = space();
      br5 = element("br");
      t14 = space();
      span = element("span");
      t15 = text("Where Craftsmanship, Quality & perfection\n    come together");
      t16 = space();
      br6 = element("br");
      t17 = space();
      br7 = element("br");
      t18 = space();
      hr0 = element("hr");
      t19 = space();
      br8 = element("br");
      t20 = space();
      br9 = element("br");
      t21 = space();
      br10 = element("br");
      t22 = space();
      create_component(section0.$$.fragment);
      t23 = space();
      br11 = element("br");
      t24 = space();
      hr1 = element("hr");
      t25 = space();
      br12 = element("br");
      t26 = space();
      br13 = element("br");
      t27 = space();
      h20 = element("h2");
      t28 = text("Request a sample case");
      t29 = space();
      br14 = element("br");
      t30 = space();
      create_component(section1.$$.fragment);
      t31 = space();
      br15 = element("br");
      t32 = space();
      hr2 = element("hr");
      t33 = space();
      br16 = element("br");
      t34 = space();
      br17 = element("br");
      t35 = space();
      h21 = element("h2");
      t36 = text("Testimonials");
      t37 = space();
      br18 = element("br");
      t38 = space();
      create_component(testimonial0.$$.fragment);
      t39 = space();
      create_component(testimonial1.$$.fragment);
      t40 = space();
      hr3 = element("hr");
      t41 = space();
      br19 = element("br");
      t42 = space();
      br20 = element("br");
      t43 = space();
      h22 = element("h2");
      t44 = text("Special services & discounts");
      t45 = space();
      br21 = element("br");
      t46 = space();
      create_component(section2.$$.fragment);
      t47 = space();
      hr4 = element("hr");
      t48 = space();
      br22 = element("br");
      t49 = space();
      br23 = element("br");
      t50 = space();
      h23 = element("h2");
      t51 = text("Associates & skills");
      t52 = space();
      br24 = element("br");
      t53 = space();
      br25 = element("br");
      t54 = space();
      create_component(section3.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-9e7oki\"]", document.head);
      style = claim_element(head_nodes, "STYLE", {});
      var style_nodes = children(style);
      t0 = claim_text(style_nodes, "#sapper {\n  background: white;\n}\n\nnav {\n  border-bottom: 1px solid transparent !important;\n  font-weight: 300;\n  /* padding: 0 1em; */\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yb3V0ZXMvc3JjL3JvdXRlcy9pbmRleC5zdmVsdGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSwrQ0FBK0M7RUFDL0MsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL3JvdXRlcy9pbmRleC5zdmVsdGUiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAjc2FwcGVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIH1cbiAgICBuYXYge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgLyogcGFkZGluZzogMCAxZW07ICovXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB9XG4gICJdfQ== */");
      style_nodes.forEach(detach_dev);
      head_nodes.forEach(detach_dev);
      t1 = claim_space(nodes);
      br0 = claim_element(nodes, "BR", {});
      t2 = claim_space(nodes);
      p0 = claim_element(nodes, "P", {
        class: true
      });
      var p0_nodes = children(p0);
      t3 = claim_text(p0_nodes, "PHILIP DOBINSON");
      p0_nodes.forEach(detach_dev);
      t4 = claim_space(nodes);
      img = claim_element(nodes, "IMG", {
        class: true,
        alt: true,
        src: true
      });
      t5 = claim_space(nodes);
      br1 = claim_element(nodes, "BR", {});
      t6 = claim_space(nodes);
      br2 = claim_element(nodes, "BR", {});
      t7 = claim_space(nodes);
      h1 = claim_element(nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t8 = claim_text(h1_nodes, "Welcome to Artisan Smiles");
      h1_nodes.forEach(detach_dev);
      t9 = claim_space(nodes);
      p1 = claim_element(nodes, "P", {
        class: true
      });
      var p1_nodes = children(p1);
      t10 = claim_text(p1_nodes, "The North East\n  ");
      b = claim_element(p1_nodes, "B", {
        class: true
      });
      var b_nodes = children(b);
      t11 = claim_text(b_nodes, "Premier Dental Laboratory");
      b_nodes.forEach(detach_dev);
      br3 = claim_element(p1_nodes, "BR", {});
      t12 = claim_space(p1_nodes);
      br4 = claim_element(p1_nodes, "BR", {});
      t13 = claim_space(p1_nodes);
      br5 = claim_element(p1_nodes, "BR", {});
      t14 = claim_space(p1_nodes);
      span = claim_element(p1_nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      t15 = claim_text(span_nodes, "Where Craftsmanship, Quality & perfection\n    come together");
      span_nodes.forEach(detach_dev);
      p1_nodes.forEach(detach_dev);
      t16 = claim_space(nodes);
      br6 = claim_element(nodes, "BR", {});
      t17 = claim_space(nodes);
      br7 = claim_element(nodes, "BR", {});
      t18 = claim_space(nodes);
      hr0 = claim_element(nodes, "HR", {});
      t19 = claim_space(nodes);
      br8 = claim_element(nodes, "BR", {});
      t20 = claim_space(nodes);
      br9 = claim_element(nodes, "BR", {});
      t21 = claim_space(nodes);
      br10 = claim_element(nodes, "BR", {});
      t22 = claim_space(nodes);
      claim_component(section0.$$.fragment, nodes);
      t23 = claim_space(nodes);
      br11 = claim_element(nodes, "BR", {});
      t24 = claim_space(nodes);
      hr1 = claim_element(nodes, "HR", {});
      t25 = claim_space(nodes);
      br12 = claim_element(nodes, "BR", {});
      t26 = claim_space(nodes);
      br13 = claim_element(nodes, "BR", {});
      t27 = claim_space(nodes);
      h20 = claim_element(nodes, "H2", {
        class: true
      });
      var h20_nodes = children(h20);
      t28 = claim_text(h20_nodes, "Request a sample case");
      h20_nodes.forEach(detach_dev);
      t29 = claim_space(nodes);
      br14 = claim_element(nodes, "BR", {});
      t30 = claim_space(nodes);
      claim_component(section1.$$.fragment, nodes);
      t31 = claim_space(nodes);
      br15 = claim_element(nodes, "BR", {});
      t32 = claim_space(nodes);
      hr2 = claim_element(nodes, "HR", {});
      t33 = claim_space(nodes);
      br16 = claim_element(nodes, "BR", {});
      t34 = claim_space(nodes);
      br17 = claim_element(nodes, "BR", {});
      t35 = claim_space(nodes);
      h21 = claim_element(nodes, "H2", {
        class: true
      });
      var h21_nodes = children(h21);
      t36 = claim_text(h21_nodes, "Testimonials");
      h21_nodes.forEach(detach_dev);
      t37 = claim_space(nodes);
      br18 = claim_element(nodes, "BR", {});
      t38 = claim_space(nodes);
      claim_component(testimonial0.$$.fragment, nodes);
      t39 = claim_space(nodes);
      claim_component(testimonial1.$$.fragment, nodes);
      t40 = claim_space(nodes);
      hr3 = claim_element(nodes, "HR", {});
      t41 = claim_space(nodes);
      br19 = claim_element(nodes, "BR", {});
      t42 = claim_space(nodes);
      br20 = claim_element(nodes, "BR", {});
      t43 = claim_space(nodes);
      h22 = claim_element(nodes, "H2", {
        class: true
      });
      var h22_nodes = children(h22);
      t44 = claim_text(h22_nodes, "Special services & discounts");
      h22_nodes.forEach(detach_dev);
      t45 = claim_space(nodes);
      br21 = claim_element(nodes, "BR", {});
      t46 = claim_space(nodes);
      claim_component(section2.$$.fragment, nodes);
      t47 = claim_space(nodes);
      hr4 = claim_element(nodes, "HR", {});
      t48 = claim_space(nodes);
      br22 = claim_element(nodes, "BR", {});
      t49 = claim_space(nodes);
      br23 = claim_element(nodes, "BR", {});
      t50 = claim_space(nodes);
      h23 = claim_element(nodes, "H2", {
        class: true
      });
      var h23_nodes = children(h23);
      t51 = claim_text(h23_nodes, "Associates & skills");
      h23_nodes.forEach(detach_dev);
      t52 = claim_space(nodes);
      br24 = claim_element(nodes, "BR", {});
      t53 = claim_space(nodes);
      br25 = claim_element(nodes, "BR", {});
      t54 = claim_space(nodes);
      claim_component(section3.$$.fragment, nodes);
      this.h();
    },
    h: function hydrate() {
      document.title = "Artisan Smiles Dental Lab";
      add_location(style, file$1, 7, 2, 193);
      add_location(br0, file$1, 19, 0, 1015);
      attr_dev(p0, "class", "text-center font-bold text-xl");
      add_location(p0, file$1, 20, 0, 1022);
      attr_dev(img, "class", "w-full max-w-3xl m-auto");
      attr_dev(img, "alt", "logo");
      if (img.src !== (img_src_value = "artisan-smiles-logo.png")) attr_dev(img, "src", img_src_value);
      add_location(img, file$1, 21, 0, 1083);
      add_location(br1, file$1, 22, 0, 1164);
      add_location(br2, file$1, 23, 0, 1171);
      attr_dev(h1, "class", "tracking-wider text-center");
      add_location(h1, file$1, 25, 0, 1179);
      attr_dev(b, "class", "text-as-green");
      add_location(b, file$1, 28, 2, 1319);
      add_location(br3, file$1, 28, 56, 1373);
      add_location(br4, file$1, 29, 2, 1382);
      add_location(br5, file$1, 30, 2, 1391);
      attr_dev(span, "class", "text-gray-600 italic");
      add_location(span, file$1, 31, 2, 1400);
      attr_dev(p1, "class", "text-center -mt-4  text-lg font-medium");
      add_location(p1, file$1, 26, 0, 1249);
      add_location(br6, file$1, 35, 0, 1508);
      add_location(br7, file$1, 36, 0, 1515);
      add_location(hr0, file$1, 38, 0, 1523);
      add_location(br8, file$1, 40, 0, 1531);
      add_location(br9, file$1, 41, 0, 1538);
      add_location(br10, file$1, 42, 0, 1545);
      add_location(br11, file$1, 69, 0, 2418);
      add_location(hr1, file$1, 71, 0, 2426);
      add_location(br12, file$1, 73, 0, 2434);
      add_location(br13, file$1, 74, 0, 2441);
      attr_dev(h20, "class", "text-center text-as-green");
      add_location(h20, file$1, 75, 0, 2448);
      add_location(br14, file$1, 76, 0, 2513);
      add_location(br15, file$1, 93, 0, 2922);
      add_location(hr2, file$1, 94, 0, 2929);
      add_location(br16, file$1, 95, 0, 2936);
      add_location(br17, file$1, 96, 0, 2943);
      attr_dev(h21, "class", "text-center text-as-green");
      add_location(h21, file$1, 97, 0, 2950);
      add_location(br18, file$1, 98, 0, 3006);
      add_location(hr3, file$1, 115, 0, 3808);
      add_location(br19, file$1, 117, 0, 3816);
      add_location(br20, file$1, 118, 0, 3823);
      attr_dev(h22, "class", "text-center text-as-green");
      add_location(h22, file$1, 119, 0, 3830);
      add_location(br21, file$1, 120, 0, 3902);
      add_location(hr4, file$1, 146, 0, 4525);
      add_location(br22, file$1, 148, 0, 4533);
      add_location(br23, file$1, 149, 0, 4540);
      attr_dev(h23, "class", "text-center text-as-green");
      add_location(h23, file$1, 150, 0, 4547);
      add_location(br24, file$1, 151, 0, 4610);
      add_location(br25, file$1, 162, 0, 4873);
    },
    m: function mount(target, anchor) {
      append_dev(document.head, style);
      append_dev(style, t0);
      insert_dev(target, t1, anchor);
      insert_dev(target, br0, anchor);
      insert_dev(target, t2, anchor);
      insert_dev(target, p0, anchor);
      append_dev(p0, t3);
      insert_dev(target, t4, anchor);
      insert_dev(target, img, anchor);
      insert_dev(target, t5, anchor);
      insert_dev(target, br1, anchor);
      insert_dev(target, t6, anchor);
      insert_dev(target, br2, anchor);
      insert_dev(target, t7, anchor);
      insert_dev(target, h1, anchor);
      append_dev(h1, t8);
      insert_dev(target, t9, anchor);
      insert_dev(target, p1, anchor);
      append_dev(p1, t10);
      append_dev(p1, b);
      append_dev(b, t11);
      append_dev(p1, br3);
      append_dev(p1, t12);
      append_dev(p1, br4);
      append_dev(p1, t13);
      append_dev(p1, br5);
      append_dev(p1, t14);
      append_dev(p1, span);
      append_dev(span, t15);
      insert_dev(target, t16, anchor);
      insert_dev(target, br6, anchor);
      insert_dev(target, t17, anchor);
      insert_dev(target, br7, anchor);
      insert_dev(target, t18, anchor);
      insert_dev(target, hr0, anchor);
      insert_dev(target, t19, anchor);
      insert_dev(target, br8, anchor);
      insert_dev(target, t20, anchor);
      insert_dev(target, br9, anchor);
      insert_dev(target, t21, anchor);
      insert_dev(target, br10, anchor);
      insert_dev(target, t22, anchor);
      mount_component(section0, target, anchor);
      insert_dev(target, t23, anchor);
      insert_dev(target, br11, anchor);
      insert_dev(target, t24, anchor);
      insert_dev(target, hr1, anchor);
      insert_dev(target, t25, anchor);
      insert_dev(target, br12, anchor);
      insert_dev(target, t26, anchor);
      insert_dev(target, br13, anchor);
      insert_dev(target, t27, anchor);
      insert_dev(target, h20, anchor);
      append_dev(h20, t28);
      insert_dev(target, t29, anchor);
      insert_dev(target, br14, anchor);
      insert_dev(target, t30, anchor);
      mount_component(section1, target, anchor);
      insert_dev(target, t31, anchor);
      insert_dev(target, br15, anchor);
      insert_dev(target, t32, anchor);
      insert_dev(target, hr2, anchor);
      insert_dev(target, t33, anchor);
      insert_dev(target, br16, anchor);
      insert_dev(target, t34, anchor);
      insert_dev(target, br17, anchor);
      insert_dev(target, t35, anchor);
      insert_dev(target, h21, anchor);
      append_dev(h21, t36);
      insert_dev(target, t37, anchor);
      insert_dev(target, br18, anchor);
      insert_dev(target, t38, anchor);
      mount_component(testimonial0, target, anchor);
      insert_dev(target, t39, anchor);
      mount_component(testimonial1, target, anchor);
      insert_dev(target, t40, anchor);
      insert_dev(target, hr3, anchor);
      insert_dev(target, t41, anchor);
      insert_dev(target, br19, anchor);
      insert_dev(target, t42, anchor);
      insert_dev(target, br20, anchor);
      insert_dev(target, t43, anchor);
      insert_dev(target, h22, anchor);
      append_dev(h22, t44);
      insert_dev(target, t45, anchor);
      insert_dev(target, br21, anchor);
      insert_dev(target, t46, anchor);
      mount_component(section2, target, anchor);
      insert_dev(target, t47, anchor);
      insert_dev(target, hr4, anchor);
      insert_dev(target, t48, anchor);
      insert_dev(target, br22, anchor);
      insert_dev(target, t49, anchor);
      insert_dev(target, br23, anchor);
      insert_dev(target, t50, anchor);
      insert_dev(target, h23, anchor);
      append_dev(h23, t51);
      insert_dev(target, t52, anchor);
      insert_dev(target, br24, anchor);
      insert_dev(target, t53, anchor);
      insert_dev(target, br25, anchor);
      insert_dev(target, t54, anchor);
      mount_component(section3, target, anchor);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var section0_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        section0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      section0.$set(section0_changes);
      var section1_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        section1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      section1.$set(section1_changes);
      var testimonial0_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        testimonial0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      testimonial0.$set(testimonial0_changes);
      var testimonial1_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        testimonial1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      testimonial1.$set(testimonial1_changes);
      var section2_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        section2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      section2.$set(section2_changes);
      var section3_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        section3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      section3.$set(section3_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(section0.$$.fragment, local);
      transition_in(section1.$$.fragment, local);
      transition_in(testimonial0.$$.fragment, local);
      transition_in(testimonial1.$$.fragment, local);
      transition_in(section2.$$.fragment, local);
      transition_in(section3.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(section0.$$.fragment, local);
      transition_out(section1.$$.fragment, local);
      transition_out(testimonial0.$$.fragment, local);
      transition_out(testimonial1.$$.fragment, local);
      transition_out(section2.$$.fragment, local);
      transition_out(section3.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      detach_dev(style);
      if (detaching) detach_dev(t1);
      if (detaching) detach_dev(br0);
      if (detaching) detach_dev(t2);
      if (detaching) detach_dev(p0);
      if (detaching) detach_dev(t4);
      if (detaching) detach_dev(img);
      if (detaching) detach_dev(t5);
      if (detaching) detach_dev(br1);
      if (detaching) detach_dev(t6);
      if (detaching) detach_dev(br2);
      if (detaching) detach_dev(t7);
      if (detaching) detach_dev(h1);
      if (detaching) detach_dev(t9);
      if (detaching) detach_dev(p1);
      if (detaching) detach_dev(t16);
      if (detaching) detach_dev(br6);
      if (detaching) detach_dev(t17);
      if (detaching) detach_dev(br7);
      if (detaching) detach_dev(t18);
      if (detaching) detach_dev(hr0);
      if (detaching) detach_dev(t19);
      if (detaching) detach_dev(br8);
      if (detaching) detach_dev(t20);
      if (detaching) detach_dev(br9);
      if (detaching) detach_dev(t21);
      if (detaching) detach_dev(br10);
      if (detaching) detach_dev(t22);
      destroy_component(section0, detaching);
      if (detaching) detach_dev(t23);
      if (detaching) detach_dev(br11);
      if (detaching) detach_dev(t24);
      if (detaching) detach_dev(hr1);
      if (detaching) detach_dev(t25);
      if (detaching) detach_dev(br12);
      if (detaching) detach_dev(t26);
      if (detaching) detach_dev(br13);
      if (detaching) detach_dev(t27);
      if (detaching) detach_dev(h20);
      if (detaching) detach_dev(t29);
      if (detaching) detach_dev(br14);
      if (detaching) detach_dev(t30);
      destroy_component(section1, detaching);
      if (detaching) detach_dev(t31);
      if (detaching) detach_dev(br15);
      if (detaching) detach_dev(t32);
      if (detaching) detach_dev(hr2);
      if (detaching) detach_dev(t33);
      if (detaching) detach_dev(br16);
      if (detaching) detach_dev(t34);
      if (detaching) detach_dev(br17);
      if (detaching) detach_dev(t35);
      if (detaching) detach_dev(h21);
      if (detaching) detach_dev(t37);
      if (detaching) detach_dev(br18);
      if (detaching) detach_dev(t38);
      destroy_component(testimonial0, detaching);
      if (detaching) detach_dev(t39);
      destroy_component(testimonial1, detaching);
      if (detaching) detach_dev(t40);
      if (detaching) detach_dev(hr3);
      if (detaching) detach_dev(t41);
      if (detaching) detach_dev(br19);
      if (detaching) detach_dev(t42);
      if (detaching) detach_dev(br20);
      if (detaching) detach_dev(t43);
      if (detaching) detach_dev(h22);
      if (detaching) detach_dev(t45);
      if (detaching) detach_dev(br21);
      if (detaching) detach_dev(t46);
      destroy_component(section2, detaching);
      if (detaching) detach_dev(t47);
      if (detaching) detach_dev(hr4);
      if (detaching) detach_dev(t48);
      if (detaching) detach_dev(br22);
      if (detaching) detach_dev(t49);
      if (detaching) detach_dev(br23);
      if (detaching) detach_dev(t50);
      if (detaching) detach_dev(h23);
      if (detaching) detach_dev(t52);
      if (detaching) detach_dev(br24);
      if (detaching) detach_dev(t53);
      if (detaching) detach_dev(br25);
      if (detaching) detach_dev(t54);
      destroy_component(section3, detaching);
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
  validate_slots("Routes", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Routes> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      Testimonial: Testimonial,
      Section: Section
    };
  };

  return [];
}

var Routes = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Routes, _SvelteComponentDev);

  var _super = _createSuper$1(Routes);

  function Routes(options) {
    var _this;

    _classCallCheck(this, Routes);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Routes",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  return Routes;
}(SvelteComponentDev);

export default Routes;
