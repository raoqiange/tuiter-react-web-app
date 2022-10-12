const postItem = (post) => {
    return (`
        <li class="list-group-item">
            <div class="row">
                <div class="col-1">
                    <img class="rounded-circle" style="width: 45px" src=${post.avatarIcon}>
                </div>
                <div class="col-11 ps-4">
                    <div class="row">
                        <div class="row pe-0">
                            <div class="col-11">
                                <span class="fw-bolder">${post.userName}</span> 
                                <i class="fa-solid fa-circle-check"></i>
                                <span class="text-secondary"> @${post.handle} - ${post.time}</span>
                            </div>
                            <div class="col-1 pe-0">
                                <span class="float-end text-secondary fw-bolder">&#8230;</span>
                            </div>
                        </div>
                    </div>
                    <div>${post.content}</div>
                    
                    <div class="card mt-2 border border-secondary rounded-4">
                      <img src=${post.image} class="card-img-top rounded-4" alt="...">
                      ${post.newTitle || post.newsContent || post.newsLink ?
                          `<div class="card-body border-top border-secondary p-3">
                            ${post.newTitle ? `<p class="card-text mb-0">${post.newTitle}</p>` : ``}
                            ${post.newsContent ? `<p class="text-secondary mb-0">${post.newsContent}</p>` : ``}
                            ${post.newsContent ? `<p class="text-secondary mb-0"><i class="fa-solid fa-link"></i>${post.newsLink}</p>` : ``}
                          </div>` 
                      : ``}
        
                    </div>
                    
                    <div class="row mt-2">
                        <div class="col-3">
                            <a class="text-secondary text-decoration-none" href="#"><i class="fa-regular fa-comment"></i><span class="ms-3">${post.comment}</span></a>
                        </div>
                        <div class="col-3">
                            <a class="text-secondary text-decoration-none" href="#"><i class="fa-solid fa-retweet"></i><span class="ms-3">${post.share}</span></a>
                        </div>
                        <div class="col-3">
                            <a class="text-secondary text-decoration-none" href="#" class="wd-liked"><i class="fa-solid fa-heart"></i><span class="ms-3">${post.like}</span></a>
                        </div>
                        <div class="col-3">
                            <a class="text-secondary text-decoration-none" href="#"><i class="fa-solid fa-arrow-up-from-bracket"></i></a>
                        </div>
                          
                    </div>
                </div>
            
            </div>
        </li>
    `)
}

export default postItem;