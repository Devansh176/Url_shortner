import * as React from 'react';

interface IFormContainerProps {
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = () => {
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
            </div>
            
        </div>
    </div>
  )
};

export default FormContainer;
