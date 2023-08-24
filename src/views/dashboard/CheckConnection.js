/* eslint-disable */
import { Detector } from 'react-detect-offline';

const CheckConnection = (props) => {
  const isOnline = navigator.onLine;

  return (
    <div>
      <Detector
        render={({ online }) => (
          online ? (
            // Render the children components when online
            props.children
          ) : (
            // Render the offline message when completely offline
            <div className='message_container container'>
              <div className={'addCart_main_div activ_cart'}>
                <div className='checkmart_css'>
                  <div>
                    <svg
                      className='net_icone'
                      viewBox='0 0 1024 1024'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M64 808c-13.253.004-23.996 10.747-24 24v128c0 13.255 10.745 24 24 24s24-10.745 24-24V832c-.004-13.253-10.747-23.996-24-24zm222.97-192c-13.254.004-23.997 10.747-24 24v320c0 13.255 10.744 24 24 24s24-10.745 24-24V640c-.005-13.253-10.748-23.996-24-24zM512 648c-13.253.004-23.996 10.747-24 24v288c0 13.255 10.745 24 24 24s24-10.745 24-24V672c-.004-13.253-10.747-23.996-24-24zm224 224c-13.253.004-23.996 10.747-24 24v64c0 13.255 10.745 24 24 24s24-10.745 24-24v-64c-.004-13.253-10.747-23.996-24-24zM960 40c-13.253.004-23.996 10.747-24 24v838.063l-176-176V255.97c0-13.256-10.745-24-24-24s-24 10.744-24 24v422.093l-176-176V448c0-13.255-10.745-24-24-24s-24 10.745-24 24v6.063L80.97 47.03c-4.32-4.204-10.225-6.797-16.737-6.797-13.255 0-24 10.745-24 24 0 6.51 2.593 12.417 6.803 16.74L943 977c4.365 4.322 10.37 6.994 16.998 7 3.316-.017 6.47-.68 9.353-1.873l-.164.06c8.754-3.73 14.785-12.252 14.813-22.184V64c-.005-13.254-10.748-23.997-24-24z' />
                    </svg>
                  </div>
                  <div className='message_text'>
                    {isOnline ? (
                      <h2 className='add_cart_text'>The internet connection is slow.</h2>
                    ) : (
                      <h2 className='add_cart_text'>You are not connected to the internet.</h2>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      />
    </div>
  );
};

export default CheckConnection;
