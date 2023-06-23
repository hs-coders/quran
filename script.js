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
     path: "https://server12.mp3quran.net/maher/001.mp3",
     img: "img/img1.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "البَقَرَة",
     path: "https://server12.mp3quran.net/maher/002.mp3",
     img: "img/img2.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "آل عِمرَان",
     path: "https://server12.mp3quran.net/maher/003.mp3",
     img: "img/img3.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "النِّسَاء",
     path: "https://server12.mp3quran.net/maher/004.mp3",
     img: "img/img4.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "المَائدة",
     path: "https://server12.mp3quran.net/maher/005.mp3",
     img: "img/img5.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "الأنعَام",
     path: "https://server12.mp3quran.net/maher/006.mp3",
     img: "img/img6.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: "الأعرَاف",
     path: "https://server12.mp3quran.net/maher/007.mp3",
     img: "img/img7.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "الأنفَال",
     path: "https://server12.mp3quran.net/maher/008.mp3",
     img: "img/img8.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: "التوبَة",
     path: "https://server12.mp3quran.net/maher/009.mp3",
     img: "img/img9.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "يُونس",
     path: "https://server12.mp3quran.net/maher/010.mp3",
     img: "img/img10.jpg",
     singer: "ماهر المعيقلي"
   }
   
   ,
   {
     name: "هُود",
     path: "https://server12.mp3quran.net/maher/011.mp3",
     img: "img/img11.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: "يُوسُف",
     path: "https://server12.mp3quran.net/maher/012.mp3",
     img: "img/img12.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: "الرَّعْد",
     path: "https://server12.mp3quran.net/maher/013.mp3",
     img: "img/img13.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "إبراهِيم",
     path: "https://server12.mp3quran.net/maher/014.mp3",
     img: "img/img14.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "الحِجْر",
     path: "https://server12.mp3quran.net/maher/015.mp3",
     img: "img/img15.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: "النَّحْل",
     path: "https://server12.mp3quran.net/maher/016.mp3",
     img: "img/img16.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: "الإسْرَاء",
     path: "https://server12.mp3quran.net/maher/017.mp3",
     img: "img/img17.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "الكهْف",
     path: "https://server12.mp3quran.net/maher/018.mp3",
     img: "img/img18.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "مَريَم",
     path: "https://server12.mp3quran.net/maher/019.mp3",
     img: "img/img19.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: "طه ",
     path: "https://server12.mp3quran.net/maher/020.mp3",
     img: "img/img20.jpg",
    singer: "ماهر المعيقلي"
   }
   
   ,
   {
     name: "الأنبيَاء ",
     path: "https://server12.mp3quran.net/maher/021.mp3",
     img: "img/img21.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " الحَج",
     path: "https://server12.mp3quran.net/maher/022.mp3",
     img: "img/img22.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " المُؤمنون",
     path: "https://server12.mp3quran.net/maher/023.mp3",
     img: "img/img23.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " النُّور",
     path: "https://server12.mp3quran.net/maher/024.mp3",
     img: "img/img24.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " الفُرْقان",
     path: "https://server12.mp3quran.net/maher/025.mp3",
     img: "img/img25.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "الشُّعَرَاء ",
     path: "https://server12.mp3quran.net/maher/026.mp3",
     img: "img/img26.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " النَّمْل",
     path: "https://server12.mp3quran.net/maher/027.mp3",
     img: "img/img27.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: "القَصَص ",
     path: "https://server12.mp3quran.net/maher/028.mp3",
     img: "img/img28.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " العَنكبوت	",
     path: "https://server12.mp3quran.net/maher/029.mp3",
     img: "img/img29.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: "الرُّوم ",
     path: "https://server12.mp3quran.net/maher/030.mp3",
     img: "img/img30.jpg",
    singer: "ماهر المعيقلي"
   } ,
   {
     name: " لقمَان",
     path: "https://server12.mp3quran.net/maher/031.mp3",
     img: "img/img31.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "السَّجدَة ",
     path: "https://server12.mp3quran.net/maher/032.mp3",
     img: "img/img32.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " الأحزَاب",
     path: "https://server12.mp3quran.net/maher/033.mp3",
     img: "img/img33.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "سَبَأ ",
     path: "https://server12.mp3quran.net/maher/034.mp3",
     img: "img/img34.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " فَاطِر",
     path: "https://server12.mp3quran.net/maher/035.mp3",
     img: "img/img35.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " يس",
     path: "https://server12.mp3quran.net/maher/036.mp3",
     img: "img/img36.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " الصَّافات",
     path: "https://server12.mp3quran.net/maher/037.mp3",
     img: "img/img37.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " ص",
     path: "https://server12.mp3quran.net/maher/038.mp3",
     img: "img/img38.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " الزُّمَر",
     path: "https://server12.mp3quran.net/maher/039.mp3",
     img: "img/img39.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: "غَافِر ",
     path: "https://server12.mp3quran.net/maher/040.mp3",
     img: "img/img40.jpg",
    singer: "ماهر المعيقلي"
   } ,
   {
     name: " فُصِّلَتْ",
     path: "https://server12.mp3quran.net/maher/041.mp3",
     img: "img/img41.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "الشُّورَى ",
     path: "https://server12.mp3quran.net/maher/042.mp3",
     img: "img/img42.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " الزُّخْرُف",
     path: "https://server12.mp3quran.net/maher/043.mp3",
     img: "img/img43.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "الدخَان ",
     path: "https://server12.mp3quran.net/maher/044.mp3",
     img: "img/img44.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " الجَاثيَة",
     path: "https://server12.mp3quran.net/maher/045.mp3",
     img: "img/img45.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " الأحْقاف",
     path: "https://server12.mp3quran.net/maher/046.mp3",
     img: "img/img46.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " محَمَّد",
     path: "https://server12.mp3quran.net/maher/047.mp3",
     img: "img/img47.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " الفَتْح",
     path: "https://server12.mp3quran.net/maher/048.mp3",
     img: "img/img48.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " الحُجرَات",
     path: "https://server12.mp3quran.net/maher/049.mp3",
     img: "img/img49.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: "ق ",
     path: "https://server12.mp3quran.net/maher/050.mp3",
     img: "img/img50.jpg",
    singer: "ماهر المعيقلي"
   } ,
   {
     name: " الذَّاريَات",
     path: "https://server12.mp3quran.net/maher/051.mp3",
     img: "img/img51.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "الطُّور ",
     path: "https://server12.mp3quran.net/maher/052.mp3",
     img: "img/img52.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " النَّجْم",
     path: "https://server12.mp3quran.net/maher/053.mp3",
     img: "img/img53.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "القَمَر ",
     path: "https://server12.mp3quran.net/maher/054.mp3",
     img: "img/img54.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " الرَّحمن",
     path: "https://server12.mp3quran.net/maher//055.mp3",
     img: "img/img55.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " الوَاقِعَة",
     path: "https://server12.mp3quran.net/maher/056.mp3",
     img: "img/img56.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " الحَديد",
     path: "https://server12.mp3quran.net/maher//057.mp3",
     img: "img/img57.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " المجَادلة",
     path: "https://server12.mp3quran.net/maher/058.mp3",
     img: "img/img58.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " الحَشر",
     path: "https://server12.mp3quran.net/maher/059.mp3",
     img: "img/img59.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: "المُمتَحنَة ",
     path: "https://server12.mp3quran.net/maher/060.mp3",
     img: "img/img60.jpg",
    singer: "ماهر المعيقلي"
   } ,
   {
     name: " الصَّف",
     path: "https://server12.mp3quran.net/maher/061.mp3",
     img: "img/img61.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "الجُمُعَة ",
     path: "https://server12.mp3quran.net/maher/062.mp3",
     img: "img/img62.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " المنَافِقون	",
     path: "https://server12.mp3quran.net/maher/063.mp3",
     img: "img/img63.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "التغَابُن ",
     path: "https://server12.mp3quran.net/maher/064.mp3",
     img: "img/img64.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " الطلَاق",
     path: "https://server12.mp3quran.net/maher/065.mp3",
     img: "img/img65.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " التحْريم	",
     path: "https://server12.mp3quran.net/maher/066.mp3",
     img: "img/img66.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " المُلْك",
     path: "https://server12.mp3quran.net/maher/067.mp3",
     img: "img/img67.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " القَلَم",
     path: "https://server12.mp3quran.net/maher/068.mp3",
     img: "img/img68.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " الحَاقَّة",
     path: "https://server12.mp3quran.net/maher/069.mp3",
     img: "img/img69.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: "المعَارج ",
     path: "https://server12.mp3quran.net/maher/070.mp3",
     img: "img/img70.jpg",
    singer: "ماهر المعيقلي"
   } ,
   {
     name: " نُوح",
     path: "https://server12.mp3quran.net/maher/071.mp3",
     img: "img/img71.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "الجِن ",
     path: "https://server12.mp3quran.net/maher/072.mp3",
     img: "img/img72.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " المُزَّمِّل	",
     path: "https://server12.mp3quran.net/maher/073.mp3",
     img: "img/img73.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "المُدَّثِّر ",
     path: "https://server12.mp3quran.net/maher/074.mp3",
     img: "img/img74.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " القِيَامَة",
     path: "https://server12.mp3quran.net/maher/075.mp3",
     img: "img/img75.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " الإنسَان	",
     path: "https://server12.mp3quran.net/maher/076.mp3",
     img: "img/img76.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " المُرسَلات",
     path: "https://server12.mp3quran.net/maher/077.mp3",
     img: "img/img77.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " النَّبَأ",
     path: "https://server12.mp3quran.net/maher/078.mp3",
     img: "img/img78.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " النّازعَات	",
     path: "https://server12.mp3quran.net/maher/079.mp3",
     img: "img/img79.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: "عَبَس ",
     path: "https://server12.mp3quran.net/maher/080.mp3",
     img: "img/img80.jpg",
    singer: "ماهر المعيقلي"
   } ,
   {
     name: " التَّكوير",
     path: "https://server12.mp3quran.net/maher/081.mp3",
     img: "img/img81.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "الانفِطار ",
     path: "https://server12.mp3quran.net/maher/082.mp3",
     img: "img/img82.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " المطفِّفِين	",
     path: "https://server12.mp3quran.net/maher/083.mp3",
     img: "img/img83.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "الانْشِقَاق	 ",
     path: "https://server12.mp3quran.net/maher/084.mp3",
     img: "img/img84.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " البرُوج",
     path: "https://server12.mp3quran.net/maher/085.mp3",
     img: "img/img85.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " الطَّارِق	",
     path: "https://server12.mp3quran.net/maher/086.mp3",
     img: "img/img86.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " الأَعْلى",
     path: "https://server12.mp3quran.net/maher/087.mp3",
     img: "img/img87.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " الغَاشِية",
     path: "https://server12.mp3quran.net/maher/088.mp3",
     img: "img/img88.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " الفَجْر	",
     path: "https://server12.mp3quran.net/maher/089.mp3",
     img: "img/img89.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: "البَلَد ",
     path: "https://server12.mp3quran.net/maher/090.mp3",
     img: "img/img90.jpg",
    singer: "ماهر المعيقلي"
   } ,
   {
     name: " الشَّمْس",
     path: "https://server12.mp3quran.net/maher/091.mp3",
     img: "img/img91.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "الليْل ",
     path: "https://server12.mp3quran.net/maher/092.mp3",
     img: "img/img92.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " الضُّحَى		",
     path: "https://server12.mp3quran.net/maher/093.mp3",
     img: "img/img93.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "الشَّرْح	 ",
     path: "https://server12.mp3quran.net/maher/094.mp3",
     img: "img/img94.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " التِّين",
     path: "https://server12.mp3quran.net/maher/095.mp3",
     img: "img/img95.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " العَلَق	",
     path: "https://server12.mp3quran.net/maher/096.mp3",
     img: "img/img96.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " القَدْر",
     path: "https://server12.mp3quran.net/maher/097.mp3",
     img: "img/img97.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " البَينَة",
     path: "https://server12.mp3quran.net/maher/098.mp3",
     img: "img/img98.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " الزلزَلة		",
     path: "https://server12.mp3quran.net/maher/099.mp3",
     img: "img/img99.jpg",
    singer: "ماهر المعيقلي"
   },
    {
     name: "العَادِيات",
     path: "https://server12.mp3quran.net/maher/100.mp3",
     img: "img/img100.jpg",
     singer: "ماهر المعيقلي"
   },  
  {
     name: "القَارِعة",
     path: "https://server12.mp3quran.net/maher/101.mp3",
     img: "img/img101.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "التَّكَاثر",
     path: "https://server12.mp3quran.net/maher/102.mp3",
     img: "img/img102.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "العَصْر ",
     path: "https://server12.mp3quran.net/maher/103.mp3",
     img: "img/img103.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " الهمزة",
     path: "https://server12.mp3quran.net/maher/104.mp3",
     img: "img/img104.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "الفِيل	 ",
     path: "https://server12.mp3quran.net/maher/105.mp3",
     img: "img/img105.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "قُرَيْش ",
     path: "https://server12.mp3quran.net/maher/106.mp3",
     img: "img/img106.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: "المَاعُون	 ",
     path: "https://server12.mp3quran.net/maher/107.mp3",
     img: "img/img107.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "الكَوْثَر	 ",
     path: "https://server12.mp3quran.net/maher/108.mp3",
     img: "img/img108.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " الكَافِرُون",
     path: "https://server12.mp3quran.net/maher/109.mp3",
     img: "img/img109.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " النَّصر	",
     path: "https://server12.mp3quran.net/maher/110.mp3",
     img: "img/img110.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: " المَسَد",
     path: "https://server12.mp3quran.net/maher/111.mp3",
     img: "img/img111.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " الإخْلَاص",
     path: "https://server12.mp3quran.net/maher/112.mp3",
     img: "img/img112.jpg",
    singer: "ماهر المعيقلي"
   },
   {
     name: " الفَلَق",
     path: "https://server12.mp3quran.net/maher/113.mp3",
     img: "img/img113.jpg",
     singer: "ماهر المعيقلي"
   },
   {
     name: "النَّاس ",
     path: "https://server12.mp3quran.net/maher/114.mp3",
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
	 
	 
