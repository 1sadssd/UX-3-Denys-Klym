import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const WorkDetail = () => {
  const { id } = useParams()
  const [isExpanded, setIsExpanded] = useState(false)

  const work = {
    id: id,
    title: 'Bakalárska práca - Webové aplikácie',
    description: 'V tejto práci je prezentovaný vývoj moderných webových aplikácií s dôrazom na používateľské rozhranie a funkčnosť. Práca obsahuje prehľad aktuálnych technológií a ich porovnanie.',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop',
    details: 'Práca sa zaoberá analýzou rôznych webových technológií a frameworkov. Obsahuje popis implementácie konkrétnej aplikácie s detailným popisom jednotlivých komponentov a ich funkcií. V záverečnej časti sa nachádzajú výsledky testovania a hodnotenie výkonnosti aplikácie.'
  }

  return (
    <div className="flex flex-col justify-start items-center min-h-screen w-full bg-white">
      <Header />
      
      <div className="flex flex-col justify-start items-start self-stretch flex-grow gap-6 p-16 bg-white">
        <div className="flex justify-start items-start self-stretch gap-16">
          <div className="flex flex-col justify-center items-center flex-grow w-[504px] h-[304px] overflow-hidden rounded-lg">
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-col justify-center items-start flex-grow gap-6">
            <div className="flex flex-col justify-start items-start gap-4">
              <h1 className="text-2xl font-semibold text-left text-[#1e1e1e]">{work.title}</h1>
              <p className="text-base text-left text-[#757575]">{work.description}</p>
            </div>

            <div className="flex flex-col justify-start items-start self-stretch gap-4">
              <div className="flex flex-col justify-start items-start self-stretch gap-2 p-4 rounded-lg bg-white border border-[#d9d9d9]">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex justify-between items-center w-full gap-2"
                >
                  <p className="text-2xl font-semibold text-left text-[#1e1e1e]">Detaily</p>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                  >
                    <path
                      d="M15 12.5L10 7.5L5 12.5"
                      stroke="#1E1E1E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {isExpanded && (
                  <div className="mt-2">
                    <p className="text-base text-left text-[#1e1e1e]">{work.details}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-4">
              <button className="px-6 py-3 rounded-lg bg-[#2c2c2c] text-white hover:bg-[#1a1a1a] transition-colors font-medium">
                Spustiť kontrolu
              </button>
              <Link
                to="/my-checks"
                className="px-6 py-3 rounded-lg bg-neutral-100 border border-[#2c2c2c] text-[#1e1e1e] hover:bg-[#d9d9d9] transition-colors font-medium"
              >
                Zobraziť preverky
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default WorkDetail
