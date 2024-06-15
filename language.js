$(document).ready(function() {
    var arrLang = {
        'tr': {
            '1': 'Anasayfa',
            '2': 'Hizmetler',
            '3': 'Uzmanlıklar',
            '4': 'Hakkımızda',
            '5': 'İletişime Geç',
            '6': 'Arteis Yenilikçi Yazılım Çözümleriyle İşinizi Geliştirin',
            '7': 'Arteis, yenilikçi yazılım çözümleri sunarak iş süreçlerinizi optimize eder ve rekabet avantajı sağlar. Teknolojiye dayalı çözümlerimizle işinizi geliştirmek için buradayız.',
            '8': 'Arteis Çözümler',
            '9': 'TURKCE TURKCE TURKCE TURKCE TURKCE',
            '10': 'Proje Yönetimi',
            '11': 'TURKCE TURKCE TURKCE TURKCE TURKCE',
            '12': 'Müşteri',
            '13': 'Proje',
            '14': 'Sektör',
            '15': 'Tecrübe',
            '16': 'Şirketimizin Sunduğu Hizmetler',
            '17': 'Arteis olarak, yazılım geliştirme, dijital dönüşüm, veri analitiği ve bulut çözümleri gibi geniş bir yelpazede hizmet sunuyoruz. Müşterilerimize en son teknolojileri kullanarak işlerini daha verimli hale getirmelerinde yardımcı oluyoruz.',
            '18': 'Stratejik Yönetim',
            '19': 'Süreç ve uygulama danışmanlığı, iş süreçlerini analiz edip optimize ederek, yeni uygulamalarla verimliliği artırır, rekabet avantajı sağlar.',
            '20': 'Proje Yönetimi',
            '21': 'Proje yönetimi, hedeflere ulaşmak için planlama, yürütme ve izleme yapar, zaman, bütçe ve kalite standartlarına uygun tamamlanmayı sağlar ve riskleri minimize eder.',
            '22': 'Destek Hizmetleri',
            '23': 'Destek hizmetleri, operasyonların kesintisiz devamını sağlar; teknik yardım, sorun çözme ve müşteri memnuniyetini artırır.',
            '24': 'Arteis Hizmetleri',
            '25': 'Arteis, yazılım çözümleriyle işletmelerin dijital dönüşümünü destekler; yenilikçi yazılım geliştirme, danışmanlık ve proje yönetimi sunar, iş verimliliğini artırır.',
            '26':'Hizmetlerimiz',
            '27':'Arteis, yazılım geliştirme, dijital dönüşüm, veri analitiği ve bulut çözümleri sunar.',
            '28':'Daha Fazla >',
            '29':'İletişim',
            '30':'Bizimle iletişime geçmek için lütfen web sitemizi ziyaret edin veya doğrudan bizimle iletişime geçin.',
            '31':'Daha Fazla >',
            '32':'İş Süreciniz için Teknoloji Lideri',
            '33':'Arteis, yenilikçi yazılım çözümleri sunan bir teknoloji şirketidir. Müşterilerimize işlerini geliştirmeleri için en son teknolojileri ve özelleştirilmiş çözümleri sağlıyoruz.',
            '34':'Güvenilir Çözümler',
            '35':'Geçmiş başarılarımızla kanıtlanmış güvenilir çözümler sunuyoruz, iş süreçlerini optimize etmek ve operasyonel mükemmelliği desteklemek için tasarlanmış.',
            '36':'Yenilikçi Yaklaşım',
            '37':'Teknoloji ve sektör trendlerini takip ederek, müşterilerimize rekabet avantajı sağlayacak yenilikçi çözümler geliştiriyoruz.',
            '38':'Müşteri Memnuniyeti',
            '39':'Müşteri ihtiyaçlarına odaklanarak, işbirliği ve şeffaflık ilkeleriyle özelleştirilmiş çözümler sunuyoruz, uzun vadeli iş ilişkileri kurmayı hedefliyoruz.',
            '40':'"Arteis yazılım çözümleri sayesinde iş süreçlerimiz inanılmaz hızlandı ve verimlilik arttı. Kullanıcı dostu arayüzü ile herkes kolayca adapte oldu. Kesinlikle tavsiye ederim!"',
            '41':'"Arteis, işletmemizin yazılım ihtiyaçlarını tam anlamıyla karşıladı. Teknik destek ekibi her zaman yardımcı ve sorunlara hızlı çözümler buluyor. İşbirliğimizden çok memnunuz."',
            '42':'"Arteis, işletmemizin yazılım ihtiyaçlarını tam anlamıyla karşıladı. Teknik destek ekibi her zaman yardımcı ve sorunlara hızlı çözümler buluyor. İşbirliğimizden çok memnunuz."',
            '43':'Teknolojide Her Zaman Güncel',
            '44':'SAP ERP, SAP S/4HANA Lojistik ve Finansal Uygulamalar',
            '45':'CSAP İş Analitikleri (BI, BO, Hana Embedded Analytics)',
            '46':'SAP Hybris E-Commerce, SAP C/4HANA (B2B, B2C)',
            '47':'Projenizi hayata mı geçirmek istiyorsunuz?',
            '48':'Projenizi hayata geçirmek için bizimle iletişime geçin. Deneyimli ekibimiz ve yenilikçi çözümlerimizle size yardımcı olmaktan memnuniyet duyarız.',
            '49':'İletişime Geç',
            // footer
            '50':'Sayfalar',
            '51':'Anasayfa',
            '52':'Hakkımızda',
            '53':'Uzmanlıklar',
            '54':'İletişim',
            '55':'Hizmetler',
            '56':'Süreç Ve Uygulama Danışmanlığı',
            '57':'Proje Yönetimi',
            '58':'Destek Hizmetleri',
            '59':'Arteis Çözümler',
            '60':'Haber Bülteni',
            '61':'Haber Bültenimize kayıt olmak için E-mail adresinizi yazabilirsiniz',
            // footer bitiş
        },
        'en': {
            '1': 'Home',
            '2': 'Services',
            '3': 'Expertises',
            '4': 'About Us',
            '5': 'Contact Us',
            '6': 'Improve Your Business with Arteis Software Solutions',
            '7': 'Arteis optimizes your business processes and provides a competitive edge through innovative software solutions. We are here to enhance your business with technology-driven solutions.',
            '8': 'Arteis Solutions',
            '9': 'ENGLISH ENGLISH ENGLISH ENGLISH ENGLISH',
            '10': 'Project Management',
            '11': 'ENGLISH ENGLISH ENGLISH ENGLISH ENGLISH',
            '12': 'Customer',
            '13': 'Project',
            '14': 'Sector',
            '15': 'Experience',
            '16': 'Services Offered by Our Company',
            '17': 'At Arteis, we offer a wide range of services including software development, digital transformation, data analytics, and cloud solutions. We assist our clients in making their operations more efficient by utilizing the latest technologies.',
            '18': 'Strategic Management',
            '19': 'Process and application consultancy analyzes and optimizes business processes, enhances efficiency with new applications, and provides a competitive advantage.',
            '20': 'Project Management',
            '21': 'Project management involves planning, executing, and monitoring to achieve goals, ensuring completion in accordance with time, budget, and quality standards, while minimizing risks.',
            '22': 'Support Services',
            '23': 'Support services ensure uninterrupted operation of operations; enhance technical assistance, troubleshooting, and customer satisfaction.',
            '24': 'Arteis Services',
            '25': 'Arteis supports the digital transformation of businesses with software solutions; offers innovative software development, consultancy and project management, and increases business productivity.',
            '26': 'Our Services',
            '27': 'Arteis offers software development, digital transformation, data analytics, and cloud solutions.',
            '28': 'Learn More >',
            '29': 'Contact',
            '30': 'Please visit our website or contact us directly to get in touch with us.',
            '31': 'Learn More >',
            '32': 'Technology Leader for Your Business Processes',
            '33': 'Arteis is a technology company providing innovative software solutions. We provide our clients with the latest technologies and customized solutions to enhance their businesses.',
            '34': 'Reliable Solutions',
            '35': 'We offer proven reliable solutions with past successes, designed to optimize business processes and support operational excellence.',
            '36': 'Innovative Approach',
            '37': 'By keeping up with technology and industry trends, we develop innovative solutions that provide our clients with a competitive advantage.',
            '38': 'Customer Satisfaction',
            '39': 'Focusing on customer needs, we provide customized solutions with collaboration and transparency principles, aiming to build long-term business relationships.',
            '40': '"Thanks to Arteis software solutions, our business processes have accelerated incredibly and productivity has increased. Everyone easily adapted to the user-friendly interface. I definitely recommend it!"',
            '41': '"Arteis fully met our business software needs. The technical support team is always helpful and finds quick solutions to problems. We are very satisfied with our collaboration."',
            '42': '"Arteis fully met our business software needs. The technical support team is always helpful and finds quick solutions to problems. We are very satisfied with our collaboration."',
            '43': 'Always Up-to-Date in Technology',
            '44': 'SAP ERP, SAP S/4HANA Logistics and Financial Applications',
            '45': 'SAP Business Analytics (BI, BO, Hana Embedded Analytics)',
            '46': 'SAP Hybris E-Commerce, SAP C/4HANA (B2B, B2C)',
            '47': 'Do you want to bring your project to life?',
            '48': 'Contact us to bring your project to life. Our experienced team and innovative solutions are here to help you.',
            '49': 'Contact Us',
             // footer
            '50': 'Pages',
            '51': 'Home',
            '52': 'About Us',
            '53': 'Expertise',
            '54': 'Contact',
            '55': 'Services',
            '56': 'Process and Application Consulting',
            '57': 'Project Management',
            '58': 'Support Services',
            '59': 'Arteis Solutions',
            '60': 'Newsletter',
            '61': 'You can enter your email address to subscribe to our newsletter.'
             // footer
        },
    };

    // Dil butonlarına tıklama olaylarını ekleyin
    $('#btn-tr').click(function() {
        setLanguage('tr');
    });

    $('#btn-en').click(function() {
        setLanguage('en');
    });

    // LocalStorage'dan dili al ve uygula
    var lang = JSON.parse(localStorage.getItem('dil')) || 'en'; // Varsayılan dil: İngilizce
    setLanguage(lang);

    function setLanguage(lang) {
        localStorage.setItem('dil', JSON.stringify(lang));
        $('a,h5,p,h1,h2,span,li,button,h3,label').each(function(index, element) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    }
});
