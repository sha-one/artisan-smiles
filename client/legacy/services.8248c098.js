import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, g as space, f as element, t as text, w as create_component, q as query_selector_all, l as detach_dev, m as claim_space, h as claim_element, j as children, k as claim_text, x as claim_component, o as attr_dev, n as add_location, r as insert_dev, p as append_dev, y as mount_component, z as _slicedToArray, A as transition_in, B as transition_out, C as destroy_component, v as validate_slots, u as noop } from './client.0a906b21.js';
import { S as Section, T as TitleBlock } from './TitleBlock.20357885.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/services.svelte"; // (18:0) <Section>

function create_default_slot_11(ctx) {
  var titleblock;
  var t0;
  var div;
  var p0;
  var t1;
  var t2;
  var p1;
  var b0;
  var t3;
  var br0;
  var t4;
  var i;
  var t5;
  var t6;
  var p2;
  var b1;
  var t7;
  var br1;
  var t8;
  var current;
  titleblock = new TitleBlock({
    props: {
      heading: "Pricing structure"
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(titleblock.$$.fragment);
      t0 = space();
      div = element("div");
      p0 = element("p");
      t1 = text("Artisan Smiles Pricing structure consists of two ranges, Artistic and\n      Basic.");
      t2 = space();
      p1 = element("p");
      b0 = element("b");
      t3 = text("Artistic Range:");
      br0 = element("br");
      t4 = text("\n      A restoration ﬂourishing with creativity to produce a natural appearance,\n      using amultitude of techniques by years of experience.\n      ");
      i = element("i");
      t5 = text("(All services are artistic unless otherwise stated)");
      t6 = space();
      p2 = element("p");
      b1 = element("b");
      t7 = text("Basic Range:");
      br1 = element("br");
      t8 = text("\n      Moderately monolithic with some degree of translucency and\n      fundamentalshading. Priced at a rate which is affordable.");
      this.h();
    },
    l: function claim(nodes) {
      claim_component(titleblock.$$.fragment, nodes);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      p0 = claim_element(div_nodes, "P", {});
      var p0_nodes = children(p0);
      t1 = claim_text(p0_nodes, "Artisan Smiles Pricing structure consists of two ranges, Artistic and\n      Basic.");
      p0_nodes.forEach(detach_dev);
      t2 = claim_space(div_nodes);
      p1 = claim_element(div_nodes, "P", {});
      var p1_nodes = children(p1);
      b0 = claim_element(p1_nodes, "B", {});
      var b0_nodes = children(b0);
      t3 = claim_text(b0_nodes, "Artistic Range:");
      b0_nodes.forEach(detach_dev);
      br0 = claim_element(p1_nodes, "BR", {});
      t4 = claim_text(p1_nodes, "\n      A restoration ﬂourishing with creativity to produce a natural appearance,\n      using amultitude of techniques by years of experience.\n      ");
      i = claim_element(p1_nodes, "I", {});
      var i_nodes = children(i);
      t5 = claim_text(i_nodes, "(All services are artistic unless otherwise stated)");
      i_nodes.forEach(detach_dev);
      p1_nodes.forEach(detach_dev);
      t6 = claim_space(div_nodes);
      p2 = claim_element(div_nodes, "P", {});
      var p2_nodes = children(p2);
      b1 = claim_element(p2_nodes, "B", {});
      var b1_nodes = children(b1);
      t7 = claim_text(b1_nodes, "Basic Range:");
      b1_nodes.forEach(detach_dev);
      br1 = claim_element(p2_nodes, "BR", {});
      t8 = claim_text(p2_nodes, "\n      Moderately monolithic with some degree of translucency and\n      fundamentalshading. Priced at a rate which is affordable.");
      p2_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(p0, file, 20, 4, 484);
      add_location(b0, file, 26, 6, 601);
      add_location(br0, file, 26, 28, 623);
      add_location(i, file, 29, 6, 777);
      add_location(p1, file, 25, 4, 591);
      add_location(b1, file, 33, 6, 860);
      add_location(br1, file, 33, 25, 879);
      add_location(p2, file, 32, 4, 850);
      attr_dev(div, "class", "section-content svelte-b15mqy");
      add_location(div, file, 19, 2, 450);
    },
    m: function mount(target, anchor) {
      mount_component(titleblock, target, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, div, anchor);
      append_dev(div, p0);
      append_dev(p0, t1);
      append_dev(div, t2);
      append_dev(div, p1);
      append_dev(p1, b0);
      append_dev(b0, t3);
      append_dev(p1, br0);
      append_dev(p1, t4);
      append_dev(p1, i);
      append_dev(i, t5);
      append_dev(div, t6);
      append_dev(div, p2);
      append_dev(p2, b1);
      append_dev(b1, t7);
      append_dev(p2, br1);
      append_dev(p2, t8);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(titleblock.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(titleblock.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(titleblock, detaching);
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_11.name,
    type: "slot",
    source: "(18:0) <Section>",
    ctx: ctx
  });
  return block;
} // (41:0) <Section>


function create_default_slot_10(ctx) {
  var titleblock;
  var t0;
  var div;
  var p0;
  var b;
  var t1;
  var br0;
  var t2;
  var br1;
  var t3;
  var i;
  var t4;
  var t5;
  var p1;
  var t6;
  var t7;
  var p2;
  var t8;
  var current;
  titleblock = new TitleBlock({
    props: {
      heading: "Speciality Services & Discounts Available"
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(titleblock.$$.fragment);
      t0 = space();
      div = element("div");
      p0 = element("p");
      b = element("b");
      t1 = text("Smile make over – express timescales:");
      br0 = element("br");
      t2 = text("\n      Pick up of impression Monday Afternoon - Delivery Friday Mid Morning");
      br1 = element("br");
      t3 = space();
      i = element("i");
      t4 = text("4 Weeks notice must be given");
      t5 = space();
      p1 = element("p");
      t6 = text("10% Discount is available if an invoice is paid in full within 10 working\n      days.");
      t7 = space();
      p2 = element("p");
      t8 = text("30% Discount is available if all implant abutments and ﬁxtures are ordered\n      on your account to cover parts pre-paid.");
      this.h();
    },
    l: function claim(nodes) {
      claim_component(titleblock.$$.fragment, nodes);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      p0 = claim_element(div_nodes, "P", {});
      var p0_nodes = children(p0);
      b = claim_element(p0_nodes, "B", {});
      var b_nodes = children(b);
      t1 = claim_text(b_nodes, "Smile make over – express timescales:");
      b_nodes.forEach(detach_dev);
      br0 = claim_element(p0_nodes, "BR", {});
      t2 = claim_text(p0_nodes, "\n      Pick up of impression Monday Afternoon - Delivery Friday Mid Morning");
      br1 = claim_element(p0_nodes, "BR", {});
      t3 = claim_space(p0_nodes);
      i = claim_element(p0_nodes, "I", {});
      var i_nodes = children(i);
      t4 = claim_text(i_nodes, "4 Weeks notice must be given");
      i_nodes.forEach(detach_dev);
      p0_nodes.forEach(detach_dev);
      t5 = claim_space(div_nodes);
      p1 = claim_element(div_nodes, "P", {});
      var p1_nodes = children(p1);
      t6 = claim_text(p1_nodes, "10% Discount is available if an invoice is paid in full within 10 working\n      days.");
      p1_nodes.forEach(detach_dev);
      t7 = claim_space(div_nodes);
      p2 = claim_element(div_nodes, "P", {});
      var p2_nodes = children(p2);
      t8 = claim_text(p2_nodes, "30% Discount is available if all implant abutments and ﬁxtures are ordered\n      on your account to cover parts pre-paid.");
      p2_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(b, file, 44, 6, 1170);
      add_location(br0, file, 44, 50, 1214);
      add_location(br1, file, 45, 74, 1295);
      add_location(i, file, 46, 6, 1308);
      add_location(p0, file, 43, 4, 1160);
      add_location(p1, file, 48, 4, 1357);
      add_location(p2, file, 52, 4, 1466);
      attr_dev(div, "class", "section-content svelte-b15mqy");
      add_location(div, file, 42, 2, 1126);
    },
    m: function mount(target, anchor) {
      mount_component(titleblock, target, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, div, anchor);
      append_dev(div, p0);
      append_dev(p0, b);
      append_dev(b, t1);
      append_dev(p0, br0);
      append_dev(p0, t2);
      append_dev(p0, br1);
      append_dev(p0, t3);
      append_dev(p0, i);
      append_dev(i, t4);
      append_dev(div, t5);
      append_dev(div, p1);
      append_dev(p1, t6);
      append_dev(div, t7);
      append_dev(div, p2);
      append_dev(p2, t8);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(titleblock.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(titleblock.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(titleblock, detaching);
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_10.name,
    type: "slot",
    source: "(41:0) <Section>",
    ctx: ctx
  });
  return block;
} // (60:0) <Section>


function create_default_slot_9(ctx) {
  var titleblock;
  var t0;
  var div;
  var p0;
  var t1;
  var t2;
  var p1;
  var t3;
  var current;
  titleblock = new TitleBlock({
    props: {
      heading: "Working Practice:"
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(titleblock.$$.fragment);
      t0 = space();
      div = element("div");
      p0 = element("p");
      t1 = text("10 working days in the lab is requested. Pick ups will made the following\n      working day when a order is placed after 13.00.");
      t2 = space();
      p1 = element("p");
      t3 = text("Request of an urgent nature may be accommodated by arrangement, please\n      contact us for further details.");
      this.h();
    },
    l: function claim(nodes) {
      claim_component(titleblock.$$.fragment, nodes);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      p0 = claim_element(div_nodes, "P", {});
      var p0_nodes = children(p0);
      t1 = claim_text(p0_nodes, "10 working days in the lab is requested. Pick ups will made the following\n      working day when a order is placed after 13.00.");
      p0_nodes.forEach(detach_dev);
      t2 = claim_space(div_nodes);
      p1 = claim_element(div_nodes, "P", {});
      var p1_nodes = children(p1);
      t3 = claim_text(p1_nodes, "Request of an urgent nature may be accommodated by arrangement, please\n      contact us for further details.");
      p1_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(p0, file, 62, 4, 1719);
      add_location(p1, file, 66, 4, 1870);
      attr_dev(div, "class", "section-content svelte-b15mqy");
      add_location(div, file, 61, 2, 1685);
    },
    m: function mount(target, anchor) {
      mount_component(titleblock, target, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, div, anchor);
      append_dev(div, p0);
      append_dev(p0, t1);
      append_dev(div, t2);
      append_dev(div, p1);
      append_dev(p1, t3);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(titleblock.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(titleblock.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(titleblock, detaching);
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_9.name,
    type: "slot",
    source: "(60:0) <Section>",
    ctx: ctx
  });
  return block;
} // (74:0) <Section>


function create_default_slot_8(ctx) {
  var titleblock;
  var t0;
  var div;
  var p0;
  var b0;
  var t1;
  var t2;
  var p1;
  var b1;
  var t3;
  var t4;
  var t5;
  var p2;
  var b2;
  var t6;
  var t7;
  var t8;
  var p3;
  var b3;
  var t9;
  var t10;
  var t11;
  var i;
  var t12;
  var current;
  titleblock = new TitleBlock({
    props: {
      heading: "Guarantees and Warranty of Product."
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(titleblock.$$.fragment);
      t0 = space();
      div = element("div");
      p0 = element("p");
      b0 = element("b");
      t1 = text("All work carried out by Artisan Smiles includes a two year guarantee\n        subject to the following conditions:");
      t2 = space();
      p1 = element("p");
      b1 = element("b");
      t3 = text("1.");
      t4 = text("\n      A copy of the original prescription has been provided with the order.");
      t5 = space();
      p2 = element("p");
      b2 = element("b");
      t6 = text("2.");
      t7 = text("\n      Articulation, where necessary, has been conducted to provide a good\n      occlusal relationship.");
      t8 = space();
      p3 = element("p");
      b3 = element("b");
      t9 = text("3.");
      t10 = text("\n      Protective night splints, where provided, have been worn by the client\n      toprevent damage by bruxism.");
      t11 = space();
      i = element("i");
      t12 = text("Work is not guaranteed in cases of damage caused by accident or\n      injury,degeneration or existing detention, or in some cases, bonding\n      failure to the tooth.");
      this.h();
    },
    l: function claim(nodes) {
      claim_component(titleblock.$$.fragment, nodes);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      p0 = claim_element(div_nodes, "P", {});
      var p0_nodes = children(p0);
      b0 = claim_element(p0_nodes, "B", {});
      var b0_nodes = children(b0);
      t1 = claim_text(b0_nodes, "All work carried out by Artisan Smiles includes a two year guarantee\n        subject to the following conditions:");
      b0_nodes.forEach(detach_dev);
      p0_nodes.forEach(detach_dev);
      t2 = claim_space(div_nodes);
      p1 = claim_element(div_nodes, "P", {});
      var p1_nodes = children(p1);
      b1 = claim_element(p1_nodes, "B", {});
      var b1_nodes = children(b1);
      t3 = claim_text(b1_nodes, "1.");
      b1_nodes.forEach(detach_dev);
      t4 = claim_text(p1_nodes, "\n      A copy of the original prescription has been provided with the order.");
      p1_nodes.forEach(detach_dev);
      t5 = claim_space(div_nodes);
      p2 = claim_element(div_nodes, "P", {});
      var p2_nodes = children(p2);
      b2 = claim_element(p2_nodes, "B", {});
      var b2_nodes = children(b2);
      t6 = claim_text(b2_nodes, "2.");
      b2_nodes.forEach(detach_dev);
      t7 = claim_text(p2_nodes, "\n      Articulation, where necessary, has been conducted to provide a good\n      occlusal relationship.");
      p2_nodes.forEach(detach_dev);
      t8 = claim_space(div_nodes);
      p3 = claim_element(div_nodes, "P", {});
      var p3_nodes = children(p3);
      b3 = claim_element(p3_nodes, "B", {});
      var b3_nodes = children(b3);
      t9 = claim_text(b3_nodes, "3.");
      b3_nodes.forEach(detach_dev);
      t10 = claim_text(p3_nodes, "\n      Protective night splints, where provided, have been worn by the client\n      toprevent damage by bruxism.");
      p3_nodes.forEach(detach_dev);
      t11 = claim_space(div_nodes);
      i = claim_element(div_nodes, "I", {});
      var i_nodes = children(i);
      t12 = claim_text(i_nodes, "Work is not guaranteed in cases of damage caused by accident or\n      injury,degeneration or existing detention, or in some cases, bonding\n      failure to the tooth.");
      i_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(b0, file, 77, 6, 2138);
      add_location(p0, file, 76, 4, 2128);
      add_location(b1, file, 82, 6, 2283);
      add_location(p1, file, 81, 4, 2273);
      add_location(b2, file, 87, 6, 2393);
      add_location(p2, file, 86, 4, 2383);
      add_location(b3, file, 93, 6, 2530);
      add_location(p3, file, 92, 4, 2520);
      add_location(i, file, 98, 4, 2666);
      attr_dev(div, "class", "section-content svelte-b15mqy");
      add_location(div, file, 75, 2, 2094);
    },
    m: function mount(target, anchor) {
      mount_component(titleblock, target, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, div, anchor);
      append_dev(div, p0);
      append_dev(p0, b0);
      append_dev(b0, t1);
      append_dev(div, t2);
      append_dev(div, p1);
      append_dev(p1, b1);
      append_dev(b1, t3);
      append_dev(p1, t4);
      append_dev(div, t5);
      append_dev(div, p2);
      append_dev(p2, b2);
      append_dev(b2, t6);
      append_dev(p2, t7);
      append_dev(div, t8);
      append_dev(div, p3);
      append_dev(p3, b3);
      append_dev(b3, t9);
      append_dev(p3, t10);
      append_dev(div, t11);
      append_dev(div, i);
      append_dev(i, t12);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(titleblock.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(titleblock.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(titleblock, detaching);
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_8.name,
    type: "slot",
    source: "(74:0) <Section>",
    ctx: ctx
  });
  return block;
} // (105:0) <Section>


function create_default_slot_7(ctx) {
  var titleblock;
  var t0;
  var div2;
  var p0;
  var t1;
  var i;
  var t2;
  var t3;
  var br0;
  var t4;
  var div0;
  var p1;
  var t5;
  var span0;
  var t6;
  var t7;
  var p2;
  var t8;
  var span1;
  var t9;
  var t10;
  var p3;
  var t11;
  var span2;
  var t12;
  var t13;
  var p4;
  var t14;
  var span3;
  var t15;
  var t16;
  var div1;
  var p5;
  var t17;
  var span4;
  var t18;
  var t19;
  var p6;
  var t20;
  var span5;
  var t21;
  var t22;
  var p7;
  var t23;
  var span6;
  var t24;
  var t25;
  var p8;
  var t26;
  var span7;
  var t27;
  var t28;
  var br1;
  var t29;
  var p9;
  var b;
  var t30;
  var t31;
  var current;
  titleblock = new TitleBlock({
    props: {
      heading: "Porcelain Fused to Metal"
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(titleblock.$$.fragment);
      t0 = space();
      div2 = element("div");
      p0 = element("p");
      t1 = text("A supreme non-precious alloy will be used in the manufacturing of the\n      crowns and bridges, trialled and tested by German scientists.\n      ");
      i = element("i");
      t2 = text("(Semi-precious metals can be substituted at a premium)");
      t3 = space();
      br0 = element("br");
      t4 = space();
      div0 = element("div");
      p1 = element("p");
      t5 = text("101. Artistic Crown ");
      span0 = element("span");
      t6 = text("£75");
      t7 = space();
      p2 = element("p");
      t8 = text("102. Basic Crown ");
      span1 = element("span");
      t9 = text("£50");
      t10 = space();
      p3 = element("p");
      t11 = text("103. Artistic Bridge (per unit)");
      span2 = element("span");
      t12 = text("£75");
      t13 = space();
      p4 = element("p");
      t14 = text("104. Basic Bridge (per unit)");
      span3 = element("span");
      t15 = text("£50");
      t16 = space();
      div1 = element("div");
      p5 = element("p");
      t17 = text("105. Artistic Maryland Bridge");
      span4 = element("span");
      t18 = text("£80");
      t19 = space();
      p6 = element("p");
      t20 = text("106. Basic Maryland Bridge");
      span5 = element("span");
      t21 = text("£55");
      t22 = space();
      p7 = element("p");
      t23 = text("107. Additional Wing");
      span6 = element("span");
      t24 = text("£10");
      t25 = space();
      p8 = element("p");
      t26 = text("108. Post and Core");
      span7 = element("span");
      t27 = text("£30");
      t28 = space();
      br1 = element("br");
      t29 = space();
      p9 = element("p");
      b = element("b");
      t30 = text("Please state if you require the following:");
      t31 = text("\n      Opaque - Diaphragm - Split on a post and core.");
      this.h();
    },
    l: function claim(nodes) {
      claim_component(titleblock.$$.fragment, nodes);
      t0 = claim_space(nodes);
      div2 = claim_element(nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      p0 = claim_element(div2_nodes, "P", {});
      var p0_nodes = children(p0);
      t1 = claim_text(p0_nodes, "A supreme non-precious alloy will be used in the manufacturing of the\n      crowns and bridges, trialled and tested by German scientists.\n      ");
      i = claim_element(p0_nodes, "I", {});
      var i_nodes = children(i);
      t2 = claim_text(i_nodes, "(Semi-precious metals can be substituted at a premium)");
      i_nodes.forEach(detach_dev);
      p0_nodes.forEach(detach_dev);
      t3 = claim_space(div2_nodes);
      br0 = claim_element(div2_nodes, "BR", {});
      t4 = claim_space(div2_nodes);
      div0 = claim_element(div2_nodes, "DIV", {});
      var div0_nodes = children(div0);
      p1 = claim_element(div0_nodes, "P", {});
      var p1_nodes = children(p1);
      t5 = claim_text(p1_nodes, "101. Artistic Crown ");
      span0 = claim_element(p1_nodes, "SPAN", {
        class: true
      });
      var span0_nodes = children(span0);
      t6 = claim_text(span0_nodes, "£75");
      span0_nodes.forEach(detach_dev);
      p1_nodes.forEach(detach_dev);
      t7 = claim_space(div0_nodes);
      p2 = claim_element(div0_nodes, "P", {});
      var p2_nodes = children(p2);
      t8 = claim_text(p2_nodes, "102. Basic Crown ");
      span1 = claim_element(p2_nodes, "SPAN", {
        class: true
      });
      var span1_nodes = children(span1);
      t9 = claim_text(span1_nodes, "£50");
      span1_nodes.forEach(detach_dev);
      p2_nodes.forEach(detach_dev);
      t10 = claim_space(div0_nodes);
      p3 = claim_element(div0_nodes, "P", {});
      var p3_nodes = children(p3);
      t11 = claim_text(p3_nodes, "103. Artistic Bridge (per unit)");
      span2 = claim_element(p3_nodes, "SPAN", {
        class: true
      });
      var span2_nodes = children(span2);
      t12 = claim_text(span2_nodes, "£75");
      span2_nodes.forEach(detach_dev);
      p3_nodes.forEach(detach_dev);
      t13 = claim_space(div0_nodes);
      p4 = claim_element(div0_nodes, "P", {});
      var p4_nodes = children(p4);
      t14 = claim_text(p4_nodes, "104. Basic Bridge (per unit)");
      span3 = claim_element(p4_nodes, "SPAN", {
        class: true
      });
      var span3_nodes = children(span3);
      t15 = claim_text(span3_nodes, "£50");
      span3_nodes.forEach(detach_dev);
      p4_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t16 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {});
      var div1_nodes = children(div1);
      p5 = claim_element(div1_nodes, "P", {});
      var p5_nodes = children(p5);
      t17 = claim_text(p5_nodes, "105. Artistic Maryland Bridge");
      span4 = claim_element(p5_nodes, "SPAN", {
        class: true
      });
      var span4_nodes = children(span4);
      t18 = claim_text(span4_nodes, "£80");
      span4_nodes.forEach(detach_dev);
      p5_nodes.forEach(detach_dev);
      t19 = claim_space(div1_nodes);
      p6 = claim_element(div1_nodes, "P", {});
      var p6_nodes = children(p6);
      t20 = claim_text(p6_nodes, "106. Basic Maryland Bridge");
      span5 = claim_element(p6_nodes, "SPAN", {
        class: true
      });
      var span5_nodes = children(span5);
      t21 = claim_text(span5_nodes, "£55");
      span5_nodes.forEach(detach_dev);
      p6_nodes.forEach(detach_dev);
      t22 = claim_space(div1_nodes);
      p7 = claim_element(div1_nodes, "P", {});
      var p7_nodes = children(p7);
      t23 = claim_text(p7_nodes, "107. Additional Wing");
      span6 = claim_element(p7_nodes, "SPAN", {
        class: true
      });
      var span6_nodes = children(span6);
      t24 = claim_text(span6_nodes, "£10");
      span6_nodes.forEach(detach_dev);
      p7_nodes.forEach(detach_dev);
      t25 = claim_space(div1_nodes);
      p8 = claim_element(div1_nodes, "P", {});
      var p8_nodes = children(p8);
      t26 = claim_text(p8_nodes, "108. Post and Core");
      span7 = claim_element(p8_nodes, "SPAN", {
        class: true
      });
      var span7_nodes = children(span7);
      t27 = claim_text(span7_nodes, "£30");
      span7_nodes.forEach(detach_dev);
      p8_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t28 = claim_space(div2_nodes);
      br1 = claim_element(div2_nodes, "BR", {});
      t29 = claim_space(div2_nodes);
      p9 = claim_element(div2_nodes, "P", {});
      var p9_nodes = children(p9);
      b = claim_element(p9_nodes, "B", {});
      var b_nodes = children(b);
      t30 = claim_text(b_nodes, "Please state if you require the following:");
      b_nodes.forEach(detach_dev);
      t31 = claim_text(p9_nodes, "\n      Opaque - Diaphragm - Split on a post and core.");
      p9_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(i, file, 110, 6, 3113);
      add_location(p0, file, 107, 4, 2959);
      add_location(br0, file, 112, 4, 3188);
      attr_dev(span0, "class", "svelte-b15mqy");
      add_location(span0, file, 114, 29, 3234);
      add_location(p1, file, 114, 6, 3211);
      attr_dev(span1, "class", "svelte-b15mqy");
      add_location(span1, file, 115, 26, 3281);
      add_location(p2, file, 115, 6, 3261);
      attr_dev(span2, "class", "svelte-b15mqy");
      add_location(span2, file, 116, 40, 3342);
      add_location(p3, file, 116, 6, 3308);
      attr_dev(span3, "class", "svelte-b15mqy");
      add_location(span3, file, 117, 37, 3400);
      add_location(p4, file, 117, 6, 3369);
      add_location(div0, file, 113, 4, 3199);
      attr_dev(span4, "class", "svelte-b15mqy");
      add_location(span4, file, 120, 38, 3480);
      add_location(p5, file, 120, 6, 3448);
      attr_dev(span5, "class", "svelte-b15mqy");
      add_location(span5, file, 121, 35, 3536);
      add_location(p6, file, 121, 6, 3507);
      attr_dev(span6, "class", "svelte-b15mqy");
      add_location(span6, file, 122, 29, 3586);
      add_location(p7, file, 122, 6, 3563);
      attr_dev(span7, "class", "svelte-b15mqy");
      add_location(span7, file, 123, 27, 3634);
      add_location(p8, file, 123, 6, 3613);
      add_location(div1, file, 119, 4, 3436);
      add_location(br1, file, 125, 4, 3670);
      add_location(b, file, 127, 6, 3691);
      add_location(p9, file, 126, 4, 3681);
      attr_dev(div2, "class", "section-content svelte-b15mqy");
      add_location(div2, file, 106, 2, 2925);
    },
    m: function mount(target, anchor) {
      mount_component(titleblock, target, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, div2, anchor);
      append_dev(div2, p0);
      append_dev(p0, t1);
      append_dev(p0, i);
      append_dev(i, t2);
      append_dev(div2, t3);
      append_dev(div2, br0);
      append_dev(div2, t4);
      append_dev(div2, div0);
      append_dev(div0, p1);
      append_dev(p1, t5);
      append_dev(p1, span0);
      append_dev(span0, t6);
      append_dev(div0, t7);
      append_dev(div0, p2);
      append_dev(p2, t8);
      append_dev(p2, span1);
      append_dev(span1, t9);
      append_dev(div0, t10);
      append_dev(div0, p3);
      append_dev(p3, t11);
      append_dev(p3, span2);
      append_dev(span2, t12);
      append_dev(div0, t13);
      append_dev(div0, p4);
      append_dev(p4, t14);
      append_dev(p4, span3);
      append_dev(span3, t15);
      append_dev(div2, t16);
      append_dev(div2, div1);
      append_dev(div1, p5);
      append_dev(p5, t17);
      append_dev(p5, span4);
      append_dev(span4, t18);
      append_dev(div1, t19);
      append_dev(div1, p6);
      append_dev(p6, t20);
      append_dev(p6, span5);
      append_dev(span5, t21);
      append_dev(div1, t22);
      append_dev(div1, p7);
      append_dev(p7, t23);
      append_dev(p7, span6);
      append_dev(span6, t24);
      append_dev(div1, t25);
      append_dev(div1, p8);
      append_dev(p8, t26);
      append_dev(p8, span7);
      append_dev(span7, t27);
      append_dev(div2, t28);
      append_dev(div2, br1);
      append_dev(div2, t29);
      append_dev(div2, p9);
      append_dev(p9, b);
      append_dev(b, t30);
      append_dev(p9, t31);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(titleblock.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(titleblock.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(titleblock, detaching);
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div2);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_7.name,
    type: "slot",
    source: "(105:0) <Section>",
    ctx: ctx
  });
  return block;
} // (134:0) <Section>


function create_default_slot_6(ctx) {
  var titleblock;
  var t0;
  var div2;
  var div0;
  var p0;
  var t1;
  var span0;
  var t2;
  var t3;
  var p1;
  var t4;
  var span1;
  var t5;
  var t6;
  var p2;
  var t7;
  var span2;
  var t8;
  var t9;
  var p3;
  var t10;
  var span3;
  var t11;
  var t12;
  var div1;
  var p4;
  var t13;
  var span4;
  var t14;
  var t15;
  var p5;
  var t16;
  var span5;
  var t17;
  var t18;
  var p6;
  var t19;
  var span6;
  var t20;
  var t21;
  var br;
  var current;
  titleblock = new TitleBlock({
    props: {
      heading: "Lithium Disilicate"
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(titleblock.$$.fragment);
      t0 = space();
      div2 = element("div");
      div0 = element("div");
      p0 = element("p");
      t1 = text("201. Artistic Emax Crown");
      span0 = element("span");
      t2 = text("£75");
      t3 = space();
      p1 = element("p");
      t4 = text("202. Artistic Emax Veneer");
      span1 = element("span");
      t5 = text("£75");
      t6 = space();
      p2 = element("p");
      t7 = text("203. Artistic Emax Inlay Onlay");
      span2 = element("span");
      t8 = text("£75");
      t9 = space();
      p3 = element("p");
      t10 = text("204. Artistic Emax Bridge (max 3 units)");
      span3 = element("span");
      t11 = text("£80");
      t12 = space();
      div1 = element("div");
      p4 = element("p");
      t13 = text("205. Basic L/D Crown");
      span4 = element("span");
      t14 = text("£50");
      t15 = space();
      p5 = element("p");
      t16 = text("206. Basic L/D Veneer");
      span5 = element("span");
      t17 = text("£50");
      t18 = space();
      p6 = element("p");
      t19 = text("207. Basic L/D Inlay Onlay");
      span6 = element("span");
      t20 = text("£50");
      t21 = space();
      br = element("br");
      this.h();
    },
    l: function claim(nodes) {
      claim_component(titleblock.$$.fragment, nodes);
      t0 = claim_space(nodes);
      div2 = claim_element(nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {});
      var div0_nodes = children(div0);
      p0 = claim_element(div0_nodes, "P", {});
      var p0_nodes = children(p0);
      t1 = claim_text(p0_nodes, "201. Artistic Emax Crown");
      span0 = claim_element(p0_nodes, "SPAN", {
        class: true
      });
      var span0_nodes = children(span0);
      t2 = claim_text(span0_nodes, "£75");
      span0_nodes.forEach(detach_dev);
      p0_nodes.forEach(detach_dev);
      t3 = claim_space(div0_nodes);
      p1 = claim_element(div0_nodes, "P", {});
      var p1_nodes = children(p1);
      t4 = claim_text(p1_nodes, "202. Artistic Emax Veneer");
      span1 = claim_element(p1_nodes, "SPAN", {
        class: true
      });
      var span1_nodes = children(span1);
      t5 = claim_text(span1_nodes, "£75");
      span1_nodes.forEach(detach_dev);
      p1_nodes.forEach(detach_dev);
      t6 = claim_space(div0_nodes);
      p2 = claim_element(div0_nodes, "P", {});
      var p2_nodes = children(p2);
      t7 = claim_text(p2_nodes, "203. Artistic Emax Inlay Onlay");
      span2 = claim_element(p2_nodes, "SPAN", {
        class: true
      });
      var span2_nodes = children(span2);
      t8 = claim_text(span2_nodes, "£75");
      span2_nodes.forEach(detach_dev);
      p2_nodes.forEach(detach_dev);
      t9 = claim_space(div0_nodes);
      p3 = claim_element(div0_nodes, "P", {});
      var p3_nodes = children(p3);
      t10 = claim_text(p3_nodes, "204. Artistic Emax Bridge (max 3 units)");
      span3 = claim_element(p3_nodes, "SPAN", {
        class: true
      });
      var span3_nodes = children(span3);
      t11 = claim_text(span3_nodes, "£80");
      span3_nodes.forEach(detach_dev);
      p3_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t12 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {});
      var div1_nodes = children(div1);
      p4 = claim_element(div1_nodes, "P", {});
      var p4_nodes = children(p4);
      t13 = claim_text(p4_nodes, "205. Basic L/D Crown");
      span4 = claim_element(p4_nodes, "SPAN", {
        class: true
      });
      var span4_nodes = children(span4);
      t14 = claim_text(span4_nodes, "£50");
      span4_nodes.forEach(detach_dev);
      p4_nodes.forEach(detach_dev);
      t15 = claim_space(div1_nodes);
      p5 = claim_element(div1_nodes, "P", {});
      var p5_nodes = children(p5);
      t16 = claim_text(p5_nodes, "206. Basic L/D Veneer");
      span5 = claim_element(p5_nodes, "SPAN", {
        class: true
      });
      var span5_nodes = children(span5);
      t17 = claim_text(span5_nodes, "£50");
      span5_nodes.forEach(detach_dev);
      p5_nodes.forEach(detach_dev);
      t18 = claim_space(div1_nodes);
      p6 = claim_element(div1_nodes, "P", {});
      var p6_nodes = children(p6);
      t19 = claim_text(p6_nodes, "207. Basic L/D Inlay Onlay");
      span6 = claim_element(p6_nodes, "SPAN", {
        class: true
      });
      var span6_nodes = children(span6);
      t20 = claim_text(span6_nodes, "£50");
      span6_nodes.forEach(detach_dev);
      p6_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t21 = claim_space(div2_nodes);
      br = claim_element(div2_nodes, "BR", {});
      div2_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span0, "class", "svelte-b15mqy");
      add_location(span0, file, 137, 33, 3955);
      add_location(p0, file, 137, 6, 3928);
      attr_dev(span1, "class", "svelte-b15mqy");
      add_location(span1, file, 138, 34, 4010);
      add_location(p1, file, 138, 6, 3982);
      attr_dev(span2, "class", "svelte-b15mqy");
      add_location(span2, file, 139, 39, 4070);
      add_location(p2, file, 139, 6, 4037);
      attr_dev(span3, "class", "svelte-b15mqy");
      add_location(span3, file, 140, 48, 4139);
      add_location(p3, file, 140, 6, 4097);
      add_location(div0, file, 136, 4, 3916);
      attr_dev(span4, "class", "svelte-b15mqy");
      add_location(span4, file, 143, 29, 4210);
      add_location(p4, file, 143, 6, 4187);
      attr_dev(span5, "class", "svelte-b15mqy");
      add_location(span5, file, 144, 30, 4261);
      add_location(p5, file, 144, 6, 4237);
      attr_dev(span6, "class", "svelte-b15mqy");
      add_location(span6, file, 145, 35, 4317);
      add_location(p6, file, 145, 6, 4288);
      add_location(div1, file, 142, 4, 4175);
      add_location(br, file, 147, 4, 4353);
      attr_dev(div2, "class", "section-content svelte-b15mqy");
      add_location(div2, file, 135, 2, 3882);
    },
    m: function mount(target, anchor) {
      mount_component(titleblock, target, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, div2, anchor);
      append_dev(div2, div0);
      append_dev(div0, p0);
      append_dev(p0, t1);
      append_dev(p0, span0);
      append_dev(span0, t2);
      append_dev(div0, t3);
      append_dev(div0, p1);
      append_dev(p1, t4);
      append_dev(p1, span1);
      append_dev(span1, t5);
      append_dev(div0, t6);
      append_dev(div0, p2);
      append_dev(p2, t7);
      append_dev(p2, span2);
      append_dev(span2, t8);
      append_dev(div0, t9);
      append_dev(div0, p3);
      append_dev(p3, t10);
      append_dev(p3, span3);
      append_dev(span3, t11);
      append_dev(div2, t12);
      append_dev(div2, div1);
      append_dev(div1, p4);
      append_dev(p4, t13);
      append_dev(p4, span4);
      append_dev(span4, t14);
      append_dev(div1, t15);
      append_dev(div1, p5);
      append_dev(p5, t16);
      append_dev(p5, span5);
      append_dev(span5, t17);
      append_dev(div1, t18);
      append_dev(div1, p6);
      append_dev(p6, t19);
      append_dev(p6, span6);
      append_dev(span6, t20);
      append_dev(div2, t21);
      append_dev(div2, br);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(titleblock.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(titleblock.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(titleblock, detaching);
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div2);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_6.name,
    type: "slot",
    source: "(134:0) <Section>",
    ctx: ctx
  });
  return block;
} // (152:0) <Section>


function create_default_slot_5(ctx) {
  var titleblock;
  var t0;
  var div2;
  var p0;
  var t1;
  var br;
  var t2;
  var div0;
  var p1;
  var b;
  var t3;
  var t4;
  var p2;
  var t5;
  var span0;
  var t6;
  var t7;
  var p3;
  var t8;
  var t9;
  var p4;
  var t10;
  var span1;
  var t11;
  var t12;
  var p5;
  var t13;
  var span2;
  var t14;
  var t15;
  var p6;
  var t16;
  var span3;
  var t17;
  var t18;
  var p7;
  var t19;
  var span4;
  var t20;
  var t21;
  var p8;
  var t22;
  var span5;
  var t23;
  var t24;
  var p9;
  var t25;
  var span6;
  var t26;
  var t27;
  var p10;
  var t28;
  var span7;
  var t29;
  var t30;
  var p11;
  var t31;
  var span8;
  var t32;
  var t33;
  var p12;
  var t34;
  var span9;
  var t35;
  var t36;
  var p13;
  var t37;
  var span10;
  var t38;
  var t39;
  var p14;
  var t40;
  var span11;
  var t41;
  var t42;
  var p15;
  var t43;
  var span12;
  var t44;
  var t45;
  var p16;
  var t46;
  var span13;
  var t47;
  var t48;
  var p17;
  var t49;
  var span14;
  var t50;
  var t51;
  var p18;
  var t52;
  var t53;
  var p19;
  var t54;
  var t55;
  var div1;
  var p20;
  var t56;
  var span15;
  var t57;
  var t58;
  var p21;
  var t59;
  var span16;
  var t60;
  var t61;
  var p22;
  var t62;
  var span17;
  var t63;
  var t64;
  var p23;
  var t65;
  var span18;
  var t66;
  var t67;
  var p24;
  var t68;
  var t69;
  var p25;
  var t70;
  var current;
  titleblock = new TitleBlock({
    props: {
      heading: "Implants"
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(titleblock.$$.fragment);
      t0 = space();
      div2 = element("div");
      p0 = element("p");
      t1 = text("A supreme non-precious alloy will be used in the manufacturing of the\n      crowns and bridges, trialled and tested by German scientists.\n      (Semi-precious metals can be substituted at a premium).\n    ");
      br = element("br");
      t2 = space();
      div0 = element("div");
      p1 = element("p");
      b = element("b");
      t3 = text("Price includes soft tissue model.");
      t4 = space();
      p2 = element("p");
      t5 = text("Supply Analog/Replica");
      span0 = element("span");
      t6 = text("£20");
      t7 = space();
      p3 = element("p");
      t8 = text("(Medentika Multi Platform Systems)");
      t9 = space();
      p4 = element("p");
      t10 = text("302. Screw Retained PFM Crown");
      span1 = element("span");
      t11 = text("£180");
      t12 = space();
      p5 = element("p");
      t13 = text("303. Screw Retained PFM Bridge Fixture");
      span2 = element("span");
      t14 = text("£180");
      t15 = space();
      p6 = element("p");
      t16 = text("Pontic (per unit) ");
      span3 = element("span");
      t17 = text("£100");
      t18 = space();
      p7 = element("p");
      t19 = text("304. Angle Screw Retained PFM Crown");
      span4 = element("span");
      t20 = text("£260");
      t21 = space();
      p8 = element("p");
      t22 = text("305. Angle Screw Retained PFM Bridge Fixture");
      span5 = element("span");
      t23 = text("£260");
      t24 = space();
      p9 = element("p");
      t25 = text("Pontic (per unit) ");
      span6 = element("span");
      t26 = text("£100");
      t27 = space();
      p10 = element("p");
      t28 = text("306. Screw Retained Emax Hybrid");
      span7 = element("span");
      t29 = text("£200");
      t30 = space();
      p11 = element("p");
      t31 = text("307. Angled Screw Retained Emax Hybrid");
      span8 = element("span");
      t32 = text("£280");
      t33 = space();
      p12 = element("p");
      t34 = text("308. Prep Stock Abutment Crown");
      span9 = element("span");
      t35 = text("£220");
      t36 = space();
      p13 = element("p");
      t37 = text("309. Prep Stock Abutment Bridge Fixture");
      span10 = element("span");
      t38 = text("£220");
      t39 = space();
      p14 = element("p");
      t40 = text("Pontic (per unit) ");
      span11 = element("span");
      t41 = text("£100");
      t42 = space();
      p15 = element("p");
      t43 = text("310. Custom Abutment Crown");
      span12 = element("span");
      t44 = text("£280");
      t45 = space();
      p16 = element("p");
      t46 = text("311. Custom Abutment Bridge Fixture");
      span13 = element("span");
      t47 = text("£280");
      t48 = space();
      p17 = element("p");
      t49 = text("Pontic (per unit) ");
      span14 = element("span");
      t50 = text("£100");
      t51 = space();
      p18 = element("p");
      t52 = text("312. Full Arch Cases – assessed on an individual basis please contact\n        via phone or email to discuss speciﬁcs");
      t53 = space();
      p19 = element("p");
      t54 = text("313. Cad Cam Zirconia – assessed on an individual basis please contact\n        via phone or email to discuss speciﬁcs");
      t55 = space();
      div1 = element("div");
      p20 = element("p");
      t56 = text("314. Screw Retained Temporary Crown");
      span15 = element("span");
      t57 = text("£85");
      t58 = space();
      p21 = element("p");
      t59 = text("315. Screw Retained Temporary Bridge Fixture");
      span16 = element("span");
      t60 = text("£85");
      t61 = space();
      p22 = element("p");
      t62 = text("Pontic (per unit) ");
      span17 = element("span");
      t63 = text("£50");
      t64 = space();
      p23 = element("p");
      t65 = text("316. Veri Check");
      span18 = element("span");
      t66 = text("£50");
      t67 = space();
      p24 = element("p");
      t68 = text("317. Aesthetic Set Up – assessed on an individual basis please contact\n        via phone or email to discuss speciﬁcs");
      t69 = space();
      p25 = element("p");
      t70 = text("318. Full Gold Crown– assessed on an individual basis please contact via\n        phone or email to discuss speciﬁcs");
      this.h();
    },
    l: function claim(nodes) {
      claim_component(titleblock.$$.fragment, nodes);
      t0 = claim_space(nodes);
      div2 = claim_element(nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      p0 = claim_element(div2_nodes, "P", {});
      var p0_nodes = children(p0);
      t1 = claim_text(p0_nodes, "A supreme non-precious alloy will be used in the manufacturing of the\n      crowns and bridges, trialled and tested by German scientists.\n      (Semi-precious metals can be substituted at a premium).\n    ");
      p0_nodes.forEach(detach_dev);
      br = claim_element(div2_nodes, "BR", {});
      t2 = claim_space(div2_nodes);
      div0 = claim_element(div2_nodes, "DIV", {});
      var div0_nodes = children(div0);
      p1 = claim_element(div0_nodes, "P", {});
      var p1_nodes = children(p1);
      b = claim_element(p1_nodes, "B", {});
      var b_nodes = children(b);
      t3 = claim_text(b_nodes, "Price includes soft tissue model.");
      b_nodes.forEach(detach_dev);
      p1_nodes.forEach(detach_dev);
      t4 = claim_space(div0_nodes);
      p2 = claim_element(div0_nodes, "P", {});
      var p2_nodes = children(p2);
      t5 = claim_text(p2_nodes, "Supply Analog/Replica");
      span0 = claim_element(p2_nodes, "SPAN", {
        class: true
      });
      var span0_nodes = children(span0);
      t6 = claim_text(span0_nodes, "£20");
      span0_nodes.forEach(detach_dev);
      p2_nodes.forEach(detach_dev);
      t7 = claim_space(div0_nodes);
      p3 = claim_element(div0_nodes, "P", {});
      var p3_nodes = children(p3);
      t8 = claim_text(p3_nodes, "(Medentika Multi Platform Systems)");
      p3_nodes.forEach(detach_dev);
      t9 = claim_space(div0_nodes);
      p4 = claim_element(div0_nodes, "P", {});
      var p4_nodes = children(p4);
      t10 = claim_text(p4_nodes, "302. Screw Retained PFM Crown");
      span1 = claim_element(p4_nodes, "SPAN", {
        class: true
      });
      var span1_nodes = children(span1);
      t11 = claim_text(span1_nodes, "£180");
      span1_nodes.forEach(detach_dev);
      p4_nodes.forEach(detach_dev);
      t12 = claim_space(div0_nodes);
      p5 = claim_element(div0_nodes, "P", {});
      var p5_nodes = children(p5);
      t13 = claim_text(p5_nodes, "303. Screw Retained PFM Bridge Fixture");
      span2 = claim_element(p5_nodes, "SPAN", {
        class: true
      });
      var span2_nodes = children(span2);
      t14 = claim_text(span2_nodes, "£180");
      span2_nodes.forEach(detach_dev);
      p5_nodes.forEach(detach_dev);
      t15 = claim_space(div0_nodes);
      p6 = claim_element(div0_nodes, "P", {});
      var p6_nodes = children(p6);
      t16 = claim_text(p6_nodes, "Pontic (per unit) ");
      span3 = claim_element(p6_nodes, "SPAN", {
        class: true
      });
      var span3_nodes = children(span3);
      t17 = claim_text(span3_nodes, "£100");
      span3_nodes.forEach(detach_dev);
      p6_nodes.forEach(detach_dev);
      t18 = claim_space(div0_nodes);
      p7 = claim_element(div0_nodes, "P", {});
      var p7_nodes = children(p7);
      t19 = claim_text(p7_nodes, "304. Angle Screw Retained PFM Crown");
      span4 = claim_element(p7_nodes, "SPAN", {
        class: true
      });
      var span4_nodes = children(span4);
      t20 = claim_text(span4_nodes, "£260");
      span4_nodes.forEach(detach_dev);
      p7_nodes.forEach(detach_dev);
      t21 = claim_space(div0_nodes);
      p8 = claim_element(div0_nodes, "P", {});
      var p8_nodes = children(p8);
      t22 = claim_text(p8_nodes, "305. Angle Screw Retained PFM Bridge Fixture");
      span5 = claim_element(p8_nodes, "SPAN", {
        class: true
      });
      var span5_nodes = children(span5);
      t23 = claim_text(span5_nodes, "£260");
      span5_nodes.forEach(detach_dev);
      p8_nodes.forEach(detach_dev);
      t24 = claim_space(div0_nodes);
      p9 = claim_element(div0_nodes, "P", {});
      var p9_nodes = children(p9);
      t25 = claim_text(p9_nodes, "Pontic (per unit) ");
      span6 = claim_element(p9_nodes, "SPAN", {
        class: true
      });
      var span6_nodes = children(span6);
      t26 = claim_text(span6_nodes, "£100");
      span6_nodes.forEach(detach_dev);
      p9_nodes.forEach(detach_dev);
      t27 = claim_space(div0_nodes);
      p10 = claim_element(div0_nodes, "P", {});
      var p10_nodes = children(p10);
      t28 = claim_text(p10_nodes, "306. Screw Retained Emax Hybrid");
      span7 = claim_element(p10_nodes, "SPAN", {
        class: true
      });
      var span7_nodes = children(span7);
      t29 = claim_text(span7_nodes, "£200");
      span7_nodes.forEach(detach_dev);
      p10_nodes.forEach(detach_dev);
      t30 = claim_space(div0_nodes);
      p11 = claim_element(div0_nodes, "P", {});
      var p11_nodes = children(p11);
      t31 = claim_text(p11_nodes, "307. Angled Screw Retained Emax Hybrid");
      span8 = claim_element(p11_nodes, "SPAN", {
        class: true
      });
      var span8_nodes = children(span8);
      t32 = claim_text(span8_nodes, "£280");
      span8_nodes.forEach(detach_dev);
      p11_nodes.forEach(detach_dev);
      t33 = claim_space(div0_nodes);
      p12 = claim_element(div0_nodes, "P", {});
      var p12_nodes = children(p12);
      t34 = claim_text(p12_nodes, "308. Prep Stock Abutment Crown");
      span9 = claim_element(p12_nodes, "SPAN", {
        class: true
      });
      var span9_nodes = children(span9);
      t35 = claim_text(span9_nodes, "£220");
      span9_nodes.forEach(detach_dev);
      p12_nodes.forEach(detach_dev);
      t36 = claim_space(div0_nodes);
      p13 = claim_element(div0_nodes, "P", {});
      var p13_nodes = children(p13);
      t37 = claim_text(p13_nodes, "309. Prep Stock Abutment Bridge Fixture");
      span10 = claim_element(p13_nodes, "SPAN", {
        class: true
      });
      var span10_nodes = children(span10);
      t38 = claim_text(span10_nodes, "£220");
      span10_nodes.forEach(detach_dev);
      p13_nodes.forEach(detach_dev);
      t39 = claim_space(div0_nodes);
      p14 = claim_element(div0_nodes, "P", {});
      var p14_nodes = children(p14);
      t40 = claim_text(p14_nodes, "Pontic (per unit) ");
      span11 = claim_element(p14_nodes, "SPAN", {
        class: true
      });
      var span11_nodes = children(span11);
      t41 = claim_text(span11_nodes, "£100");
      span11_nodes.forEach(detach_dev);
      p14_nodes.forEach(detach_dev);
      t42 = claim_space(div0_nodes);
      p15 = claim_element(div0_nodes, "P", {});
      var p15_nodes = children(p15);
      t43 = claim_text(p15_nodes, "310. Custom Abutment Crown");
      span12 = claim_element(p15_nodes, "SPAN", {
        class: true
      });
      var span12_nodes = children(span12);
      t44 = claim_text(span12_nodes, "£280");
      span12_nodes.forEach(detach_dev);
      p15_nodes.forEach(detach_dev);
      t45 = claim_space(div0_nodes);
      p16 = claim_element(div0_nodes, "P", {});
      var p16_nodes = children(p16);
      t46 = claim_text(p16_nodes, "311. Custom Abutment Bridge Fixture");
      span13 = claim_element(p16_nodes, "SPAN", {
        class: true
      });
      var span13_nodes = children(span13);
      t47 = claim_text(span13_nodes, "£280");
      span13_nodes.forEach(detach_dev);
      p16_nodes.forEach(detach_dev);
      t48 = claim_space(div0_nodes);
      p17 = claim_element(div0_nodes, "P", {});
      var p17_nodes = children(p17);
      t49 = claim_text(p17_nodes, "Pontic (per unit) ");
      span14 = claim_element(p17_nodes, "SPAN", {
        class: true
      });
      var span14_nodes = children(span14);
      t50 = claim_text(span14_nodes, "£100");
      span14_nodes.forEach(detach_dev);
      p17_nodes.forEach(detach_dev);
      t51 = claim_space(div0_nodes);
      p18 = claim_element(div0_nodes, "P", {});
      var p18_nodes = children(p18);
      t52 = claim_text(p18_nodes, "312. Full Arch Cases – assessed on an individual basis please contact\n        via phone or email to discuss speciﬁcs");
      p18_nodes.forEach(detach_dev);
      t53 = claim_space(div0_nodes);
      p19 = claim_element(div0_nodes, "P", {});
      var p19_nodes = children(p19);
      t54 = claim_text(p19_nodes, "313. Cad Cam Zirconia – assessed on an individual basis please contact\n        via phone or email to discuss speciﬁcs");
      p19_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t55 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {});
      var div1_nodes = children(div1);
      p20 = claim_element(div1_nodes, "P", {});
      var p20_nodes = children(p20);
      t56 = claim_text(p20_nodes, "314. Screw Retained Temporary Crown");
      span15 = claim_element(p20_nodes, "SPAN", {
        class: true
      });
      var span15_nodes = children(span15);
      t57 = claim_text(span15_nodes, "£85");
      span15_nodes.forEach(detach_dev);
      p20_nodes.forEach(detach_dev);
      t58 = claim_space(div1_nodes);
      p21 = claim_element(div1_nodes, "P", {});
      var p21_nodes = children(p21);
      t59 = claim_text(p21_nodes, "315. Screw Retained Temporary Bridge Fixture");
      span16 = claim_element(p21_nodes, "SPAN", {
        class: true
      });
      var span16_nodes = children(span16);
      t60 = claim_text(span16_nodes, "£85");
      span16_nodes.forEach(detach_dev);
      p21_nodes.forEach(detach_dev);
      t61 = claim_space(div1_nodes);
      p22 = claim_element(div1_nodes, "P", {});
      var p22_nodes = children(p22);
      t62 = claim_text(p22_nodes, "Pontic (per unit) ");
      span17 = claim_element(p22_nodes, "SPAN", {
        class: true
      });
      var span17_nodes = children(span17);
      t63 = claim_text(span17_nodes, "£50");
      span17_nodes.forEach(detach_dev);
      p22_nodes.forEach(detach_dev);
      t64 = claim_space(div1_nodes);
      p23 = claim_element(div1_nodes, "P", {});
      var p23_nodes = children(p23);
      t65 = claim_text(p23_nodes, "316. Veri Check");
      span18 = claim_element(p23_nodes, "SPAN", {
        class: true
      });
      var span18_nodes = children(span18);
      t66 = claim_text(span18_nodes, "£50");
      span18_nodes.forEach(detach_dev);
      p23_nodes.forEach(detach_dev);
      t67 = claim_space(div1_nodes);
      p24 = claim_element(div1_nodes, "P", {});
      var p24_nodes = children(p24);
      t68 = claim_text(p24_nodes, "317. Aesthetic Set Up – assessed on an individual basis please contact\n        via phone or email to discuss speciﬁcs");
      p24_nodes.forEach(detach_dev);
      t69 = claim_space(div1_nodes);
      p25 = claim_element(div1_nodes, "P", {});
      var p25_nodes = children(p25);
      t70 = claim_text(p25_nodes, "318. Full Gold Crown– assessed on an individual basis please contact via\n        phone or email to discuss speciﬁcs");
      p25_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(p0, file, 154, 4, 4463);
      add_location(br, file, 158, 8, 4681);
      add_location(b, file, 161, 9, 4708);
      add_location(p1, file, 161, 6, 4705);
      attr_dev(span0, "class", "svelte-b15mqy");
      add_location(span0, file, 162, 30, 4783);
      add_location(p2, file, 162, 6, 4759);
      add_location(p3, file, 163, 6, 4810);
      attr_dev(span1, "class", "svelte-b15mqy");
      add_location(span1, file, 164, 38, 4890);
      add_location(p4, file, 164, 6, 4858);
      attr_dev(span2, "class", "svelte-b15mqy");
      add_location(span2, file, 165, 47, 4959);
      add_location(p5, file, 165, 6, 4918);
      attr_dev(span3, "class", "svelte-b15mqy");
      add_location(span3, file, 166, 27, 5008);
      add_location(p6, file, 166, 6, 4987);
      attr_dev(span4, "class", "svelte-b15mqy");
      add_location(span4, file, 167, 44, 5074);
      add_location(p7, file, 167, 6, 5036);
      attr_dev(span5, "class", "svelte-b15mqy");
      add_location(span5, file, 168, 53, 5149);
      add_location(p8, file, 168, 6, 5102);
      attr_dev(span6, "class", "svelte-b15mqy");
      add_location(span6, file, 169, 27, 5198);
      add_location(p9, file, 169, 6, 5177);
      attr_dev(span7, "class", "svelte-b15mqy");
      add_location(span7, file, 170, 40, 5260);
      add_location(p10, file, 170, 6, 5226);
      attr_dev(span8, "class", "svelte-b15mqy");
      add_location(span8, file, 171, 47, 5329);
      add_location(p11, file, 171, 6, 5288);
      attr_dev(span9, "class", "svelte-b15mqy");
      add_location(span9, file, 172, 39, 5390);
      add_location(p12, file, 172, 6, 5357);
      attr_dev(span10, "class", "svelte-b15mqy");
      add_location(span10, file, 173, 48, 5460);
      add_location(p13, file, 173, 6, 5418);
      attr_dev(span11, "class", "svelte-b15mqy");
      add_location(span11, file, 174, 27, 5509);
      add_location(p14, file, 174, 6, 5488);
      attr_dev(span12, "class", "svelte-b15mqy");
      add_location(span12, file, 175, 35, 5566);
      add_location(p15, file, 175, 6, 5537);
      attr_dev(span13, "class", "svelte-b15mqy");
      add_location(span13, file, 176, 44, 5632);
      add_location(p16, file, 176, 6, 5594);
      attr_dev(span14, "class", "svelte-b15mqy");
      add_location(span14, file, 177, 27, 5681);
      add_location(p17, file, 177, 6, 5660);
      add_location(p18, file, 178, 6, 5709);
      add_location(p19, file, 182, 6, 5855);
      add_location(div0, file, 160, 4, 4693);
      attr_dev(span15, "class", "svelte-b15mqy");
      add_location(span15, file, 188, 44, 6061);
      add_location(p20, file, 188, 6, 6023);
      attr_dev(span16, "class", "svelte-b15mqy");
      add_location(span16, file, 189, 53, 6135);
      add_location(p21, file, 189, 6, 6088);
      attr_dev(span17, "class", "svelte-b15mqy");
      add_location(span17, file, 190, 27, 6183);
      add_location(p22, file, 190, 6, 6162);
      attr_dev(span18, "class", "svelte-b15mqy");
      add_location(span18, file, 191, 24, 6228);
      add_location(p23, file, 191, 6, 6210);
      add_location(p24, file, 192, 6, 6255);
      add_location(p25, file, 196, 6, 6402);
      add_location(div1, file, 187, 4, 6011);
      attr_dev(div2, "class", "section-content svelte-b15mqy");
      add_location(div2, file, 153, 2, 4429);
    },
    m: function mount(target, anchor) {
      mount_component(titleblock, target, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, div2, anchor);
      append_dev(div2, p0);
      append_dev(p0, t1);
      append_dev(div2, br);
      append_dev(div2, t2);
      append_dev(div2, div0);
      append_dev(div0, p1);
      append_dev(p1, b);
      append_dev(b, t3);
      append_dev(div0, t4);
      append_dev(div0, p2);
      append_dev(p2, t5);
      append_dev(p2, span0);
      append_dev(span0, t6);
      append_dev(div0, t7);
      append_dev(div0, p3);
      append_dev(p3, t8);
      append_dev(div0, t9);
      append_dev(div0, p4);
      append_dev(p4, t10);
      append_dev(p4, span1);
      append_dev(span1, t11);
      append_dev(div0, t12);
      append_dev(div0, p5);
      append_dev(p5, t13);
      append_dev(p5, span2);
      append_dev(span2, t14);
      append_dev(div0, t15);
      append_dev(div0, p6);
      append_dev(p6, t16);
      append_dev(p6, span3);
      append_dev(span3, t17);
      append_dev(div0, t18);
      append_dev(div0, p7);
      append_dev(p7, t19);
      append_dev(p7, span4);
      append_dev(span4, t20);
      append_dev(div0, t21);
      append_dev(div0, p8);
      append_dev(p8, t22);
      append_dev(p8, span5);
      append_dev(span5, t23);
      append_dev(div0, t24);
      append_dev(div0, p9);
      append_dev(p9, t25);
      append_dev(p9, span6);
      append_dev(span6, t26);
      append_dev(div0, t27);
      append_dev(div0, p10);
      append_dev(p10, t28);
      append_dev(p10, span7);
      append_dev(span7, t29);
      append_dev(div0, t30);
      append_dev(div0, p11);
      append_dev(p11, t31);
      append_dev(p11, span8);
      append_dev(span8, t32);
      append_dev(div0, t33);
      append_dev(div0, p12);
      append_dev(p12, t34);
      append_dev(p12, span9);
      append_dev(span9, t35);
      append_dev(div0, t36);
      append_dev(div0, p13);
      append_dev(p13, t37);
      append_dev(p13, span10);
      append_dev(span10, t38);
      append_dev(div0, t39);
      append_dev(div0, p14);
      append_dev(p14, t40);
      append_dev(p14, span11);
      append_dev(span11, t41);
      append_dev(div0, t42);
      append_dev(div0, p15);
      append_dev(p15, t43);
      append_dev(p15, span12);
      append_dev(span12, t44);
      append_dev(div0, t45);
      append_dev(div0, p16);
      append_dev(p16, t46);
      append_dev(p16, span13);
      append_dev(span13, t47);
      append_dev(div0, t48);
      append_dev(div0, p17);
      append_dev(p17, t49);
      append_dev(p17, span14);
      append_dev(span14, t50);
      append_dev(div0, t51);
      append_dev(div0, p18);
      append_dev(p18, t52);
      append_dev(div0, t53);
      append_dev(div0, p19);
      append_dev(p19, t54);
      append_dev(div2, t55);
      append_dev(div2, div1);
      append_dev(div1, p20);
      append_dev(p20, t56);
      append_dev(p20, span15);
      append_dev(span15, t57);
      append_dev(div1, t58);
      append_dev(div1, p21);
      append_dev(p21, t59);
      append_dev(p21, span16);
      append_dev(span16, t60);
      append_dev(div1, t61);
      append_dev(div1, p22);
      append_dev(p22, t62);
      append_dev(p22, span17);
      append_dev(span17, t63);
      append_dev(div1, t64);
      append_dev(div1, p23);
      append_dev(p23, t65);
      append_dev(p23, span18);
      append_dev(span18, t66);
      append_dev(div1, t67);
      append_dev(div1, p24);
      append_dev(p24, t68);
      append_dev(div1, t69);
      append_dev(div1, p25);
      append_dev(p25, t70);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(titleblock.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(titleblock.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(titleblock, detaching);
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div2);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_5.name,
    type: "slot",
    source: "(152:0) <Section>",
    ctx: ctx
  });
  return block;
} // (205:0) <Section>


function create_default_slot_4(ctx) {
  var titleblock;
  var t0;
  var div;
  var p0;
  var t1;
  var span0;
  var t2;
  var t3;
  var p1;
  var t4;
  var span1;
  var t5;
  var current;
  titleblock = new TitleBlock({
    props: {
      heading: "Zirconia Restorations"
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(titleblock.$$.fragment);
      t0 = space();
      div = element("div");
      p0 = element("p");
      t1 = text("401. Full Crown");
      span0 = element("span");
      t2 = text("£100");
      t3 = space();
      p1 = element("p");
      t4 = text("402. Bridge (per unit)");
      span1 = element("span");
      t5 = text("£100");
      this.h();
    },
    l: function claim(nodes) {
      claim_component(titleblock.$$.fragment, nodes);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      p0 = claim_element(div_nodes, "P", {});
      var p0_nodes = children(p0);
      t1 = claim_text(p0_nodes, "401. Full Crown");
      span0 = claim_element(p0_nodes, "SPAN", {
        class: true
      });
      var span0_nodes = children(span0);
      t2 = claim_text(span0_nodes, "£100");
      span0_nodes.forEach(detach_dev);
      p0_nodes.forEach(detach_dev);
      t3 = claim_space(div_nodes);
      p1 = claim_element(div_nodes, "P", {});
      var p1_nodes = children(p1);
      t4 = claim_text(p1_nodes, "402. Bridge (per unit)");
      span1 = claim_element(p1_nodes, "SPAN", {
        class: true
      });
      var span1_nodes = children(span1);
      t5 = claim_text(span1_nodes, "£100");
      span1_nodes.forEach(detach_dev);
      p1_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span0, "class", "svelte-b15mqy");
      add_location(span0, file, 207, 22, 6686);
      add_location(p0, file, 207, 4, 6668);
      attr_dev(span1, "class", "svelte-b15mqy");
      add_location(span1, file, 208, 29, 6737);
      add_location(p1, file, 208, 4, 6712);
      attr_dev(div, "class", "section-content svelte-b15mqy");
      add_location(div, file, 206, 2, 6634);
    },
    m: function mount(target, anchor) {
      mount_component(titleblock, target, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, div, anchor);
      append_dev(div, p0);
      append_dev(p0, t1);
      append_dev(p0, span0);
      append_dev(span0, t2);
      append_dev(div, t3);
      append_dev(div, p1);
      append_dev(p1, t4);
      append_dev(p1, span1);
      append_dev(span1, t5);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(titleblock.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(titleblock.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(titleblock, detaching);
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_4.name,
    type: "slot",
    source: "(205:0) <Section>",
    ctx: ctx
  });
  return block;
} // (213:0) <Section>


function create_default_slot_3(ctx) {
  var titleblock;
  var t0;
  var div;
  var p0;
  var t1;
  var span0;
  var t2;
  var t3;
  var p1;
  var t4;
  var span1;
  var t5;
  var t6;
  var p2;
  var t7;
  var span2;
  var t8;
  var t9;
  var p3;
  var t10;
  var span3;
  var t11;
  var t12;
  var p4;
  var t13;
  var span4;
  var t14;
  var t15;
  var p5;
  var t16;
  var span5;
  var t17;
  var current;
  titleblock = new TitleBlock({
    props: {
      heading: "Composites and Temporary Restorations"
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(titleblock.$$.fragment);
      t0 = space();
      div = element("div");
      p0 = element("p");
      t1 = text("501. Composite Crown");
      span0 = element("span");
      t2 = text("£45");
      t3 = space();
      p1 = element("p");
      t4 = text("502. Composite Bridge");
      span1 = element("span");
      t5 = text("£45");
      t6 = space();
      p2 = element("p");
      t7 = text("503. Composite Inlay");
      span2 = element("span");
      t8 = text("£45");
      t9 = space();
      p3 = element("p");
      t10 = text("504. Composite Onlay");
      span3 = element("span");
      t11 = text("£45");
      t12 = space();
      p4 = element("p");
      t13 = text("505. Acrylic Crown");
      span4 = element("span");
      t14 = text("£40");
      t15 = space();
      p5 = element("p");
      t16 = text("506. Acrylic Bridge");
      span5 = element("span");
      t17 = text("£40");
      this.h();
    },
    l: function claim(nodes) {
      claim_component(titleblock.$$.fragment, nodes);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      p0 = claim_element(div_nodes, "P", {});
      var p0_nodes = children(p0);
      t1 = claim_text(p0_nodes, "501. Composite Crown");
      span0 = claim_element(p0_nodes, "SPAN", {
        class: true
      });
      var span0_nodes = children(span0);
      t2 = claim_text(span0_nodes, "£45");
      span0_nodes.forEach(detach_dev);
      p0_nodes.forEach(detach_dev);
      t3 = claim_space(div_nodes);
      p1 = claim_element(div_nodes, "P", {});
      var p1_nodes = children(p1);
      t4 = claim_text(p1_nodes, "502. Composite Bridge");
      span1 = claim_element(p1_nodes, "SPAN", {
        class: true
      });
      var span1_nodes = children(span1);
      t5 = claim_text(span1_nodes, "£45");
      span1_nodes.forEach(detach_dev);
      p1_nodes.forEach(detach_dev);
      t6 = claim_space(div_nodes);
      p2 = claim_element(div_nodes, "P", {});
      var p2_nodes = children(p2);
      t7 = claim_text(p2_nodes, "503. Composite Inlay");
      span2 = claim_element(p2_nodes, "SPAN", {
        class: true
      });
      var span2_nodes = children(span2);
      t8 = claim_text(span2_nodes, "£45");
      span2_nodes.forEach(detach_dev);
      p2_nodes.forEach(detach_dev);
      t9 = claim_space(div_nodes);
      p3 = claim_element(div_nodes, "P", {});
      var p3_nodes = children(p3);
      t10 = claim_text(p3_nodes, "504. Composite Onlay");
      span3 = claim_element(p3_nodes, "SPAN", {
        class: true
      });
      var span3_nodes = children(span3);
      t11 = claim_text(span3_nodes, "£45");
      span3_nodes.forEach(detach_dev);
      p3_nodes.forEach(detach_dev);
      t12 = claim_space(div_nodes);
      p4 = claim_element(div_nodes, "P", {});
      var p4_nodes = children(p4);
      t13 = claim_text(p4_nodes, "505. Acrylic Crown");
      span4 = claim_element(p4_nodes, "SPAN", {
        class: true
      });
      var span4_nodes = children(span4);
      t14 = claim_text(span4_nodes, "£40");
      span4_nodes.forEach(detach_dev);
      p4_nodes.forEach(detach_dev);
      t15 = claim_space(div_nodes);
      p5 = claim_element(div_nodes, "P", {});
      var p5_nodes = children(p5);
      t16 = claim_text(p5_nodes, "506. Acrylic Bridge");
      span5 = claim_element(p5_nodes, "SPAN", {
        class: true
      });
      var span5_nodes = children(span5);
      t17 = claim_text(span5_nodes, "£40");
      span5_nodes.forEach(detach_dev);
      p5_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span0, "class", "svelte-b15mqy");
      add_location(span0, file, 215, 27, 6914);
      add_location(p0, file, 215, 4, 6891);
      attr_dev(span1, "class", "svelte-b15mqy");
      add_location(span1, file, 216, 28, 6963);
      add_location(p1, file, 216, 4, 6939);
      attr_dev(span2, "class", "svelte-b15mqy");
      add_location(span2, file, 217, 27, 7011);
      add_location(p2, file, 217, 4, 6988);
      attr_dev(span3, "class", "svelte-b15mqy");
      add_location(span3, file, 218, 27, 7059);
      add_location(p3, file, 218, 4, 7036);
      attr_dev(span4, "class", "svelte-b15mqy");
      add_location(span4, file, 219, 25, 7105);
      add_location(p4, file, 219, 4, 7084);
      attr_dev(span5, "class", "svelte-b15mqy");
      add_location(span5, file, 220, 26, 7152);
      add_location(p5, file, 220, 4, 7130);
      attr_dev(div, "class", "section-content svelte-b15mqy");
      add_location(div, file, 214, 2, 6857);
    },
    m: function mount(target, anchor) {
      mount_component(titleblock, target, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, div, anchor);
      append_dev(div, p0);
      append_dev(p0, t1);
      append_dev(p0, span0);
      append_dev(span0, t2);
      append_dev(div, t3);
      append_dev(div, p1);
      append_dev(p1, t4);
      append_dev(p1, span1);
      append_dev(span1, t5);
      append_dev(div, t6);
      append_dev(div, p2);
      append_dev(p2, t7);
      append_dev(p2, span2);
      append_dev(span2, t8);
      append_dev(div, t9);
      append_dev(div, p3);
      append_dev(p3, t10);
      append_dev(p3, span3);
      append_dev(span3, t11);
      append_dev(div, t12);
      append_dev(div, p4);
      append_dev(p4, t13);
      append_dev(p4, span4);
      append_dev(span4, t14);
      append_dev(div, t15);
      append_dev(div, p5);
      append_dev(p5, t16);
      append_dev(p5, span5);
      append_dev(span5, t17);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(titleblock.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(titleblock.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(titleblock, detaching);
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_3.name,
    type: "slot",
    source: "(213:0) <Section>",
    ctx: ctx
  });
  return block;
} // (225:0) <Section>


function create_default_slot_2(ctx) {
  var titleblock;
  var t0;
  var div;
  var p0;
  var t1;
  var span0;
  var t2;
  var t3;
  var p1;
  var t4;
  var span1;
  var t5;
  var t6;
  var p2;
  var t7;
  var span2;
  var t8;
  var current;
  titleblock = new TitleBlock({
    props: {
      heading: "Smile Design"
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(titleblock.$$.fragment);
      t0 = space();
      div = element("div");
      p0 = element("p");
      t1 = text("601. Diagnostic Wax-up");
      span0 = element("span");
      t2 = text("£15");
      t3 = space();
      p1 = element("p");
      t4 = text("602. Additive Wax-up");
      span1 = element("span");
      t5 = text("£10");
      t6 = space();
      p2 = element("p");
      t7 = text("603. Smile Make Over (price per unit, max 8)");
      span2 = element("span");
      t8 = text("£110");
      this.h();
    },
    l: function claim(nodes) {
      claim_component(titleblock.$$.fragment, nodes);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      p0 = claim_element(div_nodes, "P", {});
      var p0_nodes = children(p0);
      t1 = claim_text(p0_nodes, "601. Diagnostic Wax-up");
      span0 = claim_element(p0_nodes, "SPAN", {
        class: true
      });
      var span0_nodes = children(span0);
      t2 = claim_text(span0_nodes, "£15");
      span0_nodes.forEach(detach_dev);
      p0_nodes.forEach(detach_dev);
      t3 = claim_space(div_nodes);
      p1 = claim_element(div_nodes, "P", {});
      var p1_nodes = children(p1);
      t4 = claim_text(p1_nodes, "602. Additive Wax-up");
      span1 = claim_element(p1_nodes, "SPAN", {
        class: true
      });
      var span1_nodes = children(span1);
      t5 = claim_text(span1_nodes, "£10");
      span1_nodes.forEach(detach_dev);
      p1_nodes.forEach(detach_dev);
      t6 = claim_space(div_nodes);
      p2 = claim_element(div_nodes, "P", {});
      var p2_nodes = children(p2);
      t7 = claim_text(p2_nodes, "603. Smile Make Over (price per unit, max 8)");
      span2 = claim_element(p2_nodes, "SPAN", {
        class: true
      });
      var span2_nodes = children(span2);
      t8 = claim_text(span2_nodes, "£110");
      span2_nodes.forEach(detach_dev);
      p2_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span0, "class", "svelte-b15mqy");
      add_location(span0, file, 227, 29, 7305);
      add_location(p0, file, 227, 4, 7280);
      attr_dev(span1, "class", "svelte-b15mqy");
      add_location(span1, file, 228, 27, 7353);
      add_location(p1, file, 228, 4, 7330);
      attr_dev(span2, "class", "svelte-b15mqy");
      add_location(span2, file, 229, 51, 7425);
      add_location(p2, file, 229, 4, 7378);
      attr_dev(div, "class", "section-content svelte-b15mqy");
      add_location(div, file, 226, 2, 7246);
    },
    m: function mount(target, anchor) {
      mount_component(titleblock, target, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, div, anchor);
      append_dev(div, p0);
      append_dev(p0, t1);
      append_dev(p0, span0);
      append_dev(span0, t2);
      append_dev(div, t3);
      append_dev(div, p1);
      append_dev(p1, t4);
      append_dev(p1, span1);
      append_dev(span1, t5);
      append_dev(div, t6);
      append_dev(div, p2);
      append_dev(p2, t7);
      append_dev(p2, span2);
      append_dev(span2, t8);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(titleblock.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(titleblock.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(titleblock, detaching);
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_2.name,
    type: "slot",
    source: "(225:0) <Section>",
    ctx: ctx
  });
  return block;
} // (234:0) <Section>


function create_default_slot_1(ctx) {
  var titleblock;
  var t0;
  var div;
  var p0;
  var t1;
  var span0;
  var t2;
  var t3;
  var p1;
  var t4;
  var span1;
  var t5;
  var t6;
  var p2;
  var t7;
  var span2;
  var t8;
  var t9;
  var p3;
  var t10;
  var span3;
  var t11;
  var t12;
  var p4;
  var t13;
  var span4;
  var t14;
  var current;
  titleblock = new TitleBlock({
    props: {
      heading: "Vacuum Forming"
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(titleblock.$$.fragment);
      t0 = space();
      div = element("div");
      p0 = element("p");
      t1 = text("701. Bleaching Trays");
      span0 = element("span");
      t2 = text("£15");
      t3 = space();
      p1 = element("p");
      t4 = text("702. Mouth Guard (Size and Colour)");
      span1 = element("span");
      t5 = text("£35");
      t6 = space();
      p2 = element("p");
      t7 = text("703. Soft Splint");
      span2 = element("span");
      t8 = text("£25");
      t9 = space();
      p3 = element("p");
      t10 = text("704. Essix retainer");
      span3 = element("span");
      t11 = text("£20");
      t12 = space();
      p4 = element("p");
      t13 = text("705. Stent");
      span4 = element("span");
      t14 = text("£40");
      this.h();
    },
    l: function claim(nodes) {
      claim_component(titleblock.$$.fragment, nodes);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      p0 = claim_element(div_nodes, "P", {});
      var p0_nodes = children(p0);
      t1 = claim_text(p0_nodes, "701. Bleaching Trays");
      span0 = claim_element(p0_nodes, "SPAN", {
        class: true
      });
      var span0_nodes = children(span0);
      t2 = claim_text(span0_nodes, "£15");
      span0_nodes.forEach(detach_dev);
      p0_nodes.forEach(detach_dev);
      t3 = claim_space(div_nodes);
      p1 = claim_element(div_nodes, "P", {});
      var p1_nodes = children(p1);
      t4 = claim_text(p1_nodes, "702. Mouth Guard (Size and Colour)");
      span1 = claim_element(p1_nodes, "SPAN", {
        class: true
      });
      var span1_nodes = children(span1);
      t5 = claim_text(span1_nodes, "£35");
      span1_nodes.forEach(detach_dev);
      p1_nodes.forEach(detach_dev);
      t6 = claim_space(div_nodes);
      p2 = claim_element(div_nodes, "P", {});
      var p2_nodes = children(p2);
      t7 = claim_text(p2_nodes, "703. Soft Splint");
      span2 = claim_element(p2_nodes, "SPAN", {
        class: true
      });
      var span2_nodes = children(span2);
      t8 = claim_text(span2_nodes, "£25");
      span2_nodes.forEach(detach_dev);
      p2_nodes.forEach(detach_dev);
      t9 = claim_space(div_nodes);
      p3 = claim_element(div_nodes, "P", {});
      var p3_nodes = children(p3);
      t10 = claim_text(p3_nodes, "704. Essix retainer");
      span3 = claim_element(p3_nodes, "SPAN", {
        class: true
      });
      var span3_nodes = children(span3);
      t11 = claim_text(span3_nodes, "£20");
      span3_nodes.forEach(detach_dev);
      p3_nodes.forEach(detach_dev);
      t12 = claim_space(div_nodes);
      p4 = claim_element(div_nodes, "P", {});
      var p4_nodes = children(p4);
      t13 = claim_text(p4_nodes, "705. Stent");
      span4 = claim_element(p4_nodes, "SPAN", {
        class: true
      });
      var span4_nodes = children(span4);
      t14 = claim_text(span4_nodes, "£40");
      span4_nodes.forEach(detach_dev);
      p4_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span0, "class", "svelte-b15mqy");
      add_location(span0, file, 236, 27, 7579);
      add_location(p0, file, 236, 4, 7556);
      attr_dev(span1, "class", "svelte-b15mqy");
      add_location(span1, file, 237, 41, 7641);
      add_location(p1, file, 237, 4, 7604);
      attr_dev(span2, "class", "svelte-b15mqy");
      add_location(span2, file, 238, 23, 7685);
      add_location(p2, file, 238, 4, 7666);
      attr_dev(span3, "class", "svelte-b15mqy");
      add_location(span3, file, 239, 26, 7732);
      add_location(p3, file, 239, 4, 7710);
      attr_dev(span4, "class", "svelte-b15mqy");
      add_location(span4, file, 240, 17, 7770);
      add_location(p4, file, 240, 4, 7757);
      attr_dev(div, "class", "section-content svelte-b15mqy");
      add_location(div, file, 235, 2, 7522);
    },
    m: function mount(target, anchor) {
      mount_component(titleblock, target, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, div, anchor);
      append_dev(div, p0);
      append_dev(p0, t1);
      append_dev(p0, span0);
      append_dev(span0, t2);
      append_dev(div, t3);
      append_dev(div, p1);
      append_dev(p1, t4);
      append_dev(p1, span1);
      append_dev(span1, t5);
      append_dev(div, t6);
      append_dev(div, p2);
      append_dev(p2, t7);
      append_dev(p2, span2);
      append_dev(span2, t8);
      append_dev(div, t9);
      append_dev(div, p3);
      append_dev(p3, t10);
      append_dev(p3, span3);
      append_dev(span3, t11);
      append_dev(div, t12);
      append_dev(div, p4);
      append_dev(p4, t13);
      append_dev(p4, span4);
      append_dev(span4, t14);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(titleblock.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(titleblock.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(titleblock, detaching);
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_1.name,
    type: "slot",
    source: "(234:0) <Section>",
    ctx: ctx
  });
  return block;
} // (245:0) <Section>


function create_default_slot(ctx) {
  var titleblock;
  var t0;
  var div;
  var p0;
  var t1;
  var span0;
  var t2;
  var t3;
  var p1;
  var t4;
  var span1;
  var t5;
  var t6;
  var p2;
  var t7;
  var span2;
  var t8;
  var t9;
  var p3;
  var t10;
  var span3;
  var t11;
  var t12;
  var p4;
  var t13;
  var t14;
  var br;
  var t15;
  var p5;
  var i;
  var t16;
  var current;
  titleblock = new TitleBlock({
    props: {
      heading: "Miscellaneous"
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(titleblock.$$.fragment);
      t0 = space();
      div = element("div");
      p0 = element("p");
      t1 = text("801. Study Models");
      span0 = element("span");
      t2 = text("£15");
      t3 = space();
      p1 = element("p");
      t4 = text("802. Duplicate Models");
      span1 = element("span");
      t5 = text("£15");
      t6 = space();
      p2 = element("p");
      t7 = text("804. Re-etch ");
      span2 = element("span");
      t8 = text("£10");
      t9 = space();
      p3 = element("p");
      t10 = text("804. Articulation");
      span3 = element("span");
      t11 = text("£25");
      t12 = space();
      p4 = element("p");
      t13 = text("805. Shade Taking – assessed on an individual basis please contact via\n      phone or email to discuss speciﬁcs");
      t14 = space();
      br = element("br");
      t15 = space();
      p5 = element("p");
      i = element("i");
      t16 = text("(Prices are subject to changes).");
      this.h();
    },
    l: function claim(nodes) {
      claim_component(titleblock.$$.fragment, nodes);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      p0 = claim_element(div_nodes, "P", {});
      var p0_nodes = children(p0);
      t1 = claim_text(p0_nodes, "801. Study Models");
      span0 = claim_element(p0_nodes, "SPAN", {
        class: true
      });
      var span0_nodes = children(span0);
      t2 = claim_text(span0_nodes, "£15");
      span0_nodes.forEach(detach_dev);
      p0_nodes.forEach(detach_dev);
      t3 = claim_space(div_nodes);
      p1 = claim_element(div_nodes, "P", {});
      var p1_nodes = children(p1);
      t4 = claim_text(p1_nodes, "802. Duplicate Models");
      span1 = claim_element(p1_nodes, "SPAN", {
        class: true
      });
      var span1_nodes = children(span1);
      t5 = claim_text(span1_nodes, "£15");
      span1_nodes.forEach(detach_dev);
      p1_nodes.forEach(detach_dev);
      t6 = claim_space(div_nodes);
      p2 = claim_element(div_nodes, "P", {});
      var p2_nodes = children(p2);
      t7 = claim_text(p2_nodes, "804. Re-etch ");
      span2 = claim_element(p2_nodes, "SPAN", {
        class: true
      });
      var span2_nodes = children(span2);
      t8 = claim_text(span2_nodes, "£10");
      span2_nodes.forEach(detach_dev);
      p2_nodes.forEach(detach_dev);
      t9 = claim_space(div_nodes);
      p3 = claim_element(div_nodes, "P", {});
      var p3_nodes = children(p3);
      t10 = claim_text(p3_nodes, "804. Articulation");
      span3 = claim_element(p3_nodes, "SPAN", {
        class: true
      });
      var span3_nodes = children(span3);
      t11 = claim_text(span3_nodes, "£25");
      span3_nodes.forEach(detach_dev);
      p3_nodes.forEach(detach_dev);
      t12 = claim_space(div_nodes);
      p4 = claim_element(div_nodes, "P", {});
      var p4_nodes = children(p4);
      t13 = claim_text(p4_nodes, "805. Shade Taking – assessed on an individual basis please contact via\n      phone or email to discuss speciﬁcs");
      p4_nodes.forEach(detach_dev);
      t14 = claim_space(div_nodes);
      br = claim_element(div_nodes, "BR", {});
      t15 = claim_space(div_nodes);
      p5 = claim_element(div_nodes, "P", {
        class: true
      });
      var p5_nodes = children(p5);
      i = claim_element(p5_nodes, "I", {});
      var i_nodes = children(i);
      t16 = claim_text(i_nodes, "(Prices are subject to changes).");
      i_nodes.forEach(detach_dev);
      p5_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span0, "class", "svelte-b15mqy");
      add_location(span0, file, 247, 24, 7919);
      add_location(p0, file, 247, 4, 7899);
      attr_dev(span1, "class", "svelte-b15mqy");
      add_location(span1, file, 248, 28, 7968);
      add_location(p1, file, 248, 4, 7944);
      attr_dev(span2, "class", "svelte-b15mqy");
      add_location(span2, file, 249, 20, 8009);
      add_location(p2, file, 249, 4, 7993);
      attr_dev(span3, "class", "svelte-b15mqy");
      add_location(span3, file, 250, 24, 8054);
      add_location(p3, file, 250, 4, 8034);
      add_location(p4, file, 251, 4, 8079);
      add_location(br, file, 255, 4, 8214);
      add_location(i, file, 256, 26, 8247);
      attr_dev(p5, "class", "text-right");
      add_location(p5, file, 256, 4, 8225);
      attr_dev(div, "class", "section-content svelte-b15mqy");
      add_location(div, file, 246, 2, 7865);
    },
    m: function mount(target, anchor) {
      mount_component(titleblock, target, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, div, anchor);
      append_dev(div, p0);
      append_dev(p0, t1);
      append_dev(p0, span0);
      append_dev(span0, t2);
      append_dev(div, t3);
      append_dev(div, p1);
      append_dev(p1, t4);
      append_dev(p1, span1);
      append_dev(span1, t5);
      append_dev(div, t6);
      append_dev(div, p2);
      append_dev(p2, t7);
      append_dev(p2, span2);
      append_dev(span2, t8);
      append_dev(div, t9);
      append_dev(div, p3);
      append_dev(p3, t10);
      append_dev(p3, span3);
      append_dev(span3, t11);
      append_dev(div, t12);
      append_dev(div, p4);
      append_dev(p4, t13);
      append_dev(div, t14);
      append_dev(div, br);
      append_dev(div, t15);
      append_dev(div, p5);
      append_dev(p5, i);
      append_dev(i, t16);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(titleblock.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(titleblock.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(titleblock, detaching);
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(245:0) <Section>",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var t0;
  var h1;
  var t1;
  var t2;
  var h2;
  var t3;
  var t4;
  var br;
  var t5;
  var section0;
  var t6;
  var section1;
  var t7;
  var section2;
  var t8;
  var section3;
  var t9;
  var section4;
  var t10;
  var section5;
  var t11;
  var section6;
  var t12;
  var section7;
  var t13;
  var section8;
  var t14;
  var section9;
  var t15;
  var section10;
  var t16;
  var section11;
  var current;
  section0 = new Section({
    props: {
      $$slots: {
        default: [create_default_slot_11]
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
        default: [create_default_slot_10]
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
        default: [create_default_slot_9]
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
        default: [create_default_slot_8]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  section4 = new Section({
    props: {
      $$slots: {
        default: [create_default_slot_7]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  section5 = new Section({
    props: {
      $$slots: {
        default: [create_default_slot_6]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  section6 = new Section({
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
  section7 = new Section({
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
  section8 = new Section({
    props: {
      $$slots: {
        default: [create_default_slot_3]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  section9 = new Section({
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
  section10 = new Section({
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
  section11 = new Section({
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
      t1 = text("Artisan Smiles Services");
      t2 = space();
      h2 = element("h2");
      t3 = text("Cosmetic, Restorative and Implant Dental Services");
      t4 = space();
      br = element("br");
      t5 = space();
      create_component(section0.$$.fragment);
      t6 = space();
      create_component(section1.$$.fragment);
      t7 = space();
      create_component(section2.$$.fragment);
      t8 = space();
      create_component(section3.$$.fragment);
      t9 = space();
      create_component(section4.$$.fragment);
      t10 = space();
      create_component(section5.$$.fragment);
      t11 = space();
      create_component(section6.$$.fragment);
      t12 = space();
      create_component(section7.$$.fragment);
      t13 = space();
      create_component(section8.$$.fragment);
      t14 = space();
      create_component(section9.$$.fragment);
      t15 = space();
      create_component(section10.$$.fragment);
      t16 = space();
      create_component(section11.$$.fragment);
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
      t1 = claim_text(h1_nodes, "Artisan Smiles Services");
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
      h2 = claim_element(nodes, "H2", {
        class: true
      });
      var h2_nodes = children(h2);
      t3 = claim_text(h2_nodes, "Cosmetic, Restorative and Implant Dental Services");
      h2_nodes.forEach(detach_dev);
      t4 = claim_space(nodes);
      br = claim_element(nodes, "BR", {});
      t5 = claim_space(nodes);
      claim_component(section0.$$.fragment, nodes);
      t6 = claim_space(nodes);
      claim_component(section1.$$.fragment, nodes);
      t7 = claim_space(nodes);
      claim_component(section2.$$.fragment, nodes);
      t8 = claim_space(nodes);
      claim_component(section3.$$.fragment, nodes);
      t9 = claim_space(nodes);
      claim_component(section4.$$.fragment, nodes);
      t10 = claim_space(nodes);
      claim_component(section5.$$.fragment, nodes);
      t11 = claim_space(nodes);
      claim_component(section6.$$.fragment, nodes);
      t12 = claim_space(nodes);
      claim_component(section7.$$.fragment, nodes);
      t13 = claim_space(nodes);
      claim_component(section8.$$.fragment, nodes);
      t14 = claim_space(nodes);
      claim_component(section9.$$.fragment, nodes);
      t15 = claim_space(nodes);
      claim_component(section10.$$.fragment, nodes);
      t16 = claim_space(nodes);
      claim_component(section11.$$.fragment, nodes);
      this.h();
    },
    h: function hydrate() {
      document.title = "About";
      attr_dev(h1, "class", "tracking-wider text-white text-center text-5xl");
      add_location(h1, file, 9, 0, 185);
      attr_dev(h2, "class", "-mt-6 text-center text-as-green-dark");
      add_location(h2, file, 12, 0, 277);
      add_location(br, file, 15, 0, 385);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, h1, anchor);
      append_dev(h1, t1);
      insert_dev(target, t2, anchor);
      insert_dev(target, h2, anchor);
      append_dev(h2, t3);
      insert_dev(target, t4, anchor);
      insert_dev(target, br, anchor);
      insert_dev(target, t5, anchor);
      mount_component(section0, target, anchor);
      insert_dev(target, t6, anchor);
      mount_component(section1, target, anchor);
      insert_dev(target, t7, anchor);
      mount_component(section2, target, anchor);
      insert_dev(target, t8, anchor);
      mount_component(section3, target, anchor);
      insert_dev(target, t9, anchor);
      mount_component(section4, target, anchor);
      insert_dev(target, t10, anchor);
      mount_component(section5, target, anchor);
      insert_dev(target, t11, anchor);
      mount_component(section6, target, anchor);
      insert_dev(target, t12, anchor);
      mount_component(section7, target, anchor);
      insert_dev(target, t13, anchor);
      mount_component(section8, target, anchor);
      insert_dev(target, t14, anchor);
      mount_component(section9, target, anchor);
      insert_dev(target, t15, anchor);
      mount_component(section10, target, anchor);
      insert_dev(target, t16, anchor);
      mount_component(section11, target, anchor);
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
      var section4_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        section4_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      section4.$set(section4_changes);
      var section5_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        section5_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      section5.$set(section5_changes);
      var section6_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        section6_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      section6.$set(section6_changes);
      var section7_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        section7_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      section7.$set(section7_changes);
      var section8_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        section8_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      section8.$set(section8_changes);
      var section9_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        section9_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      section9.$set(section9_changes);
      var section10_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        section10_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      section10.$set(section10_changes);
      var section11_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        section11_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      section11.$set(section11_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(section0.$$.fragment, local);
      transition_in(section1.$$.fragment, local);
      transition_in(section2.$$.fragment, local);
      transition_in(section3.$$.fragment, local);
      transition_in(section4.$$.fragment, local);
      transition_in(section5.$$.fragment, local);
      transition_in(section6.$$.fragment, local);
      transition_in(section7.$$.fragment, local);
      transition_in(section8.$$.fragment, local);
      transition_in(section9.$$.fragment, local);
      transition_in(section10.$$.fragment, local);
      transition_in(section11.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(section0.$$.fragment, local);
      transition_out(section1.$$.fragment, local);
      transition_out(section2.$$.fragment, local);
      transition_out(section3.$$.fragment, local);
      transition_out(section4.$$.fragment, local);
      transition_out(section5.$$.fragment, local);
      transition_out(section6.$$.fragment, local);
      transition_out(section7.$$.fragment, local);
      transition_out(section8.$$.fragment, local);
      transition_out(section9.$$.fragment, local);
      transition_out(section10.$$.fragment, local);
      transition_out(section11.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(h1);
      if (detaching) detach_dev(t2);
      if (detaching) detach_dev(h2);
      if (detaching) detach_dev(t4);
      if (detaching) detach_dev(br);
      if (detaching) detach_dev(t5);
      destroy_component(section0, detaching);
      if (detaching) detach_dev(t6);
      destroy_component(section1, detaching);
      if (detaching) detach_dev(t7);
      destroy_component(section2, detaching);
      if (detaching) detach_dev(t8);
      destroy_component(section3, detaching);
      if (detaching) detach_dev(t9);
      destroy_component(section4, detaching);
      if (detaching) detach_dev(t10);
      destroy_component(section5, detaching);
      if (detaching) detach_dev(t11);
      destroy_component(section6, detaching);
      if (detaching) detach_dev(t12);
      destroy_component(section7, detaching);
      if (detaching) detach_dev(t13);
      destroy_component(section8, detaching);
      if (detaching) detach_dev(t14);
      destroy_component(section9, detaching);
      if (detaching) detach_dev(t15);
      destroy_component(section10, detaching);
      if (detaching) detach_dev(t16);
      destroy_component(section11, detaching);
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
  validate_slots("Services", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Services> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      Section: Section,
      TitleBlock: TitleBlock
    };
  };

  return [];
}

var Services = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Services, _SvelteComponentDev);

  var _super = _createSuper(Services);

  function Services(options) {
    var _this;

    _classCallCheck(this, Services);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Services",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Services;
}(SvelteComponentDev);

export default Services;
