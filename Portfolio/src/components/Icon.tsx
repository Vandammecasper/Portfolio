
export default ({icon}:{icon:string}) => {
    console.log('the icon is:' + icon)
  return (
    <img src={icon} alt="foto" className="c-icon-hobby"/>
  );
};