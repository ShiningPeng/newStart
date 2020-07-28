import React, { useEffect, useRef, memo } from 'react';
import { connect } from 'react-redux';
import { NavContainer } from './style';
import { categoryTypes, alphaTypes } from '../../api/config';
import Horizen from '../../baseUI/horizen-item/index';


function Singers (props) {
  const { category, alhpa } = props;
  const handleUpdateAlpha = () => {

  }
  const handleUpdateCategory = () => {
    
  }
  return (
    <div>
      <NavContainer>
        <Horizen title="分类（默认热门）:" list={categoryTypes} handleClick={(v) => handleUpdateCategory(v) } oldValue={category}/>
        <Horizen title="首字母:" list={alphaTypes} handleClick={(v) => handleUpdateAlpha(v) } oldValue={alhpa}/>
      </NavContainer>
    </div>
  )
}


const mapStateToProps = (state) => ({
  category: state.singers.category,
  alpha: state.singers.alpha
})
const matDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps, matDispatchToProps)(memo(Singers));