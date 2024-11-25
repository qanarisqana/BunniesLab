function toggleButtonText() {
    const button = document.getElementById('myButton');
    if (button.innerHTML === "SUBSCRIBE") {
        button.innerHTML = "SUBSCRIBED";
    } else {
        button.innerHTML = "SUBSCRIBE";
    }
}

//video untuk masing" menu
const videoData = {
    MV: [
        { title: "NewJeans (뉴진스) 'Attention' Official MV", views: "70M views • 2 years ago", thumbnail: "images/AttentionMV.jpg", link:"https://youtu.be/js1CtxSY38I?si=4ltc69JvYne8ZpyZ" },
        { title: "NewJeans (뉴진스) 'Hype Boy' Official MV (Performance)", views: "200M views • 2 years ago", thumbnail: "images/hypeboyMV.jpg", link:"https://youtu.be/11cta61wi0g?si=G2s0fBCjtOozXCWs" },
        { title: "NewJeans (뉴진스) 'Cookie' Official MV", views: "106M views • 2 years ago", thumbnail: "images/cookieMV.jpg", link:"https://youtu.be/VOmIplFAGeg?si=hxr6GpNkjItcjBGg" },
        { title: "NewJeans (뉴진스) 'Ditto (side A)' Official MV", views: "49M views • 1 years ago", thumbnail: "images/dittoAMV.jpg", link:"https://youtu.be/pSUydWEqKwE?si=ZhOCUmUl_EL9G83C" },
        { title: "NewJeans (뉴진스) 'Ditto (side B)' Official MV", views: "23M views • 1 years ago", thumbnail: "images/dittoBMV.jpg", link:"https://youtu.be/V37TaRdVUQY?si=xMmCV7NhTpkDNLse" },
        { title: "NewJeans (뉴진스) 'Cool With You' Official MV", views: "18M views • 1 years ago", thumbnail: "images/COOLWITHYOUMV.jpg", link:"https://youtu.be/zsYSSVoQnP4?si=V2yoftfxAQZ1UuxR" },
        { title: "NewJeans (뉴진스) 'ETA' Official MV", views: "88M views • 1 years ago", thumbnail: "images/ETAMV.jpg", link:"https://youtu.be/jOTfBlKSQYY?si=YANIYg09olqOVz7A" },
        { title: "NewJeans (뉴진스) 'ASAP' Official MV", views: "29M views • 1 years lagoater", thumbnail: "images/ASAPMV.jpg", link:"https://youtu.be/dJdqn5v4Dkw?si=Tx877Gj72mDf7j6P" },
        { title: "NewJeans (뉴진스) 'Bubble Gum' Official MV", views: "63M views • 6 month ago", thumbnail: "images/BUBLWGUMMV.jpg", link:"https://youtu.be/ft70sAYrFyY?si=IBK2ZdSRqNCT8sFO" },
        { title: "NewJeans (뉴진스) 'How Sweet' Official MV", views: "45M views • 5  month ago", thumbnail: "images/howsweet.jpg", link:"https://youtu.be/Q3K0TOvTOno?si=PdjfoIQpn3m0OahJ" },
    ],
    DancePractice: [
        { title: "NewJeans (뉴진스) 'Attention' Dance Practice", views: "8M views • 2 years ago", thumbnail: "images/DP1.jpg", link:"https://youtu.be/1VAn7CX_omg?si=AeCODpIOazfkllUF" },
        { title: "NewJeans (뉴진스) 'Hype Boy' Dance Practice", views: "13M views • 2 years ago", thumbnail: "images/DP2.jpg", link:"https://youtu.be/9JcJ5E1BloU?si=Jl_4jVuo60-i8vNr" },
        { title: "NewJeans (뉴진스) 'Cookie' Dance Practice", views: "6,4M views • 2 years ago", thumbnail: "images/DP3.jpg", link:"https://youtu.be/9yXe2HXcqcQ?si=SDganoyIYyRiwjYP"},
        { title: "NewJeans (뉴진스) 'Ditto Dance Practice", views: "18M views • 1 years ago", thumbnail: "images/DP4.jpg", link:"https://youtu.be/G_1zDzhAz9w?si=2gqBJzM0kIl_hqWO" },
        { title: "NewJeans (뉴진스) 'OMG' Dance Practice", views: "22M views • 1 years ago", thumbnail: "images/DP5.jpg", link:"https://youtu.be/_Xs1ZCMfa2Y?si=DeQJArQ_JGon7sZM" },
        { title: "NewJeans (뉴진스) 'New Jeans' Dance Practice", views: "2M views • 1 years ago", thumbnail: "images/DP6.jpg", link:"https://youtu.be/Dg_sagtPGSE?si=ov-VI-mVOemeLqL9" },
        { title: "NewJeans (뉴진스) 'Super Shy' Dance Practice", views: "28M views • 1 years ago", thumbnail: "images/DP7.jpg", link:"https://youtu.be/wU2siJ2c5TA?si=eCNkMBdfh39Dtwks"},
        { title: "NewJeans (뉴진스) 'Cool With You' Dance Practice", views: "1,7M views • 1 years ago", thumbnail: "images/DP8.jpg", link:"https://youtu.be/f7cNY8vYA2Y?si=VEqdwLRGVkCD06d1" },
        { title: "NewJeans (뉴진스) 'ETA' Dance Practice", views: "5,8 views • 1 years ago", thumbnail: "images/DP9.jpg", link:"https://youtu.be/zzwWzLY7kEo?si=5_q334bm3l2I3qbb" },
        { title: "NewJeans (뉴진스) 'ASAP' Dance Practice", views: "2,4 views • 1 years ago", thumbnail: "images/DP10.jpg", link:"https://youtu.be/5EyMNU8gxZs?si=CyZg7tI8h0hECt6l" },
        { title: "NewJeans (뉴진스) 'Bubble Gum' Dance Practice", views: "805K views • 6 month ago", thumbnail: "images/DP11.jpg", link:"https://youtu.be/_8z6tRLKSIY?si=D13BeCXQJsSJWOLj" },
        { title: "NewJeans (뉴진스) 'How Sweet' Dance Practice", views: "4,4M views • 5  month ago", thumbnail: "images/DP12.jpg", link:"https://youtu.be/W9zz89BwAZ8?si=S4eyJKkbFLln32Co" },
        { title: "NewJeans (뉴진스) 'Right Now' Dance Practice", views: "1,4M views • 4 month ago", thumbnail: "images/DP13.jpg", link:"https://youtu.be/4xer6EPtYdw?si=y5krBCJ1QEDImrpR" },
        { title: "NewJeans (뉴진스) 'Supernatural' Dance Practice", views: "3,5 views • 4 month ago", thumbnail: "images/DP14.jpg", link:"https://youtu.be/FKHqiV-9xLA?si=BvjKESlXRz5jt-ir" },
    ],
    Cover: [
        { title: "[By Jeans] 'Noah Cyrus - July' Cover by DANIELLE | NewJeans", views: "282k • 1 day ago", thumbnail: "images/c1.jpg", link:"https://youtu.be/O3kS6fjj-Qs?si=xM1Qx2iu2Ah93s-T" },
        { title: "[By Jeans] 'Laufey - Falling Behind' Cover by MINJI | NewJeans", views: "1M views • 2 weeks ago", thumbnail: "images/c2.jpg", link:"https://youtu.be/f9cViIsTarw?si=hgwoiVm6xAHABn9k" },
        { title: "[By Jeans] 'Olivia Dean - Dive' Cover by HANNI | NewJeans", views: "1,5M views • 3 month ago", thumbnail: "images/c3.jpg", link:"https://youtu.be/x3INFYk0z68?si=5XcEA413w-v3dRYa"  },
        { title: "[By Jeans] 'Daniel Caesar & H.E.R. - Best Part' Cover by HANNI | NewJeans", views: "3,2M views • 6 month ago", thumbnail: "images/c4.jpg", link:"https://youtu.be/qyNIxxJ1FWU?si=gl0m8cb5GQ3Rxn-O" },
        { title: "[By Jeans] 'Passenger - Let Her Go' Cover by DANIELLE | NewJeans", views: "1,8M views • 7 month ago", thumbnail: "images/c5.jpg", link:"https://youtu.be/ydTtyQXtMLk?si=VBhlZV00M3x2H3Pu"  },
        { title: "[By Jeans] 'Sarah Kang - once in a moon' Cover by HANNI | NewJeans", views: "3,2M views • 11 month ago", thumbnail: "images/c6.jpg", link:"https://youtu.be/RdHR1cZZUR0?si=IJxM4InQAZJiCmxA"  },
        { title: "[By Jeans] 'Stephanie Poetri - I Love You 3000' Cover by MINJI | NewJeans", views: "2,3M views • 1 years ago", thumbnail: "images/c7.jpg", link:"https://youtu.be/DgEuHOhDf04?si=VaN_l59Yd2gaYm0A"  },
        { title: "[By Jeans] 'V - Slow Dancing' Cover by HYEIN | NewJeans", views: "2M views • 1 years ago", thumbnail: "images/c8.jpg", link:"https://youtu.be/n6UioIF7ryY?si=KYUwm07nngxBDR8I"  },
        { title: "[By Jeans] 'AKMU - Love Lee' Cover by HAERIN | NewJeans", views: "3,9M views • 1 years ago", thumbnail: "images/c9.jpg", link:"https://youtu.be/3NtTgRh5NCQ?si=gdkZNYjc5i6uPQuW"  },
        { title: "[By Jeans] 'V - Rainy Days' Cover by DANIELLE | NewJeans", views: "3M views • 1 years ago", thumbnail: "images/c10.jpg", link:"https://youtu.be/yYXk0OVlapc?si=Qk3NRGCH_sjj1boK"  },
    ],
};

