(function(e){function t(t){for(var a,s,o=t[0],c=t[1],l=t[2],d=0,f=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},i=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/dashboard/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0e22":function(e,t,n){"use strict";n("a873")},"105c":function(e,t,n){},"10f4":function(e,t,n){},1120:function(e,t,n){"use strict";n("bd93")},1935:function(e,t,n){},"1c47":function(e,t,n){"use strict";n("396c")},"210f":function(e,t,n){"use strict";n("e70b")},"21aa":function(e,t,n){"use strict";n("beb2")},2220:function(e,t,n){},"396c":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function r(e,t,n,r,i,s){var o=Object(a["y"])("router-view");return Object(a["r"])(),Object(a["d"])(o)}var i={name:"App"},s=(n("0e22"),n("d959")),o=n.n(s);const c=o()(i,[["render",r]]);var l=c,u=(n("d3b7"),n("6c02")),d=(n("498a"),n("4d63"),n("c607"),n("ac1f"),n("2c3e"),n("25f0"),n("5319"),n("1276"),n("d81d"),n("fb6a"),n("c1f9"),n("2ca0"),n("a9e3"),n("caad"),n("2532"),n("159b"),n("b0c0"),n("4d90"),n("6062"),n("3ca3"),n("ddb0"),n("4e82"),n("5502")),f=Object(d["a"])({state:{data:null,fileName:null,board:0,regionCode:{Maryland:"MD","South Dakota":"SD",Texas:"TX",Massachusetts:"MA",Pennsylvania:"PA",Georgia:"GA",Arizona:"AZ","South Carolina":"SC",Alabama:"AL",California:"CA",Oregon:"OR","New Mexico":"NM",Virginia:"VA",Louisiana:"LA",Minnesota:"MN",Illinois:"IL",Michigan:"MI",Florida:"FL",Iowa:"IA",Utah:"UT",Ohio:"OH","New York":"NY",Alaska:"AK",Connecticut:"CT","North Carolina":"NC",Wisconsin:"WI",Colorado:"CO",Missouri:"MO",Maine:"ME",Indiana:"IN","West Virginia":"WV",Kentucky:"KY","New Hampshire":"NH",Nebraska:"NE",Washington:"WA",Montana:"MT","North Dakota":"ND",Idaho:"ID",Delaware:"DE",Tennessee:"TN","New Jersey":"NJ",Oklahoma:"OK",Arkansas:"AR",Nevada:"NV",Wyoming:"WY","District of Columbia":"DC",Mississippi:"MS",Kansas:"KS",Hawaii:"HI","Rhode Island":"RI",Vermont:"VT"},regionId:null,month:null,discountY:"ProfitRatio"},mutations:{SET_DATA:function(e,t){e.data=t},SET_FILE_NAME:function(e,t){e.fileName=t},SET_BOARD:function(e,t){e.board=t},SET_DISCOUNT_Y:function(e,t){e.discountY=t},SET_REGION_ID:function(e,t){e.regionId=t},SET_MONTH:function(e,t){e.month===t?e.month=null:e.month=t}},actions:{csv2Array:function(e,t){var n=e.dispatch;if(t){var a=t.trim(),r=new RegExp('(\\,|\\r?\\n|\\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^"\\,\\r\\n]*))',"gi"),i=[[]],s=null;while(s=r.exec(a)){if(s[1].length&&","!=s[1]&&i.push([]),s[2])var o=s[2].replace(new RegExp('""',"g"),'"');else o=s[3];i[i.length-1].push(o)}n("csv2Json",i)}},tsv2Array:function(e,t){var n=e.commit;if(t){var a=t.trim().split("\n"),r=a[0].split("\t").map((function(e){return e.replace(" ","").trim()})),i=a.slice(1).map((function(e){var t=e.split("\t").map((function(e){return e.trim()}));return Object.fromEntries(r.map((function(e,n){var a=t[n];return"Profit"!==e&&"Sales"!==e&&"ProfitRatio"!==e||("Profit"===e&&a.startsWith("(")&&(a="-"+a),a=a.replace(/[()$%,]/g,"")),isNaN(a)||(a=Number(a)),e.includes("Date")&&(a=a.split(".").map((function(e){return e.trim()})).slice(0,-1)),[e,a]})))}));n("SET_DATA",i),Tt.push({name:"Dashboard"})}},csv2Json:function(e,t){var n=e.commit,a=t[0].map((function(e){return e.replace(" ","")})),r=t.slice(1).map((function(e){return Object.fromEntries(a.map((function(t,n){var a=e[n];return"Profit"!==t&&"Sales"!==t&&"ProfitRatio"!==t||("Profit"===t&&a.startsWith("(")&&(a="-"+a),a=a.replace(/[()$%,]/g,"")),isNaN(a)||(a=Number(a)),t.includes("Date")&&(a=a.split(".").map((function(e){return e.trim()})).slice(0,-1)),[t,a]})))}));n("SET_DATA",r),Tt.push({name:"Dashboard"})}},getters:{categoryData:function(e){var t=[];return e.data.forEach((function(e){for(var n=e.Category,a=!1,r=0;r<t.length;r++)if(t[r].name===n){t[r].profit+=e.Profit,t[r].order++,a=!0;break}a||t.push({name:n,profit:e.Profit,order:1})})),t},segmentData:function(e){var t=[];return e.data.forEach((function(e){for(var n=e.Segment,a=!1,r=0;r<t.length;r++)if(t[r].name===n){t[r].profit+=e.Profit,t[r].order++,a=!0;break}a||t.push({name:n,profit:e.Profit,order:1})})),t},periodData:function(e){var t=[];return e.data.forEach((function(e){for(var n=e.OrderDate[0]+"-"+e.OrderDate[1].padStart(2,"0"),a=!1,r=0;r<t.length;r++)if(t[r].month===n){t[r].profit+=e.Profit,t[r].sales+=e.Sales,t[r].rate=Math.ceil(t[r].profit/t[r].sales*100);for(var i=!1,s=0;s<t[r].category.length;s++)if(t[r].category[s].name===e.Category){t[r].category[s].profit+=e.Profit,t[r].category[s].order++,i=!0;break}i||t[r].category.push({name:e.Category,profit:e.Profit,order:1});for(var o=!1,c=0;c<t[r].segment.length;c++)if(t[r].segment[c].name===e.Segment){t[r].segment[c].customer.add(e.CustomerID),t[r].segment[c].cnt=t[r].segment[c].customer.size,t[r].segment[c].profit+=e.Profit,t[r].segment[c].order++,o=!0;break}if(!o){var l=new Set;l.add(e.CustomerID),t[r].segment.push({name:e.Segment,customer:l,cnt:l.size,profit:e.Profit,order:1})}a=!0;break}if(!a){var u=new Set;u.add(e.CustomerID),t.push({month:n,profit:e.Profit,sales:e.Sales,rate:e.ProfitRatio,segment:[{name:e.Segment,customer:u,cnt:u.size,profit:e.Profit,order:1}],category:[{name:e.Category,profit:e.Profit,order:1}]})}})),t.sort((function(e,t){return e.month>t.month?1:e.month<t.month?-1:0})),t},regionData:function(e){var t=[];return e.data.forEach((function(n){if("United States"===n.Country){for(var a=n.State,r=!1,i=0;i<t.length;i++)if(t[i].name===a){t[i].profit+=n.Profit,t[i].sales+=n.Sales,t[i].order++;for(var s=!1,o=0;o<t[i].category.length;o++)if(t[i].category[o].name===n.Category){t[i].category[o].profit+=n.Profit,t[i].category[o].order++,s=!0;break}s||t[i].category.push({name:n.Category,profit:n.Profit,order:1});for(var c=!1,l=0;l<t[i].segment.length;l++)if(t[i].segment[l].name===n.Segment){t[i].segment[l].customer.add(n.CustomerID),t[i].segment[l].cnt=t[i].segment[l].customer.size,t[i].segment[l].profit+=n.Profit,t[i].segment[l].order++,c=!0;break}if(!c){var u=new Set;u.add(n.CustomerID),t[i].segment.push({name:n.Segment,customer:u,cnt:u.size,profit:n.Profit,order:1})}r=!0;break}if(!r){var d=new Set;d.add(n.CustomerID),t.push({id:"US-"+e.regionCode[a],name:a,profit:n.Profit,sales:n.Sales,order:1,segment:[{name:n.Segment,customer:d,cnt:d.size,profit:n.Profit,order:1}],category:[{name:n.Category,profit:n.Profit,order:1}]})}}})),t},saleData:function(e){return e.data.map((function(t){var n;return n="Office Supplies"===t.Category?"#DC6967":"Furniture"===t.Category?"#A367DC":"#67B7DC",{category:t.Category,subCategory:t["Sub-Category"],date:t.OrderDate[0]+"-"+t.OrderDate[1].trim()+"-"+t.OrderDate[2].trim(),color:n,x:100*t.Discount,y:t[e.discountY],value:1,profit:t.Profit,profitRatio:t.ProfitRatio,sales:t.Sales}}))}}}),g=f,p={class:"board"};function m(e,t,n,r,i,s){var o=Object(a["y"])("Navbar"),c=Object(a["y"])("BoardDefault"),l=Object(a["y"])("BoardRegion"),u=Object(a["y"])("BoardSeller");return Object(a["r"])(),Object(a["f"])("div",p,[Object(a["i"])(o),e.board?Object(a["e"])("",!0):(Object(a["r"])(),Object(a["d"])(c,{key:0})),1===e.board?(Object(a["r"])(),Object(a["d"])(l,{key:1})):Object(a["e"])("",!0),2===e.board?(Object(a["r"])(),Object(a["d"])(u,{key:2})):Object(a["e"])("",!0)])}var b=n("5530"),h=function(e){return Object(a["u"])("data-v-1cc572f2"),e=e(),Object(a["s"])(),e},O={class:"nav"},v=h((function(){return Object(a["g"])("i",{class:"fi fi-rr-chart-histogram"},null,-1)})),j=h((function(){return Object(a["g"])("span",null,"Period",-1)})),y=[v,j],A=h((function(){return Object(a["g"])("i",{class:"fi fi-rr-map-marker"},null,-1)})),w=h((function(){return Object(a["g"])("span",null,"Region",-1)})),D=[A,w],I=h((function(){return Object(a["g"])("i",{class:"fi fi-rr-earnings rotate-180"},null,-1)})),x=h((function(){return Object(a["g"])("span",null,"Discount",-1)})),S=[I,x];function C(e,t,n,r,i,s){return Object(a["r"])(),Object(a["f"])("div",O,[Object(a["g"])("div",{class:"nav-item",onClick:t[0]||(t[0]=function(e){return s.changeBoard(0)})},y),Object(a["g"])("div",{class:"nav-item",onClick:t[1]||(t[1]=function(e){return s.changeBoard(1)})},D),Object(a["g"])("div",{class:"nav-item",onClick:t[2]||(t[2]=function(e){return s.changeBoard(2)})},S)])}var P={name:"Navbar",methods:{changeBoard:function(e){this.$store.commit("SET_BOARD",e)}}};n("21aa");const T=o()(P,[["render",C],["__scopeId","data-v-1cc572f2"]]);var k=T,F={class:"content default"},R={class:"bottom"},_={class:"month-title"};function N(e,t,n,r,i,s){var o=Object(a["y"])("Period"),c=Object(a["y"])("Category"),l=Object(a["y"])("Segment");return Object(a["r"])(),Object(a["f"])("div",F,[Object(a["i"])(o),Object(a["g"])("div",R,[Object(a["g"])("span",_,Object(a["A"])(s.selectedMonth),1),Object(a["i"])(c),Object(a["i"])(l)])])}var E={class:"category",id:"category"};function Y(e,t,n,r,i,s){return Object(a["r"])(),Object(a["f"])("div",E)}n("7db0");var M=n("842e"),z=n("147a"),H=n("be4b"),X=n("50be"),$=n("f7ee"),B=n("bd57"),W=n("ea8e"),U=n("d675"),V=n("6126"),L={name:"Category",data:function(){return{chart:null,seriesInner:null,seriesOuter:null}},computed:Object(b["a"])(Object(b["a"])(Object(b["a"])({},Object(d["b"])(["categoryData","periodData"])),Object(d["c"])(["month"])),{},{targetData:function(){var e=this;if(this.month){var t=this.periodData.find((function(t){return t.month===e.month}));return t.category}return this.categoryData}}),watch:{month:function(){this.seriesInner.data.setAll(this.targetData),this.seriesOuter.data.setAll(this.targetData)}},mounted:function(){var e=this;M["y"]((function(){var t=z["a"].new("category");t.setThemes([V["a"].new(t)]),e.chart=t.container.children.push(W["a"].new(t,{startAngle:170,endAngle:370})),e.seriesInner=e.chart.series.push(U["a"].new(t,{categoryField:"name",valueField:"order",startAngle:170,endAngle:370,radius:H["d"](70),innerRadius:H["d"](65)})),e.seriesOuter=e.chart.series.push(U["a"].new(t,{categoryField:"name",valueField:"profit",startAngle:170,endAngle:370,innerRadius:H["d"](80)}));var n=X["a"].new(t,{colors:[e.seriesInner.get("colors").getIndex(4)],passOptions:{lightness:-.2,hue:0}}),a=$["a"].new(t,{labelText:"[bold]{name}[/]\n{valueField}: {value}"}),r=$["a"].new(t,{labelText:"[bold]{name}[/]\n{valueField}: ${value}"});e.seriesInner.set("tooltip",a),e.seriesInner.set("colors",n),e.seriesInner.ticks.template.set("forceHidden",!0),e.seriesInner.labels.template.set("forceHidden",!0),e.seriesOuter.set("tooltip",r),e.seriesOuter.ticks.template.set("forceHidden",!0),e.seriesOuter.labels.template.set("forceHidden",!0),e.chart.seriesContainer.children.push(B["a"].new(t,{textAlign:"center",centerY:H["b"],centerX:H["c"],text:"[fontSize:16px]Profit by[/]\n[bold fontSize:24px]Category[/]"})),e.seriesInner.data.setAll(e.targetData),e.seriesOuter.data.setAll(e.targetData)}))}};n("99f5");const J=o()(L,[["render",Y]]);var K=J,G={id:"period",class:"period"};function q(e,t,n,r,i,s){return Object(a["r"])(),Object(a["f"])("div",G)}var Z=n("919a"),Q=n("71fe"),ee=n("e4e6"),te=n("cfd0"),ne=n("830b"),ae=n("3917"),re=n("9dc0"),ie=n("a6df"),se=n("bd30"),oe=n("8534"),ce=n("c53c"),le=n("d7cb"),ue={name:"Period",computed:Object(b["a"])({},Object(d["b"])(["periodData"])),mounted:function(){var e=this;M["y"]((function(){var t=z["a"].new("period");t.setThemes([V["a"].new(t)]);var n=t.container.children.push(ne["a"].new(t,{panX:!1,panY:!1,wheelX:"panX",wheelY:"zoomX",layout:t.verticalLayout}));n.set("scrollbarX",Z["a"].new(t,{orientation:"horizontal"}));var a=n.xAxes.push(ae["a"].new(t,{categoryField:"month",renderer:re["a"].new(t,{}),tooltip:$["a"].new(t,{})}));a.data.setAll(e.periodData);var r=n.yAxes.push(ie["a"].new(t,{renderer:se["a"].new(t,{})})),i=se["a"].new(t,{opposite:!0});i.grid.template.set("forceHidden",!0);var s=n.yAxes.push(ie["a"].new(t,{numberFormat:"#'%'",renderer:i})),o=n.series.push(oe["a"].new(t,{name:"Profit",xAxis:a,yAxis:r,valueYField:"profit",categoryXField:"month",clustered:!1,tooltip:$["a"].new(t,{pointerOrientation:"horizontal",labelText:"{name} in {categoryX}: ${valueY}"})}));o.columns.template.set("width",H["d"](40));var c=n.series.push(oe["a"].new(t,{name:"Sales",xAxis:a,yAxis:r,valueYField:"sales",categoryXField:"month",clustered:!1,tooltip:$["a"].new(t,{pointerOrientation:"horizontal",labelText:"{name} in {categoryX}: ${valueY}"})}));c.columns.template.events.on("click",(function(t){e.$store.commit("SET_MONTH",t.target.dataItem.dataContext.month)})),c.columns.template.setAll({width:H["d"](60),fillOpacity:.5,strokeOpacity:0}),o.data.setAll(e.periodData),c.data.setAll(e.periodData);var l=n.series.push(ce["a"].new(t,{name:"Profit Ratio",xAxis:a,yAxis:s,valueYField:"rate",categoryXField:"month",tooltip:$["a"].new(t,{pointerOrientation:"horizontal",labelText:"{name} in {categoryX}: {valueY}%"})}));l.strokes.template.setAll({strokeWidth:3,templateField:"strokeSettings"}),l.data.setAll(e.periodData),l.bullets.push((function(){return Q["a"].new(t,{sprite:ee["a"].new(t,{strokeWidth:3,stroke:c.get("stroke"),radius:5,fill:t.interfaceColors.get("background")})})})),n.set("cursor",le["a"].new(t,{}));var u=n.children.push(te["a"].new(t,{centerX:H["c"],x:H["c"]}));u.data.setAll(n.series.values),n.appear(1e3,100),o.appear(1e3),c.appear(1e3)}))}};n("93ff");const de=o()(ue,[["render",q],["__scopeId","data-v-1814e62e"]]);var fe=de,ge={class:"segment",id:"segment"};function pe(e,t,n,r,i,s){return Object(a["r"])(),Object(a["f"])("div",ge)}var me={name:"Segment",data:function(){return{chart:null,seriesInner:null,seriesOuter:null}},computed:Object(b["a"])(Object(b["a"])(Object(b["a"])({},Object(d["b"])(["segmentData","periodData"])),Object(d["c"])(["month"])),{},{targetData:function(){var e=this;if(this.month){var t=this.periodData.find((function(t){return t.month===e.month}));return t.segment}return this.segmentData}}),watch:{month:function(){this.seriesInner.data.setAll(this.targetData),this.seriesOuter.data.setAll(this.targetData)}},mounted:function(){var e=this;M["y"]((function(){var t=z["a"].new("segment");t.setThemes([V["a"].new(t)]),e.chart=t.container.children.push(W["a"].new(t,{startAngle:170,endAngle:370})),e.seriesInner=e.chart.series.push(U["a"].new(t,{categoryField:"name",valueField:"order",startAngle:170,endAngle:370,radius:H["d"](70),innerRadius:H["d"](65)})),e.seriesOuter=e.chart.series.push(U["a"].new(t,{categoryField:"name",valueField:"profit",startAngle:170,endAngle:370,innerRadius:H["d"](80)}));var n=X["a"].new(t,{colors:[e.seriesInner.get("colors").getIndex(4)],passOptions:{lightness:-.2,hue:0}}),a=$["a"].new(t,{labelText:"[bold]{name}[/]\n{valueField}: {value}"}),r=$["a"].new(t,{labelText:"[bold]{name}[/]\n{valueField}: ${value}"});e.seriesInner.set("tooltip",a),e.seriesInner.set("colors",n),e.seriesInner.ticks.template.set("forceHidden",!0),e.seriesInner.labels.template.set("forceHidden",!0),e.seriesOuter.set("tooltip",r),e.seriesOuter.ticks.template.set("forceHidden",!0),e.seriesOuter.labels.template.set("forceHidden",!0),e.chart.seriesContainer.children.push(B["a"].new(t,{textAlign:"center",centerY:H["b"],centerX:H["c"],text:"[fontSize:16px]Profit by[/]\n[bold fontSize:24px]Segment[/]"})),e.seriesInner.data.setAll(e.targetData),e.seriesOuter.data.setAll(e.targetData)}))}};n("210f");const be=o()(me,[["render",pe]]);var he=be,Oe={name:"BoardDefault",components:{Category:K,Period:fe,Segment:he},computed:Object(b["a"])(Object(b["a"])({},Object(d["c"])(["month"])),{},{selectedMonth:function(){return this.month?this.month:"Total"}})};n("6063");const ve=o()(Oe,[["render",N],["__scopeId","data-v-6c0258be"]]);var je=ve,ye={class:"content default"},Ae={class:"top"},we={class:"region-info"},De={class:"state"},Ie={class:"detail"},xe=Object(a["h"])("Profit: "),Se=Object(a["h"])("Sales: "),Ce=Object(a["h"])("Customer: "),Pe=Object(a["h"])("Order: "),Te={class:"bottom"},ke={class:"region-title"};function Fe(e,t,n,r,i,s){var o=Object(a["y"])("Region"),c=Object(a["y"])("RegionCategory"),l=Object(a["y"])("RegionSegment");return Object(a["r"])(),Object(a["f"])("div",ye,[Object(a["g"])("div",Ae,[Object(a["g"])("div",we,[Object(a["g"])("div",De,Object(a["A"])(s.targetData.name),1),Object(a["g"])("div",Ie,[Object(a["g"])("span",null,[xe,Object(a["g"])("strong",null,"$"+Object(a["A"])(s.targetData.profit),1)]),Object(a["g"])("span",null,[Se,Object(a["g"])("strong",null,"$"+Object(a["A"])(s.targetData.sales),1)]),Object(a["g"])("span",null,[Ce,Object(a["g"])("strong",null,Object(a["A"])(s.customerCnt),1)]),Object(a["g"])("span",null,[Pe,Object(a["g"])("strong",null,Object(a["A"])(s.targetData.order),1)])])]),Object(a["i"])(o)]),Object(a["g"])("div",Te,[Object(a["g"])("span",ke,Object(a["A"])(s.targetData.name),1),Object(a["i"])(c),Object(a["i"])(l)])])}var Re={class:"region",id:"region"};function _e(e,t,n,r,i,s){return Object(a["r"])(),Object(a["f"])("div",Re)}var Ne=n("08b0"),Ee=n("c5fb"),Ye=n("6a3e"),Me=n("e16c"),ze=n("1d99"),He={name:"Region",computed:Object(b["a"])({},Object(d["b"])(["regionData"])),mounted:function(){var e=this;M["y"]((function(){var t=z["a"].new("region");t.setThemes([V["a"].new(t)]);var n=t.container.children.push(Ee["a"].new(t,{projection:Ye["a"]()})),a=n.series.push(Me["a"].new(t,{geoJSON:ze["a"],valueField:"profit",calculateAggregates:!0}));a.mapPolygons.template.events.on("click",(function(t){e.$store.commit("SET_REGION_ID",t.target.dataItem.dataContext.id)})),a.mapPolygons.template.setAll({tooltipText:"[bold]{name}[/]\nprofit: ${profit}\nsales: ${sales}"}),a.set("heatRules",[{target:a.mapPolygons.template,dataField:"value",min:Ne["b"](9077481),max:Ne["b"](16003394),key:"fill"}]),a.data.setAll(e.regionData)}))}};n("f6ef");const Xe=o()(He,[["render",_e],["__scopeId","data-v-37d9ca68"]]);var $e=Xe,Be={class:"region-category",id:"region-category"};function We(e,t,n,r,i,s){return Object(a["r"])(),Object(a["f"])("div",Be)}var Ue={name:"RegionCategory",data:function(){return{chart:null,seriesInner:null,seriesOuter:null}},computed:Object(b["a"])(Object(b["a"])(Object(b["a"])({},Object(d["b"])(["regionData"])),Object(d["c"])(["regionId"])),{},{targetData:function(){var e=this;return this.regionId?this.regionData.find((function(t){return t.id===e.regionId})):this.regionData[0]}}),watch:{regionId:function(){this.seriesInner.data.setAll(this.targetData.category),this.seriesOuter.data.setAll(this.targetData.category)}},mounted:function(){var e=this;M["y"]((function(){var t=z["a"].new("region-category");t.setThemes([V["a"].new(t)]),e.chart=t.container.children.push(W["a"].new(t,{startAngle:170,endAngle:370})),e.seriesInner=e.chart.series.push(U["a"].new(t,{categoryField:"name",valueField:"order",startAngle:170,endAngle:370,radius:H["d"](70),innerRadius:H["d"](65)})),e.seriesOuter=e.chart.series.push(U["a"].new(t,{categoryField:"name",valueField:"profit",startAngle:170,endAngle:370,innerRadius:H["d"](80)}));var n=X["a"].new(t,{colors:[e.seriesInner.get("colors").getIndex(4)],passOptions:{lightness:-.2,hue:0}}),a=$["a"].new(t,{labelText:"[bold]{category}[/]\n{valueField}: {value}"}),r=$["a"].new(t,{labelText:"[bold]{category}[/]\n{valueField}: ${value}"});e.seriesInner.set("tooltip",a),e.seriesInner.set("colors",n),e.seriesInner.ticks.template.set("forceHidden",!0),e.seriesInner.labels.template.set("forceHidden",!0),e.seriesOuter.set("tooltip",r),e.seriesOuter.ticks.template.set("forceHidden",!0),e.seriesOuter.labels.template.set("forceHidden",!0),e.chart.seriesContainer.children.push(B["a"].new(t,{textAlign:"center",centerY:H["b"],centerX:H["c"],text:"[fontSize:16px]Profit by[/]\n[bold fontSize:24px]Category[/]"})),e.seriesInner.data.setAll(e.targetData.category),e.seriesOuter.data.setAll(e.targetData.category)}))}};n("1c47");const Ve=o()(Ue,[["render",We]]);var Le=Ve,Je={class:"region-segment",id:"region-segment"};function Ke(e,t,n,r,i,s){return Object(a["r"])(),Object(a["f"])("div",Je)}var Ge={name:"RegionSegment",data:function(){return{chart:null,seriesInner:null,seriesOuter:null,seriesCustomer:null}},computed:Object(b["a"])(Object(b["a"])(Object(b["a"])({},Object(d["b"])(["regionData"])),Object(d["c"])(["regionId"])),{},{targetData:function(){var e=this;return this.regionId?this.regionData.find((function(t){return t.id===e.regionId})):this.regionData[0]}}),watch:{regionId:function(){this.seriesCustomer.data.setAll(this.targetData.segment),this.seriesInner.data.setAll(this.targetData.segment),this.seriesOuter.data.setAll(this.targetData.segment)}},mounted:function(){var e=this;M["y"]((function(){var t=z["a"].new("region-segment");t.setThemes([V["a"].new(t)]),e.chart=t.container.children.push(W["a"].new(t,{startAngle:170,endAngle:370})),e.seriesCustomer=e.chart.series.push(U["a"].new(t,{categoryField:"name",valueField:"cnt",startAngle:170,endAngle:370,radius:H["d"](60),innerRadius:H["d"](55)})),e.seriesInner=e.chart.series.push(U["a"].new(t,{categoryField:"name",valueField:"order",startAngle:170,endAngle:370,radius:H["d"](75),innerRadius:H["d"](65)})),e.seriesOuter=e.chart.series.push(U["a"].new(t,{categoryField:"name",valueField:"profit",startAngle:170,endAngle:370,innerRadius:H["d"](80)}));var n=X["a"].new(t,{colors:[e.seriesInner.get("colors").getIndex(4)],passOptions:{lightness:-.2,hue:0}}),a=$["a"].new(t,{labelText:"[bold]{category}[/]\nCustomer: {value}"}),r=$["a"].new(t,{labelText:"[bold]{category}[/]\n{valueField}: {value}"}),i=$["a"].new(t,{labelText:"[bold]{category}[/]\n{valueField}: ${value}"});e.seriesInner.set("tooltip",r),e.seriesInner.set("colors",n),e.seriesInner.ticks.template.set("forceHidden",!0),e.seriesInner.labels.template.set("forceHidden",!0),e.seriesOuter.set("tooltip",i),e.seriesOuter.ticks.template.set("forceHidden",!0),e.seriesOuter.labels.template.set("forceHidden",!0),e.seriesCustomer.set("tooltip",a),e.seriesCustomer.ticks.template.set("forceHidden",!0),e.seriesCustomer.labels.template.set("forceHidden",!0),e.chart.seriesContainer.children.push(B["a"].new(t,{textAlign:"center",centerY:H["b"],centerX:H["c"],text:"[fontSize:16px]Profit by[/]\n[bold fontSize:24px]Segment[/]"})),e.seriesCustomer.data.setAll(e.targetData.segment),e.seriesInner.data.setAll(e.targetData.segment),e.seriesOuter.data.setAll(e.targetData.segment)}))}};n("9612");const qe=o()(Ge,[["render",Ke]]);var Ze=qe,Qe={name:"BoardRegion",components:{Region:$e,RegionCategory:Le,RegionSegment:Ze},computed:Object(b["a"])(Object(b["a"])(Object(b["a"])({},Object(d["c"])(["regionId"])),Object(d["b"])(["regionData"])),{},{targetData:function(){var e=this;return this.regionId?this.regionData.find((function(t){return t.id===e.regionId})):this.regionData[0]},customerCnt:function(){return this.targetData.segment.reduce((function(e,t){return e+t.cnt}),0)}})};n("64a3");const et=o()(Qe,[["render",Fe],["__scopeId","data-v-5a85b2c2"]]);var tt=et,nt={class:"content default"};function at(e,t,n,r,i,s){var o=Object(a["y"])("Sale");return Object(a["r"])(),Object(a["f"])("div",nt,[Object(a["i"])(o)])}var rt={class:"discount"},it={class:"select-box"},st=["value"],ot=Object(a["g"])("div",{class:"sale",id:"sale"},null,-1);function ct(e,t,n,r,i,s){return Object(a["r"])(),Object(a["f"])("div",rt,[Object(a["g"])("div",it,[Object(a["E"])(Object(a["g"])("select",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.type=e}),onChange:t[1]||(t[1]=function(){return s.changeYAxis&&s.changeYAxis.apply(s,arguments)})},[(Object(a["r"])(!0),Object(a["f"])(a["a"],null,Object(a["x"])(i.typeOption,(function(e,t){return Object(a["r"])(),Object(a["f"])("option",{class:"decorated",value:e,key:t},Object(a["A"])(e),9,st)})),128))],544),[[a["C"],i.type]])]),ot])}var lt=n("c95f"),ut={name:"Discount",data:function(){return{type:"ProfitRatio",typeOption:["Profit","Sales","ProfitRatio"],series:null}},methods:{changeYAxis:function(){this.$store.commit("SET_DISCOUNT_Y",this.type)}},computed:Object(b["a"])(Object(b["a"])({},Object(d["b"])(["saleData"])),Object(d["c"])(["discountY"])),watch:{discountY:function(){this.series.data.setAll(this.saleData)}},mounted:function(){var e=this,t=z["a"].new("sale");t.setThemes([V["a"].new(t)]);var n=t.container.children.push(ne["a"].new(t,{panX:!0,panY:!0,wheelY:"zoomXY"})),a=n.xAxes.push(ie["a"].new(t,{renderer:re["a"].new(t,{}),tooltip:$["a"].new(t,{})}));a.children.moveValue(B["a"].new(t,{text:"[bold]Discount(%)[/]",x:H["c"],centerX:H["c"]}),a.children.length-1);var r=n.yAxes.push(ie["a"].new(t,{renderer:se["a"].new(t,{inversed:!1}),tooltip:$["a"].new(t,{})}));this.series=n.series.push(ce["a"].new(t,{calculateAggregates:!0,xAxis:a,yAxis:r,valueYField:"y",valueXField:"x",valueField:"value",seriesTooltipTarget:"bullet",tooltip:$["a"].new(t,{pointerOrientation:"horizontal",labelText:"[bold]{category}({subCategory})[/]\nOrder Date: {date}\nProfit Ratio: {profitRatio}%\nProfit: ${profit}\nSales: ${sales}\nDiscount: {valueX}%"})})),this.series.strokes.template.set("visible",!1);var i=lt["a"].new({});i.adapters.add("fill",(function(e,t){var n=t.dataItem;return n?Ne["a"].fromString(n.dataContext.color):e})),this.series.bullets.push((function(){var n=ee["a"].new(t,{radius:5,fill:e.series.get("fill"),fillOpacity:.8},i);return Q["a"].new(t,{sprite:n})})),this.series.set("heatRules",[{target:i,min:5,max:5,dataField:"value",key:"radius"}]),this.series.data.setAll(this.saleData),n.set("cursor",le["a"].new(t,{xAxis:a,yAxis:r,snapToSeries:[this.series]})),n.set("scrollbarX",Z["a"].new(t,{orientation:"horizontal"})),n.set("scrollbarY",Z["a"].new(t,{orientation:"vertical"})),this.series.appear(1e3),n.appear(1e3,100)}};n("fcb1");const dt=o()(ut,[["render",ct]]);var ft=dt,gt={name:"BoardCustomer",components:{Sale:ft}};n("b9ea");const pt=o()(gt,[["render",at],["__scopeId","data-v-354a574c"]]);var mt=pt,bt={name:"Dashboard",components:{Navbar:k,BoardDefault:je,BoardRegion:tt,BoardSeller:mt},computed:Object(b["a"])({},Object(d["c"])(["board"]))};n("1120");const ht=o()(bt,[["render",m],["__scopeId","data-v-4a14fa38"]]);var Ot=ht,vt=function(e){return Object(a["u"])("data-v-df48944c"),e=e(),Object(a["s"])(),e},jt={class:"add-data"},yt=vt((function(){return Object(a["g"])("h1",{class:"title"},"Data Visualization",-1)})),At=vt((function(){return Object(a["g"])("div",{class:"subtitle"},"Please upload the data in csv format to visualize.",-1)})),wt=vt((function(){return Object(a["g"])("label",{for:"file-input"},"파일 업로드",-1)}));function Dt(e,t,n,r,i,s){return Object(a["r"])(),Object(a["f"])("div",jt,[yt,At,wt,Object(a["g"])("input",{id:"file-input",type:"file",accept:".csv",onChange:t[0]||(t[0]=function(){return s.onUpload&&s.onUpload.apply(s,arguments)}),style:{display:"none"}},null,32)])}var It={name:"AddData",data:function(){return{file:null}},methods:{onUpload:function(e){var t=this,n=e.target.files?e.target.files[0]:null,a=new FileReader;a.onload=function(){t.file=a.result},a.readAsText(n,"EUC-KR"),this.$store.commit("SET_FILE_NAME",n.name)}},watch:{file:function(){this.$store.dispatch("tsv2Array",this.file)}},computed:Object(b["a"])({},Object(d["c"])(["data","fileName"]))};n("77c6");const xt=o()(It,[["render",Dt],["__scopeId","data-v-df48944c"]]);var St=xt,Ct=[{path:"/visualization",name:"Dashboard",component:Ot,meta:{requireData:!0}},{path:"/",name:"AddData",component:St}],Pt=Object(u["a"])({history:Object(u["b"])("/dashboard/"),routes:Ct});Pt.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.requireData}))?g.state.data?n():n("/"):n()}));var Tt=Pt;Object(a["c"])(l).use(g).use(Tt).mount("#app")},6063:function(e,t,n){"use strict";n("fc9e")},"64a3":function(e,t,n){"use strict";n("e6ca")},"779d":function(e,t,n){},"77c6":function(e,t,n){"use strict";n("f64f")},"93ff":function(e,t,n){"use strict";n("a23d")},9612:function(e,t,n){"use strict";n("2220")},"99f5":function(e,t,n){"use strict";n("105c")},a23d:function(e,t,n){},a873:function(e,t,n){},b9ea:function(e,t,n){"use strict";n("10f4")},bd93:function(e,t,n){},beb2:function(e,t,n){},e6ca:function(e,t,n){},e70b:function(e,t,n){},f64f:function(e,t,n){},f6ef:function(e,t,n){"use strict";n("779d")},fc9e:function(e,t,n){},fcb1:function(e,t,n){"use strict";n("1935")}});
//# sourceMappingURL=app.d95c6834.js.map