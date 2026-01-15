import Link from 'next/link';

export default function Video() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link href="/" className="inline-block mb-8 text-zinc-600 hover:text-zinc-900 transition-colors">
          ← Kembali
        </Link>
        <h1 className="text-4xl md:text-5xl font-light mb-12 text-zinc-900">Video</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-zinc-600 leading-relaxed">
            Koleksi video dan klip dari Darling in the Franxx akan ditambahkan di sini.
          </p>
        </div>
      </div>
    </div>
  );
}
