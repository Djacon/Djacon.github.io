var maxWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

// Handle button only in desktop version
if (maxWidth > 991) {
    let mybutton = document.getElementById("scroll-arrow");
    window.onscroll = () => {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            mybutton.classList.remove("hidden-btn");
        } else {
            mybutton.classList.add("hidden-btn");
        }
    }

    function getLang(lang, text2lang=true) {
        if (text2lang) {
            return (lang == 'Russian') ? 'ru': (lang == 'Turkish') ? 'tr' : 'en';
        }
        return (lang == 'ru') ? 'Russian': (lang == 'tr') ? 'Turkish': 'English'; 
    }

    function setText(id, text) {
        let el = document.getElementById(id);
        if (!el) return;
        el.innerText = text;
    }

    function setPlaceholder(id, text) {
        let el = document.getElementById(id);
        if (!el) return;
        el.placeholder = text;
    }

    function updateLang() {
        let lang = localStorage.language;
        document.documentElement.setAttribute('lang', lang);
        if (lang == 'ru') {
            // <NavBar>
            setText('language-main', 'Русский');

            setText('logo-firstname', 'Даниел');
            setText('logo-lastname', 'Илле');

            let el = document.getElementsByClassName('nav-item');
            let nav_ru = ['Главная', 'Обо мне', 'Портфолио', 'Контакты'];
            for (let i = 0; i < el.length; i++) {
                el[i].innerText = nav_ru[i];
            }
            // </NavBar>

            // <Homepage>
            el = document.getElementById('intro-about-cv-btn');
            if (el) {
                el.innerText = 'Загрузить CV';
                el.href = 'assets/files/cv_ru.pdf'
            }

            setText('intro-about-full-name', 'Даниел Илле');
            setText('intro-about-contact-btn', 'Контакты');
            setText('intro-about-description', `Я — молодой технологический энтузиаст, с горячим интересом к последним инновациям. Мой путь в области машинного обучения это захватывающее приключение, в ходе которого я изучаю передовые инструменты и превращаю их в реальные достижения. Моя цель — оказывать положительное влияние, предлагая умные решения одно за другим. 🚀`);

            el = document.getElementsByClassName('info-desc');
            if (el.length) {
                descs_ru = ['NLP - это область искусственного интеллекта, которая фокусируется на взаимодействии компьютеров и человеческого языка. Она включает в себя различные задачи, в том числе анализ текста, перевод языка, анализ настроения и извлечение информации, и играет важную роль в таких приложениях, как чат-боты, службы языкового перевода и инструменты текстовой аналитики.',
                            'CV - это направление искусственного интеллекта (ИИ), направленное на обучение машин пониманию и интерпретации визуальной информации, включая изображения и видео. Она находит применение в автономных системах, здравоохранении, дополненной реальности, контроле качества и многом другом, революционизируя восприятие и взаимодействие машин с визуальным миром.',
                            'RecSys - это область, которая занимается разработкой алгоритмов для предоставления персонализированных рекомендаций пользователям. Эти системы широко используются в различных приложениях, таких как электронная коммерция, потоковые платформы и рекомендации контента, чтобы предлагать продукты, услуги или контент, которые наиболее релевантны предпочтениям и поведению отдельных пользователей.',
                            'Развертывание модели - это процесс внедрения обученной модели машинного обучения в действующую систему для прогнозирования или классификации в режиме реального времени на основе поступающих данных. Это мост, соединяющий аналитические возможности модели с практическими приложениями в различных областях, от рекомендательных систем до автономных транспортных средств.']
                for (let i = 0; i < el.length; i++) {
                    el[i].innerText = descs_ru[i];
                }
            }

            setText('grid-about-title', 'Чем я занимаюсь');
            setText('grid-exp-title', 'Обо мне');

            el = document.getElementsByClassName('exp-block-header');
            if (el.length) {
                exp_ru = ['Опыт Разработки', 'Счастливых Клиентов', 'Завершенных Курсов', 'Завершенных Проектов'];
                for (let i = 0; i < el.length; i++) {
                    el[i].innerText = exp_ru[i];
                }
            }
            // </Homepage>

            // <About>
            setText('main-title-about', 'Обо мне');
            setText('main-desc-about', 'Опыт работы более 2 лет');

            el = document.getElementsByClassName('resume-desc-title');
            if (el.length) {
                el[0].innerText = 'Биотехнологии';
            }

            setText('grid-title-education', 'Образование');
            setText('grid-title-work', 'Опыт Работы');
            setText('grid-title-skills', 'Навыки Программирования');

            el = document.getElementsByClassName('resume-info-block');
            if (el.length) {
                about_date_ru = ['Сент. 2022 - Настоящее время', 'Сент. 2023 - Настоящее время', 'Сент. 2022 - Настоящее время']
                about_name_ru = ['РТУ МИРЭА', 'Deep Learning School', 'Фриланс']
                about_ru = ['МИРЭА — Российский технологический университет (РТУ МИРЭА) является федеральным государственным бюджетным образовательным учреждением высшего образования. Это высшее учебное заведение в Москве, Россия, которое представляет собой образовательно-исследовательский и инновационный комплекс.',
                            'Deep Learning School - это образовательная организация, базирующаяся в Школе прикладной математики и компьютерных наук (ФПМИ) Московского института физики и технологии (МФТИ). Курс посвящен использованию моделей нейронных сетей для обработки естественного языка и аудиосигналов.',
                            'В период работы фрилансером, я работал с заказчиками, выполняя проекты в области машинного обучения и обработки данных. Моя работа включала в себя разработку технологий в областях обработки естественного языка (NLP) и компьютерного зрения (CV).']
                for (let i = 0; i < el.length; i++) {
                    el[i].childNodes[1].childNodes[1].innerText = about_date_ru[i];
                    el[i].childNodes[1].childNodes[3].innerText = about_name_ru[i];
                    el[i].childNodes[3].childNodes[3].innerText = about_ru[i];
                }
            }
            // </About>

            // <Portfolio>
            setText('main-title-portfolio', 'Портфолио');
            setText('main-desc-portfolio', 'Личные Проекты');

            el = document.getElementsByClassName('category');
            if (el.length) {
                el[0].innerHTML = 'Все Категории';
                el[4].innerHTML = 'Другое';
            }

            el = document.getElementsByClassName('project-title');
            let project_ru = ['Суммаризация Текста', 'Детекция Эмоций', 'Распознавание Цифр', 'Распознавание Букв']
            if (el.length) {
                for (let i = 0; i < el.length; i++) {
                    el[i].innerText = project_ru[i];
                }
            }
            // </Portfolio>

            // <Contact>
            setText('main-title-contact', 'Контакты');
            setText('main-desc-contact', 'Связаться');

            setText('grid-personal-title', 'Личные ссылки');
            setText('grid-contact-title', 'Чем я могу вам помочь?');

            setPlaceholder('name', 'Полное Имя');
            setPlaceholder('email', 'Почта');
            setPlaceholder('subject', 'Тема');
            setPlaceholder('message', 'Сообщение');
            // </Contact>

            // <Projects>
            setText('main-desc-project', 'Личный проект');
            setText('main-title-project-1', project_ru[0]);
            setText('main-title-project-2', project_ru[1]);
            setText('main-title-project-3', project_ru[2]);
            setText('main-title-project-4', project_ru[3]);

            setText('project-desc-title', 'Краткое описание');
            setText('project-date-title', 'Дата');
            setText('project-author-title', 'Автор(ы)');
            setText('project-stack-title', 'Стек Технологий');
            setText('project-about-title', 'О проекте');
            setText('project-link-title', 'Попробовать сейчас');
            // </Projects>

            // <404>
            setText('404-title', 'Страница не найдена');
            setText('404-desc', 'Страница, которую вы ищете, не существует или была перемещена');
            setText('404-btn', 'Вернуться в главное меню');
            // </404>

        } else if (lang == 'tr') {
            // <NavBar>
            setText('language-main', 'Turkçe');

            let el = document.getElementsByClassName('nav-item');
            nav_tr = ['Anasayfa', 'Hakkımda', 'Portföy', 'İletişim'];
            for (let i = 0; i < el.length; i++) {
                el[i].innerText = nav_tr[i];
            }
            // </NavBar>

            // <Homepage>
            setText('intro-about-cv-btn', 'CV Yükle');
            setText('intro-about-contact-btn', 'İletişim');
            setText('intro-about-description', `Ben, en yeni yeniliklere karşı meraklı genç bir teknoloji tutkunu. Makine Öğrenimi Mühendisi olarak yürüdüğüm yol, son teknoloji araçları keşfetmenin ve onları gerçek dünya mucizelerine dönüştürmenin heyecan verici bir macerası. Buradayım, akıllı çözümlerle bir adım daha olumlu etki bırakmak için. 🚀`);

            el = document.getElementsByClassName('info-desc');
            if (el.length) {
                descs_tr = ['NLP, bilgisayarlar ile insan dilinin etkileşimine odaklanan yapay zeka bir alanıdır. Bu alan, metin analizi, dil tercümesi, duygu analizi ve bilgi çıkarma gibi çeşitli görevleri içerir ve sohbet botları, dil tercüme hizmetleri ve metin analitik araçları gibi uygulamalarda önemli bir rol oynar.',
                            'CV, yapay zeka (AI) alanının bir dalıdır ve makineleri dünyadan gelen görsel bilgileri anlamak ve yorumlamak üzerine odaklanır, bu da görüntüler ve videoları içerir. Otomatik sistemler, sağlık, artırılmış gerçeklik, kalite kontrolü ve daha birçok alanda uygulamaları vardır ve makinelerin görsel dünyayı nasıl algıladığı ve etkileşimde bulunduğu konusunda devrim yapmaktadır.',
                            'Tavsiye Sistemi, kullanıcılara kişiselleştirilmiş öneriler sunmak için algoritmalar geliştiren bir alandır. Bu sistemler, e-ticaret, yayın platformları ve içerik önerileri gibi çeşitli uygulamalarda yaygın olarak kullanılır. Bireysel kullanıcı tercihleri ve davranışlarına en uygun ürünleri, hizmetleri veya içerikleri önermek için kullanılırlar.',
                            'Model Dağıtımı, eğitilmiş bir makine öğrenimi modelini canlı, operasyonel bir sistemde kullanıma koyma sürecidir. Bu süreç, gelen verilere dayalı olarak gerçek zamanlı tahminler veya sınıflandırmalar yapmak için modelin analitik yeteneklerini pratik uygulamalarla birleştiren bir köprüdür. Bu uygulamalar, öneri sistemlerinden otonom araçlara kadar çeşitli alanlarda kullanılabilmektedir.']
                for (let i = 0; i < el.length; i++) {
                    el[i].innerText = descs_tr[i];
                }
            }

            setText('grid-about-title', 'Yaptiklarim');
            setText('grid-exp-title', 'Hakkımda');

            el = document.getElementsByClassName('exp-block-header');
            if (el.length) {
                exp_tr = ['Geliştirme Tecrübesi', 'Memnun Müşteriler', 'Tamamlanan Kurslar', 'Tamamlanan Projeler'];
                for (let i = 0; i < el.length; i++) {
                    el[i].innerText = exp_tr[i];
                }
            }
            // </Homepage>

            // <About>
            setText('main-title-about', 'Hakkımda');
            setText('main-desc-about', '2+ Yıllık Tecrübe');

            el = document.getElementsByClassName('resume-desc-title');
            if (el.length) {
                el[0].innerText = 'BiyoTeknoloji';
            }

            setText('grid-title-education', 'Eğitim');
            setText('grid-title-work', 'İş Tecrübesi');
            setText('grid-title-skills', 'Kodlama Becerileri');

            el = document.getElementsByClassName('resume-info-block');
            if (el.length) {
                about_date_tr = ['Eylül 2022 - Günümüz', 'Eylül 2023 - Günümüz', 'Eylül 2022 - Günümüz']
                about_name_tr = ['RTÜ MIREA', 'Deep Learning School', 'Serbest Çalışan']
                about_tr = [`MIREA - Rus Teknoloji Üniversitesi (RTU MIREA), Rusya'nın Federal Devlet Bütçeli Yükseköğretim Kurumu'dur. Bu, Moskova, Rusya'da bulunan bir eğitim, araştırma ve inovasyon kompleksi olan yükseköğretim kurumudur.`,
                            `Deep Learning School, Moskova Fizik ve Teknoloji Enstitüsü'nün (MIPT) Uygulamalı Matematik ve Bilgisayar Bilimleri Okulu'na (AMCS) dayalı bir eğitim kuruluşudur. Kurs, doğal dil ve ses sinyallerini işlemek için sinir ağı modellerinin kullanımına adanmıştır.`,
                            'Serbest çalışan olarak geçirdiğim süre zarfında, makine öğrenimi ve veri işleme projelerinde çeşitli müşterilerle çalıştım. Çalışmalarım genellikle Doğal Dil İşleme (NLP) ve Bilgisayar Görüşü (CV) alanlarında teknoloji geliştirmeyi içermiştir.']
                for (let i = 0; i < el.length; i++) {
                    el[i].childNodes[1].childNodes[1].innerText = about_date_tr[i];
                    el[i].childNodes[1].childNodes[3].innerText = about_name_tr[i];
                    el[i].childNodes[3].childNodes[3].innerText = about_tr[i];
                }
            }
            // </About>

            // <Portfolio>
            setText('main-title-portfolio', 'Portföy');
            setText('main-desc-portfolio', 'Kişisel Projeler');

            el = document.getElementsByClassName('category');
            if (el.length) {
                el[0].innerHTML = 'Tüm Kategoriler';
                el[4].innerHTML = 'Diğer';
            }

            el = document.getElementsByClassName('project-title');
            let project_tr = ['Metin Özetleme', 'Duygu Tespiti', 'Rakam Tanıma', 'Harf Tanıma']
            if (el.length) {
                for (let i = 0; i < el.length; i++) {
                    el[i].innerText = project_tr[i];
                }
            }
            // </Portfolio>

            // <Contact>
            setText('main-title-contact', 'İletişim');
            setText('main-desc-contact', 'İletişime Geç');

            setText('grid-personal-title', 'Kişisel Bağlantılar');
            setText('grid-contact-title', 'Nasıl Yardımcı Olabilirim?');

            setPlaceholder('name', 'Tam ad');
            setPlaceholder('email', 'E-posta Adresi');
            setPlaceholder('subject', 'Konu');
            setPlaceholder('message', 'Mesaj');
            // </Contact>

            // <Projects>
            setText('main-desc-project', 'Kişisel Proje');
            setText('main-title-project-1', project_tr[0]);
            setText('main-title-project-2', project_tr[1]);
            setText('main-title-project-3', project_tr[2]);
            setText('main-title-project-4', project_tr[3]);

            setText('project-desc-title', 'Kısa Açıklama');
            setText('project-date-title', 'Tarih');
            setText('project-author-title', 'Yazar(lar)');
            setText('project-stack-title', 'Teknik Yığın');
            setText('project-about-title', 'Proje Hakkında');
            setText('project-link-title', 'Şimdi dene');
            // </Projects>

            // <404>
            setText('404-title', 'Sayfa Bulunamadı');
            setText('404-desc', 'Aradığınız sayfa mevcut değil veya taşınmış');
            setText('404-btn', 'Ana Sayfaya Geri Dön');
            // </404>
        }

        let languageBtn = document.getElementsByClassName("language-2");
        let lang_text = getLang(lang, false);
        let i = 0;
        for (let val of ['English', 'Russian', 'Turkish']) {
            if (val == lang_text) continue;
            languageBtn[i].innerText = val;
            languageBtn[i].onclick = function() {
                localStorage.language = getLang(val);
            }
            i++;
        }
    }

    // Predict user language
    if (!localStorage.language) {
        let userLanguage = navigator.language || navigator.userLanguage;
        if (['ru', 'ru-RU'].includes(userLanguage)) {
            localStorage.language = 'ru';
        } else if (userLanguage === 'tr') {
            localStorage.language = 'tr';            
        } else {
            localStorage.language = 'en';
        }
    }
    updateLang();
}

let el = document.getElementsByClassName('category');
if (el.length) {
    el[0].classList.add("active-btn");
    for (let i = 0; i < el.length; i++) {
        el[i].onclick = function() {
            if (el[i].classList.contains('active-btn')) {
                return;
            }
            for (let j = 0; j < el.length; j++) {
                el[j].classList.remove("active-btn");
            }
            el[i].classList.add("active-btn");

            let cat = el[i].getAttribute('project_type');
            let projects = document.querySelectorAll('.portfolio-grid a');
            for (let j = 0; j < projects.length; j++) {
                project_cat = projects[j].getAttribute('project_type');
                if (cat !== 'all' && project_cat !== cat) {
                    projects[j].style.display = 'none';
                } else {
                    projects[j].style.display = '';
                }
            }
        }
    }
}
