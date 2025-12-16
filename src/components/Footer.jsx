const Footer = () => {
  return (
    <div className="flex justify-start items-start w-full gap-4 px-8 pt-8 pb-40 bg-[#d9d9d9] border-t border-[#d9d9d9]">
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[262px] gap-6">
        <div className="flex justify-center items-center">
          <svg
            width="27"
            height="39"
            viewBox="0 0 27 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-9"
          >
            <path
              d="M13.4167 1.75H7.58333C6.03624 1.75 4.55251 2.36458 3.45854 3.45854C2.36458 4.55251 1.75 6.03624 1.75 7.58333C1.75 9.13043 2.36458 10.6142 3.45854 11.7081C4.55251 12.8021 6.03624 13.4167 7.58333 13.4167M13.4167 1.75V13.4167M13.4167 1.75H19.25C20.016 1.75 20.7746 1.90088 21.4823 2.19404C22.1901 2.48719 22.8331 2.91687 23.3748 3.45854C23.9165 4.00022 24.3461 4.64328 24.6393 5.35101C24.9324 6.05875 25.0833 6.81729 25.0833 7.58333C25.0833 8.34938 24.9324 9.10792 24.6393 9.81565C24.3461 10.5234 23.9165 11.1664 23.3748 11.7081C22.8331 12.2498 22.1901 12.6795 21.4823 12.9726C20.7746 13.2658 20.016 13.4167 19.25 13.4167M13.4167 13.4167H7.58333M13.4167 13.4167H19.25M13.4167 13.4167V25.0833M7.58333 13.4167C6.03624 13.4167 4.55251 14.0312 3.45854 15.1252C2.36458 16.2192 1.75 17.7029 1.75 19.25C1.75 20.7971 2.36458 22.2808 3.45854 23.3748C4.55251 24.4688 6.03624 25.0833 7.58333 25.0833M19.25 13.4167C18.484 13.4167 17.7254 13.5675 17.0177 13.8607C16.3099 14.1539 15.6669 14.5835 15.1252 15.1252C14.5835 15.6669 14.1539 16.3099 13.8607 17.0177C13.5675 17.7254 13.4167 18.484 13.4167 19.25C13.4167 20.016 13.5675 20.7746 13.8607 21.4823C14.1539 22.1901 14.5835 22.8331 15.1252 23.3748C15.6669 23.9165 16.3099 24.3461 17.0177 24.6393C17.7254 24.9324 18.484 25.0833 19.25 25.0833C20.016 25.0833 20.7746 24.9324 21.4823 24.6393C22.1901 24.3461 22.8331 23.9165 23.3748 23.3748C23.9165 22.8331 24.3461 22.1901 24.6393 21.4823C24.9324 20.7746 25.0833 20.016 25.0833 19.25C25.0833 18.484 24.9324 17.7254 24.6393 17.0177C24.3461 16.3099 23.9165 15.6669 23.3748 15.1252C22.8331 14.5835 22.1901 14.1539 21.4823 13.8607C20.7746 13.5675 20.016 13.4167 19.25 13.4167ZM7.58333 25.0833C6.03624 25.0833 4.55251 25.6979 3.45854 26.7919C2.36458 27.8858 1.75 29.3696 1.75 30.9167C1.75 32.4638 2.36458 33.9475 3.45854 35.0415C4.55251 36.1354 6.03624 36.75 7.58333 36.75C9.13043 36.75 10.6142 36.1354 11.7081 35.0415C12.8021 33.9475 13.4167 32.4638 13.4167 30.9167V25.0833M7.58333 25.0833H13.4167"
              stroke="#1E1E1E"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex justify-start items-center gap-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.2737 10.1635L23.2023 0H21.0872L13.3313 8.82305L7.14125 0H0L9.3626 13.3433L0 24H2.11504L10.3002 14.6806L16.8388 24H23.98M2.8784 1.5619H6.12769L21.0856 22.5148H17.8355" fill="#1E1E1E" />
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0Z" fill="#1E1E1E" />
            </svg>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.615 3.184C16.011 2.938 7.984 2.939 4.385 3.184C0.488 3.45 0.029 5.804 0 12C0.029 18.185 0.484 20.549 4.385 20.816C7.985 21.061 16.011 21.062 19.615 20.816C23.512 20.55 23.971 18.196 24 12C23.971 5.815 23.516 3.451 19.615 3.184ZM9 16V8L17 11.993L9 16Z" fill="#1E1E1E" />
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.762 24 24 21.761 24 19V5C24 2.239 21.762 0 19 0ZM8 19H5V8H8V19ZM6.5 6.732C5.534 6.732 4.75 5.942 4.75 4.968C4.75 3.994 5.534 3.204 6.5 3.204C7.466 3.204 8.25 3.994 8.25 4.968C8.25 5.942 7.467 6.732 6.5 6.732ZM20 19H17V13.396C17 10.028 13 10.283 13 13.396V19H10V8H13V9.765C14.396 7.179 20 6.988 20 12.241V19Z" fill="#1E1E1E" />
            </svg>
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[262px] relative gap-3">
        <div className="flex flex-col justify-start items-start pb-4">
          <p className="text-base font-semibold text-[#1e1e1e]">O aplikácii</p>
        </div>
        <p className="text-base text-[#1e1e1e] hover:underline cursor-pointer">Ako to funguje</p>
        <p className="text-base text-[#1e1e1e] hover:underline cursor-pointer">Časté otázky</p>
        <p className="text-base text-[#1e1e1e] hover:underline cursor-pointer">Podpora</p>
        <p className="text-base text-[#1e1e1e] hover:underline cursor-pointer">Kontakt</p>
      </div>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[262px] relative gap-3">
        <div className="flex flex-col justify-start items-start pb-4">
          <p className="text-base font-semibold text-[#1e1e1e]">Právne informácie</p>
        </div>
        <p className="text-base text-[#1e1e1e] hover:underline cursor-pointer">Ochrana súkromia</p>
        <p className="text-base text-[#1e1e1e] hover:underline cursor-pointer">Zmluvné podmienky</p>
        <p className="text-base text-[#1e1e1e] hover:underline cursor-pointer">Cookies</p>
      </div>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[262px] relative gap-3">
        <div className="flex flex-col justify-start items-start pb-4">
          <p className="text-base font-semibold text-[#1e1e1e]">Pre vývojárov</p>
        </div>
        <p className="text-base text-[#1e1e1e] hover:underline cursor-pointer">API dokumentácia</p>
        <p className="text-base text-[#1e1e1e] hover:underline cursor-pointer">GitHub</p>
        <p className="text-base text-[#1e1e1e] hover:underline cursor-pointer">Changelog</p>
      </div>
    </div>
  )
}

export default Footer
