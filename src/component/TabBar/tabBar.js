import React,{Component} from 'react';
import propTypes from 'prop-types'
class TabBar extends Component{
   static propTypes={
       navList:propTypes.array
   }
    render(){
       
        return (<div className='tab-bar-footer'>
            <ul>

            </ul>
        </div> )
    }
}
