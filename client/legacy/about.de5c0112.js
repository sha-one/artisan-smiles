import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, m as space, l as element, t as text, B as create_component, C as query_selector_all, k as detach_dev, p as claim_space, n as claim_element, o as children, h as claim_text, D as claim_component, q as attr_dev, r as add_location, j as insert_dev, u as append_dev, E as mount_component, w as _slicedToArray, z as transition_in, A as transition_out, F as destroy_component, v as validate_slots } from './client.740fd1a9.js';
import { S as Section } from './Section.2ac7ae21.js';
import { T as TitleBlock } from './TitleBlock.93961076.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/about.svelte"; // (15:0) <Section>

function create_default_slot_2(ctx) {
  var div;
  var h3;
  var t0;
  var t1;
  var p;
  var t2;
  var block = {
    c: function create() {
      div = element("div");
      h3 = element("h3");
      t0 = text("Cosmetic, Restorative and Implant Dental Services");
      t1 = space();
      p = element("p");
      t2 = text("As a new business we would like to thank you for requesting an information\n      guide and price list for our services. We would be pleased to discuss your\n      requirements and look forward to being of service to you in the future.");
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
      p = claim_element(div_nodes, "P", {});
      var p_nodes = children(p);
      t2 = claim_text(p_nodes, "As a new business we would like to thank you for requesting an information\n      guide and price list for our services. We would be pleased to discuss your\n      requirements and look forward to being of service to you in the future.");
      p_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(h3, file, 16, 4, 335);
      add_location(p, file, 17, 4, 398);
      attr_dev(div, "class", "section-content m-auto svelte-163vqea");
      add_location(div, file, 15, 2, 294);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, h3);
      append_dev(h3, t0);
      append_dev(div, t1);
      append_dev(div, p);
      append_dev(p, t2);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_2.name,
    type: "slot",
    source: "(15:0) <Section>",
    ctx: ctx
  });
  return block;
} // (26:0) <Section>


function create_default_slot_1(ctx) {
  var div;
  var img;
  var img_src_value;
  var t0;
  var p0;
  var b;
  var t1;
  var t2;
  var t3;
  var p1;
  var t4;
  var t5;
  var p2;
  var t6;
  var block = {
    c: function create() {
      div = element("div");
      img = element("img");
      t0 = space();
      p0 = element("p");
      b = element("b");
      t1 = text("Philip Dobinson");
      t2 = text("\n      Philip Dobinson (founder) has been employed in the dental technology ﬁeld\n      for over 30 years and specialises in cosmetic and implantology.");
      t3 = space();
      p1 = element("p");
      t4 = text("He has worked in referral dental clinics providing face to face\n      consultations, implementing care plans using strategic client management\n      to ensure successful outcomes for clients and aftercare plans.");
      t5 = space();
      p2 = element("p");
      t6 = text("Artisan Smiles believes that high standards and using evolving techniques\n      will provide a unique handcrafted product for clients. Good communication\n      skills ensure that products are made to exceed expectations and deliver on\n      the smile.");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      img = claim_element(div_nodes, "IMG", {
        class: true,
        src: true,
        alt: true,
        width: true
      });
      t0 = claim_space(div_nodes);
      p0 = claim_element(div_nodes, "P", {
        class: true
      });
      var p0_nodes = children(p0);
      b = claim_element(p0_nodes, "B", {});
      var b_nodes = children(b);
      t1 = claim_text(b_nodes, "Philip Dobinson");
      b_nodes.forEach(detach_dev);
      t2 = claim_text(p0_nodes, "\n      Philip Dobinson (founder) has been employed in the dental technology ﬁeld\n      for over 30 years and specialises in cosmetic and implantology.");
      p0_nodes.forEach(detach_dev);
      t3 = claim_space(div_nodes);
      p1 = claim_element(div_nodes, "P", {
        class: true
      });
      var p1_nodes = children(p1);
      t4 = claim_text(p1_nodes, "He has worked in referral dental clinics providing face to face\n      consultations, implementing care plans using strategic client management\n      to ensure successful outcomes for clients and aftercare plans.");
      p1_nodes.forEach(detach_dev);
      t5 = claim_space(div_nodes);
      p2 = claim_element(div_nodes, "P", {
        class: true
      });
      var p2_nodes = children(p2);
      t6 = claim_text(p2_nodes, "Artisan Smiles believes that high standards and using evolving techniques\n      will provide a unique handcrafted product for clients. Good communication\n      skills ensure that products are made to exceed expectations and deliver on\n      the smile.");
      p2_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(img, "class", "float-none m-auto mb-6 md:float-left md:mr-6 ");
      if (img.src !== (img_src_value = "philip-dobinson.png")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "placeholder");
      attr_dev(img, "width", "280");
      add_location(img, file, 27, 4, 725);
      add_location(b, file, 33, 6, 914);
      attr_dev(p0, "class", "clear-both md:clear-none");
      add_location(p0, file, 32, 4, 871);
      attr_dev(p1, "class", "clear-both md:clear-none");
      add_location(p1, file, 37, 4, 1100);
      attr_dev(p2, "class", "clear-both");
      add_location(p2, file, 42, 4, 1368);
      attr_dev(div, "class", "section-content m-auto svelte-163vqea");
      add_location(div, file, 26, 2, 684);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, img);
      append_dev(div, t0);
      append_dev(div, p0);
      append_dev(p0, b);
      append_dev(b, t1);
      append_dev(p0, t2);
      append_dev(div, t3);
      append_dev(div, p1);
      append_dev(p1, t4);
      append_dev(div, t5);
      append_dev(div, p2);
      append_dev(p2, t6);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_1.name,
    type: "slot",
    source: "(26:0) <Section>",
    ctx: ctx
  });
  return block;
} // (52:0) <Section>


