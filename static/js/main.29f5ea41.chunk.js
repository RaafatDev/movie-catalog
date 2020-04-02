(this["webpackJsonpknow-your-movie"]=this["webpackJsonpknow-your-movie"]||[]).push([[0],{26:function(e,a,t){e.exports=t(53)},31:function(e,a,t){},36:function(e,a,t){},53:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(14),c=t.n(l),i=(t(31),t(1)),s=t(10),o={loading:!1,movieArr:[],tvShowArr:[],error:""},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"MovieRequestSend":return Object(s.a)({},e,{loading:!0});case"TvShowRequestSuccess":return Object(s.a)({},e,{loading:!1,tvShowArr:a.payload});case"MovieRequestSuccess":return Object(s.a)({},e,{loading:!1,movieArr:a.payload});case"MovieRequestFailure":return{loading:!1,movieArr:[],tvShowArr:[],error:"something went wrong! "};default:return e}},d=t(4),u=t(8),v=Object(u.f)((function(e){var a=e.history;return Object(n.useEffect)((function(){var e=a.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[]),null})),p=(t(36),function(e){var a=e.movie,t=a.isMovie?"film":"tv-show";return r.a.createElement("div",null,r.a.createElement("div",{className:"suggestions__item d-flex border bg-white"},r.a.createElement("img",{src:a.poster_path,className:"suggestions__item__image"}),r.a.createElement("div",{className:"suggestions__item__info pl-2"},r.a.createElement(d.b,{to:{pathname:"/details/".concat(t,"/").concat(a.id,"/").concat(a.title.split(" ").join("-")),state:{movie:JSON.stringify(a)}}},r.a.createElement("p",{className:"suggestions__item__info__title m-0  font-weight-bold"},a.title)),r.a.createElement("p",{className:"suggestions__item__info__year m-0 text-muted"},"Release: ",a.release_date),r.a.createElement("p",{className:"suggestions__item__info__genres m-0 text-muted"},a.Genres," "))))}),g=t(3),b=t.n(g),E=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],f="https://image.tmdb.org/t/p/",h="0243c3f17573e5ce67e3c565fa006544",_="https://api.themoviedb.org/3/movie/popular?api_key=".concat(h,"&language=en-US&page=1"),N="https://api.themoviedb.org/3/tv/popular?api_key=".concat(h,"&language=en-US&page=1&append_to_response=external_ids"),w=("http://api.themoviedb.org/3/tv/500?api_key=".concat(h,"&append_to_response=external_ids"),"https://api.themoviedb.org/3/tv/85949/images?api_key=".concat(h,"&language=en-US&include_image_language=en,null"),"https://www.omdbapi.com/?apikey=".concat("3ff4ea5b","&i="),function(e){var a=Object(n.useState)([]),t=Object(i.a)(a,2),r=t[0],l=t[1],c=function(e){var a=[];e&&0!==e.length&&(e.results.map((function(e){if(e.genre_ids){var t=e.genre_ids.map((function(e){var a;return null===(a=E.find((function(a){return a.id===e})))||void 0===a?void 0:a.name})).join(", "),n={isMovie:!!e.title,title:e.title?e.title:e.name,release_date:e.release_date?e.release_date:e.first_air_date,id:JSON.stringify(e.id),poster_path:e.poster_path?"".concat(f,"w300").concat(e.poster_path):"".concat("/movie-catalog","/img/no_image.png"),backdrop_path:e.backdrop_path?"".concat(f,"w780").concat(e.backdrop_path):"".concat("/movie-catalog","/img/no_image.png"),overview:e.overview,genre_ids:e.genre_ids,Genres:t};a.push(n)}})),l([].concat(a)))};return Object(n.useEffect)((function(){c(e)}),[e]),[r,c]});function y(e,a){var t=Object(n.useState)(e),r=Object(i.a)(t,2),l=r[0],c=r[1],s=w([]),o=Object(i.a)(s,2),m=o[0],d=o[1];return Object(n.useEffect)((function(){var t=setTimeout((function(){c(e)}),a);return function(){clearTimeout(t)}}),[e]),Object(n.useEffect)((function(){l?function(e){var a,t,n;return b.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return a="https://api.themoviedb.org/3/search/multi?api_key=".concat("0243c3f17573e5ce67e3c565fa006544","&language=en-US&query=").concat(e,"&page=1&include_adult=false"),r.next=3,b.a.awrap(fetch(a));case 3:return t=r.sent,r.next=6,b.a.awrap(t.json());case 6:return n=r.sent,r.abrupt("return",n);case 8:case"end":return r.stop()}}))}(l).then((function(e){d(e)})):d([])}),[l]),m}var O=function(e,a){var t=Object(n.useState)((function(){try{return JSON.parse(window.localStorage.getItem(e)||JSON.stringify(a))}catch(t){return a}})),r=Object(i.a)(t,2),l=r[0],c=r[1];return Object(n.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(l))}),[l]),[l,c]},j=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!1),s=Object(i.a)(c,2),o=s[0],m=s[1],u=r.a.useRef(null),v=y(t,500),g=O("search-bar-arr",v),b=Object(i.a)(g,2),E=(b[0],b[1]);function f(e){var a=e.target,t=a.closest(".suggestions__button"),n=a.closest(".search-box"),r=a.closest(".suggestions");if(a.closest(".suggestions__item__info__title"))return m(!1),void(u.current.value="");t&&(m(!1),u.current.value=""),n||r||m(!1)}return Object(n.useEffect)((function(){v.length>0&&E(v)}),[v]),Object(n.useEffect)((function(){return window.addEventListener("click",f),function(){return window.removeEventListener("click",f)}}),[]),r.a.createElement("nav",{className:"navbar fixed-top navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("div",{className:"container"},r.a.createElement(d.b,{className:"navbar-brand",to:"/"},"Movie Catalog"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarsExample07","aria-controls":"navbarsExample07","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarsExample07"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(d.b,{className:"nav-link",to:"/about"},"About ",r.a.createElement("span",{className:"sr-only"},"(current)")))),r.a.createElement("form",{className:"form-inline my-2 my-md-0 search-form form-group"},r.a.createElement("input",{ref:u,onChange:function(e){""===e.target.value?m(!1):m(!0),l(e.target.value)},className:"form-control w-100 search-box",type:"text",placeholder:"Search","aria-label":"Search"}),r.a.createElement("div",{className:"suggestions rounded",onClick:function(){return m(!0)}},o&&v&&v.slice(0,5).map((function(e,a){return r.a.createElement(p,{movie:e,key:a})})),o&&0!==v.length&&r.a.createElement(d.b,{to:{pathname:"/search/keyword=".concat(u.current.value.split(" ").join("-")),state:{searchedMovies:JSON.stringify(v),keyword:u.current.value}}},r.a.createElement("button",{className:"suggestions__button btn btn-primary btn-block border"},"View All")))))))};function k(e){return{type:"MovieRequestFailure",payload:e}}var S=function(e){var a=e.oneMovie,t=a.isMovie,n=a.id,l=a.poster_path,c=a.title,i=a.release_date,s=t?"film":"tv-show";return r.a.createElement(d.b,{to:{pathname:"/details/".concat(s,"/").concat(n,"/").concat(c.split(" ").join("-")),state:{movie:JSON.stringify(a)}}},r.a.createElement("div",{className:"movie-container text-center"},r.a.createElement("img",{className:"movie-container__image rounded-lg",src:l,alt:c+n}),r.a.createElement("div",{className:"movie-container__info p-2"},r.a.createElement("p",{className:"lead mb-0"},c),r.a.createElement("p",{className:"lead"},"(",i,") "))))};function x(e){var a=Object(n.useState)(null),t=Object(i.a)(a,2),r=t[0],l=t[1],c=Object(n.useState)(null),s=Object(i.a)(c,2),o=s[0],m=s[1],d=Object(n.useState)(!0),u=Object(i.a)(d,2),v=u[0],p=u[1];return Object(n.useEffect)((function(){!function(){var a,t;b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return p(!0),n.prev=1,n.next=4,b.a.awrap(fetch(e));case 4:return a=n.sent,n.next=7,b.a.awrap(a.json());case 7:t=n.sent,l(t),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),m(n.t0);case 14:p(!1);case 15:case"end":return n.stop()}}),null,null,[[1,11]])}()}),[e]),[r,v,o]}var A=function(){var e=Object(n.useContext)($),a=e.state,t=e.dispatch,l=x(_),c=Object(i.a)(l,3),s=c[0],o=c[1],m=c[2],d=x(N),u=Object(i.a)(d,3),v=u[0],p=(u[1],u[2],w(v)),g=Object(i.a)(p,1)[0],b=w(s),E=Object(i.a)(b,1)[0];return Object(n.useEffect)((function(){o&&t({type:"MovieRequestSend"}),g&&t({type:"TvShowRequestSuccess",payload:g}),E&&t({type:"MovieRequestSuccess",payload:E}),m&&t(k)}),[E,g]),r.a.createElement("div",{className:"movies-list-container container text-light  mt-4"},r.a.createElement("h1",null,"Movies"),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},a&&a.movieArr&&a.movieArr.slice(0,10).map((function(e){return r.a.createElement("div",{className:"col m-2 p-0 d-flex justify-content-center align-items-stretch",key:e.id},r.a.createElement(S,{oneMovie:e,key:e.id}))})))),r.a.createElement("h1",null,"TV Shows"),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},a&&a.tvShowArr&&a.tvShowArr.slice(0,10).map((function(e){return r.a.createElement("div",{className:"col m-2 p-0 d-flex justify-content-center align-items-stretch",key:e.id},r.a.createElement(S,{oneMovie:e,key:e.id}))})))))},T=t(15),R=t.n(T),M=function(e){var a=e.oneMovie,t=a.isMovie,n=a.title,l=a.backdrop_path,c=a.id,i=a.overview,s=a.release_date,o=a.Genres,m=t?"film":"tv-show";return r.a.createElement("div",{className:"slide-container"},r.a.createElement("img",{src:l,alt:n}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"slide slide--has-caption slick-slide"},r.a.createElement("div",{className:"slide__caption"},r.a.createElement(d.b,{to:{pathname:"/details/".concat(m,"/").concat(c,"/").concat(n.split(" ").join("-")),state:{movie:JSON.stringify(a)}}},r.a.createElement("h1",{className:"slide__caption__title"},n)),r.a.createElement("ul",{className:"list-inline"},r.a.createElement("li",{className:"slide__caption__release-date list-inline-item"},r.a.createElement("span",null,"Release date: "),s),r.a.createElement("li",{className:"slide__caption__genres list-inline-item"},r.a.createElement("span",null,"Genres: "),o)),r.a.createElement("p",{className:"slide__caption__overview d-none d-md-block"},i," ")))))},F=function(){var e=Object(n.useContext)($).state;return r.a.createElement("div",{className:"main-slider container"},r.a.createElement(R.a,{slidesToShow:1,slidesToScroll:1,dots:!0,infinite:!0,initialSlide:1,autoplay:!0,arrows:!1,autoplaySpeed:5e3,pauseOnHover:!1},e.movieArr&&e.movieArr[0]&&e.movieArr[0].backdrop_path&&e.movieArr.map((function(e){return"/movie-catalog/img/no_image.png"!==e.backdrop_path&&r.a.createElement(M,{oneMovie:e,key:e.id})}))))},C=function(){return r.a.createElement("div",null,r.a.createElement(F,null),r.a.createElement(A,null))},I=function(){return r.a.createElement("div",{className:"container-fluid about-container text-center bg-dark font-weight-bold text-light",style:{height:"100vh"}},r.a.createElement("div",{className:"row h-100 border border-light border my-auto"},r.a.createElement("div",{className:"col-12 d-flex flex-column justify-content-center align-items-center"},r.a.createElement("p",{style:{width:"75%"},className:"about-text"},"this website is meant to give the user enough information to decide whether if a movie is worth watching from the user perspective, by providing the user with information related to the movie like the (actors, directors, overview, release-date , Ratings ...) and movie images and trailers, by using the public APIs from TMDB and OMDB"))))},J=function(e){var a=e.match,t=Object(n.useState)([]),l=Object(i.a)(t,2),c=l[0],s=l[1],o=y(a.params.keyword.substring(1),500);return Object(n.useEffect)((function(){try{var e=localStorage.getItem("search-bar-arr");if(e){var a=JSON.parse(e);a.length>0&&s(a)}null===e&&s(o)}catch(t){console.log("error in useEffect, first block!!")}return window.onunload=function(){return window.localStorage.removeItem("search-bar-arr")},function(){localStorage.removeItem("search-bar-arr")}}),[a,o]),r.a.createElement("div",null,r.a.createElement("div",{className:"container text-light mt-5"},a.params&&a.params.keyword&&r.a.createElement("h1",null,"Result for: ",a.params.keyword.substring(1).toUpperCase()," "),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},c&&c.map((function(e){return r.a.createElement("div",{className:"col  m-2 p-0 d-flex align-items-stretch",key:e.id},r.a.createElement(S,{oneMovie:e,key:e.id}))}))))))},D=function(e,a){var t=Object(n.useState)({}),r=Object(i.a)(t,2),l=r[0],c=r[1],o=Object(n.useState)(null),m=Object(i.a)(o,2),d=m[0],u=m[1],v=Object(n.useState)(!0),p=Object(i.a)(v,2),g=p[0],E=p[1],h=function(e){var a,t;return b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.a.awrap(fetch(e));case 2:return a=n.sent,n.next=5,b.a.awrap(a.json());case 5:return t=n.sent,n.abrupt("return",t);case 7:case"end":return n.stop()}}))},_=function(e){var t={imdb_id:e.imdb_id,id:e.id,title:e.title?e.title:e.name,number_of_episodes:e.number_of_episodes,number_of_seasons:e.number_of_seasons,release_date:e.release_date?e.release_date:e.first_air_date,poster_path:e.poster_path?"".concat(f,"w780").concat(e.poster_path):"".concat("/movie-catalog","/img/no_image.png"),backdrop_path:e.backdrop_path?"".concat(f,"w780").concat(e.backdrop_path):"".concat("/movie-catalog","/img/no_image.png"),overview:e.overview,credits:e.credits,budget:e.budget,videos:e.videos,images:e.images,Genre:e.Genre,Director:e.Director,Writer:e.Writer,Actors:e.Actors,Country:e.Country,Awards:e.Awards,Ratings:e.Ratings,imdbRating:e.imdbRating,Production:e.Production,Runtime:e.Runtime};sessionStorage.setItem(a,JSON.stringify(t)),c(t)};return Object(n.useEffect)((function(){var t=sessionStorage.getItem(a);t&&(c(JSON.parse(t)),E(!1)),t||function(){var a,t,n,r,l;b.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return E(!0),a={},c.prev=2,c.next=5,b.a.awrap(h(e));case 5:if(t=c.sent,!(n=t.external_ids.imdb_id)){c.next=20;break}return r="https://www.omdbapi.com/?apikey=".concat("3ff4ea5b","&i=").concat(n,"&plot=full"),c.prev=9,c.next=12,b.a.awrap(h(r));case 12:l=c.sent,a=Object(s.a)({},t,{},l),_(a),c.next=20;break;case 17:c.prev=17,c.t0=c.catch(9),console.log("error");case 20:c.next=25;break;case 22:c.prev=22,c.t1=c.catch(2),u(c.t1);case 25:E(!1);case 26:case"end":return c.stop()}}),null,null,[[2,22],[9,17]])}()}),[e]),[l,g,d]},q=function(e){var a=e.cast,t=e.actors;return r.a.createElement("div",null,r.a.createElement("div",null,a&&0===a.length&&t&&"N/A"!==t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"h3"},"The Cast: ")," ",t),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},a.map((function(e,a){var t=e.profile_path?"https://image.tmdb.org/t/p/w185/".concat(e.profile_path):"".concat("/movie-catalog","/img/no_image.png");return r.a.createElement("div",{key:a,className:"cast-container clo col-6 col-sm-4 col-md-3 p-0 border d-flex align-items-stretch"},r.a.createElement("div",{className:"cast text-center"},r.a.createElement("div",{className:"cast__img-container"},r.a.createElement("img",{src:t,alt:e.name})),r.a.createElement("div",{className:"cast__character"},r.a.createElement("span",{className:"lead"},e.name," "),r.a.createElement("br",null),r.a.createElement("span",{className:""},e.character," "))))}))))," "))},W=function(e){var a=e.image,t=(e.length,e.openOverlay);return r.a.createElement("div",null,r.a.createElement("img",{onClick:function(e){t(e)},src:"".concat(f,"w1280").concat(a.file_path),style:{width:"100%"}}))},G=function(e){var a=e.images.backdrops,t=Object(n.useState)(""),l=Object(i.a)(t,2),c=l[0],s=l[1],o=Object(n.useState)(!1),m=Object(i.a)(o,2),d=m[0],u=m[1],v=Object(n.useRef)(),p=function(e){s(e.currentTarget.src),u(!0)};return r.a.createElement("div",{className:"ImagesSlide mb-4"},r.a.createElement(R.a,{dots:!0,infinite:!0,initialSlide:1,slidesToShow:3,slidesToScroll:3,autoplay:!1,autoplaySpeed:2e3,pauseOnHover:!1,responsive:[{breakpoint:768,settings:{className:"center",centerMode:!0,dots:!1,arrows:!1,slidesToShow:2,infinite:!0,slidesToScroll:1,swipeToSlide:!0}},{breakpoint:600,settings:{dots:!1,className:"center",centerMode:!0,arrows:!1,slidesToShow:1,infinite:!0,slidesToScroll:1,swipeToSlide:!0}}]},a.map((function(e,t){return r.a.createElement(W,{image:e,key:t,openOverlay:p,length:a.length})}))),d?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"overlay",onClick:function(e){e.target===v.current&&u(!1)},ref:v},r.a.createElement("button",{onClick:function(){return u(!1)},type:"button",className:"close","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")),r.a.createElement("div",{className:"overlay__image-container"},r.a.createElement("img",{src:c})))):"")},L=function(e){var a=e.video,t=e.index,l="https://www.youtube.com/embed/"+a.key,c=Object(n.useRef)(null),i=Object(n.useRef)(null),s=function(){c.current.src=c.current.src};return Object(n.useEffect)((function(){i.current.addEventListener("click",s)}),[]),r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-sm-6 d-flex align-items-center  border-bottom"},a.name),r.a.createElement("div",{className:"col d-flex align-items-center justify-content-center p-1"},r.a.createElement("button",{type:"button",className:"btn btn-primary trailer-button","data-toggle":"modal","data-target":"#trailer"+t.toString(),onClick:function(){c.current.src=l}},"Watch Trailer")))),r.a.createElement("div",{className:"modal fade bd-example-modal-lg",id:"trailer"+t.toString(),ref:i,tabIndex:-1,role:"dialog","aria-labelledby":"myLargeModalLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog modal-lg"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title",id:"exampleModalLongTitle"},a.name),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:s},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))," ",r.a.createElement("div",{className:"embed-responsive embed-responsive-16by9"},r.a.createElement("iframe",{ref:c,className:"embed-responsive-item",src:"",allowFullScreen:!0}))))))},B=function(e){var a=e.combinedFetch,t=a.poster_path,n=a.title,l=a.release_date,c=a.overview,i=a.budget,s=a.Genre,o=a.Director,m=a.Writer,d=a.number_of_episodes,u=a.number_of_seasons,v=a.Country,p=a.Awards,g=a.Ratings,b=a.imdbRating,E=a.Production,f=a.Runtime,h=i?(new Intl.NumberFormat).format(i):void 0,_="";return g&&g.length>0&&g.map((function(e){"Rotten Tomatoes"===e.Source&&(_=e.Value)})),r.a.createElement("div",{className:"basic-info-container"},r.a.createElement("div",{className:"container-fluid basic-info"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-5 pt-4 text-center"},r.a.createElement("img",{className:"basic-info__image",src:t,alt:n})),r.a.createElement("div",{className:"col mt-3 mt-md-0 pt-4"},l&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"Release Date:")," ",l,r.a.createElement("br",null)),s&&"N/A"!==s&&r.a.createElement(r.a.Fragment,null," ",r.a.createElement("span",null,"Genres:")," ",s,r.a.createElement("br",null)),f&&"N/A"!==f&&r.a.createElement(r.a.Fragment,null," ",r.a.createElement("span",null,"Runtime:")," ",f,r.a.createElement("br",null)),d&&void 0!==d&&r.a.createElement(r.a.Fragment,null," ",r.a.createElement("span",null,"Number Of Episodes:")," ",d,r.a.createElement("br",null)),u&&void 0!==u&&r.a.createElement(r.a.Fragment,null," ",r.a.createElement("span",null,"Number Of Seasons:")," ",u,r.a.createElement("br",null)),h&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"Budget:")," ",h," ",r.a.createElement("br",null)),o&&"N/A"!==o&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"Director:")," ",o," ",r.a.createElement("br",null)),m&&"N/A"!==m&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"Writer:")," ",m," ",r.a.createElement("br",null)),v&&"N/A"!==v&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"Country:")," ",v," ",r.a.createElement("br",null)),p&&"N/A"!==p&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"Awards:")," ",p," ",r.a.createElement("br",null)),E&&"N/A"!==E&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"Production:")," ",E," ",r.a.createElement("br",null)),b&&"N/A"!==b&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"IMDB: "),b," ",r.a.createElement("br",null)),""!==_&&"N/A"!==_&&r.a.createElement("p",null,r.a.createElement("span",null,"Rotten Tomatoes:")," ",_," "),c&&r.a.createElement("p",null,r.a.createElement("span",null,"Overview:")," ",c," ")))))},P=function(e){var a,t,l,c,s,o=e.match.params,m=o.id,d=o.kind,u=o.title,v=function(e,a){return{url:"film"===e?"https://api.themoviedb.org/3/movie/".concat(a,"?api_key=").concat("0243c3f17573e5ce67e3c565fa006544","&append_to_response=videos,images,credits,external_ids&include_image_language=en,null"):"https://api.themoviedb.org/3/tv/".concat(a,"?api_key=").concat("0243c3f17573e5ce67e3c565fa006544","&append_to_response=videos,images,credits,external_ids&include_image_language=en,null")}}(d,m).url,p=D(v,"movie-details22"),g=Object(i.a)(p,3),b=g[0],E=g[1],f=g[2];(Object(n.useEffect)((function(){return function(){sessionStorage.removeItem("movie-details22")}}),[]),b)&&(t=(null===b||void 0===b?void 0:b.videos)&&0!==(null===b||void 0===b?void 0:null===(c=b.videos)||void 0===c?void 0:c.results.length)?b.videos.results.map((function(e,a){return r.a.createElement(L,{video:e,key:a,index:a})})):r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"trailer-available"}," No Related Videos Found! ")," "),l=(null===b||void 0===b?void 0:b.images)&&(null===b||void 0===b?void 0:null===(s=b.images)||void 0===s?void 0:s.backdrops)?r.a.createElement(G,{images:b.images}):r.a.createElement("h3",null,"No Images Found "));return r.a.createElement("div",{className:"movie-details-container  px-sm-5 pb-5"},r.a.createElement("div",{id:"accordion"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header",id:"headingOne"},r.a.createElement("h5",{className:"mb-0"},r.a.createElement("button",{className:"btn btn-link","data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},"Movie Details"))),r.a.createElement("div",{id:"collapseOne",className:"collapse show","aria-labelledby":"headingOne","data-parent":"#accordion"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12  text-center border border-red"},r.a.createElement("p",{className:"h1 my-3 movie-detail__title"},u.split("-").join(" ")," ")))),E&&r.a.createElement("h1",null,"Loading ............"),f&&r.a.createElement("h3",null,":("," ",r.a.createElement("br",null)," it seems like something went wrong!"," "),r.a.createElement(B,{combinedFetch:b})))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header",id:"headingTwo"},r.a.createElement("h5",{className:"mb-0"},r.a.createElement("button",{className:"btn btn-link collapsed","data-toggle":"collapse","data-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},"Media (Images and Videos)"))),r.a.createElement("div",{id:"collapseTwo",className:"collapse","aria-labelledby":"headingTwo","data-parent":"#accordion"},l,(null===b||void 0===b?void 0:null===(a=b.videos)||void 0===a?void 0:a.results.length)>0&&r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"trailer-available"},"Available Trailers:")," "),t)),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header",id:"headingThree"},r.a.createElement("h5",{className:"mb-0"},r.a.createElement("button",{className:"btn btn-link collapsed","data-toggle":"collapse","data-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},"Credits: The Cast...."))),r.a.createElement("div",{id:"collapseThree",className:"collapse","aria-labelledby":"headingThree","data-parent":"#accordion"},r.a.createElement("div",{className:"card-body"},b&&0===Object.keys(b).length&&r.a.createElement("h1",null,"No Actors Found"),"N/A"===b.Actors&&r.a.createElement("p",null,"unfortunately, we couldn't find information related to the Actors ",":("," "),b&&b.credits&&r.a.createElement("div",{className:"container mt-4"},r.a.createElement(q,{cast:b.credits.cast,actors:b.Actors})))))))},V=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Allllll "),r.a.createElement("h1",null,"Allllll "),r.a.createElement("h1",null,"Allllll "),r.a.createElement("h1",null,"Allllll "),r.a.createElement("h1",null,"Allllll "),r.a.createElement("h1",null,"Allllll "),r.a.createElement("h1",null,"Allllll "),r.a.createElement("h1",null,"Allllll "),r.a.createElement("h1",null,"Allllll "))},U=t(25);function H(e){return Object(U.a)(e),r.a.createElement("div",{className:"container-fluid text-center bg-dark font-weight-bold text-light",style:{height:"100vh"}},r.a.createElement("div",{className:"row h-100  my-auto"},r.a.createElement("div",{className:"col-12  d-flex flex-column justify-content-center"},r.a.createElement("p",{className:"display-1"},"404"),r.a.createElement("p",null,"Not Found...!!!!! "))))}var $=r.a.createContext(o),z=function(){var e=Object(n.useReducer)(m,o),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:"app min-vh-100"},r.a.createElement($.Provider,{value:{state:t,dispatch:l}},r.a.createElement(d.a,{basename:"/movie-catalog"},r.a.createElement(v,null),r.a.createElement(j,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:C}),r.a.createElement(u.a,{exact:!0,path:"/about",component:I}),r.a.createElement(u.a,{exact:!0,path:"/results",component:J}),r.a.createElement(u.a,{exact:!0,path:"/viewall",component:V}),r.a.createElement(u.a,{exact:!0,path:"/details/:kind/:id/:title",component:P}),r.a.createElement(u.a,{exact:!0,path:"/search/keyword:keyword",component:J}),r.a.createElement(u.a,{path:"/",render:H})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.29f5ea41.chunk.js.map