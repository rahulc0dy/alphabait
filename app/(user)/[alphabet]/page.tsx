import React from 'react';

const LetterPage = async ({
  params,
}: {
  params: Promise<{ alphabet: string }>;
}) => {
  const { alphabet } = await params;

  return <main className="wrapper">{alphabet}</main>;
};

export default LetterPage;
