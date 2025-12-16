import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-start items-center min-h-screen w-full bg-white">
      <Header />
      
      <div className="flex flex-col justify-start items-start self-stretch flex-grow gap-12 p-16 bg-white">
        <div className="flex flex-col justify-start items-start gap-4">
          <h1 className="text-5xl font-bold text-left text-[#2c2c2c]">Vitajte v systéme kontroly originálnosti</h1>
          <p className="text-xl text-left text-[#757575]">Spravujte svoje bakalárske práce a kontrolujte ich originálnosť</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          <Link
            to="/my-works"
            className="flex flex-col justify-start items-start gap-6 p-6 rounded-lg bg-gradient-to-br from-[#d9d9d9] to-[#b3b3b3] border-2 border-[#757575] hover:shadow-xl transition-all hover:scale-105"
          >
            <div className="flex justify-center items-center w-16 h-16 bg-white rounded-full">
              <svg className="w-8 h-8 text-[#2c2c2c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Moje práce</h3>
              <p className="text-white">Zobrazte a spravujte všetky vaše bakalárske práce</p>
            </div>
          </Link>

          <Link
            to="/my-checks"
            className="flex flex-col justify-start items-start gap-6 p-6 rounded-lg bg-gradient-to-br from-[#66d575] to-[#4a9d56] border-2 border-[#4a9d56] hover:shadow-xl transition-all hover:scale-105"
          >
            <div className="flex justify-center items-center w-16 h-16 bg-white rounded-full">
              <svg className="w-8 h-8 text-[#2c2c2c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Moje preverky</h3>
              <p className="text-white">Prezerajte výsledky kontroly originálnosti vašich prác</p>
            </div>
          </Link>

          <Link
            to="/upload"
            className="flex flex-col justify-start items-start gap-6 p-6 rounded-lg bg-gradient-to-br from-[#2c2c2c] to-[#1a1a1a] border-2 border-[#1a1a1a] hover:shadow-xl transition-all hover:scale-105"
          >
            <div className="flex justify-center items-center w-16 h-16 bg-white rounded-full">
              <svg className="w-8 h-8 text-[#2c2c2c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Nahrať prácu</h3>
              <p className="text-white">Pridajte novú bakalársku prácu na kontrolu</p>
            </div>
          </Link>
        </div>

        <div className="w-full mt-8 p-6 rounded-lg bg-[#f5f5f5] border border-[#d9d9d9]">
          <h2 className="text-2xl font-semibold text-[#2c2c2c] mb-4">Rýchla štatistika</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#2c2c2c]">3</p>
              <p className="text-lg text-[#757575] mt-2">Celkom prác</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#66d575]">2</p>
              <p className="text-lg text-[#757575] mt-2">Dokončené preverky</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#e8a302]">85%</p>
              <p className="text-lg text-[#757575] mt-2">Priemerná originálnosť</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Dashboard
