import React from 'react';

type Props = {
  className?: string;
};

export default function Logo({ className = '' }: Props) {
  return (
    <img
      src={
        'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=230,fit=crop,q=95/Y4L4Nj5L07hQlgnn/1-dOqb5On1WRhQG98w.png'
      }
      className={className}
      alt={'Starkien Tech logo'}
    ></img>
  );
}
