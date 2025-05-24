export default function StoryDetail({ params }) {
  const { id } = params;

  // Statik bir hikaye listesi (örnek veri)
  const stories = [
    {
      id: '1',
      title: 'Kayıp Şehir',
      author: 'Alex',
      content: 'Bir maceracı, ormanda gizli bir şehir keşfeder. Bu şehir, yıllardır kayıp olan bir medeniyetin kalıntılarını barındırıyordu. Maceracı, şehirdeki sırları çözmeye çalışırken beklenmedik tehlikelerle karşılaşır...',
    },
    {
      id: '2',
      title: 'Yıldızlı Geceler',
      author: 'Maya',
      content: 'Yıldızların altında romantik bir hikaye. İki genç, bir yaz gecesinde tanışır ve birbirlerine aşık olur. Ancak ailelerinin geçmişindeki sırlar, bu aşkı tehdit etmeye başlar...',
    },
    {
      id: '3',
      title: 'Ejderhanın İni',
      author: 'Sam',
      content: 'Cesur bir şövalye, vahşi bir ejderhayla yüzleşir. Ejderha, köyü yıllardır korku içinde tutmaktadır. Şövalye, köylüleri kurtarmak için ejderhanın inine doğru tehlikeli bir yolculuğa çıkar...',
    },
  ];

  // ID'ye göre hikayeyi bul
  const story = stories.find((s) => s.id === id);

  if (!story) {
    return (
      <div className="bg-accent min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-secondary mb-4">Hikaye Bulunamadı</h1>
          <a href="/" className="text-primary hover:underline">
            Ana Sayfaya Dön
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-accent min-h-screen">
      <div className="bg-hero-gradient text-center py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-4">{story.title}</h1>
          <p className="text-xl text-gray-200 mb-4">Yazar: {story.author}</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-gray-700 leading-relaxed">{story.content}</p>
        </div>
        <div className="mt-6 text-center">
          <a
            href="/"
            className="inline-block bg-primary text-white font-semibold py-3 px-8 rounded-lg hover:bg-orange-600 transition shadow-md"
          >
            Ana Sayfaya Dön
          </a>
        </div>
      </div>
    </div>
  );
}