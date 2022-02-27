import React,{useState} from "react";

const Header = () => {

  const [show,setShow]=useState(false);
  
  return (
    <>
      <nav className="flex header-section items-center justify-between flex-wrap bg-[#000000] p-6 px-20">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            width="22"
            height="22"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_3_2)" filter="url(#filter0_d_3_2)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.001 24.022H15.001L15 5.022L16.016 6.022L17 5.022L17.001 24.022ZM14.221 15.635C12.643 15.125 11.079 15.403 10.113 16.264C8.594 17.618 8.893 19.88 8.893 19.88C8.893 19.88 11.473 20.629 13.002 19.266C14.46 17.966 14.221 15.809 14.221 15.635ZM17.766 15.635C19.344 15.125 20.908 15.403 21.874 16.264C23.393 17.618 23.095 19.88 23.095 19.88C23.095 19.88 20.515 20.629 18.986 19.266C17.527 17.966 17.767 15.809 17.766 15.635ZM22.072 14.487C23.222 13.518 24.631 13.216 25.736 13.608C27.475 14.224 28 16.225 28 16.225C28 16.225 26.09 17.738 24.34 17.118C22.671 16.526 22.132 14.633 22.072 14.487ZM9.928 14.487C8.778 13.518 7.369 13.216 6.264 13.608C4.525 14.224 4 16.225 4 16.225C4 16.225 5.91 17.738 7.66 17.118C9.329 16.526 9.868 14.633 9.928 14.487ZM14.162 14.452C14.415 13.055 14 11.759 13.159 11.038C11.837 9.904 9.952 10.415 9.952 10.415C9.952 10.415 9.611 12.689 10.942 13.831C12.211 14.92 14.014 14.471 14.162 14.452ZM17.838 14.452C17.585 13.055 18 11.759 18.841 11.038C20.163 9.904 22.048 10.415 22.048 10.415C22.048 10.415 22.389 12.689 21.058 13.831C19.789 14.92 17.986 14.471 17.838 14.452ZM22.377 12.105C22.797 10.895 23.697 10.06 24.677 9.865C26.219 9.559 27.475 10.795 27.475 10.795C27.475 10.795 26.735 12.735 25.184 13.043C23.703 13.338 22.485 12.186 22.377 12.105ZM9.623 12.105C9.203 10.895 8.303 10.06 7.323 9.865C5.781 9.559 4.525 10.795 4.525 10.795C4.525 10.795 5.265 12.735 6.816 13.043C8.297 13.338 9.515 12.186 9.623 12.105ZM17.579 9.743C17.555 8.423 18.13 7.296 19.009 6.76C20.391 5.917 22.045 6.667 22.045 6.667C22.045 6.667 22.018 8.806 20.626 9.654C19.299 10.464 17.711 9.782 17.579 9.743ZM14.421 9.743C14.445 8.423 13.87 7.296 12.991 6.76C11.609 5.917 9.955 6.667 9.955 6.667C9.955 6.667 9.982 8.806 11.374 9.654C12.701 10.464 14.289 9.782 14.421 9.743ZM9.633 9.243C9.708 8.078 9.247 7.059 8.493 6.549C7.306 5.747 5.815 6.342 5.815 6.342C5.815 6.342 5.75 8.232 6.944 9.039C8.084 9.809 9.514 9.272 9.633 9.243ZM22.367 9.243C22.292 8.078 22.753 7.059 23.507 6.549C24.694 5.747 26.185 6.342 26.185 6.342C26.185 6.342 26.25 8.232 25.056 9.039C23.916 9.809 22.486 9.272 22.367 9.243ZM18.209 6.288C17.64 5.184 17.656 3.995 18.175 3.177C18.991 1.89 20.699 1.836 20.699 1.836C20.699 1.836 21.565 3.651 20.744 4.946C19.96 6.182 18.337 6.267 18.209 6.288ZM13.791 6.288C14.36 5.184 14.344 3.995 13.825 3.177C13.009 1.89 11.301 1.836 11.301 1.836C11.301 1.836 10.435 3.651 11.256 4.946C12.04 6.182 13.663 6.267 13.791 6.288ZM10.799 5.996C10.862 5.015 10.474 4.158 9.839 3.728C8.841 3.053 7.585 3.554 7.585 3.554C7.585 3.554 7.531 5.145 8.536 5.824C9.495 6.472 10.699 6.021 10.799 5.996ZM21.201 5.996C21.138 5.015 21.526 4.158 22.161 3.728C23.159 3.053 24.415 3.554 24.415 3.554C24.415 3.554 24.469 5.145 23.464 5.824C22.505 6.472 21.301 6.021 21.201 5.996ZM16.039 4.939C15.044 4.272 14.501 3.26 14.557 2.327C14.645 0.859998 16.061 0.0169983 16.061 0.0169983C16.061 0.0169983 17.641 1.145 17.553 2.622C17.468 4.03 16.138 4.86 16.039 4.939Z"
                fill="#005DF9"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_3_2"
                x="0"
                y="0"
                width="32"
                height="32"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_3_2"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_3_2"
                  result="shape"
                />
              </filter>
              <clipPath id="clip0_3_2">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(4)"
                />
              </clipPath>
            </defs>
          </svg>
          <span className="font-semibold text-xl tracking-tight">Workside</span>
        </div>
        <div className="block lg:hidden">
          <button onClick={()=>setShow(!show)} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div style={{display:`${show?"block":"none"}`}} className="w-full lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              className="nitro block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
            >
              Find a job
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
            >
              Submit a job
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white"
            >
              Sponsor Us
            </a>
          </div>
        </div>

        <div style={{display:`${show?"block":"none"}`}}>
          <a
            href="#0"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Download
          </a>
        </div>
      </nav>

   
    </>
  );
};

export default Header;
