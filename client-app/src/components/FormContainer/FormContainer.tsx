import * as React from 'react';
import axios from 'axios';
import { serverUrl } from '../../helpers/Constants';

interface IFormContainerProps {}

const FormContainer: React.FunctionComponent<IFormContainerProps> = () => {
  const [fullUrl, setFullUrl] = React.useState<string>("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(`${serverUrl}/shortUrl`, {
        fullUrl: fullUrl,
      });
      setFullUrl("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='container mx-auto p-2'>
        <div className='bg-banner my-8 rounded-xl bg-cover'>
            <div className='w-full h-full rounded-xl p-20 backdrop-brightness-50'> 
                <h2 className='text-white text-4xl p-6 text-center'> URL Shortner </h2>
                <p className='text-white text-center pb-2 text-xl font-extralight'>
                Paste your long link to shorten it
                </p>
                <p className='text-white text-center pb-4 text-sm font-thin'>
                 Free tool to shorten a URL or reduce link, Use or URL shortner to create a shortened & neat link making it easy to use 
                </p>
                <form onSubmit={handleSubmit}>
                  <div className='flex'>
                    <div className='relative w-full'>
                      <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-slate-800'>
                        urlShortner.link/
                      </div>
                      <input type='text' placeholder='add your link' required className='block w-full p-4 ps-32 text-sm text-gray-900 border-gray-300 rounded-lg bg-white focus: ring-blue-500  focus: border-blue-500'
                      value={fullUrl}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullUrl(e.target.value)}>
                      </input>
                      <button type='submit' className='absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-lg border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300'>
                        Shorten Url
                      </button>
                    </div>
                  </div>
                </form>
            </div>
        </div>
    </div>
  )
};

export default FormContainer;
