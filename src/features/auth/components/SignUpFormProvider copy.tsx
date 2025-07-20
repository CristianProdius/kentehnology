import React from 'react';

type Props = {
  children: React.ReactNode;
};

const SingUpFormProvider: React.FC<Props> = ({ children }) => {
  return <div className='signup-form-provider'>sign up</div>;
};

export default SingUpFormProvider;
