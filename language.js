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
            '62': 'Abone Ol',
            // footer bitiş

            //MainServis 

           
                '100': 'Anasayfa',
                '101': 'Hizmetler',
                '102': 'Uzmanlıklar',
                '103': 'Hakkımızda',
                '104': 'İletişime Geç',
                '106': 'Lojistik Ve Finansal Uygulamalar',
                '107': 'İşletmelerin tedarik zinciri verimliliğini artırırken aynı zamanda mali yönetimlerini optimize etmelerine olanak tanır. Bu alanlar, işletmeler için stratejik öneme sahiptir ve operasyonel kararları destekler.',
                '108': 'SAP Hybris E-Commerce',
                '109': 'Kullanıcı dostu arayüzleri ve güçlü entegrasyon özellikleriyle müşteri deneyimini iyileştirirken, işletmelere geniş ölçekte e-ticaret çözümleri sunar. Güvenilir altyapısıyla, işletmelerin dijital dönüşüm süreçlerinde etkin rol oynar ve rekabet avantajı sağlar.',
                '110': 'SAP S/4HANA Conversion',
                '111': 'işletmelerin eski SAP ERP sistemlerini modern ve daha yenilikçi bir yapı olan SAP S/4HANA\'ya geçiş sürecini ifade eder. Bu dönüşüm, işletmelerin operasyonel verimliliği artırmasına, iş süreçlerini optimize etmesine ve gerçek zamanlı veri analizi ile daha hızlı kararlar almasına olanak tanır.',
                '112': 'Diğer Hizmetlerimiz ',
                '113': 'SAP İş Analitikleri <br>SAP Customer <br> Activity RepositoryForecast and Replenishment <br> SAP Fiori <br> SAP ABAP <br>SAP Workflow',
                '114': 'Müşteri',
                '115': 'Proje',
                '116': 'Sektör',
                '117': 'Mobil Hizmetimiz',
                '118': ' SAP Mobile Apps',
                '119': 'Mobil cihazlar için geliştirilen SAP uygulamalarını içerir. İş süreçlerini mobil olarak yönetmeyi ve kullanıcıların erişimini kolaylaştırmayı amaçlar.',
                '120': 'İletişime Geç',
                '121': 'Endüstriyel Çözümlerimiz',
                '122': 'IS-A-VMS',
                '123': 'SAP\'nin endüstriyel çözümlerinden biridir ve İş Zeka ve Değerli Müşteri Yönetimi Sistemleri olarak da bilinir. Bu uygulamalar, işletmelerin veri yönetimini optimize etmelerine ve müşteri ilişkilerini geliştirmelerine olanak tanır.',
                '124': 'İletişime Geç',
                '125': 'Projenizi hayata mı geçirmek istiyorsunuz?',
                '126': 'Bizimle iletişime geçin! Deneyimli ekibimiz, yenilikçi ve özelleştirilmiş yazılım çözümleri sunar. Fikirlerinizi gerçeğe dönüştürmek ve işinizi bir sonraki seviyeye taşımak için buradayız. Gelin, birlikte harika işler başaralım!',
                '127': 'İletişime Geç',
                '128': 'Sayfalar',
                '129': 'Anasayfa',
                '130': 'Hakkımızda',
                '131': 'Uzmanlıklar',
                '132': 'İletişim',
                '133': 'Hizmetler',
                '134': 'Süreç Ve Uygulama Danışmanlığı',
                '135': 'Proje Yönetimi',
                '136': 'Destek Hizmetleri',
                '137': 'Arteis Çözümler',
                '138': 'Haber Bülteni',
                '139': 'Haber Bültenimize kayıt olmak için E-mail adresinizi yazabilirsiniz',
                '140': 'Abone Ol',
                '201':'Bizimle İletişime Geçin',
             '202':'Arteis Bilişim Limited Şirketi',
             '203':'İletişim Bilgilerimiz',
             '204':'Bize Ulaşmak İçin Formu Kullanın',
             '205':'Formu doldurun, ekibimiz en geç 24 saat içinde size geri dönecektir.',
             '206':'Gönder',
             '207':'Sıkça Sorulan Sorular',
             '208':'Temel Bilgi ve Sıkça Sorulan Soruların Kapsamlı İncelemesi ve Detaylı Cevapları',
             '209':'Projelerinizdeki iş teslim süreleri ne kadar sürer?',
             '210':'Proje büyüklüğüne ve karmaşıklığına bağlı olarak değişkenlik göstermekle birlikte, genellikle zamanında teslimat sağlamak için titizlikle çalışıyoruz.',
             '211':'Ürün veya hizmetinizin ana odak noktası nedir?',
             '212':'Firmamız, özellikle özelleştirilmiş yazılım çözümleri ve dijital platformlar geliştirmeye odaklanmaktadır. Müşterilerimizin ihtiyaçlarına yönelik özelleştirilmiş çözümler sunarak onların iş süreçlerini optimize etmeyi hedefliyoruz.',
             '213':'Yazılım geliştirme süreciniz nasıl işliyor?',
             '214':'Yazılım geliştirme sürecimiz, ihtiyaç analizi ve tasarım aşamasından başlayarak, geliştirme, test ve son kullanıcı geri bildirimiyle devam eden aşamalardan oluşur. Sürekli iletişim halinde olduğumuz müşterilerimizin geri bildirimlerine dayalı olarak süreci şekillendiriyoruz.',
             '215':'Destek hizmetleriniz neleri kapsıyor?',
             '216':'Yazılımımızı kullanırken her türlü teknik destek ve güncelleme sağlıyoruz. Ayrıca, kullanıcı eğitimi ve danışmanlık hizmetleri de sunuyoruz.',
             '217':'Müşteri memnuniyetini nasıl ölçüyorsunuz?',
             '218':'Müşteri geri bildirimleriyle sürekli olarak müşteri memnuniyetini değerlendiriyoruz. Ayrıca proje sonrası değerlendirme toplantıları ve anketlerle de müşteri memnuniyetini ölçüyoruz.',
             '219':'Firmanızın sahip olduğu teknoloji ve altyapı hakkında bilgi verebilir misiniz?',
             '220':'Güçlü bir teknik altyapıya sahibiz ve projelerimizde kullanılan en son teknolojileri takip ediyoruz. Gelişmiş yazılım dilleri, frameworkler ve veri tabanı yönetim sistemleri kullanarak güvenilir ve ölçeklenebilir çözümler sunuyoruz.',
           

          
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
            '61': 'You can enter your email address to subscribe to our newsletter.',
            '62': 'Subscribe',
             // footer

                '100': 'Homepage',
                '101': 'Services',
                '102': 'Expertise',
                '103': 'About Us',
                '104': 'Contact Us',
                '106': 'Logistics and Financial Applications',
                '107': 'Enhances supply chain efficiency for businesses while optimizing their financial management. These areas are strategically important for businesses and support operational decision-making.',
                '108': 'SAP Hybris E-Commerce',
                '109': 'Improves customer experience with user-friendly interfaces and robust integration capabilities, offering extensive e-commerce solutions to businesses. With its reliable infrastructure, it plays a crucial role in businesses\' digital transformation processes and provides a competitive advantage.',
                '110': 'SAP S/4HANA Conversion',
                '111': 'Refers to the transition of businesses\' old SAP ERP systems to SAP S/4HANA, a more innovative and modern structure. This transformation enables businesses to enhance operational efficiency, optimize business processes, and make faster decisions with real-time data analysis.',
                '112': 'Other Services',
                '113': 'SAP Business Analytics,  SAP Customer  Activity Repository,  Forecast and Replenishment,  SAP Fiori,  SAP ABAP, SAP Workflow.',
                '114': 'Clients',
                '115': 'Projects',
                '116': 'Industry',
                '117': 'Mobile Services',
                '118': 'SAP Mobile Apps',
                '119': 'Includes SAP applications developed for mobile devices, aiming to manage business processes on mobile and facilitate user access.',
                '120': 'Contact Us',
                '121': 'Industrial Solutions',
                '122': 'IS-A-VMS',
                '123': 'One of SAP\'s industrial solutions, also known as Business Intelligence and Valuable Customer Management Systems. These applications enable businesses to optimize data management and enhance customer relationships.',
                '124': 'Contact Us',
                '125': 'Want to bring your project to life?',
                '126': 'Get in touch with us! Our experienced team provides innovative and customized software solutions. We\'re here to turn your ideas into reality and take your business to the next level. Let\'s achieve great things together!',
                '127': 'Contact Us',
                '201': 'Contact Us',
            '202': 'Arteis Art of Technology',
            '203': 'Our Contact Information',
            '204': 'Use the Form to Reach Us',
            '205': 'Fill out the form, and our team will get back to you within 24 hours.',
            '206': 'Submit',
            '207': 'Frequently Asked Questions',
            '208': 'Comprehensive Review and Detailed Answers to Basic Information and Frequently Asked Questions',
            '209': 'What are the delivery times for your projects?',
            '210': 'Delivery times vary depending on the size and complexity of the project, but we work diligently to ensure timely delivery.',
            '211': 'What is the main focus of your product or service?',
            '212': 'Our company focuses on developing customized software solutions and digital platforms. We aim to optimize our clients business processes by providing tailored solutions that meet their needs.',
            '213': 'How does your software development process work?',
            '214': 'Our software development process starts with needs analysis and design, followed by development, testing, and end-user feedback. We shape the process based on the feedback we receive from our clients through continuous communication.',
            '215': 'What do your support services include?',
            '216': 'We provide technical support and updates while using our software. Additionally, we offer user training and consultancy services.',
            '217': 'How do you measure customer satisfaction?',
            '218': 'We continuously evaluate customer satisfaction through customer feedback. We also measure customer satisfaction through post-project evaluation meetings and surveys.',
            '219': 'Can you provide information about the technology and infrastructure your company uses?',
            '220': 'We have a strong technical infrastructure and keep up with the latest technologies used in our projects. We offer reliable and scalable solutions using advanced programming languages, frameworks, and database management systems.',
               
            
            

















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
