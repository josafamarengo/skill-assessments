import React from 'react';

interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  name: string;
  value?: string;
}

export default function Input({ onChange, placeholder, ...props }: InputProps & { [key: string]: any}) {
  return (
    <div>
      <input
        className="w-full h-10 px-3 text-base placeholder-gray-600 border-none rounded-lg focus:shadow-outline bg-[#eef3f8]"
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}
