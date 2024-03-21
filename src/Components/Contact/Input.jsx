const Input = ({type, id, nameLabel, placeholder }) => {
  return (
    <div>
      <label htmlFor={id}>{nameLabel}</label>
      <input type={type} name={id} id={id} placeholder={placeholder}/>
    </div>
  );
};

export default Input
