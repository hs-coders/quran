let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');


let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');


//All songs list
let All_song = [
   
{
     name: "الفَاتِحَة",
     path: "music/001.mp3",
     img: "img/img1.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "البَقَرَة",
     path: "music/002.mp3",
     img: "img/img2.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "آل عِمرَان",
     path: "music/003.mp3",
     img: "img/img3.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "النِّسَاء",
     path: "music/004.mp3",
     img: "img/img4.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "المَائدة",
     path: "music/005.mp3",
     img: "img/img5.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "الأنعَام",
     path: "music/006.mp3",
     img: "img/img6.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: "الأعرَاف",
     path: "music/007.mp3",
     img: "img/img7.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "الأنفَال",
     path: "music/008.mp3",
     img: "img/img8.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: "التوبَة",
     path: "music/009.mp3",
     img: "img/img9.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "يُونس",
     path: "music/010.mp3",
     img: "img/img10.jpg",
     singer: "ماهر المعيقلي"
   }
   
   ,
   {
     name: "هُود",
     path: "music/011.mp3",
     img: "img/img11.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: "يُوسُف",
     path: "music/012.mp3",
     img: "img/img12.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: "الرَّعْد",
     path: "music/013.mp3",
     img: "img/img13.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "إبراهِيم",
     path: "music/014.mp3",
     img: "img/img14.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "الحِجْر",
     path: "music/015.mp3",
     img: "img/img15.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: "النَّحْل",
     path: "music/016.mp3",
     img: "img/img16.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: "الإسْرَاء",
     path: "music/017.mp3",
     img: "img/img17.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "الكهْف",
     path: "music/018.mp3",
     img: "img/img18.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "مَريَم",
     path: "music/019.mp3",
     img: "img/img19.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: "طه ",
     path: "music/020.mp3",
     img: "img/img20.jpg",
    singer: "ماهر المعيقلي"
   }
   
   ,
   {
     name: "الأنبيَاء ",
     path: "music/021.mp3",
     img: "img/img21.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " الحَج",
     path: "music/022.mp3",
     img: "img/img22.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " المُؤمنون",
     path: "music/023.mp3",
     img: "img/img23.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " النُّور",
     path: "music/024.mp3",
     img: "img/img24.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " الفُرْقان",
     path: "music/025.mp3",
     img: "img/img25.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "الشُّعَرَاء ",
     path: "music/026.mp3",
     img: "img/img26.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " النَّمْل",
     path: "music/027.mp3",
     img: "img/img27.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: "القَصَص ",
     path: "music/028.mp3",
     img: "img/img28.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " العَنكبوت	",
     path: "music/029.mp3",
     img: "img/img29.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: "الرُّوم ",
     path: "music/030.mp3",
     img: "img/img30.jpg",
    singer: "ماهر المعيقلي"
   } ,
   {
     name: " لقمَان",
     path: "music/031.mp3",
     img: "img/img31.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "السَّجدَة ",
     path: "music/032.mp3",
     img: "img/img32.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " الأحزَاب",
     path: "music/033.mp3",
     img: "img/img33.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "سَبَأ ",
     path: "music/034.mp3",
     img: "img/img34.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " فَاطِر",
     path: "music/035.mp3",
     img: "img/img35.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " يس",
     path: "music/036.mp3",
     img: "img/img36.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " الصَّافات",
     path: "music/037.mp3",
     img: "img/img37.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " ص",
     path: "music/038.mp3",
     img: "img/img38.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " الزُّمَر",
     path: "music/039.mp3",
     img: "img/img39.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: "غَافِر ",
     path: "music/040.mp3",
     img: "img/img40.jpg",
    singer: "ماهر المعيقلي"
   } ,
   {
     name: " فُصِّلَتْ",
     path: "music/041.mp3",
     img: "img/img41.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "الشُّورَى ",
     path: "music/042.mp3",
     img: "img/img42.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " الزُّخْرُف",
     path: "music/043.mp3",
     img: "img/img43.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "الدخَان ",
     path: "music/044.mp3",
     img: "img/img44.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " الجَاثيَة",
     path: "music/045.mp3",
     img: "img/img45.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " الأحْقاف",
     path: "music/046.mp3",
     img: "img/img46.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " محَمَّد",
     path: "music/047.mp3",
     img: "img/img47.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " الفَتْح",
     path: "music/048.mp3",
     img: "img/img48.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " الحُجرَات",
     path: "music/049.mp3",
     img: "img/img49.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: "ق ",
     path: "music/050.mp3",
     img: "img/img50.jpg",
    singer: "ماهر المعيقلي"
   } ,
   {
     name: " الذَّاريَات",
     path: "music/051.mp3",
     img: "img/img51.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "الطُّور ",
     path: "music/052.mp3",
     img: "img/img52.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " النَّجْم",
     path: "music/053.mp3",
     img: "img/img53.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "القَمَر ",
     path: "music/054.mp3",
     img: "img/img54.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " الرَّحمن",
     path: "music/055.mp3",
     img: "img/img55.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " الوَاقِعَة",
     path: "music/056.mp3",
     img: "img/img56.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " الحَديد",
     path: "music/057.mp3",
     img: "img/img57.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " المجَادلة",
     path: "music/058.mp3",
     img: "img/img58.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " الحَشر",
     path: "music/059.mp3",
     img: "img/img59.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: "المُمتَحنَة ",
     path: "music/060.mp3",
     img: "img/img60.jpg",
    singer: "ماهر المعيقلي"
   } ,
   {
     name: " الصَّف",
     path: "music/061.mp3",
     img: "img/img61.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "الجُمُعَة ",
     path: "music/062.mp3",
     img: "img/img62.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " المنَافِقون	",
     path: "music/063.mp3",
     img: "img/img63.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "التغَابُن ",
     path: "music/064.mp3",
     img: "img/img64.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " الطلَاق",
     path: "music/065.mp3",
     img: "img/img65.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " التحْريم	",
     path: "music/066.mp3",
     img: "img/img66.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " المُلْك",
     path: "music/067.mp3",
     img: "img/img67.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " القَلَم",
     path: "music/068.mp3",
     img: "img/img68.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " الحَاقَّة",
     path: "music/069.mp3",
     img: "img/img69.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: "المعَارج ",
     path: "music/070.mp3",
     img: "img/img70.jpg",
    singer: "ماهر المعيقلي"
   } ,
   {
     name: " نُوح",
     path: "music/071.mp3",
     img: "img/img71.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "الجِن ",
     path: "music/072.mp3",
     img: "img/img72.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " المُزَّمِّل	",
     path: "music/073.mp3",
     img: "img/img73.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "المُدَّثِّر ",
     path: "music/074.mp3",
     img: "img/img74.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " القِيَامَة",
     path: "music/075.mp3",
     img: "img/img75.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " الإنسَان	",
     path: "music/076.mp3",
     img: "img/img76.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " المُرسَلات",
     path: "music/077.mp3",
     img: "img/img77.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " النَّبَأ",
     path: "music/078.mp3",
     img: "img/img78.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " النّازعَات	",
     path: "music/079.mp3",
     img: "img/img79.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: "عَبَس ",
     path: "music/080.mp3",
     img: "img/img80.jpg",
    singer: "ماهر المعيقلي"
   } ,
   {
     name: " التَّكوير",
     path: "music/081.mp3",
     img: "img/img81.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "الانفِطار ",
     path: "music/082.mp3",
     img: "img/img82.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " المطفِّفِين	",
     path: "music/083.mp3",
     img: "img/img83.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "الانْشِقَاق	 ",
     path: "music/084.mp3",
     img: "img/img84.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " البرُوج",
     path: "music/085.mp3",
     img: "img/img85.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " الطَّارِق	",
     path: "music/086.mp3",
     img: "img/img86.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " الأَعْلى",
     path: "music/087.mp3",
     img: "img/img87.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " الغَاشِية",
     path: "music/088.mp3",
     img: "img/img88.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " الفَجْر	",
     path: "music/089.mp3",
     img: "img/img89.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: "البَلَد ",
     path: "music/090.mp3",
     img: "img/img90.jpg",
    singer: "ماهر المعيقلي"
   } ,
   {
     name: " الشَّمْس",
     path: "music/091.mp3",
     img: "img/img91.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "الليْل ",
     path: "music/092.mp3",
     img: "img/img92.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " الضُّحَى		",
     path: "music/093.mp3",
     img: "img/img93.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "الشَّرْح	 ",
     path: "music/094.mp3",
     img: "img/img94.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " التِّين",
     path: "music/095.mp3",
     img: "img/img95.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " العَلَق	",
     path: "music/096.mp3",
     img: "img/img96.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " القَدْر",
     path: "music/097.mp3",
     img: "img/img97.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " البَينَة",
     path: "music/098.mp3",
     img: "img/img98.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " الزلزَلة		",
     path: "music/099.mp3",
     img: "img/img99.jpg",
    singer: "ماهر المعيقلي"
   },
    {
     name: "العَادِيات",
     path: "music/100.mp3",
     img: "img/img100.jpg",
     singer: "ماهر المعيقلي"
   },  
  {
     name: "القَارِعة",
     path: "music/101.mp3",
     img: "img/img101.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "التَّكَاثر",
     path: "music/102.mp3",
     img: "img/img102.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "العَصْر ",
     path: "music/103.mp3",
     img: "img/img103.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " الهمزة",
     path: "music/104.mp3",
     img: "img/img104.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "الفِيل	 ",
     path: "music/105.mp3",
     img: "img/img105.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "قُرَيْش ",
     path: "music/106.mp3",
     img: "img/img106.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: "المَاعُون	 ",
     path: "music/107.mp3",
     img: "img/img107.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "الكَوْثَر	 ",
     path: "music/108.mp3",
     img: "img/img108.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " الكَافِرُون",
     path: "music/109.mp3",
     img: "img/img109.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " النَّصر	",
     path: "music/110.mp3",
     img: "img/img110.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " المَسَد",
     path: "music/111.mp3",
     img: "img/img111.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " الإخْلَاص",
     path: "music/112.mp3",
     img: "img/img112.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " الفَلَق",
     path: "music/113.mp3",
     img: "img/img113.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "النَّاس ",
     path: "music/114.mp3",
     img: "img/img114.jpg",
     singer: "ماهر المعيقلي"
   }
   
];


// All functions


// function load the track
function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

	timer = setInterval(range_slider ,1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);


//mute sound function
function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


// checking.. the song is playing or not
 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }


// reset song slider
 function reset_slider(){
 	slider.value = 0;
 }

// play song
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


// next song
function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}


// previous song
function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


// change volume
function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch(){
	if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "rgba(255,255,255,0.2)";
	}else{
       autoplay = 1;
       auto_play.style.background = "#FF8A65";
	}
}


function range_slider(){
	let position = 0;
        
        // update slider position
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

       
       // function will run when the song is over
       if(track.ended){
       	 play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }
	    }
     }
	 
	 
