(this["webpackJsonpknow-your-movie"]=this["webpackJsonpknow-your-movie"]||[]).push([[0],{26:function(e,a,t){e.exports=t(53)},31:function(e,a,t){},32:function(e,a,t){},53:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(14),r=t.n(c),i=(t(31),t(1)),s=t(10),o={loading:!1,movieArr:[],tvShowArr:[],error:""},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"MovieRequestSend":return Object(s.a)({},e,{loading:!0});case"TvShowRequestSuccess":return Object(s.a)({},e,{loading:!1,tvShowArr:a.payload});case"MovieRequestSuccess":return Object(s.a)({},e,{loading:!1,movieArr:a.payload});case"MovieRequestFailure":return{loading:!1,movieArr:[],tvShowArr:[],error:"something went wrong! "};default:return e}},d=t(4),u=t(7),p=(t(32),function(e){var a=e.movie;return l.a.createElement("div",null,l.a.createElement("div",{className:"suggestions__item d-flex border bg-white",key:a.index},l.a.createElement("img",{src:a.poster_path,className:"suggestions__item__image"}),l.a.createElement("div",{className:"suggestions__item__info pl-2"},l.a.createElement(d.b,{to:{pathname:"/movie/".concat(a.id,"/").concat(a.title.split(" ").join("-")),state:{movie:JSON.stringify(a)}}},l.a.createElement("p",{className:"suggestions__item__info__title m-0  font-weight-bold"},a.title)),l.a.createElement("p",{className:"suggestions__item__info__year m-0 text-muted"},"Release: ",a.release_date),l.a.createElement("p",{className:"suggestions__item__info__genres m-0 text-muted"},a.Genres," "))))}),v=t(3),E=t.n(v),g=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],b="https://image.tmdb.org/t/p/",h="0243c3f17573e5ce67e3c565fa006544",f="https://api.themoviedb.org/3/movie/popular?api_key=".concat(h,"&language=en-US&page=1"),N="https://api.themoviedb.org/3/tv/popular?api_key=".concat(h,"&language=en-US&page=1&append_to_response=external_ids"),_=("http://api.themoviedb.org/3/tv/500?api_key=".concat(h,"&append_to_response=external_ids"),"https://api.themoviedb.org/3/tv/85949/images?api_key=".concat(h,"&language=en-US&include_image_language=en,null"),"https://www.omdbapi.com/?apikey=".concat("3ff4ea5b","&i="),function(e){var a=Object(n.useState)([]),t=Object(i.a)(a,2),l=t[0],c=t[1],r=function(e){var a=[];e&&0!==e.length&&(e.results.map((function(e){if(e.genre_ids){var t=e.genre_ids.map((function(e){var a;return null===(a=g.find((function(a){return a.id===e})))||void 0===a?void 0:a.name})).join(", "),n={isMovie:!!e.title,title:e.title?e.title:e.name,release_date:e.release_date?e.release_date:e.first_air_date,id:JSON.stringify(e.id),poster_path:e.poster_path?"".concat(b,"w1280").concat(e.poster_path):"".concat("/movie-catalog","/img/no_image.png"),backdrop_path:e.backdrop_path?"".concat(b,"w1280").concat(e.backdrop_path):"".concat("/movie-catalog","/img/no_image.png"),overview:e.overview,genre_ids:e.genre_ids,Genres:t};a.push(n)}})),c([].concat(a)))};return Object(n.useEffect)((function(){r(e)}),[e]),[l,r]});function y(e,a){var t=Object(n.useState)(e),l=Object(i.a)(t,2),c=l[0],r=l[1],s=_([]),o=Object(i.a)(s,2),m=o[0],d=o[1];return Object(n.useEffect)((function(){var t=setTimeout((function(){r(e)}),a);return function(){clearTimeout(t)}}),[e]),Object(n.useEffect)((function(){c?function(e){var a,t,n;return E.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return a="https://api.themoviedb.org/3/search/multi?api_key=".concat("0243c3f17573e5ce67e3c565fa006544","&language=en-US&query=").concat(e,"&page=1&include_adult=false"),l.next=3,E.a.awrap(fetch(a));case 3:return t=l.sent,l.next=6,E.a.awrap(t.json());case 6:return n=l.sent,l.abrupt("return",n);case 8:case"end":return l.stop()}}))}(c).then((function(e){d(e)})):d([])}),[c]),m}var w=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(!1),s=Object(i.a)(r,2),o=s[0],m=s[1],u=l.a.useRef(null),v=y(t,500);function E(e){var a=e.target,t=a.closest(".suggestions__button"),n=a.closest(".search-box"),l=a.closest(".suggestions");if(a.closest(".suggestions__item__info__title"))return m(!1),void(u.current.value="");t&&(m(!1),u.current.value=""),n||l||m(!1)}return Object(n.useEffect)((function(){return window.addEventListener("click",E),function(){return window.removeEventListener("click",E)}}),[]),l.a.createElement("nav",{className:"navbar fixed-top navbar-expand-lg navbar-dark bg-dark"},l.a.createElement("div",{className:"container"},l.a.createElement(d.b,{className:"navbar-brand",to:"/"},"Movie Catalog"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarsExample07","aria-controls":"navbarsExample07","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarsExample07"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement(d.b,{className:"nav-link",to:"/about"},"About ",l.a.createElement("span",{className:"sr-only"},"(current)")))),l.a.createElement("form",{className:"form-inline my-2 my-md-0 search-form form-group"},l.a.createElement("input",{ref:u,onChange:function(e){""===e.target.value?m(!1):m(!0),c(e.target.value)},className:"form-control w-100 search-box",type:"text",placeholder:"Search","aria-label":"Search"}),l.a.createElement("div",{className:"suggestions rounded",onClick:function(){return m(!0)}},o&&v&&v.slice(0,5).map((function(e,a){return l.a.createElement(p,{movie:e,key:a})})),o&&0!==v.length&&l.a.createElement(d.b,{to:{pathname:"/search?keyword=".concat(u.current.value.split(" ").join("-")),state:{searchedMovies:JSON.stringify(v),keyword:u.current.value}}},l.a.createElement("button",{className:"suggestions__button btn btn-primary btn-block border"},"View All")))))))};function x(e){return{type:"MovieRequestFailure",payload:e}}var O=function(e){var a=e.oneMovie,t=a.id,n=a.poster_path,c=a.title,r=a.release_date;return l.a.createElement("div",{className:"movie-container text-center"},l.a.createElement(d.b,{to:{pathname:"/movie/".concat(t,"/").concat(c.split(" ").join("-")),state:{movie:JSON.stringify(a)}}},l.a.createElement("img",{className:"movie-container__image rounded-lg",src:n,alt:c+t})),l.a.createElement("div",{className:"movie-container__info p-2"},l.a.createElement("p",{className:"lead mb-0"},c),l.a.createElement("p",{className:"lead"},"(",r,") ")))};function k(e){var a=Object(n.useState)(null),t=Object(i.a)(a,2),l=t[0],c=t[1],r=Object(n.useState)(null),s=Object(i.a)(r,2),o=s[0],m=s[1],d=Object(n.useState)(!0),u=Object(i.a)(d,2),p=u[0],v=u[1];return Object(n.useEffect)((function(){!function(){var a,t;E.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return v(!0),n.prev=1,n.next=4,E.a.awrap(fetch(e));case 4:return a=n.sent,n.next=7,E.a.awrap(a.json());case 7:t=n.sent,c(t),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),m(n.t0);case 14:v(!1);case 15:case"end":return n.stop()}}),null,null,[[1,11]])}()}),[e]),[l,p,o]}var j=function(){var e=Object(n.useContext)(H),a=e.state,t=e.dispatch,c=k(f),r=Object(i.a)(c,3),s=r[0],o=r[1],m=r[2],d=k(N),u=Object(i.a)(d,3),p=u[0],v=(u[1],u[2],_(p)),E=Object(i.a)(v,1)[0],g=_(s),b=Object(i.a)(g,1)[0];return Object(n.useEffect)((function(){o&&t({type:"MovieRequestSend"}),E&&t({type:"TvShowRequestSuccess",payload:E}),b&&t({type:"MovieRequestSuccess",payload:b}),m&&t(x)}),[b,E]),l.a.createElement("div",{className:"movies-list-container container text-light  mt-4"},l.a.createElement("h1",null,"Movies"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},a&&a.movieArr&&a.movieArr.slice(0,10).map((function(e){return l.a.createElement("div",{className:"col m-2 p-0 d-flex align-items-stretch",key:e.id},l.a.createElement(O,{oneMovie:e,key:e.id}))})))),l.a.createElement("h1",null,"TV Shows"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},a&&a.tvShowArr&&a.tvShowArr.slice(0,10).map((function(e){return l.a.createElement("div",{className:"col m-2 p-0 d-flex align-items-stretch",key:e.id},l.a.createElement(O,{oneMovie:e,key:e.id}))})))))},S=t(15),A=t.n(S),T=function(e){var a=e.oneMovie,t=a.title,n=a.backdrop_path,c=a.id,r=a.overview,i=a.release_date,s=a.Genres;return l.a.createElement("div",{className:"slide-container"},l.a.createElement("img",{src:n,alt:t}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"slide slide--has-caption slick-slide"},l.a.createElement("div",{className:"slide__caption"},l.a.createElement(d.b,{to:{pathname:"/movie/".concat(c,"/").concat(t.split(" ").join("-")),state:{movie:JSON.stringify(a)}}},l.a.createElement("h1",{className:"slide__caption__title"},t)),l.a.createElement("ul",{className:"list-inline"},l.a.createElement("li",{className:"slide__caption__release-date list-inline-item"},"Release date: ",i),l.a.createElement("li",{className:"list-inline-item text-white"},"Genres: ",s)),l.a.createElement("p",{className:"slide__caption__overview d-none d-md-block"},r," ")))))},M=function(){var e=Object(n.useContext)(H).state;return l.a.createElement("div",{className:"main-slider container"},l.a.createElement(A.a,{slidesToShow:1,slidesToScroll:1,dots:!0,infinite:!0,initialSlide:1,autoplay:!1,arrows:!1,autoplaySpeed:2e3,pauseOnHover:!1},e.movieArr&&e.movieArr[0]&&e.movieArr[0].poster_path&&e.movieArr.map((function(e){return"/img/no_image.png"!==e.backdrop_path&&l.a.createElement(T,{oneMovie:e,key:e.id})}))))},R=function(){return l.a.createElement("div",{className:"mt-4 pt-3"},l.a.createElement(M,null),l.a.createElement(j,null))},C=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"the About Page... "),l.a.createElement("h1",null,"the About Page... "),l.a.createElement("h1",null,"the About Page... "),l.a.createElement("h1",null,"the About Page... "),l.a.createElement("h1",null,"the About Page... "),l.a.createElement("h1",null,"the About Page... "),l.a.createElement("h1",null,"the About Page... "),l.a.createElement("h1",null,"the About Page... "),l.a.createElement("h1",null,"the About Page... "),l.a.createElement("h1",null,"the About Page... "))},F=function(){var e=Object(u.f)(),a=Object(n.useState)([]),t=Object(i.a)(a,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){var a=JSON.parse(e.location.state.searchedMovies);a&&r(a)}),[e.location.state.searchedMovies]),l.a.createElement("div",null,l.a.createElement("div",{className:"container text-light  mt-5"},l.a.createElement("h1",null,"Result for: ",e.location.state.keyword," "),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},c&&c.map((function(e){return l.a.createElement("div",{className:"col  m-2 p-0 d-flex align-items-stretch",key:e.id},l.a.createElement(O,{oneMovie:e,key:e.id}))}))))))},P=function(e){var a=Object(n.useState)({}),t=Object(i.a)(a,2),l=t[0],c=t[1],r=Object(n.useState)(null),o=Object(i.a)(r,2),m=o[0],d=o[1],u=Object(n.useState)(!0),p=Object(i.a)(u,2),v=p[0],g=p[1],b=function(e){var a,t;return E.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,E.a.awrap(fetch(e));case 2:return a=n.sent,n.next=5,E.a.awrap(a.json());case 5:return t=n.sent,n.abrupt("return",t);case 7:case"end":return n.stop()}}))};return Object(n.useEffect)((function(){!function(){var a,t,n,l,r;E.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return g(!0),a={},i.prev=2,i.next=5,E.a.awrap(b(e));case 5:if(t=i.sent,{imdb_id:t.imdb_id,id:t.id,cast:t.credits.cast,budget:t.budget,videos:t.videos.results,images:t.images.backdrops,posters:t.images.posters},!(n=t.external_ids.imdb_id)){i.next=20;break}return l="https://www.omdbapi.com/?apikey=".concat("3ff4ea5b","&i=").concat(n,"&plot=full"),i.prev=10,i.next=13,E.a.awrap(b(l));case 13:r=i.sent,{Actors:r.Actors},a=Object(s.a)({},t,{},r),i.next=20;break;case 18:i.prev=18,i.t0=i.catch(10);case 20:c(a),i.next=26;break;case 23:i.prev=23,i.t1=i.catch(2),d(i.t1);case 26:g(!1);case 27:case"end":return i.stop()}}),null,null,[[2,23],[10,18]])}()}),[e]),[l,v,m]},q=function(e){var a=e.cast,t=e.actors;return l.a.createElement("div",null,l.a.createElement("div",null," ",l.a.createElement("span",{className:"h3"},"The Cast: "),t," ....",l.a.createElement("a",{className:"link alert-link text-primary",type:"button","data-toggle":"collapse","data-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample"},"View All Cast")),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row collapse",id:"collapseExample"},a.map((function(e,a){var t=e.profile_path?"https://image.tmdb.org/t/p/original".concat(e.profile_path):"".concat("/movie-catalog","/img/no_image.png");return l.a.createElement("div",{key:a,className:"cast-container clo col-6 col-sm-4 col-md-3 p-0 border d-flex align-items-stretch"},l.a.createElement("div",{className:"cast text-center"},l.a.createElement("div",{className:"cast__img-container"},l.a.createElement("img",{src:t,alt:e.name})),l.a.createElement("div",{className:"cast__character"},l.a.createElement("span",{className:"lead"},e.name," "),l.a.createElement("br",null),l.a.createElement("span",{className:""},e.character," "))))})))))},J=function(e){var a=e.image,t=(e.length,e.openOverlay);return l.a.createElement("div",null,l.a.createElement("img",{onClick:function(e){t(e)},src:"".concat(b,"w1280").concat(a.file_path),style:{width:"100%"}}))},D=function(e){var a=e.images.backdrops,t=Object(n.useState)(""),c=Object(i.a)(t,2),r=c[0],s=c[1],o=Object(n.useState)(!1),m=Object(i.a)(o,2),d=m[0],u=m[1],p=Object(n.useRef)(),v=function(e){s(e.currentTarget.src),u(!0)};return l.a.createElement("div",{className:"ImagesSlide mb-4"},l.a.createElement(A.a,{dots:!0,infinite:!0,initialSlide:1,slidesToShow:3,slidesToScroll:3,autoplay:!1,autoplaySpeed:2e3,pauseOnHover:!1,responsive:[{breakpoint:768,settings:{dots:!1,arrows:!1,slidesToShow:2,infinite:!0,slidesToScroll:1,swipeToSlide:!0}}]},a.map((function(e,t){return l.a.createElement(J,{image:e,key:t,openOverlay:v,length:a.length})}))),d?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"overlay",onClick:function(e){e.target===p.current&&u(!1)},ref:p},l.a.createElement("button",{onClick:function(){return u(!1)},type:"button",className:"close","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7")),l.a.createElement("div",{className:"overlay__image-container"},l.a.createElement("img",{src:r})))):"")},I=function(e){var a=e.video,t=e.index,c="https://www.youtube.com/embed/"+a.key,r=Object(n.useRef)(null),i=Object(n.useRef)(null),s=function(){r.current.src=r.current.src};return Object(n.useEffect)((function(){i.current.addEventListener("click",s)}),[]),l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col d-flex align-items-center  border-bottom"},a.name),l.a.createElement("div",{className:"col d-flex align-items-center justify-content-center p-1"},l.a.createElement("button",{type:"button",className:"btn btn-primary","data-toggle":"modal","data-target":"#"+a.type+t.toString(),onClick:function(){r.current.src=c}},"Watch Trailer")))),l.a.createElement("div",{className:"modal fade bd-example-modal-lg",id:a.type+t.toString(),ref:i,tabIndex:-1,role:"dialog","aria-labelledby":"myLargeModalLabel","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog modal-lg"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title",id:"exampleModalLongTitle"},a.name),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:s},l.a.createElement("span",{"aria-hidden":"true"},"\xd7")))," ",l.a.createElement("div",{className:"embed-responsive embed-responsive-16by9"},l.a.createElement("iframe",{ref:r,className:"embed-responsive-item",src:"",allowFullScreen:!0}))))))},V=function(e){var a=e.movie,t=a.poster_path,n=a.title,c=a.release_date,r=a.overview,i=e.combinedFetch,s=i.budget,o=i.Genre,m=i.Director,d=i.Writer,u=i.Country,p=i.Awards,v=i.Ratings,E=i.imdbRating,g=i.Production,b="";return v&&v.length>0&&v.map((function(e){"Rotten Tomatoes"===e.Source&&(b=e.Value)})),l.a.createElement("div",null,l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-5 text-center"},l.a.createElement("img",{className:"basic-info__image",src:t,alt:n})),l.a.createElement("div",{className:"col mt-3 mt-md-0 pt-4"},c&&l.a.createElement("p",null,"Release Date: ",c," "),o&&"N/A"!==o&&l.a.createElement("p",null,"Genres: ",o),s&&0!==s&&l.a.createElement("p",null,"Budget: ",(new Intl.NumberFormat).format(s)," "),m&&"N/A"!==m&&l.a.createElement("p",null,"Director: ",m," "),d&&"N/A"!==d&&l.a.createElement("p",null,"Writer: ",d," "),u&&"N/A"!==u&&l.a.createElement("p",null,"Country: ",u," "),p&&"N/A"!==p&&l.a.createElement("p",null,"Awards: ",p," "),g&&"N/A"!==g&&l.a.createElement("p",null,"Production: ",g," "),E&&"N/A"!==E&&l.a.createElement("p",null,"IMDB: ",E," "),""!==b&&"N/A"!==b&&l.a.createElement("p",null,"Rotten Tomatoes: ",b," "),r&&l.a.createElement("p",null,"Overview: ",r," ")))))},W=function(){var e,a,t,n,c,r,s=Object(u.f)(),o=JSON.parse(s.location.state.movie),m=(e=o.isMovie,a=o.id,{url:e?"https://api.themoviedb.org/3/movie/".concat(a,"?api_key=").concat("0243c3f17573e5ce67e3c565fa006544","&append_to_response=videos,images,credits,external_ids&include_image_language=en,null"):"https://api.themoviedb.org/3/tv/".concat(a,"?api_key=").concat("0243c3f17573e5ce67e3c565fa006544","&append_to_response=videos,images,credits,external_ids&include_image_language=en,null")}),d=P(m.url),p=Object(i.a)(d,1)[0];(console.log({combinedFetch:p}),p)&&(t=(null===p||void 0===p?void 0:p.videos)&&0!==(null===p||void 0===p?void 0:null===(c=p.videos)||void 0===c?void 0:c.results.length)?p.videos.results.map((function(e,a){return l.a.createElement(I,{video:e,key:a,index:a})})):l.a.createElement("h3",null,"No Videos Found! "),n=(null===p||void 0===p?void 0:p.images)&&(null===p||void 0===p?void 0:null===(r=p.images)||void 0===r?void 0:r.backdrops)?l.a.createElement(D,{images:p.images}):l.a.createElement("h3",null,"No Images Found "));return l.a.createElement("div",{className:"movie-details-container mt-5 p-5 container-fluid"},l.a.createElement("div",{id:"accordion"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header",id:"headingOne"},l.a.createElement("h5",{className:"mb-0"},l.a.createElement("button",{className:"btn btn-link","data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},"Movie Details"))),l.a.createElement("div",{id:"collapseOne",className:"collapse show","aria-labelledby":"headingOne","data-parent":"#accordion"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12  text-center border border-red"},l.a.createElement("p",{className:"h1 my-3"},o.title," ")))),l.a.createElement(V,{combinedFetch:p,movie:o})))),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header",id:"headingTwo"},l.a.createElement("h5",{className:"mb-0"},l.a.createElement("button",{className:"btn btn-link collapsed","data-toggle":"collapse","data-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},"Media (Images and Videos)"))),l.a.createElement("div",{id:"collapseTwo",className:"collapse","aria-labelledby":"headingTwo","data-parent":"#accordion"},n,t)),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header",id:"headingThree"},l.a.createElement("h5",{className:"mb-0"},l.a.createElement("button",{className:"btn btn-link collapsed","data-toggle":"collapse","data-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},"Credits: The Cast...."))),l.a.createElement("div",{id:"collapseThree",className:"collapse","aria-labelledby":"headingThree","data-parent":"#accordion"},l.a.createElement("div",{className:"card-body"},p&&"N/A"===p.Actors&&l.a.createElement("h1",null,"Noooooo Actors"),p&&p.credits&&l.a.createElement("div",{className:"container mt-4"},l.a.createElement(q,{cast:p.credits.cast,actors:p.Actors})))))))},G=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Allllll "),l.a.createElement("h1",null,"Allllll "),l.a.createElement("h1",null,"Allllll "),l.a.createElement("h1",null,"Allllll "),l.a.createElement("h1",null,"Allllll "),l.a.createElement("h1",null,"Allllll "),l.a.createElement("h1",null,"Allllll "),l.a.createElement("h1",null,"Allllll "),l.a.createElement("h1",null,"Allllll "))},L=t(25);function B(e){return Object(L.a)(e),l.a.createElement("div",{className:"container-fluid text-center bg-dark font-weight-bold text-light",style:{height:"100vh"}},l.a.createElement("div",{className:"row h-100  my-auto"},l.a.createElement("div",{className:"col-12  d-flex flex-column justify-content-center"},l.a.createElement("p",{className:"display-1"},"404"),l.a.createElement("p",null,"Not Found...!!!!! "))))}var H=l.a.createContext(o),U=function(){var e=Object(n.useReducer)(m,o),a=Object(i.a)(e,2),t=a[0],c=a[1];return l.a.createElement("div",{className:"app min-vh-100"},l.a.createElement(H.Provider,{value:{state:t,dispatch:c}},l.a.createElement(d.a,null,l.a.createElement(w,null),l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:"/",component:R}),l.a.createElement(u.a,{exact:!0,path:"/about",component:C}),l.a.createElement(u.a,{exact:!0,path:"/results",component:F}),l.a.createElement(u.a,{exact:!0,path:"/viewall",component:G}),l.a.createElement(u.a,{exact:!0,path:"/movie/:id/:title",component:W}),l.a.createElement(u.a,{exact:!0,path:"/search?keyword:keyword",component:F}),l.a.createElement(u.a,{path:"/",render:B})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.bdd476e9.chunk.js.map