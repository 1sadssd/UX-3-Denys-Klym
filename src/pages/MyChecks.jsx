import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MyChecks = () => {
  const checks = [
    {
      id: 1010,
      workTitle: 'Bakalárska práca - Analýza dát',
      result: 90,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&h=200&fit=crop',
      status: 'success'
    },
    {
      id: 4567,
      workTitle: 'Bakalárska práca - Webové aplikácie',
      result: 65,
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=200&fit=crop',
      status: 'warning'
    },
    {
      id: 6464,
      workTitle: 'Bakalárska práca - Databázové systémy',
      result: 55,
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=200&h=200&fit=crop',
      status: 'danger'
    }
  ]

  const getResultColor = (result, status) => {
    if (status === 'success') return 'text-[#66d575]'
    if (status === 'warning') return 'text-[#e8a302]'
    return 'text-[#da2a2a]'
  }

  return (
    <div className="flex flex-col justify-start items-center min-h-screen w-full bg-white">
      <Header />
      
      <div className="flex flex-col justify-start items-start self-stretch flex-grow gap-12 p-16 bg-white">
        <h1 className="text-2xl font-semibold text-left text-[#1e1e1e]">Moje preverky</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
          {checks.map((check) => (
            <Link
              key={check.id}
              to={`/check/${check.id}`}
              className="flex flex-col justify-start items-start gap-6 p-6 rounded-lg bg-white border border-[#d9d9d9] hover:shadow-xl transition-all hover:scale-105"
            >
              <div className="flex justify-center items-center w-40 h-40 overflow-hidden rounded-lg">
                <img
                  src={check.image}
                  alt={check.workTitle}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-start items-start gap-2">
                <h3 className="text-2xl font-semibold text-left text-[#1e1e1e]">
                  Preverka #{check.id}
                </h3>
                <p className="text-base text-left text-[#757575]">{check.workTitle}</p>
                <p className="text-base text-left">
                  <span className="text-[#757575]">Result: </span>
                  <span className={`font-semibold ${getResultColor(check.result, check.status)}`}>
                    {check.result}%
                  </span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default MyChecks
