import React from "react";
const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' }
    }
) => {
    return(
        <li className="list-group-item list-group-item-action">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle" height={50} src={`/images/${who.avatarIcon}`}/>
                </div>
                <div className="col-7">
                    <div className="fw-bolder">
                        {who.userName} <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div>
                        @{who.handle}
                    </div>
                </div>
                <div className="col-3">
                    <button className="btn btn-primary rounded-pill float-end mt-2">Follow</button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;

// <div className="list-group-item list-group-item-action">
//     <div className="row">
//         <div className="col-2">
//             <img className="rounded-circle" width="50px" src=${who.avatarIcon}>
//         </div>
//         <div className="col-7">
//             <div className="fw-bolder">
//                 ${who.userName} <i className="fa-solid fa-circle-check"></i>
//             </div>
//             <div>
//                 @${who.handle}
//             </div>
//         </div>
//         <div className="col-3">
//             <button className="btn btn-primary rounded-pill mt-2">Follow</button>
//         </div>
//     </div>
// </div>