function create_default_slot(ctx) {
  var div;
  var img;
  var img_src_value;
  var block = {
    c: function create() {
      div = element("div");
      img = element("img");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      img = claim_element(div_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(img, "class", "mb-6");
      if (img.src !== (img_src_value = "case.jpeg")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "demo case");
      add_location(img, file, 53, 4, 1732);
      attr_dev(div, "class", "section-content m-auto svelte-163vqea");
      add_location(div, file, 52, 2, 1691);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, img);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(52:0) <Section>",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var t0;
  var h1;
  var t1;
  var t2;
  var br;
  var t3;
  var section0;
  var t4;
  var section1;
  var t5;
  var section2;
  var current;
  section0 = new Section({
    props: {
      $$slots: {
        default: [create_default_slot_2]
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
        default: [create_default_slot_1]
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
      t0 = space();
      h1 = element("h1");
      t1 = text("About Artisan Smiles");
      t2 = space();
      br = element("br");
      t3 = space();
      create_component(section0.$$.fragment);
      t4 = space();
      create_component(section1.$$.fragment);
      t5 = space();
      create_component(section2.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1myew8g\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      h1 = claim_element(nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "About Artisan Smiles");
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
      br = claim_element(nodes, "BR", {});
      t3 = claim_space(nodes);
      claim_component(section0.$$.fragment, nodes);
      t4 = claim_space(nodes);
      claim_component(section1.$$.fragment, nodes);
      t5 = claim_space(nodes);
      claim_component(section2.$$.fragment, nodes);
      this.h();
    },
    h: function hydrate() {
      document.title = "About";
      attr_dev(h1, "class", "tracking-wider text-white text-center text-5xl");
      add_location(h1, file, 9, 0, 185);
      add_location(br, file, 12, 0, 274);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, h1, anchor);
      append_dev(h1, t1);
      insert_dev(target, t2, anchor);
      insert_dev(target, br, anchor);
      insert_dev(target, t3, anchor);
      mount_component(section0, target, anchor);
      insert_dev(target, t4, anchor);
      mount_component(section1, target, anchor);
      insert_dev(target, t5, anchor);
      mount_component(section2, target, anchor);
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
    },
    i: function intro(local) {
      if (current) return;
      transition_in(section0.$$.fragment, local);
      transition_in(section1.$$.fragment, local);
      transition_in(section2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(section0.$$.fragment, local);
      transition_out(section1.$$.fragment, local);
      transition_out(section2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(h1);
      if (detaching) detach_dev(t2);
      if (detaching) detach_dev(br);
      if (detaching) detach_dev(t3);
      destroy_component(section0, detaching);
      if (detaching) detach_dev(t4);
      destroy_component(section1, detaching);
      if (detaching) detach_dev(t5);
      destroy_component(section2, detaching);
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
  validate_slots("About", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<About> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      Section: Section,
      TitleBlock: TitleBlock
    };
  };

  return [];
}

var About = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(About, _SvelteComponentDev);

  var _super = _createSuper(About);

  function About(options) {
    var _this;

    _classCallCheck(this, About);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "About",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return About;
}(SvelteComponentDev);

export default About;
