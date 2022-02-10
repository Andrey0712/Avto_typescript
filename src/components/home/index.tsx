import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetlistAvto } from '../../action/avtoSale';
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Home: React.FC=()=> {
    
    var dispatch = useDispatch();
    dispatch(GetlistAvto());
    //const {getAvto} = useSelector(state => state.avtoSale);
    const { getAvto } = useTypedSelector(state => state.avtoSale);
        return (
            <>
            <h1 className="text-center">Magaz</h1>
            <div className="offset-2 col-md-8">
            <table className="table table-success table-striped">
                    <thead className="table-primary">
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">name</th>
                            <th scope="col">price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getAvto.map(avto => {
                            
                            return <tr>
                              <td>{avto.id}</td>
                              <td>{avto.name}</td>
                              <td>{avto.price}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>

        </>
            
            
        )
   
}

export default Home