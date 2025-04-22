import { RssIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center p-5">
      <RssIcon className="text-primary size-10 animate-pulse" />
    </div>
  );
};

export default Loading;
