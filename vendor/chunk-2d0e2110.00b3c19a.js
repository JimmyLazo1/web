(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e2110"],{"7cb0":function(t,e,n){"use strict";n.r(e),n.d(e,"getStatusMessage",(function(){return x}));var s=n("bd86"),c="SOLICITUDE_DATA_LIST",r=(n("2397"),n("d225")),i=n("b0b4"),a=n("4e2b"),u=n("308d"),o=n("6bb5"),d=n("4396");function l(t){var e=f();return function(){var n,s=Object(o["a"])(t);if(e){var c=Object(o["a"])(this).constructor;n=Reflect.construct(s,arguments,c)}else n=s.apply(this,arguments);return Object(u["a"])(this,n)}}function f(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}var p=function(t){Object(a["a"])(n,t);var e=l(n);function n(){return Object(r["a"])(this,n),e.apply(this,arguments)}return Object(i["a"])(n,[{key:"getListData",value:function(t){return t={},this.request({url:"customerContactUsRestService/listSolicitude",method:"get",body:t})}}]),n}(d["a"]),b=new p,D=(n("ac6a"),n("5df3"),n("f400"),n("b17e"));function v(t){var e=parseInt(t,10),n=function(t){return Object(D["O"])(t)||Object(D["N"])(t)||isNaN(t)};return n(e)||e<0?"unos <b>días</b>":e>1?"<b>".concat(e," días</b>"):"<b>1 día</b>"}function y(t){var e=v(t);return"En ".concat(e," tendrás una respuesta")}var g={FA:"FA",NF:"NF",PF:"PF"},h="default",m={success:"Tu solicitud procedió con <b>éxito</b>",failure:"Tu solicitud <b>no</b> procedió"},O={red:"red",yellow:"yellow",green:"green"},w={success:"Procedió",failure:"No procedió",process:"En proceso"},j={success:function(){return{description:m.success,color:O.green,status:w.success}},failure:function(){return{description:m.failure,color:O.red,status:w.failure}},process:function(t){return{description:y(t),color:O.yellow,status:w.process}}},F=new Map([[g.NF,j.failure],[g.FA,j.success],[g.PF,j.success],[h,j.process]]),N={solicitudeData:{solicitudeDataList:[]}},L=Object(s["a"])({},c,(function(t,e){t.solicitudeData.solicitudeDataList=e})),S={dataList:function(t,e){var n=t.commit;return b.getListData().then((function(t){var e=t.data.solicitude,s=void 0===e?[]:e,r=s.map((function(t){return{number:t.solicitudeNumber,typeDescription:t.solicitudeTypeDescription,statusDescription:t.solicitudeStatusDescription,statusMessage:x(t.solicitudeStatusCode,t.remainingDays),days:t.remainingDays,registerDate:t.registerDate,estimatedEndDate:t.estimatedEndDate,endDate:t.endDate,extended:t.extended,extendedDate:t.extendedDate}}));n(c,r)})).catch((function(t){n(c,[])}))}};function x(t,e){var n=F.has(t),s=n?t:h;return F.get(s)(e)}var R={};e["default"]={solicitude:{namespaced:!0,state:N,mutations:L,actions:S,getters:R}}}}]);