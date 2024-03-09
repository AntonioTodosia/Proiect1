

function Footer(){

    function getYear() {
       const year = new Date().getFullYear();
        return year ;
    }
    
    return (
        <p className='center py-5 footer'>Copyright  ©  {getYear()} Manastirea  Biserica Nașterea Sfântului Ioan Botezătorul</p>
        );
}

export default Footer