//Định nghĩa 1 component, thực chất là 1 hàm mũi tên arrow function
//component = html + css + js

import '../../../public/css/myStyle.css';

const MyComponent = () =>{
  return (
    <>
        <div className="mau_chu">Bé Gảy su kem</div>
        <div style={{color:'red'}} >Bé Tin</div>
        <div >Bé Bon</div>
        <div >Bé Lu</div>
    </>
    
  );
}

export default MyComponent;