import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MyWorks = () => {
  const works = [
    {
      id: 1,
      title: 'Bakalárska práca - Analýza dát',
      description: 'Táto bakalárska práca sa zaoberá analýzou dát a ich spracovaním pomocou moderných metód a technológií. Práca obsahuje teoretickú časť a praktickú implementáciu.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'Bakalárska práca - Webové aplikácie',
      description: 'V tejto práci je prezentovaný vývoj moderných webových aplikácií s dôrazom na používateľské rozhranie a funkčnosť. Práca obsahuje prehľad aktuálnych technológií a ich porovnanie.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Bakalárska práca - Databázové systémy',
      description: 'Práca pojednáva o návrhu a implementácii databázových systémov s dôrazom na efektívnosť a bezpečnosť. Obsahuje porovnanie rôznych databázových riešení a ich aplikácie v praxi.',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=400&fit=crop'
    }
  ]

  return (
    <div className="flex flex-col justify-start items-center min-h-screen w-full bg-white">
      <Header />
      
      <div className="flex flex-col justify-start items-start self-stretch flex-grow gap-12 p-16 bg-white">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-2xl font-semibold text-left text-[#1e1e1e]">Cvičenia</h1>
          <Link
            to="/upload"
            className="px-6 py-3 rounded-lg bg-[#2c2c2c] text-white hover:bg-[#1a1a1a] transition-colors font-medium"
          >
            + Pridať prácu
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
          {works.map((work) => (
            <Link
              key={work.id}
              to={`/work/${work.id}`}
              className="flex flex-col justify-start items-start gap-6 p-6 rounded-lg bg-[#b3b3b3] border-[3px] border-[#757575] hover:shadow-xl transition-all hover:scale-105"
            >
              <div className="flex justify-center items-center w-40 h-40 overflow-hidden rounded-lg">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-start items-start gap-2">
                <h3 className="text-2xl font-semibold text-left text-white">{work.title}</h3>
                <p className="text-base text-left text-white line-clamp-3">{work.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default MyWorks