// untuk munculin video sesuai menu
function loadVideos(menu) {
    const videoGrid = document.getElementById("videoGrid");
    // mengosongkan konten sebelumnya, biar video muncul sesuai menu
    videoGrid.innerHTML = ""; 

    // mengambil data video sesuai menu yang dipilih
    const videos = videoData[menu] || []; 

    // buat ngelakuin hal yang sama untuk setiap video di daftar
    videos.forEach(video => {
        const videoItem = document.createElement("div");
        videoItem.className = "video-item";
        // HTML otomatis untuk video (ga nulis manual di html)
        videoItem.innerHTML = `
            <a href="${video.link}" target="_blank" class="video-link">
                <img src="${video.thumbnail}" alt="${video.title}">
                <div class="video-info">
                    <div class="video-title">${video.title}</div>
                    <div class="video-meta">${video.views}</div>
                </div>
            </a>
        `;
        videoGrid.appendChild(videoItem);
    });
}

// halaman "home" untuk tampilan awal (yang mirip youtube)
window.onload = () => {
    loadVideos("home");
};

//  Menambahkan kelas aktif ke tautan menu yang diklik
const menuLinks = document.querySelectorAll('.menu-link');
// iterasi untuk setiap menu (pas di klik)
menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        // menghapus tanda "aktif" dari semua menu (sebelum ada menu yang di klik)
        menuLinks.forEach(link => link.classList.remove('active'));

        // menambahkan tanda "aktif" buat menu yang udah di klik atau lagi dijalanin
        this.classList.add('active');
    });
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("WELCOME BUNNIES!!");
    form.reset();
});