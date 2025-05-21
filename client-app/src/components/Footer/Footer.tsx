import * as React from 'react';

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return <div className='bg-slate-900 text-base text-white py-5 text-center'>
        Copyright &#169; URL Shortner | Devansh Dhopte
    </div>;
};

export default Footer;
