import React from "react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div>
      <p>Ooops... Something gone wrong. {message}. Pleasy try again Later!</p>
    </div>
  );
};

export default ErrorMessage;
