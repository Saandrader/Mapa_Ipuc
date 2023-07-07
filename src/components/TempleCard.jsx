import PropTypes from 'prop-types';

function TempleCard({data, openTempleDetail}){
  const handleOnClick = () =>{
    openTempleDetail(data)
    
  }
    return(
        <>
  <div className="card text-center rounded-2 mb-3" id="cardList" data-bs-dismiss="offcanvas" onClick={handleOnClick}>
  <img src="/logo_ipuc.png" className="card-img-top" alt="..."/>
  <div className="card-body px-1 ">
    <h6 className="card-title mb-2">{data.nombre}</h6>
    <h6 className="card-subtitle text-body-secondary" style={{fontSize:"14px"}} >{data.municipio}</h6>
    {/* <a href="#" className="btn btn-primary stretched-link">Go somewhere</a> */}
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
  </div>
</div>
</>
    )
}
TempleCard.propTypes = {
  data: PropTypes.object.isRequired,
  openTempleDetail: PropTypes.func.isRequired
};

export default TempleCard;