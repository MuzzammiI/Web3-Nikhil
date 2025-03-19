const Button = ({ children, onClick, className }) => {
    return (
      <button
        className={`bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  