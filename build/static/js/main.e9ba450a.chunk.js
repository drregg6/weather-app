(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(69)},,,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/thunderstorm1.9bb3e076.jpeg"},function(e,t,a){e.exports=a.p+"static/media/thunderstorm2.0b5ff630.jpeg"},function(e,t,a){e.exports=a.p+"static/media/thunderstorm3.8891fe3e.jpeg"},function(e,t,a){e.exports=a.p+"static/media/thunderstorm4.8b9d6ff9.jpg"},function(e,t,a){e.exports=a.p+"static/media/thunderstorm5.297b3692.jpeg"},function(e,t,a){e.exports=a.p+"static/media/rain1.82afa63f.jpeg"},function(e,t,a){e.exports=a.p+"static/media/rain2.f1473f1a.jpeg"},function(e,t,a){e.exports=a.p+"static/media/rain3.ac900056.jpeg"},function(e,t,a){e.exports=a.p+"static/media/rain4.99b0a262.jpeg"},function(e,t,a){e.exports=a.p+"static/media/rain5.82cd221c.jpeg"},function(e,t,a){e.exports=a.p+"static/media/snow1.2d37b374.jpeg"},function(e,t,a){e.exports=a.p+"static/media/snow2.271369dc.jpeg"},function(e,t,a){e.exports=a.p+"static/media/snow3.e577c786.jpeg"},function(e,t,a){e.exports=a.p+"static/media/snow4.a2b8f267.jpeg"},function(e,t,a){e.exports=a.p+"static/media/snow5.acec5e23.jpeg"},function(e,t,a){e.exports=a.p+"static/media/fog1.98e7506a.jpg"},function(e,t,a){e.exports=a.p+"static/media/fog2.46752743.jpeg"},function(e,t,a){e.exports=a.p+"static/media/fog3.266503f7.jpeg"},function(e,t,a){e.exports=a.p+"static/media/fog4.c5f14087.jpeg"},function(e,t,a){e.exports=a.p+"static/media/fog5.0151843f.jpeg"},function(e,t,a){e.exports=a.p+"static/media/clouds1.1409c988.jpeg"},function(e,t,a){e.exports=a.p+"static/media/clouds2.870d1821.jpeg"},function(e,t,a){e.exports=a.p+"static/media/clouds3.743d5f82.jpeg"},function(e,t,a){e.exports=a.p+"static/media/clouds4.26493bab.jpeg"},function(e,t,a){e.exports=a.p+"static/media/clouds5.6afa0566.jpeg"},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(15),c=a.n(r),o=(a(23),a(2)),s=a(3),p=a(5),u=a(4),l=a(7),d=a(6);function m(){return i.a.createElement("header",{style:f},i.a.createElement("h1",null,"Weather App"))}var f={color:"#333",background:"rgba(255, 167, 3, 1)",padding:"10px",fontSize:"1.5rem"};function h(){var e=new Date;return i.a.createElement("footer",{style:g},i.a.createElement("p",null,"\xa9",e.getUTCFullYear()," ",i.a.createElement("a",{href:"https://github.com/drregg6",target:"_blank"},"Dave Regg")))}var g={color:"#333",background:"rgba(255, 167, 3, 1)",padding:"15px",fontSize:10},b=function(e){function t(e){return Object(o.a)(this,t),Object(p.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,this.props.city))}}]),t}(i.a.Component),j=function(e){function t(e){return Object(o.a)(this,t),Object(p.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.temp;return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{style:x,onClick:this.props.changeTemp.bind(this,e)},e,"\xb0"," ",this.props.isCelsius&&i.a.createElement(i.a.Fragment,null,"C"),!this.props.isCelsius&&i.a.createElement(i.a.Fragment,null,"F")))}}]),t}(n.Component),x={cursor:"pointer",fontSize:40,display:"inline-block",fontWeight:"bold",margin:"20px auto"},v=j,O=function(e){function t(e){return Object(o.a)(this,t),Object(p.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,this.props.capitalize(this.props.description)))}}]),t}(n.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:E,className:"main"},i.a.createElement(b,{city:this.props.weather.city}),i.a.createElement(v,{changeTemp:this.props.changeTemp,temp:this.props.weather.temp,isCelsius:this.props.weather.isCelsius}),i.a.createElement(O,{description:this.props.weather.description,capitalize:this.props.capitalize}))}}]),t}(i.a.Component),E={textAlign:"center"},w=y,k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(u.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault(),a.props.searchLocation(a.state.value),a.setState({value:""})},a.getInput=function(e){a.setState({value:e.target.value})},a.state={value:""},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("form",{style:C,onSubmit:this.onSubmit},i.a.createElement("input",{style:S,type:"text",name:"location",placeholder:"Search for a location...",value:this.state.value,onChange:this.getInput}),i.a.createElement("input",{style:z,type:"submit",value:"Search!"}))}}]),t}(n.Component),C={display:"flex",height:"40px",backgroundColor:"#fff"},S={flex:"0 0 79%",marginRight:"1%"},z={flex:"0 0 19%",marginLeft:"1%"},F=k,I=a(16),A=a.n(I),P=(a(43),{thunderstorm:[a(44),a(45),a(46),a(47),a(48)],rain:[a(49),a(50),a(51),a(52),a(53)],snow:[a(54),a(55),a(56),a(57),a(58)],fog:[a(59),a(60),a(61),a(62),a(63)],clouds:[a(64),a(65),a(66),a(67),a(68)]}),T=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(u.a)(t).call(this,e))).changeTemp=function(){if(a.state.isCelsius){var e=(1.8*a.state.temp+32).toFixed(0);a.setState({isCelsius:!a.state.isCelsius}),a.setState({temp:e})}else{var t=((a.state.temp-32)*(5/9)).toFixed(0);a.setState({isCelsius:!a.state.isCelsius}),a.setState({temp:t})}},a.capitalize=function(e){return e.charAt(0).toUpperCase()+e.substring(1)},a.returnAPI=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Philadelphia",t="https://api.openweathermap.org/data/2.5/weather?q=".concat(e).concat("&appid=780062c871d1cd69decae7b5869ddeba");A.a.get(t).then(function(e){return a.setState({city:e.data.name,temp:(e.data.main.temp-273.15).toFixed(0),description:e.data.weather[0].description,isCelsius:!0,code:parseInt((""+e.data.weather[0].id)[0]),main:e.data.weather[0].main})}).catch(function(e){alert("location not found, try the closest city"),console.log(e)})},a.returnBackground=function(e){var t=Math.floor(5*Math.random());switch(e){case 2:return P.thunderstorms[t];case 3:case 5:return P.rain[t];case 6:return P.snow[t];case 7:return P.fog[t];default:return P.clouds[t]}},a.searchLocation=function(e){console.log("searching..."),a.returnAPI(e)},a.state={city:"",temp:0,description:"",isCelsius:!0,code:0,main:""},a.capitalize=a.capitalize.bind(Object(l.a)(a)),a.returnAPI=a.returnAPI.bind(Object(l.a)(a)),a.returnBackground=a.returnBackground.bind(Object(l.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.returnAPI(),this.returnBackground(this.state.code),console.log(this.state)}},{key:"render",value:function(){var e={backgroundImage:"url(".concat(this.returnBackground(this.state.code),")"),backgroundPosition:"center",backgroundSize:"cover"};return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"container",style:e},i.a.createElement(m,null),i.a.createElement(F,{searchLocation:this.searchLocation}),i.a.createElement(w,{weather:this.state,changeTemp:this.changeTemp,capitalize:this.capitalize}),i.a.createElement(h,null)))}}]),t}(n.Component);c.a.render(i.a.createElement(T,null),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.e9ba450a.chunk.js.map