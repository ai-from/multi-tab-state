(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{267:function(o,n,t){"use strict";t.r(n);var e={name:"CoordsComponent",computed:{coords:function(){return this.$store.getters.getCoords}},mounted:function(){var o=this;window.addEventListener("mousemove",(function(n){o.$store.commit("setCoords",{x:n.clientX,y:n.clientY})}))}},r=t(58),component=Object(r.a)(e,(function(){var o=this,n=o._self._c;return n("div",[n("h1",[o._v("Coords")]),o._v("\n  X: "+o._s(o.coords.x)),n("br"),o._v("\n  Y: "+o._s(o.coords.y)+"\n")])}),[],!1,null,null,null);n.default=component.exports}}]);