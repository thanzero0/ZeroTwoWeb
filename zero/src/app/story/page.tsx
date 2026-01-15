import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '../components/AnimatedSection';

export default function Story() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link href="/" className="inline-block mb-8 text-zinc-600 hover:text-zinc-900 transition-colors">
          ← Kembali
        </Link>
        <h1 className="text-4xl md:text-5xl font-light mb-12 text-zinc-900">Story</h1>

        {/* Introduction */}
        <section className="prose prose-lg max-w-none mb-16">
          <p className="text-zinc-700 leading-relaxed text-lg">
            Zero Two adalah salah satu karakter anime paling ikonik dan kompleks yang pernah muncul dalam dunia anime modern, khususnya setelah kemunculannya dalam seri <strong className="font-medium text-zinc-900">Darling in the Franxx</strong> yang tayang pada tahun 2018. Ia bukan hanya karakter utama wanita, tetapi juga simbol dari tema besar cerita: identitas, keterasingan, cinta, dan konflik antara kemanusiaan dan naluri.
          </p>
        </section>

        {/* Dunia Distopia */}
        <AnimatedSection className="border-t border-zinc-200 pt-16 pb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-zinc-900">Dunia Distopia</h2>
          <div className="flex gap-6 items-start">
            <div className="prose prose-lg max-w-none flex-1">
              <p className="text-zinc-700 leading-relaxed text-lg mb-6">
                Zero Two hidup di dunia distopia masa depan di mana umat manusia bertahan hidup dengan mengorbankan kebebasan, emosi, dan hubungan alami. Dunia ini dipenuhi oleh struktur sosial kaku, di mana anak-anak diciptakan dan dibesarkan hanya untuk menjadi pilot robot tempur bernama <strong className="font-medium text-zinc-900">Franxx</strong>, yang digunakan untuk melawan makhluk raksasa bernama <strong className="font-medium text-zinc-900">Klaxosaur</strong>. Anak-anak ini tidak memiliki keluarga, tidak memiliki masa kecil normal, dan tidak memiliki masa depan selain bertarung sampai mati.
              </p>
              <Link href="/story/dunia-distopia" className="inline-block mt-4 px-6 py-2 bg-zinc-900 text-white rounded-lg button-hover">
                Rincian Lengkap →
              </Link>
            </div>
            <div className="flex-shrink-0">
              <Image 
                src="/zerotwo-photos/zero-two-1.jpeg" 
                alt="Zero Two" 
                width={250} 
                height={250} 
                className="rounded-lg shadow-lg image-hover"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Bukan Manusia Seutuhnya */}
        <AnimatedSection className="border-t border-zinc-200 pt-16 pb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-zinc-900">Bukan Manusia Seutuhnya</h2>
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0">
              <Image 
                src="/zerotwo-photos/Zero-two-2.jpeg" 
                alt="Zero Two" 
                width={250} 
                height={250} 
                className="rounded-lg shadow-lg image-hover"
              />
            </div>
            <div className="prose prose-lg max-w-none flex-1">
              <p className="text-zinc-700 leading-relaxed text-lg mb-6">
                Zero Two bukan manusia sepenuhnya. Ia adalah hasil eksperimen antara manusia dan Klaxosaur Princess, menjadikannya makhluk hibrida. Tubuhnya terlihat seperti manusia perempuan remaja, tetapi ia memiliki <strong className="font-medium text-zinc-900">tanduk merah kecil di kepala</strong>, <strong className="font-medium text-zinc-900">mata hijau tajam</strong>, dan <strong className="font-medium text-zinc-900">darah biru</strong> yang menandakan bahwa ia bukan manusia murni. Karena perbedaan ini, sejak kecil ia selalu dianggap sebagai monster, bukan sebagai anak. Ia dipenjara, dijadikan objek penelitian, dan diperlakukan sebagai alat militer, bukan sebagai individu.
              </p>
              <Link href="/story/bukan-manusia-seutuhnya" className="inline-block mt-4 px-6 py-2 bg-zinc-900 text-white rounded-lg button-hover">
                Rincian Lengkap →
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Masa Kecil yang Sepi */}
        <AnimatedSection className="border-t border-zinc-200 pt-16 pb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-zinc-900">Masa Kecil yang Sepi</h2>
          <div className="flex gap-6 items-start">
            <div className="prose prose-lg max-w-none flex-1">
              <p className="text-zinc-700 leading-relaxed text-lg mb-6">
                Pada masa kecilnya, Zero Two hidup dalam kesepian ekstrem. Ia tidak tahu apa itu kasih sayang. Ia hanya tahu bahwa dirinya berbeda dan dibenci. Semua ini berubah ketika ia bertemu dengan seorang anak laki-laki bernama <strong className="font-medium text-zinc-900">Hiro</strong> saat mereka masih sangat kecil. Hiro tidak takut padanya. Hiro memberinya sebuah buku bergambar tentang dunia luar, tentang burung, tentang langit, dan tentang kebebasan. Untuk pertama kalinya, Zero Two merasa diperlakukan sebagai manusia.
              </p>
              <p className="text-zinc-700 leading-relaxed text-lg mb-6">
                Hiro adalah satu-satunya orang yang tidak melihat Zero Two sebagai monster. Dari titik itu, Zero Two membangun seluruh identitas emosionalnya di sekitar Hiro. Ia ingin menjadi manusia agar bisa bersama Hiro. Ia ingin hidup seperti gadis biasa. Ia ingin dicintai.
              </p>
              <p className="text-zinc-700 leading-relaxed text-lg mb-6">
                Namun takdir memisahkan mereka. Hiro kemudian kehilangan ingatannya, sementara Zero Two mengingat semuanya. Sejak saat itu, Zero Two hidup dengan satu tujuan obsesif: menemukan kembali Hiro dan menjadi cukup manusia agar pantas berada di sisinya.
              </p>
              <Link href="/story/masa-kecil-yang-sepi" className="inline-block mt-4 px-6 py-2 bg-zinc-900 text-white rounded-lg button-hover">
                Rincian Lengkap →
              </Link>
            </div>
            <div className="flex-shrink-0">
              <Image 
                src="/zerotwo-photos/zero-two-3.gif" 
                alt="Zero Two" 
                width={250} 
                height={250} 
                className="rounded-lg shadow-lg image-hover animate-float"
                unoptimized
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Partner Killer */}
        <AnimatedSection className="border-t border-zinc-200 pt-16 pb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-zinc-900">Partner Killer</h2>
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0">
              <Image 
                src="/zerotwo-photos/zero-two-4.gif" 
                alt="Zero Two" 
                width={250} 
                height={250} 
                className="rounded-lg shadow-lg image-hover animate-float"
                unoptimized
              />
            </div>
            <div className="prose prose-lg max-w-none flex-1">
              <p className="text-zinc-700 leading-relaxed text-lg mb-6">
                Dalam dunia Franxx, pilot harus bekerja berpasangan pria dan wanita, dan sinkronisasi emosional mereka menentukan kekuatan robot. Zero Two memiliki kemampuan luar biasa dalam bertarung, tetapi ada harga yang harus dibayar. Siapa pun yang menjadi partner Zero Two akan perlahan mati karena tubuhnya tidak mampu menahan sinkronisasi dengan darah Klaxosaur dalam dirinya. Karena itu, ia dijuluki <strong className="font-medium text-zinc-900">"Partner Killer."</strong>
              </p>
              <p className="text-zinc-700 leading-relaxed text-lg mb-6">
                Zero Two tahu ini. Ia tahu orang-orang mati karena dirinya. Tetapi ia tidak peduli. Dalam pikirannya, semua partner selain Hiro hanyalah alat. Ia menggunakan mereka untuk membunuh Klaxosaur agar dirinya semakin dekat dengan evolusi menjadi manusia sejati.
              </p>
              <Link href="/story/partner-killer" className="inline-block mt-4 px-6 py-2 bg-zinc-900 text-white rounded-lg button-hover">
                Rincian Lengkap →
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Pertemuan Kembali */}
        <AnimatedSection className="border-t border-zinc-200 pt-16 pb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-zinc-900">Pertemuan Kembali</h2>
          <div className="flex gap-6 items-start">
            <div className="prose prose-lg max-w-none flex-1">
              <p className="text-zinc-700 leading-relaxed text-lg mb-6">
                Saat ia akhirnya bertemu kembali dengan Hiro, takdir kembali bergerak. Hiro adalah satu-satunya orang yang mampu bertahan sebagai partner Zero Two tanpa mati. Hubungan mereka bukan hanya romantis, tetapi bersifat eksistensial. Hiro memberi Zero Two identitas sebagai manusia. Zero Two memberi Hiro tujuan hidup.
              </p>
              <Link href="/story/pertemuan-kembali" className="inline-block mt-4 px-6 py-2 bg-zinc-900 text-white rounded-lg button-hover">
                Rincian Lengkap →
              </Link>
            </div>
            <div className="flex-shrink-0">
              <Image 
                src="/zerotwo-photos/zero-two-5.jpg" 
                alt="Zero Two" 
                width={250} 
                height={250} 
                className="rounded-lg shadow-lg image-hover"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Kepribadian yang Kontras */}
        <AnimatedSection className="border-t border-zinc-200 pt-16 pb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-zinc-900">Kepribadian yang Kontras</h2>
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0">
              <Image 
                src="/zerotwo-photos/zero-two-6.jpg" 
                alt="Zero Two" 
                width={250} 
                height={250} 
                className="rounded-lg shadow-lg image-hover"
              />
            </div>
            <div className="prose prose-lg max-w-none flex-1">
              <p className="text-zinc-700 leading-relaxed text-lg mb-6">
                Kepribadian Zero Two sangat kontras. Di permukaan, ia terlihat provokatif, liar, percaya diri, dan manipulatif. Ia menggoda, mengejek, dan sering melanggar aturan. Namun di dalam dirinya, Zero Two adalah makhluk yang sangat rapuh, penuh trauma, dan ketakutan ditinggalkan. Semua sikap agresif dan dominannya adalah mekanisme bertahan hidup dari seorang anak yang sejak kecil hanya mengenal penolakan.
              </p>
              <p className="text-zinc-700 leading-relaxed text-lg mb-6">
                Zero Two sangat takut tidak dicintai. Ia takut bahwa jika orang melihat siapa dirinya sebenarnya, mereka akan menjauh. Karena itu, ia memilih untuk menjadi monster daripada ditolak sebagai manusia.
              </p>
              <Link href="/story/kepribadian-yang-kontras" className="inline-block mt-4 px-6 py-2 bg-zinc-900 text-white rounded-lg button-hover">
                Rincian Lengkap →
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Konflik Identitas */}
        <AnimatedSection className="border-t border-zinc-200 pt-16 pb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-zinc-900">Konflik Identitas</h2>
          <div className="flex gap-6 items-start">
            <div className="prose prose-lg max-w-none flex-1">
              <p className="text-zinc-700 leading-relaxed text-lg mb-6">
                Dalam perkembangan cerita, Zero Two harus menghadapi kenyataan pahit bahwa dirinya tidak akan pernah menjadi manusia sepenuhnya. Ia bukan manusia, bukan juga Klaxosaur. Ia berada di antara dua dunia dan tidak sepenuhnya diterima oleh keduanya. Konflik ini adalah inti dari karakter Zero Two: pencarian identitas di dunia yang memaksakan definisi sempit tentang apa itu "manusia."
              </p>
              <p className="text-zinc-700 leading-relaxed text-lg mb-6">
                Hubungannya dengan Hiro berkembang dari obsesif menjadi cinta sejati. Awalnya ia ingin Hiro sebagai simbol keselamatan. Di akhir cerita, ia mencintai Hiro sebagai individu, bahkan rela mengorbankan eksistensinya sendiri.
              </p>
              <Link href="/story/konflik-identitas" className="inline-block mt-4 px-6 py-2 bg-zinc-900 text-white rounded-lg button-hover">
                Rincian Lengkap →
              </Link>
            </div>
            <div className="flex-shrink-0">
              <Image 
                src="/zerotwo-photos/zero-two-7.gif" 
                alt="Zero Two" 
                width={250} 
                height={250} 
                className="rounded-lg shadow-lg image-hover animate-float"
                unoptimized
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Klimaks dan Transendensi */}
        <AnimatedSection className="border-t border-zinc-200 pt-16 pb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-zinc-900">Klimaks dan Transendensi</h2>
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0">
              <Image 
                src="/zerotwo-photos/zero-two-8.gif" 
                alt="Zero Two" 
                width={250} 
                height={250} 
                className="rounded-lg shadow-lg image-hover animate-float"
                unoptimized
              />
            </div>
            <div className="prose prose-lg max-w-none flex-1">
              <p className="text-zinc-700 leading-relaxed text-lg mb-6">
                Dalam klimaks cerita, Zero Two dan Hiro menyatu secara biologis dan emosional untuk mengendalikan senjata terakhir umat manusia. Mereka meninggalkan tubuh manusia mereka dan bertarung di tingkat kosmik melawan kekuatan yang ingin mengendalikan seluruh spesies. Mereka tidak lagi bertarung sebagai manusia atau monster, tetapi sebagai dua jiwa yang memilih untuk tetap bersama, bahkan jika itu berarti kehilangan dunia yang mereka kenal.
              </p>
              <p className="text-zinc-700 leading-relaxed text-lg mb-6">
                Zero Two akhirnya mati bersama Hiro, tetapi cinta mereka melampaui kematian. Reinkarnasi mereka muncul di dunia baru, sebagai dua anak kecil yang bertemu kembali tanpa perang, tanpa eksperimen, tanpa penderitaan. Itu adalah simbol bahwa cinta mereka akhirnya bebas dari sistem yang menghancurkan mereka.
              </p>
              <Link href="/story/klimaks-dan-transendensi" className="inline-block mt-4 px-6 py-2 bg-zinc-900 text-white rounded-lg button-hover">
                Rincian Lengkap →
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Warisan */}
        <AnimatedSection className="border-t border-zinc-200 pt-16 pb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-zinc-900">Warisan</h2>
          <div className="flex gap-6 items-start">
            <div className="prose prose-lg max-w-none flex-1">
              <p className="text-zinc-700 leading-relaxed text-lg mb-6">
                Zero Two menjadi ikon budaya pop karena ia mewakili sesuatu yang sangat manusiawi: keinginan untuk diterima apa adanya, meskipun dunia menolak kita. Ia bukan karakter "waifu" biasa. Ia adalah simbol dari trauma, keterasingan, dan cinta yang melawan takdir.
              </p>
              <p className="text-zinc-700 leading-relaxed text-lg mb-6">
                Karena itulah Zero Two tetap hidup dalam ingatan penggemar, bukan hanya sebagai karakter, tetapi sebagai metafora tentang apa artinya menjadi manusia di dunia yang tidak peduli pada kemanusiaan.
              </p>
              <Link href="/story/warisan" className="inline-block mt-4 px-6 py-2 bg-zinc-900 text-white rounded-lg button-hover">
                Rincian Lengkap →
              </Link>
            </div>
            <div className="flex-shrink-0">
              <Image 
                src="/zerotwo-photos/zero-two-3.gif" 
                alt="Zero Two" 
                width={250} 
                height={250} 
                className="rounded-lg shadow-lg image-hover animate-float"
                unoptimized
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
