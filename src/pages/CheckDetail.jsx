import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const CheckDetail = () => {
  const { id } = useParams()
  const [isExpanded, setIsExpanded] = useState(false)

  const check = {
    id: id,
    workTitle: 'Bakalárska práca - Webové aplikácie',
    result: 65,
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop',
    errors: 'V práci boli zistené niektoré pasáže, ktoré vykazujú podobnosť s inými zdrojmi. Odporúča sa prepracovať tieto časti a doplniť vlastné analýzy a závery. Konkrétne sa jedná o úvodné kapitoly, kde je potrebné lepšie zdôvodniť vlastný prístup a metódy použité v práci.'
  }

  const getResultColor = (result) => {
    if (result >= 80) return { bg: 'bg-[#66d575]', text: 'text-[#3d7a47]' }
    if (result >= 60) return { bg: 'bg-[#e8a302]', text: 'text-[#975102]' }
    return { bg: 'bg-[#da2a2a]', text: 'text-[#8a1f1f]' }
  }

  const colors = getResultColor(check.result)

  return (
    <div className="flex flex-col justify-start items-center min-h-screen w-full bg-white">
      <Header />
      
      <div className="flex flex-col justify-start items-start self-stretch flex-grow gap-6 p-16 bg-white">
        <div className="flex justify-start items-start self-stretch gap-16">
          <div className="flex flex-col justify-center items-center flex-grow w-[504px] h-[303px] overflow-hidden rounded-lg">
            <img
              src={check.image}
              alt={check.workTitle}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-col justify-center items-start flex-grow gap-6">
            <div className="flex flex-col justify-start items-start gap-4">
              <h1 className="text-2xl font-semibold text-left text-[#1e1e1e]">
                Preverka #{check.id}
              </h1>
              <div className="flex flex-col justify-center items-start gap-1">
                <div className={`flex justify-center items-center gap-2 px-4 py-2 rounded-lg ${colors.bg}`}>
                  <p className={`text-base font-medium ${colors.text}`}>Body</p>
                </div>
                <div className="flex justify-center items-end">
                  <p className={`text-5xl font-bold ${colors.text}`}>{check.result}%</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-start items-start self-stretch gap-4">
              <div className="flex flex-col justify-start items-start self-stretch gap-2 p-4 rounded-lg bg-white border border-[#d9d9d9]">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex justify-between items-center w-full gap-2"
                >
                  <p className="text-base font-semibold text-left text-[#1e1e1e]">Chyby:</p>
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
                    <p className="text-base text-left text-[#1e1e1e]">{check.errors}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-4">
              <button className="px-6 py-3 rounded-lg bg-[#2c2c2c] text-white hover:bg-[#1a1a1a] transition-colors font-medium">
                Stiahnuť správu
              </button>
              <button className="px-6 py-3 rounded-lg bg-neutral-100 border border-[#2c2c2c] text-[#1e1e1e] hover:bg-[#d9d9d9] transition-colors font-medium">
                Znovu spustiť kontrolu
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CheckDetail
