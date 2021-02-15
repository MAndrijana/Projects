import React from 'react';
const Filters = (props) => (
    <div className="col-lg-3 pt-5 filters">
 <div className="row">
                    <div className="col">
                        <p className="h4">Filter by:</p>
                        <div className="border-bottom border-top-0 border-left-0 border-right-0 py-4 show">
                            <a href="javascript:void()" name="Show All" onClick={(name) => props.onButton(name)} onMouseEnter={(e) => props.onHover(e)}  onMouseLeave={(e) => props.leaveHover(e)} className="d-flex justify-content-between"><span className="bolder">Show all</span><span className="badge badge-pill color">{props.counter}</span></a>
                        </div>
                    </div>
                </div>
      <div className="row">
                    <div className="col">
                        <p className="h4 pt-4">Gender</p>
                        <div className="border-bottom border-top-0 border-left-0 border-right-0 py-4 gender">
                            <a href="javascript:void()" name="MALE" onClick={(name) => props.onGender(name)} onMouseEnter={(e) => props.onHover(e)}  onMouseLeave={(e) => props.leaveHover(e)} className="d-flex justify-content-between link"><span>Male</span> <span className="badge badge-pill">{props.countTypeMale('MALE')}</span></a>
                            <a href="javascript:void()" name="FEMALE" onClick={(name) => props.onGender(name)} onMouseEnter={(e) => props.onHover(e)}  onMouseLeave={(e) => props.leaveHover(e)}className="d-flex justify-content-between pt-2 link"><span>Female</span><span className="badge badge-pill">{props.countTypeFemale('FEMALE')}</span></a>
                        </div>
                    </div>
                </div>
    <div className="row">
                    <div className="col">
                        <p className="h4 pt-4">Brand</p>
                        <div className="py-4 brand">
                            <a href="javascript:void()" onClick={(name) => props.onButton(name)} name="LE GRAND BIKES" onMouseEnter={(e) => props.onHover(e)}  onMouseLeave={(e) => props.leaveHover(e)} className="d-flex justify-content-between pb-2 link"><span>LE GRAND BIKES</span><span className="badge badge-pill">{props.countTypeGrandBikes('LE GRAND BIKES')} </span></a>

                            <a href="javascript:void()" onClick={(name) => props.onButton(name)} name="KROSS" onMouseEnter={(e) => props.onHover(e)}  onMouseLeave={(e) => props.leaveHover(e)} className="d-flex justify-content-between pb-2 link"><span>KROSS</span><span className="badge badge-pill">{props.countTypeKross('KROSS')}</span></a>

                            <a href="javascript:void()" onClick={(name) => props.onButton(name)} name="EXPLORER" onMouseEnter={(e) => props.onHover(e)}  onMouseLeave={(e) => props.leaveHover(e)}    className="d-flex justify-content-between pb-2 link"><span>EXPLORER</span><span className="badge badge-pill">{props.countTypeExplorer('EXPOLORER')}</span></a>

                            <a href="javascript:void()" onClick={(name) => props.onButton(name)} name="VISITOR" onMouseEnter={(e) => props.onHover(e)}  onMouseLeave={(e) => props.leaveHover(e)}  className="d-flex justify-content-between pb-2 link"><span>VISITOR</span><span className="badge badge-pill">{props.countTypeVisitor('VISITOR')}</span></a>

                            <a href="javascript:void()" onClick={(name) => props.onButton(name)} name="PONY" onMouseEnter={(e) => props.onHover(e)}  onMouseLeave={(e) => props.leaveHover(e)} className="d-flex justify-content-between pb-2 link"><span>PONY</span><span className="badge badge-pill">{props.countTypePony('PONY')}</span></a>

                            <a href="javascript:void()" onClick={(name) => props.onButton(name)} name="FORCE" onMouseEnter={(e) => props.onHover(e)}  onMouseLeave={(e) => props.leaveHover(e)}  className="d-flex justify-content-between pb-2 link"><span>FORCE</span><span className="badge badge-pill">{props.countTypeForce('FORCE')}</span></a>

                            <a href="javascript:void()" onClick={(name) => props.onButton(name)} name="E-BIKES" onMouseEnter={(e) => props.onHover(e)}  onMouseLeave={(e) => props.leaveHover(e)}  className="d-flex justify-content-between pb-2 link"><span>E-BIKES</span><span className="badge badge-pill">{props.countTypeEBikes('E-BIKES')}</span></a>

                            <a href="javascript:void()" onClick={(name) => props.onButton(name)} name="IDEAL" onMouseEnter={(e) => props.onHover(e)}  onMouseLeave={(e) => props.leaveHover(e)}    className="d-flex justify-content-between link"><span>IDEAL</span><span className="badge badge-pill">{props.countTypeIdeal('IDEAL')}</span></a>        
                        </div>
                    </div>
                </div>
 </div> 
)
export default Filters;


