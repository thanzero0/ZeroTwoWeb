import Link from 'next/link';

export default function Story() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">
        <Link href="/" className="inline-block mb-8 text-zinc-600 hover:text-zinc-900 transition-colors">
          ← Kembali
        </Link>
        <h1 className="text-4xl md:text-5xl font-light text-zinc-900">Story</h1>

        {/* Dunia Distopia */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-4">
          <h2 className="text-3xl font-semibold text-zinc-900 mb-6">Dunia Distopia</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-zinc-900 mb-4">Bagian 1: Dunia dan Asal Usul yang Gelap</h3>
              <p>
                Dunia tempat Zero Two hidup telah lama kehilangan warna kemanusiaannya. Manusia bertahan hidup di dalam
                kota-kota benteng bernama "Plantation," terlindung oleh kubah raksasa. Di luar, bumi tandus, dipenuhi sisa-sisa
                peradaban lama dan ancaman konstan: Klaxosaur, makhluk raksasa misterius yang mengincar sumber daya manusia.
              </p>
              <p>
                Untuk melawan ancaman ini, para dewasa menciptakan sistem bernama "APPE". Anak-anak tidak dilahirkan secara alami,
                namun "diproduksi" untuk menjadi pilot Franxx—robot tempur yang dikendalikan oleh sepasang remaja, seorang "stamen"
                (laki-laki) dan "pistil" (perempuan). Mereka dibesarkan tanpa pengetahuan tentang keluarga, cinta, atau kehidupan
                normal. Identitas mereka hanyalah kode angka. Masa depan mereka sudah ditentukan: bertarung, dan jika beruntung, mati
                dengan terhormat sebelum tubuh mereka terkikis oleh tugas mereka.
              </p>
              <p>
                Di tengah sistem yang dingin inilah Zero Two muncul. Dia bukanlah "anak" biasa. Zero Two adalah hibrida
                manusia-Klaxosaur, hasil eksperimen genetika yang keji. Disebut sebagai "Partner Killer," karena para stamen yang
                pernah menjadi pasangannya selalu mati setelah tiga kali penyatuan. Darah Klaxosaur-nya yang biru dan tanduk merah di
                kepalanya adalah tanda kutukan sekaligus kekuatannya. Dia dipandang sebagai monster, senjata, dan simbol ketakutan.
                Kehidupannya adalah rangkaian eksperimen, pertempuran, dan isolasi.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-zinc-900 mb-4">Bagian 2: Pertemuan yang Mengubah Takdir</h3>
              <p>
                Suatu hari, dalam sebuah latihan, Zero Two bertemu dengan seorang bocah laki-laki yang penuh semangat namun canggung:
                Hiro. Yang mengejutkan, Hiro menyebutnya dengan panggilan yang tak pernah didengarnya: "manusia". Bahkan lebih
                mengejutkan lagi, Hiro bisa bertahan setelah menyentuh darah birunya tanpa mati. Namun, pertemuan singkat itu
                berakhir dengan paksa, dan ingatan Hiro tentang Zero Two dihapus.
              </p>
              <p>
                Bertahun kemudian, Hiro, yang kini gagal menjadi pilot karena tidak dapat berpasangan dengan pistil mana pun,
                menemukan Zero Two kembali. Zero Two, yang melarikan diri dari fasilitas penelitian, membutuhkan stamen baru untuk
                pilot Franxx miliknya, Strelizia. Dalam keputusasaan dan rasa penasaran yang mendalam, Hiro setuju menjadi
                pasangannya. Saat mereka berhasil menyinkronkan, sebuah kata meluncur dari bibir Zero Two: "Darling."
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-zinc-900 mb-4">Bagian 3: Kebersamaan dan Pencarian Jati Diri</h3>
              <p>
                Bersama Hiro, Zero Two bergabung dengan Skuadron 13, sekelompok pilot muda yang, meski masih terikat sistem, mulai
                menunjukkan "cacat" seperti emosi dan rasa penasaran. Melalui interaksi dengan mereka—terutama Ichigo, Goro, dan yang
                lain—Zero Two perlahan mulai belajar tentang "kemanusiaan": makan bersama, bertengkar, bercanda, dan memiliki
                "teman". Hubungannya dengan Hiro menjadi porosnya. Bagi Zero Two, Hiro adalah "Darling"-nya, kunci untuk menjadi
                manusia seutuhnya. Dia percaya dengan memakan cukup banyak Klaxosaur (melalui pertempuran) dan bertahan bersama Hiro,
                dia akan sepenuhnya menjadi manusia dan bisa bersama "Darling"-nya selamanya.
              </p>
              <p>
                Namun, sifat monster dalam dirinya perlahan muncul. Tanduknya tumbuh, sifatnya menjadi lebih liar, dan dia semakin
                terobsesi dengan pertempuran. Hiro, yang mulai merasakan ikatan yang dalam padanya, bertekad untuk memahami dan
                menyelamatkannya, meski harus mempertaruhkan nyawanya sendiri.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-zinc-900 mb-4">Bagian 4: Tragedi, Kebenaran, dan Pengorbanan</h3>
              <p>
                Puncaknya terjadi ketika kebenaran kelam terungkap. Zero Two mengetahui bahwa "Darling" masa kecilnya yang selalu dia
                cari adalah Hiro sendiri. Kenangan yang dihapus itu adalah kunci. Namun, obsesinya untuk menjadi manusia justru
                membuatnya hampir menghabiskan nyawa Hiro dalam pertempuran, karena dia mengira dengan menjadi manusia, dia bisa
                layak untuk "Darling" yang diingatnya. Dia menyadari kesalahannya yang fatal: Hiro telah menerimanya apa adanya sejak
                awal, monster atau bukan.
              </p>
              <p>
                Dalam keadaan putus asa dan penuh penyesalan, Zero Two memutuskan untuk melawan takdirnya sendiri. Dia mengarahkan
                Strelizia untuk menghadapi musuh terbesar, bukan untuk menjadi manusia, tetapi untuk melindungi Hiro dan
                teman-temannya. Dalam pertempuran final, dia dan Hiro bersatu bukan hanya sebagai pilot, tetapi sebagai dua jiwa yang
                saling melengkapi, menerima satu sama lain sepenuhnya.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-zinc-900 mb-4">Bagian 5: Akhir dan Warisan</h3>
              <p>
                Pengorbanan terbesar mereka mengubah segalanya. Dunia lama yang distopis mulai runtuh. Zero Two dan Hiro, dalam
                wujud yang melampaui manusia biasa, memastikan masa depan bagi teman-temannya. Meski tubuh fisik mereka mungkin
                hilang, jiwa mereka tetap terhubung.
              </p>
              <p>
                Warisan Zero Two abadi. Dia yang awalnya adalah simbol monster dan alat perang, menjadi simbol cinta, penerimaan, dan
                pemberontakan terhadap takdir. Berkat perjuangannya, anggota Skuadron 13 dan generasi setelahnya bisa hidup di dunia
                yang bebas, merasakan cinta, memiliki keluarga, dan menulis kisah mereka sendiri—segala hal yang pernah diimpikan Zero
                Two untuk dirinya dan "Darling"-nya.
              </p>
              <p>
                Rangkaian cerita Zero Two adalah perjalanan dari "benda" menjadi "manusia", dari monster menjadi pahlawan, dan dari
                kesendirian absolut menuju cinta yang melampaui segalanya.
              </p>
            </div>
          </div>
        </section>

        {/* Bukan Manusia Seutuhnya */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-4 border-t border-zinc-200 pt-16">
          <h2 className="text-3xl font-semibold text-zinc-900 mb-6">Bukan Manusia Seutuhnya</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-zinc-900 mb-4">Bagian 1: Kandang yang Diberi Nama</h3>
              <p>
                Sel selama bertahun-tahun bukanlah dinding yang dingin, melainkan ruang observasi steril berlapis kaca tebal. 
                Di situlah "dia" tumbuh. Para ilmuwan menyebutnya dengan kode: "Zero Two". Bagi mereka, dia adalah fenomena, 
                sebuah spesimen, kunci untuk memahami Klaxosaurus dan senjata potensial. Sejak kecil, tubuhnya dipantau setiap 
                detik, darah birunya diambil sampelnya berkali-kali, dan tanduk merah kecilnya yang mulai tumbuh diukur dengan 
                teliti. Dia tidak pernah merasakan pelukan, hanya sentuhan sarung tangan lateks. Suara yang didengarnya bukan 
                lagu pengantar tidur, tetapi diskusi analitis tentang daya tahan fisiknya, kadar APEX dalam darahnya, dan potensi 
                bahayanya. Mereka mengajarinya bahasa, tetapi hanya untuk memahami perintah dan laporan. Mereka memberinya makan 
                makanan bergizi, tetapi seperti memberi bahan bakar pada mesin. Dalam cermin satu arah ruang observasi itu, 
                Zero Two belajar satu hal: bahwa dirinya adalah "bukan manusia". Dia adalah monster yang berguna, dan nilai 
                satu-satunya terletak pada kemampuannya yang aneh.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-zinc-900 mb-4">Bagian 2: Kebencian yang Menjadi Pelindung</h3>
              <p>
                Perlakuan sebagai benda membentuk kepribadiannya seperti besi yang ditempa. Zero Two kecil sempat meraih tangan 
                seorang penjaga yang tanpa sarung tangan, matanya polos penuh harapan. Tanggapan yang didapatnya adalah ketakutan 
                dan pukulan. Darah biru yang menetes dari bibirnya membuat penjaga itu semakin histeris, berteriak "monster!". 
                Sejak saat itu, senyuman nakal muncul di bibirnya. Jika mereka menganggapnya monster, dia akan memainkan peran 
                itu. Dia mengintimidasi para peneliti dengan tatapan hijau tajamnya, terkadang dengan sengaja melukai diri sendiri 
                hanya untuk melihat mereka panik karena kehilangan "spesimen berharga". Kebencian menjadi tamengnya, kesendirian 
                menjadi bentengnya. Dia menyadari bahwa selama dia ditakuti, tidak ada yang bisa menyentuhnya dengan mudah. Rasa 
                sakit karena diasingkan berubah menjadi kesombongan yang dingin. Di matanya yang hijau, tidak ada lagi kehangatan 
                manusia, hanya sikap acuh tak acuh dan cemoohan terhadap dunia yang menolaknya. Baginya, manusia sama eksploitatifnya 
                dengan Klaxosaurus, atau bahkan lebih.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-zinc-900 mb-4">Bagian 3: Identitas sebagai "Pembunuh"</h3>
              <p>
                Ketika tubuhnya mulai dewasa, nilai militernya benar-benar tereksploitasi. Mereka memberinya sebuah Franxx—robot 
                raksasa yang hanya bisa dijalankan oleh pasangan pria-wanita. Namun, Zero Two berbeda. Karena darah Klaxosaur-nya, 
                dia bisa mengendalikan mesin itu sendirian, atau lebih tepatnya, dengan "mengonsumsi" pasangannya. Para pilot pria 
                yang dipasangkan dengannya, disebut "stamen", akan habis tenaga hidupnya setelah tiga kali penerbangan dan mati. 
                Berita ini dengan cepat tersebar di pangkalan. Zero Two mendapat julukan baru: "Pembunuh Pasangan". Setiap kali 
                melihat ketakutan dan keputusasaan di mata "pasangan" sementaranya, senyuman di bibir Zero Two semakin lebar, 
                namun hatinya semakin kosong. Setiap kematian itu semakin mengukuhkan takdirnya sebagai monster. Dia tidak lagi 
                berharap untuk dipahami; dunia ini hanyalah tempat berburu. Terbang dan bertarung adalah satu-satunya cara baginya 
                untuk "ada", meskipun itu berarti terus mengukuhkan jalan iblis yang dipaksakan oleh orang lain padanya.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-zinc-900 mb-4">Bagian 4: Mimpi yang Tak Terungkap</h3>
              <p>
                Di balik topeng "pembunuh" yang dingin dan tak tergoyahkan, sebenarnya tersimpan impian yang sangat manusiawi: 
                menjadi manusia seutuhnya. Ini adalah kerinduan terdalam yang bahkan tidak berani diakuinya sendiri. Darah biru 
                dan tanduknya adalah kutukan yang tak terelakkan, tetapi dalam hatinya, ada keinginan untuk dicintai, untuk 
                disentuh dengan hangat tanpa rasa takut, untuk disebut "bukan monster". Dia sering melamun di selnya, menatap 
                langit semu di langit-langit, membayangkan seperti apa rasanya berjalan di bawah matahari yang hangat, tertawa 
                dengan bebas, dan memegang tangan seseorang—tanpa harus merenggut nyawa orang itu. Namun, impian ini cepat 
                digantikan oleh sinisme. Bagaimana mungkin monster menjadi manusia? Itu hanyalah fatamorgana yang naif. 
                Jadi, dia mengubur impiannya sangat dalam, melindunginya dengan duri-duri kebencian, seolah-olah dengan begitu, 
                impian itu tidak akan pernah terluka.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-zinc-900 mb-4">Bagian 5: Pertemuan yang Mengubah Segalanya</h3>
              <p>
                Hingga suatu hari, dia bertemu dengan Hiro, seorang anak laki-laki yang juga ditolak karena tidak bisa menjadi pilot. 
                Berbeda dengan orang lain, Hiro tidak lari ketakutan saat melihat tanduk dan mata anehnya. Dia bahkan berkata, 
                "Akhirnya kutemu kau," seolah-olah telah mencarinya lama. Saat terjadi insiden dan mereka secara tidak sengaja 
                memasuki kokpit Franxx yang sama, keajaiban terjadi. Hiro tidak mati seperti "stamen" sebelumnya; dia bisa bertahan. 
                Di dalam kokpit yang sempit, dengan tubuh mereka terhubung, untuk pertama kalinya Zero Two merasakan "keterhubungan" 
                yang bukan tentang penghancuran, melainkan penyatuan. Tatapan Hiro yang tulus menembus lapisan kebencian dan kesepian 
                yang selama melindunginya. Sebuah getaran yang lama tertahan muncul di hatinya. Mungkinkah ada seseorang yang tidak 
                menganggapnya sebagai monster? Mungkinkah ada seseorang yang melihatnya sebagai "Zero Two", sebagai seorang individu?
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-zinc-900 mb-4">Bagian 6: Perjalanan Mencari Diri</h3>
              <p>
                Pertemuan dengan Hiro menjadi titik balik dalam hidup Zero Two. Keinginannya yang lama terpendam untuk "menjadi manusia" 
                kembali menguat, tetapi kali ini, disertai dengan keberanian yang baru. Dia mulai bertanya-tanya, apakah menjadi manusia 
                berarti kehilangan tanduk dan darah birunya? Ataukah, menjadi manusia adalah tentang memiliki ikatan, memahami cinta, 
                dan memiliki tempat untuk kembali? Bersama Hiro dan Skuadron 13, dia perlahan mengalami kehidupan "manusiawi" yang tidak 
                pernah dia rasakan: makan bersama, bertengkar, melindungi satu sama lain. Dia mulai menyadari bahwa tubuh hibridanya 
                bukanlah satu-satunya penentu identitasnya. Nilai dirinya bukan lagi berasal dari kegunaannya sebagai senjata, 
                melainkan dari keinginannya untuk melindungi orang yang dicintainya. Zero Two perlahan merobek label "monster" yang 
                diberikan dunia padanya, dan dengan berani mengejar identitas barunya: sebagai diri sendiri, sebagai partner Hiro, 
                dan sebagai bagian dari sesuatu yang disebut "keluarga". Perjalanan panjang dari objek menjadi subjek ini penuh dengan 
                rasa sakit dan keraguan, tetapi untuk pertama kalinya, dia tidak berjalan sendirian.
              </p>
            </div>
          </div>
        </section>

        {/* Masa Kecil yang Sepi */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-4 border-t border-zinc-200 pt-16">
          <h2 className="text-3xl font-semibold text-zinc-900 mb-6">Masa Kecil yang Sepi</h2>
          <p>
            Pada masa kecilnya, Zero Two hidup dalam kesepian ekstrem. Ia tidak tahu apa itu kasih sayang. Ia hanya tahu bahwa dirinya berbeda dan dibenci. Semua ini berubah ketika ia bertemu dengan seorang anak laki-laki bernama <strong className="font-medium text-zinc-900">Hiro</strong> saat mereka masih sangat kecil. Hiro tidak takut padanya. Hiro memberinya sebuah buku bergambar tentang dunia luar, tentang burung, tentang langit, dan tentang kebebasan. Untuk pertama kalinya, Zero Two merasa diperlakukan sebagai manusia.
          </p>
          <p>
            Hiro adalah satu-satunya orang yang tidak melihat Zero Two sebagai monster. Dari titik itu, Zero Two membangun seluruh identitas emosionalnya di sekitar Hiro. Ia ingin menjadi manusia agar bisa bersama Hiro. Ia ingin hidup seperti gadis biasa. Ia ingin dicintai.
          </p>
          <p>
            Namun takdir memisahkan mereka. Hiro kemudian kehilangan ingatannya, sementara Zero Two mengingat semuanya. Sejak saat itu, Zero Two hidup dengan satu tujuan obsesif: menemukan kembali Hiro dan menjadi cukup manusia agar pantas berada di sisinya.
          </p>
        </section>

        {/* Partner Killer */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-4 border-t border-zinc-200 pt-16">
          <h2 className="text-3xl font-semibold text-zinc-900 mb-6">Partner Killer</h2>
          <p>
            Dalam dunia Franxx, pilot harus bekerja berpasangan pria dan wanita, dan sinkronisasi emosional mereka menentukan kekuatan robot. Zero Two memiliki kemampuan luar biasa dalam bertarung, tetapi ada harga yang harus dibayar. Siapa pun yang menjadi partner Zero Two akan perlahan mati karena tubuhnya tidak mampu menahan sinkronisasi dengan darah Klaxosaur dalam dirinya. Karena itu, ia dijuluki <strong className="font-medium text-zinc-900">"Partner Killer."</strong>
          </p>
          <p>
            Zero Two tahu ini. Ia tahu orang-orang mati karena dirinya. Tetapi ia tidak peduli. Dalam pikirannya, semua partner selain Hiro hanyalah alat. Ia menggunakan mereka untuk membunuh Klaxosaur agar dirinya semakin dekat dengan evolusi menjadi manusia sejati.
          </p>
        </section>

        {/* Pertemuan Kembali */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-4 border-t border-zinc-200 pt-16">
          <h2 className="text-3xl font-semibold text-zinc-900 mb-6">Pertemuan Kembali</h2>
          <p>
            Saat ia akhirnya bertemu kembali dengan Hiro, takdir kembali bergerak. Hiro adalah satu-satunya orang yang mampu bertahan sebagai partner Zero Two tanpa mati. Hubungan mereka bukan hanya romantis, tetapi bersifat eksistensial. Hiro memberi Zero Two identitas sebagai manusia. Zero Two memberi Hiro tujuan hidup.
          </p>
        </section>

        {/* Kepribadian yang Kontras */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-4 border-t border-zinc-200 pt-16">
          <h2 className="text-3xl font-semibold text-zinc-900 mb-6">Kepribadian yang Kontras</h2>
          <p>
            Kepribadian Zero Two sangat kontras. Di permukaan, ia terlihat provokatif, liar, percaya diri, dan manipulatif. Ia menggoda, mengejek, dan sering melanggar aturan. Namun di dalam dirinya, Zero Two adalah makhluk yang sangat rapuh, penuh trauma, dan ketakutan ditinggalkan. Semua sikap agresif dan dominannya adalah mekanisme bertahan hidup dari seorang anak yang sejak kecil hanya mengenal penolakan.
          </p>
          <p>
            Zero Two sangat takut tidak dicintai. Ia takut bahwa jika orang melihat siapa dirinya sebenarnya, mereka akan menjauh. Karena itu, ia memilih untuk menjadi monster daripada ditolak sebagai manusia.
          </p>
        </section>

        {/* Konflik Identitas */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-4 border-t border-zinc-200 pt-16">
          <h2 className="text-3xl font-semibold text-zinc-900 mb-6">Konflik Identitas</h2>
          <p>
            Dalam perkembangan cerita, Zero Two harus menghadapi kenyataan pahit bahwa dirinya tidak akan pernah menjadi manusia sepenuhnya. Ia bukan manusia, bukan juga Klaxosaur. Ia berada di antara dua dunia dan tidak sepenuhnya diterima oleh keduanya. Konflik ini adalah inti dari karakter Zero Two: pencarian identitas di dunia yang memaksakan definisi sempit tentang apa itu "manusia."
          </p>
          <p>
            Hubungannya dengan Hiro berkembang dari obsesif menjadi cinta sejati. Awalnya ia ingin Hiro sebagai simbol keselamatan. Di akhir cerita, ia mencintai Hiro sebagai individu, bahkan rela mengorbankan eksistensinya sendiri.
          </p>
        </section>

        {/* Klimaks dan Transendensi */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-4 border-t border-zinc-200 pt-16">
          <h2 className="text-3xl font-semibold text-zinc-900 mb-6">Klimaks dan Transendensi</h2>
          <p>
            Dalam klimaks cerita, Zero Two dan Hiro menyatu secara biologis dan emosional untuk mengendalikan senjata terakhir umat manusia. Mereka meninggalkan tubuh manusia mereka dan bertarung di tingkat kosmik melawan kekuatan yang ingin mengendalikan seluruh spesies. Mereka tidak lagi bertarung sebagai manusia atau monster, tetapi sebagai dua jiwa yang memilih untuk tetap bersama, bahkan jika itu berarti kehilangan dunia yang mereka kenal.
          </p>
          <p>
            Zero Two akhirnya mati bersama Hiro, tetapi cinta mereka melampaui kematian. Reinkarnasi mereka muncul di dunia baru, sebagai dua anak kecil yang bertemu kembali tanpa perang, tanpa eksperimen, tanpa penderitaan. Itu adalah simbol bahwa cinta mereka akhirnya bebas dari sistem yang menghancurkan mereka.
          </p>
        </section>

        {/* Warisan */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-4 border-t border-zinc-200 pt-16">
          <h2 className="text-3xl font-semibold text-zinc-900 mb-6">Warisan</h2>
          <p>
            Zero Two menjadi ikon budaya pop karena ia mewakili sesuatu yang sangat manusiawi: keinginan untuk diterima apa adanya, meskipun dunia menolak kita. Ia bukan karakter "waifu" biasa. Ia adalah simbol dari trauma, keterasingan, dan cinta yang melawan takdir.
          </p>
          <p>
            Karena itulah Zero Two tetap hidup dalam ingatan penggemar, bukan hanya sebagai karakter, tetapi sebagai metafora tentang apa artinya menjadi manusia di dunia yang tidak peduli pada kemanusiaan.
          </p>
        </section>
      </div>
    </div>
  );
}
