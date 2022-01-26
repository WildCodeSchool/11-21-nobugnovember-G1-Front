import chevrondroit from '../assets/chevrondroit.png'
import chevrongauche from '../assets/chevrongauche.png'
import chevroninactif from '../assets/chevroninactif.png'

import './Pagination.css'


const Pagination = ({setNumPage, numPage}) => {

    let changePage = () => {
        setNumPage(numPage + 1)
    }
    let changePagePrev = () => {
        setNumPage(numPage - 1)
    }

    return <div className='paginationContainer'>
            <div className='pagination'> 
            {numPage === 1 ? <div className='page'><img className='chevroninactif' src={chevroninactif} alt="inactif"/></div> : <div className='page' onClick={changePagePrev}> <img className="chevron" src={chevrongauche} alt="Prévious"/> </div>}
            <div className='current'> {numPage}</div>
            <div className='page' onClick={changePage}> <img className="chevron" src={chevrondroit} alt="Next"/> </div> 
            {/* {numPage + 1}</div> */}
            </div>
        </div>
}


export default Pagination