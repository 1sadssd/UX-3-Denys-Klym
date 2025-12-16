import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Profile = () => {
  const [name, setName] = useState('Ján')
  const [surname, setSurname] = useState('Novák')
  const [email, setEmail] = useState('jan.novak@example.sk')

  return (
    <div className="flex flex-col justify-start items-center min-h-screen w-full bg-white">
      <Header />
      
      <div className="flex flex-col justify-start items-start self-stretch flex-grow gap-6 p-16 bg-white">
        <div className="flex justify-start items-start self-stretch gap-16">
          <div className="flex flex-col justify-center items-center gap-6">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop"
              alt="Profilová fotka"
              className="w-[223px] h-[223px] rounded-full object-cover border-4 border-[#d9d9d9]"
            />
            <button className="px-4 py-2 text-sm text-[#2c2c2c] border border-[#d9d9d9] rounded-lg hover:bg-[#d9d9d9] transition-colors">
              Zmeniť fotku
            </button>
          </div>

          <div className="flex flex-col justify-start items-start flex-grow gap-6">
            <div className="flex flex-col justify-start items-start gap-4">
              <div className="flex flex-col gap-2 w-full max-w-md">
                <label className="text-base font-medium text-left text-[#1e1e1e]">Meno</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-4 py-3 rounded-lg bg-white border border-[#d9d9d9] text-base text-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-[#2c2c2c]"
                />
              </div>
              <div className="flex flex-col gap-2 w-full max-w-md">
                <label className="text-base font-medium text-left text-[#1e1e1e]">Priezvisko</label>
                <input
                  type="text"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  className="px-4 py-3 rounded-lg bg-white border border-[#d9d9d9] text-base text-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-[#2c2c2c]"
                />
              </div>
              <div className="flex flex-col gap-2 w-full max-w-md">
                <label className="text-base font-medium text-left text-[#1e1e1e]">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3 rounded-lg bg-white border border-[#d9d9d9] text-base text-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-[#2c2c2c]"
                />
              </div>
            </div>
            <div className="flex justify-start items-center gap-4">
              <button className="px-6 py-3 rounded-lg bg-neutral-100 border border-[#2c2c2c] text-base text-[#1e1e1e] hover:bg-[#2c2c2c] hover:text-white transition-colors font-medium">
                Uložiť zmeny
              </button>
              <Link
                to="/my-checks"
                className="px-6 py-3 rounded-lg bg-neutral-100 border border-[#2c2c2c] text-base text-[#1e1e1e] hover:bg-[#2c2c2c] hover:text-white transition-colors font-medium"
              >
                Moje preverky
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Profile
