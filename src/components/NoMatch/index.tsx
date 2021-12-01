
import { Link } from 'react-router-dom'

const NoMatch : React.FC=()=> {
    
        return (
            <div>
    
            <h1 className="text-center">Nothing to see here</h1>
                
                <p>
                    <Link to="/">Goto home page</Link>
                </p>
           
            </div>
            
        )
   
}

export default NoMatch