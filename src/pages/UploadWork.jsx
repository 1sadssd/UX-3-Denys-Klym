import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const UploadWork = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState(null)
  const [dragActive, setDragActive] = useState(false)
  const navigate = useNavigate()

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0])
    }
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title && file) {
      // In production, upload file and save work data
      alert('Práca bola úspešne nahraná!')
      navigate('/my-works')
    }
  }

  return (
    <div className="flex flex-col justify-start items-center min-h-screen w-full bg-white">
      <Header />
      
      <div className="flex flex-col justify-start items-start self-stretch flex-grow gap-8 p-16 bg-white max-w-4xl mx-auto w-full">
        <h1 className="text-3xl font-bold text-left text-[#2c2c2c]">Nahrať novú prácu</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-2">
            <label className="text-base font-medium text-[#1e1e1e]">Názov práce</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="px-4 py-3 rounded-lg bg-white border border-[#d9d9d9] text-base text-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-[#2c2c2c]"
              placeholder="Zadajte názov bakalárskej práce"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base font-medium text-[#1e1e1e]">Popis</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="px-4 py-3 rounded-lg bg-white border border-[#d9d9d9] text-base text-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-[#2c2c2c]"
              placeholder="Krátky popis práce..."
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base font-medium text-[#1e1e1e]">Súbor práce (PDF, DOC, DOCX)</label>
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                dragActive ? 'border-[#2c2c2c] bg-[#f5f5f5]' : 'border-[#d9d9d9]'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              {file ? (
                <div className="flex flex-col items-center gap-2">
                  <svg className="w-12 h-12 text-[#2c2c2c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <p className="text-base text-[#1e1e1e] font-medium">{file.name}</p>
                  <button
                    type="button"
                    onClick={() => setFile(null)}
                    className="text-sm text-[#da2a2a] hover:underline"
                  >
                    Odstrániť
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-2">
                  <svg className="w-12 h-12 text-[#757575]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="text-base text-[#757575]">
                    Presuňte súbor sem alebo kliknite pre výber
                  </p>
                  <label className="px-4 py-2 mt-2 text-sm text-white bg-[#2c2c2c] rounded-lg hover:bg-[#1a1a1a] cursor-pointer transition-colors">
                    Vybrať súbor
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-[#2c2c2c] text-white hover:bg-[#1a1a1a] transition-colors font-medium"
            >
              Nahrať prácu
            </button>
            <button
              type="button"
              onClick={() => navigate('/my-works')}
              className="px-6 py-3 rounded-lg bg-neutral-100 border border-[#2c2c2c] text-[#1e1e1e] hover:bg-[#d9d9d9] transition-colors font-medium"
            >
              Zrušiť
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  )
}

export default UploadWork
