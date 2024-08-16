$(document).ready(function() {
    var arrLang = {
        'tr': {
            '1': 'Anasayfa',
            '2': 'Hizmetler',
            '3': 'Sosyal',
            '4': 'Hakkımızda',
            '5': 'İletişime Geç',
            '6': 'Arteis ile Güçlü ve Parlak Bir Gelecek İnşa Edin',
            '7': 'SAP Perakende Ürünlerinde Uzman Kadromuzla Büyüme ve Yeniliğe Yön Verin. Uzman ekibimizle sorunsuz entegrasyon, optimizasyon ve başarıya ulaşın. Arteis farkını bugün yaşayın."',
            '8': 'Arteis Çözümler',
            '9': 'Güçlü Çözümler, İnovatif Gelecek',
            '10': 'Proje Yönetimi',
            '11': 'Proje Yönetiminde Güvenilir Adres',
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
            '41':'"Yazılım şirketinizin sunduğu yenilikçi çözümler ve mükemmel müşteri odaklı hizmetiniz gerçekten etkileyici. Teknoloji alanında liderliğinizi sürdürmenizden dolayı takdir ediyorum."',
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
            '53':'sosyal',
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
                '102': 'sosyal',
                '103': 'Hakkımızda',
                '104': 'İletişime Geç',
                '106': 'Lojistik Ve Finansal Uygulamalar',
                '107': 'İşletmelerin tedarik zinciri verimliliğini artırırken aynı zamanda mali yönetimlerini optimize etmelerine olanak tanır. Bu alanlar, işletmeler için stratejik öneme sahiptir ve operasyonel kararları destekler.',
                '108': 'SAP Hybris E-Commerce',
                '109': 'Kullanıcı dostu arayüzleri ve güçlü entegrasyon özellikleriyle müşteri deneyimini iyileştirirken, işletmelere geniş ölçekte e-ticaret çözümleri sunar. Güvenilir altyapısıyla, işletmelerin dijital dönüşüm süreçlerinde etkin rol oynar ve rekabet avantajı sağlar.',
                '110': 'SAP S/4HANA Conversion',
                '111': 'işletmelerin eski SAP ERP sistemlerini modern ve daha yenilikçi bir yapı olan SAP S/4HANA\'ya geçiş sürecini ifade eder. Bu dönüşüm, işletmelerin operasyonel verimliliği artırmasına, iş süreçlerini optimize etmesine ve gerçek zamanlı veri analizi ile daha hızlı kararlar almasına olanak tanır.',
                '112': 'Diğer Hizmetlerimiz ',
                '113': 'SAP İş Analitikleri, SAP Customer Activity Repository, Forecast and Replenishment,  SAP Fiori,  SAP ABAP, SAP Workflow',
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
                '131': 'sosyal',
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
           
             
                '300': 'Hakkımızda',
                '301': 'Biz kimiz ve Nasıl Çözümler Sağlıyoruz?',
                '302': 'ARTEIS BİLİŞİM, SAP ürünleri ve uygulama alanlarında uçtan uca çözüm sağlamak amacıyla, alanlarında 13+ tecrübe yılına sahip uzman danışmanlar tarafından kurulmuştur.',
                '303': 'Yenilikçi Yazılım Çözümlerinde Arteis Farkı',
                '304': 'Arteis, yenilikçi yazılım çözümleri sunan ve teknolojiye öncülük eden bir yazılım şirketidir. 2015 yılında bir grup tutkulu yazılım mühendisi ve teknoloji meraklısı tarafından kurulan Arteis, kısa sürede sektörde kendine sağlam bir yer edinmiş ve sayısız başarılı projeye imza atmıştır.',
                '305': 'Müşteri',
                '306': 'Proje',
                '307': 'Tecrübe',
                '308': 'Yazılım Şirketimizin Sunduğu Üstün Hizmetler',
                '309': 'Hızlı ve güvenilir yazılım çözümleri sunar.',
                '310': 'Müşteri odaklı ve yenilikçi projeler geliştirir',
                '311': 'En son teknolojilerle yüksek verimlilik sağlar',
                '312': 'İletişime Geç',
                '313': 'Teknolojiyi Yeniden Keşfedin',
                '314': 'Sürekli gelişen teknolojiyi öncülüyoruz. İş süreçlerinizi optimize edip rekabet avantajı sağlıyoruz. Detaylı bilgi için bize ulaşın veya web sitemizi ziyaret edin.',
                '315': 'Ekibimizle Tanışın',
                '316': 'Arteis ekibi, teknolojiye tutkulu profesyonellerden oluşur. İşinizi geliştirmenize nasıl yardımcı olabileceğimizi keşfedin',
                '400': 'Daha Fazla',
            
            '500':'Servisler',
            '501':'Süreç ve Uygulamalar',
            '502':'İşletmenizin verimliliğini ve etkinliğini artırmak için özelleştirilmiş yazılım süreçleri ve uygulamaları sunuyoruz.',



            //social
            '601':'Sosyal',
            '602':'Yaratıcı ve Yenilikçi Çözümler',
            '603':'İşletmenizi bir adım öne taşıyan sosyal projelerimizi burada keşfedin. Dijital dünyada iz bırakmak için geliştirdiğimiz yenilikçi çözümlerle tanışın',
            '604':'Arteis ile Başarınızı Yakalayın: SAP Uzmanlarınız Sizi Bekliyor!',
            '605':'Arteis ile perakende geleceğinizi güçlendirin: SAP perakende ürünleri konusunda uzman ekibimizle büyümeyi ve yeniliği artırın. Uzman ekibimizle sorunsuz bir şekilde entegre edin, optimize edin ve başarılı olun.',
            '606':'Bugün Arteis avantajını deneyimleyin',
            '607':'Daha Fazla',
            '608':"📣 Getir RISE with SAP projesi yayında...Arteis, SAP Türkiye’nin taşeronu olarak sorumluluğunu üstlendiğimiz Getir projesinin, RISE with SAP projesi kapsamında Perakende süreçleriyle ilgili olduğunu duyurmaktan gurur duyar.Türkiye'nin önde gelen ve en büyük ERP Dönüşüm projelerinden biri geçtiğimiz aylarda devreye alındı ve devreye alma sonrası adaptasyon süreci başarıyla ilerliyor. 15 aylık kısa bir sürede uçtan uca Perakende modülü süreçlerinin uygulanması da bu başarının bir göstergesidir.Arteis olarak, bu büyük projeye katkıda bulunan tüm hashtag#Getir, hashtag#SAPTürkiye ve hashtag#Arteis ekip arkadaşlarımıza içten teşekkürlerimizi sunuyoruz. Azminiz, bilginiz ve işbirliğiniz sayesinde, Getir projesi, her bir paydaşı ile Türkiye'nin dijital dönüşümüne önemli bir katkı sağlamıştır. Arteis olarak, bu başarının tam güvenle devam edeceğine inanıyoruz.",
            '609':"Karaca & Golive, RISE with SAP Projesiyle İz Bırakıyor!Karaca ile sektörün ilk kapsamlı RISE with SAP projesini tamamlamadaki başarımızı paylaşmaktan gurur duyuyoruz.Jumbo, Emsan ve Homend gibi markaları da bünyesinde barındıran Karaca'nın 2030 vizyonu ve büyüme stratejisine hizmet etmek amacıyla başlatılan dönüşüm projesi kapsamında, SAP'nin en yeni bulut ve sektörel çözümlerini kullanarak başarılı bir proje gerçekleştirdik.SAP'nin perakende çözüm ailesinden, lojistik çözümlerinden, gelişmiş finansal çözümlerinden ve insan kaynakları uygulamalarından oluşan proje, tüm ekiplerin özverili çalışmaları sayesinde 1,5 yıl içinde tamamlandı.Perakende çözümlerindeki destekleri için hashtag#arteis ekibine, finansal taraftaki destekleri için conforcus ekibine ve taşeron olarak görev yapan tüm paydaşlara teşekkür ederiz. Karaca ile iz bırakan daha nice projelere!",
            '610':"🎉 Başarıyla Tamamlanan Bir Projenin Duyurusu! 🎉Arteis olarak, Zorluteks SAP CAR UDF (Customer Activity Repository Unified Data Foundation) projesini başarıyla tamamladığımızı gururla duyuruyoruz!Bu projenin tamamlanmasından elde edilen önemli başarılar:✅ Mükemmel ekip çalışmasıyla proje hedeflerine başarılı bir şekilde ulaşılması✅ Yüksek kalite standartlarına uyum ve başarılı test sonuçları✅ Yenilikçi çözümlerle müşteri veri entegrasyonu ve analizinde önemli gelişmeler✅ Güçlü işbirlikleri ile daha sağlam proje teslimiProjemizin getirdiği yenilikler:📊 Gelişmiş Veri Analitiği ve Raporlama: Yeni analitik araçlar ve geliştirilmiş raporlama özellikleri, daha hızlı ve doğru iş kararları alınmasını sağlıyor.🔒 Envanter Optimizasyonu: UDF'nin geçmiş satış verilerinden yararlanarak, mevsimsellik, fiyat değişiklikleri ve kampanyalar gibi faktörleri analiz eden sistem, fazla stoklama veya eksik stoklama durumlarını azaltarak optimum envanter seviyelerini sağlıyor.📈 Gerçek Zamanlı Veri İşleme: Gerçek zamanlı veri aktarımları, güncel bilgilere dayalı tahminler yaparak son derece doğru satış tahminleri sağlıyor.💯 Müşteri Memnuniyeti: Müşteri ihtiyaçlarını dikkate alarak doğru tahminlerle satış kayıplarını azaltan proje, müşteri memnuniyetini artırmayı hedefliyor.👥 Kullanıcı Dostu, Modern ve Sezgisel Arayüz: Modern ve sezgisel bir arayüz tasarımı, kullanıcı deneyimini geliştirerek, sistemde gezinmeyi ve gerekli bilgilere hızlıca erişmeyi kolaylaştırıyor.🔄 Yüksek Performans ve Ölçeklenebilirlik: Sistem, büyük veri hacimlerini işleyebilecek şekilde optimize edilmiştir ve gelecekteki büyüme ihtiyaçlarını karşılayacak şekilde tasarlanmıştır.",

            '800': "Teşekkürler",
            '801': "Aboneliğiniz başarıyla alındı",
            '802': 'tamam'





        },
        'en': {
            '1': 'Home',
            '2': 'Services',
            '3': 'Social',
            '4': 'About Us',
            '5': 'Contact Us',
            '6': 'Empower Your Retail Future with Arteis',
            '7': 'SAP Retail Products Specialists Driving Growth and Innovation. Seamlessly integrate, optimize, and excel with our expert team. Experience the Arteis advantage today.',
            '8': 'Arteis Solutions',
            '9': 'Strong Solutions, Innovative Future',
            '10': 'Project Management',
            '11': 'A Trusted Address in Project Management',
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
            '41': '"Your software companys innovative solutions and excellent customer-centric service are truly impressive. I appreciate your continued leadership in the technology field."',
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
            '53': 'Social',
            '54': 'Contact',
            '55': 'Services',
            '56': 'Process and Application Consulting',
            '57': 'Project Management',
            '58': 'Support Services',
            '59': 'Arteis Solutions',
            '60': 'News',
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
               
            
            
            
                '300': 'About Us',
                '301': 'Who We Are and How We Provide Solutions?',
                '302': 'ARTEIS IT was founded by expert consultants with over 13 years of experience in providing end-to-end solutions in SAP products and application areas.',
                '303': 'The Arteis Difference in Innovative Software Solutions',
                '304': 'Arteis is a software company that provides innovative software solutions and leads in technology. Founded in 2015 by a group of passionate software engineers and technology enthusiasts, Arteis has quickly established a solid position in the industry and has successfully completed numerous projects.',
                '305': 'Customers',
                '306': 'Projects',
                '307': 'Experience',
                '308': 'Superior Services Offered by Our Software Company',
                '309': 'Provides fast and reliable software solutions.',
                '310': 'Develops customer-focused and innovative projects.',
                '311': 'Ensures high efficiency with the latest technologies.',
                '312': 'Contact Us',
                '313': 'Rediscover Technology',
                '314': 'We lead the constantly evolving technology. We optimize your business processes and provide competitive advantage. Contact us for detailed information or visit our website.',
                '315': 'Meet Our Team',
                '316': 'The Arteis team consists of passionate professionals dedicated to technology. Discover how we can help you improve your business.',
                 '400': 'More',
            
            




            '500': 'Services',
            '501': 'Processes and Applications',
            '502': 'We offer customized software processes and applications to enhance the productivity and efficiency of your business.',



            //sosyal

            '601':'Social',
            '602':'Creative and Innovative Solutions',
            '603':'Discover our social projects that take your business one step ahead. Get to know the innovative solutions we’ve developed to make a mark in the digital world.',
            '604':'Unlock Retail Success with Arteis: Your SAP Experts Await!',
            '605':'Empower your retail future with Arteis: SAP retail products specialists driving growth and innovation. Seamlessly integrate, optimise, and excel with our expert team.',
            '606':'Experience the Arteis advantage today',
            '607':'Learn More',
            '608':"📣 Getir RISE with SAP project is live... Arteis proud to announce that Getir project, for which we took responsibility for Retail processes as a subcontractor of SAP Turkey, within the scope of the RISE with SAP project. One of Turkeys leading and largest ERP Transformation projects went live in recent months and the post-go-live adaptation process has been successfully progressing.The implementation of end-to-end Retail module processes in a short period of 15 months is also an indicator of this success.Arteis would like to sincerely express gratitude to all teammates of hashtag#Getir, hashtag#SAPTurkey, and hashtag#Arteis who contributed to this great work.Thanks to your determination, knowledge, and collaboration.Getir project has made a significant contribution to Turkey's digital transformation with each of its stakeholders.Arteis is fully confident that will ",
            '609':"Karaca & Golive Leave Their Mark with RISE with SAP Project! We are proud to share our success with Karaca in completing the industry's first comprehensive RISE with SAP project. As part of a transformation project initiated to serve Karaca's 2030 vision and growth strategy, which includes brands such as Jumbo, Emsan, and Homend, we have successfully implemented a project using SAP's latest cloud and industry solutions.The project, which includes applications from SAP's retail solution family, logistics solutions, advanced financial solutions, and human resources applications, was completed in 1.5 years thanks to the dedicated efforts of all teams.We want to thank all stakeholders who contributed to the successful completion of this project, including the hashtag#arteis team for their support in retail solutions, the conforcus team for their support on the financial side, and all stakeholders who served as subcontractors. To more projects that leave a mark with Karaca!",
            '610':"🎉 Announcement of a Successfully Completed Project! 🎉We are proud to announce that we, at Arteis, have successfully completed the Zorluteks SAP CAR UDF (Customer Activity Repository Unified Data Foundation) project!Key achievements from the completion of this project include: ✅ Successful attainment of project goals through excellent teamwork ✅ Adherence to high-quality standards and successful test results ✅ Significant advancements in customer data integration and analytics with innovative solutions ✅ Stronger project delivery through powerful collaborationsInnovations brought by our project: 📊 Advanced Data Analytics and Reporting: New analytical tools and enhanced reporting features enable faster and more accurate business decision-making. 🔒 Inventory Optimization: Leveraging UDF’s historical sales data, the system reduces instances of overstocking or understocking by analyzing factors like seasonality, price changes, and campaigns, ensuring optimal inventory levels. 📈 Real-Time Data Processing: Real-time data transfers provide highly accurate sales forecasts by enabling predictions based on up-to-date information. 💯 Customer Satisfaction: By reducing sales losses with accurate forecasting that considers customer needs, the project aims to enhance customer satisfaction. 👥 User-Friendly, Modern, and Intuitive Interface: A modern and intuitive interface design enhances user experience, making it easier and faster for users to navigate the system and quickly access the information they need. 🔄 High Performance and Scalability: The system is optimized to handle large volumes of data and is designed to meet future growth needs.",

            '800': "Thank you",
            '801': "Your subscription was successful",
            '802': 'Ok'









        },
    };+

    
















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
