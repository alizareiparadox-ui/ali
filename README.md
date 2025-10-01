<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>امام زمان (عج)</title>
  <link href="https://fonts.googleapis.com/css2?family=Vazirmatn&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Vazirmatn', sans-serif;
      background: linear-gradient(to bottom right, #e0f7ff, #ffffff);
      color: #003366;
      margin: 0;
      padding: 0;
      direction: rtl;
    }

    /* منو */
    .navbar {
      background-color: #003366;
      color: #fff;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
      padding: 15px 25px;
      position: sticky;
      top: 0;
      z-index: 1000;
    }
    .logo {
      font-size: 1.5em;
      font-weight: bold;
    }
    .menu {
      list-style: none;
      display: flex;
      gap: 20px;
      margin: 0;
      padding: 0;
    }
    .menu li a {
      color: #fff;
      text-decoration: none;
      font-weight: bold;
      transition: color 0.3s;
    }
    .menu li a:hover {
      color: #a0e0ff;
    }
    .menu-toggle {
      display: none;
      background: none;
      border: none;
      font-size: 1.5em;
      color: #fff;
      cursor: pointer;
    }
    @media (max-width: 768px) {
      .menu {
        display: none;
        flex-direction: column;
        background-color: #002244;
        position: absolute;
        top: 60px;
        right: 0;
        width: 100%;
        padding: 10px 0;
      }
      .menu li {
        text-align: center;
        padding: 10px 0;
      }
      .menu-toggle {
        display: block;
      }
    }

    /* حالت شب */
    .dark-toggle {
      position: fixed;
      top: 15px;
      left: 15px;
      background-color: #003366;
      color: #fff;
      border: none;
      padding: 10px 15px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 14px;
      z-index: 1001;
    }
    .dark-mode {
      background: linear-gradient(to bottom right, #001f3f, #003366);
      color: #ffffff;
    }
    .dark-mode header,
    .dark-mode section {
      background-color: #002244ee;
    }
    .dark-mode .btn {
      border-color: #ffffff;
      color: #ffffff;
    }
    .dark-mode .btn:hover {
      background-color: #ffffff;
      color: #003366;
    }
    .dark-mode .navbar {
      background-color: #001f3f;
    }
    .dark-mode .menu li a {
      color: #ffffff;
    }

    /* بخش‌ها */
    header {
      background-color: #ffffffcc;
      backdrop-filter: blur(10px);
      padding: 30px;
      text-align: center;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
    h1 {
      font-size: 2.5em;
      margin-bottom: 10px;
    }
    p.subtitle {
      font-size: 1.2em;
      color: #005599;
    }
    section {
      padding: 30px;
      max-width: 900px;
      margin: auto;
      background-color: #ffffffee;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      margin-top: 30px;
    }
    h2 {
      font-size: 1.8em;
      margin-bottom: 20px;
    }
    p {
      font-size: 18px;
      line-height: 2;
      white-space: pre-line;
      overflow-wrap: break-word;
    }
    .btn {
      display: inline-block;
      margin: 10px 5px;
      padding: 12px 24px;
      background-color: transparent;
      border: 2px solid #003366;
      color: #003366;
      text-decoration: none;
      border-radius: 8px;
      transition: all 0.3s ease;
    }
    .btn:hover {
      background-color: #003366;
      color: #fff;
    }
    audio {
      width: 100%;
      margin-top: 20px;
      border-radius: 8px;
    }
  </style>
</head>
<body>

  <button class="dark-toggle" onclick="toggleDarkMode()">🌓 حالت شب</button>

  <nav class="navbar">
    <div class="logo">🌙 امام زمان (عج)</div>
    <button class="menu-toggle" onclick="toggleMenu()">☰</button>
    <ul class="menu" id="menu">
      <li><a href="#home">صفحه اصلی</a></li>
      <li><a href="#bio">زندگی‌نامه</a></li>
      <li><a href="#signs">نشانه‌های ظهور</a></li>
      <li><a href="#duties">وظایف منتظران</a></li>
      <li><a href="#dua">دعای عهد</a></li>
      <li><a href="#contact">اینستاگرام</a></li>
    </ul>
  </nav>

  <header id="home">
    <h1>امام زمان (عج)</h1>
    <p class="subtitle">موعود آخرالزمان، امید دل‌ها، و حجت خدا بر زمین</p>
  </header>

  <section id="bio">
    <h2>زندگی‌نامه</h2>
    <p>
      امام مهدی (عج)، فرزند امام حسن عسکری (ع)، در سال ۲۵۵ هجری قمری در سامرا متولد شدند. ایشان پس از شهادت پدرشان به امامت رسیدند و به فرمان الهی در غیبت به سر می‌برند تا زمان ظهور فرا رسد.
    </p>
  </section>

  <section id="signs">
    <h2>نشانه‌های ظهور</h2>
    <p>
      از جمله نشانه‌های ظهور امام زمان (عج) می‌توان به خروج سفیانی، ندای آسمانی، خسف بیداء، و ظهور یمانی اشاره کرد. این نشانه‌ها در روایات معتبر شیعه آمده‌اند و مقدمه‌ای بر ظهور هستند.
    </p>
  </section>

  <section id="duties">
    <h2>وظایف منتظران</h2>
    <p>
      انتظار فرج، تنها نشستن نیست؛ بلکه باید با دعا، اصلاح نفس، یاری مظلومان، و آمادگی برای ظهور، منتظر واقعی بود. امام صادق (ع) فرمودند: «منتظر واقعی همچون کسی است که در رکاب امام شمشیر می‌زند».
    </p>
  </section>

  <section id="dua">
    <h2>دعای عهد</h2>
    <p>
      اللّهُمَّ رَبَّ النُّورِ الْعَظِيمِ، وَرَبَّ الْكُرْسِيِّ الرَّفِيعِ، وَرَبَّ الْبَحْرِ الْمَسْجُورِ، وَمُنْزِلَ التَّوْرَاةِ وَالْإِنْجِيلِ وَالزَّبُورِ، وَرَبَّ الظِّلِّ وَالْحَرُورِ، وَمُنْزِلَ الْقُرْآنِ الْعَظِيمِ، وَرَبَّ الْمَلَائِكَةِ الْمُقَرَّبِينَ، وَالنَّبِيِّينَ وَالصِّدِّيقِينَ...

      اللّهُمَّ اجْعَلْنِي مِنْ أَنْصَارِهِ وَأَعْوَانِهِ وَالذَّابِّينَ عَنْهُ، وَالْمُسَارِعِينَ إِلَيْهِ فِي قَضَاءِ حَوَائِجِهِ، وَالْمُمْتَثِلِينَ لِأَوَامِرِهِ، وَالْمُحَامِينَ عَنْهُ، وَالسَّابِقِينَ إِلَى إِرَادَتِهِ، وَالْمُسْتَشْهَدِينَ ب
